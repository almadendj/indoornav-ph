// ─── Navigation ──────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'The Problem', href: '#problem' },
  { label: 'Technology', href: '#stack' },
  { label: 'Multi-Level', href: '#multilevel' },
  { label: 'Why Sparse', href: '#comparison' },
  { label: "Who It's For", href: '#who' },
];

export const navCtaText = 'Request a pilot';

// ─── Hero ─────────────────────────────────────────────────────────────────────

export interface HeroStat {
  label: string;
  value: string;
  sub: string;
}

export interface HeroContent {
  badge: string;
  headline: string[];
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: HeroStat[];
}

export const heroContent: HeroContent = {
  badge: 'LIVE · PILOT PROGRAM OPEN',
  headline: ['The positioning', 'layer for', 'Philippine malls.'],
  description:
    "Sub-3 metre indoor navigation for the world's largest shopping centres — without the cost of blanket beacon coverage. A hybrid positioning stack built for SM-scale floor plans, rebar-heavy construction, and Filipino foot traffic.",
  ctaPrimary: 'Request a pilot',
  ctaSecondary: 'How it works',
  stats: [
    { label: 'ACCURACY', value: '< 3m', sub: 'sub-1m near anchors' },
    { label: 'FLOORS SUPPORTED', value: '5+', sub: 'ground to rooftop, no taps' },
    { label: 'BEACONS / FLOOR', value: '20–30', sub: 'vs. 300–1,500 full BLE' },
  ],
};

// ─── Problem section ──────────────────────────────────────────────────────────

export interface ProblemStat {
  big: string;
  label: string;
  detail: string;
  accent?: boolean;
}

export interface ProblemContent {
  sectionNum: string;
  heading: string;
  headingEmphasis: string;
  description: string;
  stats: ProblemStat[];
}

export const problemContent: ProblemContent = {
  sectionNum: '01 — THE GAP',
  heading:
    'The largest malls in the world have no reliable way for visitors to find anything inside them.',
  headingEmphasis: 'no reliable way',
  description:
    "GPS dies at the entrance. Concierge desks are hard to find. Kiosks are outdated. Google Maps and Apple's IMDF have almost zero Philippine mall coverage. And no domestic player owns this space.",
  stats: [
    { big: '90+', label: 'SM Prime malls', detail: 'Largest operator in the Philippines' },
    { big: '31+', label: 'Ayala malls', detail: 'Undergoing P13B renovation' },
    { big: '400K', label: 'sqm per mall', detail: 'Many exceed this floor area', accent: true },
    { big: '0', label: 'dominant PH solution', detail: 'The category is wide open' },
  ],
};

// ─── Layers (3-layer stack) ───────────────────────────────────────────────────

export interface Layer {
  name: string;
  num: string;
  role: string;
  accuracy: string;
  hardware: string;
  color: string;
  desc: string;
  highlight: string;
}

export const layers: Layer[] = [
  {
    name: 'Geomagnetic Fingerprinting',
    num: '01',
    role: 'Always-on base layer',
    accuracy: '1–3 m',
    hardware: 'None',
    color: '#f59e0b',
    desc: "Every building creates unique distortions in Earth's magnetic field through its steel structure. Smartphone magnetometers read these invisible signatures to determine position — no beacons, no routers, no power.",
    highlight: "PH malls' rebar-heavy construction strengthens the signal.",
  },
  {
    name: 'Pedestrian Dead Reckoning',
    num: '02',
    role: 'Gap filler between fixes',
    accuracy: 'Continuous',
    hardware: 'None',
    color: '#a78bfa',
    desc: 'Accelerometer, gyroscope, magnetometer, and barometer track steps and direction from the last known fix. Infrastructure-free. Drift is corrected every time the user passes a BLE anchor or gets a fresh geomagnetic fix.',
    highlight: 'The glue that keeps the blue dot moving smoothly.',
  },
  {
    name: 'Sparse BLE Beacons',
    num: '03',
    role: 'Absolute position anchors',
    accuracy: '< 1 m',
    hardware: '20–30 / floor',
    color: '#4ade80',
    desc: 'Not dense coverage — strategic anchors at entrances, escalators, elevators, and high-traffic corridors. Strong absolute resets that kill accumulated drift without the cost of blanket deployment.',
    highlight: '$5–15 per beacon. ~₱15,000 hardware per floor.',
  },
];

// ─── Stack section ────────────────────────────────────────────────────────────

export interface StackContent {
  sectionNum: string;
  heading: string;
  headingEmphasis: string;
  description: string;
}

