# 马瑞浠 · 个人作品集网站

一个专业的商业分析作品集网站，展示数据分析能力和 BI 工具应用经验。

## 🚀 功能特性

- **响应式设计** — 完美适配桌面、平板和手机
- **专业简洁** — 强调数据和成果，突出商业分析能力
- **项目展示** — 详细展示凯捷咨询和中国贸易报的项目经历
- **技能评估** — 可视化展示专业能力水平
- **平滑导航** — 优雅的页面滚动和导航体验

## 📋 网站结构

- **首页 (Hero)** — 个人介绍和核心统计数据
- **凯捷咨询项目** — BI 分析、可视化、报告撰写能力展示
- **中国贸易报项目** — 数据处理和系统搭建能力展示
- **技能部分** — 技能分类和专业能力评估
- **关于我** — 教育背景、实习经历和联系方式

## 🛠️ 技术栈

- **React 18** — 前端框架
- **Vite** — 构建工具
- **CSS3** — 样式和响应式设计
- **JavaScript ES6+** — 编程语言

## 📦 安装和运行

### 前置要求
- Node.js 16+
- npm 或 yarn

### 安装依赖
```bash
cd portfolio-website
npm install
```

### 开发模式
```bash
npm run dev
```
访问 `http://localhost:5173`

### 生产构建
```bash
npm run build
```

### 预览生产构建
```bash
npm run preview
```

## 📁 项目结构

```
portfolio-website/
├── src/
│   ├── components/          # React 组件
│   │   ├── Navigation.jsx   # 导航栏
│   │   ├── Hero.jsx         # 首页
│   │   ├── CapgeminiProject.jsx    # 凯捷项目
│   │   ├── ChinaTradeProject.jsx   # 中国贸易报项目
│   │   ├── Skills.jsx       # 技能部分
│   │   ├── About.jsx        # 关于我
│   │   ├── Footer.jsx       # 页脚
│   │   └── *.css            # 组件样式
│   ├── styles/
│   │   └── global.css       # 全局样式
│   ├── App.jsx              # 主应用组件
│   ├── main.jsx             # 入口文件
│   └── index.css            # 基础样式
├── public/                  # 静态资源
├── package.json             # 项目配置
└── vite.config.js          # Vite 配置
```

## 🎨 自定义

### 修改颜色主题
编辑 `src/styles/global.css` 中的 CSS 变量

### 更新个人信息
- 编辑各个组件中的文本内容
- 更新 `src/components/About.jsx` 中的教育和实习信息

## 📱 响应式设计

网站在以下断点处进行响应式调整：
- **桌面** — 1024px 及以上
- **平板** — 768px - 1023px
- **手机** — 768px 以下

## 🚀 部署

### 部署到 Vercel（推荐）
1. 将项目推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动部署完成

### 部署到 Netlify
1. 运行 `npm run build`
2. 将 `dist` 文件夹拖放到 Netlify

## 📧 联系方式

- **邮箱** — maruixi2005@163.com
- **电话** — 18081212576
- **位置** — 北京

---

**最后更新** — 2026年05月18日
