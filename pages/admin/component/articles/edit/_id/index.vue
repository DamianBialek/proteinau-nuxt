<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h3>Edycja artykułu</h3>
            </div>
        </div>
        <div class="row">
            <div class="admin-page-actions">
                <button type="button" class="btn admin-btn ml-auto" @click="updateArticle">Zapisz zmiany</button>
            </div>
        </div>
        <div class="add-article-form-box row">
            <div class="form-group col-12">
                <label for="article-title" class="input-label">Tytuł artykułu</label>
                <input v-model="article.title" type="text" class="form-control article-add-field" id="article-title">
            </div>
            <div class="col-3">
                <div class="form-group">
                    <label for="article-category">Kategoria</label>
                    <select id="article-category" class="form-control article-add-field" v-model="article.category_id">
                        <option v-for="category in categories" :key="category.id" :value="category.id">{{category.name}}</option>
                    </select>
                </div>
            </div>
            <div class="form-group col-12">
                <Editor api-key="66d045zt7buqmmqh7zif8hjzx62agdt0oz3xbvjzrxl4dc42" class="article-text" v-model="article.text" />
            </div>
        </div>
    </div>
</template>

<script>
    import Editor from '@tinymce/tinymce-vue'
    export default {
        name: "admin-edit-article",
        layout: 'admin',
        methods:{
            updateArticle(){
                this.$api.action(this.$api.url.admin.editArticle(this.article.id),this.article)
                    .then(response => {
                        if(response.success === true) {
                            this.$message({type: 'success', message: "Pomyślnie zaaktualizowano artykuł", keepAlive: true})
                            this.$router.push({name: 'admin-component-articles'})
                        }
                        else{
                            this.$message({type: 'danger', message: response.error})
                        }
                    })
            }
        },
        async asyncData(context){
            let article = await context.app.$api.fetchArticle(context.params.id).then(response => {
                return response
            })

            let categories = await context.app.$api.fetchCategories().then(response => {
                return response
            })

            return{
                article: article,
                categories: categories
            }
        },
        components: {Editor}
    }
</script>

<style lang="scss">
    .admin-page-actions{
        display: flex;
        width: 100%;
        padding: 0 15px;
    }
    .article-add-field{
        border-top: none;
        border-left: none;
        border-right: none;

        &:focus{
            box-shadow: none;
        }
    }
    .article-text{
        min-height: 500px;
    }
</style>