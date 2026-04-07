import { Slide } from '../components/Slide';
import { SectionHeader } from '../components/SectionHeader';
import { Callout } from '../content/Callout';
import { Card } from '../components/Card';
import { Code2, Eye } from 'lucide-react';
import { FlowStep, FlowArrow } from '../components/FlowStep';

export function MakerCheckerSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <SectionHeader label="防御机制" variant="forest" />

        <h1 className="font-heading text-5xl font-bold text-forest">
          Maker-Checker 模式
        </h1>

        <Callout>
          核心规则：不让写代码的 agent 自己验证自己
        </Callout>

        <div className="grid grid-cols-2 gap-6 mt-2">
          <Card
            icon={<Code2 size={22} />}
            title="Maker (Executor)"
            desc="负责生成代码"
            accent="forest"
          />
          <Card
            icon={<Eye size={22} />}
            title="Checker (Auditor)"
            desc="独立 agent，只读权限，基于验收标准审查"
            accent="forest"
          />
        </div>

        <p className="text-forest/85 text-center">
          Checker 不写代码，只回答：<span className="text-forest font-semibold">"产出和验收场景对得上吗？"</span>
        </p>

        <div className="flex items-center gap-4 justify-center">
          <FlowStep label="Maker → Code" />
          <FlowArrow />
          <FlowStep label="Checker → Review" />
          <FlowArrow />
          <FlowStep label="Pass / Fail" />
        </div>
      </div>
    </Slide>
  );
}
