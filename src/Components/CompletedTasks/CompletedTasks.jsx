import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { HiChevronRight } from "react-icons/hi";

function Completed() {
  const completedItems = [
    { task: "OKR", date: "15 Jan" },
    { task: "Zain Sudan", date: "30 Jan" },
    { task: "Maktaby Internal", date: "7 Feb" },
  ];

  return (
    <div className="rounded-[40px] p-8 shadow-sm bg-[#F0F4FF] h-full border border-white/50">
      {/* Header with Title and arrow right */}
      <div className="flex items-center justify-between mb-8 px-2">
        <h3 className="text-2xl font-bold text-[#4F4F4F]">Completed</h3>
        <HiChevronRight className="text-[#4F4F4F] text-3xl cursor-pointer" />
      </div>

      {/* Task List */}
      <ul className="space-y-4">
        {completedItems.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white rounded-[24px] shadow-sm p-4 transition-transform hover:scale-[1.01] cursor-pointer"
          >
            {/* Task name */}
            <span className="text-[#4F4F4F] font-bold text-lg">
              {item.task}
            </span>

            {/* Date + Checkmark Badge */}
            <div className="flex items-center gap-6">
              <span className="text-[#94A3B8] font-medium text-base">
                {item.date}
              </span>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-gray-50 shrink-0">
                <IoMdCheckmark className="text-[#818CF8] text-2xl font-black" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Completed;
