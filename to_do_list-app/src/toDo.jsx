import React, { useState } from 'react';
import todoimg from './Components/images/todoimg.png'
import ToDoForm from './Components/toDoForm';
import './Components/toDo.css';
import ToDoList from './Components/toDoList';

function ToDo() {

    const[posts, setPosts] = useState([
    ])
    function createPost(newPost){
        if(newPost.title == ''){
            alert('Enter note text')
        }else{
            setPosts([...posts, newPost])
        }

    }

    function removePost(post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <section className="todo__container">
            <h1 className='todo__title'>todo</h1>
            <section className="todo__content">
                <div className="todo__date_container">
                    <img src={todoimg} alt="" className="todo__img" />
                    <div className="todo__datatime_container">
                        <p className="todo__date">Thur 9</p>
                        <h1 className="todo__time">6:00 AM</h1>
                    </div>
                </div>
                <div className="todo__components">
                    <ToDoForm create={createPost}/>
                    <ToDoList remove={removePost} posts={posts}/>
                </div>
            </section>
        </section>
    );
}

export default ToDo;