import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { defaultHandler } from 'shared/util';

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 16/01/2016
 */
_events.bindEventListener(EventType.IF_BUTTON, 1664, (ctx) => {
	switch (ctx.component) {
		/*case 18://Teleport arrive at house
		case 22://Teleport arrive at portal
		case 27://Doors closed
		case 31://Doors open
		case 51://Gathering prawnballs enabled
		case 55://Gathering prawnballs disabled
		case 76://Building mode on
		case 80://Building mode off
		*/
		default:
			defaultHandler(ctx, "house settings");
			return;
	}
});
