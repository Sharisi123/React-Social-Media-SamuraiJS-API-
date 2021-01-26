import { authMeTC } from "./authReduser"

const SET_INITIALIZATION = 'SET_INITIALIZATION'

let initialState = {
  initialization: false
}

let appReduser = (state = initialState, action) => {

  switch (action.type) {
    case SET_INITIALIZATION: {
      return {
        ...state,
        initialization: true
      }
    }
    default:
      return state
  }
}

export const setInitialization = () => ({ type: SET_INITIALIZATION })

export const appInitialization = () => dispatch => {
  let promise = dispatch(authMeTC())
  promise.then(() => {
      dispatch(setInitialization())
    })
}

export default appReduser