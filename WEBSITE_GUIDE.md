# 同济 RobotX 团队网站内容与维护说明

> 本文面向负责网站内容维护的队员。网站基于 Jekyll 构建并由 GitHub Pages 部署；日常更新通常只需要修改 Markdown、YAML 数据和素材文件，不需要改动模板代码。

## 1. 网站用途

网站用于对外介绍 Tongji MRL 团队及 RobotX 2026 准备工作，主要展示：

- 团队、指导教师、负责人和各工作组；
- 当前开发的 USV（无人水面艇）和 UAV（无人机）平台；
- Mission Task 1、3、4 的准备方向；
- 经确认的测试进度、图片、视频和新闻；
- 招募方向、联系方式和合作支持信息。

网站目前不展示 UUV，因为团队当前只开发 USV 和 UAV。不要自行加入尚未确认的平台、能力、参数或比赛成果。

## 2. 网站目前展示的页面

| 页面                | 展示内容                                                       | 对应源码                                                                          | 当前状态                          | 需要补充                                                   |
| ------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------- | ---------------------------------------------------------- |
| 首页 `/`            | 全屏 Hero、快捷入口、团队简介、USV/UAV、任务、测试动态、赞助商 | `_pages/about.md`、`_data/home.yml`、`_data/systems.yml`、`_data/missions.yml`    | 结构完成，浅色 Hero 已启用        | 测试记录、赞助商、后续动态；获得合适照片后可启用 Hero 背景 |
| About Us `/people/` | 团队合照、领导层、硬件/软件/宣传组、成员弹窗、视频区           | `_pages/profiles.md`、`_data/team.yml`                                            | 分组和头像已有                    | 中文姓名、职责、简介、邮箱、个人链接及团队演示视频         |
| Robot X `/robot-x/` | USV/UAV 系统、Task 1/3/4、测试记录                             | `_pages/robot-x.md`、`_data/systems.yml`、`_data/missions.yml`、`_data/tests.yml` | 页面结构完成，任务均为 `Planning` | 两个平台正式图片与技术介绍、实际方案、验证后的测试资料     |
| Media `/media/`     | 按类别展示已验证图片和视频                                     | `_pages/media.md`、`_data/media.yml`                                              | 仅有已确认的 Logo 设计图          | Robot Assembly、Field Tests、Team Activities 素材          |
| Join Us `/join-us/` | 机械、硬件、软件、规划、宣传等招募方向                         | `_pages/join-us.md`                                                               | 方向说明已有                      | 招募时间、申请流程和官方联系方式                           |
| News `/news/`       | 经确认的新闻和阶段性更新                                       | `_pages/news.md`、`_news/`                                                        | 页面可访问，暂无公开新闻          | 新建真实、可公开的新闻记录                                 |
| 404 `/404.html`     | 无效地址提示                                                   | `_pages/404.md`                                                                   | 已完成                            | 通常无需修改                                               |

`Blog`、`CV`、`Projects`、`Publications` 等 al-folio 示例页面已设置 `published: false`，不是当前官网公开栏目。

## 3. 网站现有功能

