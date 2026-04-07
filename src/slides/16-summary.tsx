import { Slide } from '../components/Slide';
import { Callout } from '../content/Callout';
import { Target, FileText } from 'lucide-react';
import { BulletItem } from '../components/BulletItem';

export function SummarySlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-forest">
          总结
        </h1>
        <hr className="border-sage/40" />

        <div className="flex flex-col gap-5 mt-2">
          <BulletItem icon={<Target size={20} />}>
            <span className="text-xl">核心论点：编程是从发散到收敛的动态过程</span>
          </BulletItem>
          <BulletItem icon={<FileText size={20} />}>
            <span className="text-xl">Harness Engineering 本质：人类写精确的、可测试的意图 (Contract)，Agent 做执行者</span>
          </BulletItem>
        </div>

        <Callout>
          最核心纪律：验收不过就停下来，意图漂移就回 plan
        </Callout>
      </div>
    </Slide>
  );
}
