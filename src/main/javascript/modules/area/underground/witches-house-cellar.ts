import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { runAnim } from 'shared/anim';
import _coords from 'shared/map/coords';
import { mesbox } from 'shared/dialog';

_events.bindEventListener(EventType.OPLOC1, 2866, async (ctx) => {//Gate
	await mesbox(ctx.player, "As your bare hands touch the gate you feel a shock.");
    ENGINE.hitEntity(ctx.player, 200);
});

_events.bindEventListener(EventType.OPLOC1, 24717, async (ctx) => {//Ladder
	runAnim(ctx.player, 828, function () {
        _entity.setCoords(ctx.player, _coords(0,45,52,18,48));
	});
});