import React from 'react'
import { NavLink } from 'react-router-dom'
import './DialogItem.css'

const DialogItem = props => {

    return (
        <div className='dialog-item'>
            <NavLink to={'/dialogs/' + props.id} activeClassName='active-dialog-item '>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem