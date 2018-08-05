<template>
    <div v-if="articles.length">
        <article class="card" v-for="article in articles" :key="article.id">
            <nuxt-link :to="{name: 'article-slug', params: {slug: article.slug}}" :title="article.title" class="article-img">
                <img class="card-img-top" src="http://www.gstatic.com/webp/gallery/2.jpg" alt="Card image cap">
            </nuxt-link>
            <div class="card-body">
                <nuxt-link :to="{name: 'article-slug', params: {slug: article.slug}}" class="card-title article-link"><h2>{{article.title}}</h2></nuxt-link>
                <nuxt-link :to="{name: 'articles-slug', params: {slug: getCategorySlug(article.category_id)}}" class="article-meta">{{article.category_name}}</nuxt-link>
                <div class="card-text" v-html='article.text.substr(0, 200)'></div>
                <nuxt-link :to="{name: 'article-slug', params: {slug: article.slug}}" class="btn article-link-btn">Czytaj więcej</nuxt-link>
            </div>
        </article>
    </div>
    <div v-else-if="articles.length < 1">
        <h3 class="text-center">Upss! Nic nie znaleziono</h3>
    </div>
</template>

<script>
    export default {
        name: "Articles",
        props:{
            articles: {
                required: true
            },
            loading: false
        },
        methods:{
            getCategorySlug: function(categoryId){
                let categoryFound = this.$store.getters.categories.find((cat) => cat.id === categoryId)
                return (categoryFound && categoryFound.slug ? categoryFound.slug : '')
            }
        }
    }
</script>

<style lang="scss">
.card{
    border: none;
    margin: 1rem 0;
    padding: 30px 0;
    border-bottom: 1px solid #bbb;

    .article-img{
        max-height: 400px;
        overflow: hidden;
        cursor: pointer;

        img.card-img-top{
            height: 100%;
            transition: transform .6s ease-in-out;

            &:hover{
                transform: scale(1.2);
            }
        }
    }

    &:first-child{
        padding-top: 0;
    }

    .article-link {
        cursor: pointer;
        transition: color .15s ease-in-out;
        display: block;
        color: #000;
        margin: 0;

        &:hover{
            color: #70C14A;
            text-decoration: none;
        }

        h5{
            margin: 0;
        }
    }

    .article-meta{
        font-size: 0.85rem;
        color: #000;
        transition: color .15s ease-in-out;

        &:hover{
            text-decoration: none;
            color: #70C14A;
        }
    }

    .card-title{
        h2 {
            font-size: 1.75rem;
        }
    }

    .card-text{
        margin: 0;
        padding: 1rem 0;
    }

    .article-link-btn{
        background-color: #70C14A;
        color: #fff;

        &:hover{
            background-color: #309006;
        }
    }
}
</style>