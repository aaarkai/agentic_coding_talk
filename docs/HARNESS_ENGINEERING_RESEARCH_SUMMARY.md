# Harness Engineering 深度研究总结

> 基于 OpenAI、Anthropic、Martin Fowler、GitHub Spec Kit 等多源资料的系统性研究。
> 聚焦三个核心问题：**意图传达**、**上下文管理**、**多 Phase 验收决策**。

---

## 一、如何与 Agent 沟通并保持意图不漂移

### 1.1 核心问题：Intent Drift（意图漂移）

**根因**：LLM 的注意力机制在长上下文和复杂任务中会自然衰减。当 spec 不够精确或上下文过大时，agent 的产出会逐渐偏离原始意图。

**表现**：
- 代码越迭代越复杂，各种兜底和归一化逻辑堆积
- Agent 写出 stub 和 TODO 糊弄过关
- 单元测试自己骗自己
- 人类无法理解的冗余代码

### 1.2 Contract 模型：Intent → Contract → Execution

这是 Harness Engineering 的核心沟通范式：

```
User ──意图──> Contract <──执行── Agent
                    ↕
              Agent 补充（擅长领域）
```

**关键纪律**：
1. **Intent 文档持久化** — 将意图写入 `intent-store.md` 或 `plan.md` 等静态文件，不依赖对话历史。Agent 只能看到上下文窗口内的内容，**"Anything it can't access in-context doesn't exist."**（Anthropic）
2. **结构化意图而非自然语言** — 使用 Given/When/Then 格式的 BDD 验收场景，比散文式描述更精确
3. **定期对齐检查** — Intent-Context-Spec-Prompt 框架建议**每 3 次 tool call 检查一次意图对齐**
4. **Spec 即合同** — 不是"我想要 AE86"，而是"我需要一辆满足以下条件的车：…"

### 1.3 写好 Intent 文档的实操原则

| 原则 | 说明 |
|---|---|
| **只写问题，不写解法** | 描述"需要一辆上过秋名山的赛车"而非"我要 AE86" |
| **行为导向，非实现导向** | 描述系统应该做什么，而不是用什么技术栈做 |
| **可度量、可验证** | 每个需求都必须能对应一个 Given/When/Then 场景 |
| **独立存在** | 意图文档不是方案的前言，也不是问题的附属 |
| **多模型对抗淬炼** | 同一个意图用不同模型测试理解一致性，消除语义偏差 |

### 1.4 Maker-Checker 模式（制造者-检查者）

**核心规则：不让写代码的 agent 自己验证自己。**

- **Maker（Executor）**：负责生成代码
- **Checker（Auditor）**：独立的 agent，只读权限，基于验收标准审查产出
- Checker 不写代码，只回答："这个 phase 的产出和验收场景对得上吗？"

OpenAI 的 Harness Engineering 实践和 Anthropic 的 Planner/Generator/Evaluator 架构都采用了这个模式。

---

## 二、如何给 Agent 提供清晰的上下文

### 2.1 Context Engineering 的核心原则（Anthropic）

Anthropic 在《Effective Context Engineering for AI Agents》中提出：

> **"Anything it can't access in-context doesn't exist."**

#### 上下文层级设计

```
┌─────────────────────────────────────────────┐
│  Static Context (静态，始终加载)              │
│  AGENTS.md / CLAUDE.md / .cursorrules       │
│  全局规则、项目结构、关键约束                   │
├─────────────────────────────────────────────┤
│  Dynamic Context (动态，按需加载)             │
│  Directory maps, file listings              │
│  plan.md, todo.md, intent-store.md          │
├─────────────────────────────────────────────┤
│  Lazy-Loaded Context (惰性加载)              │
│  Skills / Subagents / path-scoped Rules     │
│  只在被引用时才加载详细内容                     │
└─────────────────────────────────────────────┘
```

### 2.2 "干净的厨房"原则

确保 agent 开始工作时，信息和环境是**有组织的、精确的**：

