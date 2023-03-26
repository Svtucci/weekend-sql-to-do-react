import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';



function DeleteItem({taskList, fetchTaskList}) {
    const removeTask = (e) => {
        console.log(`removeTask ${taskList.id}`);
        axios.delete(`/todo/${taskList.id}`).then((response) => {
            fetchTaskList();
        }).catch((error) =>{
            console.log(`Error in removeTask ${error}`);
            alert('Something went wrong!');
        })
    }
    return (
        <>
        <li>
            Task:{taskList.task} 
            <br />
            Description: {taskList.description}
            <br />
            <button onClick={(e) => removeTask(e)}>Delete</button>
            
        </li>
        <br />
        </>
    )
}

export default DeleteItem