
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import mdx_store from "../mdx_store";
const mdxDir = path.join(process.cwd(), 'mdx');
const storeDir = path.join(process.cwd(), 'mdx_store');
const mdx_file_extension = '.mdx';
import crypto from 'crypto'
let STORE = {}
/**
 * 获取目录中所有的mdx文件
 * @returns 
 */
function getAllMdxInDirectory() {
    const fileNames = fs.readdirSync(mdxDir);
    return fileNames.map(fileName => path.parse(fileName)).filter(fileInfo => fileInfo.ext == mdx_file_extension)
}


/**
 * s
 * @returns 
 */
export function getAllNextJSPath() {
    const allMdxFiles = getAllMdxInDirectory();
    return allMdxFiles.map((parsedFile) => {
        return {
            params: {
                id: parsedFile.name
            }
        }
    })
}

/**
 * 此方法只有编译时会被调用
 * 读取获取所有的文件信息
 * 并排序
 * @returns 
 */
export function getAllMdxFileContent(): MdxList {
    const mdxFiles = getAllMdxInDirectory()
    let result = mdxFiles.map(file => {
        const fileContent = fs.readFileSync(path.resolve(mdxDir, file.base))
        const { data, content } = matter(fileContent);
        let metaData = data as any;
        return syncMetaData(metaData, file.name, content)
    }).sort((a,b)=>b.metaData.lastUpdate-a.metaData.lastUpdate)
    writeInStore()

    return result
}

function writeFile(fileName: string, content: string) {
    fs.writeFileSync(path.resolve(mdxDir, `${fileName}${mdx_file_extension}`), content, { encoding: "utf8" })
}

function syncMetaData(metaData: MetaData & {
    [key: string]: any;
}, fileName: string, content: string) {

    let newMd5Key = genMd5Key(content);
    if (mdx_store[fileName]) {
        let oldMd5Key = genMd5Key(mdx_store[fileName])

        // 判断是否有更新
        if (newMd5Key == oldMd5Key) return {
            metaData,
            content
        };
        mdx_store[fileName] = newMd5Key;

        let newMetaData = {
            ...metaData, lastUpdate: Date.now()
        }
        // 有更新
        let newFileContent = matter.stringify(content, newMetaData)

        // 写入文件
        writeFile(fileName, newFileContent)
        return {
            content,
            metaData: newMetaData
        }
    } else {
        mdx_store[fileName] = newMd5Key
        let newMetaData = {
            ...metaData,
            id: fileName,
            create: Date.now(),
            lastUpdate: Date.now()
        }
        let newFileContent = matter.stringify(content, newMetaData)
        writeFile(fileName, newFileContent)
        return {
            content,
            metaData: newMetaData
        }
    }
}

function writeInStore() {
    let str = `export default ${JSON.stringify(mdx_store)} as { [key: string]: string }`
    fs.writeFileSync(path.resolve(storeDir, 'index.ts'), str)
}

function genMd5Key(str: string) {
    // 规定使用哈希算法中的MD5算法
    const hash = crypto.createHash('md5');
    hash.update(str);
    //输出的格式为16进制
    return hash.digest('hex');
}
export function getMdxFileContent(id: string) {
    const fileContent = fs.readFileSync(path.join(mdxDir, `${id}${mdx_file_extension}`))
    const { data, content } = matter(fileContent);
    let metaData = data;
    metaData['id'] = id;
    return { metaData, content };
}

export function getMdxTags() {
    const contentList = getAllMdxFileContent()

    let result: { typeName: string, children: { title: string, id: string }[] }[] = []
    contentList.forEach(item => {
        const { metaData: { tags } } = item
        tags.forEach(tagName => {
            const find = result.find(k => k.typeName === tagName)
            const tempt = {
                id: item.metaData.id,
                title: item.metaData.title,
            }
            if (find) {
                find.children.push(tempt)
            } else {
                result.push({
                    typeName: tagName,
                    children: [tempt],
                })
            }
        })
    })
    return result
}

export type MetaData = {
    id: string
    title: string
    description: string
    create: number
    lastUpdate: number
    tags: string[]
    keywords: string[]
}

export type MdxFileContent = {
    metaData: MetaData
    content: string
}
export type MdxList = MdxFileContent[]

