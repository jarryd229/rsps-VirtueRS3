import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import _coords from 'shared/map/coords';


_events.bindEventListener(EventType.OPLOC1, 74864, async (ctx) => {//Stairs to Traverley
	_entity.setCoords(ctx.player, _coords(2885, 3395, 0));
});