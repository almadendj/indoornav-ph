import { roadmapContent, phases } from '../content';
import { Phase } from './Phase';

export function RoadmapSection() {
  return (
    <section className="relative py-24 lg:py-32 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="font-mono text-xs text-amber-500/80 mb-4 tracking-widest">{roadmapContent.sectionNum}</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            A phased path to <em className="italic">{roadmapContent.headingEmphasis}</em>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-0 right-0 top-8 h-px bg-gradient-to-r from-amber-500 via-amber-500/40 to-transparent hidden md:block" />
          <div className="grid md:grid-cols-4 gap-6">
            {phases.map((p, i) => <Phase key={i} {...p} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
