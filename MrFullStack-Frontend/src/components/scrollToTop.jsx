import React from 'react'
import { upArrow } from '../assets'

const scrollToTop = () => {
  return (
    <div className='h-[200px]'>
        <a href="#">
        <img src={upArrow} alt="" className=' absolute left-[600px] w-[50px] h-[50px]' />
        </a>
    </div>
  )
}

export default scrollToTop