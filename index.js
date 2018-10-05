'use strict';


//┐  UTILS & HELPERS
//╠──░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//┘

	const __fn = Object.create(null);



	//┐  TYPE CHECKING
	//╠──⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙⁘⁙
	//┘

		function isObject (value) {
			return !!value && typeof value === 'function' || typeof value === 'object';
		}

		__fn.isObject = isObject;


		function isPlainObject (value) {
			return !!value && typeof value === 'object' && value.constructor === Object && toString.call(value) === '[object Object]';
		}

		__fn.isPlainObject = isPlainObject;


		function isArray (value) {
			return toString.call(value) === '[object Array]';
		}

		(!!Array.isArray) && (isArray = Array.isArray); __fn.isArray = isArray;


		function isString (value) {
			return toString.call(value) === '[object String]';
		}

		__fn.isString = isString;


		function isFunction (value) {
			return toString.call(value) === '[object Function]';
		}

		__fn.isFunction = isFunction;


		function isBoolean (value) {
			return value === true || value === false || toString.call(value) === '[object Boolean]';
		}

		__fn.isBoolean = isBoolean;


		function isNumber (value) {
			return toString.call(value) === '[object Number]';
		}

		__fn.isNumber = isNumber;


		function isInt (value) {
			return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
		}

		__fn.isInt = Number.isInteger || isInt;




//┐  EXPORTS
//╠──░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//┘

	module.exports = __fn;