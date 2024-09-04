import React from "react";
import { motion } from "framer-motion";
import { Styles } from "../Styles";
import { staggerContainer } from "../utils/Motion";

// hoc have other components inside of it
const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${Styles.padding} bg-white dark:bg-black relatice z-0`}
      >
        {/* navagate to section */}
        <span className="hash-span " id={idName}>
            &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  }


export default SectionWrapper;
