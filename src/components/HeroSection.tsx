import { ArrowRight, ChevronRight } from 'lucide-react';
import { heroContent } from '../content';
import { MetricStat } from '../ui/MetricStat';
import { HeroVisualization } from './HeroVisualization';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden noise">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute top-0 right-0 w-[60%] h-[70%] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(245,158,11,0.18), transparent 60%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 xl:col-span-5 anim-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 border hairline rounded-full text-xs font-mono text-white/60 mb-8">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" style={{ animation: 'beacon-blink 2s infinite' }} />
              <span>{heroContent.badge}</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8">
              {heroContent.headline[0]}<br />{heroContent.headline[1]}<br />
              <em className="italic text-amber-400">{heroContent.headline[2]}</em>
            </h1>
            <p className="text-lg text-white/75 leading-relaxed max-w-xl mb-10">{heroContent.description}</p>
            <div className="flex flex-wrap items-center gap-3 mb-12">
              <a href="#cta" className="group flex items-center gap-2 px-6 py-3.5 bg-amber-500 text-[#0a0e1a] rounded-full font-medium hover:bg-amber-400 transition amber-glow">
                {heroContent.ctaPrimary}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a href="#stack" className="flex items-center gap-2 px-6 py-3.5 border hairline rounded-full font-medium hover:bg-white/5 transition">
                {heroContent.ctaSecondary}
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 pt-8 border-t hairline">
              {heroContent.stats.map((s, i) => <MetricStat key={i} {...s} />)}
            </div>
          </div>
          <div className="lg:col-span-6 xl:col-span-7">
            <HeroVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}
