import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatplayer, chatnpc } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 6129, async (ctx) => {
	await chatplayer(ctx.player, "Where did you get that lens?");
	await chatnpc(ctx.player, ctx.npc, "From that strange metal thing up on the hill.");
	await chatplayer(ctx.player, "You should give that back!");
	await chatnpc(ctx.player, ctx.npc, "Even if it's cracked?");
	await chatplayer(ctx.player, "Ah, well, I suppose it's of no use. But, still.");
});