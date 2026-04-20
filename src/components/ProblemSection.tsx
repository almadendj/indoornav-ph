import { problemContent } from '../content';
import { StatCard } from '../ui/StatCard';

export function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 lg:py-32 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="font-mono text-xs text-amber-500/80 mb-4 tracking-widest">{problemContent.sectionNum}</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              The largest malls in the world have <em className="italic text-amber-400">{problemContent.headingEmphasis}</em> for visitors to find anything inside them.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-white/75 leading-relaxed">{problemContent.description}</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border hairline">
          {problemContent.stats.map((s, i) => <StatCard key={i} {...s} />)}
        </div>
      </div>
    </section>
  );
}
