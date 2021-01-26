import React from 'react'
import { Field } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/Validators/validators'
import { TextArea } from '../../common/FormElems/FormElems'

const maxLength100 = maxLengthCreator(100)

let LoginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field component={TextArea} name={'email'} type="text" placeholder='email' validate={[required, maxLength100]}/></div>
            <div><Field component={TextArea} name={'password'} type="password" placeholder='pass' validate={[required, maxLength100]}/></div>
            <div><Field component={'input'} name={'rememberMe'} type="checkbox" /> remember me</div>
            {props.error && <div className='login-form-error'>{props.error}</div>}
            <div><button>Submit</button></div>
        </form>
    )
}

export default LoginForm