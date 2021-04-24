import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { sendMessage } from 'shared/chat';
import { playerDialog } from 'shared/dialog';
import { lookupPlayerName } from 'shared/util';
import { runAnim, addSpotAnim } from 'shared/anim';

 _events.bindEventListener(EventType.COMMAND_ADMIN, "freeze", async (ctx) => {
	var player = ctx.player;
	const targetPlayer = await playerDialog(player, "Please enter the display name of the player you wish to freeze:");
		sendMessage(player, "You have frozen the player named: " + lookupPlayerName(targetPlayer));
		runAnim(player, 1979);
		addSpotAnim(player, 366);
		addSpotAnim(targetPlayer, 369);
		targetPlayer.lock();
		sendMessage(targetPlayer, "You have been frozen.");

});
		
 _events.bindEventListener(EventType.COMMAND_ADMIN, "unfreeze", async (ctx) => {
	var player = ctx.player;
	const targetPlayer = await playerDialog(player, "Please enter the display name of the player you wish to unfreeze:");
		sendMessage(player, "You have unfrozen the player: "+ lookupPlayerName(targetPlayer));
		targetPlayer.unlock();
		sendMessage(targetPlayer, "You can now move again!");
});