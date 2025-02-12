import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { Menu } from "lucide-react"
import { useApp } from "../../Context/Context";

function Layout({ children }) {

  const { isSidebarOpen, setIsSidebarOpen } = useApp()

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {isSidebarOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsSidebarOpen(false)} />
          <Sidebar onClose={() => setIsSidebarOpen(false)} />
        </div>
      )}

      <div className="flex-1">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md"
        >
          <Menu className="h-6 w-6" />
        </button>

        <main className="p-4 lg:p-8 lg:ml-64">
          <Header />
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout;