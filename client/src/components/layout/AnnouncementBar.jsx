const announcements = [
  "Pool & college day outings now open for enquiries",
  "Weddings, haldi, birthdays & family functions plan your event with us",
  "Standard, Premium & Luxury stays in Kommarapudi, near Nellore",
];

const AnnouncementBar = () => {
  return (
    <div className="relative h-[27px] w-full overflow-hidden bg-[#173e32] text-[#f8f6ef]">
      <div className="flex w-max animate-marquee items-center whitespace-nowrap">
        {[...announcements, ...announcements].map((item, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-5 pr-5"
          >
            <span className="text-[11px]">{item}</span>

            <a
              href="#booking"
              className="flex h-[21px] items-center rounded-[4px] bg-[#e9e4d5] px-4 text-[10px] font-semibold text-[#173e32] transition hover:bg-white"
            >
              Book Now
            </a>

            <span className="text-[15px] text-[#c9a77b]">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;