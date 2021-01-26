import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_BUTTON_DISABLE = 'SET_BUTTON_DISABLE'

let initialState = {
  usersArr: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  isDisable: false

}

let usersReduser = (state = initialState, action) => {

  switch (action.type) {
    case FOLLOW:
      // debugger
      return {
        ...state,
        usersArr: state.usersArr.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }
          }
          return user
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        usersArr: state.usersArr.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }
          }
          return user
        })
      }
    case SET_USERS:
      return { ...state, usersArr: action.users }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount }

    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }

    case SET_BUTTON_DISABLE:
      return { ...state, isDisable: action.isDisable }

    default:
      return state
  }
}

export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setButtonDisable = (isDisable) => ({ type: SET_BUTTON_DISABLE, isDisable })

export const getUsersThunkCreator = (currentPage, pageSize) => {
  debugger
  return dispatch => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setUsers(data.items))
        dispatch(toggleIsFetching(false))
      })
  }
}

export const followingTC = (userId, action) => {

  return dispatch => {
    switch (action) {
      case 'follow': {
        dispatch(setButtonDisable(true))
        usersAPI.postFollow(userId)
          .then(data => {
            if (data.resultCode === 0) {
              dispatch(follow(userId))
            }
            dispatch(setButtonDisable(false))
          })
          .catch(err => dispatch(setButtonDisable(false)))
        break
      }
      case 'unfollow': {
        dispatch(setButtonDisable(true))
        usersAPI.deleteFollow(userId)
          .then(data => {
            if (data.resultCode === 0) {
              dispatch(unfollow(userId))
            }
            dispatch(setButtonDisable(false))
          })
          .catch(err => dispatch(setButtonDisable(false)))
        break
      }
    }
  }
}

export default usersReduser