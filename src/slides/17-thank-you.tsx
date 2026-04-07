import { Slide } from '../components/Slide';

export function ThankYouSlide() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className="font-heading text-6xl font-bold text-forest tracking-tight">
          Thank You
        </h1>
        <p className="font-heading text-2xl text-sage mt-2">
          Q&A
        </p>
        <div className="w-16 h-px bg-sage/40 my-4" />
        <div className="flex flex-col gap-2 text-sm text-sage">
          <p className="font-semibold text-forest/85">参考资源</p>
          <p>OpenAI: Harness Engineering</p>
          <p>Anthropic: Harness Design for Long-Running Apps</p>
        </div>
      </div>
    </Slide>
  );
}
