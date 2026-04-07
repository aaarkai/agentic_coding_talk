import { Slide } from '../components/Slide';
import { Checklist } from '../content/Checklist';
import { SectionHeader } from '../components/SectionHeader';
import { Search, Target, Beaker, Sparkles, Code2, Shield } from 'lucide-react';

export function ActionStepsSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <SectionHeader label="实操指南" variant="forest" />
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-forest">
          实操步骤清单
        </h1>
        <hr className="border-sage/40" />

        <Checklist
          items={[
            { label: '问题研究 (Plan Phase 1)', icon: <Search size={18} /> },
            { label: '定义成功标准 (Plan Phase 2)', icon: <Target size={18} /> },
            { label: '方案研究 (Plan Phase 3)', icon: <Beaker size={18} /> },
            { label: '清理厨房', icon: <Sparkles size={18} /> },
            { label: '代码 — 分 Phase 执行', icon: <Code2 size={18} /> },
            { label: '护栏', icon: <Shield size={18} /> },
          ]}
        />
      </div>
    </Slide>
  );
}
