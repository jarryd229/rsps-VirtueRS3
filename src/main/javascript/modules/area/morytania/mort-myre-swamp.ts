import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { runAnim } from 'shared/anim';
import _coords from 'shared/map/coords';
import { mesbox} from 'shared/dialog';
 
_events.bindEventListener(EventType.OPLOC1, 3507, async (ctx) => {//gate
	await mesbox(ctx.player, "There's a message attached to this gate, it reads:-<br><col=0000ff>~ Mort Myre is a dangerous Ghast infested swamp. ~<br><col=0000ff> ~ Do not enter if you value your life. ~<br><col=0000ff> ~ All persons wishing to enter must see Drezel. ~");
});

_events.bindEventListener(EventType.OPLOC1, 91557, (ctx) => {//cave to araxyte lair
    _entity.setCoords(ctx.player, _coords(1,70,98,32,17));
	runAnim(ctx.player, 15459);
});

_events.bindEventListener(EventType.OPLOC2, 91557, (ctx) => {//cave to araxyte graveyard
    _entity.setCoords(ctx.player, _coords(1,73,97,32,30));
	runAnim(ctx.player, 15459);
});