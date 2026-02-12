import React, { useState } from 'react';
import {
  FaHome,
  FaChartBar,
  FaBox,
  FaUser,
  FaClipboardList,
  FaGlobe,
  FaFolder,
  FaArrowsAlt
} from "react-icons/fa";
import { IconType } from "react-icons";

interface MenuItem {
  id: string;
  label: string;
  icon: IconType;
  active?: boolean;
}

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const menuItems: MenuItem[] = [
  { id: 'home', label: 'Home', icon: FaHome, active: true },
  { id: 'menu2', label: 'Menu2', icon: FaArrowsAlt },
  { id: 'menu3', label: 'Menu3', icon: FaBox },
  { id: 'menu4', label: 'Menu4', icon: FaUser },
  { id: 'menu5', label: 'Menu5', icon: FaClipboardList },
  { id: 'menu6', label: 'Menu6', icon: FaGlobe },
  { id: 'menu7', label: 'Menu7', icon: FaFolder },
  { id: 'menu8', label: 'Menu8', icon: FaChartBar },
];

  return (
    <aside 
      className={`bg-gray-100 border-r border-gray-200 transition-all duration-300 flex flex-col ${
        collapsed ? 'w-16' : 'w-20'
      }`}
    >
      {/* Logo/Toggle */}
      <div className="p-4 border-b border-gray-200 flex justify-center">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="w-10 h-10 bg-navy-900 text-white rounded flex items-center justify-center hover:bg-navy-800 transition-colors"
        >
          <span className="text-xl">☰</span>
        </button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 py-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`w-full py-3 px-4 flex flex-col items-center justify-center gap-1 transition-colors ${
              item.active 
                ? 'bg-white border-l-4 border-navy-900 text-navy-900' 
                : 'text-gray-600 hover:bg-gray-200'
            }`}
            title={item.label}
          >
            <item.icon className="text-xl" />
            {!collapsed && (
              <span className="text-xs font-medium">{item.label}</span>
            )}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;