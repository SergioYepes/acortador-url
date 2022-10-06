import React ,{ useState }from 'react'
import style from "./createForm.module.css"

function CreateForm({dispatch}) {
    const [url,setUrl]=useState("")
    function handleChange(e){
        const value = e.target.value
        setUrl(value)
    }
    function handleSubmit(e){
        e.preventDefault();
        dispatch({ type: "ADD", data: url });
    }
  return (
    <form onSubmit={handleSubmit}>
        <input className={style.input} value={url} onChange={handleChange} type="text" placeholder='Type an URL...' />
        {/* <button>Create URL</button> */}
    </form>
  )
}

export default CreateForm