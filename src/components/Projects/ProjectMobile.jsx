// PACKAGES ============================>
import React from "react";
import { useSpring } from "@react-spring/web";

// EN-ES ============================>
import { useTranslation } from "react-i18next";

const ProjectMobile = () => {
  //** Translation */
  const { t, i18n } = useTranslation();

  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn);
  };

  const imageLinks = t("projects.list", { returnObjects: true });

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
    <div id="projects" className="w-full mx-auto mt-32 mb-40">
      <div className="text-center mb-20">
        <span className="border-b-2 text-4xl pink-text-gradient border-pink-600">
          {t("projects.title")}
        </span>
        <div className="mt-5 text-xl text-neutral-200">
          {t("projects.desc")}
        </div>
      </div>
      <div className="w-full max-auto px-2">
        <div className="grid gap-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
          {imageProps.map((image, index) => (
            <div className="w-full h-[250px] relative" key={index}>
              <a
                href={imageLinks[index].url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="object-cover w-full h-full absolute"
                  src={`/project${index + 1}.png`}
                  alt=""
                />
              </a>
              <div className="text-center mt-2 text-neutral-200">
                {imageLinks[index].desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMobile;
