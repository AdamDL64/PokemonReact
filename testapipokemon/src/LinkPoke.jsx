import React, { useState } from 'react'
import { FcCloseUpMode, FcCancel } from "react-icons/fc";
const LinkPoke = () => {

    const [link, setLink]=useState(false)

    const handleTogle =()=>{
        setLink((check)=>!check)
    }
  return (
    <button onClick={handleTogle}>
       {link ? <FcCloseUpMode/> : <FcCancel/>}
    </button>
  )
}

export default LinkPoke