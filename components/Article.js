/**
 * 
 * @param {string} article 
 */
function Article(article) {
    const [rightContainer] = document.getElementsByClassName('right-container')
    const articleContainer = document.createElement('div');
    articleContainer.innerHTML = article
    clearChildren(rightContainer);
    rightContainer.appendChild(articleContainer);
}