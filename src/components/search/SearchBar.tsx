import { Search } from "lucide-react";
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        placeholder="Search"
        className="pl-10 bg-gray-50 border-gray-200"
      />
    </div>
  );
};

export default SearchBar;
