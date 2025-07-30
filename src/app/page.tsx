import PageHeader from "@/components/page-header";
import StatsCards from "@/components/stats-cards";
import TableControls from "@/components/table-controls";

export default function Home() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <div className="max-w-7xl  mx-auto">
        <PageHeader />
        <StatsCards />
        <TableControls />
      </div>
    </main>
  );
}
