import { LayoutGrid, Filter, RefreshCw, Layers } from "lucide-react";
import { Button } from "../ui/button";
import { SearchBar } from "../search";

const TableControls = () => {
  return (
    <div className="flex flex-col-reverse items-start gap-3 sm:flex-row sm:justify-between sm:items-center mb-6">
      <div className="flex gap-3">
        <Button variant="outline" size="sm" className="cursor-pointer">
          <Filter />
          Filter
        </Button>
        <Button variant="outline" size="sm" className="cursor-pointer">
          <Layers />
          Bulk Actions
        </Button>
        <Button variant="outline" size="sm" className="cursor-pointer">
          <RefreshCw />
        </Button>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <SearchBar className="bg-white border-gray-200" />
        <Button variant="outline" size="sm" className="cursor-pointer">
          <LayoutGrid />
          View
        </Button>
      </div>
    </div>
  );
};

export default TableControls;
