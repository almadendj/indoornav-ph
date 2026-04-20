export function MultiLevelVisualization() {
  const floors = [
    { y: 60, label: "5", name: "LEVEL 5" },
    { y: 140, label: "4", name: "LEVEL 4" },
    { y: 220, label: "3", name: "LEVEL 3" },
    { y: 300, label: "2", name: "LEVEL 2" },
    { y: 380, label: "G", name: "GROUND" },
  ];
  const beacons = [
    { x: 360, y: 378 },
    { x: 430, y: 298 },
    { x: 660, y: 298 },
    { x: 730, y: 218 },
    { x: 950, y: 218 },
    { x: 950, y: 138 },
  ];
  const pathD =
    "M 120 380 L 360 380 L 430 300 L 660 300 L 730 220 L 950 220 L 950 140 L 1080 140";

  return (
    <div
      className="relative w-full rounded-lg border hairline overflow-hidden"
      style={{ background: "#0b1020", aspectRatio: "12/5" }}
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <svg
        viewBox="0 0 1200 500"
        className="relative w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="floorBand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(245,245,240,0.035)" />
            <stop offset="1" stopColor="rgba(245,245,240,0.01)" />
          </linearGradient>
          <radialGradient id="userGlowMulti">
            <stop offset="0" stopColor="#f59e0b" stopOpacity="1" />
            <stop offset="0.4" stopColor="#f59e0b" stopOpacity="0.4" />
            <stop offset="1" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
          <path id="multiPath" d={pathD} />
        </defs>

        <rect
          x="60"
          y="40"
          width="1080"
          height="420"
          fill="none"
          stroke="rgba(245,245,240,0.1)"
          strokeWidth="1"
        />
        <line
          x1="60"
          y1="40"
          x2="1140"
          y2="40"
          stroke="rgba(245,245,240,0.2)"
          strokeWidth="1.5"
        />
        <line
          x1="40"
          y1="460"
          x2="1160"
          y2="460"
          stroke="rgba(245,245,240,0.25)"
          strokeWidth="1.5"
        />
        {[...Array(20)].map((_, i) => (
          <line
            key={i}
            x1={60 + i * 55}
            y1="460"
            x2={48 + i * 55}
            y2="475"
            stroke="rgba(245,245,240,0.12)"
            strokeWidth="0.8"
          />
        ))}

        {/* Floor bands */}
        {floors.map((floor, i) => (
          <g key={i}>
            <rect
              x="60"
              y={floor.y}
              width="1080"
              height="80"
              fill="url(#floorBand)"
            />
            <line
              x1="60"
              y1={floor.y + 80}
              x2="1140"
              y2={floor.y + 80}
              stroke="rgba(245,245,240,0.12)"
              strokeWidth="1"
            />
            <g>
              <rect
                x="12"
                y={floor.y + 25}
                width="32"
                height="30"
                fill="rgba(245,158,11,0.06)"
                stroke="rgba(245,158,11,0.2)"
                strokeWidth="0.8"
                rx="2"
              />
              <text
                x="28"
                y={floor.y + 45}
                fill="#fbbf24"
                fontSize="13"
                fontFamily="'JetBrains Mono', monospace"
                fontWeight="500"
                textAnchor="middle"
              >
                {floor.label}
              </text>
            </g>
            {(
              [
                [120, 80],
                [220, 110],
                [520, 70],
                [600, 90],
                [780, 85],
                [1010, 95],
              ] as [number, number][]
            ).map(([x, w], j) => (
              <rect
                key={j}
                x={x}
                y={floor.y + 40}
                width={w}
                height={30}
                fill="none"
                stroke="rgba(245,245,240,0.07)"
                strokeWidth="0.8"
              />
            ))}
          </g>
        ))}

        {/* Escalator 1: G → L2 */}
        <g>
          <path
            d="M 360 380 L 430 300 L 460 300 L 390 380 Z"
            fill="rgba(34,211,238,0.06)"
            stroke="rgba(34,211,238,0.35)"
            strokeWidth="1"
          />
          {([0.2, 0.4, 0.6, 0.8] as number[]).map((t, i) => (
            <line
              key={i}
              x1={360 + (430 - 360) * t}
              y1={380 + (300 - 380) * t}
              x2={360 + (460 - 360) * t + (t > 0 ? 5 : 0)}
              y2={380 + (300 - 380) * t}
              stroke="rgba(34,211,238,0.25)"
              strokeWidth="0.6"
            />
          ))}
          <g transform="translate(395, 330)">
            <path
              d="M 0 -5 L 4 0 L 2 0 L 2 5 L -2 5 L -2 0 L -4 0 Z"
              fill="rgba(34,211,238,0.7)"
            />
          </g>
          <text
            x="420"
            y="355"
            fill="rgba(34,211,238,0.7)"
            fontSize="8"
            fontFamily="'JetBrains Mono', monospace"
          >
            ESCALATOR
          </text>
        </g>

        {/* Escalator 2: L2 → L3 */}
        <g>
          <path
            d="M 660 300 L 730 220 L 760 220 L 690 300 Z"
            fill="rgba(34,211,238,0.06)"
            stroke="rgba(34,211,238,0.35)"
            strokeWidth="1"
          />
          {([0.2, 0.4, 0.6, 0.8] as number[]).map((t, i) => (
            <line
              key={i}
              x1={660 + (730 - 660) * t}
              y1={300 + (220 - 300) * t}
              x2={660 + (760 - 660) * t + (t > 0 ? 5 : 0)}
              y2={300 + (220 - 300) * t}
              stroke="rgba(34,211,238,0.25)"
              strokeWidth="0.6"
            />
          ))}
          <g transform="translate(695, 250)">
            <path
              d="M 0 -5 L 4 0 L 2 0 L 2 5 L -2 5 L -2 0 L -4 0 Z"
              fill="rgba(34,211,238,0.7)"
            />
          </g>
          <text
            x="720"
            y="275"
            fill="rgba(34,211,238,0.7)"
            fontSize="8"
            fontFamily="'JetBrains Mono', monospace"
          >
            ESCALATOR
          </text>
        </g>

        {/* Elevator shaft */}
        <g>
          <rect
            x="935"
            y="60"
            width="30"
            height="320"
            fill="rgba(74,222,128,0.03)"
            stroke="rgba(74,222,128,0.3)"
            strokeWidth="0.8"
            strokeDasharray="3 3"
          />
          {([140, 220, 300] as number[]).map((y, i) => (
            <line
              key={i}
              x1="935"
              y1={y}
              x2="965"
              y2={y}
              stroke="rgba(74,222,128,0.45)"
              strokeWidth="1"
            />
          ))}
          <g>
            <rect
              x="940"
              y="200"
              width="20"
              height="20"
              fill="rgba(74,222,128,0.15)"
              stroke="rgba(74,222,128,0.6)"
              strokeWidth="1"
              rx="1"
            >
              <animate
                attributeName="y"
                values="200;200;120;120;200"
                keyTimes="0;0.811;0.883;0.94;1"
                dur="18s"
                repeatCount="indefinite"
              />
            </rect>
          </g>
          <text
            x="950"
            y="32"
            fill="rgba(74,222,128,0.7)"
            fontSize="8"
            fontFamily="'JetBrains Mono', monospace"
            textAnchor="middle"
          >
            ELEVATOR
          </text>
        </g>

        {/* BLE beacons */}
        {beacons.map((b, i) => (
          <g key={i} transform={`translate(${b.x}, ${b.y})`}>
            <circle
              r="18"
              fill="none"
              stroke="#4ade80"
              strokeOpacity="0.25"
              strokeWidth="1"
              style={{
                transformOrigin: "center",
                animation: `pulse-ring 3s ease-out infinite ${i * 0.45}s`,
              }}
            />
            <circle
              r="10"
              fill="none"
              stroke="#4ade80"
              strokeOpacity="0.35"
              strokeWidth="1"
              style={{
                transformOrigin: "center",
                animation: `pulse-ring-slow 3s ease-out infinite ${i * 0.45}s`,
              }}
            />
            <circle r="3" fill="#4ade80" />
          </g>
        ))}

        {/* Route path */}
        <use
          href="#multiPath"
          stroke="#f59e0b"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 5"
          strokeOpacity="0.5"
          style={{ animation: "dash-flow 1.8s linear infinite" }}
        />

        {/* Entry marker */}
        <g transform="translate(120, 380)">
          <circle
            r="5"
            fill="none"
            stroke="rgba(245,158,11,0.6)"
            strokeWidth="1.5"
          />
          <circle r="2" fill="rgba(245,158,11,0.8)" />
          <text
            x="0"
            y="-14"
            fill="rgba(245,245,240,0.75)"
            fontSize="9"
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="500"
            textAnchor="middle"
          >
            ENTRY · G
          </text>
        </g>

        {/* Destination marker */}
        <g transform="translate(1080, 140)">
          <rect
            x="-7"
            y="-7"
            width="14"
            height="14"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1.5"
          />
          <rect x="-3" y="-3" width="6" height="6" fill="#22d3ee" />
          <text
            x="0"
            y="-16"
            fill="rgba(245,245,240,0.75)"
            fontSize="9"
            fontFamily="'JetBrains Mono', monospace"
            fontWeight="500"
            textAnchor="middle"
          >
            DEST · L5
          </text>
        </g>

        {/* Animated user dot */}
        <g>
          <circle r="24" fill="url(#userGlowMulti)">
            <animateMotion dur="18s" repeatCount="indefinite" rotate="auto">
              <mpath href="#multiPath" />
            </animateMotion>
          </circle>
          <circle
            r="14"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="1"
            strokeOpacity="0.4"
          >
            <animateMotion dur="18s" repeatCount="indefinite">
              <mpath href="#multiPath" />
            </animateMotion>
          </circle>
          <circle r="5" fill="#f59e0b">
            <animateMotion dur="18s" repeatCount="indefinite">
              <mpath href="#multiPath" />
            </animateMotion>
          </circle>
        </g>

        {/* HUD overlay */}
        <g transform="translate(60, 60)">
          <rect
            x="0"
            y="0"
            width="180"
            height="54"
            fill="rgba(10,14,26,0.9)"
            stroke="rgba(245,158,11,0.3)"
            strokeWidth="0.8"
            rx="4"
          />
          <text
            x="12"
            y="18"
            fill="#fbbf24"
            fontSize="9"
            fontFamily="'JetBrains Mono', monospace"
            letterSpacing="1.5"
          >
            ● TRAVERSAL LIVE
          </text>
          <line
            x1="12"
            y1="24"
            x2="168"
            y2="24"
            stroke="rgba(245,245,240,0.1)"
            strokeWidth="0.5"
          />
          <text
            x="12"
            y="38"
            fill="rgba(245,245,240,0.5)"
            fontSize="8"
            fontFamily="'JetBrains Mono', monospace"
          >
            ROUTE G → 2 → 3 → 5
          </text>
          <text
            x="12"
            y="48"
            fill="rgba(245,245,240,0.5)"
            fontSize="8"
            fontFamily="'JetBrains Mono', monospace"
          >
            TRANSITS 2 ESC · 1 ELEV
          </text>
        </g>

        {/* Legend */}
        <g
          transform="translate(260, 485)"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="8"
        >
          <circle cx="0" cy="0" r="3" fill="#f59e0b" />
          <text x="8" y="3" fill="rgba(245,245,240,0.55)">
            User
          </text>
          <circle cx="70" cy="0" r="3" fill="#4ade80" />
          <text x="78" y="3" fill="rgba(245,245,240,0.55)">
            BLE anchor
          </text>
          <path
            d="M 185 -4 L 195 4 L 200 4 L 190 -4 Z"
            fill="rgba(34,211,238,0.4)"
            stroke="rgba(34,211,238,0.7)"
            strokeWidth="0.8"
          />
          <text x="208" y="3" fill="rgba(245,245,240,0.55)">
            Escalator
          </text>
          <rect
            x="302"
            y="-4"
            width="8"
            height="8"
            fill="rgba(74,222,128,0.15)"
            stroke="rgba(74,222,128,0.6)"
            strokeWidth="0.8"
          />
          <text x="315" y="3" fill="rgba(245,245,240,0.55)">
            Elevator
          </text>
          <rect
            x="395"
            y="-4"
            width="8"
            height="8"
            fill="#22d3ee"
            stroke="#22d3ee"
            strokeWidth="0.8"
          />
          <text x="408" y="3" fill="rgba(245,245,240,0.55)">
            Destination
          </text>
        </g>
      </svg>
    </div>
  );
}
