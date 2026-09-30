# Shane.O 的技术博客

记录互联网架构、编程语言、AI 落地相关的学习与实践。

## 主题

计算机基础 · Go · Java · Python · Rust · AI · 容器 · 中间件 · 架构设计

## 技术栈

基于 [Astro](https://astro.build/) + [astro-wanderer](https://github.com/igagansingh/astro-wanderer) 主题，通过 GitHub Actions 自动构建并发布到 GitHub Pages。

## 本地开发

```bash
git clone https://github.com/shaneou-link/shaneou-link.github.io.git
cd shaneou-link.github.io
npm install
npm run dev      # http://localhost:4321
```

构建与预览：

```bash
npm run build    # 产出 dist/
npm run preview  # 本地预览构建产物
npm run check    # TypeScript / Astro 类型检查
```

## 写作一篇新文章

1. 在 `src/content/blog/` 下新建 `.md` 文件（文件名建议英文连字符）
2. 按下面 frontmatter schema 填写
3. `draft: true` 时不会出现在生产构建中

```yaml
---
title: 文章标题
description: 一句话简介
pubDate: 2026-09-30
updatedDate: 2026-10-15       # 可选
tags: ["go", "architecture"]  # 9 个标签 slug 之一
series: "Go 进阶"             # 可选
seriesOrder: 1                # 可选，正整数
draft: false                  # true 则仅本地可见
heroImage: /images/x.jpg      # 可选
---
```

可用 `tags` slug：`cs-fundamentals`、`go`、`java`、`python`、`rust`、`ai`、`containers`、`middleware`、`architecture`。

## 添加一个新 Project

在 `src/content/projects/` 下新建 `.md` 文件：

```yaml
---
title: 项目名
description: 项目简介
repoUrl: https://github.com/shaneou-link/xxx
demoUrl: https://xxx.example.com    # 可选
stack: ["Go", "Kubernetes"]
startDate: 2025-03-01
endDate:                       # 可选，不填表示进行中
order: 0                       # 越小越靠前
---
```

## 部署

`push` 到 `main` 分支 → `.github/workflows/deploy.yml` 自动构建 → 发布到 GitHub Pages。

首次部署需要在 GitHub 仓库 Settings → Pages → Source 选 **"GitHub Actions"**。

## License

[MIT](./LICENSE)
