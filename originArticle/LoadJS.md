# 加载JS资源
    自定义实现加载js文件资源
<!-- more -->
```js
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
```