# vue3 学习

vue3搭建一个小项目，项目用于公司零售柜价格设置。项目选型之所以选vue3，主要是用了我之前很久远的一个Vue2脚手架,写起来有点膈手，外加上vue3在国内火，想着是小项目就随便我折腾了。

<!-- [vue,vite,前端] -->

---
首先去搜索引擎找了一个脚手架vite,一路enter就好了。对了vue3的全局状态管理推荐用**pinia**了，狗头保命...之前我都没听说这个玩意
> npm create vite@latest

创建完了，跑起项目就 可以看到"Hello World"了。

我这边是一个H5项目，需要做屏幕适配。所以 `postcss-pxtorem`+ `autoprefixer`+`amfe-flexible` install到项目里，然后按照demo配置一下。最主要的就是`rootValue`这个属性，设计稿除以10

```JS
 //.postcssrc.cjs
 module.exports = {
  plugins: {
    autoprefixer: {
      Browserslist: ["Android >= 4.0", "iOS >= 7"],
    },
    "postcss-pxtorem": {
      rootValue: 37.5, //结果为：设计稿元素尺寸/37.5，比如元素宽375px,最终页面会换算成 10rem
      propList: ["*"],
      // 黑名单
      // selectorBlackList: [
      //   'van-'
      // ],
    },
  },
};
```

UI整的是`Vant`,为什么用这个，我也很纳闷，设计又不按照这个UI组件设计，领导又让用这个库，总之项目Ui自定义高就别用什么组件了,自己费尽整一套就好，


最后整个`axios`和css预编译,框框就差不多了。

接着就是看一下Vue APi 配方和以前大差不差。以前很讨厌vue整一个大对象，把所有的东西都塞里面，看起来很廉价。现在这个组合式的感觉像是那么回事了。

* defineProps
* defineEmit
* defineProps
* watch
* watEffect
* ref
* reactive
* computed
* ...

对了我的编辑器是vscode,如果要用vue3 就不要用`vuter`了提示支持不友好，新的插件`volar`，如果vscode下载不下来就需要去官网下载，把包里package.json vscode版本改的和自己编辑器的版本一眼,再手动安装,详细教程搜索引擎自取。

中间碰到一个很恶心的事情,Vant的组件有很多自定义css样式,想全局修改。index.html修改失败，按照官网的:root:root也不行，最后就整了一个js文件在入口统一修改...囧
```JS
  export function updateVantCSSVar() {
    let cssVar = [
      ['--van-tabs-bottom-bar-color', '#FF7500'],
      ['--van-tabs-nav-background', 'transparent'],
      ['--van-field-label-width', '5.5em'],
    ]

    cssVar.forEach(item => {
      document.documentElement.style.setProperty(item[0], item[1])
    })
  }
```

顺路又学了一下less定义全局变量
```JS
// VITE.CONFIG.JS
export default defineConfig(({ mode }) => {
  return {
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {
            // 这个用来定义全局变量的
            hack: `true; @import "${path.resolve(__dirname, "./src/assets/css/base.less")}"`
            // '--van-field-label-width': '6.3em'
          },
          globalVars: {

          },
        }
      }
    }
  }
})

  //base.less
  @test-color: red;
  @goods-img: 60px;
  @yellow: #FF7500;

```

最后打包，默认的是`/`,建议配置 `base`为`./`,不然如果项目不是在根目录就找不到静态资源了。

### 碰到的糟心问题

  - 白屏

    如果任何报错都没有,建议检查router的模式是否用的是`history`




