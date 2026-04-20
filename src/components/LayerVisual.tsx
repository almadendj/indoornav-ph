interface LayerVisualProps {
  layer: { num: string; color: string };
}

export function LayerVisual({ layer }: LayerVisualProps) {
  if (layer.num === '01') {
    return (
      <svg viewBox="0 0 400 120" className="w-full h-28">
        {[...Array(6)].map((_, i) => (
          <path
            key={i}
            d={`M 0 ${20 + i * 16} Q 80 ${12 + i * 14}, 160 ${24 + i * 16} T 320 ${16 + i * 15} T 400 ${20 + i * 16}`}
            stroke={layer.color}
            strokeWidth="1"
            fill="none"
            opacity={0.15 + i * 0.08}
            style={{ animation: `contour-shift ${3 + i * 0.5}s ease-in-out infinite` }}
          />
        ))}
        <circle cx="200" cy="60" r="6" fill={layer.color} />
        <circle
          cx="200"
          cy="60"
          r="12"
          fill="none"
          stroke={layer.color}
          strokeOpacity="0.4"
          strokeWidth="1"
          style={{ transformOrigin: '200px 60px', animation: 'pulse-ring-slow 2.5s ease-out infinite' }}
        />
        <text x="215" y="64" fill="#f5f5f0" fontSize="9" fontFamily="'JetBrains Mono', monospace">
          position from magnetic signature
        </text>
      </svg>
    );
  }

  if (layer.num === '02') {
    return (
      <svg viewBox="0 0 400 120" className="w-full h-28">
        <path
          d="M 30 90 L 70 90 L 70 60 L 130 60 L 130 85 L 200 85 L 200 45 L 280 45 L 280 70 L 370 70"
          stroke={layer.color}
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 6"
          style={{ animation: 'dash-flow 2s linear infinite' }}
        />
        {([30, 130, 200, 280, 370] as number[]).map((x, i) => {
          const y = ([90, 60, 45, 70, 70] as number[])[i];
          return <circle key={i} cx={x} cy={y} r="3" fill={layer.color} />;
        })}
        <text x="30" y="20" fill={layer.color} fontSize="9" fontFamily="'JetBrains Mono', monospace">ACCEL</text>
        <text x="110" y="20" fill={layer.color} fontSize="9" fontFamily="'JetBrains Mono', monospace">GYRO</text>
        <text x="180" y="20" fill={layer.color} fontSize="9" fontFamily="'JetBrains Mono', monospace">COMPASS</text>
        <text x="280" y="20" fill={layer.color} fontSize="9" fontFamily="'JetBrains Mono', monospace">BAROMETER</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 120" className="w-full h-28">
      <rect x="10" y="30" width="380" height="60" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {([50, 140, 230, 320] as number[]).map((x, i) => (
        <g key={i} transform={`translate(${x}, 60)`}>
          <circle
            r="14"
            fill="none"
            stroke={layer.color}
            strokeOpacity="0.4"
            style={{ transformOrigin: 'center', animation: `pulse-ring 2.2s ease-out infinite ${i * 0.5}s` }}
          />
          <circle
            r="22"
            fill="none"
            stroke={layer.color}
            strokeOpacity="0.2"
            style={{ transformOrigin: 'center', animation: `pulse-ring-slow 2.8s ease-out infinite ${i * 0.5}s` }}
          />
          <circle r="5" fill={layer.color} />
        </g>
      ))}
      <text x="50" y="108" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">entry</text>
      <text x="140" y="108" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">escalator</text>
      <text x="230" y="108" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">elevator</text>
      <text x="320" y="108" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">corridor</text>
    </svg>
  );
}
