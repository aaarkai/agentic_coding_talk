import { Slide } from '../components/Slide';
import { ComparisonTable } from '../content/ComparisonTable';
import { SectionHeader } from '../components/SectionHeader';
import { Users, FileText, Bot, ArrowRight, ArrowLeft } from 'lucide-react';

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
            <div className="flex flex-col items-center gap-2 w-28">
              <div className="w-11 h-11 rounded-xl bg-forest/[0.08] text-forest flex items-center justify-center">
                <Users size={24} />
              </div>
              <span className="text-sm font-medium text-forest">User</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ArrowRight size={24} className="text-sage" />
              <span className="text-xs text-sage">意图</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-28">
              <div className="w-11 h-11 rounded-xl bg-forest/[0.08] text-forest flex items-center justify-center">
                <FileText size={24} />
              </div>
              <span className="text-sm font-medium text-forest">Contract</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <ArrowRight size={24} className="text-sage" />
              <span className="text-xs text-sage">执行</span>
            </div>
            <div className="flex flex-col items-center gap-2 w-28">
              <div className="w-11 h-11 rounded-xl bg-forest/[0.08] text-forest flex items-center justify-center">
                <Bot size={24} />
              </div>
              <span className="text-sm font-medium text-forest">Agent</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="w-28" />
            <div className="flex flex-col items-center gap-1">
              <ArrowLeft size={24} className="text-sage" />
              <span className="text-xs text-sage">反馈</span>
            </div>
            <div className="w-28" />
            <div className="flex flex-col items-center gap-1">
              <ArrowLeft size={24} className="text-sage" />
              <span className="text-xs text-sage">修正</span>
            </div>
            <div className="w-28" />
          </div>
          <p className="text-sm text-sage text-center max-w-md mt-2">
            一份完全能传达想法和意图的合同以便于 Agent 执行，<br />
            同时 Agent 在擅长的领域补充合同的内容
          </p>
        </div>
      </div>
    </Slide>
  );
}
