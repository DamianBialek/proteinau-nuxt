<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h3>Lista kategorii</h3>
            </div>
        </div>
        <div class="admin-page-actions">
            <nuxt-link :to='{name:"admin-component-categories-add"}' type="button" class="btn admin-btn ml-auto">Utwórz nową kategorię</nuxt-link>
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
                <tr v-for="category in categories" :key="category.id">
                    <td>{{category.id}}</td>
                    <td>{{category.created_at}}</td>
                    <td>{{category.name}}</td>
                    <td><nuxt-link target="_blank" :to="{name: 'articles-slug', params: {slug: category.slug}}">{{category.slug}}</nuxt-link></td>
                    <td>
                        <nuxt-link :to="{name:'admin-component-categories-edit-id', params:{id: category.id} }" type="button" class="btn admin-btn articles-list-btn">Edytuj</nuxt-link>
                        <button type="button" class="btn btn-danger articles-list-btn" @click="deleteCategory(category)">Usuń</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "component-categories",
        layout: 'admin',
        asyncData ({app}) {
            return app.$api.fetchCategories().then(response => {
                return {
                    categories: response
                }
            })
        },
        methods: {
            deleteCategory(category){
                if(confirm("Czy na pewno chcesz usunąć categorię "+category.name)){
                    this.$api.deleteCategory(category)
                        .then(response => {
                            this.$api.fetchCategories().then(response => {
                                this.categories = response
                            })

                            if(response.success === true)
                                this.$message({type:'success', message: 'Pomyślnie usunięto kategorię'})
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