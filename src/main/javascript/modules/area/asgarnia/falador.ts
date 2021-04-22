import { EventType, Stat } from 'engine/enums';
import _events from 'engine/events';
import _entity from 'engine/entity';
import _map from 'engine/map';
 
import { locationAnim, getLocShape, getLocRotation } from 'shared/map/location';
import { runAnim } from 'shared/anim';
import { multi3, chatnpc } from 'shared/dialog';
import _coords from 'shared/map/coords';
import { defaultHandler } from 'shared/util';
import { getStatLevel } from 'shared/stat';


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




_events.bindEventListener(EventType.OPLOC1, 26194, (ctx) => {//party room lever
	locationAnim(ctx.location, 6934);
	runAnim(ctx.player, 6933, function () {
		multi3(ctx.player, "SELECT AN OPTION", "Balloon Bonanza (1000 coins).", () => {
		}, "Nightly Dance (500 coins).", () => {
		}, "No action.", () => {
		});
	});
});

_events.bindEventListener(EventType.OPLOC1, 26193, (ctx) => {//party room chest
	runAnim(ctx.player, 536, function () {
	    _map.addLoc(2418, _map.getCoords(ctx.location), getLocShape(ctx.location), getLocRotation(ctx.location));
	});
});

_events.bindEventListener(EventType.OPLOC2, 2418, (ctx) => {//party room chest
	//deposit
});

_events.bindEventListener(EventType.OPLOC3, 2418, (ctx) => {//party room chest
	runAnim(ctx.player, 535, function () {
		_map.addLoc(26193, _map.getCoords(ctx.location), getLocShape(ctx.location), getLocRotation(ctx.location));
	});
});