import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Styles } from "../../Styles";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/Motion";

const Contact = () => {

  const VITE_APP_EMAILJS_RECEIVERID = import.meta.env.VITE_APP_EMAILJS_RECEIVERID;
  const VITE_APP_EMAILJS_TEMPLATEID = import.meta.env.VITE_APP_EMAILJS_TEMPLATEID;


  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      emailjs
      .send(
        "service_c6iynxs",
        VITE_APP_EMAILJS_TEMPLATEID,
        {
          from_name: form.name,
          to_name: "Mr.Fullstack",
          from_email: form.email,
          to_email: "mrfullstacksoftwaredeveloper@gmail.com",
          message: form.message,
        },
      VITE_APP_EMAILJS_RECEIVERID
      )
        .then(
          () => {
            setLoading(false);
            alert("Thank you. I will get back to you as soon as possible.");

            setForm({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            setLoading(false);
            console.log(error);

            alert("An error has occured");
          }
        )
    );
  };

  return (
    <div 
    className="mt-[300px] dark:bg-black h-screen flex-col-reverse flex overflow-hidden"
    // className="dark:xs:mt-[200px]  2xl:ml-[480px] 2xl:w- 2xl:w- dark:xl:mt-[400px] lg:h-fit lg:ml-[400px] dark:lg:mt-[-500px] lg:mt-[-800px] md:ml-[50px] md:mt-[100px] xs:mt-[-900px] dark:bg-black laptop-l:ml-[25px] laptop:ml-[25px] mobile-s:ml-[28px] mobile-m:ml-[24px] mobile-l:ml-[10px] desktop:mt-[-50em] desktop:w-[60%] desktop:h-[80%] desktop-s:h-fit laptop-l:mt-[-900px] desktop:ml-[35em]  laptop:mt-[-750px] tablet:mt-[-200px] mobile-s:mt-[-400px] mt-[-80%]  h-screen xl:mt-12 xl:flex-row flex-col-reverse flex  overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0, 2, 1)}
        className="flex-[0.75] black-gradient mobile-s:rounded-e-3xl rounded-e-3xl p-8 rounded-2x1 "
      >
        <p className={`${Styles.sectionSubText1} desktop:text-[50px]  mobile-s:text-white  `}>Get in touch</p>
        <h3 className={`${Styles.heroHeadText1} desktop:text-[80px]   mobile-s:text-white `}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" 2xl:w-[600px] mt-5 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className=" desktop:text-[40px] mobile-s:text-[15px] text-[#000000] mobile-s:text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Whats your name?"
              className=" desktop:text-[30px]  mobile-s:text-[10px] bg-[#000] py-4 px-6 placeholder:text-[#FFFFFF]  mobile-s:text-white text-{#FFFFFF} rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className= " desktop:text-[40px]  mobile-s:text-[15px] text-black  mobile-s:text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className=  " desktop:text-[30px]  mobile-s:text-[10px] bg-black py-4 px-6 placeholder:text-[#FFF]  mobile-s:text-white text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className=" desktop:text-[40px]  mobile-s:text-[15px] text-[#000000]  mobile-s:text-white font-medium mb-4">
              {" "}
              Your Message
            </span>
            <textarea
              rows="10"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=" What would you like to say? "
              className=" desktop:text-[30px]  mobile-s:text-[10px] placeholder:text-[#FFF] bg-[#000] py-4 px-6 text-{#FFF} mobile-s:text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="desktop:text-[50px]  mobile-s:text-start  mobile-s:w-[80px] mobile-s:ml-[46px] mobile-s:h-[30px] bg-[#000] py-3 px-8 outline-none w-fit text-[#FFF] font-bold shadow-md shadow-[#FFF] rounded-xl"
          >
            <div className="mobile-s:ml-[-11px] mobile-s:mt-[-6px]">
            {loading ? "Sending..." : "Send"}
            </div>
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      ></motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
