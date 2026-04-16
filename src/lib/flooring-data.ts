export type FlooringProject = {
  id: string;
  code: string;
  name: string;
  builder: string;
  site: string;
  city: string;
  status: "estimating" | "material-ready" | "installing" | "billing" | "closed";
  stage: string;
  squareFeet: number;
  marginPercent: number;
  installWindow: string;
  crew: string;
  nextAction: string;
  startDate: string;
  estimatedCompletionDate: string;
  province: string;
  outOfProvince: boolean;
  financeExposure: string;
  installReadiness: "blocked" | "watch" | "ready";
};

export type FlooringPartner = {
  id: string;
  name: string;
  type: "vendor" | "client" | "carrier" | "installer";
  specialty: string;
  serviceArea: string;
  creditTerms: string;
  status: "active" | "watch" | "preferred";
};

export type FlooringPurchaseOrder = {
  id: string;
  poNumber: string;
  projectId: string;
  partnerId: string;
  material: string;
  category: string;
  quantity: string;
  amount: number;
  orderDate: string;
  expectedDate: string;
  status: "draft" | "ordered" | "partial" | "received";
  destination: string;
};

export type FlooringShipment = {
  id: string;
  loadNumber: string;
  poId: string;
  carrierId: string;
  status: "booked" | "in-transit" | "at-yard" | "delayed";
  eta: string;
  pallets: number;
  destination: string;
  risk: string;
};

export type FlooringReceiving = {
  id: string;
  shipmentId: string;
  warehouse: string;
  receivedDate: string;
  condition: "clear" | "damage-check" | "hold";
  variance: string;
  putAwayZone: string;
};

export type FlooringDelivery = {
  id: string;
  projectId: string;
  dropDate: string;
  dropWindow: string;
  area: string;
  installer: string;
  status: "scheduled" | "confirmed" | "delivered";
  notes: string;
};

export type FlooringStakeholder = {
  id: string;
  name: string;
  role: string;
  organization: string;
  projectId: string;
  status: "active" | "waiting" | "needs-followup";
  nextTouch: string;
};

export type FlooringRoomArea = {
  id: string;
  projectId: string;
  name: string;
  level: string;
  squareFeet: number;
  material: string;
  prepStatus: "not-started" | "in-progress" | "ready";
  installPhase: "site-review" | "prep" | "material-staged" | "installation" | "punch";
  nextAction: string;
};

export type FlooringInstallPhase = {
  id: string;
  projectId: string;
  label: string;
  owner: string;
  start: string;
  end: string;
  status: "scheduled" | "in-progress" | "blocked" | "complete";
  dependency?: string;
};

export type FlooringProjectDocument = {
  id: string;
  projectId: string;
  title: string;
  category: "submittal" | "site-readiness" | "change-order" | "billing" | "quality-control";
  status: "missing" | "draft" | "ready" | "sent";
  action: string;
};

export type ProjectTimelineEvent = {
  id: string;
  projectId: string;
  date: string;
  stage: "procurement" | "shipment" | "receiving" | "delivery" | "install" | "finance" | "stakeholder";
  title: string;
  owner: string;
  status: "done" | "active" | "watch" | "blocked";
  detail: string;
};

