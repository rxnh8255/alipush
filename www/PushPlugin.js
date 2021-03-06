
var PushPlugin = function() {};

PushPlugin.prototype.init = function(options,success, fail) {
	if (!options) {
		options = {account:''};
	}
	var params = {
		account: options.account,
	};

	return cordova.exec(success, fail, "PushPlugin", "init", [params]);
};

PushPlugin.prototype.initstate = function(success, fail) {
	return cordova.exec(success, fail, "PushPlugin", "initstate", [{}]);
};

PushPlugin.prototype.registerNotify = function(success, fail) {
	return cordova.exec(success, fail, "PushPlugin", "registerNotify", [{}]);
};
PushPlugin.prototype.getMessage = function(success, fail) {
	return cordova.exec(success, fail, "PushPlugin", "getMessage", [{}]);
};


window.pushPlugin = new PushPlugin();