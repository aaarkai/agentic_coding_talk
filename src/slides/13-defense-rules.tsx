import { Slide } from '../components/Slide';
import { Callout } from '../content/Callout';
import { Users, Bot, FileText, GitBranch, Layers, Beaker } from 'lucide-react';
import { BulletItem } from '../components/BulletItem';

export function DefenseRulesSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <h1 className="font-heading text-5xl font-bold text-forest">
          防御规则
        </h1>
        <hr className="border-sage/40" />

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-blue-700 font-semibold">
              <Users size={22} />
              <span className="text-xl">对人的规则</span>
            </div>
            <BulletItem icon={<FileText size={16} />}>一个人一个项目/模块，协作由一人主导</BulletItem>
            <BulletItem icon={<GitBranch size={16} />}>先 review plan.md，不是等代码写完才发现接口对不上</BulletItem>
            <BulletItem icon={<Layers size={16} />}>拒绝没有文档的代码</BulletItem>
            <BulletItem icon={<Beaker size={16} />}>定期重构，重写代码</BulletItem>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-emerald-700 font-semibold">
              <Bot size={22} />
              <span className="text-xl">对 AI 的规则</span>
            </div>
            <BulletItem>任务颗粒度合适——太大偷工减料，太小管不过来</BulletItem>
            <BulletItem>多 agent 检查对抗——不让写代码的 agent 自己验证自己</BulletItem>
            <BulletItem>主动压缩和清理上下文，避免注意力衰减</BulletItem>
            <BulletItem>BDD 验收场景跑不过，不允许进入下一个 phase</BulletItem>
          </div>
        </div>

        <Callout>
          核心纪律：不让写代码的 agent 自己验证自己
        </Callout>
      </div>
    </Slide>
  );
}
