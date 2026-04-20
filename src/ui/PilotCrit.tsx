import type { ReactNode } from 'react';

interface PilotCritProps {
  icon: ReactNode;
  text: string;
}

export function PilotCrit({ icon, text }: PilotCritProps) {
  return (
    <div className="flex items-center gap-2 justify-center">
      <div className="text-amber-500">{icon}</div>
      <span className="text-sm text-white/60">{text}</span>
    </div>
  );
}
