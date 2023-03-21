import React from 'react';
import '../Components/toDo.css';
import ToDoItem from './toDoItem';

function ToDoList() {
    return ( 
        <div className='list__container'>
            <ToDoItem/>
        </div>
     );
}

export default ToDoList;