troute
======

super fast tiny router

## install

```js
$ npm insall troute
```

## usage

using `troute` is super simple

## api

### troute(method, route, fn)

`troute` accepts a valid http method, a string or `RegExp` route, and a function `fn(req, res, next)` as a callback

* `method` - a valid http method
* `route` - a string or `RegExp` for route matching
* `fn` - a callback function when the route is matched

***see [sregex](https://github.com/jwerle/sregex)*** for more information defining string and `RegExp` routes

***example***

```js
require('http').createServer(troute('GET', '/home', function (req, res) {
  res.end('+1');
})).listen(8000);
```

## license

MIT