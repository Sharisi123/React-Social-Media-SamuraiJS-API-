import './Users.css';
import userPhoto from '../../../Assets/img/user.png'
import React from 'react'
import Paginate from './../Paginate/Paginate';
import './Users.css'
import { NavLink } from 'react-router-dom';

let Users = props => {
  return (
    <div>
      {
        props.usersPage.usersArr.map(user => <div className='user' key={user.id}>
          <div className='user-photo-and-btn'>
            <div>
              <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='user' className='user-img' />
              </NavLink>
            </div>
            <div className='user-btn-container'>
              {user.followed
                ? <button disabled={props.isDisable} onClick={() => {
                  props.followingTC(user.id, 'unfollow')
                }}
                  className='user-btn'
                >Unfollow</button>

                : <button disabled={props.isDisable} onClick={() => {
                  props.followingTC(user.id, 'follow')
                }}
                  className='user-btn'
                >Follow</button>
              }
            </div>
          </div>
          <div className='user-data'>
            <div>
              <div className='user-name'>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div className='user-location'>
              <div>{"user.location.contry"}</div>
              <div>{"user.location.city"}</div>
            </div>
          </div>
        </div>)

      }
      <div className='users-pagination-container'>
        <Paginate
          pageCount={props.pageCount}
          onPageChange={props.onPageChange}
          currentPage={props.usersPage.currentPage}
        />
      </div>
    </div>
  )
}

export default Users