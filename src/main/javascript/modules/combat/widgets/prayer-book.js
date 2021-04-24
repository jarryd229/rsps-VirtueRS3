/* globals EventType */
var anim = require('shared/anim');

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
		scriptManager.bind(EventType.IF_BUTTON, 1458, function (ctx) {
			var player = ctx.player;

			if(!player.getCombat().getPrayer().usingPrayer) {
				player.getCombat().getPrayer().activate(ctx.slot);
				anim.run(player, 18018);
			} else {
				player.getCombat().getPrayer().deactivate(ctx.slot);
			}
		});
	}
})();
