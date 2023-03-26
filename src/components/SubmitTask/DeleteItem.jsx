import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';

// This is named delete, but it moreso became the DELETE and COMPLETED compoent for the buttons 
// as I was getting confused on how to separate the two, I will complete it here and try to move 
// after the assignment is compelete 

function DeleteItem({taskList, fetchTaskList}) {
    const [completed, setCompleted] = useState(false);

    const removeTask = (e) => {
        console.log(`removeTask ${taskList.id}`);
        axios.delete(`/todo/${taskList.id}`).then((response) => {
            fetchTaskList();
        }).catch((error) =>{
            console.log(`Error in removeTask ${error}`);
            alert('Something went wrong!');
        })
    }
    const completeTask = () => {
        console.log(`completeTask ${taskList.id}`);
        axios.put(`/todo/${taskList.id}`).then((response) => {
            setCompleted(true);
            fetchTaskList();
        }).catch((error) => {
            console.log(`Error in completetask ${error}`);
            alert('Something went wrong!');
        })
    }

    // let completionstatus;
    // if (taskList.completionstatus === true) {
    //     completionstatus = "Yes"
    // } else if (taskList.completionstatus === false) {
    //     completionstatus = "No"
    // }
    
    // const completedTaskStrike = () => {
    //     if (completionstatus === "Yes") {
    //         return 'line-through';
    //     } else {
    //         return 'none'
    //     }
    // };
    

    return (
        <>
        <li>
            Task:{taskList.task} 
            <br />
            Description: {taskList.description}
            <br />
            <button onClick={(e) => removeTask(e)}>Delete</button>
            {/* <button onClick={() => completeTask()}>Completed</button> */}
        </li>
        <br />
        </>
    )
}

export default DeleteItem


// style={{ textDecoration: completedTaskStrike()}}