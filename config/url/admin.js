export default {
    admin: {
        login: 'http://localhost/cms_api/admin/login',
        articles: 'http://localhost/cms_api/admin/articles',
        article: 'http://localhost/cms_api/admin/article/',
        addArticle: 'http://localhost/cms_api/admin/article/add',
        editArticle: (id) => 'http://localhost/cms_api/admin/article/edit/'+id,
        deleteArticle: 'http://localhost/cms_api/admin/article/delete',
        categories: 'http://localhost/cms_api/admin/categories',
        category: 'http://localhost/cms_api/admin/category/',
        addCategory: 'http://localhost/cms_api/admin/category/add',
        editCategory: (id) => 'http://localhost/cms_api/admin/category/edit/'+id,
        deleteCategory: 'http://localhost/cms_api/admin/category/delete',
        articlesFromCategory: 'http://localhost/cms_api/admin/articles/'
    }
}