export const flooringProjects: FlooringProject[] = [
  {
    id: "proj-101",
    code: "FLR-101",
    name: "Riverfront Tower Lobby",
    builder: "Northbank Construction",
    site: "10415 Jasper Ave",
    city: "Edmonton",
    status: "installing",
    stage: "Glue-down prep and tile staging",
    squareFeet: 4820,
    marginPercent: 27,
    installWindow: "Apr 18 - Apr 24",
    crew: "Crew Atlas",
    nextAction: "Confirm elevator access and overnight staging",
    startDate: "2026-04-08",
    estimatedCompletionDate: "2026-04-24",
    province: "AB",
    outOfProvince: false,
    financeExposure: "$28.6K supplier commitment with billing package due after punch",
    installReadiness: "watch"
  },
  {
    id: "proj-102",
    code: "FLR-102",
    name: "Aspen Estates Showhome",
    builder: "Aspen Ridge Homes",
    site: "Lot 14, Aspen Estates",
    city: "St. Albert",
    status: "material-ready",
    stage: "LVP and stair nosings at warehouse",
    squareFeet: 2860,
    marginPercent: 31,
    installWindow: "Apr 22 - Apr 25",
    crew: "Crew Summit",
    nextAction: "Release delivery once paint deficiency closes",
    startDate: "2026-04-10",
    estimatedCompletionDate: "2026-04-25",
    province: "AB",
    outOfProvince: false,
    financeExposure: "$17.4K inventory waiting on site release and final install billing",
    installReadiness: "blocked"
  },
  {
    id: "proj-103",
    code: "FLR-103",
    name: "Southgate Dental Fit-Out",
    builder: "Meridian Commercial",
    site: "Southgate Professional Centre",
    city: "Edmonton",
    status: "estimating",
    stage: "Finalize moisture mitigation allowance",
    squareFeet: 3410,
    marginPercent: 24,
    installWindow: "TBD",
    crew: "Pending",
    nextAction: "Submit revised quote with abatement option",
    startDate: "2026-04-12",
    estimatedCompletionDate: "2026-05-20",
    province: "AB",
    outOfProvince: false,
    financeExposure: "$0 committed until quote approval; margin depends on moisture scope allowance",
    installReadiness: "watch"
  },
  {
    id: "proj-104",
    code: "FLR-104",
    name: "Parkland Multi-Family Phase 2",
    builder: "Parkland Living",
    site: "Building B, Parkland Residences",
    city: "Spruce Grove",
    status: "billing",
    stage: "Final deficiency touchups complete",
    squareFeet: 9675,
    marginPercent: 22,
    installWindow: "Complete",
    crew: "Crew North",
    nextAction: "Issue final progress bill and close holdback tracker",
    startDate: "2026-03-05",
    estimatedCompletionDate: "2026-04-14",
    province: "AB",
    outOfProvince: false,
    financeExposure: "$42K final billing and holdback release still open",
    installReadiness: "ready"
  }
];

export const flooringPartners: FlooringPartner[] = [
  {
    id: "partner-201",
    name: "Stone & Grain Surfaces",
    type: "vendor",
    specialty: "Porcelain tile and setting materials",
    serviceArea: "Alberta",
    creditTerms: "Net 30",
    status: "preferred"
  },
  {
    id: "partner-202",
    name: "Summit Floors Distribution",
    type: "vendor",
    specialty: "LVP, stair nosings, underlay",
    serviceArea: "Western Canada",
    creditTerms: "Net 45",
    status: "preferred"
  },
  {
    id: "partner-203",
    name: "Atlas Freight",
    type: "carrier",
    specialty: "Final-mile pallet drops",
    serviceArea: "Edmonton region",
    creditTerms: "COD",
    status: "active"
  },
  {
    id: "partner-204",
    name: "Crew Atlas",
    type: "installer",
    specialty: "Commercial resilient and tile",
    serviceArea: "Edmonton core",
    creditTerms: "Weekly draw",
    status: "preferred"
  },
  {
    id: "partner-205",
    name: "Aspen Ridge Homes",
    type: "client",
    specialty: "Single-family builder",
    serviceArea: "St. Albert",
    creditTerms: "Progress billing",
    status: "preferred"
  }
];

export const flooringPurchaseOrders: FlooringPurchaseOrder[] = [
  {
    id: "po-301",
    poNumber: "PO-24018",
    projectId: "proj-101",
    partnerId: "partner-201",
    material: "12x24 porcelain tile + Schluter trims",
    category: "Tile package",
    quantity: "4,820 sf",
    amount: 28640,
    orderDate: "2026-04-08",
    expectedDate: "2026-04-17",
    status: "ordered",
    destination: "Downtown yard"
  },
  {
    id: "po-302",
    poNumber: "PO-24019",
    projectId: "proj-102",
    partnerId: "partner-202",
    material: "6.5mm LVP + stair nosings",
    category: "Resilient package",
    quantity: "2,860 sf",
    amount: 17420,
    orderDate: "2026-04-10",
    expectedDate: "2026-04-19",
    status: "partial",
    destination: "North warehouse"
  },
  {
    id: "po-303",
    poNumber: "PO-24021",
    projectId: "proj-104",
    partnerId: "partner-201",
    material: "Lobby carpet tile replacement stock",
    category: "Service stock",
    quantity: "48 boxes",
    amount: 6320,
    orderDate: "2026-04-05",
    expectedDate: "2026-04-12",
    status: "received",
    destination: "Parkland site"
  }
];

