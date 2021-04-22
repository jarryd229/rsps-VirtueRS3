import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';
import _map from 'engine/map';

import { runAnim } from 'shared/anim';
import _coords from 'shared/map/coords';
import { defaultHandler } from 'shared/util';


_events.bindEventListener(EventType.OPLOC1, 6226, (ctx) => {
    if (_map.getCoordX(ctx.location) == 3019 && _map.getCoordY(ctx.location) == 9740) {//north ladder
	    runAnim(ctx.player, 828, function () {
            _entity.setCoords(ctx.player, _coords(3019, 3341, 0));
	    });	
	} else if (_map.getCoordX(ctx.location) == 3020 && _map.getCoordY(ctx.location) == 9739) {//east ladder
		runAnim(ctx.player, 828, function () {
            _entity.setCoords(ctx.player, _coords(3021, 3339, 0));
	    });	
	} else if (_map.getCoordX(ctx.location) == 3019 && _map.getCoordY(ctx.location) == 9738) {//south ladder
		runAnim(ctx.player, 828, function () {
            _entity.setCoords(ctx.player, _coords(3019, 3337, 0));
	    });	
	} else if (_map.getCoordX(ctx.location) == 3018 && _map.getCoordY(ctx.location) == 9739) {//west ladder
		runAnim(ctx.player, 828, function () {
            _entity.setCoords(ctx.player, _coords(3017, 3339, 0));
	    });			
	} else {
		defaultHandler(ctx, " ladder");
	}
});