
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/proteinau-nuxt/'
    }
} : {}
module.exports = {
    ...routerBase,
    dev: (process.env.NODE_ENV !== 'production'),
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - PROTEINAU',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ],
        script:[
            {
                src:"https://code.jquery.com/jquery-3.3.1.slim.min.js" ,
                integrity:"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
                crossorigin:"anonymous"
            },
            {
                src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" ,
                integrity:"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49",
                crossorigin:"anonymous"
            },
            {
                src:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" ,
                integrity:"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy",
                crossorigin:"anonymous"
            }
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
            {rel: 'stylesheet', crossorigin: 'anonymous', integrity: 'sha384-Smlep5jCw/wG7hdkwQ/Z5nLIefveQRIY9nfy6xoR1uRYBtpZgI6339F5dgvm/e9B' , href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/css/bootstrap.min.css'}
        ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#70C14A', height: '5px'},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    },
    plugins: [
        '~/plugins/vue-resource',
        '~/plugins/api',
        '~/plugins/messages'
    ]
}

