# 日语语法・词汇速查（JLPT N5 → N1）

面向中文母语者的静态日语快速参考网站，适合在手机上利用碎片时间复习。

在线版：https://charlygao.github.io/jlpt-quickref/

## Supabase 登录与进度同步

页面使用 Supabase Auth 登录，并把已登录用户的“掌握 / 关注”状态保存到
`public.user_progress`。未登录状态仍保存在浏览器本机；第一次登录会合并本机和云端状态，
之后登录时以云端为准，离线操作会在恢复网络后补同步。

新用户注册已关闭；页面只提供已有账号登录，Supabase Auth 的 `Allow new users to sign up`
必须保持关闭。

部署前在对应 Supabase 项目执行：

`supabase/migrations/202609040001_create_user_progress.sql`

该迁移会启用 RLS，匿名用户无权访问进度表，登录用户只能读写自己的记录。

## 当前内容规模

完整数据加载并去重后：

| 等级 | 语法 | 词汇 |
|---|---:|---:|
| N5 | 50 | 773 |
| N4 | 95 | 648 |
| N3 | 72 | 1,693 |
| N2 | 74 | 1,962 |
| N1 | 97 | 3,159 |
| **合计** | **388** | **8,235** |

列表卡片共 **794 条日中例句**，全部 388 张语法卡片各有 2～3 条例句，每句标注实际使用的接续。所有详情均已改写为“说明与场景例句相邻”的格式：**336 份讲解、1,078 条详情例句**（按讲解统计，变体共享内容），覆盖常见用法、易错点、比较及必要的特殊情况，列表保持简短。

词汇按常用度参考排序。N5 的 **773 个词**、N4 的 **648 个词**、N3 的 **1,693 个词**、N2 的 **1,962 个词**与 N1 的 **3,159 个词已全部覆盖**，全站 **8,235 个词**均有独立、人工审核的例句。

JLPT 官方没有公布逐条固定的完整词汇/语法清单，因此等级属于学习参考分级，不代表官方考纲。

## 内容原则

**本项目在数据导入和页面运行时不自动生成例句。** 错误或机械的例句比没有例句更有害，因此词典导入、词频处理和页面运行时都没有造句 fallback：

- 完整词库导入只处理词形、读音、中文释义、词性和频率元数据；
- 语法说明与例句按语法 ID 显式保存，每个用法、易错点和特殊情况都配日中例句与解析；
- 词汇例句按明确词条人工整理并标记为 reviewed；
- 如果某个词没有经过审核的例句，页面就只显示词义和词性；
- CI 会拒绝 `examples-auto` 文件、运行时例句替换逻辑，以及高频词例句覆盖缺失。

## 功能

- JLPT N5 / N4 / N3 / N2 / N1 分级
- 语法：中文解释、接续规则、日中对照例句
- 接续元素可点击：`N`、`V`、`普通形/基本体`、`辞书形`、`ます形`、`て形`、`ない形`、`可能形`、`意向形`、`被动形`、`使役形` 等会打开浮窗，说明定义、构成和变形规则
- 词汇：假名读音、中文释义和详细词性，例如 `五段动词・自动词`、`一段动词・他动词`、`名词・サ变`、`い形容词`、`な形容词`
- 有活用的词汇提供 **“变形一览”**
- 词汇按频率优先排列，高学习价值词优先出现
- 分类目录：完整列出当前类型和等级的条目，点击定位；掌握、关注和上次阅读位置仅用图标标识
- “掌握”“关注”双标签与等级掌握进度
- 点击语法卡片正文任意位置打开详情（按钮、接续链接等保留原操作）；每次从详情顶部开始，浮窗上下保留可点击的关闭区域
- 长按任意卡片约 450ms 显示快捷轮盘，按住左滑选择掌握、右滑选择关注，松手切换；回到中间松手取消
- 卡片序号显示“当前分类位置 / 分类总量”，筛选与词汇分批加载时保留完整分类中的位置
- 右下操作区自上而下为目录、筛选、回到顶部，底部按实际可见区域定位
- 常驻右下操作区，可筛选“显示全部 / 仅显示未掌握 / 仅显示关注”
- 自动记录上次阅读位置
- 大词表渐进渲染：词汇默认每批 80 条
- 下滑后筛选区收进紧凑 header
- 深色模式；桌面端与手机端自适应说明浮窗，并锁定背景滚动
- 完全静态，无后端、无数据库
- GitHub Pages 自动部署与数据完整性校验

