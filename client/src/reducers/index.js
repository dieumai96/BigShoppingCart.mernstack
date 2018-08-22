import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
const myReducers = combineReducers({
  auth : authReducer,
  errors : errorsReducer,
})
export default myReducers;