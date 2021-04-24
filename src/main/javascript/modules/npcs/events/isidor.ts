import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';
import { getName } from 'shared/util';
		
_events.bindEventListener(EventType.OPNPC1, 14760, async (ctx) => {
	await chatplayer(ctx.player, "Merry Christmas Isidor!");
	await chatnpc(ctx.player, ctx.npc, "Merry Christmas "+ getName(ctx.player)+"! Thank you for your help,<br> the banquet hall looks very snowy. Good job!");
});