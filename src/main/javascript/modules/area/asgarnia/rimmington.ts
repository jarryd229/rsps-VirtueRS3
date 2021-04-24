import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _map from 'engine/map';

import { mesbox, chatnpc } from 'shared/dialog'; 
import { giveItem } from 'shared/inv'; 
import { runAnim } from 'shared/anim';
import { getLocShape, getLocRotation } from 'shared/map/location';
import { getId } from 'shared/util';

_events.bindEventListener(EventType.OPLOC1, 9662, (ctx) => {//spade in mining area
	runAnim(ctx.player, 832, function () {
	    giveItem(ctx.player, 952, 1);
	    _map.delay(_map.addLoc(10626, _map.getCoords(ctx.location), getLocShape(ctx.location), getLocRotation(ctx.location)), function () {
	        _map.addLoc(getId(ctx.location), _map.getCoords(ctx.location), getLocShape(ctx.location), getLocRotation(ctx.location));
	    }, 40);
	});
});
 
_events.bindEventListener(EventType.OPLOC1, 31459, async (ctx) => {//Customs Sergeant
	await chatnpc(ctx.player, 7830, "Zzzzzzzzzzzzzzzzzzz");
});

_events.bindEventListener(EventType.OPLOC1, 71969, async (ctx) => {//locker
	await chatnpc(ctx.player, 7831, "Hey! Nobody stores anything in there unless thay are<br> under arrest.");
});

_events.bindEventListener(EventType.OPLOC1, 71970, async (ctx) => {//notices outside Customs Sergeant
	await mesbox(ctx.player, "There are no new notices here.");
});

_events.bindEventListener(EventType.OPLOC1, 72434, async (ctx) => {//Sleeping man
	await chatnpc(ctx.player, 15476, "...ears to pour their course...");
});

_events.bindEventListener(EventType.OPLOC1, 72442, async (ctx) => {//Waylan
	await chatnpc(ctx.player, 15471, "...wending through the willows...");
});