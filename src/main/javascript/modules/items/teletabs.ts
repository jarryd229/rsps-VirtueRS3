import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';
import { CoordGrid, Player} from 'engine/models';

import { runAnim, addSpotAnim } from "shared/anim";
import { takeItem } from 'shared/inv';
import _coords from 'shared/map/coords';

_events.bindEventListener(EventType.OPHELD1, 8007, (ctx) => {//VarrockTele
     teletab(ctx.player, ctx.objId, _coords(3212, 3424, 0));
});

_events.bindEventListener(EventType.OPHELD1, 8008, (ctx) => {//LumbridgeTele
     teletab(ctx.player, ctx.objId, _coords(3222, 3218, 0));
});

_events.bindEventListener(EventType.OPHELD1, 8009, (ctx) => {//FaladorTele
     teletab(ctx.player, ctx.objId, _coords(2965, 3379, 0));
});

_events.bindEventListener(EventType.OPHELD1, 8010, (ctx) => {//CamelotTele
     teletab(ctx.player, ctx.objId, _coords(2757, 3477, 0));
});

_events.bindEventListener(EventType.OPHELD1, 8011, (ctx) => {//ArdougneTele
     teletab(ctx.player, ctx.objId, _coords(2661, 3303, 0));
});

_events.bindEventListener(EventType.OPHELD1, 8012, (ctx) => {//WatchtowerTele
     teletab(ctx.player, ctx.objId, _coords(2549, 3112, 0));
});

_events.bindEventListener(EventType.OPHELD1, 8013, (ctx) => {//HouseTele
     teletab(ctx.player, ctx.objId, _coords(2955, 3224, 0));
});

_events.bindEventListener(EventType.OPHELD1, 31665, (ctx) => {//GodwarsTele
     teletab(ctx.player, ctx.objId, _coords(2886, 5309, 0));
});		

function teletab(player: Player, item: number, coords: CoordGrid) {
    takeItem(player, item, 1);
	ENGINE.freezeEntity(player, 7);
	addSpotAnim(player, 1680);
	runAnim(player, 9597, function () {
		runAnim(player, 4731, function () {
			_entity.setCoords(player, coords);
			runAnim(player, 9598);
		});
	});
}