export const flooringShipments: FlooringShipment[] = [
  {
    id: "ship-401",
    loadNumber: "LD-88014",
    poId: "po-301",
    carrierId: "partner-203",
    status: "in-transit",
    eta: "2026-04-17 10:30",
    pallets: 18,
    destination: "Downtown yard",
    risk: "Elevator booking still pending"
  },
  {
    id: "ship-402",
    loadNumber: "LD-88027",
    poId: "po-302",
    carrierId: "partner-203",
    status: "at-yard",
    eta: "2026-04-15 08:00",
    pallets: 11,
    destination: "North warehouse",
    risk: "Awaiting final release to site"
  }
];

export const flooringReceiving: FlooringReceiving[] = [
  {
    id: "recv-501",
    shipmentId: "ship-402",
    warehouse: "North warehouse",
    receivedDate: "2026-04-15",
    condition: "damage-check",
    variance: "2 cartons short on stair nosings",
    putAwayZone: "Aisle C - staging lane 2"
  },
  {
    id: "recv-502",
    shipmentId: "ship-401",
    warehouse: "Downtown yard",
    receivedDate: "Pending",
    condition: "hold",
    variance: "Delivery pending",
    putAwayZone: "Reserved"
  }
];

export const flooringDeliveries: FlooringDelivery[] = [
  {
    id: "drop-601",
    projectId: "proj-101",
    dropDate: "2026-04-18",
    dropWindow: "07:00 - 09:00",
    area: "Main lobby and elevator vestibule",
    installer: "Crew Atlas",
    status: "confirmed",
    notes: "Use loading bay 2, protection already down"
  },
  {
    id: "drop-602",
    projectId: "proj-102",
    dropDate: "2026-04-22",
    dropWindow: "12:00 - 14:00",
    area: "Main floor and stair package",
    installer: "Crew Summit",
    status: "scheduled",
    notes: "Hold until painter release"
  }
];

export const flooringStakeholders: FlooringStakeholder[] = [
  {
    id: "stake-701",
    name: "Mila Chen",
    role: "Site superintendent",
    organization: "Northbank Construction",
    projectId: "proj-101",
    status: "active",
    nextTouch: "Confirm elevator key Friday 4 PM"
  },
  {
    id: "stake-702",
    name: "Darren Lowe",
    role: "Purchasing manager",
    organization: "Aspen Ridge Homes",
    projectId: "proj-102",
    status: "needs-followup",
    nextTouch: "Approve release after painter deficiency clears"
  },
  {
    id: "stake-703",
    name: "Priya Singh",
    role: "Project architect",
    organization: "Meridian Commercial",
    projectId: "proj-103",
    status: "waiting",
    nextTouch: "Review alternate cove base spec"
  }
];

export const flooringRoomAreas: FlooringRoomArea[] = [
  {
    id: "area-801",
    projectId: "proj-101",
    name: "Main lobby",
    level: "Ground",
    squareFeet: 2860,
    material: "12x24 porcelain tile",
    prepStatus: "in-progress",
    installPhase: "prep",
    nextAction: "Finish substrate grind and moisture check before overnight stage"
  },
  {
    id: "area-802",
    projectId: "proj-101",
    name: "Elevator vestibule",
    level: "Ground",
    squareFeet: 760,
    material: "Tile + schluter transitions",
    prepStatus: "ready",
    installPhase: "material-staged",
    nextAction: "Lock elevator key handoff with site superintendent"
  },
  {
    id: "area-803",
    projectId: "proj-102",
    name: "Main floor",
    level: "Showhome",
    squareFeet: 1920,
    material: "6.5mm LVP",
    prepStatus: "ready",
    installPhase: "material-staged",
    nextAction: "Release staged pallets once painter deficiency closes"
  },
  {
    id: "area-804",
    projectId: "proj-102",
    name: "Stair package",
    level: "Main to upper",
    squareFeet: 340,
    material: "LVP stair nosings",
    prepStatus: "in-progress",
    installPhase: "prep",
    nextAction: "Resolve 2-carton shortage before install truck is dispatched"
  },
  {
    id: "area-805",
    projectId: "proj-104",
    name: "Suite punch list",
    level: "Phase 2",
    squareFeet: 1100,
    material: "Carpet tile and transitions",
    prepStatus: "ready",
    installPhase: "punch",
    nextAction: "Bundle touchup sign-off photos into final bill package"
  }
];

