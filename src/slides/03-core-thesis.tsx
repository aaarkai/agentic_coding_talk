import { Slide } from '../components/Slide';
import { ComparisonTable } from '../content/ComparisonTable';
import { Callout } from '../content/Callout';
import { AlertTriangle, Eye } from 'lucide-react';
import { BulletItem } from '../components/BulletItem';

export function CoreThesisSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <h1 className="font-heading text-5xl font-bold text-forest">
          核心论点
        </h1>
        <hr className="border-sage/40" />

        <p className="text-2xl text-forest/85 leading-relaxed text-center font-light">
          我们想要<span className="text-forest font-semibold">少量注意力，大型产出</span>
        </p>
        <p className="text-2xl text-forest/85 leading-relaxed text-center font-light">
          实际上<span className="text-rose-600 font-semibold">精力消耗比自己写还大</span>
        </p>

        <ComparisonTable
          headerLeft="我们想要"
          headerRight="实际上"
          rows={[
            {
              left: '做自己不到的事情',
              right: '无法控制结果，天差地别',
            },
            {
              left: '少量注意力，大型产出',
              right: '精力消耗比自己写代码还大',
            },
            {
              left: '一个人 10x 生产力',
              right: '做出来的东西千篇一律',
            },
            {
              left: '十个人 100x 生产力',
              right: '生产力 = x / 人数',
            },
          ]}
        />

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest">市场盲区</h3>
          <BulletItem icon={<Eye size={18} />}>市场教了 one-shot prompt、skills/MCP、multi-agent</BulletItem>
          <BulletItem icon={<AlertTriangle size={18} />}>但没有教我们怎么<span className="text-forest font-semibold">理解和思考</span></BulletItem>
        </div>

        <Callout>
          编程是高质量的从发散到收敛的动态过程
        </Callout>
      </div>
    </Slide>
  );
}
