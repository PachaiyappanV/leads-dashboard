import { LeadsTableControls, LeadsTable } from "@/components/leads";

import { StatsCards } from "@/components/stats";
import { Button } from "@/components/ui/button";
import { ArrowDown, Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <div className="max-w-7xl  mx-auto">
        <div className="flex justify-between items-start mb-4  pb-4 border-b-2 border-gray-100">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              Leads Management
            </h1>
            <p className="text-gray-600 mt-1">
              Organize leads and track their progress effectively here
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4" />
              New Leads
            </Button>
            <Button variant="outline">
              <ArrowDown className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>
        <StatsCards />
        <LeadsTableControls />
        <LeadsTable />
      </div>
    </main>
  );
}
