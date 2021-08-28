module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ["./node_modules"],
        },
      },
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("vue")
      .use("vue-loader")
      .loader("vue-loader")
      .tap((options) => {
        options.transformAssetUrls = {
          img: "src",
          image: "xlink:href",
          "b-card": "img-src",
        };
        return options;
      });
  },
};
