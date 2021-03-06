import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';
import { varbit, setVarBit } from 'engine/var';

import { sendMessage } from 'shared/chat';
import { runAnim } from 'shared/anim';
import { giveItem } from 'shared/inv';
import { mapMembers } from 'shared/util';
import _coords from 'shared/map/coords';
import { openCentralWidget } from 'shared/widget';

		//gfx around 5560 for stuff on beach
		//Surfboard anim 26597
_events.bindEventListener(EventType.IF_BUTTON, 1644, (ctx) => {//Beach ball rolling interface
		var enabled;
		switch (ctx.component) {
		    case 12://don't show again
				enabled = varbit(ctx.player, 28481) == 1;
				setVarBit(ctx.player, 28481, enabled ? 0 : 1);
			return;
		}
});

_events.bindEventListener(EventType.OPLOC1, 97278, (ctx) => {//Beach ball rolling portal
	if (mapMembers()){
		if (varbit(ctx.player, 28481) == 0) {
			_entity.setCoords(ctx.player, _coords(0, 19, 83, 30, 7));
			openCentralWidget(ctx.player, 1644, false);
	    } else {
            _entity.setCoords(ctx.player, _coords(0, 19, 83, 30, 7));
	    }
	} else {
		sendMessage(ctx.player, "You need to be on a members' world to participate in beach ball rolling.");
	}
});

_events.bindEventListener(EventType.OPLOC1, 73673, (ctx) => {//Beach ball rolling exit portal
    _entity.setCoords(ctx.player, _coords(0, 49, 50, 26, 54));
});

_events.bindEventListener(EventType.OPLOC1, [97313, 97318, 97320,  97323, 97326], (ctx) => {//palm tree
	if (mapMembers()){
        runAnim(ctx.player, 24908);
        giveItem(ctx.player, 35102, 1);
	} else {
		sendMessage(ctx.player, "You need to be on a members' world to pick tropical coconuts.");
	}
});

_events.bindEventListener(EventType.OPLOC1, 104332, (ctx) => {//Hook-a-Duck
	if (mapMembers()){
		sendMessage(ctx.player, "todo");
	} else {
		sendMessage(ctx.player, "You need to be on a members' world to play hook a duck.");
	}
});

_events.bindEventListener(EventType.OPLOC1, 97424, (ctx) => {//Lumbridge Sandcastle
	if (mapMembers()){
		sendMessage(ctx.player, "todo");
	} else {
		sendMessage(ctx.player, "You need to be on a members' world to build sandcastles.");
	}
});

_events.bindEventListener(EventType.OPLOC1, 97416, (ctx) => {//Wizards sandtower
	if (mapMembers()){
		sendMessage(ctx.player, "todo");
	} else {
		sendMessage(ctx.player, "You need to be on a members' world to build sandcastles.");
	}
});

_events.bindEventListener(EventType.OPLOC1, 109550, (ctx) => {//Sand pyramid
	if (mapMembers()){
		sendMessage(ctx.player, "todo");
	} else {
		sendMessage(ctx.player, "You need to be on a members' world to build sandcastles.");
	}
});

_events.bindEventListener(EventType.OPLOC1, 97420, (ctx) => {//Sand Exchange
	if (mapMembers()){
		sendMessage(ctx.player, "todo");
	} else {
		sendMessage(ctx.player, "You need to be on a members' world to build sandcastles.");
	}
});

_events.bindEventListener(EventType.OPLOC1, 97381, (ctx) => {//Deck chair
	//gfx 5650 5651 5652 Deck chair
	//anim 26601 getting on chair
	//anim 26602 staying on
	//anim 26603 getting off
	sendMessage(ctx.player, "todo");
});