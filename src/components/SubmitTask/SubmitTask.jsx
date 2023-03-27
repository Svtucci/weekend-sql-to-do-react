import React from 'react';
import axios from 'axios';
import TaskList from './TaskList.jsx'
import '../App/App.css';

function SubmitTask({taskName, 
                    setTaskName, 
                    taskDescription, 
                    setTaskDescription, 
                    fetchTaskList,
                    completionStatus,
                    setCompletionStatus}) {
    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/todo', {
            task: taskName,
            description: taskDescription,
            completionstatus: false,
        }).then((response) => {
            setTaskName(''); 
            setTaskDescription('');
            setCompletionStatus('');
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
                   value={taskName}
                   onChange={(e) => setTaskName(e.target.value)} />
                   <br />
                   <br />
            Description:
            <input type="text"
                   id={taskDescription}
                   value={taskDescription}
                   onChange={(e) => setTaskDescription(e.target.value)} />
                   <br />
                   <br />
            <button type="submit">Add Task</button>
        </form>

        
    );
}

export default SubmitTask; 