export const stackContent: StackContent = {
  sectionNum: '02 — THE STACK',
  heading: 'Three layers, fused on-device, into one blue dot.',
  headingEmphasis: 'blue dot.',
  description:
    "Each layer compensates for the others' weaknesses. Magnetic fingerprints handle baseline positioning anywhere in the mall. Sparse BLE beacons provide passive absolute resets at strategic anchor points. Dead reckoning fills every gap between them — all fused on the user's phone, no cloud round-trip.",
};

// ─── Multi-level section ──────────────────────────────────────────────────────

export interface MultiLevelFeature {
  metric: string;
  metricLabel: string;
  title: string;
  desc: string;
}

export interface MultiLevelContent {
  sectionNum: string;
  heading: string;
  headingEmphasis: string;
  description: string;
  features: MultiLevelFeature[];
}

export const multiLevelContent: MultiLevelContent = {
  sectionNum: '03 — ACROSS LEVELS',
  heading: 'Five storeys. One continuous blue dot.',
  headingEmphasis: 'One continuous blue dot.',
  description:
    'Philippine malls go up, not just out. Barometer-assisted altitude sensing, combined with BLE anchors at every escalator landing and elevator lobby, means the blue dot follows users through floor transitions automatically — no manual floor picker, no lost signal, no "which level am I on" moments.',
  features: [
    {
      metric: '± 0.5 m',
      metricLabel: 'VERTICAL ACCURACY',
      title: 'Barometer-assisted altitude',
      desc: 'Smartphone pressure sensors detect floor changes to sub-metre precision, independent of GPS or WiFi.',
    },
    {
      metric: '6 anchors',
      metricLabel: 'PER VERTICAL TRANSITION',
      title: 'Beacons at every landing',
      desc: 'Escalator top and bottom, elevator lobbies on each served floor — the positioning never drifts at transitions.',
    },
    {
      metric: '0 taps',
      metricLabel: 'MANUAL FLOOR CHANGES',
      title: 'Seamless level handoff',
      desc: 'Users never select a floor. The blue dot moves with them as they ride up — across Ground, L2, L3, and L4.',
    },
  ],
};

// ─── Comparison section ───────────────────────────────────────────────────────

export interface CostRow {
  label: string;
  value: string;
  good?: boolean;
}

export interface BleOption {
  label: string;
  tag?: string;
  beaconsPerFloor: string;
  costs: CostRow[];
}

export interface AccuracyZone {
  zone: string;
  accuracy: string;
  layers: string;
  color: string;
}

export interface ComparisonContent {
  sectionNum: string;
  heading: string;
  headingEmphasis: string;
  description: string;
  fullBle: BleOption;
  sparseHybrid: BleOption;
  accuracyZones: AccuracyZone[];
}

export const comparisonContent: ComparisonContent = {
  sectionNum: '04 — ECONOMICS',
  heading: "Why we don't just carpet the ceiling with beacons.",
  headingEmphasis: 'carpet the ceiling',
  description:
    'Full BLE trilateration needs 1–5 beacons per 150 sqm. On a 50,000 sqm mall floor, that\'s hundreds of units — plus installation, batteries, and failures. We get the same functional accuracy with 10× fewer beacons by fusing them with magnetic and inertial layers.',
  fullBle: {
    label: 'FULL BLE COVERAGE',
    beaconsPerFloor: '1,500',
    costs: [
      { label: 'Hardware cost', value: '$5,000–$30,000' },
      { label: 'Install labour', value: '~120 hours' },
      { label: 'Battery swaps', value: 'Every 6–24 months' },
    ],
  },
  sparseHybrid: {
    label: 'SPARSE HYBRID',
    tag: 'OUR APPROACH',
    beaconsPerFloor: '30',
    costs: [
      { label: 'Hardware cost', value: '₱8,500–₱25,000', good: true },
      { label: 'Install labour', value: '~6 hours', good: true },
      { label: 'Battery swaps', value: 'Every 2–3 years', good: true },
    ],
  },
  accuracyZones: [
    { zone: 'Anywhere in mall', accuracy: '< 3 m', layers: 'Geomagnetic + PDR', color: '#f59e0b' },
    { zone: 'Near BLE anchors', accuracy: '< 1 m', layers: 'RSSI + filter', color: '#4ade80' },
    { zone: 'Floor transitions', accuracy: '± 0.5 m', layers: 'Barometer + anchors', color: '#22d3ee' },
  ],
};

// ─── Who section ──────────────────────────────────────────────────────────────

