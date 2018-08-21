import globalUrl from './url/global.js'
import adminUrl from './url/admin.js'
export const url = {
    ...globalUrl,
    ...adminUrl
}

// export const url = {
//     articles: 'https://bialko.000webhostapp.com/articles',
//     article: 'https://bialko.000webhostapp.com/article/',
//     addArticle: 'https://bialko.000webhostapp.com/article/add',
//     editArticle: 'https://bialko.000webhostapp.com/article/edit/',
//     deleteArticle: 'https://bialko.000webhostapp.com/article/delete',
//     categories: 'https://bialko.000webhostapp.com/categories',
//     category: 'https://bialko.000webhostapp.com/category/',
//     addCategory: 'https://bialko.000webhostapp.com/category/add',
//     articlesFromCategory: 'https://bialko.000webhostapp.com/articles/',
//     editCategory: 'https://bialko.000webhostapp.com/category/edit/',
//     deleteCategory: 'https://bialko.000webhostapp.com/category/delete'
// }

export const projectConfig = {
    projectName: "PROTEINAU",
    pageSeparator: " - "
}