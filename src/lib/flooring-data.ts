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
    nextAction: "Confirm elevator access and overnight staging"
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
    nextAction: "Release delivery once paint deficiency closes"
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
    nextAction: "Submit revised quote with abatement option"
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
    nextAction: "Issue final progress bill and close holdback tracker"
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
