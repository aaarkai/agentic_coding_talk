# Agentic Coding 工程实践 — Harness Engineering 方法论参考

> 一份用于后续做 talk 参考的结构化笔记，提取自 dimcode.dev 的 "Agentic Coding 工程实践" 演示文稿。

---

## 目录

1. [核心论点](#核心论点)
2. [Harness Engineering 定义](#harness-engineering-定义)
3. [三大模式总览](#三大模式总览)
4. [PLAN MODE — 问题与边界](#plan-mode--问题与边界)
5. [PLAN MODE — 成功标准](#plan-mode--成功标准)
6. [PLAN MODE — 方案与验收](#plan-mode--方案与验收)
7. [文档与代码比例](#文档与代码比例)
8. [DESIGN MODE — 设计哲学](#design-mode--设计哲学)
9. [DESIGN MODE — 两类决策](#design-mode--两类决策)
10. [DESIGN MODE — Info-Layout 迭代](#design-mode--info-layout-迭代)
11. [DESIGN MODE — 风格探索与定型](#design-mode--风格探索与定型)
12. [CODE MODE — 执行流程](#code-mode--执行流程)
13. [人在执行阶段干什么](#人在执行阶段干什么)
14. [最害怕的事](#最害怕的事)
15. [防御规则](#防御规则)
16. [Contract 模型](#contract-模型)
17. [核心心智模型转变](#核心心智模型转变)
18. [实操步骤清单](#实操步骤清单)

---

## 核心论点

### 用户期望 vs 现实差距

| 我们想要 | 实际上 |
|---|---|
| 做自己不到的事情 | 无法控制结果，天差地别 |
| 少量注意力，大型产出 | 精力消耗比自己写代码还大 |
| 一个人 10x 生产力 | 做出来的东西千篇一律 |
| 十个人 100x 生产力 | 生产力 = x / 人数 |

### 市场在教什么（但不够）

- **一句话提示词完成应用开发** — one-shot prompt
- **使用 skills / loop / MCP 一键生成完美 UI**
- **使用 superpowers 和 gstack 你就能开公司**
- **多 agent 团队解千愁** — agent kanban / task

### 市场的盲区

> 这些东西都是有用的，但**没有教我们怎么理解和思考**。相同的模型/工具使用起来，效果天差地别。

### 核心定义

> **编程是一个高质量的从发散到收敛的动态过程。**

我们需要动态的、可演进的外置状态（文档）来推进整个开发过程。每个 step 都需要注意自己的**颗粒度**以及**注意力关键点**，来保证意图的一致性与结果的可选性。

---

## Harness Engineering 定义

> 通过输入**语言**、**文档**和**其他资源**来控制合适的 Code Agent 完成 Code 或者 Design 的工作。

不是让 AI 做"更快的手指"，而是让 AI 成为**你编写的合约的执行者**。你的工作从写代码变成写精确的、可测试的意图——这需要完全不同的纪律。

---

## 三大模式总览

```
┌─────────────────────────────────────────────────────┐
│  PLAN MODE                                          │
│  plan.md → todo.md                                  │
│  问题与边界 → 成功标准 → 方案与验收                    │
├─────────────────────────────────────────────────────┤
│  DESIGN MODE                                        │
│  目标定义 → 信息架构 → 交互逻辑 → 风格探索 → 风格定型 → 风格实现 │
├─────────────────────────────────────────────────────┤
│  CODE MODE                                          │
│  plan.md + todo.md → phase dev → review → verification → replan │
└─────────────────────────────────────────────────────┘
```

---

## PLAN MODE — 问题与边界

**核心原则：只写问题，不写解法**

### 举例

- **不是：** "我想要 AE86"
- **而是：** "我想要一辆上过秋名山的赛车，它需要…"

### 关键活动

1. **通过大量 deep research 和信息收集，确认概念与领域**
2. **哪些是不知道的相关信息？哪些是要坚持的概念？**
3. **同一个词模型的理解和自己的理解的误差** — 语义对齐
4. **通过多模型对抗淬炼** — 语义是千人千面的，模型也是

### 目的

确保你真正理解问题域，而不是带着解决方案去找问题。

---

## PLAN MODE — 成功标准

**核心原则：定义"做成了"长什么样**

### 四条规则

1. **从现实约束出发** — 不从开发者偏好出发
2. **目标可度量** — 目标之间是否矛盾？
3. **Agent 校验合理性** — 人用经验做取舍
4. **独立存在** — 不是问题的附属，也不是方案的前言

---

## PLAN MODE — 方案与验收

**核心原则：研究量最大的阶段**

### 关键活动

1. **Agent 主导方案研究与对比**，人基于偏好做方案选择
2. 解决方案、技术路线、验证方案、设计选择…
3. **包含 BDD 风格验收场景（Given / When / Then）**
4. **验收场景是意图漂移检测器** — 通不过说明意图传递失真

### 最重要问题

> 给到 agent 的基础环境与信息传递是怎么做的？

---

## 文档与代码比例

### 核心指标

```
文档 : 代码  >  10 : 1
```

一个质量比较好的项目，文档数量远超代码数量。

### 多人协作

> 如果一个项目有多人协作，**PLAN 需要独立作为 commit 互相 review 和改善。**

### 杂乱的厨房 vs 干净的厨房

> 确保当 agent 开始工作的时候，给到的信息和环境是**有组织的、精确的**。

---

## DESIGN MODE — 设计哲学

> **设计追求的是独特性。**

代码实现追求可靠性与一致性，设计追求的是独特性。设计的审美判断是非工程的——但设计的介质正在变成代码。

### 新一代 agent-native 设计工具

- **Paper / Pencil.dev** — 画布就是代码，存在 Git 里，没有 design-to-code 翻译环节

### 设计流程

```
目标定义 → 信息架构 → 交互逻辑 → 风格探索 → 风格定型 → 风格实现
```

---

## DESIGN MODE — 两类决策

| 类型 | 关注点 | 通道 |
|---|---|---|
| **逻辑决策** | 需要什么、为什么 | 语言通道够用 |
| **空间与感知决策** | 怎么组织、感受如何 | 需要视觉通道 |

### 各阶段决策类型分布

- **目标定义** — 几乎全是逻辑决策
- **信息架构 / 交互逻辑** — 混合区域
- **风格探索之后** — 几乎全是感知决策

---

## DESIGN MODE — Info-Layout 迭代

> **语言和画布的短迭代**

### 循环

```
.md（逻辑骨架） ⇄ wireframe（空间验证）
```

### 规则

1. **.md** 定义"有什么、为什么"
2. **wireframe** 验证"放在哪、感受如何"
3. **两者互相约束** — 写出来合理的 8 个模块，画出来发现信息密度过高，砍到 5 个或分页

### 循环链

```
语言定义 → 空间验证 → 修正定义 → 循环
```

---

## DESIGN MODE — 风格探索与定型

### 风格探索：用眼睛，不用语言

> **生成是 agent 的，选择是人的。**

大多数人和 agent 协作时，**选择这一步是被跳过的**——不是做得不好。

**永远要求多个选项，不要接受第一个输出。**

### 工具

- **variant.ai** — 滚动式探索，不写 prompt，看到喜欢的就深入
- **Google Stitch** — 文本/图片/草图生成高保真 UI，支持多屏连贯生成
- **各类 design web** — 直接浏览真实案例

### 风格定型：把审美决策锁定为工程约束

- **Paper / Pencil.dev** — agent-native 画布，设计直接就是 React + Tailwind 代码
- **Design Token** — **最起码要学会的概念**，设计决策的工程化编码，agent 理解设计约束的唯一结构化通道

### 风格实现：交给 agent

- **Paper MCP / Pencil MCP** — agent 直接在画布上操作，产出就是可用组件
- **Coding agent** — 基于 design token 约束生成代码，确保一致性

---

## CODE MODE — 执行流程

```
[ plan.md + todo.md → phase dev → review → verification → replan / next phase ]
[ review files ] [ test files ]
```

### 规则

1. **plan 完成后，agent 自主分解 todo，按 phase 执行**
2. **每个 phase 产出代码 + review file + 测试结果**
3. **严格基于 git 版本管理**，每个 phase 一个可回滚的节点
4. **保留每一个执行 session，用来 trace 和解释**

### Spec Kit 的困境

> 我们实践的是 spec kit 理念，但我们得到的是——
> - 复杂的，冗余的，和想法偏差极大的结果
> - 越迭代越复杂，各种兜底各种归一

Spec 希望你把每个具体的内容都写清楚，像另一种语言编译器：

```
spec → LLM → code
```

但每次都能生成相同的结果？

### Accept → Boom 陷阱

> 当复杂度超过自己上下文理解能力的时候，人类会选择**接受**：

```
Accept → Accept → LGTM → BOOM
```

---

## 人在执行阶段干什么？

> **不是改代码，是做两个判断——**

### 判断一：这个 phase 的产出和验收场景对得上吗？

```
对得上 → 下一个 phase
对不上 → 方案问题 or 意图问题？
```

### 判断二：修代码还是改 plan？

- **方案细节问题**（技术路线不通）→ code 层面调整
- **意图偏了** → **停下来，回 plan 修正**

> **检测到意图漂移时，回 plan 层面修正是最重要的纪律。**

---

## 最害怕的事

### 人害怕

- 几万行的合并代码
- 未经沟通调整基础结构和 plan.md
- 思路和理解不同的人

### AI 害怕

- 提前收工，写出一堆 stub 和 TODO
- 糊弄过关，自己骗自己的单元测试
- 人类无法理解的冗余代码

---

## 防御规则

### 对人的规则

1. 一个人一个项目 / 模块，协作由一人主导
2. 先 review 对方的 plan.md，不是等代码写完才发现接口对不上
3. 拒绝没有文档的代码——AI 生成的代码量大，没文档很快变黑箱
4. 定期重构，重写代码

### 对 AI 的规则

1. 任务颗粒度合适——太大偷工减料，太小管不过来
2. 多 agent 检查对抗——**不让写代码的 agent 自己验证自己**
3. 主动压缩和清理上下文，避免注意力衰减
4. **BDD 验收场景跑不过，不允许进入下一个 phase**

---

## Contract 模型

```
User ──意图──> Contract <──执行── Agent
```

> 一份完全能传达想法和意图的**合同**以便于 Agent 执行，同时 Agent 在擅长的领域**补充**合同的内容。

---

## 核心心智模型转变

| 传统模式 | Harness Engineering |
|---|---|
| One prompt → code | Problem → Contract → Execution |
| Human writes code | Human writes intent, agent writes code |
| Review code | Review plan, verify acceptance |
| Design then code | Design IS code (agent-native tools) |
| Doc after code | Doc before code, >10:1 ratio |

---

## 实操步骤清单

### Step 1: 问题研究（Plan Phase 1）
- [ ] 不要写解决方案，只写问题本身
- [ ] 做 deep research，收集领域信息
- [ ] 识别未知概念和需要坚持的理念
- [ ] 跨多模型测试语义一致性

### Step 2: 定义成功标准（Plan Phase 2）
- [ ] 从现实约束出发，定义"做成了"的样子
- [ ] 确保目标可度量、不矛盾
- [ ] Agent 校验合理性，人做取舍

### Step 3: 方案研究（Plan Phase 3）
- [ ] Agent 主导技术方案研究与对比
- [ ] 人基于偏好做方案选择
- [ ] 编写 BDD 验收场景（Given/When/Then）
- [ ] 这些场景将成为意图漂移检测器

### Step 4: 清理厨房
- [ ] 组织所有研究、决策和约束到 plan.md
- [ ] 确保给 agent 的信息是有组织的、精确的

### Step 5: 设计 — Info & Layout
- [ ] 用 .md 写逻辑结构：哪些模块存在，为什么
- [ ] 生成 wireframe 做空间验证
- [ ] 迭代 .md ↔ wireframe 直到收敛

### Step 6: 设计 — 风格探索
- [ ] 生成多个视觉变体，浏览选择而非 prompt 驱动
- [ ] 不接受第一个输出，要求多个选项
- [ ] 找到喜欢的风格后，锁定为 Design Tokens

### Step 7: 代码 — 分 Phase 执行
- [ ] Agent 读取 plan.md，创建 todo.md，按 phase 分解
- [ ] 每个 phase：code → review → test → commit
- [ ] 人检查：产出是否匹配验收标准？
  - 是 → 下一个 phase
  - 否 → 方案问题还是意图问题？修代码还是改 plan？

### Step 8: 护栏
- [ ] 多 agent 对抗检查：写代码的不验证自己
- [ ] 定期压缩清理上下文，防止注意力衰减
- [ ] BDD 验收不过，不允许进入下一个 phase

---

## 参考资源

- **dimcode.dev** — 该方法论的实践项目
- **variant.ai** — 风格探索工具
- **Google Stitch** — 多屏高保真 UI 生成
- **Paper / Pencil.dev** — agent-native 设计画布
- **Spec Kit** — 规格驱动开发框架（该方法论对其困境有批判性讨论）
- **Coding Agents 生态**：Claude Code, Cursor, Cline, Windsurf, Copilot, v0, Lovable, Replit, Bolt, Trae, Roo Code, OpenHands, Junie, Gemini CLI, Kilo Code, Goose, OpenCode, Qoder, Zencoder, Dify, Coze