**DO ✅**
- 使用 `AGENTS.md` 作为 agent 的"地图"（OpenAI 推荐做法）
- 用 `CLAUDE.md` 做全局指导原则
- 通过 path-scoped Rules 文件模块化约束
- 用 Skills/Subagents 实现上下文懒加载
- 每个 phase 开始前压缩清理上下文，防止注意力衰减

**DON'T ❌**
- 把所有规则塞进一个巨大的 prompt
- 让 agent 在几万行代码的上下文中找方向
- 依赖对话历史作为主要信息来源（窗口有限）

### 2.3 项目结构即上下文

好的项目结构本身就是最好的文档：

```
project/
├── AGENTS.md              # Agent 全局规则和行为指南
├── plan.md                # 意图、问题域、成功标准、验收场景
├── todo.md                # 当前 phase 分解和执行状态
├── intent-store.md        # 持久化意图，用于漂移检测
├── .agents/
│   ├── rules/             # Path-scoped 规则文件
│   ├── skills/            # 可懒加载的技能定义
│   └── subagents/         # 专用子 agent 配置
├── docs/
│   ├── research/          # 调研报告
│   ├── decisions/         # 架构决策记录
│   └── acceptance/        # BDD 验收场景
└── src/                   # 代码（保持精简）
```

### 2.4 上下文熵管理（Entropy Management）

OpenAI 的 Harness Engineering 实践建议部署**定期清理 agent**：
- 修复文档漂移（doc drift）
- 扫描约束违反
- 解决依赖问题
- 保持代码库健康，为下一轮迭代做准备

**触发条件**：
- 当 plan.md 被修改后
- 每个 phase 完成后
- 上下文窗口接近上限时

---

## 三、多 Phase 验收：继续还是返工

### 3.1 Phase 执行流程

```
plan.md + todo.md
        ↓
   [Phase N: code → review → test → commit]
        ↓
   ┌───────────────────────────────┐
   │     人的两个判断               │
   │                                │
   │  Q1: 产出 vs 验收场景 对得上？  │
   │  Q2: 修代码 还是 改 plan？      │
   └───────────────────────────────┘
        ↓              ↓
     对得上 → Next    对不上 → 诊断
   Phase              ↓
                     方案问题 → 修 code
                     意图问题 → 回 plan
```

### 3.2 验收决策树

在每个 Phase 结束时，执行以下判断：

```
Phase 产出完成
    │
    ├── BDD 验收场景全部通过？
    │       │
    │       否 → BLOCKED，不允许进入下一 phase
    │             ├── 是代码 bug？→ 修复后重测
    │             └── 是场景不合理？→ 修正验收场景
    │
    是
    │
    ├── 产出与验收场景对得上？
    │       │
    │       否 → 意图漂移检测
    │             ├── 方案细节问题（技术路线不通）
    │             │     → code 层面调整，不修改 plan
    │             │
    │             └── 意图偏了（理解偏差）
    │                   → 停下来，回 plan 修正（最重要纪律）
    │
    是
    │
    └── 进入下一 Phase
```

### 3.3 "Accept → Boom" 陷阱

> 当复杂度超过人类自己的上下文理解能力时，人会选择盲目接受：
>
> `Accept → Accept → LGTM → BOOM`

**防御机制**：
1. **任务颗粒度合适** — 太大容易偷工减料，太小管不过来
2. **每个 phase 一个可回滚的 git commit** — 随时可以回退
3. **保留每个执行 session** — 用于 trace 和解释
4. **BDD 验收跑不过，禁止进入下一 phase** — 硬规则

### 3.4 Spec Kit 的 Phase 工作流（参考）

GitHub Spec Kit 提供了一个结构化的 phase 流程：

