interface StatCardProps {
  big: string;
  label: string;
  detail: string;
  accent?: boolean;
}

export function StatCard({ big, label, detail, accent }: StatCardProps) {
  return (
    <div className={`p-8 lg:p-10 bg-[#0a0e1a] ${accent ? 'relative' : ''}`}>
      {accent && <div className="absolute top-4 right-4 font-mono text-[10px] text-amber-500/60">★</div>}
      <div className={`font-display text-5xl lg:text-6xl mb-3 tabular-nums ${accent ? 'text-amber-500' : ''}`}>{big}</div>
      <div className="text-sm font-medium mb-1">{label}</div>
      <div className="text-xs text-white/40">{detail}</div>
    </div>
  );
}
