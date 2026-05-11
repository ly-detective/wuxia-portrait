# AI Cinematic Wuxia Portrait

这是一个静态网页项目，用来展示“真人武侠写真定制”作品。

项目只使用普通 HTML、CSS、JavaScript，不需要 React、Vue、Vite 或 Node。可以直接用 VS Code 的 Live Server 运行，也适合上传到 GitHub Pages。

## 文件说明

- `index.html`：网页内容和页面结构，例如首页、作品展示、套餐、流程、常见问题、联系区。
- `style.css`：网页样式，例如深色背景、排版、按钮、卡片、手机端适配。
- `script.js`：简单交互，例如点击 `Contact Me` 按钮弹出提示。
- `images`：作品图片文件夹，你自己的武侠写真图片需要放在这里。
- `README.md`：项目说明文档。

## 图片命名方法

项目里已经创建好了 `images` 文件夹。

请把你自己的 6 张武侠写真图片放进 `images` 文件夹，并命名为：

```text
work-1.jpg
work-2.jpg
work-3.jpg
work-4.jpg
work-5.jpg
work-6.jpg
```

放好以后，图片路径会变成：

```text
images/work-1.jpg
images/work-2.jpg
images/work-3.jpg
images/work-4.jpg
images/work-5.jpg
images/work-6.jpg
```

这些图片会自动显示在网页的“作品展示区”。

如果暂时没有图片，网页会显示深色占位效果，不会影响页面结构。

## 如何用 VS Code + Live Server 运行

1. 用 VS Code 打开这个项目文件夹。
2. 在 VS Code 扩展市场搜索并安装 `Live Server`。
3. 打开 `index.html`。
4. 右键页面，选择 `Open with Live Server`。
5. 浏览器会自动打开网页。

## 如何上传到 GitHub

1. 登录 GitHub，新建一个仓库。
2. 仓库名可以叫 `wuxia-portrait`。
3. 在电脑上打开这个项目文件夹。
4. 使用 Git 初始化并提交代码：

```bash
git init
git add .
git commit -m "Create wuxia portrait website"
```

5. 按照 GitHub 新仓库页面提示，添加远程仓库并推送：

```bash
git remote add origin https://github.com/你的用户名/wuxia-portrait.git
git branch -M main
git push -u origin main
```

## 如何用 GitHub Pages 发布

1. 打开 GitHub 仓库页面。
2. 点击 `Settings`。
3. 在左侧找到 `Pages`。
4. 在 `Build and deployment` 里选择：
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/root`
5. 点击保存。
6. 等待几十秒到几分钟，GitHub 会生成一个网址。

发布成功后，你的网站地址通常类似：

```text
https://你的用户名.github.io/wuxia-portrait/
```
