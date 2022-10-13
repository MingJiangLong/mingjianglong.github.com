const fs = require("fs")
const path = require("path");

const MDfiles = require("./article");
const originArticleDir = path.join(__dirname, "./originArticle");

function readAllMDAndWrite() {
    let files = fs.readdirSync(originArticleDir)

    // 过滤非md文档
    files = files.filter(file => file.endsWith('.md'));

    let generatedFiles = files.map(file => {

        file = path.join(originArticleDir, file)
        const fileContent = fs.readFileSync(file);
        // 文章名字 固定 # ....
        const contentStr = fileContent.toString();

        const result = /#\s(.+)\r\n/.exec(contentStr);
        if (!result) throw new Error('md文章不符合规范 eg. # 文章名')
        let [, title] = result

        let find = MDfiles.find(item => item.title === title);

        let [brief,] = fileContent.toString().split('<!-- more -->');
        // 是否有文件的历史记录
        if (find) {
            // 该文件没有修改
            if (find.content === contentStr) return
            find.content = contentStr;
            find.time = new Date().getTime()
        } else {
            // 新加文件
            return {
                title,
                brief,
                content: contentStr,
                time: new Date().getTime()
            }
        }


    }).filter(item => !!item)

    return [...generatedFiles, ...MDfiles].sort((a, b) => b.createTime - a.createTime)
}

function writeFile() {
    const data = readAllMDAndWrite()
    fs.writeFileSync(path.join("./article/index.js"), `!function (e, r) {"object" == typeof exports && "undefined" != typeof module ?module.exports = r() :"function" == typeof define && define.amd?define(r) :(e = "undefined" != typeof globalThis ? globalThis : e || self).MDfiles = r()}(this, (function () { return ${JSON.stringify(data)}}))`)
}

writeFile()