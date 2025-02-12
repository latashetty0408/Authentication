import ActivityChart from "../Charts/ActivityChart"
import BarChartIcon from "../Charts/BarChartIcon"
import CircularChartIcon from "../Charts/CircularChartIcon"

export default function ActivityCard({ title, amount, chart, bgColor, textColor, progressBar, CircularIcon }) {
  return (
    <div className={`${bgColor} ${textColor} p-4 rounded-xl flex lg:gap-5 gap-2 xl:flex-row flex-col`}>
      {CircularIcon && (
        <div className="mt-2 h-16 lg:w-1/2">
          <CircularChartIcon />
        </div>
      )}
      <div>
        <div className="mb-2 text-sm opacity-80">{title}</div>
        <div className="text-2xl font-bold">${amount}</div>
      </div>
      {chart && (
        <div className="mt-2 h-16 lg:w-1/2">
          <ActivityChart />
        </div>
      )}
      {progressBar && (
        <div className="mt-2 h-16 lg:w-1/2">
          <BarChartIcon />
        </div>
      )}
    </div>
  )
}

