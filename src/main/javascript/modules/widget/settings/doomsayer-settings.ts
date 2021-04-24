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
_events.bindEventListener(EventType.IF_BUTTON, 583, (ctx) => {
	switch (ctx.component) {
		/*case 14://Dagannoth king ladder
		case 15://Lumbridge swamp rope
		case 16://Stronghold of security
		case 17://Sinkhole warning
		case 18://Player owned houses
		case 19://Contact dungeon
		case 20://Icy path area
		case 21://HAM tunnel from mill
		case 22://Fairy ring: Dorgesh-Kaan
		case 23://Lumbridge cellar
		case 24://Mort myre
		case 25://Observatory stairs
		case 26://Elid Genie cave
		case 27://Shanty pass
		case 28://Shaman cave
		case 29://Trollheim wilderness
		case 30://Wilderness wall
		case 31://Dorgesh-Kaan city exit
		case 32://Dorgesh-Kaan kalphites
		case 33://Ranging guild tower
		case 34://Death plateau
		case 35://Godwars wilderness route
		case 36://Duel arena
		case 37://Living rock caverns
		case 38://Chaos tunnels
		case 39://The wildywyrm
		case 40://Clan wars (safe)
		case 41://Clan wars (dangerous)
		case 42://Morytania
		case 43://Crucible
		case 44://KBD shortcut
		case 45://Goblin raid warning
		case 46://Demon raid warning
		case 47://Wilderness warbands
		case 48://World event messages
		case 49://Guthixian cache
		case 50://Adamant dragons
		case 51://Ripper demons
		case 52://Shortcut to ripper demons*/
		default:
			defaultHandler(ctx, "doomsayer settings");
			return;
	}
});