export interface WhoContent {
  sectionNum: string;
  heading: string;
  headingEmphasis: string;
}

export const whoContent: WhoContent = {
  sectionNum: "05 — WHO IT'S FOR",
  heading: 'A platform, not an app. We sell to operators.',
  headingEmphasis: 'We sell to operators.',
};

// ─── Personas ─────────────────────────────────────────────────────────────────

export interface Persona {
  iconName: string;
  role: string;
  tag: string;
  title: string;
  bullets: string[];
  price: string;
}

export const personas: Persona[] = [
  {
    iconName: 'Building2',
    role: 'Mall Operators',
    tag: 'PRIMARY CUSTOMER',
    title: 'Turn floor plans into a revenue surface.',
    bullets: [
      'Deploy branded navigation in your existing app',
      'Measure foot traffic per corridor, per tenant',
      'Price retail leases by real behavioural data',
      'Differentiate from competing malls',
    ],
    price: '₱50K–500K / month',
  },
  {
    iconName: 'Zap',
    role: 'Tenants & Brands',
    tag: 'ADVERTISING LAYER',
    title: 'Reach shoppers within 50 metres of your door.',
    bullets: [
      'Promoted search results ("find a shoe store")',
      'Proximity push notifications with offers',
      'Navigation-screen banner placements',
      'Campaign attribution by physical visit',
    ],
    price: '₱5K–50K / month / tenant',
  },
  {
    iconName: 'BarChart3',
    role: 'Analytics Subscribers',
    tag: 'DATA LAYER',
    title: 'Understand indoor consumer flow at scale.',
    bullets: [
      'Anonymised foot-traffic heatmaps',
      'Dwell-time by store and category',
      'Site selection intelligence for brands',
      'Leasing team pricing signals',
    ],
    price: '₱10K–100K / month',
  },
];

// ─── Roadmap section ──────────────────────────────────────────────────────────

export interface RoadmapContent {
  sectionNum: string;
  heading: string;
  headingEmphasis: string;
}

export const roadmapContent: RoadmapContent = {
  sectionNum: '06 — WHERE WE ARE',
  heading: 'A phased path to SM and Ayala.',
  headingEmphasis: 'SM and Ayala.',
};

// ─── Phases ───────────────────────────────────────────────────────────────────

export type PhaseStatus = 'active' | 'next' | 'future';

export interface Phase {
  num: string;
  status: PhaseStatus;
  title: string;
  months: string;
  detail: string;
}

export const phases: Phase[] = [
  {
    num: '01',
    status: 'active',
    title: 'Build & Validate',
    months: 'Months 1–3',
    detail:
      'MVP in a non-mall venue — university, hospital, or convention centre. UP, Ateneo, MCIA T2 as candidates.',
  },
  {
    num: '02',
    status: 'next',
    title: 'First Mall Pilot',
    months: 'Months 4–6',
    detail:
      'Independent or smaller operator. Free or discounted pilot in exchange for case study and fingerprint data.',
  },
  {
    num: '03',
    status: 'future',
    title: 'Revenue & Scale',
    months: 'Months 7–12',
    detail:
      'Paid SaaS. Activate tenant ads. Approach Robinsons, Vista. Begin white-label SDK product.',
  },
  {
    num: '04',
    status: 'future',
    title: 'Major Operators',
    months: 'Year 2+',
    detail:
      'SM Prime and Ayala with proven references. Expand to hospitals, airports, transport hubs.',
  },
];

// ─── CTA section ──────────────────────────────────────────────────────────────

export interface CtaContent {
  sectionNum: string;
  heading: string;
  headingEmphasis: string;
  description: string;
  ctaPrimary: string;
  ctaSecondary: string;
  criteria: string[];
}

export const ctaContent: CtaContent = {
  sectionNum: 'PILOT PROGRAM',
  heading: "We're taking on two pilot venues in 2026.",
  headingEmphasis: 'two',
  description:
    "If you operate a mall, hospital, university, or transport hub in the Philippines — and you've felt the pain of visitors who can't find what they're looking for — we should talk.",
  ctaPrimary: 'Apply for pilot partnership',
  ctaSecondary: 'Download technical brief',
  criteria: [
    'Floor plans in any format',
    'Mobile app or kiosk integration',
    'No upfront hardware cost',
  ],
};

// ─── Footer ───────────────────────────────────────────────────────────────────

export interface FooterContent {
  brand: string;
  copyright: string;
}

export const footerContent: FooterContent = {
  brand: 'IndoorNav PH · Manila',
  copyright: '© 2026 · Indoor positioning for the Philippines',
};
