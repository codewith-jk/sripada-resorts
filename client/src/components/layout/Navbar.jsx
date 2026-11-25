import { useState } from "react";
import AnnouncementBar from "./AnnouncementBar";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Day Outing", href: "#day-outing" },
  { name: "Events", href: "#events" },
  { name: "Packages", href: "#packages" },
  { name: "Stay", href: "#stay" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-[#f8f6ef]">
      <AnnouncementBar />

      <nav className="relative border-b border-[#173e32]/10 bg-[#f8f6ef]">
        <div className="flex min-h-[72px] items-center justify-between gap-6 px-[4.5%] max-[1200px]:px-[3%] max-[900px]:min-h-[70px] max-[900px]:px-[5%] max-[480px]:min-h-[64px] max-[480px]:px-[4%]">

          {/* Logo */}
          <a href="#home" className="shrink-0">
            <img
              src="/logo/sripada-logo.png"
              alt="Sripada Resorts"
              className="block h-auto w-[125px] object-contain max-[1200px]:w-[115px] max-[480px]:w-[105px]"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="flex flex-1 items-center justify-center gap-6 max-[1200px]:gap-[18px] max-[1050px]:gap-3 max-[900px]:hidden">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`group relative flex h-[72px] items-center whitespace-nowrap text-[12px] transition-colors duration-300 ${
                  index === 0
                    ? "text-[#173e32]"
                    : "text-[#4c504b] hover:text-[#173e32]"
                }`}
              >
                {link.name}

                <span
                  className={`absolute bottom-[19px] left-0 h-[1.5px] bg-[#b98b70] transition-all duration-300 ${
                    index === 0
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Phone Button */}
          <a
            href="tel:+919876543210"
            className="flex h-10 shrink-0 items-center justify-center gap-2 rounded-full border border-[#173e32] px-4 text-[11px] font-semibold text-[#173e32] transition hover:bg-[#173e32] hover:text-[#f8f6ef] max-[480px]:h-[35px] max-[480px]:gap-1.5 max-[480px]:px-2.5 max-[480px]:text-[10px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92z" />
            </svg>

            <span>+91 XXXXXX XXXXX</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="hidden h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 rounded-full border border-[#173e32]/30 max-[900px]:flex"
          >
            <span className="h-[1.5px] w-[17px] bg-[#173e32]" />
            <span className="h-[1.5px] w-[17px] bg-[#173e32]" />
            <span className="h-[1.5px] w-[17px] bg-[#173e32]" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`absolute left-0 top-full flex w-full flex-col overflow-hidden bg-[#f8f6ef] px-[5%] shadow-lg transition-all duration-300 min-[901px]:hidden ${
            menuOpen
              ? "max-h-[500px] border-t border-[#173e32]/10 py-4"
              : "max-h-0 py-0"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-[#173e32]/10 py-3 text-[13px] text-[#4c504b] hover:text-[#173e32]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#booking"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex justify-center rounded-sm bg-[#173e32] py-3 text-[12px] font-medium text-white"
          >
            Book Now
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;