import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";

const Poster = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      viewport={{ once: true, amount: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="md:w-10/12 mx-auto w-11/12 orange-pink-gradient mt-20mb20
    md:block hidden"
    >
      <div className="grid sm:grid-cols-2 p-8 mb-5">
        <div className="w-10/12 mx-auto flex flex-col justify-center xl:text-4xl text-3xl">
          <span>I'M AVAILABLE</span>
          <span>FOR FREELANCE WORK</span>
        </div>
        <div className="flex flex-col justify-center">
          <p className="xl:text-[13px] text-[10px] 2-10/12 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui autem
            id, facilis architecto quaerat laborum porro veniam itaque
            repudiandae ipsum?
          </p>
          <div className="w-32 h-10 flex items-center justify-center bg-white rounded-full">
            <a
              href="#contact"
              className="text-[#301934] flex items-center justify-between xl:text-base text-[12px]"
            >
              Hire me <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Poster;
