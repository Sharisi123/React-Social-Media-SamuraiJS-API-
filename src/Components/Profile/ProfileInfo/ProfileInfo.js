import React from 'react'
import Loader from '../../common/Loader/Loader'
import './ProfileInfo.css'
import userDefault from '../../../Assets/img/user.png'
import profileHat from '../../../Assets/img/profileHat.jpg'
import ProfileDescription from './ProfileContent/ProfileDescription/ProfileDescription'
import ProfileContacts from './ProfileContent/ProfileContacts/ProfileContacts'
import ProfileJobStatus from './ProfileContent/ProfileJobStatus/ProfileJobStatus'
import ProfileJobDescription from './ProfileContent/ProfileJobDescription/ProfileJobDescription'

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Loader />
    }

    return (
        <div className='profile-info'>
            <img className='profile-hat'
                src={props.profile.photos.large ? props.profile.photos.large : profileHat} alt="шапка" />
            <br />
            <div className='profile-topic-and-desc'>
                <div className='profile-topic'>
                    <img
                        className='profile-img'
                        src={props.profile.photos.small ? props.profile.photos.small : userDefault} alt="профиль" />
                </div>
                <div className='profile-props-info'>
                    <ProfileDescription 
                        fullName={props.profile.fullName} 
                        aboutMe={props.profile.aboutMe} 
                        status={props.status}  
                        updateStatus={props.updateStatus}/>
                    <ProfileContacts facebook={props.profile.contacts.facebook} instagram={props.profile.contacts.instagram}/>
                    <ProfileJobStatus lookingForAJob={props.profile.lookingForAJob}/>
                    <ProfileJobDescription lookingForAJobDescription={props.profile.lookingForAJobDescription}/>
                </div>
            </div>
        </div>

    )
}

export default ProfileInfo