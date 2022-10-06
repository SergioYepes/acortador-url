import React, { useEffect } from 'react'
import CreateForm from '../components/CreateForm'
import Item from '../components/Item'
import ItemsContainer from '../components/ItemsContainer'
import MainContainer from '../components/MainContainer'
import useReduceApp from '../store/store'

function Create() {
    const[state,dispatch]=useReduceApp()

    useEffect(()=>{
      dispatch({type:"LOAD"}) 
    },[])
  return (
    <MainContainer>
        <CreateForm dispatch={dispatch}/>
        <ItemsContainer>
            {state?.items.map((i)=>(
                <Item i={i} key={crypto.randomUUID()}/>
            ))}
        </ItemsContainer>
    </MainContainer>
  )
}

export default Create