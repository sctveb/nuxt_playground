import axios from 'axios'

export default {
    mode: 'spa',
    module: ['nuxt-vuex-localstorage'],
    // plugins: [{ src: '~/plugins/localStorage.js', ssr: false }],
    css: [
        // 'bulma',
        '~/assets/main.css',
        '@fortawesome/fontawesome-free/css/all.css',
        'material-design-icons-iconfont/dist/material-design-icons.css'
    ],
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: "msapplication-TileColor", content: "#ffffff"},
            { name: "msapplication-TileImage", content: "/ms-icon-144x144.png"},
            { name: "theme-color", content: "#ffffff"}
        ],
        link: [
            { rel: "apple-touch-icon", sizes: "57x57", href: "/images/favicon/apple-icon-57x57.png"},
            { rel: "apple-touch-icon", sizes: "60x60", href: "/images/favicon/apple-icon-60x60.png"},
            { rel: "apple-touch-icon", sizes: "72x72", href: "/images/favicon/apple-icon-72x72.png"},
            { rel: "apple-touch-icon", sizes: "76x76", href: "/images/favicon/apple-icon-76x76.png"},
            { rel: "apple-touch-icon", sizes: "114x114", href: "/images/favicon/apple-icon-114x114.png"},
            { rel: "apple-touch-icon", sizes: "120x120", href: "/images/favicon/apple-icon-120x120.png"},
            { rel: "apple-touch-icon", sizes: "144x144", href: "/images/favicon/apple-icon-144x144.png"},
            { rel: "apple-touch-icon", sizes: "152x152", href: "/images/favicon/apple-icon-152x152.png"},
            { rel: "apple-touch-icon", sizes: "180x180", href: "/images/favicon/apple-icon-180x180.png"},
            { rel: "icon", type: "image/png", sizes: "192x192", href: "/images/favicon/android-icon-192x192.png"},
            { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/favicon/favicon-32x32.png"},
            { rel: "icon", type: "image/png", sizes: "96x96", href: "/images/favicon/favicon-96x96.png"},
            { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/favicon/favicon-16x16.png"},
            { rel: "manifest", href: "/images/favicon/manifest.json"}
        ]
    },
    // generate: {
    //     routes() {
    //         return axios.get('https://api.hnpwa.com/v0/news/1.json')
    //         .then((res) => {
    //             return res.data.map((user) => {
    //                 return '/user/' + user.user
    //             })
    //         })
    //     }
    // }
}