function renderNav() {

    let [avatar,] = document.getElementsByClassName('my-avatar');
    avatar.src = NavInfo.imageUrl;

    let [name] = document.getElementsByClassName('my-name');
    name.textContent = NavInfo.name;

    let [desc] = document.getElementsByClassName('my-desc');
    desc.textContent = NavInfo.des;

    let [navDom] = document.getElementsByClassName('nav-container')
    addStyle({ marginTop: '1rem' }, navDom);

    NavInfo.navItems.forEach((item, index) => {
        const itemDom = document.createElement('div');
        itemDom.textContent = item.name;
        addStyle({ padding: '1rem 0','font-size':'1.8rem' }, itemDom)

        itemDom.onclick = () => {
            renderArticleInfo(item.key)
        }

        if (index == 0) {
            itemDom.onclick()
        }

        navDom.appendChild(itemDom)
    })

}