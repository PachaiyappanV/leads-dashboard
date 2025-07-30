import { Eye, Filter, RefreshCw, Layers } from "lucide-react";
import { Button } from "./ui/button";
import SearchBar from "./search-bar";

const TableControls = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <div className="flex gap-3">
        <Button variant="outline" size="sm">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button variant="outline" size="sm">
          <Layers className="w-4 h-4 mr-2" />
          Bulk Actions
        </Button>
        <Button variant="outline" size="sm">
          <RefreshCw className="w-4 h-4" />
        </Button>
      </div>
      <div className="flex gap-3 items-center justify-center">
        <SearchBar />
        <Button variant="outline" size="sm">
          <Eye className="w-4 h-4 mr-2" />
          View
        </Button>
      </div>
    </div>
  );
};

export default TableControls;
