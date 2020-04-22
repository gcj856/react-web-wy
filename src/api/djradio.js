import request from '@/utils/request'

export function getCatelist() {
  return request({
    url: '/dj/catelist',
    method: 'get'
  })
}
export function getDjRecommendByCate(params) {
  return request({
    url: '/dj/recommend/type',
    method: 'get',
    params
  })
}

