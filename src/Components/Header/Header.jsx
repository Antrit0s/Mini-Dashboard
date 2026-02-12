function Header() {
  return (
    <>
      <header className="relative flex flex-col md:flex-row items-center justify-between bg-white rounded-[40px] shadow-sm p-8 md:p-12 border border-gray-100 overflow-visible">
        {/* Left Section */}
        <div className="max-w-md text-left w-full z-10">
          <span className="inline-block text-xs font-bold uppercase text-white py-2.5 px-6 rounded-full bg-[#818CF8] shadow-lg shadow-indigo-200">
            New Announcement
          </span>

          <h1 className="text-3xl md:text-4xl font-bold text-[#4C56B5] mt-4 tracking-tight">
            Q1 STRATEGY KICK-OFF
          </h1>

          <p className="mt-4 text-[#575757] text-lg font-medium leading-snug max-w-[90%]">
            We've officially reached 75% of our overall progress! Join us this
            Friday at 10:00 am in the main hall for a quick celebration.
          </p>
        </div>

        {/* Right Section: The Microphone */}
        {/* Mobile: flex column, Desktop: absolute positioned */}
        <div className="mt-6 md:mt-0 md:absolute md:right-[-35px] md:bottom-[-20px] z-10">
          <img
            src="/Images/Microphone.png"
            alt="Microphone"
            className="w-48 h-48 md:w-[350px] md:h-[350px] object-contain transform -scale-x-100 md:rotate-[-3deg]"
          />
        </div>
      </header>
    </>
  );
}

export default Header;
