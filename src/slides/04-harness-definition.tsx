import { Slide } from '../components/Slide';

export function HarnessDefinitionSlide() {
  return (
    <Slide>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        <h1 className="font-heading text-4xl font-bold text-forest">
          Harness Engineering 定义
        </h1>
        <hr className="border-sage/40 my-2" />
        <p className="text-lg text-forest/85 leading-relaxed">
          通过输入语言、文档和资源控制 Code Agent 完成工作。
        </p>
        <div className="bg-sage/5 border-l-4 border-olive p-4 mt-4">
          <p className="text-forest/85 italic">
            不是让 AI 做"更快的手指"，而是让 AI 成为你编写的合约的执行者。
          </p>
        </div>
      </div>
    </Slide>
  );
}
