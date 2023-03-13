// vue.config.ts
module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/../src/global.scss";`,
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