import React, { useState } from 'react';
import '../Components/toDo.css';
import { Icon } from '@iconify/react';
import DropDownMenu from './dropDownMenu';

function ToDoForm({create, currenttime}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [post, setPost] = useState({ title: '', time: ''})

    function addNewPost(e){
        const newPost ={
            ...post, time: currenttime,  id: Date.now()
        }
        create(newPost)
        setPost({title: '', time: ''})
        
    }

    function dropDown() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <form className='todo__form_container'>
            <input value={post.title} onChange={ e => setPost({...post, title: e.target.value})} type="text" placeholder='Note' className="todo__input" />
            <div className="todo__btn">
                <div className="todo__btn_create">
                    <Icon onClick={addNewPost} className='todo__icon' icon="material-symbols:add" />
                </div>

                <div className="todo__btn_dropdown">
                    <Icon onClick={dropDown} className='todo__icon' icon="material-symbols:arrow-back-ios-new" rotate={3} />
                    <DropDownMenu isMenuOpen={isMenuOpen}/>
                </div>
            </div>
        </form>
    );
}

export default ToDoForm;