import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatplayer, mesbox } from 'shared/dialog';
		//random say
		//api.entitySay(npc, "Zzzzz...");
		//api.entitySay(npc, "Huh, what? where?");
_events.bindEventListener(EventType.OPNPC1, 6130, async (ctx) => {
	await mesbox(ctx.player, "The little goblin appears to be fast asleep, and yet still fishing...");
	await chatplayer(ctx.player, "I think I'd rather not wake him.");
});