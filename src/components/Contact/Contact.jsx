// PACKAGES ============================>
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

// EN-ES ============================>
import { useTranslation } from "react-i18next";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_calv2t8",
        "template_ge3cptq",
        form.current,
        "26MRgwkusUXVNfu7S"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  //** Translation */
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const container = {
    hidden: { opacity: 0, x: 100 },
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

  return (
    <div className="mb-20" id="contact">
      <div className="md:w-10/12 w-11/12 mx-auto">
        <div className="pink-text-gradient inline-block mb-12">
          <h2 className="text-4xl p-2 px-1">{t("contact.title")}</h2>
        </div>
        <div className="md:w-8/12 w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl text-white mb-5"
          >
            {t("contact.title2")} &#128075;
          </motion.div>
          <p className="text-xl text-neutral-200 mb-5">
            {t("contact.my_email")}:{" "}
          </p>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={container}
            initial={{ opacity: 0, x: 150 }}
            viewport={{ once: true, amount: 0.5 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            action=""
            className="border-2 border-neutral-700 rounded-xl p-8"
          >
            <motion.div
              variants={item}
              className="grid sm:grid-cols-2 grid-cols-1 sm:gap-20 gap-6"
            >
              <div className="flex flex-col space-y-4">
                <label htmlFor="">{t("contact.your_name")}</label>
                <input
                  type="text"
                  placeholder="Iván"
                  required={true}
                  name="to_name"
                  className="w-full h-10 text-black bg-white px-2 caret-pink-600 rounded-sm"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label htmlFor="">{t("contact.your_email")}</label>
                <input
                  type="text"
                  placeholder="test@gmail.com"
                  required={true}
                  name="from_name"
                  className="w-full h-10 text-black bg-white px-2 caret-pink-600 rounded-sm"
                />
              </div>
            </motion.div>
            <motion.div variants={item} className="flex flex-col mt-10">
              <label htmlFor="">{t("contact.message")}</label>
              <textarea
                name="message"
                id=""
                cols="20"
                rows="8"
                required={true}
                className="bg-white text-black p-4 mt-4 rounded-md"
              ></textarea>
            </motion.div>
            <motion.div variants={item} className="flex justify-center mt-10">
              <motion.button
                variants={item}
                className="bg-pink-700 hover:bg-pink-600 transition-all ease-in duration-200 px-32 py-3 rounded-full"
              >
                Submit
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
