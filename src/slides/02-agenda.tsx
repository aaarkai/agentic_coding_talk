import { Slide } from '../components/Slide';

export function AgendaSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          Agenda
        </h1>
        <hr className="border-sage/40 my-2" />
        <ul className="flex flex-col gap-4 text-lg text-forest/85">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
            Harness Engineering 核心理念
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
            PLAN MODE — 问题、标准、方案
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
            CODE MODE — 执行、验收、防御
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
            上下文工程与工具链
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 w-2 h-2 rounded-full bg-olive shrink-0" />
            总结与 Q&A
          </li>
        </ul>
      </div>
    </Slide>
  );
}
