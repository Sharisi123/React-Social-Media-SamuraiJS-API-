import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavBar.module.css'

const NavBar = (props) => {

    return (
        <nav className={classes.nav}>
            <ul>
                <li><NavLink to="/profile" activeClassName={classes.active}>Профиль</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={classes.active}>Сообщения</NavLink></li>
                <li><NavLink to="news">Новости</NavLink></li>
                <li><NavLink to="/music">Музыка</NavLink></li>
                <li><NavLink to="/users" activeClassName={classes.active}>Найти пользователя</NavLink></li>
            </ul>
            <div className={classes.navFriends}>
                Friends online
                {props.friends.map( item => (
                    <div key={item.id}>
                        <div className={classes.friendAva}>.</div>
                        <div>{item.name}</div>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default NavBar