import './Sidebar.css'

import {
    LayoutDashboard,
    Folder,
    Users,
    BarChart,
    MessageCircle,
    Settings,
  } from 'lucide-react';
  
  export default function Sidebar() {
    return (
      <aside className="bg-white p-6 shadow-sm flex flex-col justify-between h-screen">
        <div>
          <div className="text-xl font-bold text-pink-600 mb-6">🔷 Logo</div>
          <nav className="space-y-4">
            <MenuItem icon={<LayoutDashboard />} label="Dashboard" active />
            <MenuItem icon={<Folder />} label="Projects" />
            <MenuItem icon={<Users />} label="Teams" />
            <MenuItem icon={<BarChart />} label="Analytics" />
            <MenuItem icon={<MessageCircle />} label="Messages" />
            <MenuItem icon={<Settings />} label="Integrations" />
          </nav>
        </div>
        <div className="bg-blue-50 p-4 rounded-md text-center">
          <img src="https://via.placeholder.com/150x100" alt="Update" className="mx-auto mb-2" />
          <p className="text-sm font-semibold">V2.0 is available</p>
          <button className="mt-2 px-3 py-1 text-sm bg-white border border-blue-500 text-blue-500 rounded-md">
            Try now
          </button>
        </div>
      </aside>
    );
  }
  
  function MenuItem({ icon, label, active }) {
    return (
      <div
        className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer text-sm ${
          active ? 'bg-pink-100 text-pink-600 font-semibold' : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        {icon}
        {label}
      </div>
    );
  }