export const flooringInstallPhases: FlooringInstallPhase[] = [
  {
    id: "phase-901",
    projectId: "proj-101",
    label: "Site readiness + access",
    owner: "Project coordination",
    start: "2026-04-15",
    end: "2026-04-17",
    status: "blocked"
  },
  {
    id: "phase-902",
    projectId: "proj-101",
    label: "Material staging",
    owner: "Warehouse + logistics",
    start: "2026-04-17",
    end: "2026-04-18",
    status: "scheduled",
    dependency: "Site readiness + access"
  },
  {
    id: "phase-903",
    projectId: "proj-101",
    label: "Install execution",
    owner: "Crew Atlas",
    start: "2026-04-18",
    end: "2026-04-24",
    status: "scheduled",
    dependency: "Material staging"
  },
  {
    id: "phase-904",
    projectId: "proj-102",
    label: "Builder release gate",
    owner: "Builder contact",
    start: "2026-04-15",
    end: "2026-04-21",
    status: "blocked"
  },
  {
    id: "phase-905",
    projectId: "proj-102",
    label: "Delivery + install",
    owner: "Crew Summit",
    start: "2026-04-22",
    end: "2026-04-25",
    status: "scheduled",
    dependency: "Builder release gate"
  },
  {
    id: "phase-906",
    projectId: "proj-104",
    label: "Final billing package",
    owner: "Finance",
    start: "2026-04-14",
    end: "2026-04-18",
    status: "in-progress"
  }
];

export const flooringProjectDocuments: FlooringProjectDocument[] = [
  {
    id: "doc-1001",
    projectId: "proj-101",
    title: "Elevator access confirmation",
    category: "site-readiness",
    status: "missing",
    action: "Request written site access approval before the Apr 18 drop"
  },
  {
    id: "doc-1002",
    projectId: "proj-101",
    title: "Tile staging release sheet",
    category: "submittal",
    status: "draft",
    action: "Attach load sheet, access notes, and overnight protection plan"
  },
  {
    id: "doc-1003",
    projectId: "proj-102",
    title: "Painter deficiency closeout photos",
    category: "site-readiness",
    status: "missing",
    action: "Auto-follow up with builder until photo proof is received"
  },
  {
    id: "doc-1004",
    projectId: "proj-104",
    title: "Final billing and holdback package",
    category: "billing",
    status: "ready",
    action: "Email AP with deficiency completion summary and release request"
  }
];

export function getProjectById(projectId: string) {
  return flooringProjects.find((project) => project.id === projectId) ?? null;
}

export function getPartnerById(partnerId: string) {
  return flooringPartners.find((partner) => partner.id === partnerId) ?? null;
}

export function getPurchaseOrdersForProject(projectId: string) {
  return flooringPurchaseOrders.filter((po) => po.projectId === projectId);
}

export function getShipmentsForProject(projectId: string) {
  const poIds = new Set(getPurchaseOrdersForProject(projectId).map((po) => po.id));
  return flooringShipments.filter((shipment) => poIds.has(shipment.poId));
}

export function getReceivingForProject(projectId: string) {
  const shipmentIds = new Set(getShipmentsForProject(projectId).map((shipment) => shipment.id));
  return flooringReceiving.filter((entry) => shipmentIds.has(entry.shipmentId));
}

export function getDeliveriesForProject(projectId: string) {
  return flooringDeliveries.filter((delivery) => delivery.projectId === projectId);
}

export function getStakeholdersForProject(projectId: string) {
  return flooringStakeholders.filter((stakeholder) => stakeholder.projectId === projectId);
}

