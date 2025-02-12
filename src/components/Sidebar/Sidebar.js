import { useApp } from "../../Context/Context";
import { Link, useNavigate } from "react-router-dom";
import clsx from "clsx";
import { X } from "lucide-react";
import Loader from "../Loader/Loader";

export default function Sidebar() {
  const { isSidebarOpen, setIsSidebarOpen, activeMenu, setActiveMenu, navigation, setLoading, loading } = useApp()
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoading(true);

    setTimeout(() => {
      sessionStorage.clear();
      navigate("/login");
      setLoading(false);
    }, 1500);
  }

  return (
    <div
      className={clsx("flex flex-col overflow-auto fixed inset-y-0 left-0 z-50 h-full w-64 transform bg-white transition-transform duration-200 ease-in-out lg:translate-x-0",
        isSidebarOpen ? "translate-x-0" : "-translate-x-full")}
    >
      {loading && <Loader />}
      <div className="flex justify-between items-center p-6">
        <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden p-2 -mr-2">
          <X className="h-6 w-6" />
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.to}
            onClick={() => {
              if (item.name === 'Logout') {
                handleLogout();
              } else {
                setIsSidebarOpen(false);
                setActiveMenu(item.name);
              }
            }}
            className={clsx("flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors",
              activeMenu === item.name ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-50")}
          >
            <item.icon className="h-5 w-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="p-4 m-4">
        <button className="w-full bg-indigo-600 text-white px-4 py-4 rounded-xl hover:bg-indigo-700 transition-colors">
          Upgrade to PRO to get access to all features!
        </button>
      </div>
    </div>
  )
}

