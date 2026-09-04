# 日语语法・词汇速查（JLPT N5 → N1）

面向中文母语者的静态日语快速参考网站，适合在手机上利用碎片时间复习。

在线版：https://charlygao.github.io/jlpt-quickref/

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

当前语法库共 **889 条日中例句**。所有 388 个语法点至少有 2 条例句；多接续语法额外增加按 `N / V / い形 / な形 / 普通形` 等分支标记的覆盖例句。

JLPT 官方没有公布逐条固定的完整词汇/语法清单，因此等级属于学习参考分级，不代表官方考纲。

## 功能

- JLPT N5 / N4 / N3 / N2 / N1 分级
- 语法：中文解释、接续规则、日中对照例句；语法卡片只在标题区显示 JLPT 等级，不重复显示“级别”信息框
- 接续元素可点击：`N`、`V`、`普通形/基本体`、`辞书形`、`ます形`、`て形`、`ない形`、`可能形`、`意向形`、`被动形`、`使役形` 等会打开浮窗，说明定义、构成和变形规则
- 词汇：假名读音、中文释义和详细词性，例如 `五段动词・自动词`、`一段动词・他动词`、`名词・サ变`、`い形容词`、`な形容词`
- 有活用的词汇提供 **“变形一览”**：按五段 / 一段 / サ变 / カ变 / い形容词 / な形容词生成主要现代日语活用
- 全文搜索：支持日文、读音、中文释义、详细词性和例句
- 已读标记与等级进度
- 自动记录上次阅读位置，重新打开页面后可继续阅读
- 大词表渐进渲染：词汇默认每批 80 条，避免手机一次创建数千张卡片
- 深色模式；桌面端弹窗、手机端底部浮层
- 完全静态，无后端、无数据库
- GitHub Pages 自动部署与数据完整性校验

## 语法例句与接续参考

语法补充数据位于：

```text
data/grammar-examples-base.js
data/grammar-examples-n5.js ... grammar-examples-n1.js
data/grammar-examples-auto.js
data/grammar-terms.js
```

`grammar-examples-n5.js ... n1.js` 为需要区分接续分支的语法补充针对性例句，并使用 `covers` 标出覆盖的接续；`grammar-examples-auto.js` 为剩余语法补足第二个不同语境的例句。原始语法 ID 不变，因此历史已读状态和继续阅读位置仍可沿用。

`grammar-terms.js` 提供接续术语的统一定义和活用说明，避免在每张语法卡片中重复解释。

## 完整词汇底库

`data/full-vocab.js` 由 `scripts/build_full_vocab.py` 从 **Tomoshi Dictionary Open Data v2026-08-12** 自动抽取生成：

- 只提取社区 JLPT N5–N1 分级词条
- 提取主要日文表记与假名读音
- 使用简体中文释义
- 从 JMdict POS 标签保留详细活用类别和自/他动信息
- 按“表记 + 读音”去重
- 与本仓库人工整理的精选词条叠加；发生重复时保留精选词条的人工释义/例句，同时用完整底库更详细的词性补强原词条

该开放数据涉及 JMdict / EDRDG、Tomoshi (Y1Z) 与社区 JLPT 元数据，改编词典数据按 **CC BY-SA 4.0** 提供。完整署名和修改说明见 [`FULL_VOCAB_NOTICE.md`](FULL_VOCAB_NOTICE.md)。

## 数据更新

完整词汇生成流程位于：

```text
scripts/build_full_vocab.py
.github/workflows/import-full-vocab.yml
```

导入工作流会下载固定版本的 Tomoshi 开放数据库、校验 SHA-256、生成 `data/full-vocab.js` 并提交结果。

Pages 部署前会执行：

- 所有 JavaScript 文件语法检查
- N5–N1 数据实际加载测试
- ID 重复检查
- 所有语法点至少 2 条完整日中例句
- 接续分支例句覆盖数量检查
- 接续术语参考数据完整性检查
- 各等级最低词汇覆盖量检查
- 总语法/词汇数量门槛检查

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
├── app.js
├── FULL_VOCAB_NOTICE.md
├── data/
│   ├── base.js
│   ├── n5.js ... n1.js
│   ├── extra-base.js
│   ├── extra-n5.js ... extra-n1.js
│   ├── full-vocab.js
│   ├── grammar-terms.js
│   ├── grammar-examples-base.js
│   ├── grammar-examples-n5.js ... grammar-examples-n1.js
│   └── grammar-examples-auto.js
├── scripts/
│   └── build_full_vocab.py
└── .github/workflows/
    ├── pages.yml
    └── import-full-vocab.yml
```
