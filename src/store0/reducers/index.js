import { combineReducers } from 'redux';
import user from './user'

let allReducers = {
  user
}

let reducers = combineReducers(allReducers);

export default reducers;