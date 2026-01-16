import React, { useEffect, useState } from 'react'
import './Home.css'
import icon from './assets/todo_icon.png'
import axios from "axios"
import tick from './assets/tick.png'
import not_tick from './assets/not_tick.png'
import delete_task from './assets/delete.png'
import { Link } from "react-router-dom"

const backendUrl = import.meta.env.VITE_BACKEND_URL;


const Home = () => {

  const [todos, setTodos] = useState([])

  useEffect(() => {

    axios.get(`${backendUrl}/get`)
    .then((result) => setTodos(result.data))
    .catch((err) => console.log(err))
    
  },[todos])

  const handleEdit = async (id) => {

    const todo_edit = await axios.put(`${backendUrl}/update/${id}`)
    console.log(todo_edit);
    

  }

  const handleDelete = async (id) => {

    const todo_delete = await axios.delete(`${backendUrl}/delete/${id}`)
    console.log(todo_delete);

  }

  return (
     <div className="main"> 
       <div className="head">
       <img src={icon} alt=""  style={{width:"40px", height:"40px"}}/>  
         <p >Your To-Do Tasks</p>
       </div>
       <div className="content">
          {
            todos.length === 0 ? 
            <div className="record">No record !</div> :
            todos.map((todo, index) => (
              <div  key ={index}  className="content2"> 
              <div className="all_task" >
                <img src={todo.done ? tick : not_tick} alt=""
                  onClick={() => {handleEdit(todo._id)}} />
                <p className={`${todo.done ? "linethrough" : ""}`} >{todo.task}</p>
                </div>
        
                            
                <img 
                  src={delete_task} 
                  alt="delete" 
                  className="delete-icon" // Added this class
                  onClick={() => handleDelete(todo._id)}
                />
              </div>
            ))
          }
       </div>
             <Link to="/" className="nav-link">Add To-Do Task</Link>
       
             
       </div>
  )
}

export default Home
z