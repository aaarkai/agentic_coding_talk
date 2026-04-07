import { Slide } from '../components/Slide';
import { Callout } from '../content/Callout';

export function HumanRoleSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          人在执行阶段干什么？
        </h1>
        <hr className="border-sage/40" />

        <Callout>
          不是改代码，是做两个判断
        </Callout>

        <div className="flex flex-col gap-4 mt-2">
          <div className="rounded-lg border border-sage/20 p-5 bg-sage/5">
            <h3 className="font-heading text-lg font-semibold text-forest mb-2">判断一</h3>
            <p className="text-forest/85 mb-2">这个 phase 的产出和验收场景对得上吗？</p>
            <p className="text-sm text-sage">
              对得上 → 下一个 phase &nbsp;&nbsp;|&nbsp;&nbsp; 对不上 → 方案问题 or 意图问题？
            </p>
          </div>

          <div className="rounded-lg border border-sage/20 p-5 bg-sage/5">
            <h3 className="font-heading text-lg font-semibold text-forest mb-2">判断二</h3>
            <p className="text-forest/85 mb-2">修代码还是改 plan？</p>
            <p className="text-sm text-sage">
              方案细节问题 → code 层面调整 &nbsp;&nbsp;|&nbsp;&nbsp; 意图偏了 → <span className="text-forest font-semibold">停下来，回 plan 修正</span>
            </p>
          </div>
        </div>

        <Callout>
          检测到意图漂移时，回 plan 层面修正是最重要的纪律
        </Callout>
      </div>
    </Slide>
  );
}
