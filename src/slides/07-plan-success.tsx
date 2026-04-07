import { Slide } from '../components/Slide';
import { SectionHeader } from '../components/SectionHeader';
import { Callout } from '../content/Callout';
import { FileText, Target, Scale, Bot, Layers } from 'lucide-react';

export function PlanSuccessSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <div className="flex flex-col items-start gap-3">
          <SectionHeader icon={<FileText size={18} />} label="Plan Mode · 阶段二" variant="forest" />
          <h1 className="font-heading text-5xl font-bold text-forest">
            成功标准
          </h1>
        </div>

        <p className="text-amber-700 text-xl font-medium">定义"做成了"长什么样</p>

        <div className="grid grid-cols-2 gap-5">
          <div className="p-5 rounded-xl border border-forest/10 bg-forest/[0.03] flex flex-col gap-2">
            <div className="w-9 h-9 rounded-lg bg-forest/[0.08] text-forest flex items-center justify-center">
              <Target size={18} />
            </div>
            <h3 className="text-base font-semibold text-forest">从现实约束出发</h3>
            <p className="text-sm text-sage">不从开发者偏好出发</p>
          </div>
          <div className="p-5 rounded-xl border border-forest/10 bg-forest/[0.03] flex flex-col gap-2">
            <div className="w-9 h-9 rounded-lg bg-forest/[0.08] text-forest flex items-center justify-center">
              <Scale size={18} />
            </div>
            <h3 className="text-base font-semibold text-forest">目标可度量</h3>
            <p className="text-sm text-sage">目标之间是否矛盾？</p>
          </div>
          <div className="p-5 rounded-xl border border-forest/10 bg-forest/[0.03] flex flex-col gap-2">
            <div className="w-9 h-9 rounded-lg bg-forest/[0.08] text-forest flex items-center justify-center">
              <Bot size={18} />
            </div>
            <h3 className="text-base font-semibold text-forest">Agent 校验合理性</h3>
            <p className="text-sm text-sage">人用经验做取舍</p>
          </div>
          <div className="p-5 rounded-xl border border-forest/10 bg-forest/[0.03] flex flex-col gap-2">
            <div className="w-9 h-9 rounded-lg bg-forest/[0.08] text-forest flex items-center justify-center">
              <Layers size={18} />
            </div>
            <h3 className="text-base font-semibold text-forest">独立存在</h3>
            <p className="text-sm text-sage">不是问题附属也不是方案前言</p>
          </div>
        </div>

        <Callout>
          四条规则缺一不可
        </Callout>
      </div>
    </Slide>
  );
}
