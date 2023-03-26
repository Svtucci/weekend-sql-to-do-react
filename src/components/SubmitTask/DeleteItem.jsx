import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';

// This is named delete, but it moreso became the DELETE and COMPLETED compoent for the buttons 
// as I was getting confused on how to separate the two, I will complete it here and try to move 
// after the assignment is compelete 

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
            <button onclick>Completed</button>
        </li>
        <br />
        </>
    )
}

export default DeleteItem