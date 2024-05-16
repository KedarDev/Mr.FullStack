import React from 'react'

const Button = ({label, iconURL}) => {
  return (
    <button className='flex justify-center items-center gap-2 px-7 py-4 border font-sans text-lg leading-none bg-slate-900 rounded-full text-white '>
{label}
<img src={iconURL} alt="arrow right icon" className='m1-2 rounded-full w-15 h-5' />
    </button>
  )
}

export default Button