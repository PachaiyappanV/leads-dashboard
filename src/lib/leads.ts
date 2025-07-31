export const getStatusColor = (status: string) => {
  switch (status) {
    case "Customer":
      return "bg-green-100 text-green-800";
    case "Qualified":
      return "bg-yellow-100 text-yellow-800";
    case "Working":
      return "bg-blue-100 text-blue-800";
    case "Contacted":
      return "bg-purple-100 text-purple-800";
    case "Proposal Sent":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const getTagColor = (tag: string) => {
  switch (tag) {
    case "Important":
      return "bg-red-100 text-red-800";
    case "Follow up":
      return "bg-yellow-100 text-yellow-800";
    case "Review":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
