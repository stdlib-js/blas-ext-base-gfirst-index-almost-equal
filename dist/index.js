/** @license Apache-2.0 */

'use strict';

/**
* Return the index of the first element in a strided array which is almost equal to a corresponding element in another strided array.
*
* @module @stdlib/blas-ext-base-gfirst-index-almost-equal
*
* @example
* var gfirstIndexAlmostEqual = require( '@stdlib/blas-ext-base-gfirst-index-almost-equal' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 5.0, 4.0, 3.0, 2.0, 1.0 ];
*
* var idx = gfirstIndexAlmostEqual( x.length, 1, x, 1, y, 1 );
* // returns 2
*
* @example
* var gfirstIndexAlmostEqual = require( '@stdlib/blas-ext-base-gfirst-index-almost-equal' );
*
* var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
* var y = [ 5.0, 4.0, 3.0, 2.0, 1.0 ];
*
* var idx = gfirstIndexAlmostEqual.ndarray( x.length, 1, x, 1, 0, y, 1, 0 );
* // returns 2
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var ndarray = require( './ndarray.js' );


// MAIN //

setReadOnly( main, 'ndarray', ndarray );


// EXPORTS //

module.exports = main;
