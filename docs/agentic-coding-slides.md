# Agentic Coding 工程实践演讲幻灯片

## Context
从零开始创建一个基于 React 19 + TypeScript + Vite + Tailwind CSS 4 的可视化演讲幻灯片项目,用于分享 Agentic Coding 的工程实践经验。内容基于 dimcode.dev 的 Harness Engineering 方法论和 OpenAI/Anthropic 的深度调研报告,聚焦从 PLAN 到 CODE 的完整实践链路。采用 Forest Canopy 风格,中英混合表达。

## 技术方案

### 技术栈
- **核心**: React 19 + TypeScript + Vite
- **样式**: Tailwind CSS 4 (CSS-first @theme 配置)
- **动画**: Framer Motion (后续扩展)
- **图标**: Lucide React + @lobehub/icons (可选)
- **代码高亮**: Shiki

### 项目结构
```
vibe_talk/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── .gitignore
│
├── src/
│   ├── main.tsx                        # App 入口
│   ├── App.tsx                         # 顶层布局 + 键盘处理
│   ├── index.css                       # Tailwind 4 + design tokens
│   │
│   ├── slides/                         # 幻灯片定义 (17 张)
│   │   ├── registry.ts                 # 中央注册表
│   │   ├── 01-cover.tsx
│   │   ├── 02-agenda.tsx
│   │   ├── 03-core-thesis.tsx
│   │   ├── 04-harness-definition.tsx
│   │   ├── 05-two-modes-overview.tsx
│   │   ├── 06-plan-problem.tsx
│   │   ├── 07-plan-success.tsx
│   │   ├── 08-plan-solution.tsx
│   │   ├── 09-code-execution.tsx
│   │   ├── 10-human-role.tsx
│   │   ├── 11-intent-drift.tsx
│   │   ├── 12-context-engineering.tsx
│   │   ├── 13-defense-rules.tsx
│   │   ├── 14-maker-checker.tsx
│   │   ├── 15-action-steps.tsx
│   │   ├── 16-summary.tsx
│   │   └── 17-thank-you.tsx
│   │
│   ├── components/                     # 框架组件
│   │   ├── Slide.tsx                   # 幻灯片容器
│   │   ├── SlideProvider.tsx           # Context + 状态管理
│   │   ├── NavControls.tsx             # 导航按钮
│   │   ├── ProgressBar.tsx             # 进度条
│   │   └── SlideTransition.tsx         # Framer Motion 过渡
│   │
│   ├── content/                        # 内容原语
│   │   ├── Heading.tsx
│   │   ├── BulletList.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── TwoColumn.tsx
│   │   ├── Callout.tsx
│   │   ├── IconCard.tsx
│   │   ├── Stat.tsx
│   │   ├── Quote.tsx
│   │   ├── ComparisonTable.tsx         # 对比表格组件
│   │   ├── FlowDiagram.tsx             # 流程图组件
│   │   └── Checklist.tsx               # 清单组件
│   │
│   ├── hooks/
│   │   ├── useKeyboardNav.ts           # 键盘导航
│   │   ├── useHashSync.ts              # URL hash 同步
│   │   └── useSwipe.ts                 # 触摸手势
│   │
│   └── lib/
│       └── slide-types.ts              # TypeScript 类型定义
```

## 实施步骤

### Phase 1: 项目骨架
1. `git init` 初始化仓库
2. 创建 `.gitignore` (node_modules, dist, .env 等)
3. 初始化 Vite + React + TypeScript 项目
4. 配置 Tailwind CSS 4 (CSS-first @theme)
5. 创建基础文件结构:
   - `src/lib/slide-types.ts` - 类型定义
   - `src/components/SlideProvider.tsx` - 状态管理
   - `src/components/Slide.tsx` - 幻灯片容器
   - `src/slides/registry.ts` - 幻灯片注册表
6. 实现最小可运行版本: 显示一张幻灯片

