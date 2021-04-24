import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer, } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 798, async (ctx) => {
	await chatplayer(ctx.player, "Are you still here?");
	await chatnpc(ctx.player, ctx.npc, "Yes... <br> I'm still plucking up the courage to run out past those<br> Black Knights.");
    await chatplayer(ctx.player, "Oh, go on. You can do it.<br> I'll watch your back.");
	await chatnpc(ctx.player, ctx.npc, "Well, I'll try. If I make it, you'll be able to find me at the<br> entrance to Taverley dungeon.");
	//TODO Screen fades out and back in then i guess a varbit
});
