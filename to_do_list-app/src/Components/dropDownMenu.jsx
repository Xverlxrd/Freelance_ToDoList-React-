import React from 'react';
import '../Components/toDo.css'
import { Icon } from '@iconify/react';


function DropDownMenu({isMenuOpen}) {


    return (
        isMenuOpen && (
            <div className='dropdown__menu'>
                <Icon className='dropdown__btn alarm' icon="charm:clock-alarm" />
                <Icon className='dropdown__btn all' icon="material-symbols:done-all" color="white" />
                <Icon className='dropdown__btn bin' icon="material-symbols:delete-outline" color="white" />
            </div>
        )
    );
}

export default DropDownMenu;