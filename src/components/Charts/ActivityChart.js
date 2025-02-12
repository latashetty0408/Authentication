""

import { ResponsiveContainer, LineChart, Line } from "recharts"

const data = Array.from({ length: 6 }, (_, i) => ({
  name: i,
  value: Math.floor(Math.random() * 100) + 40,
}))

export default function ActivityChart() {
  return (
    // <ResponsiveContainer width="100%" height="100%">
    //   <AreaChart data={data}>
    //     <defs>
    //       <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
    //         <stop offset="5%" stopColor="#fff" stopOpacity={0.3} />
    //         <stop offset="95%" stopColor="#fff" stopOpacity={0} />
    //       </linearGradient>
    //     </defs>
    //     <Area type="monotone" dataKey="value" stroke="#fff" strokeWidth={2} fill="url(#colorActivity)" />
    //   </AreaChart>
    // </ResponsiveContainer>
    <ResponsiveContainer width="100%" height={80}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          stroke="#fff"
          strokeWidth={3}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

