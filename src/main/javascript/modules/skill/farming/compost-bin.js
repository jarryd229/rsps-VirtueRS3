/* globals EventType */
var varbit = require('engine/var/bit');

var inv = require('shared/inv');
var chat = require('shared/chat');
var util = require('shared/util');

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 22/02/2015
 */
module.exports = (function () {
	return {
		init : init
	};

	function init (scriptManager) {
		scriptManager.bind(EventType.OPLOC1, [ 7836, 7837, 7838, 7839, 56684, 66577, 93286 ], function (ctx) {
			var player = ctx.player;
			var binId = ctx.locTypeId;
			var currentStatus = getStatus(player, binId);

			if (currentStatus > 15 && currentStatus <= 30) {
				if (inv.has(player, 1925)) {
					inv.take(player, 1925, 1);
					inv.give(player, 6032, 1);
					if (currentStatus > 16) {
						setStatus(player, binId, currentStatus-1);
					} else {
						setStatus(player, binId, 0);
					}
				} else {
					chat.sendMessage(player, "Need a bucket!");
				}
			} else {
				util.defaultHandler(ctx, "compost bin");
			}
		});
	}

	function getStatus (player, binId) {
		switch (binId) {
		case 7836://Falador
			return varbit(player, 84);
		case 7837://Catherby
			return varbit(player, 85);
		case 7838://Morytania
			return varbit(player, 86);
		case 7839://Ardougne
			return varbit(player, 87);
		case 56684://Herblore Habitat
			return varbit(player, 16095);
		case 66577://Taverly
			return varbit(player, 148);
		case 93286://Prifddinas
			return varbit(player, 24966);
		default:
			throw "Unsupoorted bin: "+binId;
		}
	}

	function setStatus (player, binId, status) {
		switch (binId) {
		case 7836://Falador
			varbit(player, 84, status);
			return;
		case 7837://Catherby
			varbit(player, 85, status);
			return;
		case 7838://Morytania
			varbit(player, 86, status);
			return;
		case 7839://Ardougne
			varbit(player, 87, status);
			return;
		case 56684://Herblore Habitat
			varbit(player, 16095, status);
			return;
		case 66577://Taverly
			varbit(player, 148, status);
			return;
		case 93286://Prifddinas
			varbit(player, 24966, status);
			return;
		default:
			throw "Unsupoorted bin: "+binId;
		}
	}
})();
