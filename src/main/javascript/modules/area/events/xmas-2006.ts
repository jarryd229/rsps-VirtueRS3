import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events'; 
import _entity from 'engine/entity';

import { runAnim } from 'shared/anim';
import _coords from 'shared/map/coords';
	// npcs
	//gublinch  5003-5019 and 829 varbit 14381
	//Shanty Claws 828
	//loc
	//19036-Cage
    //19037-Cage with gublinch
_events.bindEventListener(EventType.OPLOC1, 19040, (ctx) => {//Ladder 3168 5320
	runAnim(ctx.player, 828, function () {
        _entity.setCoords(ctx.player, _coords(2841, 3143, 0));
	});
});