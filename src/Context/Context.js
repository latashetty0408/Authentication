import { createContext, useContext, useState } from "react"
import { Activity, Calendar, CreditCard, LayoutGrid, Library, LogOut, Settings, Shield } from "lucide-react";
import ActivityCard from "../components/Cards/ActivityCard";
import CreditBalanceCard from "../components/Cards/CreditBalanceCard";
import TrymeCard from "../components/Cards/TrymeCard";
import TransfersListCard from "../components/Cards/TransfersListCard";
import BalanceCard from "../components/Cards/BalanceCard";

const AppContext = createContext({})

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [authError, setAuthError] = useState(null);
  const [timeframe, setTimeframe] = useState("Monthly");

  const [activityData, setActivityData] = useState({
    current: 540.5,
    spent: 682.5,
    earnings: 350.4,
  });

  const navigation = [
    { name: "Dashboard", icon: LayoutGrid, to: "#" },
    { name: "Activity", icon: Activity, to: "#" },
    { name: "Library", icon: Library, to: "#" },
    { name: "Security", icon: Shield, to: "#" },
    { name: "Schedules", icon: Calendar, to: "#" },
    { name: "Payouts", icon: CreditCard, to: "#" },
    { name: "Settings", icon: Settings, to: "#" },
    { name: "Logout", icon: LogOut, to: "/login" },
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const occupationOptions = [
    { value: 'student', label: 'Student' },
    { value: 'professional', label: 'Professional' },
    { value: 'unemployed', label: 'Unemployed' },
  ];

  const nationalityOptions = [
    { value: 'IN', label: 'India' },
    { value: 'usa', label: 'USA' },
    { value: 'canada', label: 'Canada' },
    { value: 'uk', label: 'UK' },
  ];

  const yearsOfExperienceOptions = [
    { value: '0-2', label: '0-2 years' },
    { value: '3-5', label: '3-5 years' },
    { value: '6+', label: '6+ years' },
  ];

  const [rowFirst, setRowFirst] = useState([
    {
      id: "activity1",
      component: (
        <ActivityCard
          title="Activity"
          bgColor="bg-gradient-to-r from-indigo-400 to-indigo-700"
          textColor="text-white"
          amount={activityData.current.toFixed(2)}
          chart
        />
      ),
    },
    {
      id: "activity2",
      component: (
        <ActivityCard
          title="Spent this month"
          bgColor="bg-white"
          textColor="text-black"
          amount={activityData.spent.toFixed(2)}
          progressBar
        />
      ),
    },
    {
      id: "activity3",
      component: (
        <ActivityCard
          title="Earnings"
          bgColor="bg-white"
          textColor="text-black"
          amount={activityData.earnings.toFixed(2)}
          CircularIcon
        />
      ),
    },
    {
      id: "activity4",
      component: (
        <ActivityCard
          title="Earnings"
          bgColor="bg-gradient-to-r from-indigo-400 to-indigo-700"
          textColor="text-white"
          amount={activityData.earnings.toFixed(2)}
          chart
        />
      ),
    },
  ]);

  const [rowSecond, setRowSecond] = useState([
    {
      id: "balanceCard",
      component: <BalanceCard />,
    },
    {
      id: "transfersListCard",
      component: <TransfersListCard />,
    },
  ]);

  const [rowThird, setRowThird] = useState([
    {
      id: "creditBalanceCard",
      component: <CreditBalanceCard />,
    },
    {
      id: "trymeCard",
      component: <TrymeCard />,
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        navigation,
        authError,
        setAuthError,
        isSidebarOpen,
        setIsSidebarOpen,
        activeMenu,
        setActiveMenu,
        activityData,
        setActivityData,
        timeframe,
        setTimeframe,
        nationalityOptions,
        occupationOptions,
        yearsOfExperienceOptions,
        genderOptions,
        rowFirst, setRowFirst,
        rowSecond, setRowSecond,
        rowThird, setRowThird
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)