import React from 'react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = ['T01', 'T02', 'T03', 'T04', 'T05', 'T06'];

  return (
    <div className="bg-slate-50 px-6 py-3 border-b border-slate-200">
      {/* Status Indicators Row */}
      

      {/* Section Title */}
      <div className="flex items-center gap-2 mb-3">
        
        <span className="font-semibold text-gray-900 text-base">Main Details</span>
      </div>

      {/* Tab Buttons Row */}
      <div className="flex items-center gap-2">
        {/* Tab Buttons */}
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-5 py-2 rounded-t-lg font-medium text-sm transition-all ${
              activeTab === tab
                ? 'bg-navy-900 text-white shadow-sm'
                : 'bg-white text-gray-600 hover:bg-slate-100 border border-slate-200 border-b-0'
            }`}
          >
            {tab}
          </button>
        ))}
        
        {/* Spacer */}
        <div className="flex-1"></div>
        
        {/* Add T Button */}
        <button className="px-6 py-2 bg-burgundy-600 hover:bg-burgundy-700 text-white rounded-full font-medium text-sm transition-colors shadow-sm">
          Add T
        </button>
      </div>
    </div>
  );
};

export default TabNavigation;