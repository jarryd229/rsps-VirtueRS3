import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { runAnim } from 'shared/anim';
import _coords from 'shared/map/coords';
import { mesbox } from 'shared/dialog';

_events.bindEventListener(EventType.OPLOC1, 3433, (ctx) => {//Holly barrier
	runAnim(ctx.player, 828, function () {
        _entity.setCoords(ctx.player, _coords(3210, 3216, 0));
	});
});

_events.bindEventListener(EventType.OPLOC1, 3485, async (ctx) => {//Well
	await mesbox(ctx.player, "You look down the well and see the filthy polluted water of the River Salve<br> moving slowly along.");
});

_events.bindEventListener(EventType.OPLOC1, 30575, (ctx) => {//Ladder
	runAnim(ctx.player, 828, function () {
         _entity.setCoords(ctx.player, _coords(0,53,54,13,49));
	});
});