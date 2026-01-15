import React from 'react'
import './Create.css'
import icon from './assets/todo_icon.png'
import { useState } from "react"
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"


const backendUrl = import.meta.env.VITE_BACKEND_URL;


const Create = () => {
    
    const [task, setTask] = useState("")
    const navigate = useNavigate()
    const handleAdd = async() => {

        const newtask = await axios.post(backendUrl+'/add' , {task:task})
        console.log(newtask);
        setTask("")
        navigate('/home')
        

    }

  return (
    <div className="main"> 
    <div className="head">
    <img src={icon} alt=""  style={{width:"40px", height:"40px"}}/>  
      <p >Add Your To-Do Task</p>
    </div>
   
      <div className="mainbox">
        <input type="text" placeholder="Enter Your Task" value={task} onChange={(e) => {setTask(e.target.value)}} />
      <button className="add" onClick={() => handleAdd() } >Add+</button>  
      </div>
      <Link to="/home" className="nav-link">To-Do List ..</Link>
      <div>
       

      </div>
          
    </div>
  )
}

export default Create