export function getRoomAreasForProject(projectId: string) {
  return flooringRoomAreas.filter((area) => area.projectId === projectId);
}

export function getInstallPhasesForProject(projectId: string) {
  return flooringInstallPhases.filter((phase) => phase.projectId === projectId);
}

export function getDocumentsForProject(projectId: string) {
  return flooringProjectDocuments.filter((document) => document.projectId === projectId);
}

export function getProjectTimeline(projectId: string): ProjectTimelineEvent[] {
  const orders = getPurchaseOrdersForProject(projectId).map((po) => ({
    id: `timeline-${po.id}`,
    projectId,
    date: po.orderDate,
    stage: "procurement" as const,
    title: `${po.poNumber} placed`,
    owner: "Procurement",
    status: po.status === "received" ? "done" as const : "active" as const,
    detail: `${po.material} | ${po.quantity} | expected ${po.expectedDate}`
  }));

  const shipments = getShipmentsForProject(projectId).map((shipment) => ({
    id: `timeline-${shipment.id}`,
    projectId,
    date: shipment.eta.split(" ")[0],
    stage: "shipment" as const,
    title: `${shipment.loadNumber} ${shipment.status}`,
    owner: "Logistics",
    status: shipment.status === "delayed" ? "blocked" as const : "active" as const,
    detail: `${shipment.pallets} pallets to ${shipment.destination} | ${shipment.risk}`
  }));

  const receiving = getReceivingForProject(projectId).map((entry) => ({
    id: `timeline-${entry.id}`,
    projectId,
    date: entry.receivedDate === "Pending" ? "2026-04-30" : entry.receivedDate,
    stage: "receiving" as const,
    title: `${entry.warehouse} receiving`,
    owner: "Warehouse",
    status: entry.condition === "clear" ? "done" as const : entry.condition === "hold" ? "blocked" as const : "watch" as const,
    detail: `${entry.variance} | zone ${entry.putAwayZone}`
  }));

  const deliveries = getDeliveriesForProject(projectId).map((delivery) => ({
    id: `timeline-${delivery.id}`,
    projectId,
    date: delivery.dropDate,
    stage: "delivery" as const,
    title: `${delivery.area} drop ${delivery.status}`,
    owner: delivery.installer,
    status: delivery.status === "delivered" ? "done" as const : delivery.status === "confirmed" ? "active" as const : "watch" as const,
    detail: `${delivery.dropWindow} | ${delivery.notes}`
  }));

  const installs = getInstallPhasesForProject(projectId).map((phase) => ({
    id: `timeline-${phase.id}`,
    projectId,
    date: phase.start,
    stage: "install" as const,
    title: phase.label,
    owner: phase.owner,
    status: phase.status === "complete" ? "done" as const : phase.status === "blocked" ? "blocked" as const : phase.status === "in-progress" ? "active" as const : "watch" as const,
    detail: `${phase.start} to ${phase.end}${phase.dependency ? ` | depends on ${phase.dependency}` : ""}`
  }));

  const finance = flooringProjects
    .filter((project) => project.id === projectId)
    .map((project) => ({
      id: `timeline-finance-${project.id}`,
      projectId,
      date: project.estimatedCompletionDate,
      stage: "finance" as const,
      title: "Billing exposure checkpoint",
      owner: "Finance",
      status: project.status === "billing" ? "active" as const : "watch" as const,
      detail: project.financeExposure
    }));

  const stakeholders = getStakeholdersForProject(projectId).map((stakeholder) => ({
    id: `timeline-${stakeholder.id}`,
    projectId,
    date: "2026-04-16",
    stage: "stakeholder" as const,
    title: `${stakeholder.name} follow-up`,
    owner: stakeholder.organization,
    status: stakeholder.status === "active" ? "watch" as const : stakeholder.status === "needs-followup" ? "blocked" as const : "active" as const,
    detail: stakeholder.nextTouch
  }));

  return [...orders, ...shipments, ...receiving, ...deliveries, ...installs, ...finance, ...stakeholders].sort((a, b) =>
    a.date.localeCompare(b.date)
  );
}
