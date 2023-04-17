import React from 'react';
import '../Components/toDo.css';
import ToDoItem from './toDoItem';

function ToDoList({ posts, remove, currenttime, setSelectPostId}) {


    return (
        <div className='list__container'>
            {posts.map((post) =>
                <ToDoItem setSelectPostId={setSelectPostId} currenttime={currenttime} delete={remove} post={post} key={post.id} />
            )}
        </div>
    );
}

export default ToDoList;