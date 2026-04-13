export type NavItem = {
  title: string;
  href?: string;
  children?: NavItem[];
};

export const appNavigation: NavItem[] = [
  {
    title: 'Operations',
    children: [
      { title: 'Dashboard', href: '/dashboard' },
      { title: 'Procurement', href: '/procurement' },
      { title: 'Shipments', href: '/shipments' },
      { title: 'Receiving', href: '/receiving' },
      { title: 'Deliveries', href: '/deliveries' },
      { title: 'Projects', href: '/projects' },
      { title: 'Gantt', href: '/gantt' }
    ]
  },
  {
    title: 'Finance',
    children: [
      { title: 'Finance', href: '/finance' },
      { title: 'Payments Sent', href: '/payments-sent' },
      { title: 'Payments Received', href: '/payments-received' },
      { title: 'Expenses', href: '/expenses' },
      { title: 'Rentals', href: '/rentals' },
      { title: 'Taxation', href: '/taxation' },
      { title: 'Reports', href: '/reports' }
    ]
  },
  {
    title: 'CRM & Network',
    children: [
      { title: 'Vendors & Clients', href: '/vendors-clients' },
      { title: 'Stakeholders', href: '/stakeholders' },
      { title: 'Advisors', href: '/advisors' },
      { title: 'Pipeline', href: '/pipeline' },
      { title: 'Master DB', href: '/master-db' }
    ]
  },
  {
    title: 'Admin & Support',
    children: [
      { title: 'Compliance', href: '/compliance' },
      { title: 'Careers & Staff', href: '/careers-staff' },
      { title: 'File Center', href: '/file-center' },
      { title: 'Email', href: '/email' }
    ]
  }
];



