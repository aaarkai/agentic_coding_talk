import { Slide } from '../components/Slide';
import { Quote } from '../content/Quote';
import { Callout } from '../content/Callout';
import { CodeBlock } from '../content/CodeBlock';
import { Layers, Database, Zap } from 'lucide-react';
import { BulletItem } from '../components/BulletItem';

export function ContextEngineeringSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <h1 className="font-heading text-5xl font-bold text-forest">
          上下文工程
        </h1>
        <hr className="border-sage/40" />

        <Quote author="Anthropic">
          Anything it can't access in-context doesn't exist.
        </Quote>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest">上下文层级</h3>
          <BulletItem icon={<Database size={18} />}>
            <span><span className="text-forest font-semibold">Static Context</span> — AGENTS.md / CLAUDE.md，始终加载</span>
          </BulletItem>
          <BulletItem icon={<Layers size={18} />}>
            <span><span className="text-forest font-semibold">Dynamic Context</span> — plan.md / todo.md，按需加载</span>
          </BulletItem>
          <BulletItem icon={<Zap size={18} />}>
            <span><span className="text-forest font-semibold">Lazy-Loaded Context</span> — Skills / Subagents，引用时加载</span>
          </BulletItem>
        </div>

        <Callout>
          "干净的厨房"：确保 agent 开始工作时信息是有组织的、精确的
        </Callout>

        <div className="mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest mb-3">项目结构即上下文</h3>
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
