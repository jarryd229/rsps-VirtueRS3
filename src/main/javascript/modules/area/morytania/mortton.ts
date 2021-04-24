import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';
import { setVarp } from 'engine/var';

import { runAnim } from 'shared/anim';
import _coords from 'shared/map/coords';
import { openCentralWidget } from 'shared/widget';

_events.bindEventListener(EventType.OPLOC1, 87997, (ctx) => {//jump down well
	runAnim(ctx.player, 21924, function () {
		setVarp(ctx.player, 5142, 15364);//find right varbits that are used
		setVarp(ctx.player, 5144, 24181);
		openCentralWidget(ctx.player, 1591, false);
	});
	//getting kicked out anim 21922
});

_events.bindEventListener(EventType.OPLOC2, 87997, (ctx) => {//well graveyard
    _entity.setCoords(ctx.player, _coords(1,37,94,31,39));
	runAnim(ctx.player, 2924);
});