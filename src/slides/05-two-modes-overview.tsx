import { Slide } from '../components/Slide';
import { SectionHeader } from '../components/SectionHeader';
import { FlowStep, FlowArrow } from '../components/FlowStep';
import { Stat } from '../content/Stat';
import { Callout } from '../content/Callout';
import { FileText, Code2 } from 'lucide-react';

export function TwoModesOverviewSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-forest">
          PLAN + CODE 双模式
        </h1>
        <hr className="border-sage/40" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          <div className="flex flex-col gap-4 bg-forest/[0.04] rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <SectionHeader icon={<FileText size={16} />} label="Plan Mode" variant="forest" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <FlowStep label="问题与边界" />
              <FlowArrow direction="down" />
              <FlowStep label="成功标准" />
              <FlowArrow direction="down" />
              <FlowStep label="方案与验收" />
            </div>
            <p className="text-sm text-sage font-mono text-center">plan.md → todo.md</p>
          </div>

          <div className="flex flex-col gap-4 bg-forest/[0.04] rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <SectionHeader icon={<Code2 size={16} />} label="Code Mode" variant="forest" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <FlowStep label="Phase Dev" />
              <FlowArrow direction="down" />
              <FlowStep label="Review" />
              <FlowArrow direction="down" />
              <FlowStep label="Verification" />
            </div>
            <p className="text-sm text-sage font-mono text-center">plan.md + todo.md → phase dev → replan</p>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-2">
          <Stat value="10:1" label="文档 : 代码" />
        </div>

        <Callout>
          验收不过就停下来，意图漂移就回 plan
        </Callout>
      </div>
    </Slide>
  );
}
