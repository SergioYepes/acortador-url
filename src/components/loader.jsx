import React from 'react'
import style from "./loader.module.css"

function Loader({item,id}) {
    
    if (item===null){
        return <Container>loading...</Container>
    }
    if(item===undefined){
        return <Container>URL not found {id}</Container>
    }
    return (
    <Container>Redirecting to {item.url}</Container>
  )
}


function Container({children}){
    return <div className={style.loaderCont}>{children}</div>
}
export default Loader