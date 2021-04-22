/* globals ENGINE, MesType */
import { Player } from 'engine/models';
import { MesType } from 'engine/enums/mes-type';
import { isAdmin } from 'shared/util';

export function sendMessage(player : Player, message : string, type? : MesType) {
	if (type) {
		ENGINE.sendMessage(player, message, type);
	}  else {
		ENGINE.sendMessage(player, message);
	}
}

export function sendSpamMessage (player : Player, message : string) {
	ENGINE.sendFilterMessage(player, message);
}

export function sendDebugMessage (player : Player, message : string) {
	if (isAdmin(player)) {
	ENGINE.sendMessage(player, message);
	}	
}

export function sendCommandResponse (player : Player, message : string, console : boolean = false) {
	ENGINE.sendMessage(player, message, console ? MesType.CONSOLE : MesType.GAME);
}
