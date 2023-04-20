# Git Workflow
解决开发之后需要做的事，打包上线
<!-- [Git Workflow] -->

在项目根目录添加 .github/workflows/integrate.yml

真的是气死个人，这段yml是cv来的，别人就能正常运行，但是我拿过来就报错。首先就是报错NextJS包里有`appKey??**`,
一开始我看到这个还以为是这个包里有ES6语法，编译出问题。就用babel.config配置去编译node_modules，我也不知道编译对了没有总之没有生效，想来是错了
后来我用windows的node环境试了一下这个语法发现node是可以用的，于是我猜测会不会是workflows的node版本过低，升级了版本就好了。。。。

```yml
name: Build and Deploy
on: 
  push:
    branches:
      - blog-next
jobs:
  build-and-deploy:
    # 虚拟机环境 ubuntu-latest，ubuntu-18.04或ubuntu-16.04
    # windows-latest，windows-2019或windows-2016
    # macOS-latest或macOS-10.14
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.1
        with:
          persist-credentials: false

      - name: Cache
        uses: actions/cache@v2
        with:
          path: ${{ github.workspace }}/.next/cache
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}

      - name: Install and Build
        uses: actions/setup-node@v3
        with:
          node-version: 16
      - run: npm install
      - run: npm run transMD
      - run: npm run build
      - run: npm run export
        env:
            CI: true
      - run: touch out/.nojekyll

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@3.7.1
        with:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          BRANCH: lj-pages
          FOLDER: out # The folder the action should deploy.
          CLEAN: true # Automatically remove deleted files from the deploy branch
```