import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import AdminSidebar from './AdminSidebar';
import { Outlet } from 'react-router-dom';
const AdminLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar =() => {
        setIsSidebarOpen(!isSidebarOpen)
    }
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile Toggle button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button className="" onClick={toggleSidebar} type="button">
          <FaBars size={24} />
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>
      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50  z-20 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 bg-gray-900 min-h-screen z-20 md:relative transform transition-transform duration-300  ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:block z-20`}
          >
              

              {/* Sidebar content */}
              <AdminSidebar />
          </div>
          {/* Main content */}
          <div className="flex-grow p-6 overflow-auto">
              <Outlet/>
          </div>
    </div>
  );
}

export default AdminLayout