import {url} from '~/config'
import Vue from 'vue'

const api = {
    url:{
        ...url
    },
    fetchArticles() {
        return Vue.http.get(url.articles)
            .then(response => response.body)
            .catch(error => console.log("error"))
    },
    fetchArticle(slug) {
        return Vue.http.get(url.article + slug)
            .then(response => response.body)
            .catch(error => console.log("error"))
    },
    fetchCategories() {
        return Vue.http.get(url.categories)
            .then(response => response.body)
            .catch(error => console.log("error"))
    },
    fetchArticlesFromCategory(categorySlug) {
        return Vue.http.get(url.articlesFromCategory + categorySlug)
            .then(response => response.body)
            .catch(error => console.log("error"))
    },
    adminLogin(user) {
        return Vue.http.post(url.admin.login, user,{
            emulateJSON: true
        })
            .then(response => response.body)
            .catch(error => error)
    },
    fetch(url){
        return Vue.http.get(url)
            .then(response => response.body)
            .catch(error => console.log("error"))
    },
    action(url, data){
        return Vue.http.post(url, data,{
            emulateJSON: true
        })
            .then(response => response.body)
            .catch(error => error)
    }
}


export default ({ app }, inject) => {
    inject('api', api)
}