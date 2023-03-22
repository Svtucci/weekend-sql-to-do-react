import {useState, useEffect} from 'react';
import CompleteTask from '../CompleteTask/CompleteTask.jsx';
import DeleteTask from '../DeleteTask/DeleteTask.jsx';
import Header from '../Header/Header.jsx';
import SubmitTask from '../SubmitTask/SubmitTask.jsx';
import TaskList from '../SubmitTask/TaskList.jsx'; 

function App () {
  
  return (
    <div>
      <h1>TO DO APP</h1>
      
        <Header />
        <SubmitTask />
        {/* <CompleteTask />
        <DeleteTask /> */}
        <TaskList />
    </div>
  );

}

export default App
