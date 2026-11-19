# 播客工坊

> 把单集结构、主持串词、实际录音取舍和章节标记保存在同一可接续工程中。

## 简介

河图洛书的独立创作插件，由外部Codex通过河图CLI／MCP读取包内Skill并操作。有声剧拥有多角色混音，朗读审阅拥有文本听读，字幕工坊拥有字幕对齐。本包维护节目结构、顺序剪接、实际声音与章节。外部工具负责录音、识别、复杂混音及生成，不包含RSS托管、发布、投放和付费服务。

## 角色分流

- 作者使用 → [插件中心](https://hetu.limeai.run/plugins/podcast-studio/)
- Agent与功能Review → [功能清单](CAPABILITIES.md)
- 开发与维护 → [完整设计文档](docs/README.md)

## 快速上手

开发需要Node.js 25，安装与验收基线为河图0.12.6。

```bash
npm ci
npm run build
npm run check
npm run test:unit
npm run package
```

## 边界

专业成果沿固定来源与修订接续，正文采纳、定稿、费用和外发独立决定。发行及实际验收范围见[实施记录](docs/08-实施计划与验收记录.md)。
