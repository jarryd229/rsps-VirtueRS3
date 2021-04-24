import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';
import { getName } from 'shared/util';

_events.bindEventListener(EventType.OPNPC1, 14745, async (ctx) => {
    await chatplayer(ctx.player, "Merry Christmas Zavistic!");
	await chatnpc(ctx.player, ctx.npc, "Merry Christmas "+ getName(ctx.player)+"!");
	await chatplayer(ctx.player, "This is a great banquet!");
	await chatnpc(ctx.player, ctx.npc, "Yes, this is the first thing I have seen tower wizards do<br> correctly... They must have had some help.");
	await chatplayer(ctx.player, "Maby, yes - They do have good friends.");
});