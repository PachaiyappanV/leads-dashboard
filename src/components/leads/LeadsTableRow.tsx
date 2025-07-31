import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { Badge } from "../ui/badge";
import { getStatusColor, getTagColor } from "@/lib/leads";

type Props = {
  lead: {
    id: string;
    customer: string;
    company: string;
    email: string;
    phone: string;
    value: string;
    tags: string;
    source: string;
    assigned: string;
    status: string;
    created: string;
  };
  index: number;
};

export function LeadsTableRow({ lead, index }: Props) {
  return (
    <tr className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
      <td className="px-6 py-4 whitespace-nowrap">
        <input type="checkbox" className="rounded border-gray-300" />
      </td>
      <td className="px-6 py-4 text-sm font-medium whitespace-nowrap text-gray-900">
        {lead.id}
      </td>
      <td className="px-6 py-4">
        <div className="text-sm font-medium whitespace-nowrap text-blue-600 hover:text-blue-800 cursor-pointer">
          {lead.customer}
        </div>
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
        {lead.company}
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap text-blue-600 hover:text-blue-800 cursor-pointer">
        {lead.email}
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap text-blue-600 hover:text-blue-800 cursor-pointer">
        {lead.phone}
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap font-medium text-gray-900">
        {lead.value}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Badge className={`text-xs ${getTagColor(lead.tags)}`}>
          {lead.tags}
        </Badge>
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-900">
        {lead.source}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Avatar className="w-8 h-8">
          <AvatarImage src={lead.assigned || "/placeholder.svg"} />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <Badge className={`text-xs ${getStatusColor(lead.status)}`}>
          {lead.status}
        </Badge>
      </td>
      <td className="px-6 py-4 text-sm whitespace-nowrap text-gray-500">
        {lead.created}
      </td>
      <td className="px-6 py-4 text-right text-sm whitespace-nowrap font-medium">
        <Button variant="ghost" size="sm">
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </td>
    </tr>
  );
}
