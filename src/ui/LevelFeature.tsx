interface LevelFeatureProps {
  metric: string;
  metricLabel: string;
  title: string;
  desc: string;
}

export function LevelFeature({ metric, metricLabel, title, desc }: LevelFeatureProps) {
  return (
    <div className="p-6 border hairline rounded-lg bg-white/[0.015]">
      <div className="font-mono text-[10px] text-white/40 tracking-widest mb-2">{metricLabel}</div>
      <div className="font-display text-3xl text-amber-400 mb-4 tabular-nums">{metric}</div>
      <div className="font-display text-lg mb-2">{title}</div>
      <p className="text-sm text-white/60 leading-relaxed">{desc}</p>
    </div>
  );
}
