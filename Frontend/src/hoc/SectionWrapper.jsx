import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// hoc have other components inside of it
const SectionWrapper = (Component, idName) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} bg-white max-w-7x1 mx-auto relatice z-0`}
      >
        {/* navagate to section */}
        <span className="hash-span" id={idName}>
            &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  }


export default SectionWrapper;
