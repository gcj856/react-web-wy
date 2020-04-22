import {
  CHOOSE_BOX,
  CHANGE_USER_INFO,
} from './actions';

const initState = {
  logBox: { // 登录框
    name: '登录',
    show: false,
  },
  userInfo: null, // 用户信息
};

function logBox(state = initState.logBox, action) {
  switch (action.type) {
    case CHOOSE_BOX:
      return {
        name: action.name,
        show: action.show,
      };
    default:
      return state;
  }
}

function userInfo(state = initState.userInfo, action) {
  switch (action.type) {
    case CHANGE_USER_INFO:
      if (!action.info) {
        localStorage.userInfo = '';
      } else {
        localStorage.userInfo = JSON.stringify(action.info);
      }
      // console.log(action.info)
      return action.info;
    default:
      return state;
  }
}


export default { logBox, userInfo };