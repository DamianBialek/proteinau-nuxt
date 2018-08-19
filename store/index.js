import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            categories: {},
            headerTitle: '',
            admin: false,
        },
        actions:{
            loadCategories({commit}){
              return this.$api.fetchCategories()
                  .then(response => {
                      commit('setCategories', response)
                  })
            },
            async nuxtServerInit({commit, dispatch }) {
                await dispatch('loadCategories')
                commit("setHeaderTitle", "Blog")
            }
        },
        mutations: {
            setCategories(state, payload){
                state.categories = payload
            },
            setHeaderTitle(state, payload){
                state.headerTitle = payload
            },
            SET_ADMIN(state, payload){
                state.admin = payload
            }
        },
        getters: {
            categories(state){
                return state.categories
            },
            headerTitle(state){
                return state.headerTitle
            },
            isAuthenticatedAdmin (state) {
                return !!state.admin
            },
            loggedAdmin (state) {
                return state.admin.data.user
            }
        }
    })
}

export default createStore