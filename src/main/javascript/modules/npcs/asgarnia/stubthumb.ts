import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 8072, async (ctx) => {
	await chatplayer(ctx.player, "Hello there. Could I ask you about th-");
	await chatnpc(ctx.player, ctx.npc, "Hmph! Don't you know anything? It not safe to talk right<br> now.");
});