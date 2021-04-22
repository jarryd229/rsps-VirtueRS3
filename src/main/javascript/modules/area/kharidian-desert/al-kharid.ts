import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events'; 
import _map from 'engine/map';

import { getLocShape, getLocRotation } from 'shared/map/location';
import { sendMessage } from 'shared/chat';
import _coords from 'shared/map/coords';

_events.bindEventListener(EventType.OPLOC1, 76216, (ctx) => {
    _map.addLoc(76217, _map.getCoords(ctx.location), getLocShape(ctx.location), getLocRotation(ctx.location));
}); 
 
_events.bindEventListener(EventType.OPLOC1, 76217, (ctx) => {
    sendMessage(ctx.player, "You search the chest but find nothing.");
});

_events.bindEventListener(EventType.OPLOC2, 76217, (ctx) => {
	_map.addLoc(76216, _map.getCoords(ctx.location), getLocShape(ctx.location), getLocRotation(ctx.location));
});