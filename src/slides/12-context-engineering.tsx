import { Slide } from '../components/Slide';
import { Quote } from '../content/Quote';
import { Callout } from '../content/Callout';
import { CodeBlock } from '../content/CodeBlock';

export function ContextEngineeringSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          上下文工程
        </h1>
        <hr className="border-sage/40" />

        <Quote author="Anthropic">
          Anything it can't access in-context doesn't exist.
        </Quote>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest">上下文层级</h3>
          <ul className="flex flex-col gap-2">
            {[
              { title: 'Static Context', desc: 'AGENTS.md / CLAUDE.md — 始终加载' },
              { title: 'Dynamic Context', desc: 'plan.md / todo.md — 按需加载' },
              { title: 'Lazy-Loaded Context', desc: 'Skills / Subagents — 引用时加载' },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-forest/85">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
                <span><span className="text-forest font-semibold">{item.title}</span> — {item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        <Callout>
          "干净的厨房"原则：确保 agent 开始工作时信息是有组织的、精确的
        </Callout>

        <div className="mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest mb-2">项目结构即上下文</h3>
          <CodeBlock
            lang="bash"
            code={`project/
├── AGENTS.md          # Static Context
├── plan.md            # Dynamic Context
├── todo.md            # Dynamic Context
├── .qoder/skills/     # Lazy-Loaded
└── src/               # Code`}
          />
        </div>
      </div>
    </Slide>
  );
}
