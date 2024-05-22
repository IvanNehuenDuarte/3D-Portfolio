// PACKAGES ============================>
import Hamburger from "hamburger-react";
import { useEffect, useState } from "react";

// EN-ES ============================>
import { useTranslation } from "react-i18next";

// TRANSLATE ========================>
import LanguageToggle from "../Translation/Translate.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTopOfPage, setIsTopOfPage] = useState(true); // Inicialmente en la parte superior de la página

  useEffect(() => {
    const handleScroll = () => {
      setIsTopOfPage(window.scrollY === 0); // Verifica si estás en la parte superior de la página
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manejar el clic en el enlace y ajustar el desplazamiento
  const handleLinkClick = (event, target) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    const targetElement = document.querySelector(target); // Seleccionar el elemento de destino
    if (targetElement) {
      const yOffset = -100; // Ajuste personalizado de desplazamiento
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset; // Calcular la posición de desplazamiento
      window.scrollTo({ top: y, behavior: "smooth" }); // Desplazarse suavemente a la posición deseada
      window.location.hash = target;
    }
  };

  //** Translation */
  const { t } = useTranslation();

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
                <LanguageToggle />
              </li>
              <li className="hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer">
                <a href="#about" onClick={(e) => handleLinkClick(e, "#about")}>
                  {t("nav.about")}
                </a>
              </li>
              <li className="hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer">
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, "#projects")}
                >
                  {t("nav.projects")}
                </a>
              </li>
              <li className="hover:text-[#ec008c] transition-all duration-200 ease-in cursor-pointer">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact")}
                >
                  {t("nav.contact")}
                </a>
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
