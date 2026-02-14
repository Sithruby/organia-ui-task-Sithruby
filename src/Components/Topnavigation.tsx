import React from 'react';
import { FaAngleDoubleRight, FaAngleRight, FaArrowRight, FaBell,FaCircle,FaDollarSign,FaRecordVinyl,FaUser } from "react-icons/fa";

const TopNavigation: React.FC = () => {
  return (
    <header className="bg-white">

      {/* ROW 1 */}
      <div className="px-5  flex items-center justify-between border-b border-gray-20">
        
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-900">
          Main Title
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          {/* Bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
            <FaBell className="w-5 h-5 text-gray-600" />
          </button>

          {/* User */}
          <div className="flex items-center gap-3 px-4 border-l border-gray-200">
            <div className="w-8 h-8 bg-navy-900 text-white rounded-full flex items-center justify-center">
               <FaUser className="w-4 h-4" />
            </div>
            <div className="text-sm font-semibold text-gray-900">
              John Smith
            </div>
          </div>

        </div>
      </div>

      {/* ROW 2 (Breadcrumb) */}
      <div className="px-8 py-3 text-sm text-gray-500 flex items-center gap-2 border-b border-gray-20">
        <span>Main</span>
        <span>&gt;</span>
        <span className="text-gray-700">Sub</span>
      </div>

       {/* ROW 3 */}
       {/* Status Indicators */}
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2 bg-navy-900 text-white ml-3 px-9 py-1.5 rounded-full text-sm font-medium">
          <FaRecordVinyl className="w-2 h-2 bg-white "/>
          <span>S - 01</span>
         
            <FaDollarSign  className="w-5 h-3 ml-2 text-white-400 bg-red hover:text-red-300 rounded-full "/>
         
        </div>
        
        <button className="p-2 hover:bg-gray-200 rounded">
          
          <FaAngleDoubleRight className="w-5 h-5 "/>
          
        </button>

        <div className="flex items-center gap-2 text-gray-600 px-3 py-1.5 text-sm">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <span>S-02</span>
        </div>

        <button className="ml-auto p-2 hover:bg-gray-200 rounded">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </button>

        
      </div>
    </header>
  );
};

export default TopNavigation;