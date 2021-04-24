import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { chatnpc } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 17486, async (ctx) => {
	await chatnpc(ctx.player, 17507, "Greetings, adventurer. I've been called by Duke Horacio to<br> strengthen the magical defences of the town and the<br> castle. I would love to chat, but bear in mind that this is a<br> very delicate magical operation. Please let me");
	await chatnpc(ctx.player, 17507, "concentrate.");
});