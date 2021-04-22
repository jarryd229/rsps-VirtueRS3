import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';
import _map from 'engine/map';

import { runAnim } from 'shared/anim';
import _coords from 'shared/map/coords';
import { defaultHandler } from 'shared/util';
import { locationAnim } from 'shared/map/location';

	//halloween 2007   0,25,75,42,25
_events.bindEventListener(EventType.OPLOC1, 27211, (ctx) => {//ramp
	runAnim(ctx.player, 7273);
	_entity.forceMove(ctx.player, _entity.getCoords(ctx.player), 6, _coords(0,25,75,23,45), 160);
	_entity.setBas(ctx.player, -1);
});

_events.bindEventListener(EventType.OPLOC1, 27242, (ctx) => {//staircase
    _entity.setCoords(ctx.player, _coords(1639, 4835, 0));
});

_events.bindEventListener(EventType.OPLOC1, 27243, (ctx) => {//staircase
    _entity.setCoords(ctx.player, _coords(1703, 4826, 0));
});

_events.bindEventListener(EventType.OPLOC1, 27218, (ctx) => {//Slide
	var currentCoords = _entity.getCoords(ctx.player);
	var targetCoords = _coords(0,25,75,42,19);
	runAnim(ctx.player, 7274);
	_entity.forceMove(ctx.player, currentCoords, 220, targetCoords, 300);
});

_events.bindEventListener(EventType.OPLOC1, 27278, (ctx) => {//Springboard
	if (_map.getCoordX(ctx.location) == 1637 && _map.getCoordY(ctx.location) == 4817) {
	    locationAnim(ctx.location, 7296);
	    runAnim(ctx.player, 7268);
		 _entity.forceMove(ctx.player, _entity.getCoords(ctx.player), 5, _coords(0,25,75,37,20), 30);
	} else if (_map.getCoordX(ctx.location) == 1633 && _map.getCoordY(ctx.location) == 4824) {
	    locationAnim(ctx.location, 7296);
	    runAnim(ctx.player, 7268);
		_entity.forceMove(ctx.player, _entity.getCoords(ctx.player), 5, _coords(0,25,75,30,24), 30);
	} else if (_map.getCoordX(ctx.location) == 1630 && _map.getCoordY(ctx.location) == 4819) {
	    locationAnim(ctx.location, 7296);
	    runAnim(ctx.player, 7268);
	    _entity.forceMove(ctx.player, _entity.getCoords(ctx.player), 5, _coords(0,25,75,27,19), 30);
	} else if (_map.getCoordX(ctx.location) == 1624 && _map.getCoordY(ctx.location) == 4822) {
	    locationAnim(ctx.location, 7296);
	    runAnim(ctx.player, 7269);
		_entity.forceMove(ctx.player, _entity.getCoords(ctx.player), 5, _coords(0,25,75,24,28), 30);
		_entity.setBas(ctx.player, 616);
	} else {
		defaultHandler(ctx, "halloween 2007 Springboard");
	}
});