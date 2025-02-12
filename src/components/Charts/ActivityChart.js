import { ResponsiveContainer, LineChart, Line } from "recharts"

const data = Array.from({ length: 6 }, (_, i) => ({
  name: i,
  value: Math.floor(Math.random() * 100) + 40,
}))

export default function ActivityChart() {
  return (
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

