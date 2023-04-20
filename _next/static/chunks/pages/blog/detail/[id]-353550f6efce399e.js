(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[307],{6466:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){let t=s.default,o={loading:e=>{let{error:n,isLoading:t,pastDelay:l}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o=l({},o,e)),o=l({},o,n);let i=o.loader,u=()=>null!=i?i().then(r):Promise.resolve(r(()=>null));return(o.loadableGenerated&&delete(o=l({},o,o.loadableGenerated)).loadableGenerated,"boolean"!=typeof o.ssr||o.ssr)?t(l({},o,{loader:u})):(delete o.webpack,delete o.modules,a(t,o))},n.noSSR=a;var l=t(4363).Z,o=t(4858).Z,s=(o(t(2684)),o(t(5268)));function r(e){return{default:(null==e?void 0:e.default)||e}}function a(e,n){return delete n.webpack,delete n.modules,e(n)}("function"==typeof n.default||"object"==typeof n.default&&null!==n.default)&&void 0===n.default.__esModule&&(Object.defineProperty(n.default,"__esModule",{value:!0}),Object.assign(n.default,n),e.exports=n.default)},9148:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.LoadableContext=void 0;var l=(0,t(4858).Z)(t(2684));let o=l.default.createContext(null);n.LoadableContext=o},5268:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var l=t(4363).Z,o=(0,t(4858).Z)(t(2684)),s=t(9148);let r=[],a=[],i=!1;function u(e){let n=e(),t={loading:!0,loaded:null,error:null};return t.promise=n.then(e=>(t.loading=!1,t.loaded=e,e)).catch(e=>{throw t.loading=!1,t.error=e,e}),t}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:n}=this;e.loading&&("number"==typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},n.delay)),"number"==typeof n.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},n.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,n){this._loadFn=e,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,n){let t=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},n),l=null;function r(){if(!l){let n=new d(e,t);l={getCurrentValue:n.getCurrentValue.bind(n),subscribe:n.subscribe.bind(n),retry:n.retry.bind(n),promise:n.promise.bind(n)}}return l.promise()}if(!i){let e=t.webpack?t.webpack():t.modules;e&&a.push(n=>{for(let t of e)if(-1!==n.indexOf(t))return r()})}function u(e,n){!function(){r();let e=o.default.useContext(s.LoadableContext);e&&Array.isArray(t.modules)&&t.modules.forEach(n=>{e(n)})}();let a=o.default.useSyncExternalStore(l.subscribe,l.getCurrentValue,l.getCurrentValue);return o.default.useImperativeHandle(n,()=>({retry:l.retry}),[]),o.default.useMemo(()=>{var n;return a.loading||a.error?o.default.createElement(t.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:l.retry}):a.loaded?o.default.createElement((n=a.loaded)&&n.default?n.default:n,e):null},[e,a])}return u.preload=()=>r(),u.displayName="LoadableComponent",o.default.forwardRef(u)}(u,e)}function p(e,n){let t=[];for(;e.length;){let l=e.pop();t.push(l(n))}return Promise.all(t).then(()=>{if(e.length)return p(e,n)})}c.preloadAll=()=>new Promise((e,n)=>{p(r).then(e,n)}),c.preloadReady=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise(n=>{let t=()=>(i=!0,n());p(a,e).then(t,t)})},window.__NEXT_PRELOADREADY=c.preloadReady,n.default=c},1774:function(e,n,t){e.exports=t(6466)},6524:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/detail/[id]",function(){return t(3759)}])},3820:function(e){"use strict";e.exports=[{id:8,title:"凸包算法-地图围栏",desc:"公司零售货柜机在地图上的点需要围栏圈起来，以便显示大致范围",tag:["算法","凸包"],content:"# 凸包算法-地图围栏\n\n公司零售货柜机在地图上的点需要围栏圈起来，以便显示大致范围\n\n\n\n<!-- [算法,凸包] -->\n\n```js\n\n/**\n *      p2\n *  p1<\n *      p3\n * 叉积判断 p1p2 p1p3\n * | p2.x-p1.x | p2.y-p1.y |\n * | p3.x-p1.x | p3.y-p1.y |\n * @param {{x:number,y:number}} p1 \n * @param {{x:number,y:number}} p2 \n * @param {{x:number,y:number}} p3 \n */\nfunction crossProduct(p1, p2, p3) {\n  return (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);\n}\n\n/**\n * \n * @param {{x:number,y:number}[]} points \n */\nfunction getConvexHull(points) {\n\n  if (points.length <= 1) { return points; }\n\n  //按照x坐标排序 \n  points.sort((a, b) => a.x - b.x || a.y - b.y);\n  let lowerHull = [];\n  for (let i = 0; i < points.length; i++) {\n    //构建下凸包\n\n    // 遍历凸包数据集判断当前点Pi是否在 H(n-2)H(n-1)的内侧(叉积<0)，如果在内侧就移除H(n-1) \n    while (\n      lowerHull.length >= 2 && \n      crossProduct(lowerHull[lowerHull.length - 2], lowerHull[lowerHull.length - 1], points[i]) <= 0\n    ) {\n      lowerHull.pop();\n    }\n    lowerHull.push(points[i]);\n  }\n  let upperHull = [];\n  for (let i = points.length - 1; i >= 0; i--) {\n    //构建上凸包\n    while (\n      upperHull.length >= 2 && \n      crossProduct(upperHull[upperHull.length - 2], upperHull[upperHull.length - 1], points[i]) <= 0) {\n      upperHull.pop();\n    }\n    upperHull.push(points[i]);\n  }\n  //合并上下凸包 \n  upperHull.pop();\n  lowerHull.pop();\n  return lowerHull.concat(upperHull);\n}\n```",createTime:1681974916831,lastUpdateTime:1681975041982,tags:["算法","凸包"]},{id:5,title:"NextJS打包配置学习",desc:"NextJS打包配置对应字段了解，进行简单的打包测试",tag:["Next","next.config.js"],content:'# NextJS打包配置学习\n\nNextJS打包配置对应字段了解，进行简单的打包测试\n<!-- [Next,next.config.js] -->\n> `assetPrefix` 静态资源前缀\n```js\n  const nextConfig = {\n    assetPrefix:\'/前缀\'\n  }\n```\n\n> `Redirects` 将source原路径重定向到destination新路径，访问的是destination路径;\n```JS\n// 最终访问的是/blog路径,浏览器显示的也是blog路径\nconst nextConfig = {\n  redirects() {\n    return [\n      {\n        source: "/",\n        destination: "/blog",\n        permanent: true\n      }\n    ]\n  },\n}\n```\n> `Rewrites`  将原路径充当代理以此来屏蔽目标路径。浏览器显示的是destination路径，实际访问的是source路径；功能类似于**userRouter.push(path,as)**中 参数**as**的功能;\n```JS\n// 浏览器显示的是"/blog"，实际访问的是"/"路径\nconst nextConfig = {\n  async rewrites() {\n    return [\n      {\n        source: \'/\',\n        destination: \'/blog\'\n      }\n    ]\n  },\n}\n```',createTime:1680086962261,lastUpdateTime:1681975041982,tags:["Next","next.config.js"]},{id:4,title:"友宝项目架构",desc:"简单学习一下友宝的前端项目架构",tag:["友宝","架构"],content:"# 友宝项目架构\n简单学习一下友宝的前端项目架构\n\n<!-- [友宝,架构] -->\n友宝的前端项目的整体架构底层技术栈选用的是PHP+React，使用PHP做为外壳，内部重定向web静态资源。web资源请求首先经过的是PHP接口,经过一系列的中间件处理(比如鉴权之类...)，最后将页面展示需要的数据通过window对象注入静态页面，然后再将静态页面返回给浏览器渲染。\n\n感觉整体架构的思路有点类似于服务端渲染的思想，每次页面请求都是经过的服务端接口，服务端再去决定返回什么资源，实际返回的是一个已经有数据的静态页面，但是没有经过渲染，只是有页面数据，还是需要客户端渲染。\n\n优点\n\n  * 前端开发不需要网络服务模块\n  * 服务端感知度低\n  * 将静态数据注入的方式，减小的客户端的压力\n  * 方便页面重定向，定制化页面(可以通过外壳统一做特定活动之类的)\n\n\n\n缺点\n\n  * 前端依赖的数据都是注入在window对象，如果window对象被后续修改将获取不到内容\n  * 应用场景少，只能应用于不经常变化的数据。\n  * 前端开发BUG定位调试变得困难，开发环境虽然可mock数据，但是如果需要针对特定bug，修复bug发布之后才能看到修复结果。\n  * 前后端耦合\n",createTime:1680054331856,lastUpdateTime:1681975041982,tags:["友宝","架构"]},{id:3,title:"Blog",desc:"记录开发日常,ε=(\xb4ο｀*)))唉太难了，找工作总是有傻屌问我有没有blog",tag:["吐槽"],content:"# Blog\n\n记录开发日常,ε=(\xb4ο｀*)))唉太难了，找工作总是有傻屌问我有没有blog\n<!-- [吐槽] -->\n## Getting Started\n\n项目MD文件需要放在`/blogs`目录下，执行`/savaBlogs.js`会遍历blogs目录下所有md文件并格式化成json放在`/data/index.js`文件中;\nmd文件需要遵循一定的规则：\n* 首行标题 `# 标题`\n* 标题后紧跟MD文件简述 \n* 文章标签格式:`<!-- [标签1,标签2] -->`\n\n  ```\n    # 标题\n    我是文章描述\n    <!-- [标签1,标签2] -->\n    \n  ```\n项目运行\n```bash\nnpm install\nnpm run dev\n# or\nyarn dev\n# or\npnpm dev\n```\n",createTime:1680054331851,lastUpdateTime:1681975041981,tags:["吐槽"]},{id:7,title:"Git Workflow",desc:"解决开发之后需要做的事，打包上线",tag:["Git Workflow"],content:"# Git Workflow\n解决开发之后需要做的事，打包上线\n<!-- [Git Workflow] -->\n\n在项目根目录添加 .github/workflows/integrate.yml\n\nNextJS 示例\n```yml\nname: Build and Deploy\non: \n  push:\n    branches:\n      - blog-next\njobs:\n  build-and-deploy:\n    # 虚拟机环境 ubuntu-latest，ubuntu-18.04或ubuntu-16.04\n    # windows-latest，windows-2019或windows-2016\n    # macOS-latest或macOS-10.14\n    # runs-on: ubuntu-latest\n    runs-on: windows-latest\n\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2.3.1\n        with:\n          persist-credentials: false\n\n      - name: Cache\n        uses: actions/cache@v2\n        with:\n          path: ${{ github.workspace }}/.next/cache\n          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}\n\n      - name: Install and Build\n        uses: actions/setup-node@v1\n      - run: npm install\n      - run: npm run build\n      - run: npm run export\n        env:\n            CI: true\n      - run: touch out/.nojekyll\n\n      - name: Deploy\n        uses: JamesIves/github-pages-deploy-action@3.7.1\n        with:\n          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}\n          BRANCH: lj-pages\n          FOLDER: out # The folder the action should deploy.\n          CLEAN: true # Automatically remove deleted files from the deploy branch\n```",createTime:1681974916733,lastUpdateTime:1681975041981,tags:["Git Workflow"]},{id:6,title:"React搞笑记录",desc:"记录一些别人或者自己的React搞笑代码",tag:["React","Bug"],content:"# React搞笑记录\n\n记录一些别人或者自己的React搞笑代码\n\n<!-- [React,Bug] -->\n```JS\n\n const downTime = useCallback(\n    () => {\n      let b = 0\n      const Time = setInterval(() => {\n        if (b >1) {\n          clearInterval(Time)\n          return false\n        }\n        b++\n        handleGetVideo()\n      }, 2 * 1000 * 60)\n    },\n    [],\n  )\n\n  const handleGetVideo = () => {\n    getOrderVideo({ transactionId: id }).then(res => {\n      if (res && res.code == 200 && res.data) {\n        const {status,videoInfos}=res.data\n        if(status&&status=='FAILED'){\n          // ...\n        }else if(status&&status=='SUCCESS'&& videoInfos&&videoInfos.length){\n          // ...\n        }else if(status&&status=='QUERYING'){\n          setawaitState(true)\n          downTime()\n          setTimeout(() => {\n            setawaitState(false)\n          }, 2 * 1000 * 60)\n        }\n        \n      }\n    })\n  }\n```",createTime:1680086962261,lastUpdateTime:1681975041981,tags:["React","Bug"]},{id:2,title:"NextJS打包相关问题",desc:"NextJS打包相关问题以及解决办法，更多参见[Next文档](https://www.nextjs.cn/)",tag:["Next","打包"],content:"# NextJS打包相关问题\n\nNextJS打包相关问题以及解决办法，更多参见[Next文档](https://www.nextjs.cn/)\n<!-- [Next,打包] -->\n\n>Eslint、Ts类型校验关闭\n```js\n  // next.config.js\n\n  const nextConfig = {\n  \n    eslint:{\n      ignoreDuringBuilds:true\n    },\n      typescript: {\n      // !! WARN !!\n      // Dangerously allow production builds to successfully complete even if\n      // your project has type errors.\n      // !! WARN !!\n      ignoreBuildErrors: true,\n    }\n  }\n```\n\n\n\n> Image Optimization using Next.js' default loader is not compatible with `next export`.\n\n```JS\nmodule.exports = {\n  // https://github.com/vercel/next.js/issues/21079\n  // Remove this workaround whenever the issue is fixed\n  images: {\n    loader: 'imgix',\n    path: '',\n  },\n}\n```\n\n> 图片加载不出来",createTime:1680054331847,lastUpdateTime:1681975041981,tags:["Next","打包"]},{id:1,title:"Git常用操作",desc:"git常用命令记录，主要是容易忘",tag:["git"],content:"# Git常用操作\n\ngit常用命令记录，主要是容易忘\n\n<!-- [git] -->\n\n>`git pull -f origin master:master`\n  如果远程分支和本地分支代码相差太大，可以考虑用远程的覆盖本地代码",createTime:1680054331840,lastUpdateTime:1681975041981,tags:["git"]}]},3759:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return c}});var l=t(8598),o=t(1774),s=t.n(o),r=t(4376),a=t(2684),i=t(3820),u=t.n(i);t(7788);let d=s()(()=>t.e(702).then(t.bind(t,6702)).then(e=>e.default.Markdown),{loadableGenerated:{webpack:()=>[6702]},ssr:!1});function c(e){let n=(0,r.useRouter)(),t=(0,a.useMemo)(()=>{let{query:e}=n;return null==e?void 0:e.id},[n]),o=(0,a.useMemo)(()=>u().find(e=>"".concat(e.id)==t),[t]);return(0,l.jsx)("div",{style:{height:"100%",overflow:"scroll"},children:(0,l.jsx)(d,{"data-color-mode":"dark",source:null==o?void 0:o.content,style:{whiteSpace:"pre-wrap",padding:"1em 2em",minHeight:"100%"}})})}},7788:function(){}},function(e){e.O(0,[36,774,888,179],function(){return e(e.s=6524)}),_N_E=e.O()}]);