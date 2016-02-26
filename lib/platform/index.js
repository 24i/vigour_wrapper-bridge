'use strict'

var ua = require('vigour-ua')

var integrations = {
  android: require('./android')
  ios: require('./ios')
}

var mock = require('./mock')

var userAgent = typeof navigator !== 'undefined' && navigator.userAgent
var platform = ua(userAgent).platform

module.exports = integrations[platform] || mock
