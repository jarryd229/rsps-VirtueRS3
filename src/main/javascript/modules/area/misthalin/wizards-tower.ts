import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import _coords from 'shared/map/coords';
import { runAnim, addSpotAnim } from 'shared/anim';

 _events.bindEventListener(EventType.OPLOC1, 79518, (ctx) => {//RuneCrafting Guild portal
	addSpotAnim(ctx.player, 1771);
	runAnim(ctx.player, 10180, function () {
        _entity.setCoords(ctx.player, _coords(2, 26, 85, 32, 23));
	});
});
