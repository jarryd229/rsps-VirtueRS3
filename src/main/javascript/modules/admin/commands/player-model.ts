var Gender = Java.type('org.virtue.game.entity.player.PlayerModel.Gender');
var Render = Java.type('org.virtue.game.entity.player.PlayerModel.Render');
var GlowColorBlock = Java.type('org.virtue.network.protocol.update.block.GlowColorBlock');
var World = Java.type('org.virtue.game.World');

import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { sendMessage, sendCommandResponse } from 'shared/chat';
import { runAnim, addSpotAnim } from 'shared/anim';

_events.bindEventListener(EventType.COMMAND_ADMIN, "anim", (ctx) => {
	var player = ctx.player;
	var args = ctx.cmdArgs;
    if (args.length < 1 || isNaN(parseInt(args[0]))) {
		sendCommandResponse(player, "Usage: "+ctx.syntax+" [id]", ctx.console);
	return;
	}
	var animId = parseInt(args[0]);
	runAnim(player, animId, function () {
	sendMessage(player, "Finished animation "+animId);
	});
	sendCommandResponse(player, "Running animation "+animId, ctx.console);
});

_events.bindEventListener(EventType.COMMAND_ADMIN, "gender", (ctx) => {
	var player = ctx.player;
	var args = ctx.cmdArgs;
	if (args[0] == "0") {
		player.getModel().setGender(Gender.MALE);
		player.getModel().refresh();
	} else if (args[0] == "1") {
		player.getModel().setGender(Gender.FEMALE);
		player.getModel().refresh();
	}
});

_events.bindEventListener(EventType.COMMAND_ADMIN, [ "spot", "spotanim" ], (ctx) => {
	var player = ctx.player;
	var args = ctx.cmdArgs;
    if (args.length < 1 || isNaN(parseInt(args[0]))) {
		sendCommandResponse(player, "Usage: "+ctx.syntax+" [id] [type]", ctx.console);
	return;
	}
	var spotAnimId = parseInt(args[0]);
	addSpotAnim(player, spotAnimId);
});

_events.bindEventListener(EventType.COMMAND_ADMIN, [ "hair", "hairstyle" ], (ctx) => {
	ctx.player.getModel().setTempStyle(0, parseInt(ctx.cmdArgs[0]));
	ctx.player.getModel().refresh();
});

_events.bindEventListener(EventType.COMMAND_ADMIN, [ "bas", "baseanim" ], (ctx) => {
	var player = ctx.player;
    if (ctx.cmdArgs.length < 1) {
		sendCommandResponse(player, "Usage: "+ctx.syntax+" [id]", ctx.console);
	return;
	}
	var animID = parseInt(ctx.cmdArgs[0]);
	player.getModel().setRenderAnimation(animID);
	player.getModel().refresh();
});

_events.bindEventListener(EventType.COMMAND_ADMIN, "render", (ctx) => {
	var player = ctx.player;
	if (ctx.cmdArgs[0] === "0") {
		player.getModel().setRender(Render.PLAYER);
		player.getModel().refresh();
	} else if (ctx.cmdArgs[0] === "1") {
		player.getModel().setRender(Render.NPC);
		player.getModel().setNPCId(ctx.cmdArgs[1]);
		player.getModel().refresh();
	} else if (ctx.cmdArgs[0] === "2") {
		player.getModel().setRender(Render.INVISIBLE);
		player.getModel().refresh();
	}
});

_events.bindEventListener(EventType.COMMAND_ADMIN, "glowcolor", (ctx) => {
	var player = ctx.player;
	var args = ctx.cmdArgs;
    if (args.length < 4) {
		sendCommandResponse(player, "Usage: "+ctx.syntax+" [red] [green] [blue] [alpha]", ctx.console);
	return;
	}
	var iterate = World.getInstance().getPlayers().iterator();
	var players = null;
	while (iterate.hasNext()) {
		players = iterate.next();
		players.queueUpdateBlock(new GlowColorBlock(args[0], args[1], args[2], args[3], 0, 100));
	}
});