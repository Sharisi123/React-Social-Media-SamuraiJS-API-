import React from 'react'
import './Login.css'
import LoginForm from './LoginForm/LoginForm'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { login } from '../../Redux/authReduser'
import { Redirect } from 'react-router-dom'

let LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

let Login = (props) => {
    let submitHandler = (data) => {
        let {email, password, rememberMe} = data
        props.login(email, password, rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to='/profile'/>
    }

    return (
        <div>
            <div>Login</div>
            <LoginReduxForm onSubmit={submitHandler} />
        </div>
    )
}

let mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)