export type EmailFormValues = {
  id?: string;
  name: string;
  status?: string;
  owner?: string;
  urgency?: string;
  nextAction?: string;
  downstreamImpact?: string;
  relatedRecord?: string;
  attachments?: string[];
};

const MOCK: EmailFormValues[] = [
  {
    id: "1",
    name: "Release request for Riverfront Tower freight",
    status: "waiting on reply",
    owner: "Project coordination",
    urgency: "high",
    nextAction: "Send access request with elevator release sheet attached before 4 PM",
    downstreamImpact: "If no reply lands, Friday drop slips and Crew Atlas loses install time.",
    relatedRecord: "Riverfront Tower Lobby | Shipments",
    attachments: ["Elevator access confirmation", "Tile staging release sheet"]
  },
  {
    id: "2",
    name: "Collections note for Parkland Phase 2 progress draw",
    status: "queued",
    owner: "Finance",
    urgency: "medium",
    nextAction: "Send draw backup, holdback tracker, and deficiency completion summary to client AP.",
    downstreamImpact: "Faster release improves working capital for inbound April material packages.",
    relatedRecord: "Parkland Multi-Family Phase 2 | Finance",
    attachments: ["Final billing and holdback package"]
  },
  {
    id: "3",
    name: "Painter deficiency closeout chase",
    status: "drafted",
    owner: "Builder coordination",
    urgency: "high",
    nextAction: "Request sign-off photo package so the Aspen Estates delivery can auto-release.",
    downstreamImpact: "Until the builder signs off, staged material and install slots remain blocked.",
    relatedRecord: "Aspen Estates Showhome | Projects",
    attachments: ["Painter deficiency closeout photos"]
  }
];

export async function getEmailList() {
  return MOCK;
}

export async function getEmailById(id: string) {
  return MOCK.find((entry) => entry.id === id) ?? null;
}

export const getemailById = getEmailById;
