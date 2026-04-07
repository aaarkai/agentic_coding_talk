import { Slide } from '../components/Slide';
import { SectionHeader } from '../components/SectionHeader';
import { FlowStep, FlowArrow } from '../components/FlowStep';
import { Code2, GitBranch, FileText, BookOpen } from 'lucide-react';
import { BulletItem } from '../components/BulletItem';

export function CodeExecutionSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <div className="flex flex-col items-start gap-3">
          <SectionHeader icon={<Code2 size={18} />} label="Code Mode" variant="emerald" />
          <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-forest">
            执行流程
          </h1>
        </div>

        <div className="flex items-center gap-3 justify-center flex-wrap">
          <FlowStep label="plan.md + todo.md" active />
          <FlowArrow />
          <FlowStep label="Phase Dev" />
          <FlowArrow />
          <FlowStep label="Review" />
          <FlowArrow />
          <FlowStep label="Verification" />
          <FlowArrow />
          <FlowStep label="Replan / Next" />
        </div>

        <div className="flex flex-col gap-3 mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest">规则</h3>
          <BulletItem icon={<Code2 size={18} />}>Plan 完成后，Agent 自主分解 todo，按 Phase 执行</BulletItem>
          <BulletItem icon={<FileText size={18} />}>每个 Phase 产出：代码 + review file + 测试结果</BulletItem>
          <BulletItem icon={<GitBranch size={18} />}>严格基于 Git，每个 Phase 一个可回滚节点</BulletItem>
          <BulletItem icon={<BookOpen size={18} />}>保留每个执行 session，用来 trace 和解释</BulletItem>
        </div>

        <p className="text-sm text-sage italic">
          Spec Kit 困境：越迭代越复杂，各种兜底归一
        </p>
      </div>
    </Slide>
  );
}
