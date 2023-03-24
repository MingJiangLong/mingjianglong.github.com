# Blog

记录开发日常,ε=(´ο｀*)))唉太难了，找工作总是有傻屌问我有没有blog
<!-- [博客说明，吐槽] -->
## Getting Started

项目MD文件需要放在`/blogs`目录下，执行`/savaBlogs.js`会遍历blogs目录下所有md文件并格式化成json放在`/data/index.js`文件中;
md文件需要遵循一定的规则：
* 首行标题 `# 标题`
* 标题后紧跟MD文件简述 
* 文章标签格式:`<!-- [标签1,标签2] -->`

  ```
    # 标题
    我是文章描述
    <!-- [标签1,标签2] -->
    
  ```
项目运行
```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
```
