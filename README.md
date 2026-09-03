# Terui Nuxt 4

Terui 本地站点的 Nuxt 4 版本。原先的项目只是给 WordPress/Avada 导出的静态站点套了一层 Nuxt 外壳 —— 由 Nuxt/Nitro 中间件把 `site/` 里的原始 HTML 原样回吐，页面本身没有任何 Vue 组件。

本版本把它改造成**真正由 Nuxt 渲染的应用**：

- **文件路由**：每个页面都是 `app/pages/**` 下的一个真实 Nuxt 页面（`.vue`），由 Nuxt 的 file-based routing、SSR 与客户端 hydration 驱动。
- **Nuxt 统一管理 head**：标题、meta、所有 CSS `link` / 内联 `style` / 脚本（含 body 底部脚本）都通过 `useHead` 注入，保证字体、样式与插件的加载顺序一致。
- **资产走 Nuxt public**：`site/` 的静态资源（`wp-content/`、`wp-includes/`、字体、图片、`local-commerce.js` 等）复制到项目根 `public/`，由 Nuxt/Nitro 原生提供，不再使用静态 HTML 回吐中间件。
- **外观与交互零改动**：为了保持与 Avada CSS 逐像素一致，Page 模板忠实复现了源站的 class 结构（`useHead` 中的 `bodyAttrs` 复刻了每页的 `<body class>`），因此渲染结果与源站逐像素一致；交互（加入购物车、上下滑 off-canvas 搜索、商品列表/网格切换、数量调节、结账）也保持一致。

## 目录结构

- `app/`：Nuxt 应用入口（`app.vue`、`default` 布局、`composables/`、`pages/**`）
- `app/pages/**`：每个路由一个真实 Vue 页面组件
- `public/`：由 `site/` 复制而来的静态资源（Nuxt 原生提供）
- `site/`：WordPress/Avada 原始导出，作为像素/交互一致性的参照源（`pnpm site:original` 静态服务于 5173）
- `verification/`：一致性验证脚本

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

像素/交互一致性验证会把 **Nuxt 渲染结果** 与 **原始静态站点**（`pnpm site:original`，默认 5173）比较。由于真实 Vue SSR 渲染的 HTML 字节与 WordPress 输出天然不同，验证以**渲染像素**与**交互状态**为准，而不是比较 HTML 字节。

```bash
# 终端 1：服务原始静态站点（参照）
ORIGINAL_PORT=5173 pnpm site:original

# 终端 2：服务 Nuxt 构建产物
pnpm build && PORT=5174 node .output/server/index.mjs

# 终端 3：运行验证
ORIGINAL_URL=http://localhost:5173 NUXT_URL=http://localhost:5174 pnpm verify
ORIGINAL_URL=http://localhost:5173 NUXT_URL=http://localhost:5174 pnpm verify:record
```

验证产物保存在 `artifacts/verification/`，包括桌面和移动端截图、像素差异图、JSON 报告及交互对比视频。

## 说明：关于「完全用 Nuxt 重写 / 组件化」的程度

当前实现已经做到：去掉静态回吐中间件、每页是真实 Nuxt 路由、head 由 Nuxt 管理、SSR + hydration 生效、交互用 composables 承载。但受制于「样式/像素零改动」这个硬约束，**页面模板仍忠实保留了 Avada 的 class 级 DOM**（这些 class 正是 Avada CSS 的定位依据；改动结构会破坏样式）。因此 `app/pages/**` 的大型页面里存在与源站相同的深嵌套标记，且 header/footer 等外壳块在每个页面中会重复出现，尚未进一步抽成独立复用的 `SiteHeader.vue` / `SiteFooter.vue` 组件。

如果你需要**下一步把它进一步拆成语义化的可复用 Vue 组件**（把外壳、产品卡、页脚等抽成独立组件），可以在「可以接受一定的样式/结构重构」的前提下继续推进 —— 否则保持当前逐像素一致的形态是最稳的。
