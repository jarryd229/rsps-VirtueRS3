import { EventType } from 'engine/enums';
import _events from 'engine/events';
import _entity from 'engine/entity';

import _coords from 'shared/map/coords';
import { sendMessage } from 'shared/chat';

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 11/11/2014
 */
_events.bindEventListener(EventType.OPLOC1, 2465, (ctx) => {
	_entity.setCoords(ctx.player, _coords(3129, 3407, 0));//Air exit portal
	sendMessage(ctx.player, "You step through the portal.");
});

_events.bindEventListener(EventType.OPLOC1, 2466, (ctx) => {
	_entity.setCoords(ctx.player, _coords(2980, 3515, 0));//Mind exit portal
	sendMessage(ctx.player, "You step through the portal.");
});

_events.bindEventListener(EventType.OPLOC1, 2467, (ctx) => {
	_entity.setCoords(ctx.player, _coords(3157, 3160, 0));//Water exit portal
	sendMessage(ctx.player, "You step through the portal.");
});

_events.bindEventListener(EventType.OPLOC1, 2468, (ctx) => {
	_entity.setCoords(ctx.player, _coords(3304, 3476, 0));//Earth exit portal
	sendMessage(ctx.player, "You step through the portal.");
});

_events.bindEventListener(EventType.OPLOC1, 2469, (ctx) => {
	_entity.setCoords(ctx.player, _coords(3311, 3257, 0));//Fire exit portal
	sendMessage(ctx.player, "You step through the portal.");
});

_events.bindEventListener(EventType.OPLOC1, 2470, (ctx) => {
	_entity.setCoords(ctx.player, _coords(3055, 3443, 0));//Body exit portal
	sendMessage(ctx.player, "You step through the portal.");
});

_events.bindEventListener(EventType.OPLOC1, 2471, (ctx) => {
	_entity.setCoords(ctx.player, _coords(2406, 4379, 0));//Cosmic exit portal
	sendMessage(ctx.player, "You step through the portal.");
});

_events.bindEventListener(EventType.OPLOC1, 2474, (ctx) => {
	_entity.setCoords(ctx.player, _coords(3059, 3588, 0));//Chaos exit portal
	sendMessage(ctx.player, "You step through the portal.");
});

_events.bindEventListener(EventType.OPLOC1, 2473, (ctx) => {
	_entity.setCoords(ctx.player, _coords(2867, 3017, 0));//Nature exit portal
	sendMessage(ctx.player, "You step through the portal.");
});

_events.bindEventListener(EventType.OPLOC1, 2472, (ctx) => {
	_entity.setCoords(ctx.player, _coords(2856, 3379, 0));//Law exit portal
	sendMessage(ctx.player, "You step through the portal.");
});

_events.bindEventListener(EventType.OPLOC1, 2475, (ctx) => {
	_entity.setCoords(ctx.player, _coords(1863, 4637, 0));//Death exit portal
	sendMessage(ctx.player, "You step through the portal.");
});

_events.bindEventListener(EventType.OPLOC1, 2477, (ctx) => {
	_entity.setCoords(ctx.player, _coords(3560, 9779, 0));//Blood exit portal
	sendMessage(ctx.player, "You step through the portal.");
});
