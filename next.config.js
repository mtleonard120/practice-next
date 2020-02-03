module.exports = {
    webpack: (config) => {
        config.resolve.modules.push(__dirname)
        return config;
    },
    webpackDevMiddleware: config => {
      // Perform customizations to webpack dev middleware config
      // Important: return the modified config
      return config
    },
}