import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';
import { getName } from 'shared/util';

_events.bindEventListener(EventType.OPNPC1, 14752, async (ctx) => {
	await chatplayer(ctx.player, "Merry Christmas Korvak!");
	await chatnpc(ctx.player, ctx.npc, "Merry Christmas "+ getName(ctx.player)+"!");
});