import CompletedTasks from "../CompletedTasks/CompletedTasks.jsx";
import Header from "../Header/Header.jsx";
import NavigationToggle from "../NavigationToggle/NavigationToggle.jsx";
import Progress from "../Progress/Progress.jsx";
import ScheduleCard from "../ScheduleCard/ScheduleCard.jsx";
import TopAchievers from "../TopAchievers/TopAchievers.jsx";
import Upcoming from "../Upcoming/Upcoming.jsx";

function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-[#6283FA] via-[#5EA1FC] to-[#CADDF3]">
      <NavigationToggle />
      {/* App container */}
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-28 py-6">
        {/* Desktop Layout: Two columns */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_400px] gap-6">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <Header />

            {/* Top Achievers + Upcoming Row */}
            <div className="grid grid-cols-[1.5fr_1fr] gap-6">
              <TopAchievers />
              <Upcoming />
            </div>

            {/* Completed + Schedule Row */}
            <div className="grid grid-cols-2 gap-6">
              <CompletedTasks />
              <ScheduleCard />
            </div>
          </div>

          {/* Right Column - Progress Sidebar */}
          <div className="flex">
            <Progress />
          </div>
        </div>

        {/* Mobile/Tablet Layout: Single column */}
        <div className="lg:hidden space-y-6">
          <Header />

          {/* Progress at top on mobile */}
          <Progress />

          {/* Top Achievers + Upcoming */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TopAchievers />
            <Upcoming />
          </div>

          {/* Completed + Schedule */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <CompletedTasks />
            <ScheduleCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
