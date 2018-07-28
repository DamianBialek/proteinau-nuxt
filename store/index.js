import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            categories: {}
        },
        actions:{
            loadCategories({commit}){
              return this.$api.fetchCategories()
                  .then(response => {
                      commit('setCategories', response)
                  })
            },
            async nuxtServerInit({ dispatch }) {
                await dispatch('loadCategories')
            }
        },
        mutations: {
            setCategories(state, payload){
                state.categories = payload
            }
        },
        getters: {
            categories(state){
                return state.categories
            }
        }
    })
}

export default createStore