import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { Expression } from 'shared/dialog/expression';
import { chatplayer, chatnpc } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 253, async (ctx) => {
	await chatplayer(ctx.player, "Hello.", 9807);
	await chatnpc(ctx.player, ctx.npc,
		"This area is restricted! Leave now and don't come back.",
		Expression.MEAN_FACE
	);
});
