<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h3>Lista artykułów</h3>
            </div>
        </div>
        <div class="admin-page-actions">
            <nuxt-link :to='{name:"admin-component-articles-add"}' type="button" class="btn admin-btn ml-auto">Utwórz nowy artykuł</nuxt-link>
        </div>
        <table class="table table-hover">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Utworzono</th>
                <th scope="col">Tytuł</th>
                <th scope="col">Alias</th>
                <th scope="col">Akcje</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="article in articles" :key="article.id">
                    <td>{{article.id}}</td>
                    <td>{{article.created_at}}</td>
                    <td>{{article.title}}</td>
                    <td><nuxt-link target="_blank" :to="{name: 'article-slug', params: {slug: article.slug}}">{{article.slug}}</nuxt-link></td>
                    <td>
                        <nuxt-link :to="{name:'admin-component-articles-edit-id', params:{id: article.id} }" type="button" class="btn admin-btn articles-list-btn">Edytuj</nuxt-link>
                        <button type="button" class="btn btn-danger articles-list-btn" @click="deleteArticle(article)">Usuń</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "component-articles",
        layout: 'admin',
        asyncData ({app}) {
            return app.$api.fetch(app.$api.url.admin.articles).then(response => {
                return {
                    articles: response
                }
            })
        },
        methods: {
            deleteArticle(article){
                if(confirm("Czy na pewno chcesz usunąć artykuł "+article.title)){
                    this.$api.action(this.$api.url.admin.deleteArticle,article)
                        .then(response => {
                            this.$api.fetchArticles().then(response => {
                                this.articles = response
                            })

                            if(response.success === true)
                                this.$message({type:'success', message: 'Pomyślnie usunięto artykuł'})
                        })

                }
            }
        }
    }
</script>

<style lang="scss">
    .admin-page-actions{
        display: flex;
        margin: 1rem 0;
    }
    .articles-list-btn{
        margin: 5px;
    }
</style>