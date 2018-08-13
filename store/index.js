import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            categories: {},
            headerTitle: '',
            admin: false,
            error: null
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
            },
            adminSignIn({commit}, payload){
                this.$api.adminLogin(payload)
                    .then(response => {
                        if(response.success === true && response.token) {
                            localStorage.setItem('adminToken', response.token)
                            commit('adminLogin')
                            commit('clearError')
                        }else{
                            commit('setError', response.error)
                        }
                    })
                    .catch(error => console.log(error))
            }
        },
        mutations: {
            setCategories(state, payload){
                state.categories = payload
            },
            setHeaderTitle(state, payload){
                state.headerTitle = payload
            },
            adminLogin(state){
                state.admin = true
            },
            setError(state, payload){
                state.error = payload
            },
            clearError(state){
                state.error = null
            }
        },
        getters: {
            categories(state){
                return state.categories
            },
            headerTitle(state){
                return state.headerTitle
            },
            admin(state){
                return state.admin
            },
            error(state) {
                return state.error
            }
        }
    })
}

export default createStore