import { Activity, Calendar, CreditCard, LayoutGrid, Library, LogOut, Settings, Shield } from "lucide-react";
import { createContext, useContext, useState } from "react"

const AppContext = createContext({})

export function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState("Dashboard")
  const [authError, setAuthError] = useState(null);
  const [timeframe, setTimeframe] = useState("Monthly");

  const [activityData, setActivityData] = useState({
    current: 540.5,
    spent: 682.5,
    earnings: 350.4,
  })
  const navigation = [
    { name: "Dashboard", icon: LayoutGrid, href: "#" },
    { name: "Activity", icon: Activity, href: "#" },
    { name: "Library", icon: Library, href: "#" },
    { name: "Security", icon: Shield, href: "#" },
    { name: "Schedules", icon: Calendar, href: "#" },
    { name: "Payouts", icon: CreditCard, href: "#" },
    { name: "Settings", icon: Settings, href: "#" },
    { name: "Logout", icon: LogOut, href: "/login" },
  ]
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
        setTimeframe
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)