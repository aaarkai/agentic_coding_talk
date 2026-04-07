# Agentic Coding 演讲幻灯片 - 开发任务清单

基于 `docs/agentic-coding-slides.md` 规格文档拆解。

---

## Phase 1: 项目骨架

### 任务清单

- [x] 1.1 `git init` 初始化仓库
- [x] 1.2 创建 `.gitignore` (node_modules, dist, .env, *.log 等)
- [x] 1.3 初始化 Vite + React + TypeScript 项目
  - 创建 `package.json`
  - 创建 `vite.config.ts`
  - 创建 `tsconfig.json`
  - 创建 `tsconfig.node.json`
  - 创建 `index.html`
- [x] 1.4 配置 Tailwind CSS 4 (CSS-first @theme)
  - 安装 tailwindcss
  - 创建 `src/index.css` 并配置 design tokens
- [x] 1.5 创建 `src/lib/slide-types.ts` - TypeScript 类型定义
- [x] 1.6 创建 `src/components/SlideProvider.tsx` - 状态管理 Context
- [x] 1.7 创建 `src/components/Slide.tsx` - 幻灯片容器组件
- [x] 1.8 创建 `src/slides/registry.ts` - 幻灯片注册表
- [x] 1.9 创建 `src/slides/01-cover.tsx` - 第一张示例幻灯片
- [x] 1.10 创建 `src/App.tsx` - 顶层布局
- [x] 1.11 创建 `src/main.tsx` - 应用入口
- [x] 1.12 验证最小可运行版本

### 验收标准

| 标准 | 验收状态 |
|------|----------|
| `pnpm dev` 成功启动，控制台无报错 | ✅ 通过 |
| 页面显示封面幻灯片，背景色为 #faf9f6 (Ivory) | ✅ 通过 |
| 热更新正常工作 | ✅ 通过 |
| `pnpm build` 构建成功，无 TypeScript 错误 | ✅ 通过 |

---

## Phase 2: 导航系统

### 任务清单

- [x] 2.1 实现 `src/components/NavControls.tsx`
  - 上一页/下一页按钮
  - 禁用状态样式（第一张禁用上一页，最后一张禁用下一页）
- [x] 2.2 实现 `src/components/ProgressBar.tsx`
  - 顶部进度条
  - 显示当前页码 (如 3/17)
- [x] 2.3 实现 `src/hooks/useKeyboardNav.ts`
  - `←` / `→` 箭头键导航
  - `Space` 下一页
  - ~~`Home` 跳到第一张~~ (已移除，用户不需要)
  - ~~`End` 跳到最后一张~~ (已移除，用户不需要)
