troute
======

super fast tiny router

## install

```js
$ npm install troute
```

## usage

using `troute` is super simple

```js
require('http').createServer(troute('GET', '/home', function (req, res) {
  res.end('+1');
})).listen(8000);
```

you can use variable assignment in your route and capture their values in the `req.params` object

```js
require('http').createServer(troute('GET', '/videos/:id', function (req, res) {
	console.log(req.params.id); // '1234'
})).listen(5000);
```

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

### .get(route, fn)

matches all `GET` requests

* `route` - a string or `RegExp` for route matching
* `fn` - a callback function when the route is matched

***example***

```js
troute.get('/home', home);
```

### .post(route, fn)

matches all `POST` requests

* `route` - a string or `RegExp` for route matching
* `fn` - a callback function when the route is matched

***example***

```js
troute.post('/users', createUser);
```

### .put(route, fn)

matches all `PUT` requests

* `route` - a string or `RegExp` for route matching
* `fn` - a callback function when the route is matched

***example***

```js
troute.put('/videos/:id', editVideo);
```


### .del(route, fn)

matches all `DELETE` requests

* `route` - a string or `RegExp` for route matching
* `fn` - a callback function when the route is matched

***example***

```js
troute.del('/videos/:id', deleteVideo);
```

### .head(route, fn)

matches all `HEAD` requests

* `route` - a string or `RegExp` for route matching
* `fn` - a callback function when the route is matched

***example***

```js
troute.head('/resources', resourcesHead);
```

### .options(route, fn)

matches all `OPTIONS` requests

* `route` - a string or `RegExp` for route matching
* `fn` - a callback function when the route is matched

***example***

```js
troute.options('/videos', videosOptions);
```

## license

MIT
