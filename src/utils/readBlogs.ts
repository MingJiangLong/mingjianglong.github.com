import { ensureDir, lstat, readdir, readFile, writeFile } from "fs-extra";
import path from "path";
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter'; // 用于解析 Front Matter
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import dayjs from "dayjs";
import md5 from 'md5'
import { writeFileSync } from "fs";



/**
 * 
 * @param columnName 
 * @param fileName 
 * @returns 
 */
export async function readColumnBlog(columnName: string, fileName: string) {
    const filePath = path.join(process.cwd(), "src/mdx", columnName, fileName)
    if (!isMdxFile(filePath)) throw new Error(`${filePath}不是一个mdx文件!`)
    const fileContent = await readFile(filePath, "utf-8");
    const { data: frontMatter, content } = matter(fileContent)
    const serializeResult = await serialize(content, { mdxOptions: { format: "mdx" }, parseFrontmatter: false })

    return {
        fileName: fileName,
        frontMatter,
        serializeResult
    }
}

export async function isMdxFile(path: string) {
    const stats = await lstat(path)
    return path.endsWith(".mdx") && stats.isFile()
}


/**
 * 读取专栏mdx文件
 * @param columnName 
 * @returns 
 */
export async function readColumnBlogsName(columnName: string) {
    const dirPath = path.join(process.cwd(), "src/mdx", columnName)
    await ensureDir(dirPath)
    const fileNames = await readdir(dirPath);
    return fileNames.filter(fileName => {
        const filePath = path.join(dirPath, fileName);
        return isMdxFile(filePath)
    })
}
/**
 * 读取专栏下所有的blog文件
 * @param columnName 
 * @returns 
 */
export async function readColumnBlogs(columnName: string) {
    const dirPath = path.join(process.cwd(), "src/mdx", columnName)
    await ensureDir(dirPath)

    const fileNames = await readdir(dirPath);

    const blogInfoArr: I_BlogInfo[] = []
    for (const fileName of fileNames) {
        const filePath = path.join(dirPath, fileName);
        if (!isMdxFile(filePath)) continue;
        const fileContent = await readFile(filePath, "utf-8");
        let { data: frontMatter, content } = matter(fileContent)
        const source = await serialize(content)

        const md5Tag = md5(source?.compiledSource)
        if (frontMatter?.md5 != md5Tag) {

            if (frontMatter?.md5 != undefined) {
                frontMatter.updateTime = dayjs().format("YYYY-MM-DD HH:mm:ss")
            }
            frontMatter.md5 = md5Tag
            if (frontMatter?.createTime == undefined) {
                frontMatter.createTime = dayjs().format("YYYY-MM-DD HH:mm:ss")
            }
        }
        const newFileContent = matter.stringify(content, frontMatter)
        writeFileSync(filePath, newFileContent)
        blogInfoArr.push({
            fileName: fileName,
            frontMatter,
            serializeResult: source
        })
    }


    let haveLevelBlogInfoArr: I_BlogInfo[] = []
    let haveCreateTimeBlogInfoArr: I_BlogInfo[] = []
    let haveUpdateTimeBlogInfoArr: I_BlogInfo[] = []
    let leftBlogInfoArr: I_BlogInfo[] = []


    for (let blogInfo of blogInfoArr) {
        const frontMatter = blogInfo.frontMatter
        if (frontMatter.topLevel) {
            haveLevelBlogInfoArr.push(blogInfo)
            continue
        }
        if (frontMatter.updateTime) {
            haveUpdateTimeBlogInfoArr.push(blogInfo)
            continue
        }
        if (frontMatter.createTime) {
            haveCreateTimeBlogInfoArr.push(blogInfo)
            continue
        }
        leftBlogInfoArr.push(blogInfo)
    }
    haveLevelBlogInfoArr = haveLevelBlogInfoArr.sort((a, b) => {
        return dayjs(b.frontMatter.updateTime).unix() - dayjs(a.frontMatter.updateTime).unix()
    })
    haveUpdateTimeBlogInfoArr = haveUpdateTimeBlogInfoArr.sort((a, b) => {
        return dayjs(b.frontMatter.updateTime).unix() - dayjs(a.frontMatter.updateTime).unix()
    })

    haveCreateTimeBlogInfoArr = haveCreateTimeBlogInfoArr.sort((a, b) => {
        return dayjs(b.frontMatter.createTime).unix() - dayjs(a.frontMatter.createTime).unix()
    })
    // 优先level排名 再编辑时间排名
    return [...haveLevelBlogInfoArr, ...haveUpdateTimeBlogInfoArr, ...haveCreateTimeBlogInfoArr, ...leftBlogInfoArr]
}

export interface I_BlogInfo {
    fileName: string,
    frontMatter: {
        topLevel?: boolean
        createTime?: string
        updateTime?: string
        [k: string]: any
    }
    serializeResult: MDXRemoteSerializeResult
}



