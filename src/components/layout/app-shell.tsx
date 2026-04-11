import { Sidebar } from "@/components/layout/sidebar";
import { TopHeader } from "@/components/layout/top-header";
import { FooterLicenseBlock } from "@/components/layout/footer-license-block";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-zinc-100 dark:bg-black">
      <Sidebar />

      <div className="flex min-h-screen flex-1 flex-col">
        <TopHeader />
        <main className="flex-1 p-6">{children}</main>
        <FooterLicenseBlock />
      </div>
    </div>
  );
}
