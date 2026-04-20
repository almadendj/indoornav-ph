import { useState, useEffect } from 'react';
import { layers, stackContent } from '../content';
import { LayerDetail } from './LayerDetail';

export function StackSection() {
  const [activeLayer, setActiveLayer] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveLayer((p) => (p + 1) % 3), 4200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="stack" className="relative py-24 lg:py-32 border-t hairline">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="font-mono text-xs text-amber-500/80 mb-4 tracking-widest">{stackContent.sectionNum}</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-6">
            Three layers, fused on-device, into one <em className="italic">{stackContent.headingEmphasis}</em>
          </h2>
          <p className="text-white/75 leading-relaxed text-lg">{stackContent.description}</p>
        </div>
        <div className="grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 space-y-2">
            {layers.map((l, i) => (
              <button
                key={i}
                onClick={() => setActiveLayer(i)}
                className={`w-full text-left p-5 rounded-lg border transition-all duration-500 ${
                  activeLayer === i
                    ? 'border-amber-500/40 bg-amber-500/[0.04]'
                    : 'hairline hover:border-white/20 hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="font-mono text-xs mt-1 tabular-nums" style={{ color: l.color }}>{l.num}</div>
                  <div className="flex-1">
                    <div className="font-display text-xl mb-1">{l.name}</div>
                    <div className="font-mono text-xs text-white/50">{l.role} · {l.accuracy} · {l.hardware}</div>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full mt-2 transition-all"
                    style={{
                      background: activeLayer === i ? l.color : 'rgba(255,255,255,0.15)',
                      boxShadow: activeLayer === i ? `0 0 12px ${l.color}` : 'none',
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
          <div className="lg:col-span-7">
            <LayerDetail layer={layers[activeLayer]} />
          </div>
        </div>
      </div>
    </section>
  );
}
