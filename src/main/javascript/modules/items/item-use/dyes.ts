import { EventType } from 'engine/enums';
import _events from 'engine/events';
import _inv from 'engine/inv';
import { Inv } from 'engine/enums/inventory';

import { takeItem } from 'shared/inv';
import { sendMessage } from 'shared/chat';

_events.bindEventListener(EventType.OPHELDU, 28617, (ctx) => {
	if (ctx.useObjId == 33296) {
		_inv.setSlot(ctx.player, Inv.BACKPACK, ctx.slot, 33390, 1);
		takeItem(ctx.player, 33296, 1);
		sendMessage(ctx.player, "You successfully place dye over the seismic wand.");
	    return;
	}
});