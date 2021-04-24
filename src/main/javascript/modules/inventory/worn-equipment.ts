import { EventType, Inv } from 'engine/enums';
import _events from 'engine/events';
import _inv from 'engine/inv';
import { setVarc, setVarBit } from 'engine/var';

import { handleEquipmentInteraction } from 'shared/inv';
import { openOverlay, openCentralWidget, openWidget, setWidgetEvents } from 'shared/widget';
import { defaultHandler } from 'shared/util';

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 23/03/2016
 */
_events.bindEventListener(EventType.IF_OPEN, 1464, (ctx) => {
 	setWidgetEvents(ctx.player, 1464, 15, 0, 18, 15302654);
 	setWidgetEvents(ctx.player, 1464, 13, 2, 12, 2);
 	_inv.send(ctx.player, Inv.EQUIPMENT);
 	setVarc(ctx.player, 181, 0);
 });

_events.bindEventListener(EventType.IF_BUTTON, 1464, (ctx) => {
 	var player = ctx.player;
 	switch (ctx.component) {
 	case 15:
 		var objId = _inv.getObject(player, Inv.EQUIPMENT, ctx.slot);
 		if (objId === -1 || objId !== ctx.objId) {
 			//The client inventory must not be synchronised, so let's send it again
 			_inv.resendSlot(player, Inv.EQUIPMENT, ctx.slot);
 			return;
 		}
 		handleEquipmentInteraction(player, objId, ctx.slot, ctx.button, ctx);
 		return;
 	case 13:
 		switch (ctx.slot) {
 		case 12:
 			setVarBit(player, 18995, 3);
 			openOverlay(player, 0);
 			return;
 		case 7:
 			openWidget(player, 1477, 871, 1626, false);
 			return;
 		case 2:
 			openCentralWidget(player, 1178, false);
 			return;
 		default:
 			defaultHandler(ctx, "worn equipment");
 			return;
 		}
 	default:
 		defaultHandler(ctx, "worn equipment");
 		return;
 	}
 });
