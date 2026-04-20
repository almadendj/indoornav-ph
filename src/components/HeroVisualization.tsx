export function HeroVisualization() {
  return (
    <div className="relative aspect-[5/4] lg:aspect-[6/5]">
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at center, rgba(245,158,11,0.08), transparent 70%)' }}
        />
      </div>
      <svg viewBox="0 0 600 500" className="relative w-full h-full">
        <defs>
          <linearGradient id="floorEdge" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(245,245,240,0.15)" />
            <stop offset="1" stopColor="rgba(245,245,240,0.04)" />
          </linearGradient>
          <radialGradient id="userGlow">
            <stop offset="0" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="0.4" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
          <pattern id="grid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(245,245,240,0.04)" strokeWidth="0.5" />
          </pattern>
          <path id="userPath" d="M 80 430 L 80 340 L 220 340 L 220 240 L 380 240 L 380 160 L 480 160" />
        </defs>

        <rect width="600" height="500" fill="url(#grid)" />

        {/* Magnetic contour lines */}
        <g opacity="0.5">
          {[...Array(8)].map((_, i) => (
            <path
              key={i}
              d={`M 0 ${60 + i * 55} Q 150 ${40 + i * 50}, 300 ${60 + i * 58} T 600 ${55 + i * 55}`}
              stroke="#f59e0b"
              strokeWidth="0.5"
              fill="none"
              opacity={0.12}
              style={{ animation: `contour-shift ${4 + i * 0.3}s ease-in-out infinite` }}
            />
          ))}
        </g>

        {/* Mall floor plan */}
        <g stroke="url(#floorEdge)" strokeWidth="1.2" fill="rgba(245,245,240,0.015)">
          <rect x="40" y="60" width="520" height="400" rx="2" />
          <rect x="60" y="80" width="80" height="70" />
          <rect x="145" y="80" width="80" height="70" />
          <rect x="230" y="80" width="80" height="70" />
          <rect x="315" y="80" width="80" height="70" />
          <rect x="400" y="80" width="80" height="70" />
          <rect x="485" y="80" width="60" height="70" />
          <rect x="60" y="190" width="100" height="90" />
          <rect x="60" y="290" width="100" height="70" />
          <rect x="60" y="370" width="100" height="70" />
          <rect x="440" y="190" width="105" height="90" />
          <rect x="440" y="290" width="105" height="80" />
          <rect x="200" y="190" width="100" height="90" />
          <rect x="310" y="190" width="120" height="90" />
          <rect x="180" y="370" width="80" height="70" />
          <rect x="270" y="370" width="80" height="70" />
          <rect x="360" y="370" width="80" height="70" />
          <rect x="450" y="390" width="95" height="50" />
        </g>

        {/* Concourse label */}
        <g fill="rgba(245,245,240,0.25)" fontFamily="'JetBrains Mono', monospace" fontSize="8">
          <text x="300" y="172" textAnchor="middle">MAIN CONCOURSE · LEVEL 2</text>
        </g>

        {/* Entry / Destination markers */}
        <g>
          <rect x="70" y="420" width="30" height="30" fill="none" stroke="rgba(245,245,240,0.25)" strokeWidth="1" strokeDasharray="2 2" />
          <text x="85" y="465" fill="rgba(245,245,240,0.3)" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">ENTRY</text>
          <rect x="465" y="145" width="30" height="30" fill="none" stroke="rgba(245,245,240,0.25)" strokeWidth="1" strokeDasharray="2 2" />
          <text x="480" y="140" fill="rgba(245,245,240,0.3)" fontSize="7" fontFamily="'JetBrains Mono', monospace" textAnchor="middle">DESTINATION</text>
        </g>

        {/* BLE beacon dots */}
        {[{x:85,y:435},{x:220,y:340},{x:220,y:240},{x:380,y:240},{x:380,y:160},{x:480,y:160}].map((b, i) => (
          <g key={i} transform={`translate(${b.x},${b.y})`}>
            <circle r="18" fill="none" stroke="#4ade80" strokeOpacity="0.25" strokeWidth="1" style={{ transformOrigin: 'center', animation: `pulse-ring 3s ease-out infinite ${i * 0.5}s` }} />
            <circle r="12" fill="none" stroke="#4ade80" strokeOpacity="0.35" strokeWidth="1" style={{ transformOrigin: 'center', animation: `pulse-ring-slow 3s ease-out infinite ${i * 0.5}s` }} />
            <circle r="3" fill="#4ade80" />
          </g>
        ))}

        {/* Route path */}
        <use href="#userPath" stroke="#f59e0b" strokeWidth="2" fill="none" strokeDasharray="4 4" strokeOpacity="0.5" style={{ animation: 'dash-flow 1.5s linear infinite' }} />

        {/* Animated user dot */}
        <g>
          <circle r="24" fill="url(#userGlow)"><animateMotion dur="12s" repeatCount="indefinite"><mpath href="#userPath" /></animateMotion></circle>
          <circle r="16" fill="none" stroke="#f59e0b" strokeWidth="1" strokeOpacity="0.4"><animateMotion dur="12s" repeatCount="indefinite"><mpath href="#userPath" /></animateMotion></circle>
          <circle r="6" fill="#f59e0b"><animateMotion dur="12s" repeatCount="indefinite"><mpath href="#userPath" /></animateMotion></circle>
        </g>

        {/* HUD overlay */}
        <g transform="translate(420, 75)">
          <rect x="0" y="0" width="140" height="60" fill="rgba(10,14,26,0.85)" stroke="rgba(245,158,11,0.3)" strokeWidth="0.8" rx="3" />
          <text x="10" y="16" fill="#f59e0b" fontSize="8" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">● LIVE</text>
          <text x="45" y="16" fill="rgba(245,245,240,0.5)" fontSize="8" fontFamily="'JetBrains Mono', monospace" letterSpacing="1">FUSION ACTIVE</text>
          <line x1="10" y1="22" x2="130" y2="22" stroke="rgba(245,245,240,0.08)" strokeWidth="0.5" />
          <text x="10" y="36" fill="rgba(245,245,240,0.6)" fontSize="7" fontFamily="'JetBrains Mono', monospace">ACCURACY  ±1.8m</text>
          <text x="10" y="48" fill="rgba(245,245,240,0.6)" fontSize="7" fontFamily="'JetBrains Mono', monospace">LAYERS    GEO+PDR+BLE</text>
        </g>

        {/* Legend */}
        <g transform="translate(50, 470)">
          <circle cx="0" cy="0" r="3" fill="#f59e0b" />
          <text x="8" y="3" fill="rgba(245,245,240,0.6)" fontSize="8" fontFamily="'JetBrains Mono', monospace">You</text>
          <circle cx="45" cy="0" r="3" fill="#4ade80" />
          <text x="53" y="3" fill="rgba(245,245,240,0.6)" fontSize="8" fontFamily="'JetBrains Mono', monospace">BLE anchor</text>
          <line x1="130" y1="0" x2="148" y2="0" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" strokeOpacity="0.7" />
          <text x="152" y="3" fill="rgba(245,245,240,0.6)" fontSize="8" fontFamily="'JetBrains Mono', monospace">Route</text>
        </g>
      </svg>

      <div className="absolute top-3 left-3 font-mono text-[10px] text-white/30">14.5547°N · 121.0244°E</div>
      <div className="absolute bottom-3 right-3 font-mono text-[10px] text-white/30">FLOOR 2 OF 5</div>
    </div>
  );
}
