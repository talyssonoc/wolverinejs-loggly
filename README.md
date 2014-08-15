# WolverineJS Loggly driver

Driver for using [Loggly](https://www.loggly.com/docs/nodejs-logs/) service as output for [WolverineJS](https://github.com/talyssonoc/WolverineJS).

# Install

```sh
	$ npm install wolverinejs-loggly
```

# Usage

```js
	var Wolverine = require('wolverine');

	var logger = new Wolverine({
			driver: {
				lib: require('wolverinejs-loggly'),
				config: {
					//Your Loggly settings, see the item 2 here:
					//https://www.loggly.com/docs/nodejs-logs/
				}
			}
		});
```