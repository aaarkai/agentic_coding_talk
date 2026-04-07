import { Slide } from '../components/Slide';

export function IntentDriftSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          意图漂移与 Accept → Boom 陷阱
        </h1>
        <hr className="border-sage/40" />

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-lg font-semibold text-forest">Intent Drift 根因</h3>
          <p className="text-forest/85">
            LLM 注意力机制在长上下文中自然衰减
          </p>

          <h3 className="font-heading text-lg font-semibold text-forest mt-2">表现</h3>
          <ul className="flex flex-col gap-2">
            {[
              '代码越迭代越复杂',
              'stub / TODO 糊弄',
              '单元测试自己骗自己',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-forest/85">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mt-4">
          <p className="font-heading text-3xl font-bold text-olive">
            Accept → Accept → LGTM → BOOM
          </p>
          <p className="text-sm text-sage mt-2">
            复杂度超过理解能力时选择盲目接受
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest">防御机制</h3>
          <ul className="flex flex-col gap-2">
            {[
              '任务颗粒度合适',
              '每个 Phase 一个可回滚的 Git commit',
              'BDD 验收跑不过，禁止进入下一 Phase',
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
