import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
  postArr: [
    { title: 'title', text: 'some text', id: 1 },
    { title: 'title', text: 'some text', id: 2 },
    { title: 'title', text: 'some text', id: 3 },
    { title: 'title', text: 'some text', id: 4 },
  ],
  postText: '',
  profile: null,
  status: ''
}

let profileReduser = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST: {
      return {
        ...state,
        postArr: [...state.postArr, {
          text: action.addPost,
          id: Date.now()
        }]
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }

    default:
      return state
  }
}

export const addPostAC = (addPost) => ({ type: ADD_POST, addPost })

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = status => ({ type: SET_USER_STATUS, status })

export const getProfileThunkCreator = (userId) => {

  return dispatch => {
    usersAPI.getProfile(userId)
      .then(data => {
        dispatch(setUserProfile(data))
      })
  }
}
export const getStatusTC = (userId) => {

  return dispatch => {
    profileAPI.getStatus(userId)
      .then(res => {
        dispatch(setUserStatus(res.data))
      })
  }
}
export const updateStatusTC = (status) => {

  return dispatch => {
    profileAPI.updateStatus(status)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(setUserStatus(status))
        }
      })
  }
}

export default profileReduser