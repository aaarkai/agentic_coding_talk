import { Slide } from '../components/Slide';
import { Terminal } from 'lucide-react';

export function CoverSlide() {
  return (
    <Slide>
      <div className="flex flex-col items-center justify-center text-center gap-8">
        <div className="inline-flex items-center justify-center p-5 bg-forest/[0.06] rounded-2xl mb-2 border border-forest/20">
          <Terminal className="w-14 h-14 text-forest" />
        </div>
        <h1 className="font-heading text-7xl font-bold text-forest tracking-tight">
          Agentic Coding
        </h1>
        <p className="font-heading text-3xl text-sage font-light mt-2">
          工程实践
        </p>
        <div className="w-16 h-px bg-sage/40 my-4" />
        <p className="text-lg text-sage">
          Harness Engineering &middot; Plan Mode &middot; Code Mode
        </p>
      </div>
    </Slide>
  );
}
