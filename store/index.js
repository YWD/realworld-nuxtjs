const cookieparser = process.server ? require('cookieparser') : undefined
export const state = () => {
    return {
        user: null
    }
}

export const mutations = {
    setUser(state, user) {
        state.user = user
    }
}

export const actions = {
    nuxtServerInit({ commit }, { req }) {
        let user
        if (req.headers.cookie) {
            const data = cookieparser.parse(req.headers.cookie)
            try {
                user = JSON.parse(data.user)
            } catch (e) {
                console.log(e)
            }
        }
        commit('setUser', user)
    }
}
