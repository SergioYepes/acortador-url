import React from 'react'
import style from "./item.module.css"

function Item({i}) {
  return (
    <div key={i.shortUrl} className={style.itemContainer}>
        <div className={style.itemInfoCont}>
            <span className={style.itemInfoTag}>URL: </span>
            <span>{i.url}</span>
        </div>
        <div className={style.itemInfoCont}>
            <span className={style.itemInfoTag}>SHORTURL: </span>
            <span>
                <a href={`http://localhost:3000/u/${i.shortUrl}`} target="_blanck">
                http://localhost:3000/u/{i.shortUrl}
                </a>
            </span>
        </div>
        <div className={style.itemInfoCont}>
            <span className={style.itemInfoTag}>VIEWS: </span>
            <span>{i.views} views</span>
        </div>
        {/* <div>{i.url}</div>
        <div>{i.shortUrl}</div>
        <div>{i.views}</div> */}
    </div>
  )
}

export default Item