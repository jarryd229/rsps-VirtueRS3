/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 05/11/2014
 */
var BufferedWriter = Java.type('java.io.BufferedWriter');
var FileWriter = Java.type('java.io.FileWriter');
var NpcDropParser = Java.type('org.virtue.game.parser.impl.NpcDropParser');
var NpcDataParser = Java.type('org.virtue.game.parser.impl.NpcDataParser');

import { EventType } from 'engine/enums';
import _events from 'engine/events';
import _map from 'engine/map';

import { sendCommandResponse } from 'shared/chat';
import _coords from 'shared/map/coords';
import { lookupPlayerName } from 'shared/util';

_events.bindEventListener(EventType.COMMAND_ADMIN, ["addspawn","addnpcspawn"], (ctx) => {
	var player = ctx.player;
	var args = ctx.cmdArgs;
	if (args.length === 0 || isNaN(parseInt(args[0]))) {
		sendCommandResponse(player, "Usage: npcTypeID [posX] [posY] [posZ]", ctx.console);
	return false;
	}
	var writer = null;
	try {
		writer = new BufferedWriter(new FileWriter("./repository/NPCSpawns.txt", true));
		writer.newLine();
		var npcType = parseInt(args[0]);
		var playerCoords = _map.getCoords(player);
		var posX = _map.getCoordX(playerCoords);
		var posY = _map.getCoordY(playerCoords);
		var level = _map.getLevel(playerCoords);
		if (args.length >= 3) {
			posX = parseInt(args[1]);
			posY = parseInt(args[2]);
		}
		if (args.length >= 4) {
			level = parseInt(args[3]);
		}
		var npc = ENGINE.createNpc(npcType, _coords(posX, posY, level));
		writer.write("//Added by "+lookupPlayerName(player)+": "+lookupPlayerName(npc));
		writer.newLine();
		writer.write(npcType + " - " + posX + " " + posY + " " + level);
		ENGINE.spawnNpc(npc, true);
		writer.close();
	} catch (e) {
	if (writer !== null) {
		//writer.close();
	}
	}
});

_events.bindEventListener(EventType.COMMAND_ADMIN, "npc", (ctx) => {
	var args = ctx.cmdArgs;
	var player = ctx.player;
	if (args.length === 0 || isNaN(parseInt(args[0]))) {
		sendCommandResponse(player, "Usage: "+ctx.syntax+" [posX] [posY] [posZ]", ctx.console);
	return;
	}
	var npcID = parseInt(args[0]);
	var npc = ENGINE.createNpc(npcID, _map.getCoords(player));
	ENGINE.spawnNpc(npc);
	npc.getCombatSchedule().lock(player);
});

_events.bindEventListener(EventType.COMMAND_ADMIN, "reloadNPCDrops", (ctx) => {
	sendCommandResponse(ctx.player, "Reloaded Npc Drops.", ctx.console);
	NpcDropParser.loadNpcDrops();
});

_events.bindEventListener(EventType.COMMAND_ADMIN, "reloadNPCDefs", (ctx) => {
	sendCommandResponse(ctx.player, "NPC Combat Definitions has been reloaded!", ctx.console);
	NpcDataParser.loadJsonNpcData();
});