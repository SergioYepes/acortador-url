import React from 'react'
import style from "./mainCont.module.css"

function MainContainer({children}) {
  return (
    <div className={style.mainCont}>{children}</div>
  )
}

export default MainContainer