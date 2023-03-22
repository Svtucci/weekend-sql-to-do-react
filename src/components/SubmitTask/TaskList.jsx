import React from 'react';
import axios from 'axios';
import SubmitTask from './SubmitTask.jsx';

function TaskList () {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [listOfTasks, setListOfTasks] = useState([]);

    const fetchTaskList = () => {
        axios.get('/task').then((response) => {
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
            {/* <SubmitTask /> */}

            <h2>Task-List</h2>

            <ul>
                {
                    listOfTasks.map((task) => (
                        <li key={task.id}>
                           Task:{task.name} 
                           Description: {task.description}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TaskList