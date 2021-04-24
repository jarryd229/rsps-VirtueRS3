import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import _coords from 'shared/map/coords';
import { mesbox} from 'shared/dialog'; 
import { mapMembers } from 'shared/util';

_events.bindEventListener(EventType.OPLOC1, 66991, async (ctx) => {//Traverley dungeon
	if (mapMembers()){
	    _entity.setCoords(ctx.player, _coords(2885, 9796, 0));
    } else {
        await mesbox(ctx.player, "You need to be on a member's world to use this feature.");
    }
});