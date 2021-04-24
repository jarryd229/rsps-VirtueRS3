import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';
import { getName } from 'shared/util';

_events.bindEventListener(EventType.OPNPC1, 14759, async (ctx) => {
	await chatplayer(ctx.player, "Merry Christmas Mizgog!");
	await chatnpc(ctx.player, ctx.npc, "Merry Christmas "+ getName(ctx.player)+"! Have you seen what<br> Wizard Grayzag is up to now? He has picked a fight with<br> Frumscone - They are fighting it out behind that screen<br> there...");
	await chatplayer(ctx.player, "What happened?");
	await chatnpc(ctx.player, ctx.npc, "I'm not sure, I didn't see. I have no doubt that it will be a<br> childish reason, though...");
});