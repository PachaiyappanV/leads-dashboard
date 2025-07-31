import { leads } from "@/constants";
import { LeadsPagination, LeadsTableHeader, LeadsTableRow } from ".";

const LeadsTable = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <LeadsTableHeader />
          <tbody className="bg-white divide-y divide-gray-200">
            {leads.map((lead, index) => (
              <LeadsTableRow key={lead.id} lead={lead} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      <LeadsPagination />
    </div>
  );
};

export default LeadsTable;
