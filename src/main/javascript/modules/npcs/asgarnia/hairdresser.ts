import { Player } from 'engine/models';
import { EventType, Inv } from 'engine/enums';
import _events from 'engine/events';
import { setVarp, setVarc } from 'engine/var';

import { chatnpc, chatplayer, multi2, multi3 } from 'shared/dialog';
import { openCentralWidget } from 'shared/widget';

_events.bindEventListener(EventType.OPNPC1, 598, async (ctx) => {
	await chatnpc(ctx.player, ctx.npc, "Good afternoon, sir. In need of a haircut or shave, are we?");
	await multi2(ctx.player, "SELECT AN OPTION", "Yes please.", async () => {
		openshop(ctx.player);
	}, "No, thank you.", async () => {
		await chatplayer(ctx.player, "No, thank you.");
        await chatnpc(ctx.player, ctx.npc, "Very well. Come back if you change your mind.");
	});
});

_events.bindEventListener(EventType.OPNPC3, 598, (ctx) => {
    openshop(ctx.player);
});

function openshop (player: Player) {
    //setVarp(player, 304, Inv.WYDINS_FOOD_STORE);
	//setVarc(player, 2360, "Wydin's Food Store");
	openCentralWidget(player, 309);
}