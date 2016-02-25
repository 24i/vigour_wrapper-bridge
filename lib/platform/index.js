'use strict'

var ua = require('vigour-ua')

var userAgent = typeof navigator !== 'undefined' && navigator.userAgent
var platform = ua(userAgent).platform
/* adjust this list as more integrations become available */
var integrations = ['ios', 'android']
var integration
if (integrations.indexOf(platform) !== -1) { 
  /* platform has integration */
  integration = require('./' + platform)
} else { 
  /* no integration available > provide mock interface */
  integration = require('./mock')
}

module.exports = integration
