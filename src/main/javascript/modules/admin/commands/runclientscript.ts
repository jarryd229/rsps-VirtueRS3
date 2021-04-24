/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 05/11/2014
 */
import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { sendCommandResponse } from 'shared/chat';
import { runClientScript } from 'shared/util';

_events.bindEventListener(EventType.COMMAND_ADMIN, ["cs2", "cscript"], (ctx) => {
	var player = ctx.player;
	var args = ctx.cmdArgs;
	if (args.length < 1 || isNaN(parseInt(args[0]))) {
		sendCommandResponse(player, "Usage: "+ctx.syntax+" [id] [args]", ctx.console);
	return;
	}
	var scriptId = parseInt(args[0]);
	var params = [];
	for (var i = 1; i<args.length;i++) {
		if (!args[i].trim()) {
		continue;
		}
	try {
		params[i-1] = parseInt(args[i]);
		if (isNaN(params[i-1]as number)) {
		    params[i-1] = args[i];
	    }
	} catch (e) {
		params[i-1] = args[i];
	}
	}
	sendCommandResponse(player, "Running client script "+scriptId+" with params "+JSON.stringify(params), ctx.console);
	runClientScript(player, scriptId, params);
});