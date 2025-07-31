import { HelpCircle, LifeBuoy } from "lucide-react";
import { Button } from "../ui/button";
import GlobeIcon from "./GlobeIcon";
import { sidebarItems } from "@/constants";

const Sidebar = () => {
  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
      <div className="w-full flex items-center justify-center pt-1 pb-5  border-b border-gray-100">
        <GlobeIcon className="w-7 h-7 text-blue-600 " />
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {sidebarItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            className=" p-0 text-gray-600 "
          >
            <item.icon />
          </Button>
        ))}
      </div>

      <div className="mt-auto flex flex-col items-center">
        <Button variant="ghost" size="sm" className=" p-0 text-gray-600">
          <HelpCircle />
        </Button>
        <Button variant="ghost" size="sm" className=" p-0 text-gray-600">
          <LifeBuoy />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
