import { Slide } from '../components/Slide';
import { ComparisonTable } from '../content/ComparisonTable';
import { FlowDiagram } from '../content/FlowDiagram';
import { Callout } from '../content/Callout';

export function HarnessDefinitionSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          Harness Engineering 定义
        </h1>
        <hr className="border-sage/40" />

        <p className="text-lg text-forest/85 leading-relaxed">
          通过输入语言、文档和资源控制 Code Agent 完成工作。
        </p>

        <Callout>
          不是让 AI 做"更快的手指"，而是让 AI 成为你编写的合约的执行者。
        </Callout>

        <ComparisonTable
          headerLeft="传统模式"
          headerRight="Harness 模式"
          rows={[
            {
              left: 'One prompt → code',
              right: 'Problem → Contract → Execution',
            },
            {
              left: 'Human writes code',
              right: 'Human writes intent',
            },
            {
              left: 'Review code',
              right: 'Review plan, verify acceptance',
            },
            {
              left: 'Doc after code',
              right: 'Doc before code, >10:1 ratio',
            },
          ]}
        />

        <div className="mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest mb-4">Contract 模型</h3>
          <FlowDiagram
            steps={[
              { label: 'User → 意图' },
              { label: 'Contract' },
              { label: 'Agent ← 执行' },
            ]}
          />
        </div>
      </div>
    </Slide>
  );
}
