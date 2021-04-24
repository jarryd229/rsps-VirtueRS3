import { EventType, Inv } from 'engine/enums';
import { Player, Npc } from 'engine/models';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { sendMessage } from 'shared/chat';
import { chatnpc } from 'shared/dialog';

import { inClan } from './logic/core';
import { hasSpace, hasItem, giveItem } from 'shared/inv';

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 16/01/2015
 */
_events.bindEventListener(EventType.OPNPC1, 5915, (ctx) => {
	chatnpc(ctx.player, ctx.npc, `Hey ${_entity.getName(ctx.player)}, I am giving away free clan vex. If you right click me and click get vex.`);
});

_events.bindEventListener(EventType.OPNPC3, 5915, (ctx) => {
	startClanVexGiver(ctx.player, ctx.npc);//Get vexillum from
});

_events.bindEventListener(EventType.OPNPC1, 13633, (ctx) => {
	chatnpc(ctx.player, ctx.npc, `Hey ${_entity.getName(ctx.player)}, You can get a clan cape from me.`);
});

_events.bindEventListener(EventType.OPNPC3, 13633, (ctx) => {
	startClanCloakGiver(ctx.player, ctx.npc);
});

function startClanVexGiver(player: Player, npc: Npc) {
	if (!hasSpace(player)) {
		sendMessage(player, "Not enough space in your inventory.");
		return;
	}
	if (!inClan(player)) {
		sendMessage(player, "You must be in a clan to get a clan vex.");
		return;
	}
	if (hasItem(player, 20709) || hasItem(player, 20709, 1, Inv.BANK)) {
		sendMessage(player, "You already own a clan vexillum.");
		return;
	}
	giveItem(player, 20709, 1);
	chatnpc(player, npc, "Here you go " + _entity.getName(player) + ".");
}

function startClanCloakGiver(player: Player, npc: Npc) {
	if (!hasSpace(player)) {
		sendMessage(player, "Not enough space in your inventory.");
		return;
	}
	if (!inClan(player)) {
		sendMessage(player, "You must be in a clan to get a clan cloak.");
		return;
	}
	if (hasItem(player, 20708) || hasItem(player, 20709, 1, Inv.BANK)) {
		sendMessage(player, "You already own a clan cloak.");
		return;
	}
	giveItem(player, 20708, 1);
	chatnpc(player, npc, "Here you go " + _entity.getName(player) + ".");
}
