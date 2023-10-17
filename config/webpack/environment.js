const { environment } = require('@rails/webpacker')

module.exports = environment
const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
 new webpack.ProvidePlugin({
  $: 'jqurey/src/jquery',
  jQuery: 'jqurey/src/jquery',
  Popper: 'popper.js'
 })
)
