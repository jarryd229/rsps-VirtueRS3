/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 05/11/2014
 */
 import { EventContext} from 'engine/models';
import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { sendCommandResponse } from 'shared/chat';
import { setVarp, setVarc, setVarBit } from 'engine/var';

_events.bindEventListener(EventType.COMMAND_ADMIN, ["varp", "setvarp"], (ctx) => {
	if (checkArgs(ctx)) {
	var key = parseInt(ctx.cmdArgs[0]);
	var value = parseInt(ctx.cmdArgs[1]);
	setVarp(ctx.player, key, value);
	sendCommandResponse(ctx.player, "Setting varp "+key+" to "+value, ctx.console);
	}
});

_events.bindEventListener(EventType.COMMAND_ADMIN, ["varbit", "setvarbit"], (ctx) => {
	if (checkArgs(ctx)) {
		var key = parseInt(ctx.cmdArgs[0]);
		var value = parseInt(ctx.cmdArgs[1]);
		try {
			setVarBit(ctx.player, key, value);
			sendCommandResponse(ctx.player, "Setting varbit "+key+" to "+value, ctx.console);
		} catch (e) {
			sendCommandResponse(ctx.player, "Failed to set varbit "+key, ctx.console);
		}
	}
});

_events.bindEventListener(EventType.COMMAND_ADMIN, ["varc", "setvarc"], (ctx) => {
	if (checkArgs(ctx)) {
		var key = parseInt(ctx.cmdArgs[0]);
		var value = parseInt(ctx.cmdArgs[1]);
		setVarc(ctx.player, key, value);
		sendCommandResponse(ctx.player, "Setting varc "+key+" to "+value, ctx.console);
	}
});

_events.bindEventListener(EventType.COMMAND_ADMIN, ["varcstr", "setvarcstr"], (ctx) => {
	if (checkArgs(ctx)) {
	    var key = parseInt(ctx.cmdArgs[0]);
	    var value = ctx.cmdArgs[1];
		setVarc(ctx.player, key, value);
		sendCommandResponse(ctx.player, "Setting varcstr "+key+" to "+value, ctx.console);
	}
});
	
function checkArgs (ctx: EventContext) {
	if (ctx.cmdArgs.length < 2) {
	    sendCommandResponse(ctx.player, "Usage: "+ctx.syntax+" [id] [value]", ctx.console);
	return false;
	} else {
	return true;
	}
}