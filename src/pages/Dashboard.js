import ActivityCard from "../components/Cards/ActivityCard";
import BalanceCard from "../components/Cards/BalanceCard";
import Layout from "../components/Layout/Layout";
import TransfersListCard from "../components/Cards/TransfersListCard";
import CreditBalanceCard from "../components/Cards/CreditBalanceCard";
import TrymeCard from "../components/Cards/TrymeCard";
import { useApp } from "../Context/Context";

export default function Dashboard() {
    const { activityData } = useApp()

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <ActivityCard
          title="Activity"
          bgColor="bg-gradient-to-r from-indigo-400 to-indigo-700"
          textColor="text-white"
          amount={activityData.current.toFixed(2)}
          chart
        />
        <ActivityCard
          title="Spent this month"
          bgColor="bg-white"
          textColor="text-black"
          amount={activityData.spent.toFixed(2)}
          progressBar
        />
        <ActivityCard
          title="Earnings"
          bgColor="bg-white"
          textColor="text-black"
          amount={activityData.earnings.toFixed(2)}
          CircularIcon
        />
        <ActivityCard
          title="Earnings"
          bgColor="bg-gradient-to-r from-indigo-400 to-indigo-700"
          textColor="text-white"
          amount={activityData.earnings.toFixed(2)}
          chart
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 mb-6">
        <BalanceCard />
        <TransfersListCard />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 mb-6">
        <CreditBalanceCard />
        <TrymeCard />
      </div>
    </Layout>
  );
}
