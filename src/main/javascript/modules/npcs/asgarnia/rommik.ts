import { Player } from 'engine/models';
import { EventType, Inv } from 'engine/enums';
import _events from 'engine/events';
import { setVarp, setVarc } from 'engine/var';

import { chatnpc, chatplayer, multi2 } from 'shared/dialog';
import { openCentralWidget } from 'shared/widget';

_events.bindEventListener(EventType.OPNPC1, 585, async (ctx) => {
	 var player = ctx.player;
	await chatnpc(player, ctx.npc, "Would you like to buy some Crafting equipment?");
    await multi2(player, "CHOOSE AN OPTION", "Let's see what you've got, then.", () => {
	    openshop(player);
	}, "No thanks, I've got all the crafting equipment I need.", async () => {
		await chatplayer(player, "No thanks, I've got all the crafting equipment I need.");
	    await chatnpc(player, ctx.npc, "Okay. Fare well on your travels.");
	});
});

_events.bindEventListener(EventType.OPNPC3, 585, (ctx) => {
	openshop(ctx.player);
});

function openshop (player: Player) {
    setVarp(player, 304, Inv.ROMMIKS_CRAFTY_SUPPLIES);
	setVarc(player, 2360, "Rommik's Crafty Supplies");
	openCentralWidget(player, 1265);
}