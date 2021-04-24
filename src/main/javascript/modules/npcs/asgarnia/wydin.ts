import { Player } from 'engine/models';
import { EventType, Inv } from 'engine/enums';
import _events from 'engine/events';
import { setVarp, setVarc } from 'engine/var';

import { chatnpc, chatplayer, multi2, multi3 } from 'shared/dialog';
import { openCentralWidget } from 'shared/widget';

_events.bindEventListener(EventType.OPNPC1, 557, async (ctx) => {
	await chatnpc(ctx.player, ctx.npc, "Welcome to my food store! Would you like to buy<br> anything?");
	await multi3(ctx.player, "SELECT AN OPTION", "Yes please.", async () => {
		await chatplayer(ctx.player, "Yes please.");
		openshop(ctx.player);
	}, "No, thank you.", async () => {
		await chatplayer(ctx.player, "No, thank you.");
	}, "What can you recommend?", async () => {
		await chatplayer(ctx.player, "What can you recommend?");
		await chatnpc(ctx.player, ctx.npc, "We have this really exotic fruit all the way from Karamja.<br> It's called a banana.");
		await multi2(ctx.player, "SELECT AN OPTION", "Hmm, I think I'll try one.", async () => {
			await chatplayer(ctx.player, "Hmm, I think I'll try one.");
			await chatnpc(ctx.player, ctx.npc, "Great. You might as well take a look at the rest of my<br> wares as well.");
			openshop(ctx.player);
	    }, "I don't like the sound of that.", async () => {
		    await chatplayer(ctx.player, "I don't like the sound of that.");
		    await chatnpc(ctx.player, ctx.npc, "Well, it's your choice, but I do recommend them.");
	    });
	});
});

_events.bindEventListener(EventType.OPNPC3, 557, (ctx) => {
    openshop(ctx.player);
});

function openshop (player: Player) {
    setVarp(player, 304, Inv.WYDINS_FOOD_STORE);
	setVarc(player, 2360, "Wydin's Food Store");
	openCentralWidget(player, 1265);
}