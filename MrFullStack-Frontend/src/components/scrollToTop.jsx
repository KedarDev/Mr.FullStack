import React from 'react'
import { upArrow } from '../assets'

const scrollToTop = () => {
  return (
    <div className='h-[100px]'>
        <a href="#">
        <img src={upArrow} alt="" className='mobile-s:left-[146px] absolute left-[600px] w-[25px] h-[25px]' />
        </a>
    </div>
  )
}

export default scrollToTop