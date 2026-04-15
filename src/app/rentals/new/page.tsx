import AppShell from "@/app/components/layout/app-shell";
import { RentalsForm } from "../components/form";

export default function NewRentalsPage() {
  return (
    <AppShell title="New Rental" subtitle="Create a new rental record">
      <div className="max-w-3xl">
        <RentalsForm mode="create" />
      </div>
    </AppShell>
  );
}