### Phase 2: 导航系统
1. 实现 `NavControls.tsx` - 上一页/下一页按钮
2. 实现 `ProgressBar.tsx` - 顶部进度指示器
3. 实现 `hooks/useKeyboardNav.ts` - 键盘导航 (← → Space Home End)
4. 实现 `hooks/useHashSync.ts` - URL hash 同步 (#slide-1)
5. 测试导航功能完整性

### Phase 3: 内容组件库
1. 实现 `content/Heading.tsx` - 标题组件 (h1/h2/h3)
2. 实现 `content/BulletList.tsx` - 列表组件 (支持 stagger 动画)
3. 实现 `content/CodeBlock.tsx` - 代码高亮 (Shiki)
4. 实现 `content/TwoColumn.tsx` - 双列布局
5. 实现 `content/Callout.tsx` - 提示/警告框
6. 实现 `content/IconCard.tsx` - 图标卡片
7. 实现 `content/Stat.tsx` - 数据统计展示
8. 实现 `content/Quote.tsx` - 引用块

### Phase 4: 动画系统
1. 集成 Framer Motion
2. 实现 `SlideTransition.tsx` - 幻灯片过渡 (方向感知滑入/滑出)
3. 为内容组件添加 stagger 入场动画
4. 添加微交互 (按钮 hover、卡片效果)

### Phase 5: 内容填充

#### 幻灯片内容结构:

1. **封面** (01-cover.tsx)
   - 标题: Agentic Coding
   - 副标题: 工程实践分享
   - 演讲者信息
   - 底部: Harness Engineering · Plan Mode · Code Mode

2. **目录** (02-agenda.tsx)
   - Harness Engineering 核心理念
   - PLAN MODE — 问题、标准、方案
   - CODE MODE — 执行、验收、防御
   - 上下文工程与工具链
   - 总结与 Q&A

3. **核心论点** (03-core-thesis.tsx)
   - 用户期望 vs 现实差距对比表
     - 想要: 少量注意力,大型产出 → 实际: 精力消耗比自己写还大
     - 想要: 10x 生产力 → 实际: 千篇一律
   - 市场教什么 (但不够): one-shot prompt, skills/loop/MCP, multi-agent
   - 市场盲区: 没有教我们怎么理解和思考
   - 核心定义: **编程是高质量的从发散到收敛的动态过程**

4. **Harness Engineering 定义** (04-harness-definition.tsx)
   - 定义: 通过输入语言、文档和资源控制 Code Agent 完成工作
   - 核心理念: 不是让 AI 做"更快的手指",而是让 AI 成为**你编写的合约的执行者**
   - 心智模型转变对比表:
     - 传统: One prompt → code | Harness: Problem → Contract → Execution
     - 传统: Human writes code | Harness: Human writes intent
     - 传统: Review code | Harness: Review plan, verify acceptance
     - 传统: Doc after code | Harness: Doc before code, >10:1 ratio
   - Contract 模型图示: User → 意图 → Contract ← 执行 ← Agent

5. **PLAN + CODE 双模式总览** (05-two-modes-overview.tsx)
   - 流程图展示:
     ```
     PLAN MODE: plan.md → todo.md (问题与边界 → 成功标准 → 方案与验收)
     CODE MODE: plan.md + todo.md → phase dev → review → verification → replan
     ```
   - 文档 : 代码 > 10 : 1 核心指标
   - 核心纪律: 验收不过就停下来,意图漂移就回 plan

6. **PLAN MODE — 问题与边界** (06-plan-problem.tsx)
   - 核心原则: **只写问题,不写解法**
   - 举例: 不是"我想要 AE86" → 而是"我需要一辆上过秋名山的赛车…"
   - 关键活动:
     - Deep research 和信息收集
     - 识别未知相关信息
     - 语义对齐 (多模型理解差异)
     - 多模型对抗淬炼
   - Callout: 确保真正理解问题域,而不是带着解决方案找问题

7. **PLAN MODE — 成功标准** (07-plan-success.tsx)
   - 核心原则: 定义"做成了"长什么样
   - 四条规则:
     - 从现实约束出发,不从开发者偏好出发
     - 目标可度量,目标之间不矛盾
     - Agent 校验合理性,人用经验做取舍
     - 独立存在,不是问题附属也不是方案前言

8. **PLAN MODE — 方案与验收** (08-plan-solution.tsx)
   - 核心原则: 研究量最大的阶段
   - 关键活动:
     - Agent 主导方案研究与对比
     - 人基于偏好做方案选择
     - BDD 风格验收场景 (Given / When / Then)
   - Callout: **验收场景是意图漂移检测器** — 通不过说明意图传递失真

9. **CODE MODE — 执行流程** (09-code-execution.tsx)
    - 流程图: plan.md + todo.md → phase dev → review → verification → replan
    - 规则:
      - plan 完成后,agent 自主分解 todo,按 phase 执行
      - 每个 phase 产出代码 + review file + 测试结果
      - 严格基于 git 版本管理,每个 phase 一个可回滚节点
      - 保留每个执行 session,用来 trace 和解释
    - Spec Kit 困境: 越迭代越复杂,各种兜底归一

10. **人在执行阶段干什么** (10-human-role.tsx)
    - **不是改代码,是做两个判断:**
    - 判断一: 这个 phase 的产出和验收场景对得上吗?
      - 对得上 → 下一个 phase
      - 对不上 → 方案问题 or 意图问题?
    - 判断二: 修代码还是改 plan?
      - 方案细节问题 → code 层面调整
      - 意图偏了 → **停下来,回 plan 修正**
    - Callout: **检测到意图漂移时,回 plan 层面修正是最重要的纪律**

11. **意图漂移与 Accept → Boom 陷阱** (11-intent-drift.tsx)
    - Intent Drift 根因: LLM 注意力机制在长上下文中自然衰减
    - 表现: 代码越迭代越复杂,stub/TODO 糊弄,单元测试自己骗自己
    - Accept → Boom 陷阱: 复杂度超过理解能力时选择盲目接受
    - Accept → Accept → LGTM → BOOM
    - 防御机制:
      - 任务颗粒度合适
      - 每个 phase 一个可回滚的 git commit
      - BDD 验收跑不过,禁止进入下一 phase

12. **上下文工程** (12-context-engineering.tsx)
    - Anthropic: **"Anything it can't access in-context doesn't exist."**
    - 上下文层级:
      - Static Context (AGENTS.md / CLAUDE.md) — 始终加载
      - Dynamic Context (plan.md / todo.md) — 按需加载
      - Lazy-Loaded Context (Skills / Subagents) — 引用时加载
    - "干净的厨房"原则: 确保 agent 开始工作时信息是有组织的、精确的
    - 项目结构即上下文 (展示推荐的项目结构)

13. **防御规则** (13-defense-rules.tsx)
    - 对人的规则:
      - 一个人一个项目/模块,协作由一人主导
      - 先 review 对方的 plan.md,不是等代码写完才发现接口对不上
      - 拒绝没有文档的代码
      - 定期重构,重写代码
    - 对 AI 的规则:
      - 任务颗粒度合适
      - **多 agent 检查对抗 — 不让写代码的 agent 自己验证自己**
      - 主动压缩和清理上下文
      - **BDD 验收场景跑不过,不允许进入下一个 phase**

14. **Maker-Checker 模式** (14-maker-checker.tsx)
    - 核心规则: 不让写代码的 agent 自己验证自己
    - Maker (Executor): 负责生成代码
    - Checker (Auditor): 独立 agent,只读权限,基于验收标准审查
    - Checker 不写代码,只回答: "产出和验收场景对得上吗?"
    - 图示: Maker → Code → Checker → Pass/Fail

15. **实操步骤清单** (15-action-steps.tsx)
    - Step 1: 问题研究 (Plan Phase 1)
    - Step 2: 定义成功标准 (Plan Phase 2)
    - Step 3: 方案研究 (Plan Phase 3)
    - Step 4: 清理厨房
    - Step 5: 代码 — 分 Phase 执行
    - Step 6: 护栏
    - 使用 checklist 样式展示

16. **总结** (16-summary.tsx)
    - 核心论点回顾: 编程是从发散到收敛的动态过程
    - Harness Engineering 本质: 人类写精确的、可测试的意图 (Contract),Agent 做执行者
    - 最核心纪律: **验收不过就停下来,意图漂移就回 plan**

17. **致谢** (17-thank-you.tsx)
    - Thank You
    - Q&A
    - 联系方式
    - 参考资源:
      - OpenAI: Harness Engineering
      - Anthropic: Harness Design for Long-Running Apps

### Phase 6: 打磨与优化
1. 集成 Lucide React 图标
2. 响应式测试
3. 实现 `hooks/useSwipe.ts` - 触摸手势支持
4. 性能优化 (React.memo, useMemo)
5. 导出功能测试 (浏览器打印/PDF)

## 设计系统

### Forest Canopy 风格指南

**主题**: 自然、稳重、学术风格

#### 配色方案
```css
:root {
  --color-forest-green: #2d4a2b;  /* 主色 - 标题、强调 */
  --color-sage:         #7d8471;  /* 次要色 - 副标题、边框 */
  --color-olive:        #a4ac86;  /* 浅色强调 - 高亮、数据点 */
  --color-ivory:        #faf9f6;  /* 背景 - 主画布 */
}
```

| 元素 | 颜色 | 用途 |
|------|------|------|
| 幻灯片背景 | #faf9f6 (Ivory) | 基础画布 |
| 主标题 | #2d4a2b (Forest Green) | H1, H2, 章节标题 |
| 正文 | #2d4a2b @ 85% 透明度 | 确保可读性 |
| 次要文字/注释 | #7d8471 (Sage) | 脚注、来源、标签 |
| 强调元素 | #a4ac86 (Olive) | 高亮条、列表标记、数据强调 |
| 边框/分隔线 | #7d8471 @ 40% 透明度 | 微妙分隔符 |

#### 字体系统
| 角色 | 字体 | 字重 | 大小 |
|------|------|------|------|
| H1 标题 | FreeSerif Bold / EB Serif | 700 | 48-60px |
| H2/H3 副标题 | FreeSerif Bold / EB Serif | 700 | 32-40px |
| 正文 | FreeSans / Source Sans 3 | 400 | 18-24px |
| 注释/脚注 | FreeSans / Source Sans 3 | 400 | 14-16px |
| 代码 | FreeMono / Consolas | 400 | 16px |

```css
@import url('https://fonts.googleapis.com/css2?family=EB+Serif:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:wght@400;600&display=swap');
```

#### 布局原则
- **充裕留白** - Forest Canopy 需要呼吸,不拥挤
- **单列主导** - 内容垂直流动,仅数据对比用双列
- **清晰层级** - 每页一个 H1,H2 用于子节

#### 间距规范
```
幻灯片内边距: 48px (最小)
章节间距: 32px
段落间距: 16px
行高: 1.6-1.8 (正文)
```

#### 组件模式
- **分隔线**: `<hr class="border-[#7d8471]/40 my-8" />`
- **列表标记**: 2px 圆形, Olive 色
- **Callout**: 左边框 4px Olive 色,斜体
- **卡片**: 圆角 lg,微妙边框

#### 动画策略
- **幻灯片进入**: Fade in, 300ms, ease-out
- **内容展示**: Stagger fade, 200ms/元素, 100ms 间隔
- **数据动画**: Chart draw, 600ms, ease-in-out
- **禁止**: 弹跳、旋转、3D 效果

#### 避免事项
- 无亮色/霓虹色
- 无紫/蓝渐变
- 无重阴影 (最多 shadow-sm)
- 无卡通图标
- 无密集文本块
- 圆角不超过 rounded-lg

### Tailwind CSS 4 配置
```css
/* index.css - CSS-first @theme 配置 */
@import "tailwindcss";

@theme {
  --color-forest: #2d4a2b;
  --color-sage: #7d8471;
  --color-olive: #a4ac86;
  --color-ivory: #faf9f6;
  
  --font-heading: "EB Serif", "FreeSerif", Georgia, serif;
  --font-body: "Source Sans 3", "FreeSans", "Helvetica Neue", Arial, sans-serif;
  --font-mono: "FreeMono", "Consolas", monospace;
}
```

### 动画策略
- **幻灯片过渡**: 方向感知滑入/滑出 (0.35s, easeInOut)
- **内容入场**: stagger children (80ms 间隔)
- **微交互**: hover scale, shadow 提升

## 关键文件
- `src/components/SlideProvider.tsx` - 核心状态管理和 Context
- `src/slides/registry.ts` - 幻灯片注册表,驱动导航
- `src/components/SlideTransition.tsx` - Framer Motion 页面过渡
- `src/index.css` - Tailwind 4 design tokens
- `src/lib/slide-types.ts` - TypeScript 类型定义

## 验证方法
1. `pnpm dev` 启动开发服务器,检查热更新
2. `pnpm build` 构建生产版本
3. `pnpm preview` 预览生产构建
4. 测试键盘导航 (← → Space Home End)
5. 测试 URL hash 同步 (刷新页面保持在当前幻灯片)
6. 验证所有幻灯片内容渲染正确
7. 检查动画流畅性和视觉效果
8. 测试响应式布局 (移动端/平板/桌面)
9. 导出 PDF 检查打印效果
10. 运行 `pnpm build` 确保生产构建成功
