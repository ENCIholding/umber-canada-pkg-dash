export type EmailFormValues = {
  id?: string;
  name: string;
  status?: string;
  owner?: string;
  urgency?: string;
  nextAction?: string;
  downstreamImpact?: string;
};

const MOCK: EmailFormValues[] = [
  {
    id: "1",
    name: "Release request for Riverfront Tower freight",
    status: "waiting on reply",
    owner: "Project coordination",
    urgency: "high",
    nextAction: "Follow up with site superintendent before 4 PM",
    downstreamImpact: "If no reply lands, Friday drop slips and Crew Atlas loses install time"
  },
  {
    id: "2",
    name: "Collections note for Parkland Phase 2 progress draw",
    status: "queued",
    owner: "Finance",
    urgency: "medium",
    nextAction: "Send draw backup and holdback tracker to client AP",
    downstreamImpact: "Faster release improves working capital for inbound April material packages"
  }
];

export async function getEmailList() {
  return MOCK;
}

export async function getEmailById(id: string) {
  return MOCK.find(x => x.id === id) ?? null;
}

export const getemailById = getEmailById;











