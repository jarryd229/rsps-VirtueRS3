import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { sendMessage } from 'shared/chat';
import { playerDialog } from 'shared/dialog';
import { lookupPlayerName } from 'shared/util';

_events.bindEventListener(EventType.COMMAND_MOD, ["mute","muteplayer"], async (ctx) => {
	const targetPlayer = await playerDialog(ctx.player, "Please enter the display name of the player you wish to mute:");
	sendMessage(ctx.player, "Applying mute to "+lookupPlayerName(targetPlayer)+".");
	targetPlayer.getChat().setMuted(true);
});

_events.bindEventListener(EventType.COMMAND_MOD, ["unmute","unmuteplayer"], async (ctx) => {
	const targetPlayer = await playerDialog(ctx.player, "Please enter the display name of the player you wish to mute:");
	sendMessage(ctx.player, "Removing mute on player "+lookupPlayerName(targetPlayer)+".");
	targetPlayer.getChat().setMuted(false);
});