var FireType = require('./fire');

module.exports = (function () {
	var _fireLookup = {};
	
	for (var ordial in FireType) {
		_fireLookup[FireType[ordial].fireId] = FireType[ordial];
	}
	
	return {
		lookupFire : lookupFire
	};
	
	function lookupFire (fireId) {
		return _fireLookup[fireId];
	}
})();