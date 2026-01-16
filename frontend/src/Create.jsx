import React, { useState } from 'react';
import './Create.css';
import icon from './assets/todo_icon.png';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Create = () => {
    const [task, setTask] = useState("");
    const navigate = useNavigate();

    const handleAdd = async () => {
        if (!task) return;
        await axios.post(`${backendUrl}/add`, { task: task });
        setTask("");
        navigate('/home');
    }

    return (
        <div className="create-container"> {/* Updated ClassName here */}
            <div className="head">
                <img src={icon} alt="icon" style={{ width: "50px", height: "50px" }} />
                <p>Add Your To-Do Task</p>
            </div>

            <div className="mainbox">
                <input 
                    type="text" 
                    placeholder="Enter Your Task" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} 
                />
                <button className="add" onClick={handleAdd}>Add+</button>
            </div>
            
            <Link to="/home" className="nav-link">View To-Do List →</Link>
        </div>
    );
}

export default Create;