import { EventType, Stat } from 'engine/enums';
import _events from 'engine/events';

import { hasItem, giveItem } from 'shared/inv';
import { sendMessage } from 'shared/chat';
import { mesbox } from 'shared/dialog';

import { runFishingAction } from './logic';
import { randomStatChance, giveXp, hasLevel } from 'shared/stat';

/**
 * Small net fishing handler
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 01/16/2015
 */
_events.bindEventListener(EventType.OPNPC1, [316, 319, 320, 323, 325, 326, 327], (ctx) => {
	const player = ctx.player;
	if (!hasItem(player, 303)) {
		mesbox(player, "You need a small fishing net to fish here.");
		return;
	}
	const animId = 24930;
	sendMessage(player, "You cast out your net...");
	runFishingAction(player, ctx.npc, animId, 4, () => {
		if (hasLevel(player, Stat.FISHING, 15) && randomStatChance(player, Stat.FISHING, 24, 128)) {
			giveXp(player, Stat.FISHING, 40, false);
			giveItem(player, 321);
			sendMessage(player, "You catch some anchovies.");
		} else if (randomStatChance(player, Stat.FISHING, 48, 256)) {
			giveXp(player, Stat.FISHING, 10, false);
			giveItem(player, 317);
			sendMessage(player, "You catch some shrimps.");
		}
		return true;
	});
});
