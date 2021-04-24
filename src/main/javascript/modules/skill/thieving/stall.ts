import { EventType, Stat } from 'engine/enums';
import { Player, Location } from 'engine/models';
import _events from 'engine/events';
import _config from 'engine/config';

import { hasLevel, giveXp } from 'shared/stat';
import { sendMessage, sendSpamMessage } from 'shared/chat';
import { getId } from 'shared/util';
import { invHasSpace, giveItem } from 'shared/inv';
import { runAnim } from 'shared/anim';
import { mesbox } from 'shared/dialog';

/**
 * @author Kayla
 * @author rsJuuuuu
 * @since 01/16/2015
 */
_events.bindEventListener(EventType.OPLOC2, 34383, (ctx) => {
	if (checkRequirements(ctx.player, 20, ctx.location)) {
		sendSpamMessage(ctx.player, "You attempt to steal some silk from the silk stall.");
		stealFromStall(ctx.player, () => {
			giveXp(ctx.player, Stat.THIEVING, 24, false);
			giveItem(ctx.player, 950, 1);
			sendSpamMessage(ctx.player, "You steal a piece of silk.");
		});
	}

});

function stealFromStall(player: Player, onSuccess: () => void) {

	//TODO: This needs to check for nearby NPCs and allow the stall to respawn
	runAnim(player, 881, () => {
		onSuccess();
	});
}

function checkRequirements(player: Player, level: number, loc: Location): boolean {
	if (!invHasSpace(player)) {
		mesbox(player, "Your inventory is too full to hold any more.");
		return false;
	} else if (!hasLevel(player, Stat.THIEVING, level)) {
		const stallName = _config.locName(getId(loc)).toLowerCase();
		sendMessage(player, `You need a thieving level of ${level} to steal from the ${stallName}.`);
		return false;
	} else {
		return true;
	}
}
