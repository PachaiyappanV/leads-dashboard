import { HelpCircle, LifeBuoy } from "lucide-react";
import { Button } from "../ui/button";
import GlobeIcon from "./GlobeIcon";
import { sidebarItems } from "@/constants";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
      {/* Logo */}
      <div className="w-full flex items-center justify-center pt-1 pb-5  border-b border-gray-100">
        <Link href="/">
          <GlobeIcon className="w-7 h-7 text-blue-600 " />
        </Link>
      </div>
      {/* Items */}
      <div className="flex flex-col gap-2 mt-4">
        {sidebarItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="sm"
            className="text-gray-600 cursor-pointer "
          >
            <item.icon />
          </Button>
        ))}
      </div>
      {/* Help and Support */}
      <div className="mt-auto flex flex-col items-center">
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 cursor-pointer"
        >
          <HelpCircle />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-600 cursor-pointer"
        >
          <LifeBuoy />
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
