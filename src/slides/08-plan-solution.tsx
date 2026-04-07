import { Slide } from '../components/Slide';
import { Callout } from '../content/Callout';
import { CodeBlock } from '../content/CodeBlock';

export function PlanSolutionSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          PLAN MODE — 方案与验收
        </h1>
        <hr className="border-sage/40" />

        <Callout>
          核心原则：研究量最大的阶段
        </Callout>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest">关键活动</h3>
          <ul className="flex flex-col gap-2">
            {[
              'Agent 主导方案研究与对比',
              '人基于偏好做方案选择',
              'BDD 风格验收场景 (Given / When / Then)',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-forest/85">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest mb-2">BDD 示例</h3>
          <CodeBlock
            lang="gherkin"
            code={`Given 用户已登录系统\nWhen 用户点击"导出数据"\nThen 系统生成 CSV 文件并触发下载`}
          />
        </div>

        <Callout>
          验收场景是意图漂移检测器 — 通不过说明意图传递失真
        </Callout>
      </div>
    </Slide>
  );
}
