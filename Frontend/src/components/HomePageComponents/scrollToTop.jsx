import React from 'react'
import { upArrow } from '../../assets/index'
import { motion } from "framer-motion";
import { upArrowDark } from '../../assets/index';

const scrollToTop = () => {
  return (
<div className="dark:lg:w-screen dark:xl:ml-[75px] dark:md:ml-[23px] md:ml-[21px] dark:xs:ml-[10px] xs:ml-[15px] dark:bg-black desktop:ml-[-1px]  tablet:ml-[-2px] mobile-m:ml-[-1%] mobile-l:ml-[-1%] mobile-s:mt-[0px] mobile-s:left-[-0px] tablet:left-0.5 mobile-m:left-[3px] mobile-l:left-[2px] absolute  w-full flex justify-center items-center">
<a href="#hero" className="">
  <div className="dark:lg:w-screen  dark:xl:ml-[10px] mobile-s:bg-white dark:bg-black mobile-s:w-full  w-[90%] h-[64px] rounded-3xl  flex justify-center items-start p-2 ">
    <motion.dev
    animate={{y: [ 0, 24, 0]}}
    transition={{
      duration: 1.5,
      repeat: Infinity,
      repeatType:'loop'
    }}
    >
      <img className='desktop:ml-[6.5em] laptop-l:ml-[24px] laptop:ml-[24px] tablet:ml-[26px] mobile-l:ml-[14px]  mobile-m:ml-[22px] mobile-s:ml-[25px] w-[30px] desktop:w-[60px] desktop:h-[60px] laptop:w-[40px]  shadow-2xl  drop-shadow-2xl h-[30px]   ' src={upArrowDark} alt="" />
    <img src={upArrow} alt="" className="xl:ml-[60px]  lg:ml-[10px] desktop:ml-[6.5em] laptop-l:ml-[24px] laptop:ml-[24px] tablet:ml-[26px] mobile-l:ml-[14px]  mobile-m:ml-[22px] mobile-s:ml-[25px] w-[30px] desktop:w-[60px] desktop:h-[60px] laptop:w-[40px]  shadow-2xl  drop-shadow-2xl h-[30px]  " />
    </motion.dev>
  </div>
</a>
</div>



  )
}

export default scrollToTop