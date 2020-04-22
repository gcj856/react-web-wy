import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login/cellphone',
    method: 'post',
    data
  })
}