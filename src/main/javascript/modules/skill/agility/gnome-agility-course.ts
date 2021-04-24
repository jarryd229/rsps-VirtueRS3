import { EventType, Stat } from 'engine/enums';
import _events from 'engine/events';
import _map from 'engine/map';
import _entity from 'engine/entity';

import _coords from 'shared/map/coords';
import { sendSpamMessage } from 'shared/chat';
import { defaultHandler } from 'shared/util';
import { giveXp } from 'shared/stat';
import { runAnim } from 'shared/anim';


/**
 * @author Titanium
 * @since 11/14/2015
 */
_events.bindEventListener(EventType.OPLOC1, 69526, (ctx) => {
	if (_map.getCoordX(ctx.location) === 2474 && _map.getCoordY(ctx.location) === 3435) {
		sendSpamMessage(ctx.player, "You walk carefully across the slippery log...");
		runAnim(ctx.player, 828);
		_entity.setCoords(ctx.player, _coords(2474, 3429, 0));
		giveXp(ctx.player, Stat.AGILITY, 2000);
	} else if (_map.getCoordX(ctx.location) === 2474 && _map.getCoordY(ctx.location) === 3429) {
		sendSpamMessage(ctx.player, "You walk carefully across the slippery log...");
		runAnim(ctx.player, 9908);
		_entity.setCoords(ctx.player, _coords(2474, 3436, 0));
	} else {
		defaultHandler(ctx, "gnome agility course");
	}
});

_events.bindEventListener(EventType.OPLOC1, 69383, (ctx) => {
	if (_map.getCoordX(ctx.location) === 2849 && _map.getCoordY(ctx.location) === 3354) {
		_entity.setCoords(ctx.player, _coords(2850, 3354, 1));
		runAnim(ctx.player, 769);
		giveXp(ctx.player, Stat.AGILITY, 15);
	} else if (_map.getCoordX(ctx.location) === 3200 && _map.getCoordY(ctx.location) === 3243) {
		_entity.setCoords(ctx.player, _coords(3200, 3245, 0));
	} else {
		defaultHandler(ctx, "gnome agility course");
	}
});

_events.bindEventListener(EventType.OPLOC1, 10860, (ctx) => {
	if (_map.getCoordX(ctx.location) === 2851 && _map.getCoordY(ctx.location) === 3364) {
		_entity.setCoords(ctx.player, _coords(2851, 3368, 1));
		runAnim(ctx.player, 756);
		giveXp(ctx.player, Stat.AGILITY, 15);
	} else if (_map.getCoordX(ctx.location) === 3200 && _map.getCoordY(ctx.location) === 3243) {
		_entity.setCoords(ctx.player, _coords(3200, 3242, 1));
	} else {
		defaultHandler(ctx, "gnome agility course");
	}
});

_events.bindEventListener(EventType.OPLOC1, 10868, (ctx) => {
	if (_map.getCoordX(ctx.location) === 2845 && _map.getCoordY(ctx.location) === 3375) {
		_entity.setCoords(ctx.player, _coords(2840, 3375, 1));
		runAnim(ctx.player, 762);
		giveXp(ctx.player, Stat.AGILITY, 15);
	} else if (_map.getCoordX(ctx.location) === 3200 && _map.getCoordY(ctx.location) === 3243) {
		_entity.setCoords(ctx.player, _coords(3200, 3242, 1));
	} else {
		defaultHandler(ctx, "gnome agility course");
	}
});
