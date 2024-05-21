import React, { useEffect, useState } from "react";
import { motion, spring } from "framer-motion";

import iconJs from "/javascript.png";
import iconHtml from "/html-5.png";
import iconCss from "/css-3.png";
import iconNode from "/node-js.png";
import iconExpress from "/express.png";
import iconSql from "/sql.png";
import iconMongo from "/mongodb.png";
import iconReact from "/react.png";
import iconThree from "/threejs.png";

const LeftPart = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 30 },
    show: { opacity: 1, x: 0, transition: { type: "spring" } },
  };

  // Icono scroll down
  const [showScrollDown, setShowScrollDown] = useState(false);

  // Condición de si se muestra u oculta el icono
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowScrollDown(true);
      } else {
        setShowScrollDown(false);
      }
    };

    // Ejecutamos si scroll está en Y = 0
    handleScroll();

    // Eliminamos icono una vez que haga escroll
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (event, target) => {
    event.preventDefault();
    const targetElement = document.querySelector(target);
    if (targetElement) {
      const yOffset = -100; // Ajusta este valor para cambiar el desplazamiento vertical
      const y =
        targetElement.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.location.hash = target; // Actualizar la URL con el hash
    }
  };

  return (
    <div className="relative md:mt-0 mt-16">
      <motion.div
        className="space-y-5"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="pink-text-gradient">
          Hi there
        </motion.p>
        <motion.h1 className="xl:text-5xl md:text-3xl text-3xl" variants={item}>
          I'M <span className="blue-text-gradient">IVÁN</span>{" "}
        </motion.h1>
        <motion.h1 className="xl:text-5xl md:text-3xl text-3xl" variants={item}>
          FULL STACK <span className="uppercase">developer</span>{" "}
        </motion.h1>
        <motion.p className="text-sm italic mb-10" variants={item}>
          with 1+ years of experience.{" "}
        </motion.p>
      </motion.div>
      <motion.div
        className="w-32 h-10 mt-16 bg-[#ec008c] hover:bg-pink-600 transition-all ease-in duration-200 rounded-xl flex items-center justify-center cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p>Hire me</p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-[12px] italic my-5 w-80 text-purple-300 "
      >
        "The best error message is the one that never shows up." - Thomas Fuchs
      </motion.p>
      <div className="flex space-x-4 mt-5">
        {[
          iconJs,
          iconHtml,
          iconCss,
          iconExpress,
          iconNode,
          iconReact,
          iconThree,
          iconSql,
          iconMongo,
        ].map((icon, index) => (
          <motion.img
            key={index}
            src={icon}
            alt={`Icon ${index + 1}`}
            className="w-8 h8"
            whileHover={{ scale: 1.5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        ))}
      </div>

      {showScrollDown && (
        <div className="scroll-down relative">
          <p className="-rotate-90 absolute -bottom-24 -right-8 text-slate-300">
            Scroll Down
          </p>
          <div className="absolute top-36 opacity-60 right-0 w-7 h-14 border-solid border-2 border-gray-500 rounded-2xl flex items-center justify-center">
            <a
              href="#about"
              onClick={(e) => handleScrollToSection(e, "#about")}
            >
              <motion.div
                className="w-3 h-3 bg-gradient-to-t from-[#fc6767] to-[#ec008c] rounded-full"
                animate={{ y: [0, 16, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              ></motion.div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeftPart;
