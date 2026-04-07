import { Slide } from '../components/Slide';

export function CoreThesisSlide() {
  return (
    <Slide className="items-start justify-start">
      <div className="flex flex-col gap-6 w-full">
        <h1 className="font-heading text-4xl font-bold text-forest">
          Core Thesis
        </h1>
        <hr className="border-sage/40 my-2" />
        <p className="text-lg text-forest/85 leading-relaxed">
          编程是高质量的从发散到收敛的动态过程。
        </p>
        <div className="bg-sage/5 border-l-4 border-olive p-4 mt-4">
          <p className="text-forest/85 italic">
            核心论点：用户期望与现实的差距
          </p>
        </div>
      </div>
    </Slide>
  );
}
