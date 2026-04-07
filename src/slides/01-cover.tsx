import { Slide } from '../components/Slide';

export function CoverSlide() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className="font-heading text-6xl font-bold text-forest tracking-tight">
          Agentic Coding
        </h1>
        <p className="font-heading text-2xl text-sage mt-2">
          工程实践分享
        </p>
        <div className="w-16 h-px bg-sage/40 my-4" />
        <p className="text-lg text-forest/85">
          Harness Engineering · Plan Mode · Code Mode
        </p>
      </div>
    </Slide>
  );
}
