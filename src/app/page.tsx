import PageHeader from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1 overflow-auto p-6">
      <div className="max-w-7xl  mx-auto">
        <PageHeader />
      </div>
    </main>
  );
}
