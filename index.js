
/**
 * module dependencies
 */

var sregex = require('sregex')


/**
 * routes a request based on a method
 * and a given route and executes a 
 * given `fn` function
 *
 * @api public
 * @param {String} method
 * @param {String|RegExp} route
 * @param {Function} fn
 */

module.exports = troute;
function troute (method, route, fn) {
	var regex = sregex(route)

	// lowercase for comparison
	method = method.toLowerCase();

	return function (req, res, next) {
		// ensure next is a function in the case
		// where a stack based http request
		// api is not being used
		next = ('function' === typeof next)? next : function () {};

		if (method !== req.method.toLowerCase()) return next();
		else if (!regex.test(req.url)) return next();
		else fn(req, res, next);
	}
}