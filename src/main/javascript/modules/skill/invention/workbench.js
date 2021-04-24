/* globals EventType */
var varp = require('engine/var/player');
var varbit = require('engine/var/bit');

var dialog = require('shared/dialog');
var widget = require('shared/widget');
var makex = require('shared/makex');

/**
 * @author Greco
 */
module.exports = (function () {
	return {
		init : init,
		selectInventionProduct : selectInventionProduct
	};

	function init (scriptManager) {
		scriptManager.bind(EventType.OPLOC1, 100874, function (ctx) {
			selectInventionProduct(ctx.player);
		});
	}

	function selectInventionProduct (player) {
		makex.selectProduct(player, 10738, 10739, 10740);
		dialog.setResumeHandler(player, function () {
			widget.closeAll(player);
			var productId = varp(player, 1170);
			var amount = varbit(player, 1003);
			if (amount) {
				varp(player, 1175, productId);
				var text = "You carefully make device.";
				makex.startCrafting(player, amount, 27997, text);
			}
		});
	}
})();
