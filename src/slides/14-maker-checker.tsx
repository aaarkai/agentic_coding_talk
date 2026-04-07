import { Slide } from '../components/Slide';
import { FlowDiagram } from '../content/FlowDiagram';
import { Callout } from '../content/Callout';

export function MakerCheckerSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          Maker-Checker 模式
        </h1>
        <hr className="border-sage/40" />

        <Callout>
          核心规则：不让写代码的 agent 自己验证自己
        </Callout>

        <div className="grid grid-cols-2 gap-6 mt-2">
          <div className="rounded-lg border border-sage/20 p-5 bg-sage/5">
            <h3 className="font-heading text-lg font-semibold text-forest mb-2">Maker (Executor)</h3>
            <p className="text-forest/85">负责生成代码</p>
          </div>
          <div className="rounded-lg border border-sage/20 p-5 bg-sage/5">
            <h3 className="font-heading text-lg font-semibold text-olive mb-2">Checker (Auditor)</h3>
            <p className="text-forest/85">独立 agent，只读权限，基于验收标准审查</p>
          </div>
        </div>

        <p className="text-forest/85 text-center mt-2">
          Checker 不写代码，只回答：<span className="text-forest font-semibold">"产出和验收场景对得上吗？"</span>
        </p>

        <div className="flex justify-center mt-2">
          <FlowDiagram
            steps={[
              { label: 'Maker → Code' },
              { label: 'Checker → Review' },
              { label: 'Pass / Fail' },
            ]}
          />
        </div>
      </div>
    </Slide>
  );
}
