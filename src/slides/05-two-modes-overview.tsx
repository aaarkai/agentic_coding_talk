import { Slide } from '../components/Slide';
import { FlowDiagram } from '../content/FlowDiagram';
import { Stat } from '../content/Stat';
import { Callout } from '../content/Callout';

export function TwoModesOverviewSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          PLAN + CODE 双模式总览
        </h1>
        <hr className="border-sage/40" />

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-xl font-semibold text-forest">PLAN MODE</h3>
            <FlowDiagram
              steps={[
                { label: '问题与边界' },
                { label: '成功标准' },
                { label: '方案与验收' },
              ]}
            />
            <p className="text-sm text-sage mt-1">plan.md → todo.md</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-xl font-semibold text-forest">CODE MODE</h3>
            <FlowDiagram
              steps={[
                { label: 'Phase Dev' },
                { label: 'Review' },
                { label: 'Verification' },
              ]}
            />
            <p className="text-sm text-sage mt-1">plan.md + todo.md → phase dev → replan</p>
          </div>
        </div>

        <div className="flex justify-center gap-8 mt-4">
          <Stat value="10:1" label="文档 : 代码" />
        </div>

        <Callout>
          验收不过就停下来，意图漂移就回 plan
        </Callout>
      </div>
    </Slide>
  );
}
