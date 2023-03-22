import React from 'react';
import axios from 'axios';
import SubmitTask from './SubmitTask.jsx';
import { useState, useEffect} from 'react';


function TaskList () {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [listOfTasks, setListOfTasks] = useState([]);

    const fetchTaskList = () => {
        axios.get('/todo').then((response) => {
            setListOfTasks(response.data);
        }).catch((error) => {
            console.log(`Error in GET ${error}`);
            alert('Something went wrong'); 
        })
    }

    useEffect(() => {
        fetchTaskList();
    }, []); 


    return (
        <div>
            <SubmitTask
            taskName={taskName}
            setTaskName={setTaskName}
            taskDescription={taskDescription}
            setTaskDescription={setTaskDescription}
            fetchTaskList={fetchTaskList}
            /> 

            <h2>Task-List</h2>

            <ul>
                {
                    listOfTasks.map((taskList) => (
                        <li key={taskList.id}>
                           Task:{taskList.name} 
                           Description: {taskList.status}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TaskList