import React from 'react';
import '../Components/toDo.css';
import ToDoItem from './toDoItem';

function ToDoList({ posts, remove }) {


    return (
        <div className='list__container'>
            {posts.map((post) =>
                <ToDoItem delete={remove} post={post} key={post.id} />
            )}
        </div>
    );
}

export default ToDoList;