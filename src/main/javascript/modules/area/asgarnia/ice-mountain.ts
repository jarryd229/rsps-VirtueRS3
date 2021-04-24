import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import _coords from 'shared/map/coords';

_events.bindEventListener(EventType.OPLOC1, 100850, (ctx) => {//Invention Guild
    _entity.setCoords(ctx.player, _coords(6169, 1038, 0));
});