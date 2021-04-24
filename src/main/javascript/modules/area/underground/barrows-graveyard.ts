import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { runAnim } from 'shared/anim';
import _coords from 'shared/map/coords';
 
 _events.bindEventListener(EventType.OPLOC1, 87998, (ctx) => {//graveyard
	runAnim(ctx.player, 15456, function () {
		runAnim(ctx.player, -1);
        _entity.setCoords(ctx.player, _coords(0,55,51,20,46));
	});
});