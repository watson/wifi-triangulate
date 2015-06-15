# wifi-triangulate

Finds your current position on planet earth using the wifi access points
in your vicinity 

[![Build status](https://travis-ci.org/watson/wifi-triangulate.svg?branch=master)](https://travis-ci.org/watson/wifi-triangulate)

[![js-standard-style](https://raw.githubusercontent.com/feross/standard/master/badge.png)](https://github.com/feross/standard)

## Installation

```
npm install wifi-triangulate
```

## Usage

This module requires that the wifi card on your computer is active and
that you have access to the internet in order to communicate with Google
so that it can triangulate your position.

```js
var triangulate = require('wifi-triangulate')

triangulate(function (err, location) {
  if (err) throw err
  console.log(location) // => { lat: 38.0690894, lng: -122.8069356, accuracy: 42 }
})
```

## CLI

```sh
$ npm install --global wifi-triangulate
```

```sh
$ wifi-triangulate --help

  Finds your current position on planet earth using the wifi access points in your vicinity

  Example
    wifi-triangulate
    => {
         "lat": 38.0690894,
         "lng": -122.8069356,
         "accuracy": 42
       }
```

## License

MIT
