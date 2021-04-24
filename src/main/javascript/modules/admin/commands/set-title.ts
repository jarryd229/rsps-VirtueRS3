/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 05/11/2014
 */
import { EventType } from 'engine/enums';
import _events from 'engine/events';

_events.bindEventListener(EventType.COMMAND_ADMIN, ["title", "endtitle"], (ctx) => {
	var player = ctx.player;
	var args = ctx.cmdArgs;
	var message = "";
	for (var i = 0; i < args.length; i++) {
		message += (i === 0 ? (args[i].substring(0, 1).toUpperCase() + args[i].substring(1)) : args[i]) + (i == args.length - 1 ? "" : " ");
	}			
	if (ctx.syntax.toLowerCase() == "title") {
		player.getModel().setPrefixTitle(message + "");
		player.getModel().refresh();
	} else if (ctx.syntax.toLowerCase() == "endtitle") {
		player.getModel().setSuffixTitle(message + "");
		player.getModel().refresh();
	}
});
		
_events.bindEventListener(EventType.COMMAND_ADMIN, "removeTitle", (ctx) => {
	ctx.player.getModel().setPrefixTitle("");
	ctx.player.getModel().refresh();
});
	
_events.bindEventListener(EventType.COMMAND_ADMIN, "devTitle", (ctx) => {	
	ctx.player.getModel().setPrefixTitle("<col=33CCFF>");
	ctx.player.getModel().refresh();
});