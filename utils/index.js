/**
 * 加载资源
 * @param {string[]} paths 资源路径数组 
 * @param {()=>void} callback 完成回调 
 * @returns 
 */
function loadJS(paths, callback) {
    if (typeof paths === 'string') {
        paths = [paths]
    }
    if (!Array.isArray(paths) || !paths.length) return;
    const [url, ...left] = paths;
    const scriptDom = createElement('script');
    // ie
    if (scriptDom.readyState) {
        scriptDom.onreadystatechange = function () {
            if (scriptDom.readyState == 'loaded' || scriptDom.readyState == 'complete') {
                scriptDom.onreadystatechange = null;
                if (left.length) {
                    loadJS(left, callback);
                } else if (typeof callback === 'function') {
                    callback()
                }
            }
        };
    } else {
        scriptDom.onload = function () {
            if (left.length) {
                loadJS(left, callback);
            } else if (typeof callback === 'function') {
                callback()
            }
        };

    }
    scriptDom.src = url;
    document.getElementsByTagName('head')[0].appendChild(scriptDom);
}

/**
 * 根据id查询节点
 * @param {string} key 
 * @returns { HTMLElement|null}
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

/**
 * 创建节点
 * @param {string} tagName 
 * @param {*} options 
 * @returns {HTMLElement }
 */
function createElement(tagName, options) {
    return document.createElement(tagName, options)
}

/**
 * 添加子节点
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

