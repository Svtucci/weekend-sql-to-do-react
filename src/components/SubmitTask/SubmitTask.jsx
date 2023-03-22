import React from 'react';

function SubmitTask() {
    const submitForm = (e) => {
        e.preventDefault();
        Axios.post('/taskList', {
            take: taskName,
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
            Description:
            <input type="text"
                   id={taskDescription}
                   onChange={(e) => setTaskDescription(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>

        
    );
}

export default SubmitTask; 