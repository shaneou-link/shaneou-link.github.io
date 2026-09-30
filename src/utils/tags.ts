import type { BlogTag } from '../content.config';

export const TAG_LABELS: Record<BlogTag, string> = {
  'cs-fundamentals': '计算机基础',
  'go': 'Go',
  'java': 'Java',
  'python': 'Python',
  'rust': 'Rust',
  'ai': 'AI',
  'containers': '容器',
  'middleware': '中间件',
  'architecture': '架构设计',
};

export const TAG_DESCRIPTIONS: Record<BlogTag, string> = {
  'cs-fundamentals': '操作系统、网络、数据结构等基础',
  'go': 'Go 语言与生态',
  'java': 'Java 与 JVM 生态',
  'python': 'Python 与数据 / AI 应用',
  'rust': 'Rust 内存安全与系统编程',
  'ai': 'LLM、AI Agent 与应用落地',
  'containers': 'Docker、Kubernetes 与容器生态',
  'middleware': '消息队列、缓存、RPC 等中间件',
  'architecture': '系统架构与设计模式',
};

export const getTagLabel = (slug: BlogTag): string =>
  TAG_LABELS[slug] ?? slug;

export const getTagDescription = (slug: BlogTag): string =>
  TAG_DESCRIPTIONS[slug] ?? '';
