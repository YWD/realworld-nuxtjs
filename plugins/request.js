import axios from 'axios'
export const request = axios.create({
  // baseURL: 'https://api.realworld.io'
  baseURL: 'http://realworld.api.fed.lagounews.com'
})

export default function ({store}) {
  request.interceptors.request.use(function (config) {
    if (store.state.user) config.headers.Authorization = 'Token ' + store.state.user.token
    return config
  }, function (error) {
    return Promise.reject(error)
  })
}
