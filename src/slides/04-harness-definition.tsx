import { Slide } from '../components/Slide';
import { ComparisonTable } from '../content/ComparisonTable';
import { Callout } from '../content/Callout';
import { SectionHeader } from '../components/SectionHeader';
import { Card } from '../components/Card';
import { Users, FileText, Bot, ArrowRight } from 'lucide-react';

export function HarnessDefinitionSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <SectionHeader label="核心概念" variant="forest" />

        <h1 className="font-heading text-5xl font-bold text-forest">
          Harness Engineering
        </h1>

        <p className="text-xl text-forest/85 leading-relaxed">
          通过输入<span className="text-forest font-semibold">语言</span>、<span className="text-forest font-semibold">文档</span>和<span className="text-forest font-semibold">资源</span>来控制 Code Agent 完成工作
        </p>

        <Callout>
          不是让 AI 做"更快的手指"，而是让 AI 成为你编写的合约的执行者
        </Callout>

        <ComparisonTable
          headerLeft="传统模式"
          headerRight="Harness 模式"
          rows={[
            { left: 'One prompt → code', right: 'Problem → Contract → Execution' },
            { left: 'Human writes code', right: 'Human writes intent' },
            { left: 'Review code', right: 'Review plan, verify acceptance' },
            { left: 'Doc after code', right: 'Doc before code, >10:1 ratio' },
          ]}
        />

        <div className="flex flex-col items-center gap-4 mt-2">
          <h3 className="font-heading text-lg font-semibold text-forest">Contract 模型</h3>
          <div className="flex items-center gap-6">
            <Card icon={<Users size={24} />} title="User" desc="意图" accent="blue" className="w-40" />
            <ArrowRight size={24} className="text-sage flex-shrink-0" />
            <Card icon={<FileText size={24} />} title="Contract" desc="合同" accent="amber" className="w-40" />
            <ArrowRight size={24} className="text-sage flex-shrink-0" />
            <Card icon={<Bot size={24} />} title="Agent" desc="执行" accent="forest" className="w-40" />
          </div>
        </div>
      </div>
    </Slide>
  );
}
