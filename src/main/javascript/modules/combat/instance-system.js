/* globals EventType */
var util = require('shared/util');
var varbit = require('engine/var/bit');
module.exports = (function () {
	return {
		init : init
	};

	function init (scriptManager) {

		scriptManager.bind(EventType.IF_BUTTON, 1591, function (ctx) {
			var player = ctx.player;
			switch (ctx.component) {
			case 150://Practice mode
			    var enabled = varbit(ctx.player, 27142) == 1;
	            varbit(ctx.player, 27142, enabled ? 0 : 1);
			return;

			default:
				util.defaultHandler(ctx, "instance system");
				return;
			}
		});
	}
})();
