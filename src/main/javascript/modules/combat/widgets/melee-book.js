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

		//Melee ability book
		scriptManager.bind(EventType.IF_OPEN, 1460, function (ctx) {
			widget.setEvents(ctx.player, 1460, 1, 0, 187, 10320902);
			widget.setEvents(ctx.player, 1460, 5, 0, 16, 2);
		});

		scriptManager.bind(EventType.IF_BUTTON1, component(1460, 5), function (ctx) {
			if (ctx.slot === 11) {
				//Toggle hide
				varbit(ctx.player, 27344, !varbit(ctx.player, 27344) ? 1 : 0);
			} else {
				//Save selected melee tab
				varbit(ctx.player, 18787, common.tabIdFromSlot(ctx.slot));
			}
		});

		scriptManager.bind(EventType.IF_BUTTON1, component(1460, 1), function (ctx) {
			//Script 8437 = ability enums
			var enumId = -1;
			switch (varbit(ctx.player, 18787)) {
			case 0://Attack
				enumId = 6734;
				break;
			case 1://Strength
				enumId = 6735;
				break;
			default:
				throw "Unsupported tab: "+varbit(ctx.player, 18787);
			}
			var abilityId = config.enumValue(enumId, ctx.slot);
			abilities.run(ctx.player, abilityId);
		});

		scriptManager.bind(EventType.IF_DRAG, component(1460, 1), function (ctx) {
			var hash = ctx.toHash;
			if (widget.getId(hash) == 1430) {
				actionBar.dragOnto(ctx.player, hash, varbit(ctx.player, 18787) ? 2 : 1, ctx.fromslot);
			}
		});
	}
})();
