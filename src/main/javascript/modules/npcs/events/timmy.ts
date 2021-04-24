import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { chatplayer } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 14758, async (ctx) => {
	await chatplayer(ctx.player, "Merry Christmas Timmy!");
	_entity.say(ctx.npc, "RAWR!!");
});