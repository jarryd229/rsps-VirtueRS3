import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';
import { getName } from 'shared/util';

_events.bindEventListener(EventType.OPNPC1, 14755, async (ctx) => {
	await chatplayer(ctx.player, "Merry Christmas Sioncorn!");
	await chatnpc(ctx.player, ctx.npc, "Merry Christmas "+ getName(ctx.player)+"!");
	await chatnpc(ctx.player, ctx.npc, "Thank you very much for your help with the decorations. I<br> could not have done it without you.");
});