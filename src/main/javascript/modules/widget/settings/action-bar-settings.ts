import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import { defaultHandler } from 'shared/util';

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 08/01/2015
 */
_events.bindEventListener(EventType.IF_BUTTON, 970, (ctx) => {
	switch (ctx.component) {
		/*case 11://Secondary action bar
		case 14://Tertiary action bar
		case 18://Quaternary action bar
		case 22://Quinary action bar*/
		default:
			defaultHandler(ctx, "action bar settings");
			return;
	}
});
