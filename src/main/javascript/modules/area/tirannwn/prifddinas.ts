import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { sendMessage } from 'shared/chat';
import { chatnpc } from 'shared/dialog';

_events.bindEventListener(EventType.OPLOC1, 92627, async (ctx) => {
    sendMessage(ctx.player, "This chest is securely locked shut.");
});

_events.bindEventListener(EventType.OPLOC1, 93068, async (ctx) => {
    await chatnpc(ctx.player, 21537, "Please don't go up there, those are my private quarters.");
});