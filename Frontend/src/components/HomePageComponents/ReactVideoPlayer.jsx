import React from 'react'
import {DefaultPlayer as Video} from 'react-html5video' 
// import 'react-html5video/dist/style.css'
import { AIVideo3,  fullstack } from '../../assets';

const ReactVideoPlayer = () => {
  return (
    <Video  className="w-screen h-screen ml-[100px]">
        <source src={AIVideo3}  poster={fullstack} type='video/mp4' />
    </Video>
  )
}

export default ReactVideoPlayer