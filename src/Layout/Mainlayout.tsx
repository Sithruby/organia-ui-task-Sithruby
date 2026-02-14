import React from 'react';
import Sidebar from '../Components/sidebar';
import TopNavigation from '../Components/Topnavigation';
import TabNavigation from '../Components/Tapnaviagtion';

interface MainLayoutProps {
  children: React.ReactNode;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, activeTab, onTabChange }) => {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      
      <Sidebar />

      
      <div className="flex-1 flex flex-col overflow-hidden">
        
        <TopNavigation />

        
        <TabNavigation activeTab={activeTab} onTabChange={onTabChange} />

        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-[1600px] mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;