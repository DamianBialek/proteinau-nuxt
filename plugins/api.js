import {url} from '~/config'
import Vue from 'vue'

const api = {
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
    addArticle(article) {
        return Vue.http.post(url.addArticle, article,{
                emulateJSON: true
            })
            .then(response => response.body)
            .catch(error => console.log("error"))
    },
    editArticle(article) {
        return Vue.http.post(url.editArticle + article.id, article,{
            emulateJSON: true
        })
            .then(response => response.body)
            .catch(error => console.log("error"))
    },
    deleteArticle(article) {
        return Vue.http.post(url.deleteArticle, article,{
            emulateJSON: true
        })
            .then(response => response.body)
            .catch(error => console.log("error"))
    },
    fetchCategory(id) {
        return Vue.http.get(url.category + id)
            .then(response => response.body)
            .catch(error => console.log("error"))
    },
    addCategory(category) {
        return Vue.http.post(url.addCategory, category,{
            emulateJSON: true
        })
            .then(response => response.body)
            .catch(error => error)
    },
    editCategory(category) {
        return Vue.http.post(url.editCategory+category.id, category,{
            emulateJSON: true
        })
            .then(response => response.body)
            .catch(error => console.log("error"))
    },
    deleteCategory(category) {
        return Vue.http.post(url.deleteCategory, category,{
            emulateJSON: true
        })
            .then(response => response.body)
            .catch(error => console.log("error"))
    },
    adminLogin(user) {
        return Vue.http.post(url.admin.login, user,{
            emulateJSON: true
        })
            .then(response => response.body)
            .catch(error => error)
    }
}


export default ({ app }, inject) => {
    inject('api', api)
}