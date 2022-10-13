
/**
 * 文章简略信息卡片
 *  @param {Object} props 
 *  @param {string} props.title 
 *  @param {string} props.content 
 *  @param {string} props.brief 
 *  @param {string} props.time 
 * @returns {HTMLDivElement}
 */
function ArticleBriefCard(props) {
    const container = document.createElement('div');

    container.className = "brief-card-scale"
    const title = document.createElement('div')
    const brief = document.createElement('div')

    addStyle({
        marginTop: "2rem"
    }, container)

    title.textContent = props.title
    addStyle({
        fontSize: '1.5rem',
        padding: '1rem 0',
    }, title)

    const timeDom = document.createElement('div');
    timeDom.textContent = "Aug 14, 2016"

    addStyle({ padding: '1rem 0', textAlign: 'right' }, timeDom)

    brief.textContent = props.brief
    container.appendChild(title);
    container.appendChild(brief);
    container.appendChild(timeDom);

    addStyle({
        boxShadow: "0 0 5px #ccc",
        padding: '1rem',
        borderRadius: '0.2rem'
    }, container)

    // 鼠标点击事件
    container.onclick = () => {
        Article(new MD2Html(props.content).parse())
    }
    return container;
}