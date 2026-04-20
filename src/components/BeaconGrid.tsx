interface BeaconGridProps {
  count: number;
  activeColor: string;
  dense: boolean;
}

export function BeaconGrid({ count: _count, activeColor, dense }: BeaconGridProps) {
  const cols = 20;
  const rows = 15;
  const total = cols * rows;
  const activeIndices = new Set<number>();

  if (dense) {
    for (let i = 0; i < total; i++) activeIndices.add(i);
  } else {
    const positions = [12,27,43,58,76,91,107,128,145,163,180,198,213,229,247,261,278,244,189,152,96,72,44,19,201,256,117,88,164,220];
    positions.forEach(p => activeIndices.add(p % total));
  }

  return (
    <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
      {[...Array(total)].map((_, i) => {
        const isActive = activeIndices.has(i);
        return (
          <div
            key={i}
            className="aspect-square rounded-full transition-all"
            style={{
              background: isActive ? activeColor : 'rgba(255,255,255,0.04)',
              boxShadow: isActive && !dense ? `0 0 4px ${activeColor}` : 'none',
              opacity: isActive ? (dense ? 0.6 : 1) : 1,
            }}
          />
        );
      })}
    </div>
  );
}
