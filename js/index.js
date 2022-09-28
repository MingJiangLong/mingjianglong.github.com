


/**
 * 修改文章详情
 * @param {string} article 
 * @returns 
 */
function updateArticleDetail(article) {
    const element = findElementById("detail-article");
    if (!element) return;
    clearChildren(element);
    const md = window.markdownit();
    const result = md.render(article);
    element.innerHTML = result
    element.scrollTo({ top: 0 })
}

function genArticleBrief() {

    const element = findElementById("brief-article");
    if (!element) return;
    const titleContainerArr = []
    Array.isArray(window.MDfiles) && window.MDfiles.forEach((article, index) => {
        const titleContainer = createElement('div')
        titleContainerArr.push(titleContainer);

        const titleLabel = createElement('div');
        titleLabel.innerText = article.name;

        const timeLabel = createElement('div');
        const date = new Date(article.createTime);
        timeLabel.innerText = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
        addStyle({ fontSize: '12px', paddingTop: '0.2rem' }, timeLabel)
        appendChildren([titleLabel, timeLabel], titleContainer)

        addStyle({
            padding: '1rem 0',
            whiteSpace: "normal",
            wordBreak: "break-all",
        }, titleContainer)

        titleContainer.onclick = () => {
            titleContainerArr.forEach((title, titleIndex) => {
                addStyle({
                    color: index === titleIndex ? 'cyan' : '#111'
                }, title)
            })
            updateArticleDetail(article.content)
        }
        if (index === 0) {
            titleContainer.onclick()
        }
        element.appendChild(titleContainer)
    })

}

function createObserveOnFooter() {
    let element = findElementById("footer")
    if (!element) return;
    new IntersectionObserver((entries, observer) => {
        let [{ isIntersecting }] = entries;
        let briefTitle = findElementById("brief-article");
        if (!briefTitle) return;
        if (isIntersecting) {
            addStyle({
                height: "calc(100vh - 10rem - 1rem)"
            }, briefTitle)
        } else {
            addStyle({
                height: "calc(100vh - 5rem)"
            }, briefTitle)
        }
    }, { threshold: 1.0 }).observe(element);
}
function createObserveOnNotice() {
    let element = findElementById("notice")
    if (!element) return;

    new IntersectionObserver((entries, observer) => {

        let [{ isIntersecting }] = entries;
        let briefTitle = findElementById("brief-article");
        let article = findElementById("detail-article");
        if (!briefTitle) return;
        if (isIntersecting) {
            addStyle({
                position: 'static',
                height: "calc(100vh - 10rem)"
            }, briefTitle)
            addStyle({ marginLeft: 0 }, article)
        } else {
            addStyle({
                position: 'fixed', top: '5rem',
                height: "calc(100vh - 5rem)"
            }, briefTitle)
            addStyle({ marginLeft: '22rem' }, article)
        }
    }, { threshold: 1.0 }).observe(element);
}