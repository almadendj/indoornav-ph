interface MetricStatProps {
  label: string;
  value: string;
  sub: string;
}

export function MetricStat({ label, value, sub }: MetricStatProps) {
  return (
    <div>
      <div className="font-mono text-[10px] text-white/40 tracking-widest mb-2">{label}</div>
      <div className="font-display text-2xl lg:text-3xl mb-1">{value}</div>
      <div className="text-xs text-white/40">{sub}</div>
    </div>
  );
}
