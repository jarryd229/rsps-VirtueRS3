import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { closeOverlay, openWidget } from 'shared/widget';
import { defaultHandler } from 'shared/util';

_events.bindEventListener(EventType.IF_BUTTON, 1607, (ctx) => {
	switch (ctx.component) {
		case 34://Treasure Hunter
			closeOverlay(ctx.player);
			openWidget(ctx.player, 1477, 749, 1252, true);
			openWidget(ctx.player, 1477, 561, 1253, false);
			return;
		case 9://Membership
		case 59://Bonds
		case 85://Soloman's General Store
			break;
		default:
			defaultHandler(ctx, "upgrades-and-extras");
			return;
	}
});
