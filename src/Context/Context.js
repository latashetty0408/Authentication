import { createContext, useContext, useState } from "react"
import { Activity, Calendar, Car, CreditCard, GraduationCap, Landmark, LayoutGrid, Library, LogOut, Settings, Shield } from "lucide-react";
import ActivityCard from "../components/Cards/ActivityCard";
import CreditBalanceCard from "../components/Cards/CreditBalanceCard";
import TrymeCard from "../components/Cards/TrymeCard";
import TransfersListCard from "../components/Cards/TransfersListCard";
import BalanceCard from "../components/Cards/BalanceCard";
import { Logo } from "../assets/images/Index";

const AppContext = createContext({})

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [authError, setAuthError] = useState(null);
  const [timeframe, setTimeframe] = useState("Monthly");
  const [loading, setLoading] = useState(false);

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

  const creditList = [
    {
      name: "Bill & Taxes",
      amount: "-$154.50",
      date: "Today 16:36",
      imageUrl: Landmark,
    },
    {
      name: "Car Energy",
      amount: "-$40.50",
      date: "23 Jun, 13:06",
      imageUrl: Car,
    },
    {
      name: "Design Course",
      amount: "-$70.00",
      date: "21 Jun, 19:04",
      imageUrl: GraduationCap,
    },
  ];

  const transfers = [
    {
      name: "Alex Manda",
      amount: "+$50",
      date: "Today 16:25",
      imageUrl: Logo.Profile_1,
    },
    {
      name: "Laura Santos",
      amount: "-$27",
      date: "Today 16:23",
      imageUrl: Logo.Profile_2,
    },
    {
      name: "Jaden S.",
      amount: "+$157",
      date: "Today 16:15",
      imageUrl: Logo.Profile_3,
    },
  ];
  return (
    <AppContext.Provider
      value={{
        navigation,
        authError, setAuthError,
        isSidebarOpen, setIsSidebarOpen,
        activeMenu, setActiveMenu,
        activityData, setActivityData,
        timeframe, setTimeframe,
        nationalityOptions,
        occupationOptions,
        yearsOfExperienceOptions,
        genderOptions,
        rowFirst, setRowFirst,
        rowSecond, setRowSecond,
        rowThird, setRowThird,
        loading, setLoading,
        transfers,
        creditList
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)