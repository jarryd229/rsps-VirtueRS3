import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { chatnpc } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 14936, async (ctx) => {
	await chatnpc(ctx.player, ctx.npc, "Greetings, adventurer. Duke Horacio has recently<br> provided us guards with advanced training, as well as<br> much improved swords! I feel much more confident in our<br> ability to defend Lumbridge now that we actually have", 9850);
	await chatnpc(ctx.player, ctx.npc, "proper equipment and traning!", 9847);
});