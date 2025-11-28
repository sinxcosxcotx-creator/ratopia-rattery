ratopia-rattery/
├─ index.html
├─ package.json
├─ vite.config.js
├─ postcss.config.cjs
├─ tailwind.config.cjs
│
├─ public/
│   └─ assets/                     # 所有图片（JSON 只写路径）
│
└─ src/
    ├─ main.jsx                    # React 入口
    ├─ App.jsx                     # App 框架
    ├─ router/
    │   └─ AppRouter.jsx           # 所有路由
    │
    ├─ layouts/
    │   └─ MainLayout.jsx          # 主布局（Navbar + Footer + Router 渲染）
    │
    ├─ components/
    │   ├─ navigation/
    │   │   ├─ Navbar.jsx
    │   │   ├─ MobileMenu.jsx
    │   │   ├─ LanguageSwitcher.jsx
    │   │   └─ Footer.jsx
    │   │
    │   ├─ renderer/               # “内容渲染器”层（核心）
    │   │   ├─ PageRenderer.jsx            # 读取页面级 JSON 并渲染整个页面
    │   │   ├─ SectionRenderer.jsx         # 渲染单个 Section
    │   │   ├─ BlockRenderer.jsx           # 渲染复杂 block（卡片/网格/列表）
    │   │   ├─ HeroRenderer.jsx            # 页面顶部 Hero
    │   │   ├─ CardRenderer.jsx            # 卡片渲染通用组件
    │   │   ├─ GridRenderer.jsx            # 网格布局
    │   │   ├─ GalleryRenderer.jsx         # 图片组渲染
    │   │   ├─ RichText.jsx                # 渲染富文本（从 JSON 数组）
    │   │   └─ Divider.jsx                 # 分割线
    │   │
    │   ├─ ui/
    │   │   ├─ Button.jsx
    │   │   ├─ Card.jsx
    │   │   └─ Badge.jsx
    │   │
    │   └─ domain/                 # 与鼠舍业务相关的组件
    │       ├─ MouseCard.jsx
    │       └─ BloodlineCard.jsx
    │
    ├─ pages/
    │   ├─ JSONPage.jsx            # 接受一个 pageName，调用 PageRenderer
    │   │                          # 全站所有页面将是 JSONPage + content JSON
    │
    ├─ content/                    # ★ 内容层（所有文字、图片路径、结构）
    │   ├─ home.json
    │   ├─ philosophy.json
    │   ├─ science/
    │   │   ├─ index.json          # 科普主页面
    │   │   ├─ genetics.json
    │   │   ├─ care.json
    │   │   └─ health.json
    │   ├─ bloodlines.json
    │   ├─ adoption.json
    │   └─ contact.json
    │
    ├─ data/                       # 动态数据（可能会变化，如可领养鼠只）
    │   ├─ adoptions.json
    │   └─ bloodlines.json
    │
    ├─ i18n/
    │   ├─ i18n.js
    │   └─ locales/
    │       ├─ zh/common.json
    │       └─ en/common.json
    │
    ├─ styles/
    │   ├─ index.css
    │   └─ theme.css
    │
    └─ utils/
        ├─ constants.js
        ├─ loadJSON.js             # 异步加载 JSON 工具
        ├─ useScrollToTop.js
        └─ helper.js               # 通用函数