| Phase | 命令 | 产出 | 验证点 |
|---|---|---|---|
| **Constitution** | - | 项目原则和开发指南 | 原则是否覆盖关键决策？ |
| **Specify** | `/speckit.specify` | 需求和用户故事（GIVEN/WHEN/THEN） | 需求是否可度量？ |
| **Clarify** | `/speckit.clarify` | 歧义消解记录 | 是否有未解决的模糊点？ |
| **Plan** | - | 技术实现方案 | 是否过度设计？是否缺东西？ |
| **Tasks** | - | 可执行的任务列表 | 任务是否覆盖了所有需求？ |
| **Implement** | - | 代码 + review + test | 验收场景是否全部通过？ |

**关键验证门**：
- Specify → Clarify 之间：必须消解歧义，否则减少下游返工
- Plan → Tasks 之间：用 `/speckit.analyze` 做跨产物一致性和覆盖率分析
- Tasks → Implement 之间：人工 audit 实现方案

### 3.5 什么时候改代码，什么时候改 Plan

**修 Code 的信号**：
- 验收场景通过，但实现方式有 bug
- 技术路线走不通，需要换实现方案
- 代码风格、性能优化
- **意图理解正确，执行有偏差**

**改 Plan 的信号（最重要的纪律）**：
- 验收场景跑不通过，且不是代码 bug
- Agent 的产出和你对"做成了"的理解不一致
- 方案之间出现矛盾
- **意图传递失真，Agent 理解的问题域和你定义的不同**

> **检测到意图漂移时，回 plan 层面修正是最重要的纪律。**

---

## 四、工具与资源推荐

### 4.1 核心框架

| 工具 | 用途 | 来源 |
|---|---|---|
| **GitHub Spec Kit** | Spec-Driven Development 工具包 | GitHub 开源 |
| **AGENTS.md** | Agent 全局规则和上下文地图 | OpenAI 推荐 |
| **CLAUDE.md** | 全局指导原则和懒加载入口 | Anthropic |
| **intent-store.md** | 意图持久化，漂移检测基准 | 社区实践 |

### 4.2 架构模式

| 模式 | 说明 |
|---|---|
| **Planner / Generator / Evaluator** | Anthropic 三 agent 分工：规划 → 生成 → 评估 |
| **Maker / Checker** | 制造者和检查者分离，同一人不重复验证 |
| **Reasoning Sandwich** | 高推理能力分配给规划和验证，中间层做执行 |
| **Cleanup Agent** | 定期清理文档漂移和约束违反 |

### 4.3 评估基准

| 基准 | 评估维度 |
|---|---|
| **SWE-bench** | 真实软件工程任务解决率 |
| **AgentBench** | Agent 通用能力 |
| **OSWorld** | 操作系统级任务 |
| **Terminal-Bench** | 命令行任务 |
| **ClawWork** | Anthropic 自有基准 |

### 4.4 延伸阅读

- [OpenAI: Harness Engineering](https://openai.com/index/harness-engineering/) — OpenAI 官方视角
- [Anthropic: Harness Design for Long-Running Apps](https://www.anthropic.com/engineering/harness-design-long-running-apps) — Anthropic 实践
- [Anthropic: Effective Context Engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) — 上下文工程权威指南
- [Martin Fowler: Context Engineering for Coding Agents](https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html) — 工程视角
- [Martin Fowler: SDD Tools Comparison](https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html) — Kiro / Spec-Kit / Tessl 对比
- [GitHub Spec Kit](https://github.com/github/spec-kit) — 开源工具包
- [Awesome Harness Engineering](https://github.com/walkinglabs/awesome-harness-engineering) — 社区资源合集
- [arXiv: A Grand Challenge for Reliable Coding in AI Agents](https://arxiv.org/html/2603.17150v1) — 意图形式化与多 agent 验证
- [Intent-Context-Spec-Prompt](https://github.com/timwhitez/Intent-Context-Spec-Prompt) — 意图漂移检测框架

---

## 五、一句话总结

> **Harness Engineering 的本质：人类写精确的、可测试的意图（Contract），Agent 做执行者。人的工作从"写代码"变成了"写意图"——需要完全不同的纪律。最核心的纪律是：验收不过就停下来，意图漂移就回 plan。**
