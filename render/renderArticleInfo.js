function renderArticleInfo(key) {
    const [rightContent,] = document.getElementsByClassName("right-container");
    clearChildren(rightContent);

    if (key === 'Home') {
        renderArticleBrief(rightContent)
    }

    if (key === 'Special') {
        renderSpecial(rightContent)
    }

    if (key === 'Sort') {
        renderSort(rightContent)
    }



}

/**
 * 首页
 * @param {Element} dom 
 */
function renderArticleBrief(dom) {

    articles.forEach(item => {
        dom.appendChild(ArticleBriefCard(item))
    })
}

/**
 * 分类
 * @param {Element} dom 
 */
function renderSort(dom) {
    const t = document.createTextNode("分类")
    dom.appendChild(t)
}

/**
 * 专题
 * @param {Element} dom 
 */
function renderSpecial(dom) {
    const t = document.createTextNode("专题")
    dom.appendChild(t)
}