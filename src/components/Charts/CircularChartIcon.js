import {
  ResponsiveContainer,
  Bar,
  BarChart,
} from "recharts";

const data = [{ value: 30 }, { value: 40 }, { value: 10 }];

const CircularChartIcon = () => {
  return (
    <div className="w-12 h-12 bg-[#F5F7FE] flex items-center justify-center rounded-full p-2">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <Bar dataKey="value" fill="#5A2DF9" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CircularChartIcon;
