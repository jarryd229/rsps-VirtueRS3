import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';
import { varbit, setVarBit } from 'engine/var';
 
import _coords from 'shared/map/coords';
import { chatplayer, chatnpc } from 'shared/dialog';
import { hasStarted } from '../../quest';
 
_events.bindEventListener(EventType.OPLOC1, 9472, (ctx) => {//trapdoor to Asgarnian ice dungeon
	_entity.setCoords(ctx.player, _coords(3007, 9550, 0));
});

_events.bindEventListener(EventType.OPLOC1, 39442, async (ctx) => {//trapdoor betty's basement quest (swept away)
	if(hasStarted(ctx.player, 20) && varbit(ctx.player, 9868) == 0) {
		setVarBit(ctx.player, 9868, 1); //open trapdoor
	} else if (varbit(ctx.player, 9868) == 1){
		_entity.setCoords(ctx.player, _coords(3221, 4522, 0));
	} else {
        await chatnpc(ctx.player, 583, "Excuse me, my cellar isn't open to the public.");
		await chatplayer(ctx.player, "Oh, sorry.");
	}
});

_events.bindEventListener(EventType.OPLOC2, 39442, (ctx) => {//trapdoor betty's basement quest (swept away)
	setVarBit(ctx.player, 9868, 0);
});