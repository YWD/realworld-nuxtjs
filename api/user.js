import {request} from "@/plugins/request";

export const login = data => request({
    url: '/api/users/login',
    method: 'POST',
    data
})

export const register = data => request({
    url: 'api/users',
    method: 'POST',
    data,
})

export const profile = username => request({
    url: 'api/profiles/' + username,
    method: 'GET',
})

export const userFollow = username => request({
    url: `/api/profiles/${username}/follow`,
    method: 'POST',
})

export const userUnfollow = username => request({
    url: `/api/profiles/${username}/follow`,
    method: 'DELETE',
})
