import { BarChart, Bar, ResponsiveContainer } from "recharts";

const data = [
  { value: 10 },
  { value: 40 },
  { value: 30 },
  { value: 50 },
  { value: 20 },
];

const BarChartIcon = () => {
  return (
    <div className="w-16 h-16 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Bar dataKey="value" fill="#5A2DF9" radius={[5, 5, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartIcon;