| 功能                 | 用户如何使用 / 出现位置                            | 主要文件                                                                  | 维护注意事项                                                            |
| -------------------- | -------------------------------------------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 顶部导航             | 进入首页、About Us、Robot X、Media、Join Us        | `_includes/header.liquid`                                                 | 修改公共导航后检查所有页面和手机菜单                                    |
| 白天/黑夜模式        | 点击导航末尾图标切换，浏览器保存选择               | `assets/js/theme.js`、`_sass/_themes.scss`                                | 只有两种模式；修改时同时检查图标、文字对比和键盘操作                    |
| 首页 Hero 与快捷入口 | 首屏展示队伍定位，可跳转主要栏目或向下滚动         | `_pages/about.md`、`_data/home.yml`、`assets/js/home-experience.js`       | 背景图由 `use_background_image` 控制；图片关闭时不会请求资源            |
| 页面内导航           | Robot X 顶部按钮跳到系统、任务和测试区             | `_pages/robot-x.md`                                                       | 修改标题锚点时同步修改入口链接                                          |
| 成员卡片和详情弹窗   | 点击主要成员查看资料；灰色辅助成员不可点击         | `_data/team.yml`、`_includes/team-*.liquid`、`assets/js/member-dialog.js` | `Leader` 自动排在组内首位；发布个人资料前须本人确认                     |
| 图片与视频           | Media、团队页及数据卡片展示素材                    | `_includes/figure.liquid`、`_includes/video.liquid`                       | 本地视频支持 MP4/WebM/Ogg；其他地址以 iframe 嵌入，须确认授权和可访问性 |
| 响应式布局           | 桌面双/多列，手机自动单列                          | `_sass/_home.scss`、`_sass/_people.scss`、`_sass/_team-site.scss`         | 更新长标题或图片后检查 375px、768px 和桌面宽度                          |
| 自动部署             | 合并或推送到 `main` 后由 GitHub Actions 构建并部署 | `.github/workflows/deploy.yml`                                            | PR 会先构建检查，不应手工上传 `_site/`                                  |

网站当前没有站内搜索功能，也没有搜索快捷键。

## 4. 文件夹和重要文件说明

| 路径                       | 用途                 | 通常存放什么                              | 是否建议队员直接修改                  |
| -------------------------- | -------------------- | ----------------------------------------- | ------------------------------------- |
| `_pages/`                  | 固定页面             | 首页、Robot X、Media、Join Us 等 Markdown | 可修改文字；复杂 Liquid 结构谨慎修改  |
| `_news/`                   | 新闻条目             | 每条新闻一个 Markdown 文件                | 可以，需使用真实日期和内容            |
| `_posts/`                  | al-folio 博客示例    | 当前未公开的模板文章                      | 不建议作为队伍成果直接启用            |
| `_data/`                   | 集中内容数据         | 成员、系统、任务、测试、媒体、赞助商      | 可以，必须保持 YAML 格式和字段结构    |
| `_includes/`               | 可复用模板           | 导航、页脚、成员卡片、图片/视频组件       | 不建议普通队员随意修改                |
| `_layouts/`                | 页面骨架             | HTML 页面布局                             | 不建议直接修改                        |
| `_sass/`                   | 网站样式             | 颜色、卡片、响应式和暗色模式              | 需要了解 CSS/SCSS 后修改              |
| `assets/img/`              | 图片素材             | 团队图片、成员头像和页面图片              | 可以添加规范命名的已授权图片          |
| `assets/img/team/`         | 成员头像             | 每名成员的 JPG 头像                       | 可以，替换后同步检查 `_data/team.yml` |
| `assets/video/`            | 本地视频             | 当前含 al-folio 模板示例视频              | 可放确认后的视频，不要误用模板素材    |
| `assets/pdf/`              | PDF 附件             | 当前仅有模板示例 PDF                      | 可添加公开附件；不要把示例当队伍资料  |
| `assets/css/`              | 样式入口和编译后依赖 | `main.scss`、第三方 CSS                   | 一般不直接修改生成文件                |
| `assets/js/`               | 前端脚本             | 主题、首页动画、成员弹窗等                | 需要了解 JavaScript 后修改            |
| `_config.yml`              | 全站配置             | 网站名称、域名、主题开关、SEO             | 谨慎修改；YAML 错误会导致全站无法构建 |
| `Gemfile`                  | Ruby/Jekyll 依赖     | 构建插件                                  | 不建议普通内容维护者修改              |
| `.github/workflows/`       | GitHub Actions       | 构建、部署、格式和链接检查                | 不建议随意修改                        |
| `_site/`、`.jekyll-cache/` | 自动生成内容和缓存   | 本地构建产物                              | 不可手工修改，不应提交                |

