/*
 * action 类型
 */
export const CHOOSE_BOX = 'CHOOSE_BOX';
export const CHANGE_USER_INFO = 'CHANGE_USER_INFO';


/*
 * action 创建函数
 */

// 选择登录框
export function chooseBox(name, show = true) {
  return { type: CHOOSE_BOX, name, show };
}

// 切换用户信息
export function changeUserInfo(info) {
  return { type: CHANGE_USER_INFO, info };
}