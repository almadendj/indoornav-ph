import type { ReactNode } from 'react';

interface PersonaCardProps {
  icon: ReactNode;
  role: string;
  tag: string;
  title: string;
  bullets: string[];
  price: string;
}

export function PersonaCard({ icon, role, tag, title, bullets, price }: PersonaCardProps) {
  return (
    <div className="group relative p-8 border hairline rounded-lg hover:bg-white/[0.02] transition flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <div className="w-10 h-10 rounded-lg border hairline flex items-center justify-center text-amber-500">
          {icon}
        </div>
        <div className="font-mono text-[10px] text-white/40 tracking-widest">{tag}</div>
      </div>
      <div className="font-mono text-xs text-white/50 mb-2">{role}</div>
      <h3 className="font-display text-2xl mb-6 leading-tight">{title}</h3>
      <ul className="space-y-2.5 mb-6 flex-1">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-white/60">
            <div className="w-1 h-1 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
            {b}
          </li>
        ))}
      </ul>
      <div className="pt-5 border-t hairline font-mono text-sm text-amber-500">{price}</div>
    </div>
  );
}
