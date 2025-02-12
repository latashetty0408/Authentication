import BalanceAreaChart from "../Charts/BalanceAreaChart";
import { CircleCheck } from "lucide-react";
import { useApp } from "../../Context/Context";

export default function BalanceCard() {
    const { timeframe, setTimeframe } = useApp()
  
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-gray-800">Balance</h2>
          <div className="flex items-center space-x-2">
            <CircleCheck
              size={20}
              color="white"
              strokeWidth={1.5}
              fill="#22c55e"
            />
            <span className="text-green-500 text-sm font-medium">On track</span>
          </div>
        </div>
        <select
          className="border border-gray-200 text-gray-500 text-sm px-3 py-1"
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option>Monthly</option>
          <option>Yearly</option>
        </select>
      </div>
      <div className="grid grid-cols-2 gap-7 mb-4">
        <div className="bg-white shadow-lg py-2 px-5 rounded text-center border-gray-400 flex gap-3">
          <div className="text-left">
            <p className="text-gray-600 text-sm">Saves</p>
            <p className="text-2xl font-semibold">43.50%</p>
          </div>
          <div className="flex justify-end items-end">
            <p className="text-green-500 text-sm font-medium bg-green-50 rounded-xl border-gray-200 p-1">
              +2.45%
            </p>
          </div>
        </div>
        <div className="bg-white shadow-lg py-2 px-5 rounded text-center border-gray-400 flex gap-3">
          <div className="text-left">
            <p className="text-gray-600 text-sm">Balance</p>
            <p className="text-2xl font-semibold">$52,422</p>
          </div>
          <div className="flex justify-end items-end">
            <p className="text-red-500 text-sm font-medium bg-red-50 rounded-xl p-1">
              -4.75%
            </p>
          </div>
        </div>
      </div>
      <div className="h-40">
        <BalanceAreaChart />
      </div>
    </div>
  );
}

// import { LineChart, Line, ResponsiveContainer } from "recharts";

// export default function BalanceCard() {
//   const data = [
//     { value: 20 },
//     { value: 30 },
//     { value: 15 },
//     { value: 50 },
//     { value: 40 },
//     { value: 60 },
//     { value: 30 },
//   ];

//   return (
//     <div className="p-6 bg-white shadow-lg rounded-2xl">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-4">
//         <div className="flex items-center space-x-2">
//         <h2 className="text-lg font-semibold text-gray-800">Balance</h2>
//         <div className="flex items-center space-x-2">
//           <span className="w-2 h-2 bg-green-500 rounded-full"></span>
//           <span className="text-green-500 text-sm font-medium">On track</span>
//         </div>
//         </div>
//         <button className="text-gray-500 text-sm">Monthly ▾</button>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-2 gap-4 mb-4">
//         <div className="bg-gray-100 p-4 rounded-lg text-center">
//           <p className="text-gray-600 text-sm">Saves</p>
//           <p className="text-2xl font-semibold">43.50%</p>
//           <p className="text-green-500 text-sm font-medium">+2.45%</p>
//         </div>
//         <div className="bg-gray-100 p-4 rounded-lg text-center">
//           <p className="text-gray-600 text-sm">Balance</p>
//           <p className="text-2xl font-semibold">$52,422</p>
//           <p className="text-red-500 text-sm font-medium">-4.75%</p>
//         </div>
//       </div>
//       <div className="h-64">
//         <BalanceAreaChart />
//       </div>
//       {/* Chart */}
//       {/* <ResponsiveContainer width="100%" height={80}>
//         <LineChart data={data}>
//           <Line
//             type="monotone"
//             dataKey="value"
//             stroke="#6366F1"
//             strokeWidth={3}
//             dot={false}
//           />
//         </LineChart>
//       </ResponsiveContainer> */}
//     </div>
//   );
// }
