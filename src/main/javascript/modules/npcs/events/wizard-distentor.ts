import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatnpc, chatplayer } from 'shared/dialog';
import { getName } from 'shared/util';

_events.bindEventListener(EventType.OPNPC1, 14748, async (ctx) => {
	await chatplayer(ctx.player, "Merry Christmas Distentor!");
	await chatnpc(ctx.player, ctx.npc, "Merry Christmas "+ getName(ctx.player)+"!");
	await chatplayer(ctx.player, "So, what do you think of the banquet?");
	await chatnpc(ctx.player, ctx.npc, "It's okay, the turkey isn't dancing to the table but the<br> snow imps are good waiters.");
	await chatplayer(ctx.player, "Did you try any of the pudding?");
	await chatnpc(ctx.player, ctx.npc, "I did! I may not be a big pudding fan, but anything cooked<br> in a cannon has to be tried!");
	await chatplayer(ctx.player, "You are braver then I am.");
});