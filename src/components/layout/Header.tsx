"use client";
import { BellRing, AlignLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchBar } from "../search";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center justify-center gap-x-6 mr-2 ">
          <span>
            <AlignLeft className="w-5 h-5 text-gray-600" />
          </span>

          <SearchBar />
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="cursor-pointer">
            <BellRing className="text-gray-600" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center gap-3 p-1 cursor-pointer"
              >
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/pic1.png" />
                  <AvatarFallback>PC</AvatarFallback>
                </Avatar>
                <div className="text-left hidden sm:block">
                  <div className="text-sm font-medium">Pamela Cain</div>
                  <div className="text-xs text-gray-500">pamela@dyson.com</div>
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="cursor-pointer">
                Account
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600 cursor-pointer">
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
