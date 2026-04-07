import { Slide } from '../components/Slide';
import { Callout } from '../content/Callout';

export function SummarySlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          总结
        </h1>
        <hr className="border-sage/40" />

        <div className="flex flex-col gap-4 mt-2">
          <div className="flex items-start gap-3 text-forest/85">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
            <span>核心论点回顾：编程是从发散到收敛的动态过程</span>
          </div>
          <div className="flex items-start gap-3 text-forest/85">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
            <span>Harness Engineering 本质：人类写精确的、可测试的意图 (Contract)，Agent 做执行者</span>
          </div>
        </div>

        <Callout>
          最核心纪律：验收不过就停下来，意图漂移就回 plan
        </Callout>
      </div>
    </Slide>
  );
}
