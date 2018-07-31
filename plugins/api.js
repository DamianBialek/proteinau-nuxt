import {url} from '~/config'
import Vue from 'vue'

const api = {
    fetchArticles() {
        return Vue.http.get(url.articles).then(response => response.body)
    },
    fetchArticle(slug) {
        return Vue.http.get(url.article + slug).then(response => response.body)
    },
    fetchCategories() {
        return Vue.http.get(url.categories).then(response => response.body)
    },
    fetchArticlesFromCategory(categorySlug) {
        return Vue.http.get(url.articlesFromCategory + categorySlug).then(response => response.body)
    }
}


export default ({ app }, inject) => {
    inject('api', api)
}