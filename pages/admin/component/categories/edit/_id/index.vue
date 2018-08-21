<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h3>Edycja kategorii</h3>
            </div>
        </div>
        <div class="row">
            <div class="admin-page-actions">
                <button type="button" class="btn admin-btn ml-auto" @click="updateCategory">Zapisz zmiany</button>
            </div>
        </div>
        <div class="add-article-form-box row">
            <div class="form-group col-12">
                <label for="category-name" class="input-label">Nazwa kategorii</label>
                <input v-model="category.name" type="text" class="form-control article-add-field" id="category-name">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "categories-edit",
        layout: 'admin',
        asyncData(context){
            return context.app.$api.fetchCategory(context.params.id)
                .then((response) => {
                    return {
                        category: response
                    }
                })
        },
        methods:{
            updateCategory(){
                this.$api.action(this.$api.url.admin.editCategory(this.category.id),this.category)
                    .then(response => {
                        if(response.success === true) {
                            this.$message({type: 'success', message: "Pomyślnie zaaktualizowano kategorię", keepAlive: true})
                            this.$router.push({name: 'admin-component-categories'})
                        }
                        else{
                            this.$message({type: 'danger', message: response.error})
                        }
                    })
            }
        }
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