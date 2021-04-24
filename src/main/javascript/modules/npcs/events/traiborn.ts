import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';
import { getName } from 'shared/util';

_events.bindEventListener(EventType.OPNPC1, 14743, async (ctx) => {
	await chatplayer(ctx.player, "Merry Christmas Traiborn!");
	await chatnpc(ctx.player, ctx.npc, "Merry Christmas young thingummywut. Somebody has<br> stolen the eyes from the dragon bust in my room. Would<br> you know about that?");
	await chatplayer(ctx.player, "No...no idea. It must have been a thingummywut.");
	await chatnpc(ctx.player, ctx.npc, "Interesting theory "+ getName(ctx.player)+".....I shall have to<br> investigate more; those blasted thingummywuts cause me<br> so much trouble!");
	await chatplayer(ctx.player, "Yeah... Tell me about it.....");
});