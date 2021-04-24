import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatplayer } from 'shared/dialog';

_events.bindEventListener(EventType.OPLOC1, 14964, async (ctx) => {//Barrel
	await chatplayer(ctx.player, "I think I should maby catch my own.");
});