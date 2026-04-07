import { Slide } from '../components/Slide';
import { FlowDiagram } from '../content/FlowDiagram';

export function CodeExecutionSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          CODE MODE — 执行流程
        </h1>
        <hr className="border-sage/40" />

        <FlowDiagram
          steps={[
            { label: 'plan.md + todo.md' },
            { label: 'Phase Dev' },
            { label: 'Review' },
            { label: 'Verification' },
            { label: 'Replan (if needed)' },
          ]}
        />

        <div className="flex flex-col gap-3 mt-4">
          <h3 className="font-heading text-lg font-semibold text-forest">规则</h3>
          <ul className="flex flex-col gap-2">
            {[
              'Plan 完成后，Agent 自主分解 todo，按 Phase 执行',
              '每个 Phase 产出：代码 + review file + 测试结果',
              '严格基于 Git 版本管理，每个 Phase 一个可回滚节点',
              '保留每个执行 session，用来 trace 和解释',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-forest/85">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-sage mt-2 italic">
          Spec Kit 困境：越迭代越复杂，各种兜底归一
        </p>
      </div>
    </Slide>
  );
}
