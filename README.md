# 何峻宸 Junchen He · Academic Website

面向 PhD 申请的个人学术网站。首次访问默认英文，可切换中文，并记住语言选择。

## 网站内容

- 个人简介与教育背景。
- 2 段实习（位于研究与项目之前）、6 个研究与工程项目及 4 个演示视频链接、荣誉奖项、证书与语言能力及学生工作。
- 其他实践经历：QQbot Webhook 部署、个人服务器建站、康奈尔笔记服务与 Minecraft 服务器部署，并附个人撰写的 CSDN 技术文档。
- 道路场景重建项目附 GitHub 代码仓库链接。
- Interesting things：常去地点、奶茶排行榜及最近在听的音乐。
- 响应式布局、键盘导航和无 JavaScript 时的完整英文内容。
- 采用原有绿色主题，结合轻量圆角和教育时间线，保持学术申请所需的信息层次。

## 文件结构

本仓库直接以根目录作为静态网站目录，无需安装依赖或运行构建服务。

| 文件 | 用途 |
| --- | --- |
| `index.html` | 主页与静态英文内容 |
| `content.js` | 共用的中英文资料 |
| `render.js` | 主页的渲染结构 |
| `site.js` | 语言切换、语言记忆与页面标题 |
| `styles.css` | 桌面与移动端样式 |
| `favicon.svg` | 浏览器图标 |
| `images/` | 个人肖像及小米、杉数科技的公司标志 |
| `.nojekyll` | 静态文件发布标记 |

## 本地查看

双击 `index.html` 即可预览。右上角 EN / 中文 按钮切换语言；主页支持 `?lang=en` 和 `?lang=zh`。

## 更新与发布

文字资料在 `content.js`，布局结构在 `render.js`，样式在 `styles.css`。`index.html` 还包含无 JavaScript 时使用的英文内容，修改英文资料时也需同步。

本地原始 `academic-site` 项目保留了生成与校验脚本：在原项目更新后，运行 `node build.mjs` 和 `node verify.mjs`，再将其 `dist` 内全部文件复制到本仓库根目录并提交。

GitHub Pages 使用 `main` 分支的 `/(root)` 目录。发布目录中必须包含上述全部静态文件，特别是 `content.js`、`render.js` 和 `site.js`。
