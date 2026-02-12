import React, { useState } from "react";

export default function NavigationToggle() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex items-center justify-center p-4">
      {/* Main Pill Container */}
      <div className="bg-white rounded-full p-1.5 flex items-center shadow-sm border border-gray-50">
        {/* Dashboard Button */}
        <button
          onClick={() => setActiveTab("Dashboard")}
          className={`px-8 py-2.5 rounded-full text-lg font-semibold transition-all duration-300 ${
            activeTab === "Dashboard"
              ? "bg-[#818CF8] text-white shadow-md shadow-indigo-200"
              : "text-[#757575] hover:text-[#818CF8]"
          }`}
        >
          Dashboard
        </button>

        {/* Projects Log Button */}
        <button
          onClick={() => setActiveTab("Projects Log")}
          className={`px-8 py-2.5 rounded-full text-lg font-bold transition-all duration-300 ${
            activeTab === "Projects Log"
              ? "bg-[#818CF8] text-white shadow-md shadow-indigo-200"
              : "text-[#757575] hover:text-[#818CF8]"
          }`}
        >
          Projects Log
        </button>
      </div>
    </div>
  );
}
