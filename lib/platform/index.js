'use strict'

var ua = require('vigour-ua')

var userAgent = typeof navigator !== 'undefined' && navigator.userAgent
var platform = ua(userAgent).platform

var integration

switch (platform) {
  case 'android':
    integration = require('./android')
    break
  case 'ios':
    integration = require('./ios')
    break
  default:
    integration = require('./mock')
}

module.exports = integration
