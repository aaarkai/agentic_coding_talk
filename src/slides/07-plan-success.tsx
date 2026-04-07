import { Slide } from '../components/Slide';
import { Callout } from '../content/Callout';

export function PlanSuccessSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          PLAN MODE — 成功标准
        </h1>
        <hr className="border-sage/40" />

        <Callout>
          核心原则：定义"做成了"长什么样
        </Callout>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest">四条规则</h3>
          <ul className="flex flex-col gap-2">
            {[
              '从现实约束出发，不从开发者偏好出发',
              '目标可度量，目标之间不矛盾',
              'Agent 校验合理性，人用经验做取舍',
              '独立存在，不是问题附属也不是方案前言',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-forest/85">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Slide>
  );
}
