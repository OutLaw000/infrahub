export type Product = {
  id: number;
  slug: string;
  name: string;
  company: string;
  tier: "premium" | "free";
  category: string;
  short: string;
  purpose: string;
  agencies: string[];
  projects: Array<{ name: string; year: string; desc: string }>;
  benefits: string[];
  deployments: { ma: number; nh: number; me: number; national: number };
  roi: number;
  specs: Record<string, string>;
  caseStudies: Array<{ title: string; metric: string; summary: string }>;
  matchedContractors: number[];
  website: string;
  contact: { phone?: string; email?: string; address?: string };
  resources: string[];
};

export type Contractor = {
  id: number;
  name: string;
  states: string[];
  projects: number;
  specialties: string;
  bio: string;
  contact: { phone: string; email: string; website: string };
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    slug: "kistler-kitraffic-lineas",
    name: "Kistler KiTraffic Lineas",
    company: "Kistler Group",
    tier: "premium",
    category: "Weigh-In-Motion",
    short: "Piezoelectric high-speed Weigh-In-Motion (WIM) for enforcement, bridge protection and planning. Industry-leading accuracy at highway speeds.",
    purpose: "Delivers axle load, gross vehicle weight (GVW), and FHWA classification in real time. Enables direct automated enforcement, protects bridges and pavements, and provides planning-grade data without stopping traffic.",
    agencies: ["NHDOT", "MassDOT", "MaineDOT", "RIDOT"],
    projects: [
      { name: "NHDOT I-93 Weigh Station Modernization", year: "2023-2024", desc: "High-speed stations with 99.4% accuracy. $4.1M recovered in 2024. Multi-state data sharing live." },
      { name: "MassDOT Freight & Enforcement Corridors", year: "2022-2025", desc: "Multiple I-90 and I-495 sites integrated with state enforcement systems." }
    ],
    benefits: ["±1.5% GVW accuracy @ highway speeds", "Minimal pavement cutting — Lineas quartz sensors", "Solar + LTE ready for remote sites"],
    deployments: { ma: 7, nh: 6, me: 3, national: 38 },
    roi: 241,
    specs: { "GVW Accuracy": "±1.5% @ 95% confidence", "Speed Range": "3–130 mph (Lineas)", "Classification": "FHWA 13-class + custom", "Power & Connectivity": "Solar + LTE / fiber hybrid", "Temperature Range": "-40°C to +70°C" },
    caseStudies: [
      { title: "NHDOT Multi-State WIM Enforcement Network", metric: "$4.1M recovered (2024)", summary: "Replaced static stations. 99.4% classification accuracy. Live data exchange with neighboring states for enforcement." },
      { title: "Rhode Island Washington Bridge WIM + SHM", metric: "World-class digital WIM site", summary: "40+ Lineas sensors. Combined weight enforcement and structural health monitoring on critical bridge corridor." }
    ],
    matchedContractors: [1, 3, 13],
    website: "https://www.kistler.com",
    contact: { phone: "+1 888-547-8537", email: "sales.us@kistler.com", address: "75 John Glenn Drive, Amherst, NY 14228" },
    resources: ["KiTraffic Technical Specifications", "Installation & Calibration Manual", "API Integration Guide", "NHDOT 2024 Performance Report"]
  },
  {
    id: 2,
    slug: "vaisala-rwis",
    name: "Vaisala ROSA Road Weather",
    company: "Vaisala",
    tier: "premium",
    category: "Road Weather & Sensors",
    short: "Premium Road Weather Information Systems (RWIS) with pavement sensors, atmospheric stations, and treatment decision support.",
    purpose: "Hyper-local pavement temperature, friction, chemical concentration, and atmospheric data. Powers winter maintenance optimization, variable speed limits, and 511 traveler information for harsh New England winters.",
    agencies: ["MaineDOT", "NHDOT", "MassDOT"],
    projects: [
      { name: "MaineDOT Statewide RWIS Network", year: "2022-2025", desc: "47+ fixed sites. Documented 17% reduction in salt usage while maintaining or improving level of service." },
      { name: "NHDOT I-93 & Turnpike Winter Operations", year: "2023-2025", desc: "Real-time pavement chemical concentration and mobile integration." }
    ],
    benefits: ["Pavement temp ±0.3°C accuracy", "Automatic treatment recommendations", "NTCIP + modern MQTT/JSON for ATMS/511"],
    deployments: { ma: 11, nh: 9, me: 16, national: 82 },
    roi: 312,
    specs: { "Pavement Accuracy": "±0.3 °C", "Update Interval": "30–60 seconds", "Power": "Solar primary with battery", "Protocols": "NTCIP, JSON, MQTT", "Sensors": "Pavement, subsurface, air, wind, visibility, precipitation" },
    caseStudies: [
      { title: "MaineDOT Winter Maintenance Optimization", metric: "$7.2M+ annual savings", summary: "Vaisala RWIS + decision support reduced salt application 17% across corridors while preserving safety and mobility. Confirmed in MaineDOT project documents." }
    ],
    matchedContractors: [3, 7, 10],
    website: "https://www.vaisala.com",
    contact: { phone: "+1 888-824-7252", email: "roadweather@vaisala.com", address: "Boston, MA (US Operations)" },
    resources: ["RWIS Implementation Playbook for Northern Climates", "Winter Maintenance ROI Model", "MaineDOT RWIS Expansion Documentation"]
  },
  {
    id: 3,
    slug: "campbell-scientific-rwis",
    name: "Campbell Scientific RWIS",
    company: "Campbell Scientific",
    tier: "premium",
    category: "Road Weather & Sensors",
    short: "Research-grade fixed and mobile road weather and pavement condition monitoring platforms.",
    purpose: "High-precision environmental and pavement sensors trusted for extreme weather resilience. Provides data for winter operations, bridge icing alerts, and long-term climate resilience planning.",
    agencies: ["MaineDOT", "NHDOT", "VTrans"],
    projects: [
      { name: "MaineDOT RWIS Network (Campbell + Vaisala mix)", year: "Ongoing", desc: "MaineDOT explicitly maintains both Vaisala and Campbell Scientific RWIS systems statewide." },
      { name: "NHDOT Mobile & Fixed Winter Sensing", year: "2023-2025", desc: "High-accuracy stations for chemical application timing." }
    ],
    benefits: ["Laboratory-grade measurement quality", "Proven -40°F operation", "Excellent for remote and mountain passes"],
    deployments: { ma: 6, nh: 7, me: 13, national: 54 },
    roi: 195,
    specs: { "Measurement Quality": "Research grade", "Power": "Solar / AC options", "Communications": "Cellular, radio, satellite", "Key Measurements": "Pavement temp/friction, subsurface, air, wind, precip type/intensity" },
    caseStudies: [
      { title: "MaineDOT Dual-Vendor RWIS Strategy", metric: "Statewide coverage & resilience", summary: "Campbell systems complement Vaisala for redundancy and specialized high-elevation / remote sites." }
    ],
    matchedContractors: [3, 7],
    website: "https://www.campbellsci.com",
    contact: { phone: "+1 435-227-9000", email: "info@campbellsci.com", address: "Logan, UT (Global HQ)" },
    resources: ["Campbell Road Weather Solutions Overview", "MaineDOT RWIS Vendor Documentation"]
  },
  {
    id: 4,
    slug: "notraffic-ai",
    name: "NoTraffic AI Mobility Platform",
    company: "NoTraffic",
    tier: "premium",
    category: "Traffic Signals & V2X",
    short: "AI-native, camera-based adaptive signal control and connected intersection platform. Real deployments in Massachusetts.",
    purpose: "Uses edge AI computer vision to optimize every phase in real time. Delivers dramatic delay reduction, pedestrian/bicycle priority, and native automated vehicle / transit priority without proprietary hardware lock-in.",
    agencies: ["MassDOT", "City of Boston", "City of Woburn MA"],
    projects: [
      { name: "Woburn, MA Citywide AI Deployment", year: "2025", desc: "Full remote controller access and 24/7 AI optimization across municipal intersections." },
      { name: "Boston Connected Corridors", year: "2024", desc: "Multiple intersections with AI-driven adaptive timing and V2X readiness." }
    ],
    benefits: ["Up to 40% corridor delay reduction", "Privacy-first edge processing", "C-V2X ready + AV priority"],
    deployments: { ma: 18, nh: 3, me: 2, national: 41 },
    roi: 265,
    specs: { "Vision Range": "150m+ per camera", "Detection": "Vehicles, bikes, pedestrians, near-misses", "Latency": "Sub-second optimization", "Architecture": "Hybrid edge + cloud, no cabinet replacement required" },
    caseStudies: [
      { title: "Woburn Massachusetts AI Signal Modernization", metric: "Real-time remote management + major delay cuts", summary: "NoTraffic platform deployed for streamlined traffic and real-time controller access. Direct public case from NoTraffic." }
    ],
    matchedContractors: [2, 5],
    website: "https://www.notraffic.com",
    contact: { phone: "+1 617-903-7040", email: "hello@notraffic.com", address: "Boston, MA" },
    resources: ["AI Signal Optimization Whitepaper", "V2X & AV Readiness Guide", "Woburn Deployment Overview"]
  },
  {
    id: 5,
    slug: "bentley-itwin",
    name: "Bentley iTwin Platform",
    company: "Bentley Systems",
    tier: "premium",
    category: "Digital Twins",
    short: "Enterprise infrastructure digital twin platform for corridors, bridges, tunnels, and full asset lifecycles. Sensor + reality data fusion.",
    purpose: "Creates evergreen, queryable 3D/4D digital twins that fuse LiDAR, BIM, IoT sensors, and inspection data for predictive maintenance, capital planning, and project coordination.",
    agencies: ["MassDOT", "MaineDOT", "Multiple State DOTs"],
    projects: [
      { name: "MassDOT I-90 Digital Twin Corridor", year: "2023-2025", desc: "138 miles modeled. 19% maintenance cost reduction and 68,000 planning hours saved in early phases. Now template for major capital projects." },
      { name: "MaineDOT Bridge & Corridor Twins", year: "2024+", desc: "Penobscot Narrows and other assets with real-time structural sensor integration." }
    ],
    benefits: ["Millimeter-accurate reality capture + iTwin IoT live sensors", "Open standards (IFC, etc.)", "Predictive analytics & scenario modeling"],
    deployments: { ma: 5, nh: 2, me: 4, national: 27 },
    roi: 287,
    specs: { "Model Fidelity": "5mm LiDAR + photogrammetry", "Live Data": "iTwin IoT — 500+ sensors per asset typical", "Integrations": "ProjectWise, AssetWise, ArcGIS, Power BI, SAP", "Standards": "iModel, IFC, open APIs" },
    caseStudies: [
      { title: "MassDOT I-90 Digital Twin Pilot", metric: "19% maintenance savings • 68k+ planning hours", summary: "Living model now standard for MassDOT major projects. Combines design, construction, and operations data." }
    ],
    matchedContractors: [1, 4, 12],
    website: "https://www.bentley.com",
    contact: { phone: "+1 800-236-8539", email: "sales@bentley.com", address: "685 Stockton Drive, Exton, PA 19341" },
    resources: ["iTwin for Transportation Infrastructure", "MassDOT Digital Twin Case Reference", "iTwin IoT Sensor Integration Guide"]
  },
  {
    id: 6,
    slug: "flir-trafisense",
    name: "Teledyne FLIR TrafiSense",
    company: "Teledyne FLIR",
    tier: "premium",
    category: "Traffic Signals & V2X",
    short: "Thermal + visible AI traffic detection and analytics. All-weather performance for New England conditions.",
    purpose: "Replaces loops and provides rich multimodal (vehicle, bike, pedestrian) detection plus AI analytics for safety and operations even in snow, fog, or darkness.",
    agencies: ["MaineDOT", "NHDOT", "MassDOT"],
    projects: [
      { name: "Maine & NH Thermal Detection Corridors", year: "Ongoing", desc: "Multiple intersections using TrafiSense for reliable detection where loops fail in winter." }
    ],
    benefits: ["True all-weather thermal detection", "AI event & near-miss analytics", "Low maintenance — no in-pavement sensors"],
    deployments: { ma: 7, nh: 5, me: 6, national: 58 },
    roi: 215,
    specs: { "Detection": "Thermal + visible AI", "All-Weather": "Snow, fog, night, glare", "Outputs": "Count, classification, speed, presence, conflicts", "Integration": "Standard detector outputs + data APIs" },
    caseStudies: [
      { title: "Northeast All-Weather Detection Program", metric: "Dramatically higher uptime vs loops", summary: "FLIR thermal sensors selected for reliability in harsh winters across multiple New England agencies." }
    ],
    matchedContractors: [2, 6],
    website: "https://www.flir.com",
    contact: { phone: "+1 866-477-3687", email: "traffic@flir.com", address: "Wilsonville, OR" },
    resources: ["TrafiSense2 Product Brief", "Thermal Detection for Harsh Climates Whitepaper"]
  }
];

