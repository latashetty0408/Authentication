import React from "react";
import ActivityCard from "./ActivityCard";
import { useApp } from "../../Context/Context";

const IconCard = ({ Icon, bgColor }) => (
  <div className={`w-12 h-12 ${bgColor} flex items-center justify-center rounded-full`}>
    <Icon size={24} />
  </div>
);
function CreditBalanceCard() {
  const { creditList } = useApp();

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

        {creditList.map((credits) => (
          <div
            key={credits.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full">
                <IconCard Icon={credits.imageUrl} bgColor="bg-[#F5F7FE]" />
              </div>
              <div>
                <div className="font-medium">{credits.name}</div>
                <div className="text-sm text-gray-500">{credits.date}</div>
              </div>
            </div>
            <span
              className={`rounded-xl px-2 py-1`}
            >
              {credits.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreditBalanceCard;
