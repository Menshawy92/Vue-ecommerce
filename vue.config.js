module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
          @import "@/assets/style/style.scss";
        `,
            },
        },
    },
}
module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint')
    },
}
