import React from 'react'
import AddPostForm from './AddPostForm/AddPostForm'
import './MyPosts.css'
import Post from './Post/Post'
import { reduxForm } from 'redux-form'

const MyPosts = (props) => {

    let addPost = (data) => {
        props.addPostAC(data.addPost)
    }

    let AddPostReduxForm = reduxForm({ form: 'addPost' })(AddPostForm)

    return (
        <div>
            <div>
                My posts
            </div>
            <div className='newPost'>
                New post
            <br />
                <AddPostReduxForm onSubmit={addPost} />
            </div>

            <div className="out">
                {props.profilePage.postArr.map(item => (
                    <Post title={item.title} text={item.text} key={item.id} />
                ))}
            </div>
        </div>

    )
}

export default MyPosts