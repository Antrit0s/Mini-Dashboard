import { HiChevronRight } from "react-icons/hi";

const upcomingEvents = [
  { date: "12 nov", task: "Dashboard Redesign" },
  { date: "14 nov", task: "Chatbot Integration" },
  { date: "27 nov", task: "Velocity 3.0" },
];

function Upcoming() {
  return (
    <div className="rounded-[40px] p-6 shadow-sm bg-[#F0F4FF] h-full border border-white/50">
      {/* Header with Arrow right */}
      <div className="flex items-center justify-between mb-3 px-2">
        <h2 className="text-2xl font-bold text-[#4F4F4F]">Upcoming</h2>
        <HiChevronRight className="text-[#4F4F4F] text-3xl cursor-pointer" />
      </div>

      {/* Events List */}
      <div className="space-y-4">
        {upcomingEvents.map((event, index) => {
          const [day, month] = event.date.split(" ");

          return (
            <div
              key={index}
              className="flex items-center bg-white rounded-[24px] shadow-sm p-2 gap-4 transition-transform hover:scale-[1.02] cursor-pointer"
            >
              {/* Day + Month Badge */}
              <div className="flex flex-col items-center justify-center bg-[#818CF8] text-white rounded-[18px] w-13 h-13 shrink-0 shadow-md shadow-indigo-100">
                <span className="text-xl font-semibold leading-none">
                  {day}
                </span>
                <span className="text-sm font-medium lowercase leading-none mt-1">
                  {month}
                </span>
              </div>

              {/* Task Name */}
              <span className="text-[#4F4F4F] text-lg font-semibold truncate">
                {event.task}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Upcoming;
