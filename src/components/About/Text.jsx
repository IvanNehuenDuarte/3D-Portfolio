// PACKAGES ============================>
import React from "react";
import { motion } from "framer-motion";
import { GiTechnoHeart } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";

// EN-ES ============================>
import { useTranslation } from "react-i18next";

const Text = () => {
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

  //* Translation */
  const { t, i18n } = useTranslation();

  const changeLanguage = (lgn) => {
    i18n.changeLanguage(lgn);
  };

  return (
    <motion.div
      variants={container}
      viewport={{ once: true, amount: 0.5 }}
      initial="hidden"
      whileInView="show"
    >
      <motion.div
        variants={item}
        className="bg-gradient-to-r from-[#8f145d] to-[#bd4a4a] inline-block mb-6"
      >
        <p className="p-1">{t("about.title")}</p>
      </motion.div>
      <motion.h1
        variants={item}
        className="text-3xl font-medium leading-10 mb-5"
      >
        {t("about.iCan")} <br className="lg:block hidden" />
        <span className="pink-text-gradient">{t("about.want")}</span>
      </motion.h1>
      <motion.p className="text-sm text-neutral-400" variants={item}>
        {t("about.desc")}
      </motion.p>
      <motion.div variants={item} className="grid grid-cols-2 gap-5 mt-10">
        <div className="grid grid-cols-1 gap-2">
          <div className="icon">
            <GiTechnoHeart size={24} className="text-pink-500" />
          </div>
          <div>
            <h1>{t("about.icon1")}</h1>
            <p className="text-[10px] text-neutral-400">
              {t("about.icon1Desc")}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2">
          <div className="icon">
            <FaPeopleCarry size={24} className="text-pink-500" />
          </div>
          <div>
            <h1>{t("about.icon2")}</h1>
            <p className="text-[10px] text-neutral-400">
              {t("about.icon2Desc")}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Text;
