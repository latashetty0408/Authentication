""

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = Array.from({ length: 12 }, (_, i) => ({
  name: `${i + 1}`,
  value: Math.floor(Math.random() * 10000) + 45000,
}))

export default function BalanceAreaChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#818cf8" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* <CartesianGrid strokeDasharray="3 3" vertical={false} /> */}
        {/* <XAxis dataKey="name" axisLine={false} tickLine={false} /> */}
        {/* <YAxis axisLine={false} tickLine={false} /> */}
        <Tooltip />
        <Area type="monotone" dataKey="value" stroke="#818cf8" strokeWidth={2} fill="url(#colorBalance)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

