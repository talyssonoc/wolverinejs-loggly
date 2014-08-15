var loggly = require('loggly'),
	NOOP = function NOOP(){};

var WolverineLoggly = function(wolverineObj, config) {
	this.wolverineObj = wolverineObj;
	this.client = loggly.createClient(config);
};

WolverineLoggly.prototype = {
	write: function write(message, data) {
		
		message = {
			message: ''
		};

		if(data.file) {
			message.file = data.file + ':' + data.line;
		}

		if(data.date) {
			message.date = data.date;
		}

		if(data.title) {
			message.message = data.title + ': ';
		}
		if(data.message) {
			message.message += data.message;
		}

		if(data.error) {
			if(this.wolverineObj.options.printStack) {
				message.message = data.error.stack;
			}
			else {
				message.message = data.error;
			}
		}

		this.client.log(message, [data.level], NOOP);
	}
};

module.exports = WolverineLoggly;