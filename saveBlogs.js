const fs = require("fs")
const path = require("path");

/**
 * @type{NormalBlogData[]}
 */
const OldMDJsonData = require("./data");// 已有json数据
const MDFileDir = path.join(__dirname, "./blogs");// md文件目录

/**
 * 是否为MD文件
 * @param {*} fileName 
 */
function isMdFile(fileName) {
  fileName = `${fileName}`;
  return fileName.endsWith('.md') || fileName.endsWith('MD')
}

function findExistBlogJsonByTitle(title) {
  return OldMDJsonData.find(item => item.title === title)
}

/**
 * 读取文章内容
 * @param {string} MDFileName 
 */
function readFromMDFile(MDFileName) {
  // 读取文章内容
  const MDFileLocation = path.join(MDFileDir, MDFileName);
  return fs.readFileSync(MDFileLocation).toString();
}

/**
 * 获取Blog标题
 * 格式#开头
 * @param {*} fileContent 
 */
function getBlogTitle(fileContent) {
  const regexp = /#\s(.+)/
  const result = regexp.exec(fileContent);
  if (!result) throw new Error('md文件内容不符合规范,首行应该以 `# 文章名`开始')
  return result[result.length - 1];
}

/**
 * 获取Blog 描述
 * 格式 换行紧跟标题
 * @param {*} fileContent 
 */
function getBlogDesc(fileContent) {
  const regexp = /#\s.+(\r\n?|\n)*(.+)/
  const result = regexp.exec(fileContent);
  if (!result) return '~~暂无简述'
  return result[result.length - 1]
}

/**
 * 获取Blog 标签
 * 格式 <!-- ['标签1','标签2'] -->
 * @param {*} fileContent 
 */
function getBlogTags(fileContent) {
  try {
    const regexp = /\<\!--\s\[(.+)\]\s--\>/
    const result = regexp.exec(fileContent);
    if (!result) return []

    return result[result.length - 1].split(",")
  } catch (error) {
    return []
  }
}

function getInitPrimaryKey() {
  if (!OldMDJsonData.length) return 0;
  return Math.max(...OldMDJsonData.map(item => item.id));
}
function readAllMDAndWrite() {

  // 读取的目录下所有的文件名
  let MDFileNameList = fs.readdirSync(MDFileDir);

  // 选取md文件名
  MDFileNameList = MDFileNameList.filter(MDFileName => isMdFile(MDFileName));

  let primaryKey = getInitPrimaryKey();

  const newMDJsonData = MDFileNameList.map(MDFileName => {
    const MDFileStr = readFromMDFile(MDFileName)
    const title = getBlogTitle(MDFileStr);
    const existBlogJson = findExistBlogJsonByTitle(title);
    const desc = getBlogDesc(MDFileStr);
    const tags = getBlogTags(MDFileStr);
    // 是否有文件的历史记录 
    if (!!existBlogJson && existBlogJson.content !== MDFileStr) {
      existBlogJson.content = MDFileStr;
      existBlogJson.lastUpdateTime = new Date().getTime();
      existBlogJson.tags = tags
      existBlogJson.desc = desc
      return existBlogJson;
    }
    if (!!existBlogJson && existBlogJson.content === MDFileStr) return existBlogJson;
    return {
      id: ++primaryKey,
      title,
      desc,
      tag: tags,
      content: MDFileStr,
      createTime: new Date().getTime(),
      lastUpdateTime: new Date().getTime()
    }
  }).filter(item => !!item)

  return [...newMDJsonData, ...OldMDJsonData].sort((a, b) => b.lastUpdateTime - a.lastUpdateTime)
}

function mergeJson() {

}

/**
 * 移除BLOG JSON数据
 * @param {*} title 
 */
function deleteBlogs(title) {

  const i = OldMDJsonData.findIndex(item => item.title === title)
  if (i == -1) return;
  OldMDJsonData.splice(i, 1);

}
function syncMDFilesData() {
  const data = readAllMDAndWrite()
  fs.writeFileSync(path.join("./data/index.js"), `!function (e, r) {"object" == typeof exports && "undefined" != typeof module ?module.exports = r() :"function" == typeof define && define.amd?define(r) :(e = "undefined" != typeof globalThis ? globalThis : e || self).MDFileJsonData = r()}(this, (function () { return ${JSON.stringify(data)}}))`)
  return data
}
syncMDFilesData()