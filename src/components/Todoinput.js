import React, {useState} from 'react'
import './Todoinput.css'

function Todoinput(props) {
 const [inputText,setInputText] = useState()
 const handleEnterPress=(e)=>{
  if (e.keyCode===13)
    props.addList(inputText)
  setInputText("")
 }

  return (
   <div className='inputcontainer'>
    <input type='text' className="input-box-todo" placeholder="Enter your todo list..." 
    vlaue={inputText} onChange={e=>{
        setInputText(e.target.value)
    }}
    onKeyDown={handleEnterPress}
    ></input>
    <button className="add-btn"
     onClick={()=>{
      props.addList(inputText)
      setInputText("")
    }}>+</button>
    
   </div>

  )
}

export default Todoinput
