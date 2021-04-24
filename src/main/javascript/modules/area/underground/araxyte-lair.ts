import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';
import _map from 'engine/map';
import { setVarp } from 'engine/var';

import { runAnim } from 'shared/anim';
import { mesbox, multi2 } from 'shared/dialog';
import { openCentralWidget } from 'shared/widget';
import _coords from 'shared/map/coords';

_events.bindEventListener(EventType.OPLOC1, 91500, async (ctx) => {//Webbed entrance
	await mesbox(ctx.player, "<col=7f0000>Beyound this point is the Araxyte hive.<br><col=7f0000> There is no way out other then death or Victory.<br><col=7f0000> Only those who can endure dangerous encouters should proceed.");
    multi2(ctx.player, "SELECT AN OPTION", "Enter encounter", () => {
	}, "Start/join custom encounter", () => {
		setVarp(ctx.player, 5142, 15362);//find right varbits that are used
		setVarp(ctx.player, 5144, 28799);
		openCentralWidget(ctx.player, 1591, false);
	});
});

_events.bindEventListener(EventType.OPLOC1, 91553, (ctx) => {//rope out of lair
	runAnim(ctx.player, 15456, function () {
		runAnim(ctx.player, -1);
        _entity.setCoords(ctx.player, _coords(0,57,53,52,27));
	});
});

_events.bindEventListener(EventType.OPLOC1, 91661, (ctx) => {//Gap
	runAnim(ctx.player, 10738, function () {
        //_entity.setCoords(ctx.player, _coords(1,70,98,26,15)); //and 1,70,98,31,17
	});
});