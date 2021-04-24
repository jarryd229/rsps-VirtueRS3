import { EventType } from 'engine/enums';
import _events from 'engine/events';
 
import { defaultHandler } from 'shared/util'; 
import { openOverlay } from 'shared/widget';

_events.bindEventListener(EventType.IF_BUTTON, 1466, (ctx) => {
	switch (ctx.component) {
		case 7:
		switch (ctx.slot) {
		    case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
			case 18:
			case 19:
			case 20:
			case 21:
			case 23:
			case 24:
			case 25:
			case 26:
				openOverlay(ctx.player, 0);
				break;
		}
		break;

		default:
			defaultHandler(ctx, "skill-tab");
			return;
	}
});