## 词汇频率排序

完整词条会附带频率元数据并在各 JLPT 等级内重新排序：

1. 主要使用 Tomoshi 开放数据库中的 **entry-level `freq_rank`**，该排名按 JMdict 词条本身关联，避免只按表面字符串排序造成同形异义污染；
2. `wordfreq 3.1.1` 的日语 Zipf 频率作为辅助语料信号；
3. 未获得可靠词条级频率的长尾词排在已排名词之后。

这只是学习优先级参考，不是 JLPT 官方排序，也不代表所有语域中的绝对口语频率。详细说明与署名见 [`FREQUENCY_NOTICE.md`](FREQUENCY_NOTICE.md)。

由于本次频率重排会改变卡片位置，阅读状态存储版本已升级为 `jlptQuickRef.v2`，旧的阅读位置不会继续沿用。

## 语法例句与接续参考

页面语法内容的编辑入口：

```text
data/grammar-lessons-n5.js ... grammar-lessons-n1.js
data/grammar-lessons.js
data/grammar-terms.js
```

各等级讲解文件保存释义、接续、列表例句及结构化详情，都是显式静态数据；`grammar-lessons.js` 检查覆盖后按 ID 应用。基础数据定义原有目录，早期 `grammar-examples-*` 文件仍保留，最终显示内容统一由讲解文件提供，不存在按标题匹配、替词或运行时造句逻辑。

`grammar-terms.js` 提供接续术语的统一定义和活用说明。

全部 388 张卡片共用 336 份讲解，普通体／礼貌体、汉字／假名变体保持内容一致，原有卡片 ID、等级、顺序与学习进度保持兼容。旧版通用详情已移除。编写与验收要求见 [`docs/grammar-authoring.md`](docs/grammar-authoring.md)。

## 词汇例句

词汇例句分为两层：

```text
data/vocab-examples-review.js
data/vocab-examples-highfreq-n5.js ... vocab-examples-highfreq-n1.js
```

`vocab-examples-review.js` 保存早期精选词的人工复查例句；`vocab-examples-highfreq-*` 分批为各级词汇提供独立、人工审核的高质量例句，目前已按页面渲染顺序完整覆盖 N5 的 773 词、N4 的 648 词、N3 的 1,693 词、N2 的 1,962 词和 N1 的 3,159 词。频率排序本身不会产生任何例句。

## 完整词汇底库

`data/full-vocab.js` 由 `scripts/build_full_vocab.py` 从 **Tomoshi Dictionary Open Data v2026-08-12** 自动抽取生成：

- 只提取社区 JLPT N5–N1 分级词条
- 提取主要日文表记与假名读音
- 使用简体中文释义
- 从 JMdict POS 标签保留详细活用类别和自/他动信息
- 按“表记 + 读音”去重
- 加入 entry-level frequency rank 与辅助 corpus frequency
- **不生成、不导入任何例句**

该开放数据涉及 JMdict / EDRDG、Tomoshi (Y1Z) 与社区 JLPT 元数据，改编词典数据按 **CC BY-SA 4.0** 提供。完整署名和修改说明见 [`FULL_VOCAB_NOTICE.md`](FULL_VOCAB_NOTICE.md)。

## 数据更新

完整词汇生成流程位于：

```text
scripts/build_full_vocab.py
.github/workflows/import-full-vocab.yml
```

导入工作流下载固定版本的 Tomoshi 开放数据库、校验 SHA-256、安装固定版本的频率模型、重新生成 `data/full-vocab.js` 并提交结果。

Pages 部署前会验证：

