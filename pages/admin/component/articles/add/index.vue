<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h3>Dodawanie nowego artykułu</h3>
            </div>
        </div>
        <div class="row">
            <div class="admin-page-actions">
                <button type="button" class="btn actions-btn ml-auto" @click="addArticle">Opublikuj</button>
            </div>
        </div>
        <div class="add-article-form-box row">
            <div class="form-group col-12">
                <label for="article-title" class="input-label">Tytuł artykułu</label>
                <input v-model="article.title" type="text" class="form-control article-add-field" id="article-title">
            </div>
            <div class="col-9">
                <div class="form-group">
                    <label for="article-alias" class="input-label">Alias</label>
                    <input type="text" class="form-control article-add-field" id="article-alias" v-model="article.slug">
                </div>
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
        name: "index",
        layout: 'admin',
        data(){
            return {
                article: {
                    title: null,
                    slug: null,
                    category_id: null,
                    text: null
                }
            }
        },
        methods:{
            addArticle(){
                this.$api.addArticle(this.article)
                    .then(response => {
                        if(response.success === true)
                            this.$router.push({name:'admin-component-articles'})
                    })
            }
        },
        components: {Editor},
        asyncData ({app}) {
            return app.$api.fetchCategories().then(response => {
                return {
                    categories: response
                }
            })
        }
    }
</script>

<style lang="scss">
    .admin-page-actions{
        display: flex;
        width: 100%;
        padding: 0 15px;

        .actions-btn{
            color: #fff;
            background-color: #70C14A;

            &:hover{
                color: #fff;
                background-color: #309006;
            }
        }
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