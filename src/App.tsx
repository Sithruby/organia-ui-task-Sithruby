import React from 'react';
import { useState } from 'react';
import MainLayout from './Layout/Mainlayout';
import DetailsCard from './Components/Detailcard';
import SubDetails from './Components/SubDetails';



const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('T01');

  return (
    <MainLayout activeTab={activeTab} onTabChange={setActiveTab}>
      {activeTab === 'T01' ? (
        <>
          {/* Main Details Section - Two Cards Side by Side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <DetailsCard title="Details 1" cardNumber={1} />
            <DetailsCard title="Details 2" cardNumber={2} />
          </div>

          {/* Sub Details Section */}
          <SubDetails />
        </>
      ) : (
        <>
          {/* Empty Cards for Other Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-card">
              <div className="bg-navy-900 text-white px-4 py-3 flex items-center justify-between">
                <h3 className="font-semibold text-sm">Details 1</h3>
              </div>
              <div className="p-5 h-64 flex items-center justify-center text-gray-400">
                <p>No data available for {activeTab}</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-card">
              <div className="bg-navy-900 text-white px-4 py-3 flex items-center justify-between">
                <h3 className="font-semibold text-sm">Details 2</h3>
              </div>
              <div className="p-5 h-64 flex items-center justify-center text-gray-400">
                <p>No data available for {activeTab}</p>
              </div>
            </div>
          </div>

          {/* Empty Sub Details Section */}
          <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-card">
            <div className="bg-navy-900 text-white px-4 py-3">
              <h3 className="font-semibold text-sm">Sub Details</h3>
            </div>
            <div className="p-5 h-40 flex items-center justify-center text-gray-400">
              <p>No data available for {activeTab}</p>
            </div>
          </div>
        </>
      )}
    </MainLayout>
  );
};

export default App;