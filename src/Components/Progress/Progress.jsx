import React, { useState } from "react";

export default function Progress() {
  const [overallProgress] = useState(75);

  const projects = [
    {
      name: "PMO",
      progress: 73,
      team: ["/Images/1.png", "/Images/2.png"],
    },
    {
      name: "AL-Baraka Bank",
      progress: 24,
      team: [
        "/Images/6.png",
        "/Images/4.png",
        "/Images/2.png",
        "/Images/8.png",
      ],
    },
    {
      name: "SMART Objectives",
      progress: 95,
      team: ["/Images/3.png", "/Images/7.png", "/Images/2.png"],
    },
    {
      name: "Equity",
      progress: 52,
      team: [
        "/Images/2.png",
        "/Images/1.png",
        "/Images/5.png",
        "/Images/8.png",
        "/Images/2.png",
      ],
    },
    {
      name: "SMART Objectives",
      progress: 17,
      team: ["/Images/2.png", "/Images/5.png"],
    },
    {
      name: "SummerTown",
      progress: 75,
      team: ["/Images/5.png", "/Images/2.png", "/Images/2.png"],
    },
  ];

  // --- Gauge Configuration ---
  const radius = 90;
  const strokeWidth = 24;
  const normalizedRadius = radius - strokeWidth / 2;
  const fullCircumference = normalizedRadius * 2 * Math.PI;

  // Create the 180-degree arc (Semi-circle)
  const arcLength = fullCircumference / 2;
  const strokeDashoffset = arcLength - (overallProgress / 100) * arcLength;

  return (
    <div className="w-full max-w-md mx-auto bg-[#D9EAFE] rounded-[40px] shadow-2xl p-6 flex flex-col font-sans border border-gray-100 min-h-[600px]">
      {/* HEADER SECTION: Overall Progress Gauge */}
      <div className="bg-[#F8FAFC] rounded-[32px] p-4 mb-8 flex flex-col items-center relative shadow-sm border border-white">
        <div
          className="relative flex items-end justify-center overflow-hidden"
          style={{
            width: radius * 2 + strokeWidth,
            height: radius + strokeWidth,
          }}
        >
          <svg
            width={radius * 2 + strokeWidth}
            height={radius * 2 + strokeWidth}
            className="absolute top-0"
            style={{ transform: "rotate(180deg)" }} // Sets the start point to the left
          >
            {/* Background Track (Light Blue/Gray) */}
            <circle
              stroke="#DCE7F9"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={`${arcLength} ${fullCircumference}`}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius + strokeWidth / 2}
              cy={radius + strokeWidth / 2}
            />

            {/* Progress Bar (Indigo) */}
            <circle
              stroke="#818CF8"
              fill="transparent"
              strokeWidth={strokeWidth}
              strokeDasharray={`${arcLength} ${fullCircumference}`}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              r={normalizedRadius}
              cx={radius + strokeWidth / 2}
              cy={radius + strokeWidth / 2}
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          {/* Centered Percentage Text */}
          <div className="pb-2">
            <span className="text-4xl font-bold text-[#4C56B5] ">75%</span>
          </div>
        </div>

        <span className="text-xl font-medium text-[#4F4F4F] mt-4">
          Overall Progress
        </span>
      </div>

      {/* PROJECT LIST SECTION */}
      <div className="space-y-7 flex-1 overflow-y-auto px-1 custom-scrollbar">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col ">
            {/* Row 1: Title and Percentage */}
            <div className="flex justify-between items-center">
              <h4 className="text-lg font-semibold text-[#575757]">
                {project.name}
              </h4>
              <span className="text-lg font-bold text-[#818CF8]">
                {project.progress}%
              </span>
            </div>

            {/* Row 2: Progress Bar */}
            <div className="w-full h-[15px] bg-[#F1F5F9] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#818CF8] rounded-full transition-all duration-700"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            {/* Row 3: Stacked Team Avatars */}
            <div className="flex items-center pt-1">
              {project.team.map((avatar, idx) => (
                <div
                  key={idx}
                  className={`w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm bg-indigo-50
                    ${idx !== 0 ? "-ml-3" : ""}`} // Creates the overlapping effect
                >
                  <img
                    src={avatar}
                    alt="team member"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://ui-avatars.com/api/?background=random";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