首页不是根目录 `index.md`，实际入口是 `_pages/about.md`，其 `permalink` 为 `/`。

## 5. 图片、视频和附件放在哪里

- **正式 Logo：** 当前 `_config.yml` 的 `icon` 为空，仓库尚未配置独立正式 Logo。建议以后将授权文件命名为 `team-logo.svg`，放入 `assets/img/` 后再配置引用。
- **首页背景：** 当前配置为 `assets/img/TJMRL.jpg`，但 `use_background_image: false`，所以首页不加载它作为背景。
- **USV/UAV 图片：** `_data/systems.yml` 的 `image` 当前为空。建议使用 `assets/img/usv-overview.jpg`、`assets/img/uav-overview.jpg`。
- **成员头像：** 放在 `assets/img/team/`，建议如 `member-zhang-san.jpg`；头像宜使用统一的正方形裁切，建议至少 600×600 像素。
- **测试和新闻图片：** 当前没有专用子目录，可先放在 `assets/img/`，例如 `test-2026-08-06.jpg`、`news-2026-open-day.jpg`。如以后数量很多，可再统一规划目录，不要现在擅自重构。
- **赞助商 Logo：** 当前没有素材，建议 `assets/img/sponsor-name.svg`，并在 `_data/sponsors.yml` 引用。
- **PDF 附件：** 放在 `assets/pdf/`。现有 `example_pdf.pdf` 是模板示例，不是队伍资料。
- **视频：** 本地文件放在 `assets/video/`，或在数据的 `video` 字段填写可嵌入地址。大视频更适合使用经过授权的公开视频平台链接。

文件名统一使用小写英文和短横线，不使用空格、中文、`微信图片`、`最终版2` 等临时名称。上传前压缩过大的原始照片，更新后检查引用路径、画质、alt 文字和移动端显示。

## 6. 目前还需要补充的内容

### 高优先级

- USV、UAV 正式照片、状态和经确认的技术介绍；
- Task 1、3、4 的实际方案、阶段进度和验证材料；
- `_data/tests.yml` 中可公开的测试记录（当前为空）；
- 成员中文姓名、职责、80～150 字简介及本人确认的公开联系方式；
- Join Us 的招募时间、流程和官方联系渠道。

### 中优先级

- 团队演示视频；
- 各 Media 分类的真实图片或视频；
- 经确认的新闻和活动记录；
- 指导教师与负责人更完整的公开介绍；
- 合作方和赞助商信息（当前 `_data/sponsors.yml` 为空）。

### 后续可选（建议）

- 中文/英文切换；
- 项目开发时间线、技术文章和比赛结果；
- 经授权的公开下载资料。

| 优先级 | 需要提供的内容        | 推荐格式            | 建议文件名                             | 放置位置                             | 对应页面      |
| ------ | --------------------- | ------------------- | -------------------------------------- | ------------------------------------ | ------------- |
| 高     | USV/UAV 正式照片      | JPG/WebP，横向高清  | `usv-overview.jpg`、`uav-overview.jpg` | `assets/img/`                        | 首页、Robot X |
| 高     | Task 1/3/4 方案与进度 | 经审核文字、图片    | `task-1-test-2026-08-06.jpg`           | `_data/missions.yml`、`assets/img/`  | Robot X       |
| 高     | 测试记录              | YAML、JPG、视频链接 | `test-2026-08-06.jpg`                  | `_data/tests.yml`、`assets/img/`     | 首页、Robot X |
| 高     | 招募流程与联系方式    | 经确认文字          | —                                      | `_pages/join-us.md`、`_config.yml`   | Join Us、页脚 |
| 中     | 成员资料              | YAML、正方形 JPG    | `member-zhang-san.jpg`                 | `_data/team.yml`、`assets/img/team/` | About Us      |
| 中     | 新闻与活动            | Markdown、JPG       | `2026-08-06-field-test.md`             | `_news/`、`assets/img/`              | News          |
| 中     | 赞助商资料            | SVG/PNG             | `sponsor-name.svg`                     | `_data/sponsors.yml`、`assets/img/`  | 首页          |

