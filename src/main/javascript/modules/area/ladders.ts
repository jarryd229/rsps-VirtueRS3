import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';
import _map from 'engine/map';


import { runAnim } from 'shared/anim';
import { multi3, chatnpc } from 'shared/dialog';
import _coords from 'shared/map/coords';
import { getStatLevel } from 'shared/stat';
import { defaultHandler } from 'shared/util';


_events.bindEventListener(EventType.OPLOC1, 2113, async (ctx) => {//mining guild ladder (level 60 mining to enter)
    if (getStatLevel(ctx.player, Stat.MINING) >= 60) {
        if (_map.getCoordX(ctx.location) == 3019 && _map.getCoordY(ctx.location) == 3340) {//north ladder
	        runAnim(ctx.player, 828, function () {
                _entity.setCoords(ctx.player, _coords(3019, 9741, 0));
	        });	
	    } else if (_map.getCoordX(ctx.location) == 3020 && _map.getCoordY(ctx.location) == 3339) {//east ladder
		    runAnim(ctx.player, 828, function () {
                _entity.setCoords(ctx.player, _coords(3021, 9739, 0));
	        });	
	    } else if (_map.getCoordX(ctx.location) == 3019 && _map.getCoordY(ctx.location) == 3338) {//south ladder
		    runAnim(ctx.player, 828, function () {
                _entity.setCoords(ctx.player, _coords(3019, 9737, 0));
	        });	
        } else if (_map.getCoordX(ctx.location) == 3018 && _map.getCoordY(ctx.location) == 3339) {//west ladder
		    runAnim(ctx.player, 828, function () {
                _entity.setCoords(ctx.player, _coords(3017, 9739, 0));
	        });			
	    } else {
		    defaultHandler(ctx, "ladder");
	    } 
    }else{
	    await chatnpc(ctx.player, 3295, "Sorry, but you need level 60 Mining to go in there.");  	
	}	
});


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
