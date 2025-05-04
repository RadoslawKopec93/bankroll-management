// vue.config.ts
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')


module.exports = {
    configureWebpack: {
        plugins: [
        ],
    },
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/global.scss";`,
            },
        },
    },
    lintOnSave:false,
    // https://cli.vuejs.org/config/#devserver-proxy
    devServer: {
        port: 3001,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                ws: true,
                changeOrigin: true
            }
        }
    }
}