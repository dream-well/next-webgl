const withSass = require('@zeit/next-sass')
const withProgressBar = require('next-progressbar')

let config = {
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 99,
  },

  webpack: (config, { dev }) => {
    if(dev) {
      config.devtool = 'cheap-module-source-map'
      config.output.crossOriginLoading = 'anonymous'
    }


    return config
  },

  webpackDevMiddleware: config => {
    return config
  },
}

config = withSass(config)
config = withProgressBar(config)

module.exports = config
