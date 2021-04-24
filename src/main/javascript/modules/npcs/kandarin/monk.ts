import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

_events.bindEventListener(EventType.OPNPC1, 281, (ctx) => {
	_entity.say(ctx.npc, "Peace brother");
});
