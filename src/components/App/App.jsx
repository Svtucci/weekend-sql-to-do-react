import {useState, useEffect} from 'react';
import Header from '../Header/Header.jsx';
import SubmitTask from '../SubmitTask/SubmitTask.jsx';
import TaskList from '../SubmitTask/TaskList.jsx'; 
import './App.css'


function App () {
  
  return (
    <div>
      <h1>TO DO APP</h1>
      
        <Header />
        {/* <SubmitTask /> */}
        {/* <CompleteTask />
        <DeleteTask /> */}
        <TaskList />
    </div>
  );

}

export default App
