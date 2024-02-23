import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrorReducer'
import TaskReducer from './TaskReducer'
const rootReducer = combineReducers({AuthReducer,ErrorReducer,TaskReducer})

export default rootReducer