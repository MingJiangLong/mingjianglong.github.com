
/**
 * 根据id查询节点
 * @param {string} key 
 * @returns 
 */
function findElementById(key) {
    return document.getElementById(key)
}


/**
 * 移除子节点
 * @param {HTMLElement} dom 
 */
function clearChildren(dom) {
    let children = dom.childNodes
    for (let i = children.length - 1; i >= 0; i--) {
        dom.removeChild(children[i])
    }
}

/**
 * 节点添加样式
 * @param {CSSStyleDeclaration} styles
 * @param {HTMLElement} dom 
 */
function addStyle(styles, dom) {
    Object.keys(styles).forEach(styleKey => {
        dom.style[styleKey] = styles[styleKey]
    })
}
function createElement(tagName, options) {
    return document.createElement(tagName, options)
}

/**
 * 
 * @param {Node|Array<Node>} nodes 
 * @param {HTMLElement} dom 
 */
function appendChildren(nodes, dom) {
    if (Array.isArray(nodes)) {
        nodes.forEach(node => dom.appendChild(node))
    } else {
        dom.appendChild(nodes)
    }
}
