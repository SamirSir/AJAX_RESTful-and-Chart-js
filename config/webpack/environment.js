// typical setup for jquery
const { environment } = require('@rails/webpacker')

const webpack = require('webpack')

environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Popper: ['popper.js', 'default'],
  })
)

// split chunks plugins -> custom
// const splitChunks = require('./split_chunks')
// const WebpackAssetsManifest = require('webpack-assets-manifest')

// environment.config.merge(splitChunks)

// environment.plugins.insert(
//   'Manifest',
//   new WebpackAssetsManifest({
//     entrypoints: true, // default in rails is false
//     writeToDisk: true, // rails defaults copied from webpacker 
//     publicPath: true // rails defaults copied from webpacker 
//   })
// )
// end


module.exports = environment

