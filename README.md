# 日语语法・词汇速查（JLPT N5 → N1）

面向中文母语者的静态日语快速参考网站，适合在手机上利用碎片时间复习。

## 功能

- JLPT N5 / N4 / N3 / N2 / N1 分级
- 语法：含中文解释、接续规则、日文例句与中文翻译
- 词汇：含读音、词性、中文释义、日文例句与中文翻译
- 全文搜索
- 已读标记与等级进度
- 自动记录上次阅读位置，重新打开页面后自动恢复
- 深色模式
- 完全静态，无后端、无数据库
- 响应式移动端布局

> JLPT 官方并未公布逐条固定的语法/词汇清单。本项目的等级归类参考常见教材与备考体系，定位是快速参考，而非官方出题范围声明。

## 本地预览

```bash
python3 -m http.server 8000
```

然后打开 `http://localhost:8000`。

## GitHub Pages

项目包含 GitHub Pages Actions 工作流。推送到 `main` 后，可在仓库 Settings → Pages 中将 Source 设为 **GitHub Actions**。之后每次更新 `main` 都会自动部署。

## 项目结构

```text
.
├── index.html
├── styles.css
├── app.js
├── data.js
├── README.md
└── .github/workflows/pages.yml
```
