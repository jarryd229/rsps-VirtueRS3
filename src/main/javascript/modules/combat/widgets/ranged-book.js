/* globals EventType */
var component = require('shared/widget/component');

var config = require('engine/config');
var widget = require('shared/widget');

var abilities = require('shared/combat/abilities');
var actionBar = require('./action-bar');

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
		scriptManager.bind(EventType.IF_OPEN, 1452, function (ctx) {
			widget.setEvents(ctx.player, 1452, 1, 0, 187, 10320902);
			widget.setEvents(ctx.player, 1452, 7, 0, 16, 2);
		});

		scriptManager.bind(EventType.IF_BUTTON1, component(1452, 1), function (ctx) {
			var abilityId = config.enumValue(6738, ctx.slot);
			abilities.run(ctx.player, abilityId);
		});

		scriptManager.bind(EventType.IF_DRAG, component(1452, 1), function (ctx) {
			var hash = ctx.toHash;
			if (widget.getId(hash) == 1430) {
				actionBar.dragOnto(ctx.player, hash, 5, ctx.fromslot);
			}
		});
	}
})();
