# storage [![NPM version](https://badge.fury.io/js/storage-ttl.svg)](http://badge.fury.io/js/storage-ttl)

> Basic object store for javascript

## Install with [npm](npmjs.org)

```bash
npm i storage-ttl --save
```

## Usage

```js
var storage = require('storage-ttl');
```

### [.set](index.js#L38)

* `key` **{String}**
* `value` **{*}**

```js
storage.set('foo', {bar: 'bar'})
storage.set('foo', 'value')
```

Assign `value` to `key`.

### [.setTTL](index.js#L25)

* `key` **{String}**
* `value` **{*}**
* `ttl` **{Number}**: value in minutes

```js
storage.setTTL('foo', {bar: 'bar'}, 1)
storage.setTTL('foo', 'value', 1)
```

Assign `value` to `key` with a `ttl`.

### [.get](index.js#L2)

* `key` **{String}**    
* `returns` **{*}**: Returns the stored value of `key`  

```js
const value = storage.get('foo')
```

Get the stored value of `key`.

### [.remove](index.js#L45)

* `key` **{String}**

```js
storage.remove('foo')
```

Removes the stored value of `key`.

### [.count](index.js#L49)

```js
const count = storage.count()
```

Gets the stored keys count.

### [.all](index.js#L53)

```js
const items = storage.all()
```

Gets all the store keys.

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/JWebCoder/storage-ttl/issues)

## Author

**João Moura**

+ [github/jwebcoder](https://github.com/jwebcoder)

## License
Copyright (c) 2014 João Moura
Released under the MIT license
