### Utils & Helpers


### Installation
```sh
$ npm install uah
```


### Usage
```js
const uah = require('uah');
```

##### Type checking
```js
uah.isObject({}); 	// -> true
uah.isPlainObject({}); 	// -> true
uah.isFunction(()=>{});	// -> true
uah.isArray([]); 	// -> true
uah.isString('str'); 	// -> true
uah.isNumber(12.22); 	// -> true
uah.isInt(6); 		// -> true
uah.isBoolean(true); 	// -> true
```


### License

MIT
