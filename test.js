var troute = require('./')
	,	assert = require('assert')
	, http = require('http')

var server, request;

server = http.createServer(troute('GET', '/test', function (req, res, next) {
	assert(req.url === '/test');
	assert(req.method === 'GET');
	res.end('+1');
	server.close();
}));

server.listen(8000, function () {;

	request = http.request({
		host: 'localhost', port: 8000,
		path: '/test', method: 'GET'
	}, function (res) {
		res.on('data', function (chunk) {
			
			assert('+1' === chunk.toString());

			console.log();
			console.log('   √ ok');
			
		});
	});

	request.on('error', function (err) {
		server.close();
		throw err;
	});

	request.end();

});