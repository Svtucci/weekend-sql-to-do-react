import {useState, useEffect} from 'react';
import CompleteTask from '../CompleteTask/CompleteTask.jsx';
import DeleteTask from '../DeleteTask/DeleteTask.jsx';
import Header from '../Header/Header.jsx';
import SubmitTask from '../SubmitTask/SubmitTask.jsx';


function App () {
  
  return (
    <div>
      <h1>TO DO APP</h1>
      
        <Header />
        <SubmitTask />
        {/* <CompleteTask />
        <DeleteTask /> */}
        
    </div>
  );

}

export default App
