import React from 'react'
import style from "./Display.module.css"
function Display({displayVal}) {
  return (
    <>
    <input type="text" className={style.display} value={displayVal}/>
    
    </>
  )
}

export default Display