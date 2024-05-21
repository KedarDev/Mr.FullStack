import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
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
          "service_unb3dob",
          "template_p6gqlfq",
          {
            from_name: form.name,
            to_name: "Kedar",
            from_email: form.email,
            to_email: "kedar.h.dev@gmail.com",
            message: form.message,
          },
          "gg10l-qDPbf_z9ZMT"
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
    <div className=" tablet:mt-[-200px] mobile-s:mt-[-400px] mt-[-80%]  h-screen xl:mt-12 xl:flex-row flex-col-reverse flex  overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0, 2, 1)}
        className="flex-[0.75] bg-white p-8 rounded-2x1 "
      >
        <p className={styles.sectionSubText1}>Get in touch</p>
        <h3 className={styles.heroHeadText1}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="mobile-s:text-[15px] text-[#000000] font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Whats your name?"
              className=" mobile-s:text-[10px] bg-[#000] py-4 px-6 placeholder:text-[#FFFFFF] text-{#FFFFFF} rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className= " mobile-s:text-[15px] text-black font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className=  " mobile-s:text-[10px] bg-black py-4 px-6 placeholder:text-[#FFF] text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className=" mobile-s:text-[15px] text-[#000000] font-medium mb-4">
              {" "}
              Your Message
            </span>
            <textarea
              rows="10"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=" What would you like to say? "
              className=" mobile-s:text-[10px] placeholder:text-[#FFF] bg-[#000] py-4 px-6 text-{#FFF} rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className=" mobile-s:text-start  mobile-s:w-[80px] mobile-s:ml-[62px] mobile-s:h-[30px] bg-[#000] py-3 px-8 outline-none w-fit text-[#FFF] font-bold shadow-md shadow-[#FFF] rounded-xl"
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
