import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = (props) => {

    return (
        <header className='header'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/1200px-Flag_of_Switzerland_%28Pantone%29.svg.png" alt="лого" />
            <div className="auth">
                {props.isAuth
                ? <div className='login'>{props.login} <button onClick={props.logout}>Logout</button></div>
                : <NavLink to='/login' className='login'>Login</NavLink>
                }
                
            </div>
        </header>
        
    )
}

export default Header