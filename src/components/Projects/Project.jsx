// PACKAGES ============================>
import React from "react";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";

// EN-ES ============================>
import { useTranslation } from "react-i18next";

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s}) translateZ(${s}px)`;

const calc = (x, y) => {
  const BUFFER = 50;

  return [y / 50, x / 50, 1.1];
};

const Project = () => {
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
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { type: "spring" } },
  };

  //** Translation */
  const { t, i18n } = useTranslation();

  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn);
  };

  const imageLinks = t("projects.list", { returnObjects: true });

  //** Manejo de imagenes de proyectos */
  const imageCount = imageLinks.length;

  const springConfig = { mass: 5, tension: 350, friction: 40 };

  const imageProps = Array.from({ length: imageCount }, () => {
    const [props, api] = useSpring(() => ({
      xys: [0, 0, 1],
      config: springConfig,
    }));
    return { props, api };
  });

  return (
    <div id="projects" className="w-11/12 md:w-10/12 mx-auto mt-32 mb-40">
      <div className="text-center mb-20">
        <span className="border-b-2 text-4xl pink-text-gradient border-pink-600">
          {t("projects.title")}
        </span>
        <div className="mt-5 text-xl text-neutral-200">
          {t("projects.desc")}
        </div>
      </div>
      <div className="w-11/12 md:w-11/12 max-auto">
        <motion.div
          variants={container}
          viewport={{ once: true, amount: 0.5 }}
          initial="hidden"
          whileInView="show"
          className="grid mx-auto gap-2 xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
        >
          {imageProps.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className="w-full relative flex flex-col items-center"
            >
              <a
                href={imageLinks[index].url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-[250px] block"
              >
                <animated.img
                  onMouseMove={(e) => {
                    const { clientX: x, clientY: y } = e;
                    return image.api.start({ xys: calc(x, y) });
                  }}
                  onMouseLeave={() => image.api.start({ xys: [0, 0, 1] })}
                  style={{ transform: image.props.xys.to(trans) }}
                  className="object-cover object-left-top w-full h-full"
                  src={`/project${index + 1}.png`}
                  alt=""
                />
              </a>
              <div className="text-center mt-2 text-neutral-200">
                {imageLinks[index].desc}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
