import React from "react";

const achievers = [
  {
    id: 1,
    name: "Remas Malek",
    field: "Business",
    projects: 7,
    image: "/Images/5.png",
    rankImage: "/Images/number1.png",
  },
  {
    id: 2,
    name: "Saeed Ali",
    field: "Tester",
    projects: 5,
    image: "/Images/1.png",
    rankImage: "/Images/number2.png",
  },
  {
    id: 3,
    name: "Sameh Ahmed",
    field: "Developer",
    projects: 8,
    image: "/Images/2.png",
    rankImage: "/Images/number3.png",
  },
];

function TopAchievers() {
  return (
    <div className="rounded-[40px] bg-[#818CF8] p-6 shadow-lg h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-2 text-white">
        <h2 className="text-xl font-bold tracking-tight">Top Achievers</h2>
        <span className="text-sm font-medium opacity-80">This Month</span>
      </div>

      {/* Cards Container - Centered on mobile, grid on desktop */}
      <div className="flex flex-col items-center md:grid md:grid-cols-3 gap-4">
        {achievers.map((user) => (
          <div
            key={user.id}
            className="relative flex flex-col items-center text-center bg-white rounded-[22px] pt-8 pb-5 px-4 shadow-sm w-full max-w-[200px]"
          >
            {/* Ribbon Image Badge */}
            <div className="absolute top-0 left-5">
              <img
                src={user.rankImage}
                alt="Rank Ribbon"
                className="w-10 h-auto drop-shadow-md"
              />
            </div>

            {/* Avatar Circle */}
            <div className="w-16 h-16 rounded-full bg-[#E0F7FA] flex items-center justify-center mb-3">
              <img
                src={user.image}
                alt={user.name}
                className="w-14 h-14 rounded-full object-cover"
              />
            </div>

            {/* User Info */}
            <div className="mb-3">
              <h3 className="text-sm font-bold text-[#334155] leading-tight">
                {user.name}
              </h3>
              <span className="text-xs text-[#94A3B8] font-medium">
                {user.field}
              </span>
            </div>

            {/* Projects Badge */}
            <div className="bg-[#818CF8] text-white px-4 py-1.5 rounded-full text-[11px] font-bold">
              {user.projects} projects
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopAchievers;
