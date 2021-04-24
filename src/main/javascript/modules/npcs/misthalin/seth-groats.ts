import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { chatnpc } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 452, async (ctx) => {
	await chatnpc(ctx.player, ctx.npc, "M'arnin'....going to milk cowsies!", 9807);
});