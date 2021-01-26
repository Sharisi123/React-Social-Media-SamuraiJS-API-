import React from 'react'
import { Field } from 'redux-form'

const AddMassageForm = (props) => {

    return (
        <form className='send-massage-container' onSubmit={props.handleSubmit}>
            <Field className='send-massage-input' component={'input'} name={'addMassage'} placeholder='enter your massage' />
            <button className='send-massage-button'>send</button>
        </form>
    )
}

export default AddMassageForm