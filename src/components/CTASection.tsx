import { ArrowUpRight, Check } from 'lucide-react';
import { ctaContent } from '../content';
import { PilotCrit } from '../ui/PilotCrit';

export function CTASection() {
  return (
    <section id="cta" className="relative py-24 lg:py-32 border-t hairline overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.12), transparent 60%)' }}
      />
      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <div className="font-mono text-xs text-amber-500/80 mb-6 tracking-widest">{ctaContent.sectionNum}</div>
        <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.98] mb-8">
          We're taking on <em className="italic text-amber-400">{ctaContent.headingEmphasis}</em> pilot venues in 2026.
        </h2>
        <p className="text-lg text-white/75 max-w-2xl mx-auto mb-10">{ctaContent.description}</p>
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a href="mailto:pilot@indoornav.ph" className="group flex items-center gap-2 px-7 py-4 bg-amber-500 text-[#0a0e1a] rounded-full font-medium hover:bg-amber-400 transition amber-glow">
            {ctaContent.ctaPrimary}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
          </a>
          <a href="#" className="flex items-center gap-2 px-7 py-4 border hairline rounded-full font-medium hover:bg-white/5 transition">
            {ctaContent.ctaSecondary}
          </a>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-10 border-t hairline">
          {ctaContent.criteria.map((text, i) => (
            <PilotCrit key={i} icon={<Check className="w-4 h-4" />} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}
