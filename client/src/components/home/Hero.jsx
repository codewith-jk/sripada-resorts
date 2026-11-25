import { useState } from "react";

const bookingTabs = ["Stay", "Day outing", "Events", "Corporate"];

const Hero = () => {
  const [activeTab, setActiveTab] = useState("Stay");

  return (
    <section
      id="home"
      className="relative flex min-h-[660px] w-full flex-col items-center bg-[#f8f6ef] px-5 pb-[115px] pt-[100px] max-[768px]:min-h-[620px] max-[768px]:pt-[70px] max-[480px]:min-h-[580px] max-[480px]:px-4 max-[480px]:pt-[55px]"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 bottom-[85px] overflow-hidden">
        <img
          src="/images/hero.png"
          alt="Sripada Resorts surrounded by nature"
          className="h-full w-full object-cover object-center"
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#10251e]/55 via-[#10251e]/55 to-[#10251e]/85" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[900px] flex-col items-center text-center text-white">

        {/* Location */}
        <div className="mb-8 flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-[11px] font-normal text-white backdrop-blur-sm max-[480px]:mb-6 max-[480px]:text-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>

          <span>Kommarapudi, Nellore, Andhra Pradesh</span>
        </div>

        {/* Main Heading */}
        <h1 className="max-w-[900px] font-serif text-[68px] font-normal leading-[1.12] tracking-[-1.5px] max-[768px]:text-[52px] max-[480px]:text-[38px] max-[480px]:leading-[1.2] max-[480px]:tracking-[-0.5px]">
          Where moments
          <br />
          become memories.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 font-serif text-[20px] italic text-[#e8e0d1] max-[480px]:text-[16px]">
          A premium event & leisure destination
        </p>

        {/* Description */}
        <p className="mt-3 max-w-[620px] text-[13px] leading-[24px] text-white/90 max-[480px]:text-[12px] max-[480px]:leading-[21px]">
          From family outings and comfortable stays to celebrations and leisure
          experiences, discover a destination made for spending time together.
        </p>

        {/* Hero Buttons */}
        <div className="mt-7 flex items-center gap-3">
          <a
            href="#about"
            className="flex h-[39px] items-center justify-center rounded-[3px] bg-[#f8f6ef] px-6 text-[11px] font-semibold text-[#173e32] transition hover:bg-white"
          >
            Explore SRIPADA
          </a>

          <a
            href="#booking"
            className="flex h-[39px] items-center justify-center rounded-[3px] border border-white/70 px-6 text-[11px] font-medium text-white transition hover:bg-white hover:text-[#173e32]"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Booking Form */}
      <div
        id="booking"
        className="relative z-20 mt-[74px] w-full max-w-[960px] rounded-[7px] bg-white px-6 pb-6 pt-5 shadow-[0_20px_55px_rgba(0,0,0,0.16)] max-[768px]:mt-12 max-[480px]:px-4"
      >
        {/* Booking Tabs */}
        <div className="flex items-center gap-8 border-b border-[#e3e3df] max-[480px]:gap-5">
          {bookingTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`relative pb-3 text-[11px] transition-colors ${
                activeTab === tab
                  ? "font-semibold text-[#173e32]"
                  : "text-[#777a75] hover:text-[#173e32]"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-[#b98b70]" />
              )}
            </button>
          ))}
        </div>

        {/* Booking Fields */}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert("Thank you! Your enquiry has been received.");
          }}
          className="mt-5"
        >
          <div className="grid grid-cols-[1.3fr_1fr_1fr_0.8fr_145px] items-end gap-3 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1">

            {/* Experience */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-medium text-[#173e32]">
                Experience
              </label>

              <select
                defaultValue="Standard room"
                className="h-[42px] w-full rounded-[3px] border border-[#deded7] bg-[#f8f6ef] px-3 text-[12px] text-[#454943] outline-none focus:border-[#173e32]"
              >
                <option>Standard room</option>
                <option>Premium room</option>
                <option>Luxury room</option>
              </select>
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-medium text-[#173e32]">
                Date
              </label>

              <input
                type="date"
                required
                className="h-[42px] w-full rounded-[3px] border border-[#deded7] bg-[#f8f6ef] px-3 text-[12px] text-[#454943] outline-none focus:border-[#173e32]"
              />
            </div>

            {/* Until */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-medium text-[#173e32]">
                Until (for stays)
              </label>

              <input
                type="date"
                className="h-[42px] w-full rounded-[3px] border border-[#deded7] bg-[#f8f6ef] px-3 text-[12px] text-[#454943] outline-none focus:border-[#173e32]"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-medium text-[#173e32]">
                Guests
              </label>

              <input
                type="number"
                min="1"
                defaultValue="2"
                className="h-[42px] w-full rounded-[3px] border border-[#deded7] bg-[#f8f6ef] px-3 text-[12px] text-[#454943] outline-none focus:border-[#173e32]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="h-[42px] rounded-[3px] bg-[#173e32] px-4 text-[11px] font-semibold text-white transition hover:bg-[#245343] max-[900px]:col-span-2 max-[480px]:col-span-1"
            >
              Check availability
            </button>
          </div>

          <p className="mt-3 text-[10px] text-[#999b95]">
            This sends an enquiry. Our team confirms availability with you directly.
          </p>
        </form>
      </div>
    </section>
  );
};

export default Hero;