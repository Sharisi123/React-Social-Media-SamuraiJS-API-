import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogReduser from "./dialogReduser";
import profileReduser from "./profileReduser";
import usersReduser from "./usersRedures";
import authReduser from "./authReduser"
import { reducer as formReducer } from 'redux-form'
import thunkMidleWare from "redux-thunk"
import appReduser from "./appReduser";

let redusersContainer = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogReduser,
    usersPage: usersReduser,
    auth: authReduser,
    app: appReduser,
    form: formReducer,
})
let store = createStore(redusersContainer, applyMiddleware(thunkMidleWare))

window.store = store
export default store