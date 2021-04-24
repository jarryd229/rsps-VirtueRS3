import { EventType, Inv } from 'engine/enums';
import _events from 'engine/events';
import _config from 'engine/config';
import _inv from 'engine/inv';
import { varp } from 'engine/var';

import { defaultHandler } from 'shared/util';
import { sendMessage } from 'shared/chat';
import { takeItem, giveItem, invHasSpace } from 'shared/inv';
import { Player } from 'engine/models';

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 11/02/2015
 */
_events.bindEventListener(EventType.IF_OPEN, 109, (ctx) => {
	ENGINE.sendInv(ctx.player, Inv.LOAN_RETURN);
});

_events.bindEventListener(EventType.IF_BUTTON, 109, (ctx) => {
	var player = ctx.player;
	//Check script 654
	//Container 540 for loaned items?
	switch (ctx.component) {
		case 19://Reclaim item
			if (ctx.button === 1) {
				const loanedTo = varp(player, 429) as Player;
				if (varp(player, 431) > 0) {
					defaultHandler(ctx, "collection box");
					return;
				} else if (loanedTo !== null) {
					//Forcefully return
					//[Name] wants [his/her] item returned now. The item [he/she] lent to you has been returned to [his/her] Returned Items box.
					defaultHandler(ctx, "collection box");
					return;
				} else {
					if (!invHasSpace(player)) {
						sendMessage(player, "Not enough space.");
						return;
					}
					var objId = _inv.getObject(player, Inv.LOAN_RETURN, 0);
					if (objId !== -1) {
						takeItem(player, objId, 1, Inv.LOAN_RETURN);
						giveItem(player, objId, 1, Inv.BACKPACK);
						return;
					}
				}
				defaultHandler(ctx, "collection box");
				return;
			} else if (ctx.button === 10) {
				var desc = _config.objDesc(ctx.objId);
				sendMessage(player, desc);
				return;
			}
			defaultHandler(ctx, "collection box");
			return;
		default:
			defaultHandler(ctx, "collection box");
			return;
	}
});
