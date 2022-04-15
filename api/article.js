import {request} from "@/plugins/request";
export const getArticles = params => {
    return request({
        url: 'api/articles',
        method: 'GET',
        params
    })
}

export const createArticle = data => {
    return request({
        url: 'api/articles',
        method: 'POST',
        data,
    })
}

export const updateArticle = data => {
    console.log(data)
    return request({
        url: 'api/articles/' + data.article.slug,
        method: 'PUT',
        data: data,
    })
}

export const getFeedArticles = params => {
    return request({
        url: 'api/articles/feed',
        method: 'GET',
        params
    })
}

export const addFavorite = slug => {
    return request({
        url: `api/articles/${slug}/favorite`,
        method: 'POST',
    })
}

export const deleteFavorite = slug => {
    return request({
        url: `api/articles/${slug}/favorite`,
        method: 'DELETE',
    })
}

export const getArticle = slug => {
    return request({
        url: `/api/articles/${slug}`,
        method: 'GET',
    })
}

export const deleteArticle = slug => {
    return request({
        url: `/api/articles/${slug}`,
        method: 'DELETE',
    })
}

export const getComments = slug => {
    return request({
        url: `/api/articles/${slug}/comments`,
        method: 'GET',
    })
}
