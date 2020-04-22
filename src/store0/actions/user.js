export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';

//切换用户信息
export function changeUserInfo(info) {
  return { type: CHANGE_USER_INFO, info };
}