/* globals ENGINE, Inv */
var util = require('shared/util');

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 22/03/2016
 */
module.exports = (function () {
	return {
		canDeposit : canDeposit,
		deposit : deposit
	};

	/**
	 * Checks whether the player has enough space to fit the specified item in their bank
	 */
	function canDeposit (player, objId, count) {
		var storedCount = ENGINE.itemTotal(player, Inv.BANK, objId);
		if (storedCount === 0) {//This means we don't have any of the item in the bank now, so we'll need one more slot
			var emptySlots = ENGINE.freeSpaceTotal(player, Inv.BANK);
			return emptySlots > 0;//TODO: Also count the bank boosters.
		} else {//Check whether we would excede the max count (2^31-1)
			return util.checkOverflow(storedCount, count);
		}
	}

	function deposit (player, objId, count) {// jshint ignore:line
		//TODO: Remove jshint ignore when implemented
		//var selectedTab = varbit(player, 288);
		//TODO: Finish this
	}
})();
