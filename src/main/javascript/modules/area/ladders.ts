import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';
import _map from 'engine/map';


import { runAnim } from 'shared/anim';
import { defaultHandler } from 'shared/util';
import { multi3 } from 'shared/dialog';
import _coords from 'shared/map/coords';

        _events.bindEventListener(EventType.OPLOC1, 29355, (ctx) => {
		    if (_map.getCoordX(ctx.location) == 3116 && _map.getCoordY(ctx.location) == 9852) {//ladder from hill giants to varrock
		        runAnim(ctx.player, 828, function () {
                _entity.setCoords(ctx.player, _coords(3115, 3452, 0));
	            });
		    } else if (_map.getCoordX(ctx.location) == 3209 && _map.getCoordY(ctx.location) == 9616) {//ladder to lumbridge castle where cook is
		        runAnim(ctx.player, 828, function () {
                _entity.setCoords(ctx.player, _coords(3210, 3216, 0));
	            });
		    } else {
			    defaultHandler(ctx, "unhandled ladder");
		    }
        });

		_events.bindEventListener(EventType.OPLOC1, [36768, 11727], (ctx) => {
			runAnim(ctx.player, 828);
			ENGINE.teleportEntityBy(ctx.player, 0, 0, 1);
	    });

        _events.bindEventListener(EventType.OPLOC1, [36770, 11728], (ctx) => {
			runAnim(ctx.player, 828);
            ENGINE.teleportEntityBy(ctx.player, 0, 0, -1);
	    });

		_events.bindEventListener(EventType.OPLOC1, 36769, (ctx) => {//ladder lumbridge castle
			multi3(ctx.player, "WHAT WOULD YOU LIKE TO DO?", "Climb up the ladder.", () => {
				runAnim(ctx.player, 828);
				ENGINE.teleportEntityBy(ctx.player, 0, 0, 1);
			}, "Climb down the ladder.", () => {
                runAnim(ctx.player, 828);
			    ENGINE.teleportEntityBy(ctx.player, 0, 0, -1);
			}, "Never mind.", () => {
	        });
	    });

		_events.bindEventListener(EventType.OPLOC2, 36769, (ctx) => {//ladder lumbridge castle
		    runAnim(ctx.player, 828);
            ENGINE.teleportEntityBy(ctx.player, 0, 0, 1);
	    });

		_events.bindEventListener(EventType.OPLOC3, 36769, (ctx) => {//ladder lumbridge castle
			runAnim(ctx.player, 828);
            ENGINE.teleportEntityBy(ctx.player, 0, 0, -1);
	    });

		
		_events.bindEventListener(EventType.OPLOC1, 36771, (ctx) => {//ladder lumbridge castle
			runAnim(ctx.player, 828);
            ENGINE.teleportEntityBy(ctx.player, 0, -2, +1);
	    });

		_events.bindEventListener(EventType.OPLOC1, 36772, (ctx) => {//ladder lumbridge castle
	        runAnim(ctx.player, 828);
            ENGINE.teleportEntityBy(ctx.player, 0, +2, -1);
	    });

		_events.bindEventListener(EventType.OPLOC1, 39273, (ctx) => {//ladder betty's basement quest (swept away)
	        runAnim(ctx.player, 828, function () {
                _entity.setCoords(ctx.player, _coords(3014, 3257, 0));
	        });
	    });
