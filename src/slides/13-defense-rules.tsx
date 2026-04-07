import { Slide } from '../components/Slide';
import { Callout } from '../content/Callout';

export function DefenseRulesSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          防御规则
        </h1>
        <hr className="border-sage/40" />

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-lg font-semibold text-forest">对人的规则</h3>
            <ul className="flex flex-col gap-2">
              {[
                '一个人一个项目/模块，协作由一人主导',
                '先 review 对方的 plan.md，不是等代码写完才发现接口对不上',
                '拒绝没有文档的代码',
                '定期重构，重写代码',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-forest/85">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-lg font-semibold text-forest">对 AI 的规则</h3>
            <ul className="flex flex-col gap-2">
              {[
                '任务颗粒度合适',
                '多 agent 检查对抗 — 不让写代码的 agent 自己验证自己',
                '主动压缩和清理上下文',
                'BDD 验收场景跑不过，不允许进入下一个 phase',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-forest/85">
                  <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Callout>
          核心纪律：不让写代码的 agent 自己验证自己
        </Callout>
      </div>
    </Slide>
  );
}
