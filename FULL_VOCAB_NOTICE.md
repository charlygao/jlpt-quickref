# 完整 JLPT 词汇数据来源与许可

`data/full-vocab.js` 是本项目的完整 JLPT 分级词汇底库，由 `scripts/build_full_vocab.py` 从 **Tomoshi Dictionary Open Data** 自动生成。

## 数据来源

生成版本当前固定为 **Tomoshi Dictionary Open Data v2026-08-12**：

- Tomoshi Dictionary Open Data: https://github.com/tomoshi-app/tomoshi-dict-data
- Tomoshi 派生中文数据：© Y1Z
- JMdict：© Electronic Dictionary Research and Development Group (EDRDG)
- `vocab_jlpt` 的 JLPT 分级：Jonathan Waller's JLPT Resources，经 `stephenmk/yomitan-jlpt-vocab` 整合

Tomoshi 开放数据库中的 `entries`、`zh_defs` 与 `vocab_jlpt` 等本项目实际使用的表均按 **Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)** 提供。详见上游：

- License: https://github.com/tomoshi-app/tomoshi-dict-data/blob/main/LICENSE.md
- Notice: https://github.com/tomoshi-app/tomoshi-dict-data/blob/main/NOTICE.md
- CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/

因此，`data/full-vocab.js` 中由上述数据改编生成的词典数据同样按 **CC BY-SA 4.0** 提供。

> Tomoshi 名称与 logo 等品牌标识不包含在开放许可中。本项目仅使用开放数据，不代表 Tomoshi 官方或获得其背书。

## 本项目做过的修改

相对于上游 SQLite 数据库，本项目的生成脚本进行了以下转换：

1. 仅保留 `vocab_jlpt` 中 N5 / N4 / N3 / N2 / N1 的词条。
2. 从 JMdict/Tomoshi entry 中选择一个主要表记和与之匹配的主要假名读音。
3. 提取简体中文释义，并合并、去重多个常见义项；为了移动端速查控制长度，只保留有限数量的释义。
4. 将上游词性信息归并成较粗粒度的中文标签（如名词、动词、形容词、副词等）。
5. 以“表记 + 读音”为键去重，并转换为浏览器可直接加载的 JavaScript 静态数据。
6. 不复制 Tomoshi 开放层未包含的例句、重音、专有关系数据等内容。

完整词表是社区 JLPT 等级估计，不是日本国际交流基金会/日本国际教育支援协会公布的官方逐词清单。
