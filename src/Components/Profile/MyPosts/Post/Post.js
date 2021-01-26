import React from 'react'
import './Post.css'

const Post = (props) => {

    return (
        <div className="post">
            <div className="post-title">{props.title}</div>
            <div className="post-body">{props.text}</div>
        </div>
    )
}

export default Post