import { Slide } from '../components/Slide';
import { Callout } from '../content/Callout';
import { Card } from '../components/Card';
import { CheckCircle, AlertTriangle } from 'lucide-react';

export function HumanRoleSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <h1 className="font-heading text-5xl font-bold text-forest">
          人在执行阶段干什么？
        </h1>

        <p className="text-sage text-xl">不是改代码，是做两个判断——</p>

        <div className="flex flex-col gap-5 mt-2">
          <Card
            icon={<CheckCircle size={22} />}
            title="判断一：产出和验收对得上吗？"
            desc="对得上 → 下一个 phase | 对不上 → 方案问题 or 意图问题？"
            accent="emerald"
          />
          <Card
            icon={<AlertTriangle size={22} />}
            title="判断二：修代码还是改 plan？"
            desc="方案细节 → code 调整 | 意图偏了 → 停下来，回 plan 修正"
            accent="amber"
          />
        </div>

        <Callout>
          检测到意图漂移时，回 plan 层面修正是最重要的纪律
        </Callout>
      </div>
    </Slide>
  );
}