- [x] 2.4 实现 `src/hooks/useHashSync.ts`
  - URL hash 同步 (#slide-1, #slide-2, ...)
  - 刷新页面保持当前幻灯片位置 (已知问题: 首次加载时 hash 解析存在时序竞争，后续 Phase 统一处理)
- [x] 2.5 在 App.tsx 中集成所有导航组件
- [x] 2.6 添加测试幻灯片 (02-05) 以验证导航

### 验收标准

| 标准 | 验收状态 |
|------|----------|
| 点击上一页/下一页按钮可切换幻灯片 | ✅ 通过 |
| 键盘 `←` `→` 可导航 | ✅ 通过 |
| `Space` 跳到下一页 | ✅ 通过 |
| URL 显示 `#slide-N` 格式 | ✅ 通过 |
| 刷新页面保持在当前幻灯片 | ⚠️ 已知问题 (hash 解析时序竞争) |
| 进度条正确显示当前位置 | ✅ 通过 |
| 第一张时上一页按钮禁用，最后一张时下一页按钮禁用 | ✅ 通过 |

---

## Phase 3: 内容组件库

### 任务清单

- [ ] 3.1 实现 `src/content/Heading.tsx`
  - 支持 h1/h2/h3 三级标题
  - 应用 Forest Canopy 字体规范
- [ ] 3.2 实现 `src/content/BulletList.tsx`
  - 支持有序/无序列表
  - 支持 stagger 入场动画（Phase 4 启用）
- [ ] 3.3 实现 `src/content/CodeBlock.tsx`
  - 集成 Shiki 代码高亮
  - 支持多语言
  - 异步加载 fallback 样式
- [ ] 3.4 实现 `src/content/TwoColumn.tsx`
  - 左右双列布局
  - 响应式堆叠（移动端）
- [ ] 3.5 实现 `src/content/Callout.tsx`
  - 左边框 4px Olive 色
  - 支持 info/warning/success 类型
- [ ] 3.6 实现 `src/content/IconCard.tsx`
  - 图标 + 标题 + 描述卡片
  - hover 微交互
- [ ] 3.7 实现 `src/content/Stat.tsx`
  - 大数字 + 标签展示
  - 数据强调样式
- [ ] 3.8 实现 `src/content/Quote.tsx`
  - 引用块样式
  - 作者/来源标注
- [ ] 3.9 实现 `src/content/ComparisonTable.tsx`
  - 对比表格
  - 左右两列对比布局
- [ ] 3.10 实现 `src/content/FlowDiagram.tsx`
  - 简单流程图
  - 步骤节点 + 连接箭头
- [ ] 3.11 实现 `src/content/Checklist.tsx`
  - 勾选列表
  - 序号步骤展示

### 验收标准

| 标准 | 验收方式 |
|------|----------|
| 所有组件 TypeScript 类型检查通过 | 运行 `pnpm build`，无类型错误 |
| Heading 组件正确渲染 h1/h2/h3 | 创建测试幻灯片验证各级标题样式 |
| BulletList 正确渲染列表项 | 创建测试幻灯片验证列表样式 |
| CodeBlock 正确高亮代码 | 创建包含 JS/TS 代码的测试幻灯片 |
| TwoColumn 正确显示双列布局 | 创建测试幻灯片验证左右布局 |
| Callout 正确显示提示框 | 创建测试幻灯片验证三种类型 |
| 所有组件符合 Forest Canopy 设计规范 | 目视检查配色、字体、间距 |
| `pnpm build` 构建成功 | 运行命令检查 |

---

## Phase 4: 动画系统

### 任务清单

- [ ] 4.1 安装 Framer Motion 依赖
- [ ] 4.2 实现 `src/components/SlideTransition.tsx`
  - 方向感知滑入/滑出
  - 动画时长 0.35s, easeInOut
- [ ] 4.3 为 BulletList 添加 stagger 入场动画
  - 80ms 间隔依次入场
- [ ] 4.4 为 IconCard 添加 hover 微交互
  - scale + shadow 提升
- [ ] 4.5 为 NavControls 按钮添加 hover 效果
- [ ] 4.6 集成动画到 App.tsx

### 验收标准

| 标准 | 验收方式 |
|------|----------|
| 幻灯片切换有平滑过渡动画 | 点击导航，观察动画效果 |
| 方向感知正确：向右切换从右滑入，向左切换从左滑入 | 来回导航测试 |
| BulletList 元素依次入场 | 打开包含列表的幻灯片，观察动画 |
| 按钮 hover 有 scale 效果 | 鼠标悬停按钮 |
| IconCard hover 有 scale + shadow | 鼠标悬停卡片 |
| 动画流畅无卡顿 | 多次切换测试 |

---

## Phase 5: 内容填充

### 任务清单

- [ ] 5.1 实现 `src/slides/01-cover.tsx` - 封面
- [ ] 5.2 实现 `src/slides/02-agenda.tsx` - 目录
- [ ] 5.3 实现 `src/slides/03-core-thesis.tsx` - 核心论点
- [ ] 5.4 实现 `src/slides/04-harness-definition.tsx` - Harness 定义
- [ ] 5.5 实现 `src/slides/05-two-modes-overview.tsx` - 双模式总览
- [ ] 5.6 实现 `src/slides/06-plan-problem.tsx` - PLAN 问题与边界
- [ ] 5.7 实现 `src/slides/07-plan-success.tsx` - PLAN 成功标准
- [ ] 5.8 实现 `src/slides/08-plan-solution.tsx` - PLAN 方案与验收
- [ ] 5.9 实现 `src/slides/09-code-execution.tsx` - CODE 执行流程
- [ ] 5.10 实现 `src/slides/10-human-role.tsx` - 人在执行阶段干什么
- [ ] 5.11 实现 `src/slides/11-intent-drift.tsx` - 意图漂移
- [ ] 5.12 实现 `src/slides/12-context-engineering.tsx` - 上下文工程
- [ ] 5.13 实现 `src/slides/13-defense-rules.tsx` - 防御规则
- [ ] 5.14 实现 `src/slides/14-maker-checker.tsx` - Maker-Checker 模式
- [ ] 5.15 实现 `src/slides/15-action-steps.tsx` - 实操步骤清单
- [ ] 5.16 实现 `src/slides/16-summary.tsx` - 总结
- [ ] 5.17 实现 `src/slides/17-thank-you.tsx` - 致谢
- [ ] 5.18 更新 `registry.ts` 注册所有幻灯片

### 验收标准

| 标准 | 验收方式 |
|------|----------|
| 17 张幻灯片全部可导航访问 | 使用键盘或按钮逐一检查 |
| 每张幻灯片内容完整，符合 spec 描述 | 对照 spec 检查内容 |
| 对比表格正确渲染 (03, 04) | 目视检查 |
| 流程图正确渲染 (05, 09) | 目视检查 |
| Callout 正确显示 (06, 08, 10) | 目视检查 |
| Checklist 正确显示 (15) | 目视检查 |
| 中英文混排美观 | 目视检查排版 |
| 代码块正确高亮 | 检查包含代码的幻灯片 |

---

## Phase 6: 打磨与优化

### 任务清单

- [ ] 6.1 安装 Lucide React 图标库
- [ ] 6.2 为需要的幻灯片添加图标
- [ ] 6.3 实现 `src/hooks/useSwipe.ts`
  - 触摸滑动切换幻灯片
- [ ] 6.4 响应式布局适配
  - 移动端布局调整
  - 平板布局调整
- [ ] 6.5 性能优化
  - React.memo 包装组件
  - useMemo 优化计算
- [ ] 6.6 打印样式优化
  - 添加 `@media print` 样式
  - 测试浏览器打印/PDF 导出
- [ ] 6.7 最终构建测试
  - `pnpm build`
  - `pnpm preview`

### 验收标准

| 标准 | 验收方式 |
|------|----------|
| 移动端 (375px) 布局正常 | 浏览器 DevTools 模拟 iPhone SE |
| 平板 (768px) 布局正常 | 浏览器 DevTools 模拟 iPad |
| 桌面 (1920px) 布局正常 | 全屏浏览器检查 |
| 触摸滑动切换幻灯片 | 在触摸设备或 DevTools 模拟触摸测试 |
| 浏览器打印预览效果良好 | Ctrl/Cmd + P 检查打印预览 |
| PDF 导出清晰可读 | 打印为 PDF 文件检查 |
| `pnpm build` 成功，dist 目录生成 | 运行命令检查 |
| `pnpm preview` 正常运行 | 运行命令，浏览器访问预览 |

---

## 项目状态

- 当前 Phase: Phase 3 — 内容组件库
- 当前任务: 内容组件库开发中
- 最后更新: 2026-04-07
- Phase 1: ✅ 完成 (2026-04-07)
- Phase 2: ✅ 完成 (2026-04-07) — 已知问题: hash 刷新时序竞争，后续统一处理
