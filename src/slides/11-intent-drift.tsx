import { Slide } from '../components/Slide';
import { FlowStep, FlowArrow } from '../components/FlowStep';
import { AlertTriangle, GitBranch, Beaker } from 'lucide-react';
import { BulletItem } from '../components/BulletItem';

export function IntentDriftSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <h1 className="font-heading text-5xl font-bold text-forest">
          意图漂移
        </h1>
        <hr className="border-sage/40" />

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-lg font-semibold text-forest">根因</h3>
          <BulletItem>LLM 注意力机制在长上下文中自然衰减</BulletItem>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-lg font-semibold text-forest">表现</h3>
          <BulletItem icon={<AlertTriangle size={18} />}>代码越迭代越复杂</BulletItem>
          <BulletItem icon={<AlertTriangle size={18} />}>stub / TODO 糊弄过关</BulletItem>
          <BulletItem icon={<AlertTriangle size={18} />}>单元测试自己骗自己</BulletItem>
        </div>

        <div className="text-center mt-2">
          <p className="text-sage text-lg mb-4">超过理解能力时，人类会选择接受</p>
          <div className="flex items-center gap-3 justify-center flex-wrap">
            <FlowStep label="Accept" />
            <FlowArrow />
            <FlowStep label="Accept" />
            <FlowArrow />
            <FlowStep label="LGTM" />
            <FlowArrow />
            <FlowStep label="BOOM" active />
          </div>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest">防御机制</h3>
          <BulletItem icon={<GitBranch size={18} />}>每个 Phase 一个可回滚的 Git commit</BulletItem>
          <BulletItem icon={<Beaker size={18} />}>BDD 验收跑不过，禁止进入下一 Phase</BulletItem>
        </div>
      </div>
    </Slide>
  );
}
