import { Slide } from '../components/Slide';
import { ComparisonTable } from '../content/ComparisonTable';
import { Callout } from '../content/Callout';

export function CoreThesisSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          Core Thesis
        </h1>
        <hr className="border-sage/40" />

        <ComparisonTable
          headerLeft="期望"
          headerRight="现实"
          rows={[
            {
              left: '少量注意力，大型产出',
              right: '精力消耗比自己写还大',
            },
            {
              left: '10x 生产力',
              right: '千篇一律',
            },
          ]}
        />

        <div className="flex flex-col gap-2 mt-2">
          <p className="text-forest/85">
            市场教了什么（但不够）：one-shot prompt、skills/loop/MCP、multi-agent
          </p>
          <p className="text-forest/85">
            市场盲区：没有教我们怎么理解和思考
          </p>
        </div>

        <Callout>
          编程是高质量的从发散到收敛的动态过程
        </Callout>
      </div>
    </Slide>
  );
}
