'use strict'

var ios = exports

ios.send = function iosSend (pluginId, fnName, opts, cbId, cb) {
  if (typeof opts !== 'object' || opts === void 0) {
    opts = {}
  }
  var message = {
    pluginId: pluginId,
    fnName: fnName,
    opts: opts,
    cbId: cbId
  }
  ios.write(message, cb)
}

ios.write = function iosWrite (msg, cb) {
  try {
    console.log('Q-ing', msg, cb)
    Q.push([function () {
      console.log('CALLING FROM Q', msg, cb)
      window.webkit.messageHandlers.vigourBridgeHandler.postMessage(msg)
    }, msg, cb])
    console.log('queued it look at Q:', Q)
  } catch (err) {
    console.error('The native context does not exist yet')
    if (cb) {
      cb(err)
    }
  }
}

ios.emit = function iosEmit (event, data) {
  ios.write({
    event: event,
    data: data
  })
}

var Q = window.Q = []

window.NEXT = function () {
  var next = Q.shift()
  next[0]()
}