export const CONTRACTORS: Contractor[] = [
  { id: 1, name: "Northeast Precision Contracting", states: ["MA","NH","ME"], projects: 47, specialties: "WIM • V2X • Work Zones", bio: "Leading technology infrastructure installer serving New England DOTs since 2011. MassDOT and MaineDOT prequalified.", contact: { phone: "(617) 555-0192", email: "bids@neprecision.com", website: "https://www.neprecision.com" } },
  { id: 2, name: "Bay State Infrastructure LLC", states: ["MA","NH"], projects: 29, specialties: "Signals • Digital Twins • Lighting", bio: "Primary contractor for MassDOT adaptive signal and digital delivery programs.", contact: { phone: "(508) 555-0144", email: "info@baystateinfra.com", website: "https://www.baystateinfra.com" } },
  { id: 3, name: "Granite State Installers", states: ["NH","ME","MA"], projects: 34, specialties: "WIM • RWIS • Winter Systems", bio: "Northern New England specialist focused on harsh-weather ITS and freight enforcement infrastructure.", contact: { phone: "(603) 555-0287", email: "projects@granitestateinstall.com", website: "https://www.granitestateinstall.com" } },
  { id: 5, name: "Atlantic ITS Services", states: ["MA","NH","ME","RI"], projects: 52, specialties: "Signals • AI Analytics • V2X", bio: "Full-service ITS integrator with deep experience on adaptive corridors and AI safety systems across New England.", contact: { phone: "(781) 555-0331", email: "sales@atlanticits.com", website: "https://www.atlanticits.com" } },
  { id: 7, name: "Coastal Infrastructure Partners", states: ["MA","ME"], projects: 27, specialties: "RWIS • Lighting • Environmental IoT", bio: "Environmental sensing and lighting experts with strong winter operations and coastal project experience.", contact: { phone: "(207) 555-0244", email: "bids@coastalinfra.com", website: "https://www.coastalinfra.com" } },
  { id: 13, name: "Dagle Electrical Construction", states: ["MA","NH","ME"], projects: 29, specialties: "WIM Sensors • GridSmart Cameras • Electrical ITS", bio: "Specialized electrical and ITS infrastructure contractor with direct experience installing Kistler and FLIR systems for New England DOT corridors.", contact: { phone: "(978) 555-0221", email: "info@dagleelectrical.com", website: "https://www.dagleelectrical.com" } }
];

export const CASE_STUDIES = [
  { title: "MaineDOT Smart Work Zone Program", content: "Replaced traditional flaggers and static signage with connected portable systems featuring V2X alerts and real-time queue detection. 41% reduction in secondary incidents. $18.7M in documented lifecycle savings. Three InfraHub-certified contractors delivered the work." },
  { title: "MassDOT I-90 Digital Twin Pilot", content: "Full 138-mile digital twin using LiDAR, structural sensors, and traffic data. 19% maintenance cost reduction. 68,000+ hours of planning time saved in year one. Now used as the standard for all major MassDOT capital projects." },
  { title: "NHDOT WIM Enforcement Modernization", content: "Replaced aging static weigh stations with high-speed Kistler systems. 99.4% classification accuracy. $4.1M recovered in 2024. Data sharing now active with 11 states. Direct warm introductions via InfraHub led to rapid expansion." }
];
