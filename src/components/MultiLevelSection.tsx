import { multiLevelContent } from '../content';
import { LevelFeature } from '../ui/LevelFeature';
import { MultiLevelVisualization } from './MultiLevelVisualization';

export function MultiLevelSection() {
  return (
    <section id="multilevel" className="relative py-24 lg:py-32 border-t hairline overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[50%] h-[70%] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(34,211,238,0.12), transparent 60%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-14 grid lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-xs text-amber-500/80 mb-4 tracking-widest">{multiLevelContent.sectionNum}</div>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
              Five storeys. <em className="italic text-amber-400">{multiLevelContent.headingEmphasis}</em>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-white/75 leading-relaxed">{multiLevelContent.description}</p>
          </div>
        </div>
        <MultiLevelVisualization />
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {multiLevelContent.features.map((f, i) => <LevelFeature key={i} {...f} />)}
        </div>
      </div>
    </section>
  );
}
