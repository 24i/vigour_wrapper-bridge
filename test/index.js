'use strict'

var test = require('tape')

var bridge
var WPlugin
var plugin

test('require bridge', function (t) {
  bridge = require('../lib/index')
  t.ok(bridge)
  t.end()
})

test('require Plugin', function (t) {
  WPlugin = require('../lib/plugin')
  t.ok(WPlugin)
  t.end()
})

test('make new plugin', function (t) {
  var injection = require('../lib/plugin/injection')
  plugin = new Plugin({
    inject: injection('vigour-testplugin'),
    _platform: {
      define: {
        test () {
          console.log('testing!')
        }
      }
    }
  })
  t.ok(plugin)
  t.end()
})

