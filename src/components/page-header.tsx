import { Download, Plus } from "lucide-react";
import { Button } from "./ui/button";

const PageHeader = () => {
  return (
    <div className="flex justify-between items-start mb-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">
          Leads Management
        </h1>
        <p className="text-gray-600 mt-1">
          Organize leads and track their progress effectively here
        </p>
      </div>
      <div className="flex gap-3">
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Leads
        </Button>
        <Button variant="outline">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
