import { EventType } from 'engine/enums';
import _events from 'engine/events';
import { defaultHandler } from 'shared/util';
import { openWidget } from 'shared/widget';

_events.bindEventListener(EventType.IF_BUTTON, 1218, (ctx) => {
	switch (ctx.component) {
		case 18:
		case 19:
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
		case 31:
		case 32:
		case 33:
		case 34:
		case 35:
		case 36:
		case 37:
		case 38:
		case 39:
		case 40:
		case 41:
		case 42:
		case 43:
		case 102:
		case 133:
			openWidget(ctx.player, 1218, 1, 1217, false);
			break;
		default:
			defaultHandler(ctx, "hero-skill-tab");
			return;
	}
});
