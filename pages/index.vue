<template>
    <Articles :articles = "articles"></Articles>
</template>

<script>
    import Articles from '~/components/articles/Articles'
    export default {
        layout: 'blog',
        name: "Home",
        components: {Articles},
        head () {
            return {
                title: 'Strona Główna',
                meta: [
                    { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
                ]
            }
        },
        asyncData(context){
            return context.app.$api.fetchArticles().then(response => {
                return {
                    articles: response
                }
            })
        },
        data() {
            return {}
        },
        created() {
            this.$store.commit("setHeaderTitle", 'Blog - Najnowsze wpisy')
        }
    }
</script>

<style>

</style>