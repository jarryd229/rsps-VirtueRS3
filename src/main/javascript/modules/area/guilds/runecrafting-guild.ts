import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { runAnim, addSpotAnim } from 'shared/anim';
import _coords from 'shared/map/coords';

_events.bindEventListener(EventType.OPLOC1, 79603, (ctx) => {//portal
	addSpotAnim(ctx.player, 1771);
	runAnim(ctx.player, 10180, function () {
        _entity.setCoords(ctx.player, _coords(3, 48, 49, 30, 15));
    });
});