import { stats } from "@/constants";

const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="bg-white p-4 rounded-lg border border-gray-200"
        >
          <div className={`text-sm text-gray-600 mb-1 ${stat.color}`}>
            {stat.label}
          </div>
          <div className="text-2xl text-gray-900 font-semibold">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
