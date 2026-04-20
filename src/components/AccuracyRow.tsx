import { Target } from 'lucide-react';

interface AccuracyRowProps {
  zone: string;
  accuracy: string;
  layers: string;
  color: string;
}

export function AccuracyRow({ zone, accuracy, layers, color }: AccuracyRowProps) {
  return (
    <div className="p-5 border hairline rounded-lg relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
      <div className="flex items-start gap-3">
        <Target className="w-4 h-4 mt-0.5" style={{ color }} />
        <div className="flex-1">
          <div className="font-mono text-[10px] text-white/40 tracking-widest mb-1">{zone.toUpperCase()}</div>
          <div className="font-display text-2xl mb-1">{accuracy}</div>
          <div className="text-xs text-white/50">{layers}</div>
        </div>
      </div>
    </div>
  );
}
