<template>
    <Articles :articles = "articles"></Articles>
</template>

<script>
    import Articles from '~/components/articles/Articles'
    export default {
        name: "ArticlesFromCategory",
        layout: 'blog',
        components: {Articles},
        data() {
            return {}
        },
        head () {
            return {
                title: this.activeCategory.name,
                meta: [
                    { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
                ]
            }
        },
        computed:{
            activeCategory(){
                return this.$store.getters.categories.find((category) => category.slug === this.$route.params.slug)
            }
        },
        asyncData(context){
            return context.app.$api.fetchArticlesFromCategory(context.params.slug).then(response => {
                return {
                    articles: response
                }
            })
        },
        created(){
            this.$store.commit("setHeaderTitle", 'Wpisy z kategorii: '+this.activeCategory.name)
        }
    }
</script>

<style>

</style>