- 所有 JavaScript 文件语法
- 仓库不存在自动例句生成文件/运行时替换逻辑
- N5–N1 数据可完整加载
- 词汇 frequency rank 排序保持单调
- 按页面渲染顺序，N5 全部 773 词、N4 全部 648 词、N3 全部 1,693 词、N2 全部 1,962 词和 N1 全部 3,159 词均具有人工审核例句（共 8,235 条）
- 所有运行时可见词汇例句均带 reviewed 标记且不重复
- 所有语法点至少 2 条完整日中例句且全部有接续标签；首例标签必须对应例句实际形式，不能直接复用多分支接续说明
- 全部语法详情使用结构化讲解；每个说明块都有例句、译文、目标片段和解析，变体内容一致，空栏目隐藏，文本正确转义
- 接续术语、详细词性和变形数据完整性
- 各级最低词汇量与总内容量

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`。

## 项目结构

```text
.
├── index.html
├── styles.css
├── compact-nav.css
├── app.js
├── compact-nav.js
├── grammar-details-renderer.js
├── grammar-details-ui.js
├── grammar-details.css
├── FULL_VOCAB_NOTICE.md
├── FREQUENCY_NOTICE.md
├── data/
│   ├── base.js
│   ├── n5.js ... n1.js
│   ├── extra-base.js
│   ├── extra-n5.js ... extra-n1.js
│   ├── full-vocab.js
│   ├── vocab-order.js
│   ├── vocab-examples-review.js
│   ├── vocab-examples-highfreq-n5.js ... vocab-examples-highfreq-n1.js
│   ├── grammar-terms.js
│   ├── grammar-examples-base.js
│   ├── grammar-examples-n5.js ... grammar-examples-n1.js
│   ├── grammar-examples-curated.js
│   ├── grammar-examples-review.js
│   ├── grammar-lessons-n5.js ... grammar-lessons-n1.js
│   └── grammar-lessons.js
├── docs/
│   └── grammar-authoring.md
├── scripts/
│   ├── build_full_vocab.py
│   └── check-grammar-lessons.cjs
└── .github/workflows/
    ├── pages.yml
    └── import-full-vocab.yml
```


目录列出当前类型和等级的全部条目，每行仅显示序号、标题和掌握／关注图标；上次阅读位置以行角标书签标出。点击行关闭目录并定位卡片，必要时解除筛选并加载尚未渲染的词汇。

## 离线浏览

打开右上角用户面板，在“离线浏览”中点击“下载全部资源”。保持页面打开，直到显示“已可离线浏览”；包含全部 N5–N1 语法、词汇、例句、详情和登录组件。出发前可用飞行模式重新打开网站验证。无需登录即可下载和离线浏览。

掌握与关注保存在本机。已登录用户在离线重开页面后的操作也会进入该账号的同步队列，联网后合并到云端。登录需要网络。“删除离线资源”只删除资源缓存，不清除学习进度。浏览器清理数据或回收存储空间后需要重新下载。

“检查并更新”下载最新完整离线包，完成后刷新页面使用。下载失败可重试续传，旧包继续可用。构建脚本校验所有资源，按内容生成版本号；每个页面的资源固定到同一版本，避免更新时混用旧脚本与新数据。Service Worker 仅缓存本站静态资源，不缓存 Supabase API 或账号请求。

数据、样式或脚本发布新版本后，页面会在启动、回到前台、恢复网络时检查更新；在前台停留时每 5 分钟检查一次。出现提示后可选“更新并刷新”或“稍后”。只有新包完整下载并校验成功才会刷新；已下载新包时可离线“立即刷新”。用户面板中也保留刷新入口。选择“稍后”会在当前页面内暂缓同一版本的提示，不强制刷新，不清除学习进度。

发布前执行 `node scripts/build-viewport-diagnostics.cjs` 和 `node scripts/build-offline.cjs`，将 `dist/` 发布到 GitHub Pages；现有 Actions 已自动执行。离线功能需要 HTTPS，或本机 localhost。Supabase SDK 固定为本地 `vendor/supabase-2.116.0.js`，许可证见 `vendor/supabase-LICENSE`。
