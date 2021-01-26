import React from 'react'
import { Field } from 'redux-form'
import { maxLengthCreator, required } from '../../../../utils/Validators/validators'
import { TextArea } from '../../../common/FormElems/FormElems'

const maxLength10 = maxLengthCreator(10)

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={TextArea}
                name='addPost'
                placeholder='Add a new post'
                validate={[required, maxLength10]} />
            <button className='profile-post-button' >Post</button>
        </form>
    )
}

export default AddPostForm