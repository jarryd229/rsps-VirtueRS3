/* globals EventType */
var component = require('shared/widget/component');
var varbit = require('engine/var/bit');

var config = require('engine/config');
var widget = require('shared/widget');

var abilities = require('shared/combat/abilities');
var actionBar = require('./action-bar');
var common = require('./common');

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 01/02/2015
 */
module.exports = (function () {
	return {
		init : init
	};

	function init (scriptManager) {
		//Script 8426 = ability book options
		scriptManager.bind(EventType.IF_OPEN, 1449, function (ctx) {
			widget.setEvents(ctx.player, 1449, 1, 0, 189, 10320902);
			widget.setEvents(ctx.player, 1449, 7, 0, 16, 2);
		});

		scriptManager.bind(EventType.IF_BUTTON1, component(1449, 7), function (ctx) {
			if (ctx.slot === 11) {
				//Toggle hide
				varbit(ctx.player, 27344, !varbit(ctx.player, 27344) ? 1 : 0);
			} else {
				//Save selected defence tab
				varbit(ctx.player, 18793, common.tabIdFromSlot(ctx.slot));
			}
		});

		scriptManager.bind(EventType.IF_BUTTON1, component(1449, 1), function (ctx) {
			var enumId = -1;
			switch (varbit(ctx.player, 18793)) {
			case 0://Defence
				enumId = 6736;
				break;
			case 1://Constitution
				enumId = 6737;
				break;
			default:
				throw "Unsupported tab: "+varbit(ctx.player, 18793);
			}
			var abilityId = config.enumValue(enumId, ctx.slot);
			abilities.run(ctx.player, abilityId);
		});

		scriptManager.bind(EventType.IF_DRAG, component(1449, 1), function (ctx) {
			var hash = ctx.toHash;
			if (widget.getId(hash) == 1430) {
				actionBar.dragOnto(ctx.player, hash, varbit(ctx.player, 18793) ? 4 : 3, ctx.fromslot);
			}
		});
	}
})();
