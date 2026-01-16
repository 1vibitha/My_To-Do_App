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
  }, [todos])

  const handleEdit = async (id) => {
    await axios.put(`${backendUrl}/update/${id}`)
  }

  const handleDelete = async (id) => {
    await axios.delete(`${backendUrl}/delete/${id}`)
  }

  return (
    <div className="main"> 
      <div className="head">
        <img src={icon} alt="icon" style={{width:"50px", height:"50px"}}/>  
        <p>Your To-Do Tasks</p>
      </div>
      <div className="content">
        {
          todos.length === 0 ? 
          <div className="record">No tasks found. Add some!</div> :
          todos.map((todo, index) => (
            <div key={index} className="content2"> 
              <div className="all_task" onClick={() => handleEdit(todo._id)}>
                <img src={todo.done ? tick : not_tick} alt="status" />
                <p className={todo.done ? "linethrough" : ""}>{todo.task}</p>
              </div>
              <img 
                src={delete_task} 
                alt="delete" 
                className="delete-icon" 
                onClick={(e) => {
                  e.stopPropagation(); // Prevents triggering handleEdit when deleting
                  handleDelete(todo._id);
                }}
              />
            </div>
          ))
        }
      </div>
      <Link to="/" className="nav-link">Add New Task</Link>
    </div>
  )
}

export default Home