'use strict'

var ua = require('vigour-ua/navigator')

var integrations = {
  android: require('./android'),
  ios: require('./ios')
}

var mock = require('./mock')

var platform = ua.platform

module.exports = integrations[platform] || mock
