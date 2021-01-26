import React from 'react'

let ProfileJobDescription = props => {
    return (
        <div className='profile-jobDescription'>
            <div className='profile-jobDescription-header'>Описание: </div>
            <div className='profile-jobDescription-description'>
                {props.lookingForAJobDescription ? props.lookingForAJobDescription : 'Не указано'}
            </div>
        </div>
    )
}

export default ProfileJobDescription