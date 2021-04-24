import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { sendCommandResponse } from 'shared/chat';

var World = Java.type('org.virtue.game.World');

_events.bindEventListener(EventType.COMMAND_ADMIN, "bc", (ctx) => {
	var player = ctx.player;
	var args = ctx.cmdArgs;

	if (args.length < 1) {
		sendCommandResponse(player, "<col=0099CC>ERROR! Message is to short or needs a space</col>", ctx.console);
		return;
	}
	var message = args[0].charAt(0).toUpperCase() + args[0].substr(1).toLowerCase();
	for (var i = 1; i < args.length; i++) {
		message += " " + args[i];
	}
	World.getInstance().sendAdminBroadcast(`[${_entity.getName(player)}]: ${message}`);
	sendCommandResponse(player, "Sent Broadcast accross the server.", ctx.console);
});
