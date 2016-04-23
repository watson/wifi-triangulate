'use strict'

var geocodeWifi = require('geocode-wifi')
var wifiScanner = require('node-wifiscanner2')

module.exports = function (cb) {
  wifiScanner.scan(function (err, towers) {
    if (err) return cb(err)
    geocodeWifi(towers, cb)
  })
}
