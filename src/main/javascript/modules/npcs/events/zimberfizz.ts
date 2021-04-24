import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';
import { getName } from 'shared/util';

_events.bindEventListener(EventType.OPNPC1, 14754, async (ctx) => {
	await chatnpc(ctx.player, ctx.npc, "Merry Christmas "+ getName(ctx.player)+"!");
	await chatplayer(ctx.player, "Merry Christmas Zimberfizz! What are you doing here?");
	await chatnpc(ctx.player, ctx.npc, "I's 'ere on bizniss!!");
	await chatplayer(ctx.player, "I'm not going to ask....");
});