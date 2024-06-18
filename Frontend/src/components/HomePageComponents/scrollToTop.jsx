import React from 'react'
import { upArrow } from '../../assets/index'
import { motion } from "framer-motion";

const scrollToTop = () => {
  return (
<div className="mobile-s:mt-[0px] mobile-s:left-[-0px] tablet:left-0.5 mobile-m:left-[3px] mobile-l:left-[2px] absolute  w-full flex justify-center items-center">
<a href="#hero" className="">
  <div className=" mobile-s:w-full  w-[90%] h-[64px] rounded-3xl  flex justify-center items-start p-2 ">
    <motion.dev
    animate={{y: [ 0, 24, 0]}}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType:'loop'
    }}
    >
    <img src={upArrow} alt="" className="w-[30px] desktop:w-[60px] desktop:h-[60px] laptop:w-[40px]  shadow-2xl  drop-shadow-2xl h-[30px]  " />
    </motion.dev>
  </div>
</a>
</div>



  )
}

export default scrollToTop