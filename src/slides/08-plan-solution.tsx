import { Slide } from '../components/Slide';
import { SectionHeader } from '../components/SectionHeader';
import { Callout } from '../content/Callout';
import { CodeBlock } from '../content/CodeBlock';
import { FileText, Bot, Users, Beaker } from 'lucide-react';
import { BulletItem } from '../components/BulletItem';

export function PlanSolutionSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <div className="flex flex-col items-start gap-3">
          <SectionHeader icon={<FileText size={18} />} label="Plan Mode · 阶段三" variant="forest" />
          <h1 className="font-heading text-5xl font-bold text-forest">
            方案与验收
          </h1>
        </div>

        <p className="text-amber-700 text-xl font-medium">研究量最大的阶段</p>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest">关键活动</h3>
          <BulletItem icon={<Bot size={18} />}>Agent 主导方案研究与对比</BulletItem>
          <BulletItem icon={<Users size={18} />}>人基于偏好做方案选择</BulletItem>
          <BulletItem icon={<Beaker size={18} />}>BDD 风格验收场景 (Given / When / Then)</BulletItem>
        </div>

        <div className="mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest mb-3">BDD 示例</h3>
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
