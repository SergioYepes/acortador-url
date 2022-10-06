import React from 'react'
import style from "./itemsContainer.module.css"

function ItemsContainer({children}) {
  return (
    <div className={style.itemsContainer}>{children}</div>
  )
}

export default ItemsContainer