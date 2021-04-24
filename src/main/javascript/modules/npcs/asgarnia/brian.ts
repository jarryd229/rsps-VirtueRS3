import { Player } from 'engine/models';
import { EventType, Inv } from 'engine/enums';
import _events from 'engine/events';
import { setVarp, setVarc } from 'engine/var';

import { chatnpc, chatplayer, multi2 } from 'shared/dialog';
import { openCentralWidget } from 'shared/widget';

_events.bindEventListener(EventType.OPNPC1, 1860, async (ctx) => {
	var player = ctx.player;
	var npc = ctx.npc;
	await chatnpc(player, npc, "Would you like to buy some archery equipment?")
    await multi2(player, "SELECT AN OPTION", "No thanks, I've got all the archery equipment I need.", async () => {
	    await chatplayer(player, "No thanks, I've got all the archery equipment I need.")
	    await chatnpc(player, npc, "Okay. Fare well on your travels.")
	}, "Let's see what you've got, then.", () => {
        openshop(player);
	});
});

_events.bindEventListener(EventType.OPNPC3, 1860, (ctx) => {
	openshop(ctx.player);
});

function openshop (player: Player) {
        setVarp(player, 304, Inv.BRIANS_ARCHERY_SUPPLIES);
	    setVarc(player, 2360, "Brian's Archery Supplies");
	    openCentralWidget(player, 1265);
}