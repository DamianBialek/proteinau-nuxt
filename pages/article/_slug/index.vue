<template>
    <article>
        <header class="article-header">
            <h1>{{article.title}}</h1>
            <span class="article-date">{{article.date}}</span>
        </header>
        <div class="article-body mt-2 mb-2">
            <div class="article-thumbail">
                <img src="http://www.gstatic.com/webp/gallery/2.jpg" />
            </div>
            <div class="article-content">
                <p>{{article.text}}</p>
            </div>
        </div>
    </article>
</template>

<script>
    // import utils from '@/utils'
    export default {
        layout: 'blog',
        name: "article-slug",
        data(){
            return {}
        },
        head () {
            return {
                title: this.article.title,
                meta: [
                    { hid: 'description', name: 'description', content: 'About our company Nuxt.js ' }
                ]
            }
        },
        asyncData(context){
            return context.app.$api.fetchArticle(context.params.slug).then(response => {
                return {
                    article: response
                }
            })
        }
    }
</script>

<style lang="scss">
    header{
        h1{
            font-size: 2.15rem;
        }
        .article-date{
            color: #aaa;
            display: block;
        }
    }
    .article-body{
        .article-thumbail{
            height: 400px;

            img{
                width: 100%;
                height: 100%;
            }
        }

        .article-content{
            margin: 2rem 0;

            p{
                margin: 0;
            }
        }
    }
</style>