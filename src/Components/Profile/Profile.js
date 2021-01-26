import React from 'react'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import './Profile.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {

    return (
        <div className='profile'>
            <ProfileInfo 
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>

    )
}

export default Profile