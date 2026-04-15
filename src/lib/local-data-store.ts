type StoreMap = {
  masterEntities: Array<Record<string, unknown>>;
  vendorClients: Array<Record<string, unknown>>;
  projects: Array<Record<string, unknown>>;
  stakeholders: Array<Record<string, unknown>>;
};

const globalForLocalData = globalThis as typeof globalThis & {
  localDataStore?: StoreMap;
};

function createDefaultStore(): StoreMap {
  const masterEntity = {
    id: "master-1",
    companyName: "Umber Flooring Supply",
    contactName: "Operations Desk",
    country: "Canada",
    entityType: "vendor",
    isActive: true,
    workAgain: true,
    createdAt: new Date().toISOString()
  };

  return {
    masterEntities: [masterEntity],
    vendorClients: [
      {
        id: "vendor-client-1",
        masterEntityId: masterEntity.id,
        category: "supplier",
        masterEntity,
        createdAt: new Date().toISOString()
      }
    ],
    projects: [
      {
        id: "project-1",
        projectNumber: "FLR-001",
        projectName: "Showroom Refresh",
        status: "active",
        createdAt: new Date().toISOString()
      }
    ],
    stakeholders: [
      {
        id: "stakeholder-1",
        masterEntityId: masterEntity.id,
        productCategory: "tile",
        masterEntity,
        createdAt: new Date().toISOString()
      }
    ]
  };
}

export function getLocalDataStore() {
  if (!globalForLocalData.localDataStore) {
    globalForLocalData.localDataStore = createDefaultStore();
  }

  return globalForLocalData.localDataStore;
}
