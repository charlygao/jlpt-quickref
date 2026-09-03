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

JLPT 官方没有公布逐条固定的完整词汇/语法清单，因此等级属于学习参考分级，不代表官方考纲。

## 功能

- JLPT N5 / N4 / N3 / N2 / N1 分级
- 语法：中文解释、接续规则、日文例句与中文翻译
- 词汇：假名读音、词性、中文释义；精选词条另带日中例句
- 全文搜索：支持日文、读音、中文释义和例句
- 已读标记与等级进度
- 自动记录上次阅读位置，重新打开页面后可继续阅读
- 大词表渐进渲染：词汇默认每批 80 条，避免手机一次创建数千张卡片
- 深色模式
- 完全静态，无后端、无数据库
- GitHub Pages 自动部署与数据完整性校验

## 完整词汇底库

`data/full-vocab.js` 由 `scripts/build_full_vocab.py` 从 **Tomoshi Dictionary Open Data v2026-08-12** 自动抽取生成：

- 只提取社区 JLPT N5–N1 分级词条
- 提取主要日文表记与假名读音
- 使用简体中文释义
- 将 JMdict 详细词性归并成学习者易读的中文词性标签
- 按“表记 + 读音”去重
- 与本仓库人工整理的精选词条叠加；发生重复时优先保留本仓库带例句/人工释义的版本

该开放数据涉及 JMdict / EDRDG、Tomoshi (Y1Z) 与社区 JLPT 元数据，改编词典数据按 **CC BY-SA 4.0** 提供。完整署名和修改说明见 [`FULL_VOCAB_NOTICE.md`](FULL_VOCAB_NOTICE.md)。

## 数据更新

完整词汇生成流程位于：

```text
scripts/build_full_vocab.py
.github/workflows/import-full-vocab.yml
```

导入工作流会下载固定版本的 Tomoshi 开放数据库、校验 SHA-256、生成 `data/full-vocab.js` 并提交结果。

Pages 部署前还会执行：

- 所有 JavaScript 文件语法检查
- N5–N1 数据实际加载测试
- ID 重复检查
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
│   └── full-vocab.js
├── scripts/
│   └── build_full_vocab.py
└── .github/workflows/
    ├── pages.yml
    └── import-full-vocab.yml
```
