import React from "react";
import ActivityCard from "./ActivityCard";
import { Landmark, Car, GraduationCap } from "lucide-react";

const IconCard = ({ Icon, bgColor }) => (
  <div className={`w-12 h-12 ${bgColor} flex items-center justify-center rounded-full`}>
    <Icon size={24} />
  </div>
);
function CreditBalanceCard() {
  const transfers = [
    {
      name: "Bill & Taxes",
      amount: "-$154.50",
      date: "Today 16:36",
      imageUrl: Landmark,
    },
    {
      name: "Car Energy",
      amount: "-$40.50",
      date: "23 Jun, 13:06",
      imageUrl: Car,
    },
    {
      name: "Design Course",
      amount: "-$70.00",
      date: "21 Jun, 19:04",
      imageUrl: GraduationCap,
    },
  ];
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col gap-6">
      <ActivityCard
        title="Spent this month"
        bgColor="bg-gradient-to-r from-indigo-400 to-indigo-700"
        textColor="text-white"
        amount={"25,215"}
        chart
      />
      <div className="space-y-4">
        <h3 className="text-lg font-medium mb-4">Recents</h3>

        {transfers.map((transfer) => (
          <div
            key={transfer.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full">
                <IconCard Icon={transfer.imageUrl} bgColor="bg-[#F5F7FE]" />
              </div>
              <div>
                <div className="font-medium">{transfer.name}</div>
                <div className="text-sm text-gray-500">{transfer.date}</div>
              </div>
            </div>
            <span
              className={`rounded-xl px-2 py-1`}
            >
              {transfer.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreditBalanceCard;
