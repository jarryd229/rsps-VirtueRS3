import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';
import { getName } from 'shared/util';

_events.bindEventListener(EventType.OPNPC1, 14746, async (ctx) => {
	await chatplayer(ctx.player, "Merry Christmas Aubury!");
	await chatnpc(ctx.player, ctx.npc, "Merry Christmas, "+ getName(ctx.player)+"!");
	await chatplayer(ctx.player, "How is the shop doing?");
	await chatnpc(ctx.player, ctx.npc, "It is a lot quieter these days, but I don't mind. Teleporting<br> people to the rune essence mine that many times in a day<br> gets tiring.");
	await chatplayer(ctx.player, "I can only imagine.");
});