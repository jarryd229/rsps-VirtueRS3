import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 14753, async (ctx) => {
	await chatplayer(ctx.player, "Merry Christmas Bogrog!");
	await chatnpc(ctx.player, ctx.npc, "Merry Christmas tiny human!");
});