import { Slide } from '../components/Slide';
import { FileText, Target, Code2, Layers, CheckCircle } from 'lucide-react';

export function AgendaSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-8 w-full max-w-3xl">
        <h1 className="font-heading text-5xl font-bold text-forest">
          Agenda
        </h1>
        <hr className="border-sage/40" />

        <div className="flex flex-col gap-5 mt-2">
          <div className="flex items-center gap-4 p-4 rounded-xl bg-forest/[0.03] border border-forest/10">
            <div className="w-10 h-10 rounded-lg bg-forest/[0.08] text-forest flex items-center justify-center shrink-0">
              <FileText size={20} />
            </div>
            <span className="text-xl text-forest/85">Harness Engineering — 核心理念</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-forest/[0.03] border border-forest/10">
            <div className="w-10 h-10 rounded-lg bg-forest/[0.08] text-forest flex items-center justify-center shrink-0">
              <Target size={20} />
            </div>
            <span className="text-xl text-forest/85">PLAN MODE — 问题、标准、方案</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-forest/[0.03] border border-forest/10">
            <div className="w-10 h-10 rounded-lg bg-forest/[0.08] text-forest flex items-center justify-center shrink-0">
              <Code2 size={20} />
            </div>
            <span className="text-xl text-forest/85">CODE MODE — 执行、验收、防御</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-forest/[0.03] border border-forest/10">
            <div className="w-10 h-10 rounded-lg bg-forest/[0.08] text-forest flex items-center justify-center shrink-0">
              <Layers size={20} />
            </div>
            <span className="text-xl text-forest/85">上下文工程与工具链</span>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-xl bg-forest/[0.03] border border-forest/10">
            <div className="w-10 h-10 rounded-lg bg-forest/[0.08] text-forest flex items-center justify-center shrink-0">
              <CheckCircle size={20} />
            </div>
            <span className="text-xl text-forest/85">总结与 Q&A</span>
          </div>
        </div>
      </div>
    </Slide>
  );
}
