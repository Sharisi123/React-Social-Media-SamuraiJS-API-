import React from 'react'

let ProfileJobStatus = props => {
    return (
        <div className='profile-jobStatus'>
            <div className='profile-jobStatus-header'>Поиск работы: </div>
            <div className='profile-jobStatus-status'>
                {props.lookingForAJob ? 'В активном поиске' : 'Не ищу'}
            </div>
        </div>
    )
}

export default ProfileJobStatus