import React from 'react';
import axios from 'axios';
import TaskList from './TaskList.jsx'

function SubmitTask({taskName, setTaskName, taskDescription, setTaskDescription, fetchTaskList}) {
    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/todo', {
            task: taskName,
            description: taskDescription,
        }).then((response) => {
            setTaskName('');
            setTaskDescription('');
            fetchTaskList();
        }).catch((error) => {
            console.log(`Error in POST ${error}`)
            alert('Something went wrong')
        })
    }
    return(

        <form onSubmit={submitForm}>
            Task:
            <input type="text"
                   id={taskName}
                   onChange={(e) => setTaskName(e.target.value)} />
                   <br />
            Description:
            <input type="text"
                   id={taskDescription}
                   onChange={(e) => setTaskDescription(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>

        
    );
}

export default SubmitTask; 