# Terui Nuxt 4

Nuxt 4 版本的 Terui 本地站点。原始页面、样式、资源与浏览器交互保存在 `site/`，由 Nuxt/Nitro 原样提供，避免框架迁移改变现有 DOM、CSS 优先级或脚本执行顺序。

## 本地运行

```bash
pnpm install
pnpm start
```

默认访问地址：<http://localhost:3000>

指定端口：

```bash
pnpm start -- --port 5174
```

## 构建与验证

```bash
pnpm build
ORIGINAL_URL=http://localhost:5173 NUXT_URL=http://localhost:5174 pnpm verify
ORIGINAL_URL=http://localhost:5173 NUXT_URL=http://localhost:5174 pnpm verify:record
```

验证产物保存在 `artifacts/verification/`，包括桌面和移动端截图、像素差异图、JSON 报告及交互对比视频。
