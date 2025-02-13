import React, { useState } from "react";
import { HamburgerMenu } from "../design/Header";
import MenuSvg from "../../assets/svg/MenuSvg";
import { enablePageScroll, disablePageScroll } from "scroll-lock";

const navOptions = ["About", "Experience", "Projects", "Contact"];

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      } `}
    >
      <div className=" flex justify-between items-center   shadow-md  px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <div className="ml-10">
          <h2>Portfolio</h2>
        </div>
        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex  lg:bg-transparent`}
        >
          <div className="relative z-2 m-auto lg:flex-row">
            <ul className="flex md:space-x-10 relative z-2  flex-col items-center justify-center m-auto lg:flex-row">
              {navOptions.map((option) => (
                <a
                  className="block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-gray-400 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold"
                  key={option}
                  href={`#${option}`}
                  onClick={() => setOpenNavigation(false)}
                >
                  {option}
                </a>
              ))}
            </ul>
          </div>
          <HamburgerMenu />
        </nav>

        <button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </button>
      </div>
    </div>
  );
};

export default Header;
