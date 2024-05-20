import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTopOfPage, setIsTopOfPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        console.log(isTopOfPage);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="navbar">
      <div
        className={`${
          isTopOfPage ? "" : "bg-[#201934]"
        } md:px-16 sm:px-8 z-40 w-full fixed top-0 pt-5 pb-5 transition duration-300`}
      >
        <nav className="flex items-center justify-between">
          <a href="/" className="logo w-15">
            <div className="text-white text-2xl flex items-center">
              Iván Nehuen Duarte<span className="blinking-cursor"></span>
            </div>
          </a>
          <div
            className={`nav-list lg:block absolute right-10 lg:relative lg:top-0 transition-all duration-100 ease-in ${
              isOpen ? "top-[50px]" : "top-[-100px]"
            }`}
          >
            <ul
              className={`flex text-gray-300  ${
                isOpen ? "flex-col space-y-8" : "flex-row space-x-6"
              }`}
            >
              <li className="hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer">
                <a href="#about">About</a>
              </li>
              <li className="hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer">
                <a href="#projects">Projects</a>
              </li>
              {/* <li className="hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer">
                <a href="#technologies">Technologies</a>
              </li>   */}
              <li className="hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer">
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>
          <div className="lg:hidden block">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
