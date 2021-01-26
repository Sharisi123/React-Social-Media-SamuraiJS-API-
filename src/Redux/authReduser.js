import { stopSubmit } from 'redux-form'
import { authAPI } from '../api/api'

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}

let authReduser = (state = initialState, action) => {

  switch (action.type) {
    case SET_USER_DATA: {
      return {

        ...state,
        ...action.data,
      }
    }
    default:
      return state
  }
}

export const setUserData = (id, login, email, isAuth) => ({ type: SET_USER_DATA, data: { id, email, login, isAuth } })

export const authMeTC = () => {

  return dispatch => {
    return authAPI.authMe()
      .then(data => {
        if (data.resultCode === 0) {
          let { id, login, email } = data.data
          dispatch(setUserData(id, login, email, true))
        }
      })
  }
}

export const login = (email, password, rememberMe) => {

  return dispatch => {
    
    authAPI.login(email, password, rememberMe)
      .then(res => {
        if (res.data.resultCode === 0) {
          dispatch(authMeTC())
        }
        else {
          let massage = res.data.messages.length > 0 ? res.data.messages[0] : 'something went wrong'
          dispatch(stopSubmit('login', {_error: massage}))
        }
      })
  }
}

export const logout = () => {

  return dispatch => {
    authAPI.logout()
      .then(data => {
        if (data.data.resultCode === 0) {
          dispatch(setUserData(null, null, null, false))
        }
      })
  }
}

export default authReduser