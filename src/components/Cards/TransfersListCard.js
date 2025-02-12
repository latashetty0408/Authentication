import { MoveRight } from "lucide-react";
import { useApp } from "../../Context/Context";

function TransfersListCard() {
  const { transfers } = useApp()

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col">
      <h3 className="text-lg font-medium mb-4">Your Transfers</h3>
      <div className="space-y-4">
        {transfers.map((transfer) => (
          <div
            key={transfer.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <img
                src={transfer.imageUrl}
                alt=""
                className="h-10 w-10 rounded-full"
              />
              <div>
                <div className="font-medium">{transfer.name}</div>
                <div className="text-sm text-gray-500">{transfer.date}</div>
              </div>
            </div>
            <span
              className={`${transfer.amount.startsWith("+")
                  ? "text-green-500 bg-green-200 "
                  : "text-red-500 bg-red-200"
                } rounded-xl px-2 py-1`}
            >
              {transfer.amount}
            </span>
          </div>
        ))}
      </div>
      <div className="text-right items-end flex justify-end">
        <button className="mt-[4.5rem] text-indigo-600 text-sm font-medium flex items-center">
          View all <MoveRight size={16} color="#4f46e5" strokeWidth={2} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default TransfersListCard;
