import React from 'react';

function SubmitTask() {

    return(
        <form onSubmit="submittask">
            <input type="text"
                   id="taskname"
                   onChange={(e) => createtask(e.target.value)} />
        </form>
    );
}



export default SubmitTask; 