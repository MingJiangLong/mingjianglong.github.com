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

        const fileName = file.substring(file.lastIndexOf("\\") + 1, file.lastIndexOf("."));

        let find = MDfiles.find(item => item.name === fileName);

        // 是否有文件的历史记录
        if (find) {
            // 该文件没有修改
            if (find.content === fileContent.toString()) return

            find.content = fileContent.toString();
            find.createTime = new Date().getTime()
        } else {
            // 新加文件
            return {
                name: fileName,
                content: fileContent.toString(),
                createTime: new Date().getTime()
            }
        }


    }).filter(item => !!item)

    return [...generatedFiles, ...MDfiles].sort((a, b) => b.createTime - a.createTime)
}

function writeFile() {
    const data = readAllMDAndWrite()
    fs.writeFileSync(path.join("./article/index.js"), `!function (e, r) {"object" == typeof exports && "undefined" != typeof module ?module.exports = r() :"function" == typeof define && define.amd?define(r) :(e = "undefined" != typeof globalThis ? globalThis : e || self).MDfiles = r()}(this, (function () { return ${JSON.stringify(data)}}))`
    )
}

writeFile()