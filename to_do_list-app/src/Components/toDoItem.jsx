import React from 'react';
import '../Components/toDo.css';
import { Icon } from '@iconify/react';

function ToDoItem(props) {
    return ( 
        <div className='todo__item'>
            <div className="todo__item_about">
                <h3 className="todo__item_title"> {props.post.title}</h3>
                <p className="todo__item_datetime">Today at {props.post.time}</p>
            </div>

            <div className="todo__item_btn">
                <input onClick={() => props.setSelectPostId(props.post.id)} type={'radio'} className="todo__item_do" />
                <Icon onClick={() => props.delete(props.post)} className='todo__item_delete' icon="icomoon-free:bin" />
            </div>
        </div>
     );
}

export default ToDoItem;