import { ensureDir, lstat, readdir, readFile } from "fs-extra";
import path from "path";
import { serialize } from 'next-mdx-remote/serialize';
import matter from 'gray-matter'; // 用于解析 Front Matter
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import dayjs from "dayjs";

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
    const serializeResult = await serialize(content)

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
        const { data: frontMatter, content } = matter(fileContent)
        const source = await serialize(content)
        blogInfoArr.push({
            fileName: fileName,
            frontMatter,
            serializeResult: source
        })
    }


    let haveLevelBlogInfoArr: I_BlogInfo[] = []
    let haveTimeBlogInfoArr: I_BlogInfo[] = []
    let haveUpdateTimeBlogInfoArr: I_BlogInfo[] = []
    let leftBlogInfoArr: I_BlogInfo[] = []


    for (let blogInfo of blogInfoArr) {
        const frontMatter = blogInfo.frontMatter
        if (frontMatter.level) {
            haveLevelBlogInfoArr.push(blogInfo)
            continue
        }
        if (frontMatter.updateTime) {
            haveUpdateTimeBlogInfoArr.push(blogInfo)
            continue
        }
        if (frontMatter.createTime) {
            haveTimeBlogInfoArr.push(blogInfo)
            continue
        }
        leftBlogInfoArr.push(blogInfo)
    }
    // 优先level排名 再编辑时间排名
    return [...haveLevelBlogInfoArr, ...haveUpdateTimeBlogInfoArr, ...haveTimeBlogInfoArr, ...leftBlogInfoArr]
}

export interface I_BlogInfo {
    fileName: string,
    frontMatter: {
        level?: number
        createTime?: string
        updateTime?: string
        [k: string]: any
    }
    serializeResult: MDXRemoteSerializeResult
}



