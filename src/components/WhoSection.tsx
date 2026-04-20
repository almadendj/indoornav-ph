import React from 'react';
import { Building2, Zap, BarChart3 } from 'lucide-react';
import { whoContent, personas } from '../content';
import { PersonaCard } from './PersonaCard';

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
};

export function WhoSection() {
  return (
    <section id="who" className="relative py-24 lg:py-32 border-t hairline">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="font-mono text-xs text-amber-500/80 mb-4 tracking-widest">{whoContent.sectionNum}</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02]">
            A platform, not an app. <em className="italic">{whoContent.headingEmphasis}</em>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p, i) => {
            const { iconName, ...rest } = p;
            return <PersonaCard key={i} icon={iconMap[iconName]} {...rest} />;
          })}
        </div>
      </div>
    </section>
  );
}
