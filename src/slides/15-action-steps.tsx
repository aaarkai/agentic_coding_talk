import { Slide } from '../components/Slide';
import { Checklist } from '../content/Checklist';

export function ActionStepsSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          实操步骤清单
        </h1>
        <hr className="border-sage/40" />

        <Checklist
          items={[
            { label: '问题研究 (Plan Phase 1)' },
            { label: '定义成功标准 (Plan Phase 2)' },
            { label: '方案研究 (Plan Phase 3)' },
            { label: '清理厨房' },
            { label: '代码 — 分 Phase 执行' },
            { label: '护栏' },
          ]}
        />
      </div>
    </Slide>
  );
}
