import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatplayer, chatnpc } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 6127, async (ctx) => {
	await chatplayer(ctx.player, "Hello.");
	await chatnpc(ctx.player, ctx.npc, "Shush! I'm concentrating.");
	await chatplayer(ctx.player, "Oh, sorry.");
});