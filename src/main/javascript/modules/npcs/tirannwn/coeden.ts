import { EventType, Inv } from 'engine/enums';
import { Player, Npc } from 'engine/models';
import _events from 'engine/events';
import { setVarp, setVarc } from 'engine/var';

import { openCentralWidget } from 'shared/widget';
import { chatnpc, multi2 } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 19883, async (ctx) => {
 	await chatnpc(ctx.player, ctx.npc, "Hello...human. Welcome...to my store");
    multi2(ctx.player, "SELECT AN OPTION", "Tell me about yourself.", async () => {
 		await chatnpc(ctx.player, ctx.npc, "Oh...not much to tell.");
		await chatnpc(ctx.player, ctx.npc, "I...am Coeden. I...sell seeds.");
		await chatnpc(ctx.player, ctx.npc, "Crwys...are my friends.");
		await chatnpc(ctx.player, ctx.npc, "Take a look...at my seeds...for sale. I also sell...saplings.");
		openShop(ctx.player);
 	}, "Show me your store.", () => {
 		openShop(ctx.player);
 	});
 });

_events.bindEventListener(EventType.OPNPC3, 19883, (ctx) => {
 	openShop(ctx.player);
 });

 function openShop (player: Player) {
 	setVarp(player, 304, Inv.COEDENS_SEED_STORE);
 	setVarc(player, 2360, "COEDEN'S SEED STORE");
 	openCentralWidget(player, 1265, false);
 }