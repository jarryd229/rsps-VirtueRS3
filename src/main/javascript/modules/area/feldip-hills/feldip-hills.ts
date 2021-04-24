import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { sendMessage } from 'shared/chat';
import _coords from 'shared/map/coords';
import { mesbox } from 'shared/dialog';

_events.bindEventListener(EventType.OPLOC1, 2836, (ctx) => {
	sendMessage(ctx.player, "Nothing interesting happens.");
});

_events.bindEventListener(EventType.OPLOC1, 2837, (ctx) => {
	sendMessage(ctx.player, "Nothing interesting happens.");
});

_events.bindEventListener(EventType.OPLOC1, 2811, async (ctx) => {
	_entity.setCoords(ctx.player, _coords(0,40,47,16,21));
	await mesbox(ctx.player, "Wow! That tunnel went a long way.");
});

_events.bindEventListener(EventType.OPLOC1, 2812, (ctx) => {
	_entity.setCoords(ctx.player, _coords(0,39,46,4,44));
});