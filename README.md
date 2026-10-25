# 何峻宸 Junchen He · 学术个人网站

面向 PhD 申请的静态个人主页，内容依据 `CV2026.docx` 整理。首次访问默认英文，可在右上角切换中文；语言选择会被浏览器记住，主页与 CV 之间保持所选语言。

## 预览与使用

双击 `dist/index.html` 即可打开。也可以在本目录执行 `node preview.mjs`，然后访问 `http://127.0.0.1:8000`。不需要安装依赖。

- 主页包含个人简介、研究兴趣、教育、6 个研究与工程项目、2 段实习、荣誉、技能、教学与校园活动、联系方式。
- `dist/cv.html` 提供完整项目贡献、奖项与活动，也支持中英文切换。
- 在 CV 页点击 **Print / Save as PDF** 或 **打印 / 另存为 PDF**，使用浏览器打印生成 PDF；建议关闭浏览器默认页眉页脚，并检查最终分页。
- 用 `index.html?lang=en` 或 `index.html?lang=zh` 可直接指定语言；CV 页也支持相同参数。
- JavaScript 不可用时，仍可阅读完整英文主页和英文 CV。

公开站点沿用原有 Sites 地址，发布状态见 `发布结果.md`。原始 Word 文件只保留在本地，网站以学术邮箱和城市作为联系信息。

## 内容依据

教育、日期、项目、实习、成绩、获奖、技能与活动依据提供的 CV；中文姓名为何峻宸。未添加论文、代码仓库或 CV 未提供的数值结果。实用新型专利表述为“申请审查中”，不表示已经授权。

研究兴趣根据已有经历与用户指定的 [Xiang Li 老师主页](https://www.xiang-li.phd/)、[Situated Reality Lab 研究介绍](https://www.situated-reality.org/research.html)和[招募要求](https://www.situated-reality.org/join-us/)整理（查阅：2026-10-26）：

- 面向 XR 的空间感知：从三维高斯重建、GPS 轨迹校正与流式系统出发。
- 具身与可穿戴交互：从臂环、传感器集成与机器人控制出发。
- 可部署的交互系统：从跨平台开发、用户测试、服务器部署与热设计实习出发。

这些内容表述为未来博士研究兴趣。既有经历中没有加入 Unity、C#、LLM/VLM、多模态模型或 XR 研究成果等未经 CV 支持的能力或成绩，也未声称与该实验室存在隶属或合作关系。

实习起止日期按原 CV 的日/月/年解释：杉数科技为 2025 年 11 月至 2026 年 1 月，小米为 2025 年 7 月。原 CV 的手机号码、详细住址、学校“985/211”标签未纳入公开页面，其余主要经历已整理至主页和 CV。

## 日常维护

| 文件 | 用途 |
| --- | --- |
| `dist/content.js` | 中英双语内容，修改文字主要编辑这里 |
| `dist/render.js` | 主页与 CV 的共同结构 |
| `dist/site.js` | 语言切换、语言记忆、页面标题与描述 |
| `dist/styles.css` | 桌面、手机和 CV 打印样式 |
| `dist/index.html` | 可直接打开的英文主页，含完整静态内容 |
| `dist/cv.html` | 可直接打开的英文 CV，含完整静态内容 |
| `dist/cv.js` | 浏览器打印按钮 |
| `build.mjs` | 编辑内容后，刷新静态英文 HTML |
| `verify.mjs` | 检查双语内容、链接与交互逻辑 |
| `preview.mjs` | 本地静态预览服务器 |
| `.openai/hosting.json` | 原 Sites 站点标识与静态目录，保留 |

修改 `content.js` 或 `render.js` 后执行：

```powershell
node build.mjs
node verify.mjs
```

部署只需要 `dist` 中的静态文件，不需要运行 Node 服务。网页已移除模板提示、占位符和 `noindex`；搜索引擎是否收录由搜索引擎决定。

## GitHub Pages

也可以把 `dist` **里面的全部文件**上传到 GitHub Pages 仓库根目录：包括 `content.js`、`render.js`、`site.js`、`cv.js`、样式、图标和 `.nojekyll`。仓库根目录应直接包含 `index.html`。在仓库 Settings → Pages 中选择发布分支与根目录。

后续更新同样替换所有修改的文件。使用已有正式 PDF 时，将其放入 `dist`，并在 `render.js` 中调整 CV 链接后执行 `node build.mjs`。
