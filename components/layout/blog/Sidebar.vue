<template>
    <aside>
        <header class="categories-header">
            KATEGORIE
        </header>
        <ul class="list-group">
            <nuxt-link :to="{name: 'articles-slug', params: {slug: category.id}}" tag="li" active-class="active" v-for="category in categories" :key="category.id" class="list-group-item">
                <a>{{category.name}}</a>
            </nuxt-link>
        </ul>
    </aside>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
                categories: {}
            }
        },
        created(){
            this.categories = this.$store.getters.categories
        }

    }
</script>

<style lang="scss">
    .categories-header{
        font-weight: bold;
    }
    .list-group-item{
        font-size: 1rem;
        border: none;

        &.active{
            background-color: #70C14A;

            a{
                color: #fff;
            }

            &:hover{
                a{
                    color: #000;
                }
            }
        }

        a{
            color: #000;

            &:hover{
                color: #70C14A;
                text-decoration: none;
                border-bottom: 2px solid #70C14A;
            }
        }
    }
</style>