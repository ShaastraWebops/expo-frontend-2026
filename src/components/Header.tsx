import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex items-center md:justify-center py-4 relative">
        <div className="title">
          <h1 className="text-primary-yellow font-primary font-bold text-5xl sm:text-9xl text-center">
            Expo'26
          </h1>
          <h2 className="text-primary-yellow font-primary sm:text-2xl text-md xs:text-center transform translate-x-20 sm:translate-x-40">
            Where innovation finds
            <br className="sm:hidden block" /> expression
          </h2>
        </div>

        <div className="absolute z-1000 overflow-hidden flex justify-end gap-2 px-4 w-full" onClick={handleMenuClick}>
          <div className="bg-secondary-black rounded-full w-15 h-15 md:hidden">
            <div id="hamburger" className={`flex-col gap-1 items-center justify-center h-full transition-all duration-200 ${isMenuOpen ? "hidden" : "flex"}`}>
              <div className="bg-primary-yellow w-6 h-0.75"></div>
              <div className="bg-primary-yellow w-6 h-0.75"></div>
              <div className="bg-primary-yellow w-6 h-0.75"></div>
            </div>

            <div id="cross" className={`h-full w-full flex-col items-center justify-center transition-all duration-200 ${isMenuOpen ? "flex" : "hidden"}`}>
              <img src="/close.svg" alt="" />
            </div>
          </div>

          <div className="header-button">
            <h1 className="text-3xl transform -translate-x-1 font-primary">
              Register
            </h1>
          </div>

          <div className="header-button">
            <h1 className="text-3xl transform -translate-x-1 font-primary">
              Broucher
            </h1>
          </div>
        </div>
      </div>

      <div className={`absolute inset-0 z-50 backdrop-blur-[5px] flex-col items-end justify-start px-5 py-30 gap-4 transition-all duration-200 ${isMenuOpen ? "flex" : "hidden"}`}>
        <div className="header-button block!">
            <h1 className="text-2xl transform text-center -translate-x-1 font-primary">
              Register
            </h1>
          </div>

          <div className="header-button block!">
            <h1 className="text-2xl transform text-center -translate-x-1 font-primary">
              Broucher
            </h1>
          </div>
      </div>
    </>
  );
}

export default Header;
