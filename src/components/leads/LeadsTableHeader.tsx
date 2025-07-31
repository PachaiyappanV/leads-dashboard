import { leadsTableHeaders } from "@/constants";

const LeadsTableHeader = () => {
  return (
    <thead className="bg-white border-b border-gray-200">
      <tr>
        {leadsTableHeaders.map((header, id) => (
          <th
            key={id}
            className=" px-6 py-3 text-left text-xs font-medium  text-gray-500 uppercase tracking-wider whitespace-nowrap"
          >
            {id === 0 ? (
              <input
                type="checkbox"
                className="rounded border-gray-300 flex self-center"
              />
            ) : (
              header
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default LeadsTableHeader;
