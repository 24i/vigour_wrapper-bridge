'use strict'

var bridge = require('../index')
var nameSpace = require('../util/namespace')

module.exports = function injection (pkgName) {
  var pluginId = nameSpace(pkgName)
  return function (base) {
    console.info('registering plugin', pluginId)
    bridge.plugins[pluginId] = base
    base.set({
      pluginId,
      define: {
        send (methodName, params, cb) {
          bridge.send(pluginId, methodName, params, cb)
        }
      }
    })
    if (bridge.nativeReadies[pluginId]) {
      bridge.ready(null, true, pluginId)
    }
  }
}
