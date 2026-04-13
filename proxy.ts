export default function proxy() {
  return;
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/procurement/:path*',
    '/shipments/:path*',
    '/receiving/:path*',
    '/deliveries/:path*',
    '/projects/:path*',
    '/gantt/:path*',
    '/finance/:path*',
    '/payments-sent/:path*',
    '/payments-received/:path*',
    '/expenses/:path*',
    '/rentals/:path*',
    '/taxation/:path*',
    '/reports/:path*',
    '/vendors-clients/:path*',
    '/stakeholders/:path*',
    '/advisors/:path*',
    '/pipeline/:path*',
    '/master-db/:path*',
    '/compliance/:path*',
    '/careers-staff/:path*',
    '/file-center/:path*',
    '/email/:path*'
  ],
};
