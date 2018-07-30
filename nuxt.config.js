
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
    router: {
        base: '/<repository-name>/'
    }
} : {}
module.exports = {
    ...routerBase,
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - PROTEINAU',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
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
        '~/plugins/api'
    ]
}

