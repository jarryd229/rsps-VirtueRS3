import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatplayer, chatnpc } from 'shared/dialog';

_events.bindEventListener(EventType.OPLOC1, 81, async (ctx) => {
	await chatplayer(ctx.player, "This door appears to be locked.",9807);
	await chatnpc(ctx.player, 253, "Yeah, it's to prevent people like you bothering us. Get out<br> of here.",9786);
});
