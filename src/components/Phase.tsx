import type { PhaseStatus } from '../content';

interface PhaseProps {
  num: string;
  status: PhaseStatus;
  title: string;
  months: string;
  detail: string;
}

export function Phase({ num, status, title, months, detail }: PhaseProps) {
  const isActive = status === 'active';
  const isNext = status === 'next';

  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-5">
        <div
          className={`w-4 h-4 rounded-full border-2 ${
            isActive
              ? 'border-amber-500 bg-amber-500'
              : isNext
              ? 'border-amber-500/60 bg-[#0a0e1a]'
              : 'border-white/20 bg-[#0a0e1a]'
          }`}
        >
          {isActive && (
            <div
              className="w-full h-full rounded-full bg-amber-500"
              style={{ animation: 'pulse-ring-slow 2s ease-out infinite' }}
            />
          )}
        </div>
        {isActive && (
          <div className="font-mono text-[10px] text-amber-500 tracking-widest">CURRENT</div>
        )}
      </div>
      <div className="font-mono text-xs text-white/40 mb-2">
        {num} · {months}
      </div>
      <h3 className={`font-display text-xl mb-3 ${isActive || isNext ? 'text-white' : 'text-white/70'}`}>
        {title}
      </h3>
      <p className="text-sm text-white/60 leading-relaxed">{detail}</p>
    </div>
  );
}
