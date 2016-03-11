'use strict'

var proxyquire = require('proxyquire')

proxyquire('./', {
  'geocode-wifi': function (towers, cb) {
    process.nextTick(function () {
      cb(null, 'bar')
    })
  }
})

var test = require('tape')
var wifiScanner = require('node-wifiscanner2')
var wifiTriangulate = require('./')

test('wifi error', function (t) {
  wifiScanner.scan = function (cb) {
    process.nextTick(function () {
      cb(new Error('foo'))
    })
  }

  wifiTriangulate(function (err, location) {
    t.ok(err instanceof Error)
    t.equal(err.message, 'foo')
    t.equal(location, undefined)
    t.end()
  })
})

test('all ok', function (t) {
  wifiScanner.scan = function (cb) {
    process.nextTick(function () {
      cb(null, [
        { mac: '0e:1d:41:0c:22:d4', ssid: 'NodeConf', signal: -72 },
        { mac: '01:1c:ef:0c:21:2a', ssid: 'NSA Lobby', signal: -2 },
        { mac: 'e0:53:41:92:00:bb', ssid: 'Microsoft Taco', signal: -89 }
      ])
    })
  }

  wifiTriangulate(function (err, location) {
    t.error(err)
    t.equal(location, 'bar')
    t.end()
  })
})
