/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 05/11/2014
 */
import { EventType, Stat } from 'engine/enums';
import _events from 'engine/events';

import { giveXp, giveBonusXp, lookupStat, boostStat, setStatLevel, resetStat } from 'shared/stat';
import { sendCommandResponse } from 'shared/chat';

_events.bindEventListener(EventType.COMMAND_ADMIN, [ "bxp", "bonusxp" ], (ctx) => {
	var args = ctx.cmdArgs;
	if (args.length < 2) {
	    sendCommandResponse(ctx.player, "Usage: "+ctx.syntax+" [skill] [amount]", ctx.console);
		return;
	}
	var statId = lookupStat(args[0]);
	if (statId === -1) {
		sendCommandResponse(ctx.player, "Invalid skill: "+args[0], ctx.console);
		return;
	}
	var xp = parseInt(args[1]);
	if (isNaN(xp)) {
		sendCommandResponse(ctx.player, "Invalid xp: "+args[1], ctx.console);
		return;
	}
	giveBonusXp(ctx.player, statId, xp);
	sendCommandResponse(ctx.player, "Added "+xp+" bonus experience to "+args[0], ctx.console);
});

_events.bindEventListener(EventType.COMMAND_ADMIN, "xp", (ctx) => {
	var args = ctx.cmdArgs;
	if (args.length < 2) {
	    sendCommandResponse(ctx.player, "Usage: "+ctx.syntax+" [skill] [amount]", ctx.console);
		return;
	}
	var statId = lookupStat(args[0]);
	if (statId === -1) {
		sendCommandResponse(ctx.player, "Invalid skill: "+args[0], ctx.console);
		return;
	}
	var xp = parseInt(args[1]);
	if (isNaN(xp)) {
		sendCommandResponse(ctx.player, "Invalid xp: "+args[1], ctx.console);
		return;
	}
	giveXp(ctx.player, statId, xp, false);
	sendCommandResponse(ctx.player, "Added "+xp+" experience to "+args[0], ctx.console);
});

_events.bindEventListener(EventType.COMMAND_ADMIN, "boost", (ctx) => {
	var args = ctx.cmdArgs;
	if (args.length < 2) {
	    sendCommandResponse(ctx.player, "Usage: "+ctx.syntax+" [skill] [boostAmount]", ctx.console);
		return;
	}
	var statId = lookupStat(args[0]);
	if (statId === -1) {
		sendCommandResponse(ctx.player, "Invalid skill: "+args[0], ctx.console);
		return;
	}
	var boost = parseInt(args[1]);
	if (isNaN(boost)) {
		sendCommandResponse(ctx.player, "Invalid boost amount: "+args[1], ctx.console);
		return;
	}
	boostStat(ctx.player, statId, boost);
	sendCommandResponse(ctx.player, "Boosted "+args[0]+" by "+boost+" levels.", ctx.console);
});

_events.bindEventListener(EventType.COMMAND_ADMIN, "god", (ctx) => {
    setStatLevel(ctx.player, Stat.STRENGTH, 255);
	setStatLevel(ctx.player, Stat.ATTACK, 255);
	setStatLevel(ctx.player, Stat.MAGIC, 255);
	setStatLevel(ctx.player, Stat.RANGED, 255);
	setStatLevel(ctx.player, Stat.DEFENCE, 255);
	setStatLevel(ctx.player, Stat.PRAYER, 255);
	setStatLevel(ctx.player, Stat.CONSTITUTION, 255);
	ENGINE.restoreLifePoints(ctx.player);
	ENGINE.setRenderAnim(ctx.player, 2987);
});

_events.bindEventListener(EventType.COMMAND_ADMIN, "normal", (ctx) => {
    resetStat(ctx.player, Stat.STRENGTH);
	resetStat(ctx.player, Stat.ATTACK);
	resetStat(ctx.player, Stat.MAGIC);
	resetStat(ctx.player, Stat.RANGED);
	resetStat(ctx.player, Stat.DEFENCE);
	resetStat(ctx.player, Stat.PRAYER);
	resetStat(ctx.player, Stat.CONSTITUTION);
	ENGINE.restoreLifePoints(ctx.player);
	ENGINE.setRenderAnim(ctx.player, -1);
});

_events.bindEventListener(EventType.COMMAND_ADMIN, ["master", "max"], (ctx) => {
    for (var statId=0; statId < 27; statId++) {
		giveXp(ctx.player, statId, 13034431, false);
	}
	ENGINE.restoreLifePoints(ctx.player);
});