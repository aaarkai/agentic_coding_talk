import { Slide } from '../components/Slide';
import { Callout } from '../content/Callout';

export function PlanProblemSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          PLAN MODE — 问题与边界
        </h1>
        <hr className="border-sage/40" />

        <Callout>
          核心原则：只写问题，不写解法
        </Callout>

        <div className="flex flex-col gap-2">
          <p className="text-forest/85">
            <span className="text-sage">不是：</span>「我想要 AE86」
          </p>
          <p className="text-forest/85">
            <span className="text-olive">而是：</span>「我需要一辆上过秋名山的赛车…」
          </p>
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest">关键活动</h3>
          <ul className="flex flex-col gap-2">
            {[
              'Deep research 和信息收集',
              '识别未知相关信息',
              '语义对齐（多模型理解差异）',
              '多模型对抗淬炼',
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
