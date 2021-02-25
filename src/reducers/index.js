import counterReducer from './counter'
import loggedReducer from './isLogged'
import { combineReducers } from 'redux'

export default combineReducers({posts: counterReducer, user: loggedReducer})