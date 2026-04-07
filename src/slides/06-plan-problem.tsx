import { Slide } from '../components/Slide';
import { SectionHeader } from '../components/SectionHeader';
import { Callout } from '../content/Callout';
import { FileText, Search, Eye, Scale, Shield } from 'lucide-react';
import { BulletItem } from '../components/BulletItem';

export function PlanProblemSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <div className="flex flex-col items-start gap-3">
          <SectionHeader icon={<FileText size={18} />} label="Plan Mode · 阶段一" variant="amber" />
          <h1 className="font-heading text-5xl font-bold text-forest">
            问题与边界
          </h1>
        </div>

        <p className="text-amber-700 text-xl font-medium">只写问题，不写解法</p>

        <div className="p-6 rounded-xl border border-forest/10 bg-forest/[0.03]">
          <p className="text-sage text-base mb-2">不是：</p>
          <p className="text-forest/70 text-lg mb-3">「我想要 AE86」</p>
          <p className="text-sage text-base mb-2">而是：</p>
          <p className="text-forest text-lg font-medium">「我需要一辆上过秋名山的赛车…」</p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-lg font-semibold text-forest">关键活动</h3>
          <BulletItem icon={<Search size={18} />}>Deep research 和信息收集，确认概念与领域</BulletItem>
          <BulletItem icon={<Eye size={18} />}>哪些是不知道的相关信息？哪些是要坚持的概念？</BulletItem>
          <BulletItem icon={<Scale size={18} />}>同一个词模型的理解和自己的理解的误差</BulletItem>
          <BulletItem icon={<Shield size={18} />}>多模型对抗淬炼——语义是千人千面的</BulletItem>
        </div>

        <Callout>
          通过大量研究和信息收集，确认概念与领域
        </Callout>
      </div>
    </Slide>
  );
}