## 7. 团队成员信息填写模板

成员使用 `_data/team.yml` 的现有 YAML 结构，例如：

```yaml
- id: zhang-san
  name_zh: 张三
  name_en: San Zhang
  role: Perception Engineer
  group: Software
  photo: assets/img/team/member-zhang-san.jpg
  leadership: false
  responsibilities:
    - Camera calibration and object detection
  email: confirmed-public-email@example.com
  bio: 80～150字、经本人确认的团队经历和负责内容。
  links:
    github: https://github.com/example
    linkedin:
  assignments:
    - subgroup: Perception
      role:
      auxiliary: false
```

`email` 填写后会在成员详情弹窗公开显示；不希望公开时保持为空。头像建议正方形、至少 600×600 像素并统一构图。简介建议 80～150 字。姓名、照片、邮箱、链接和简介发布前必须由本人确认。

## 8. 新增或更新内容的操作流程

1. 根据本文索引找到对应页面或 `_data/` 文件。
2. 将已授权图片放到正确目录，使用规范文件名。
3. 修改文字、YAML 字段和图片路径；不要破坏缩进。
4. 首次准备环境可运行 `npm ci`；不要随意升级依赖。
5. 推荐使用 Docker 预览：

   ```bash
   docker compose pull
   docker compose up
   ```

   然后访问 `http://localhost:8080`。已有 Ruby 依赖时也可运行 `bundle exec jekyll serve`。

6. 检查桌面端和手机端、明暗主题、图片、链接、成员弹窗和导航。
7. 运行检查：

   ```bash
   npx prettier . --check
   bundle exec jekyll build
   git diff --check
   ```

8. 用 `git diff` 确认只修改了预期内容，再交由负责人审核、提交。

## 9. 修改网站时的注意事项

- 不修改或提交 `_site/`、`.jekyll-cache/`、`node_modules/` 等生成内容和缓存。
- 不随意删除 `_includes/`、`_layouts/`、`.github/workflows/` 或 `_config.yml` 配置。
- YAML 使用两个空格缩进；包含冒号等特殊字符的文字应加引号。
- 不公开手机号、私人邮箱、内部地址、账号凭据或未经本人同意的照片。
- 图片、视频、Logo 和外部链接发布前确认授权及有效性。
- 不把 al-folio 示例图片、PDF、视频、文章或新闻当成队伍成果。
- 不发布尚未验证的参数、技术能力、测试结果和比赛成绩。
- 修改导航、主题或公共组件后检查所有公开页面。
- 网站当前没有 UUV 和站内搜索；不要未经确认重新加入。
- 始终先本地预览和构建，再提交 Git。

## 10. 快速维护索引

| 想修改的内容                   | 对应文件或目录                                    |
| ------------------------------ | ------------------------------------------------- |
| 首页文字                       | `_data/home.yml`、`_pages/about.md`               |
| 首页背景                       | `_data/home.yml`、`assets/img/`                   |
| 团队成员                       | `_data/team.yml`、`assets/img/team/`              |
| USV 内容                       | `_data/systems.yml`                               |
| UAV 内容                       | `_data/systems.yml`                               |
| Mission Task 1/3/4             | `_data/missions.yml`                              |
| 测试记录                       | `_data/tests.yml`                                 |
| Media 内容                     | `_data/media.yml`、`assets/img/`、`assets/video/` |
| 新闻动态                       | `_news/`                                          |
| 招募信息                       | `_pages/join-us.md`                               |
| 赞助商                         | `_data/sponsors.yml`、`assets/img/`               |
| 导航栏                         | `_includes/header.liquid`                         |
| 白天/黑夜主题                  | `assets/js/theme.js`、`_sass/_themes.scss`        |
| 网站名称、域名、SEO 和联系方式 | `_config.yml`                                     |
