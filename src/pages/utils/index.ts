import path from "path";
import fs from "fs";
import matter from "gray-matter";
const mdxDir = path.resolve(process.cwd(), 'mdx');
const mdx_file_extension = '.mdx';

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

export function getAllMdxFileContent(): MdxList {
  const mdxFiles = getAllMdxInDirectory()
  return mdxFiles.map(file => {
    const fileContent = fs.readFileSync(path.resolve(mdxDir, file.base))
    const { data, content } = matter(fileContent)
    let metaData = data as any;
    metaData['id'] = file.name;
    return {
      metaData,
      content
    }
  })
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
  date: "Nov 26, 2021"
  tags: string[]
  keywords: string[]
}

export type MdxFileContent = {
  metaData: MetaData
  content: string
}
export type MdxList = MdxFileContent[]

