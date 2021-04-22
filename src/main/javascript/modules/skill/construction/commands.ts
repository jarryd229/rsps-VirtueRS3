import { EventType } from 'engine/enums';
import _events from 'engine/events';
import _map from 'engine/map';
import _config from 'engine/config';

import { sendCommandResponse } from 'shared/chat';
import { varbit } from 'engine/var';

import { removeRoom, addRoom } from './house-builder';
import { enterHouse } from './house-portal';
import { loadRoom } from './room-data';

_events.bindEventListener(EventType.COMMAND, "house", (ctx) => {
 	enterHouse(ctx.player);
 });

_events.bindEventListener(EventType.COMMAND, "addroom", (ctx) => {
 	var args = ctx.cmdArgs;

 	if (args.length < 1) {
 		sendCommandResponse(ctx.player, "Usage: room {room_id}", ctx.console);
 		return;
 	}
 	var roomObjId = parseInt(args[0]);
 	if (!roomObjId) {
 		sendCommandResponse(ctx.player, "Usage: room {room_id} [{rotation}]", ctx.console);
 		return;
 	}

 	var rotation = 0;
 	if (args.length >= 2) {
 		rotation = parseInt(args[1]) & 0x3;
 	}
 	var zoneX = Math.floor(_map.getLocalX(ctx.player) / 8);
 	var zoneY = Math.floor(_map.getLocalY(ctx.player) / 8);
 	var level = _map.getLevel(ctx.player);

 	addRoom(ctx.player, roomObjId, zoneX, zoneY, level, rotation);
 	sendCommandResponse(ctx.player, `"Added ${_config.objName(roomObjId)} at ${zoneX}, ${zoneY}`, ctx.console);
 });

_events.bindEventListener(EventType.COMMAND, "delroom", (ctx) => {
 	var zoneX = Math.floor(_map.getLocalX(ctx.player) / 8);
 	var zoneY = Math.floor(_map.getLocalY(ctx.player) / 8);
 	var level = _map.getLevel(ctx.player);

 	var roomId = loadRoom(ctx.player, zoneX, zoneY, level);
 	if (roomId === -1 || varbit(ctx.player, 1528) === 0) {
 		sendCommandResponse(ctx.player, "No room exists at "+zoneX+", "+zoneY+", "+level, ctx.console);
 	} else {
 		removeRoom(ctx.player, roomId, zoneX, zoneY, level);
 		sendCommandResponse(ctx.player, "Removed room at "+zoneX+", "+zoneY+", "+level, ctx.console);
 	}
 });
