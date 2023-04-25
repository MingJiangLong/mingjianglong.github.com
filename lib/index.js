const path = require('path')
const fs = require('fs')
const mdxDir = path.resolve(__dirname, '../mdx');
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
function getAllNextJSPath() {
    const allMdxFiles = getMdxFiles();
    return allMdxFiles.map((parsedFile) => {
        return {
            params: {
                id: parsedFile.name
            }
        }
    })
}


console.log(getAllPostsPath())