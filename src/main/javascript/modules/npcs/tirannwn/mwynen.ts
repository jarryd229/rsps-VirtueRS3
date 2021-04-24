import { EventType } from 'engine/enums';
import _events from 'engine/events';
import { Player, Npc } from 'engine/models';

import { chatnpc, chatplayer, multi2} from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 20295, async (ctx) => {
	var player = ctx.player;
	var npc = ctx.npc;
	await chatnpc(player, npc, "I'm sorry. I cannot talk now. My husband, Essyllt... He was<br> murdered.");
	await chatnpc(player, npc, "He was Lord Iorwerth's emissary of peace... He should<br> have been safe!");
    await multi2(player, "SELECT AN OPTION", "Tell her about Essyllt's true nature.", async () => {
		await chatplayer(ctx.player, "Essyllt... I remember that name. Yes, the Head Mourner. I<br> was the one who killed him.");
	    await chatnpc(player, npc, "What? How c...");
		await chatplayer(ctx.player, "He was no emissary of peace. He planned to wipe out the<br> entire population of Ardougne in order to regrow a<br> corrupt version of Prifddinas.");
	    await chatplayer(ctx.player, "There was no way I could allow him to live after that.");
	    await chatnpc(player, npc, "No! You have to be lying. Essyllt could never do that. G-get<br> away from me.");
	}, "Leave her to grieve.", async () => {
		await chatplayer(ctx.player, "I'm sorry for your loss, I'll leave you alone.");
	});
});