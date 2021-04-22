import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { sendMessage } from 'shared/chat';
import _coords from 'shared/map/coords';

_events.bindEventListener(EventType.OPLOC1, 26806, (ctx) => {//Staircase
	_entity.setCoords(ctx.player, _coords(3230, 3231, 0));
});

_events.bindEventListener(EventType.OPLOC2, 26807, (ctx) => {//Table
	sendMessage(ctx.player, "todo");
});
	

