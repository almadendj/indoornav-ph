interface CostRowProps {
  label: string;
  value: string;
  good?: boolean;
}

export function CostRow({ label, value, good }: CostRowProps) {
  return (
    <div className="flex items-center justify-between py-1.5 border-b hairline last:border-b-0">
      <span className="text-white/50">{label}</span>
      <span className={`font-mono ${good ? 'text-emerald-400' : 'text-white/70'}`}>{value}</span>
    </div>
  );
}
