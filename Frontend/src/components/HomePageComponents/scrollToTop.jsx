import React from 'react'
import { upArrow } from '../../assets/index'
import { motion } from "framer-motion";
import { upArrowDark } from '../../assets/index';

const ScrollToTop = () => {
  return (
<div
className=" dark:bg-black  absolute w-full dark:laptop:ml-0 tablet:ml-[14px] mobile:ml-[21px] flex justify-center items-center mobile-s:ml-[12px]"
>
<a href="#hero" className="">
  <div
  className="dark:bg-black dark:desktop:ml-[50px]  desktop:ml-[2px] dark:laptop:ml-[-10px] laptop:ml-[-12px]  h-[64px] rounded-3xl flex justify-center items-start p-2 "
  >
    <motion.div
    animate={{y: [ 0, 24, 0]}}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType:'loop'
    }}
    >
      <img
      className="w-[30px] shadow-2xl drop-shadow-2xl h-[30px] mt-[-20px] mobile:ml-[5px]" src={upArrowDark} alt="" 
      />
    <img src={upArrow} alt=""
    className="shadow-2xl drop-shadow-2xl h-[30px]" 
    />
    </motion.div>
  </div>
</a>
</div>



  )
}

export default ScrollToTop;