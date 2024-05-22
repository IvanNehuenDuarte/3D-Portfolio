// PACKAGES ============================>
import React from "react";
import { useSpring, animated } from "@react-spring/web";

// EN-ES ============================>
import { useTranslation } from "react-i18next";

const ProjectMobile = () => {
  const imageCount = 9;
  const springConfig = { mass: 5, tension: 350, friction: 40 };
  const imageProps = Array.from({ length: imageCount }, () => {
    const [props, api] = useSpring(() => ({
      xys: [0, 0, 1],
      config: springConfig,
    }));
    return { props, api };
  });

  const imageLinks = [
    "https://hotel-booking-app-rose.vercel.app/",
    "https://next-js-portfolio-eight-lovat.vercel.app",
    "https://react-blog-app-delta.vercel.app",
    "https://hero-landing-page-mu.vercel.app",
    "https://ed-tech-responsive-website.vercel.app",
    "https://cafe-website-lemon.vercel.app",
    "/",
    "https://simple-portfolio-website-sigma.vercel.app",
    "/",
  ];

  //** Translation */
  const { t, i18n } = useTranslation();

  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn);
  };

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
                href={imageLinks[index]}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="object-cover w-full h-full absolute"
                  src={`/project${index + 1}.png`}
                  alt=""
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectMobile;
