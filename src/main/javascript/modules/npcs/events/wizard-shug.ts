import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 14756, async (ctx) => {
	await chatplayer(ctx.player, "Merry Christmas Shug!");
	await chatnpc(ctx.player, ctx.npc, "Zzzz....");
	await chatnpc(ctx.player, ctx.npc, "Urrgghhh...Watch out for that thingummywut Traiborn!!");
	await chatnpc(ctx.player, ctx.npc, "Zzzz....");
	await chatplayer(ctx.player, "I had better not let Traiborn know about this. It won't do<br> him any good....");
});