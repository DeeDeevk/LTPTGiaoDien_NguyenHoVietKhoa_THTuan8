import { Bell, Search } from 'lucide-react';
import "./Header.css"
export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Left: Dashboard Title */}
      <h1 className="text-pink-600 font-bold text-lg">Dashboard</h1>

      {/* Center: Search Input */}
      <div className="flex-1 mx-6 max-w-md">
        <div className="relative">
          <Search className="absolute top-2.5 left-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-md bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
      </div>

      {/* Right: Icons and Avatar */}
      <div className="flex items-center gap-4">
        <Bell className="h-5 w-5 text-gray-600 cursor-pointer" />
        <span className="text-xl text-gray-600 cursor-pointer">?</span>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Avatar"
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
