import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events'; 
import _entity from 'engine/entity';

import _coords from 'shared/map/coords';

	//halloween 2014   2847, 6157
_events.bindEventListener(EventType.OPLOC1, 93392, (ctx) => {//exit portal
	 _entity.setCoords(ctx.player, _coords(2899, 3540, 0));
});

