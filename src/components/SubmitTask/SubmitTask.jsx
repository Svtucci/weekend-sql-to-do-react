import React from 'react';

function SubmitTask() {

    return(
        <form onSubmit="submittask">
            Task:
            <input type="text"
                   id="taskname"
                   onChange={(e) => createtask(e.target.value)} />
            Description:
            <input type="text"
                   id="taskdescription"
                   onChange={(e) => createdescription(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    );
}



export default SubmitTask; 