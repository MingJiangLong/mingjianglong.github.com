(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7801:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return t(2974)}])},3820:function(n){"use strict";n.exports=[{id:7,title:"vue3 学习",desc:"vue3搭建一个小项目，项目用于公司零售柜价格设置。项目选型之所以选vue3，主要是用了我之前很久远的一个Vue2脚手架,写起来有点膈手，外加上vue3在国内火，想着是小项目就随便我折腾了。",tag:["vue","vite","前端"],content:"# vue3 学习\n\nvue3搭建一个小项目，项目用于公司零售柜价格设置。项目选型之所以选vue3，主要是用了我之前很久远的一个Vue2脚手架,写起来有点膈手，外加上vue3在国内火，想着是小项目就随便我折腾了。\n\n<!-- [vue,vite,前端] -->\n\n---\n首先去搜索引擎找了一个脚手架vite,一路enter就好了。对了vue3的全局状态管理推荐用**pinia**了，狗头保命...之前我都没听说这个玩意\n> npm create vite@latest\n\n创建完了，跑起项目就 可以看到\"Hello World\"了。\n\n我这边是一个H5项目，需要做屏幕适配。所以 `postcss-pxtorem`+ `autoprefixer`+`amfe-flexible` install到项目里，然后按照demo配置一下。最主要的就是`rootValue`这个属性，设计稿除以10\n\n```JS\n //.postcssrc.cjs\n module.exports = {\n  plugins: {\n    autoprefixer: {\n      Browserslist: [\"Android >= 4.0\", \"iOS >= 7\"],\n    },\n    \"postcss-pxtorem\": {\n      rootValue: 37.5, //结果为：设计稿元素尺寸/37.5，比如元素宽375px,最终页面会换算成 10rem\n      propList: [\"*\"],\n      // 黑名单\n      // selectorBlackList: [\n      //   'van-'\n      // ],\n    },\n  },\n};\n```\n\nUI整的是`Vant`,为什么用这个，我也很纳闷，设计又不按照这个UI组件设计，领导又让用这个库，总之项目Ui自定义高就别用什么组件了,自己费尽整一套就好，\n\n\n最后整个`axios`和css预编译,框框就差不多了。\n\n接着就是看一下Vue APi 配方和以前大差不差。以前很讨厌vue整一个大对象，把所有的东西都塞里面，看起来很廉价。现在这个组合式的感觉像是那么回事了。\n\n* defineProps\n* defineEmit\n* defineProps\n* watch\n* watEffect\n* ref\n* reactive\n* computed\n* ...\n\n对了我的编辑器是vscode,如果要用vue3 就不要用`vuter`了提示支持不友好，新的插件`volar`，如果vscode下载不下来就需要去官网下载，把包里package.json vscode版本改的和自己编辑器的版本一眼,再手动安装,详细教程搜索引擎自取。\n\n中间碰到一个很恶心的事情,Vant的组件有很多自定义css样式,想全局修改。index.html修改失败，按照官网的:root:root也不行，最后就整了一个js文件在入口统一修改...囧\n```JS\n  export function updateVantCSSVar() {\n    let cssVar = [\n      ['--van-tabs-bottom-bar-color', '#FF7500'],\n      ['--van-tabs-nav-background', 'transparent'],\n      ['--van-field-label-width', '5.5em'],\n    ]\n\n    cssVar.forEach(item => {\n      document.documentElement.style.setProperty(item[0], item[1])\n    })\n  }\n```\n\n顺路又学了一下less定义全局变量\n```JS\n// VITE.CONFIG.JS\nexport default defineConfig(({ mode }) => {\n  return {\n    css: {\n      preprocessorOptions: {\n        less: {\n          modifyVars: {\n            // 这个用来定义全局变量的\n            hack: `true; @import \"${path.resolve(__dirname, \"./src/assets/css/base.less\")}\"`\n            // '--van-field-label-width': '6.3em'\n          },\n          globalVars: {\n\n          },\n        }\n      }\n    }\n  }\n})\n\n  //base.less\n  @test-color: red;\n  @goods-img: 60px;\n  @yellow: #FF7500;\n\n```\n\n最后打包，默认的是`/`,建议配置 `base`为`./`,不然如果项目不是在根目录就找不到静态资源了。\n\n### 碰到的糟心问题\n\n  - 白屏\n\n    如果任何报错都没有,建议检查router的模式是否用的是`history`\n  * ts中引入Vue文件报错\n\n    ```ts\n      //增加一个 sfc.d.ts\n      declare module '*.vue' {\n        import { ComponentOptions } from 'vue'\n        const componentOptions: ComponentOptions\n        export default componentOptions\n      }\n    ```\n  * vconsole引入\n    ```JS\n      if (import.meta.env.MODE !== 'prod') {\n\n        // 网上的教程大多是下面这种引入，实际上会报错\n        app.use(new Vconsole())\n\n        // 以下引入可以正常使用\n        new Vconsole()\n\n        // 这种也可以\n        app.use(()=>new Vconsole())\n      }\n    ```\n\n\n  \n  \n\n\n\n\n\n",createTime:1682073065672,lastUpdateTime:1682073065672},{id:8,title:"凸包算法-地图围栏",desc:"公司零售货柜机在地图上的点需要围栏圈起来，以便显示大致范围",tag:["算法","凸包"],content:"# 凸包算法-地图围栏\n\n公司零售货柜机在地图上的点需要围栏圈起来，以便显示大致范围\n\n\n\n<!-- [算法,凸包] -->\n\n```js\n\n/**\n *      p2\n *  p1<\n *      p3\n * 叉积判断 p1p2 p1p3\n * | p2.x-p1.x | p2.y-p1.y |\n * | p3.x-p1.x | p3.y-p1.y |\n * @param {{x:number,y:number}} p1 \n * @param {{x:number,y:number}} p2 \n * @param {{x:number,y:number}} p3 \n */\nfunction crossProduct(p1, p2, p3) {\n  return (p2.x - p1.x) * (p3.y - p1.y) - (p2.y - p1.y) * (p3.x - p1.x);\n}\n\n/**\n * \n * @param {{x:number,y:number}[]} points \n */\nfunction getConvexHull(points) {\n\n  if (points.length <= 1) { return points; }\n\n  //按照x坐标排序 \n  points.sort((a, b) => a.x - b.x || a.y - b.y);\n  let lowerHull = [];\n  for (let i = 0; i < points.length; i++) {\n    //构建下凸包\n\n    // 遍历凸包数据集判断当前点Pi是否在 H(n-2)H(n-1)的内侧(叉积<0)，如果在内侧就移除H(n-1) \n    while (\n      lowerHull.length >= 2 && \n      crossProduct(lowerHull[lowerHull.length - 2], lowerHull[lowerHull.length - 1], points[i]) <= 0\n    ) {\n      lowerHull.pop();\n    }\n    lowerHull.push(points[i]);\n  }\n  let upperHull = [];\n  for (let i = points.length - 1; i >= 0; i--) {\n    //构建上凸包\n    while (\n      upperHull.length >= 2 && \n      crossProduct(upperHull[upperHull.length - 2], upperHull[upperHull.length - 1], points[i]) <= 0) {\n      upperHull.pop();\n    }\n    upperHull.push(points[i]);\n  }\n  //合并上下凸包 \n  upperHull.pop();\n  lowerHull.pop();\n  return lowerHull.concat(upperHull);\n}\n```",createTime:1682073065672,lastUpdateTime:1682073065672},{id:9,title:"友宝项目架构",desc:"简单学习一下友宝的前端项目架构",tag:["友宝","架构"],content:"# 友宝项目架构\n简单学习一下友宝的前端项目架构\n\n<!-- [友宝,架构] -->\n友宝的前端项目的整体架构底层技术栈选用的是PHP+React，使用PHP做为外壳，内部重定向web静态资源。web资源请求首先经过的是PHP接口,经过一系列的中间件处理(比如鉴权之类...)，最后将页面展示需要的数据通过window对象注入静态页面，然后再将静态页面返回给浏览器渲染。\n\n感觉整体架构的思路有点类似于服务端渲染的思想，每次页面请求都是经过的服务端接口，服务端再去决定返回什么资源，实际返回的是一个已经有数据的静态页面，但是没有经过渲染，只是有页面数据，还是需要客户端渲染。\n\n优点\n\n  * 前端开发不需要网络服务模块\n  * 服务端感知度低\n  * 将静态数据注入的方式，减小的客户端的压力\n  * 方便页面重定向，定制化页面(可以通过外壳统一做特定活动之类的)\n\n\n\n缺点\n\n  * 前端依赖的数据都是注入在window对象，如果window对象被后续修改将获取不到内容\n  * 应用场景少，只能应用于不经常变化的数据。\n  * 前端开发BUG定位调试变得困难，开发环境虽然可mock数据，但是如果需要针对特定bug，修复bug发布之后才能看到修复结果。\n  * 前后端耦合\n",createTime:1682073065672,lastUpdateTime:1682073065672},{id:1,title:"Blog",desc:"记录开发日常,ε=(\xb4ο｀*)))唉太难了，找工作总是有傻屌问我有没有blog",tag:["吐槽"],content:"# Blog\n\n记录开发日常,ε=(\xb4ο｀*)))唉太难了，找工作总是有傻屌问我有没有blog\n<!-- [吐槽] -->\n## Getting Started\n\n项目MD文件需要放在`/blogs`目录下，执行`/savaBlogs.js`会遍历blogs目录下所有md文件并格式化成json放在`/data/index.js`文件中;\nmd文件需要遵循一定的规则：\n* 首行标题 `# 标题`\n* 标题后紧跟MD文件简述 \n* 文章标签格式:`<!-- [标签1,标签2] -->`\n\n  ```\n    # 标题\n    我是文章描述\n    <!-- [标签1,标签2] -->\n    \n  ```\n项目运行\n```bash\nnpm install\nnpm run dev\n# or\nyarn dev\n# or\npnpm dev\n```\n",createTime:1682073065671,lastUpdateTime:1682073065671},{id:2,title:"React搞笑记录",desc:"记录一些别人或者自己的React搞笑代码",tag:["React","Bug"],content:"# React搞笑记录\n\n记录一些别人或者自己的React搞笑代码\n\n<!-- [React,Bug] -->\n```JS\n\n const downTime = useCallback(\n    () => {\n      let b = 0\n      const Time = setInterval(() => {\n        if (b >1) {\n          clearInterval(Time)\n          return false\n        }\n        b++\n        handleGetVideo()\n      }, 2 * 1000 * 60)\n    },\n    [],\n  )\n\n  const handleGetVideo = () => {\n    getOrderVideo({ transactionId: id }).then(res => {\n      if (res && res.code == 200 && res.data) {\n        const {status,videoInfos}=res.data\n        if(status&&status=='FAILED'){\n          // ...\n        }else if(status&&status=='SUCCESS'&& videoInfos&&videoInfos.length){\n          // ...\n        }else if(status&&status=='QUERYING'){\n          setawaitState(true)\n          downTime()\n          setTimeout(() => {\n            setawaitState(false)\n          }, 2 * 1000 * 60)\n        }\n        \n      }\n    })\n  }\n```",createTime:1682073065671,lastUpdateTime:1682073065671},{id:3,title:"Git Workflow",desc:"解决开发之后需要做的事，打包上线",tag:["Git Workflow"],content:"# Git Workflow\n解决开发之后需要做的事，打包上线\n<!-- [Git Workflow] -->\n\n在项目根目录添加 .github/workflows/integrate.yml\n\n真的是气死个人，这段yml是cv来的，别人就能正常运行，但是我拿过来就报错。首先就是报错NextJS包里有`appKey??**`,\n一开始我看到这个还以为是这个包里有ES6语法，编译出问题。就用babel.config配置去编译node_modules，我也不知道编译对了没有总之没有生效，想来是错了\n后来我用windows的node环境试了一下这个语法发现node是可以用的，于是我猜测会不会是workflows的node版本过低，升级了版本就好了。。。。\n\n```yml\nname: Build and Deploy\non: \n  push:\n    branches:\n      - blog-next\njobs:\n  build-and-deploy:\n    # 虚拟机环境 ubuntu-latest，ubuntu-18.04或ubuntu-16.04\n    # windows-latest，windows-2019或windows-2016\n    # macOS-latest或macOS-10.14\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout\n        uses: actions/checkout@v2.3.1\n        with:\n          persist-credentials: false\n\n      - name: Cache\n        uses: actions/cache@v2\n        with:\n          path: ${{ github.workspace }}/.next/cache\n          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}\n\n      - name: Install and Build\n        uses: actions/setup-node@v3\n        with:\n          node-version: 16\n      - run: npm install\n      - run: npm run transMD\n      - run: npm run build\n      - run: npm run export\n        env:\n            CI: true\n      - run: touch out/.nojekyll\n\n      - name: Deploy\n        uses: JamesIves/github-pages-deploy-action@3.7.1\n        with:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n          BRANCH: lj-pages\n          FOLDER: out # The folder the action should deploy.\n          CLEAN: true # Automatically remove deleted files from the deploy branch\n```",createTime:1682073065671,lastUpdateTime:1682073065671},{id:4,title:"Git常用操作",desc:"git常用命令记录，主要是容易忘",tag:["git"],content:"# Git常用操作\n\ngit常用命令记录，主要是容易忘\n\n<!-- [git] -->\n\n>`git pull -f origin master:master`\n  如果远程分支和本地分支代码相差太大，可以考虑用远程的覆盖本地代码",createTime:1682073065671,lastUpdateTime:1682073065671},{id:5,title:"NextJS打包相关问题",desc:"NextJS打包相关问题以及解决办法，更多参见[Next文档](https://www.nextjs.cn/)",tag:["Next","打包"],content:"# NextJS打包相关问题\n\nNextJS打包相关问题以及解决办法，更多参见[Next文档](https://www.nextjs.cn/)\n<!-- [Next,打包] -->\n\n>Eslint、Ts类型校验关闭\n```js\n  // next.config.js\n\n  const nextConfig = {\n  \n    eslint:{\n      ignoreDuringBuilds:true\n    },\n      typescript: {\n      // !! WARN !!\n      // Dangerously allow production builds to successfully complete even if\n      // your project has type errors.\n      // !! WARN !!\n      ignoreBuildErrors: true,\n    }\n  }\n```\n\n\n\n> Image Optimization using Next.js' default loader is not compatible with `next export`.\n\n```JS\nmodule.exports = {\n  // https://github.com/vercel/next.js/issues/21079\n  // Remove this workaround whenever the issue is fixed\n  images: {\n    loader: 'imgix',\n    path: '',\n  },\n}\n```\n\n> 图片加载不出来",createTime:1682073065671,lastUpdateTime:1682073065671},{id:6,title:"NextJS打包配置学习",desc:"NextJS打包配置对应字段了解，进行简单的打包测试",tag:["Next","next.config.js"],content:'# NextJS打包配置学习\n\nNextJS打包配置对应字段了解，进行简单的打包测试\n<!-- [Next,next.config.js] -->\n> `assetPrefix` 静态资源前缀\n```js\n  const nextConfig = {\n    assetPrefix:\'/前缀\'\n  }\n```\n\n> `Redirects` 将source原路径重定向到destination新路径，访问的是destination路径;\n```JS\n// 最终访问的是/blog路径,浏览器显示的也是blog路径\nconst nextConfig = {\n  redirects() {\n    return [\n      {\n        source: "/",\n        destination: "/blog",\n        permanent: true\n      }\n    ]\n  },\n}\n```\n> `Rewrites`  将原路径充当代理以此来屏蔽目标路径。浏览器显示的是destination路径，实际访问的是source路径；功能类似于**userRouter.push(path,as)**中 参数**as**的功能;\n```JS\n// 浏览器显示的是"/blog"，实际访问的是"/"路径\nconst nextConfig = {\n  async rewrites() {\n    return [\n      {\n        source: \'/\',\n        destination: \'/blog\'\n      }\n    ]\n  },\n}\n```',createTime:1682073065671,lastUpdateTime:1682073065671}]},2974:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return w}});var s=t(8598),o=t(2684),a=t(3820),r=t.n(a),i=t(4376),l=t(6565),u=t.n(l);function c(n){let{label:e}=n;return(0,s.jsx)("span",{className:u().tag,style:null==n?void 0:n.style,children:e})}var p=t(185),d=t.n(p);function m(n){let{title:e,desc:t,tag:o,createTime:a,lastUpdateTime:r,id:l}=n,u=(0,i.useRouter)();return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:d().card,onClick:function(){u.push({pathname:"/blog/detail/".concat(l)})},children:[(0,s.jsx)("h4",{children:e}),(0,s.jsx)("p",{className:d().desc,children:t}),(0,s.jsx)("div",{className:d()["tag-container"],children:o.map((n,e)=>(0,s.jsx)(c,{label:n,style:{marginLeft:".1em"}},e))})]})})}function g(n){return(0,s.jsxs)("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,s.jsx)("img",{src:"/images/nodata.png",alt:"...",style:{height:"20em",width:"20em",marginTop:"10em"}}),(0,s.jsx)("h5",{style:{marginTop:"2em"},children:"没得咯~"})]})}var h=t(6135),x=t.n(h);function f(n){return(0,o.useRef)(),(0,s.jsx)("div",{className:x()["search-bar-container"],children:(0,s.jsx)("input",{className:x()["search-input"],onChange:e=>{var t;return t=e.target.value,void("function"==typeof n.onValueChange&&n.onValueChange(t))},placeholder:"输入标题/简述/标签进行搜索"})})}function w(n){let[e,t]=(0,o.useState)(""),a=(0,o.useMemo)(()=>r().filter(n=>{let t=RegExp(e,"i");return t.test(n.title)||t.test(n.desc)||n.tag.some(n=>t.test(n))}),[e]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(f,{onValueChange:n=>{t(n)}}),(0,s.jsx)("div",{style:{flex:1,overflowY:"scroll"},children:a.length?a.map((n,e)=>(0,o.createElement)(m,{...n,key:"".concat(e)})):(0,s.jsx)(g,{})})]})}},185:function(n){n.exports={card:"BlogCard_card__ieja8",desc:"BlogCard_desc__SLlJ3","tag-container":"BlogCard_tag-container__U0v0s",bcs:"BlogCard_bcs__UBqdk"}},6135:function(n){n.exports={"search-bar-container":"SearchBar_search-bar-container__py15g","search-input":"SearchBar_search-input___pYqj"}},6565:function(n){n.exports={tag:"Tag_tag__XHvaX"}}},function(n){n.O(0,[774,888,179],function(){return n(n.s=7801)}),_N_E=n.O()}]);