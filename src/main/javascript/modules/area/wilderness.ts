import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _map from 'engine/map';

import { runAnim } from 'shared/anim';
 
_events.bindEventListener(EventType.OPLOC1, [65084,65086,65082,65076,65077,65079], (ctx) => {//Wildy Ditch
	if (_map.getCoordY(ctx.player) == 3520) {
		runAnim(ctx.player, 6132);
		ENGINE.teleportEntityBy(ctx.player, 0, 3, 0);
	}
});