import { useState, useEffect, useRef } from 'react';
import { comparisonContent } from '../content';
import { CostRow } from '../ui/CostRow';
import { BeaconGrid } from './BeaconGrid';
import { AccuracyRow } from './AccuracyRow';

export function ComparisonSection() {
  const [beaconCount, setBeaconCount] = useState(0);
  const comparisonRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          let n = 0;
          const iv = setInterval(() => {
            n += 23;
            if (n >= 1500) { n = 1500; clearInterval(iv); }
            setBeaconCount(n);
          }, 20);
        }
      });
    }, { threshold: 0.1 });
    if (comparisonRef.current) obs.observe(comparisonRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="comparison" ref={comparisonRef} className="relative py-24 lg:py-32 border-t hairline overflow-hidden">
      <div
        className="absolute top-1/2 left-0 w-[50%] h-[80%] opacity-30 pointer-events-none -translate-y-1/2"
        style={{ background: 'radial-gradient(ellipse at left, rgba(74,222,128,0.12), transparent 60%)' }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-3xl">
          <div className="font-mono text-xs text-amber-500/80 mb-4 tracking-widest">{comparisonContent.sectionNum}</div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-6">
            Why we don't just <em className="italic text-amber-400">{comparisonContent.headingEmphasis}</em> with beacons.
          </h2>
          <p className="text-white/75 leading-relaxed text-lg">{comparisonContent.description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-white/5 border hairline">
          {/* Full BLE side */}
          <div className="p-8 lg:p-10 bg-[#0a0e1a]">
            <div className="font-mono text-xs text-white/40 mb-3 tracking-widest">{comparisonContent.fullBle.label}</div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-display text-5xl lg:text-6xl tabular-nums text-white/80">{beaconCount.toLocaleString()}</span>
              <span className="font-mono text-sm text-white/40">beacons / floor</span>
            </div>
            <BeaconGrid count={300} activeColor="rgba(255,255,255,0.5)" dense />
            <div className="mt-6 space-y-2 text-sm text-white/50">
              {comparisonContent.fullBle.costs.map((c, i) => <CostRow key={i} {...c} />)}
            </div>
          </div>
          {/* Sparse hybrid side */}
          <div className="p-8 lg:p-10 bg-[#0a0e1a] relative">
            <div className="absolute top-6 right-6 font-mono text-[10px] text-amber-500 bg-amber-500/10 border border-amber-500/30 px-2 py-1 rounded">
              {comparisonContent.sparseHybrid.tag}
            </div>
            <div className="font-mono text-xs text-amber-500/80 mb-3 tracking-widest">{comparisonContent.sparseHybrid.label}</div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-display text-5xl lg:text-6xl tabular-nums text-amber-500">{comparisonContent.sparseHybrid.beaconsPerFloor}</span>
              <span className="font-mono text-sm text-white/40">beacons / floor</span>
            </div>
            <BeaconGrid count={300} activeColor="#f59e0b" dense={false} />
            <div className="mt-6 space-y-2 text-sm text-white/50">
              {comparisonContent.sparseHybrid.costs.map((c, i) => <CostRow key={i} {...c} />)}
            </div>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6 text-sm">
          {comparisonContent.accuracyZones.map((z, i) => <AccuracyRow key={i} {...z} />)}
        </div>
      </div>
    </section>
  );
}
