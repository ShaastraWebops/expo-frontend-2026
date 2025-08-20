import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-primary-black/70 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Brand */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-primary-yellow" />
              <div className="leading-tight">
                <div className="text-primary-yellow font-primary text-xl">Shaastra Expo</div>
                <div className="text-xs text-gray-300">IIT Madras • 2026</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-gray-300">
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#exhibits" className="hover:text-white transition-colors">Exhibits</a>
              <a href="#faqs" className="hover:text-white transition-colors">FAQs</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center">
              <a className="header-button" href="#register">
                <span className="text-base">Register</span>
              </a>
              <a className="header-button" href="#brochure">
                <span className="text-base">Brochure</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md bg-secondary-black border border-white/10"
              onClick={handleMenuClick}
              aria-label="Toggle Menu"
            >
              <span className={`block w-5 h-0.5 bg-primary-yellow transition-all ${isMenuOpen ? "rotate-45 translate-y-1" : ""}`} />
              <span className={`block w-5 h-0.5 bg-primary-yellow my-1 transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block w-5 h-0.5 bg-primary-yellow transition-all ${isMenuOpen ? "-rotate-45 -translate-y-1" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? "max-h-96" : "max-h-0"} md:hidden overflow-hidden transition-all duration-300 border-t border-white/5`}>
          <div className="px-4 py-3 space-y-2">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-gray-300 hover:bg-white/5">About</a>
            <a href="#exhibits" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-gray-300 hover:bg-white/5">Exhibits</a>
            <a href="#faqs" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-gray-300 hover:bg-white/5">FAQs</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-gray-300 hover:bg-white/5">Contact</a>
            <div className="flex gap-3 pt-2">
              <a className="header-button flex-1 justify-center" href="#register"><span>Register</span></a>
              <a className="header-button flex-1 justify-center" href="#brochure"><span>Brochure</span></a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
