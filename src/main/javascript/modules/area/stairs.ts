import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';
import _map from 'engine/map';


import { runAnim } from 'shared/anim';
import { defaultHandler } from 'shared/util';
import { multi3 } from 'shared/dialog';
import _coords from 'shared/map/coords';



		_events.bindEventListener(EventType.OPLOC1, [36773,36776], (ctx) => {//Staircase lumbridge castle bottom floor
	       ENGINE.teleportEntityBy(ctx.player, 0, 0, +1);
	    });

		_events.bindEventListener(EventType.OPLOC1, [36774,36777], (ctx) => {//Staircase lumbridge castle mid floor
			multi3(ctx.player, "WHAT WOULD YOU LIKE TO DO?", "Go up the stairs.", () => {
				ENGINE.teleportEntityBy(ctx.player, 0, 0, +1);
			}, "Go down the stairs.", () => {
			    ENGINE.teleportEntityBy(ctx.player, 0, 0, -1);
			}, "Never mind.", () => {
	        });
	    });

		_events.bindEventListener(EventType.OPLOC2, [36774,36777], (ctx) => {//Staircase lumbridge castle mid floor
	        ENGINE.teleportEntityBy(ctx.player, 0, 0, +1);
	    });

		_events.bindEventListener(EventType.OPLOC3, [36774,36777], (ctx) => {//Staircase lumbridge castle mid floor
	        ENGINE.teleportEntityBy(ctx.player, 0, 0, -1);
	    });

		_events.bindEventListener(EventType.OPLOC1, [36775,36778], (ctx) => {//Staircase lumbridge castle top floor
	        ENGINE.teleportEntityBy(ctx.player, 0, 0, -1);
	    });

		_events.bindEventListener(EventType.OPLOC1, 45481, (ctx) => {
		    if (_map.getCoordX(ctx.location) == 3215 && _map.getCoordY(ctx.location) == 3239) {//Staircase Lumbridge's general store
               ENGINE.teleportEntityBy(ctx.player, -3, 0, +1);
		    } else if (_map.getCoordX(ctx.location) == 3200 && _map.getCoordY(ctx.location) == 3243) {//Staircase west of Lumbridge's general store
                ENGINE.teleportEntityBy(ctx.player, 0, -3, +1);
			} else if (_map.getCoordX(ctx.location) == 3193 && _map.getCoordY(ctx.location) == 3255) {//Staircase Lumbridge's fishing store
               ENGINE.teleportEntityBy(ctx.player, +3, 0, +1);
		    } else {
			    defaultHandler(ctx, "unhandled Staircase");
		    }
        });

		_events.bindEventListener(EventType.OPLOC1, 45482, (ctx) => {
		    if (_map.getCoordX(ctx.location) == 3215 && _map.getCoordY(ctx.location) == 3239) {//Staircase Lumbridge's general store
                ENGINE.teleportEntityBy(ctx.player, +3, 0, -1);
		   } else if (_map.getCoordX(ctx.location) == 3200 && _map.getCoordY(ctx.location) == 3243) {//Staircase west of Lumbridge's general store
                ENGINE.teleportEntityBy(ctx.player, 0, +3, -1);
		   } else if (_map.getCoordX(ctx.location) == 3193 && _map.getCoordY(ctx.location) == 3255) {//Staircase Lumbridge's fishing store
                ENGINE.teleportEntityBy(ctx.player, -3, 0, -1);
		    } else {
			    defaultHandler(ctx, "Staircase");
		    }
        });
