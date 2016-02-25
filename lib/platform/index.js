'use strict'

var ua = require('vigour-ua')

var userAgent = typeof navigator !== 'undefined' && navigator.userAgent
var platform = ua(userAgent).platform
var integration
if (['ios', 'android'].indexOf(platform) !== -1) { // integrated platform
  integration = require('./' + platform)
} else {
  integration = require('./mock')
}

module.exports = integration
