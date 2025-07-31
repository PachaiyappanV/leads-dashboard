import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LeadsPagination = () => {
  return (
    <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
      <Button variant="outline" size="sm" className="flex items-center gap-2">
        <ChevronLeft className="w-4 h-4" />
        Previous
      </Button>

      <div className="hidden sm:flex items-center gap-2 ">
        {[1, 2, 3].map((num) => (
          <Button key={num} variant="outline" size="sm">
            {num}
          </Button>
        ))}
        <span className="text-gray-500">...</span>
        {[8, 9, 10].map((num) => (
          <Button key={num} variant="outline" size="sm">
            {num}
          </Button>
        ))}
      </div>

      <Button variant="outline" size="sm" className="flex items-center gap-2">
        Next
        <ChevronRight className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default LeadsPagination;
