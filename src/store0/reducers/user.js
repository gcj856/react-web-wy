import { CHANGE_USER_INFO } from '../actions/user';

const initState = {
  userInfo: null,  //用户信息
}

function userInfo(state = initState.userInfo, action) {
  switch (action.type) {
    case CHANGE_USER_INFO:
      if (!action.info) {
        localStorage.userInfo = ''
      } else {
        localStorage.userInfo = JSON.stringify(action.info)
      }
      return action.info;
    default:
      return state;
  }
}

let user = {
  userInfo
}

export default user;