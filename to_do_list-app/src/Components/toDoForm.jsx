import React from 'react';
import '../Components/toDo.css';
import { Icon } from '@iconify/react';

function ToDoForm() {
    return (
        <form className='todo__form_container'>
            <input type="text" placeholder='Note' className="todo__input" />
            <div className="todo__btn">
                <div className="todo__btn_create">
                    <Icon className='todo__icon' icon="material-symbols:add" />
                </div>

                <div className="todo__btn_dropdown">
                    <Icon className='todo__icon' icon="material-symbols:arrow-back-ios-new" rotate={3} />
                </div>
            </div>
        </form>
    );
}

export default ToDoForm;