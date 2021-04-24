import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';
import { getName } from 'shared/util';

_events.bindEventListener(EventType.OPNPC1, 14747, async (ctx) => {
	await chatplayer(ctx.player, "Merry Christmas, Thormac!");
	await chatnpc(ctx.player, ctx.npc, "Merry Christmas "+ getName(ctx.player)+"!");
	await chatnpc(ctx.player, ctx.npc, "You have not seen my pet scorpion around here, have<br> you?");
	await chatplayer(ctx.player, "No! Sorry, I've had enough of chasing animals for one day<br> thank you.");
	await chatnpc(ctx.player, ctx.npc, "Well, okay. Can you let me know if you find it, please?");
	await chatplayer(ctx.player, "Sure.");
});