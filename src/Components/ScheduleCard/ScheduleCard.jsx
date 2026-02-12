import React from "react";

function ScheduleCard() {
  const scheduleData = [
    { number: 2, task: "Scheduled Meetings" },
    { number: 1, task: "Deadline" },
  ];

  return (
    <div className="relative bg-[#F0F4FF] rounded-[40px] p-8 shadow-sm h-full border border-white/50 overflow-visible">
      {/* 3D Weather Asset  */}
      <div className="absolute -top-7 -right-4 z-10">
        <img
          src="/Images/cloud.png"
          alt="Sun and Cloud"
          className="w-45 h-45 object-contain drop-shadow-xl"
        />
      </div>

      {/* Header: Date Section */}
      <div className="mb-8">
        <h2 className="text-4xl font-semibold text-[#4C56B5] tracking-tight">
          Monday
        </h2>
        <p className="text-2xl font-semibold text-[#575757] mt-1">
          February, 3
        </p>
      </div>

      {/* Tasks List */}
      <div className="flex flex-col gap-4">
        {scheduleData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-[24px] shadow-sm px-6 py-5 flex items-center gap-4"
          >
            {/* Number Circle */}
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[url('/Images/background.png')] bg-cover bg-center flex items-center justify-center">
              <span className="text-white font-bold text-xl">
                {item.number}
              </span>
            </div>

            {/* Task Name */}
            <p className="text-[#4F4F4F] font-semibold text-lg">{item.task}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScheduleCard;
