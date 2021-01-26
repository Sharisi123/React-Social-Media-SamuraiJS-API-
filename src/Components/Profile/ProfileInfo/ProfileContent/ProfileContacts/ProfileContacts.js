import React from 'react'

let ProfileContacts = props => {
    return (
        <div className='profile-contacts'>
            <div className='profile-contacts-header'>Контакты</div>
            <ul>
                <li>FaceBook: {props.facebook ? <a>{props.facebook}</a> : 'Не указан'}</li>
                <li>Instagram: <a>{props.instagram ? <a>{props.instagram}</a> : 'Не указан'}</a></li>
            </ul>
        </div>
    )
}

export default ProfileContacts