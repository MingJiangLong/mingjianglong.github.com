# Git Workflow
解决开发之后需要做的事，打包上线
<!-- [Git Workflow] -->

在项目根目录添加 .github/workflows/integrate.yml

NextJS 示例
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
    # runs-on: ubuntu-latest
    runs-on: windows-latest

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
        uses: actions/setup-node@v1
      - run: npm install
      - run: npm run build
      - run: npm run export
        env:
            CI: true
      - run: touch out/.nojekyll

      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@3.7.1
        with:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          BRANCH: lj-pages
          FOLDER: out # The folder the action should deploy.
          CLEAN: true # Automatically remove deleted files from the deploy branch
```