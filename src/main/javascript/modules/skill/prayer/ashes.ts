import { EventType, Inv, Stat } from 'engine/enums';
import { Player } from 'engine/models';
import _events from 'engine/events';
import _inv from 'engine/inv';

import { runAnim, addSpotAnim } from 'shared/anim';
import { sendSpamMessage } from 'shared/chat';
import { giveXp } from 'shared/stat';
/**
 * @author Kayla
 * @since 19/11/2014
 */

_events.bindEventListener(EventType.OPHELD1, 20264, (ctx) => {
	scatterAshes(ctx.player, ctx.slot, 56, 4);
});

_events.bindEventListener(EventType.OPHELD1, 20266, (ctx) => {
	scatterAshes(ctx.player, ctx.slot, 47, 12.5);
});

_events.bindEventListener(EventType.OPHELD1, 20268, (ctx) => {
	scatterAshes(ctx.player, ctx.slot, 40, 62.5);
});
	

function scatterAshes (player: Player, slot: number, spotAnimId: number, xp: number) {
	_inv.clearSlot(player, Inv.BACKPACK, slot);
	addSpotAnim(player, spotAnimId);
	runAnim(player, 445, function () {
		sendSpamMessage(player, "You scatter the ashes into the wind.");
		giveXp(player, Stat.PRAYER, xp);
	});
}