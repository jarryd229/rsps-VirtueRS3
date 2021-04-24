import { EventType, Stat } from 'engine/enums';
import _events from 'engine/events';
import _map from 'engine/map';
import _entity from 'engine/entity';

import _coords from 'shared/map/coords';
import { defaultHandler } from 'shared/util';
import { giveXp } from 'shared/stat';
import { runAnim } from 'shared/anim';


/**
 * @author Kayla
 * @since 5/03/2015
 */
_events.bindEventListener(EventType.OPLOC1, 10857, (ctx) => {
	if (_map.getCoordX(ctx.location) === 3354 && _map.getCoordY(ctx.location) == 2831) {
		_entity.setCoords(ctx.player, _coords(3355, 2833, 1));
	} else if (_map.getCoordX(ctx.location) === 3200 && _map.getCoordY(ctx.location) == 3243) {
		_entity.setCoords(ctx.player, _coords(3200, 3242, 1));
	} else {
		defaultHandler(ctx, "agility pyramid");
	}
});

_events.bindEventListener(EventType.OPLOC1, 10860, (ctx) => {
	if (_map.getCoordX(ctx.location) === 3364 && _map.getCoordY(ctx.location) === 2851) {
		_entity.setCoords(ctx.player, _coords(3368, 2851, 1));
		runAnim(ctx.player, 756);
		giveXp(ctx.player, Stat.AGILITY, 15);
	} else if (_map.getCoordX(ctx.location) === 3200 && _map.getCoordY(ctx.location) === 3243) {
		_entity.setCoords(ctx.player, _coords(3200, 3242, 1));
	} else {
		defaultHandler(ctx, "agility pyramid");
	}
});

_events.bindEventListener(EventType.OPLOC1, 10865, (ctx) => {
	if (_map.getCoordX(ctx.location) === 3354 && _map.getCoordY(ctx.location) === 2849) {
		_entity.setCoords(ctx.player, _coords(3354, 2850, 1));
		runAnim(ctx.player, 769);
		giveXp(ctx.player, Stat.AGILITY, 15);
	} else if (_map.getCoordX(ctx.location) === 3200 && _map.getCoordY(ctx.location) === 3243) {
		_entity.setCoords(ctx.player, _coords(3200, 3245, 0));
	} else {
		defaultHandler(ctx, "agility pyramid");
	}
});

_events.bindEventListener(EventType.OPLOC1, 10868, (ctx) => {
	if (_map.getCoordX(ctx.location) === 3375 && _map.getCoordY(ctx.location) === 2845) {
		_entity.setCoords(ctx.player, _coords(3375, 2840, 1));
		runAnim(ctx.player, 762);
		giveXp(ctx.player, Stat.AGILITY, 15);
	} else if (_map.getCoordX(ctx.location) === 3200 && _map.getCoordY(ctx.location) === 3243) {
		_entity.setCoords(ctx.player, _coords(3200, 3242, 1));
	} else {
		defaultHandler(ctx, "agility pyramid");
	}
});
