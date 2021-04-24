import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity'; 
import _inv from 'engine/inv';
import { Inv } from 'engine/enums/inventory';

import { runAnim, addSpotAnim } from "shared/anim";
import _coords from 'shared/map/coords';
import { sendMessage } from 'shared/chat';
 
_events.bindEventListener(EventType.OPWORN1, [1708,1710,1712], (ctx) => {//Edgeville
	sendMessage(ctx.player, "you use a charge");//get right Message
	addSpotAnim(ctx.player, 1684);
	runAnim(ctx.player, 9603, function () {
	    _entity.setCoords(ctx.player, _coords(3086, 3502, 0));
		runAnim(ctx.player, -1);
		_inv.setSlot(ctx.player, Inv.EQUIPMENT, ctx.slot, ctx.objId-2, 1);
	});
});

_events.bindEventListener(EventType.OPWORN2, [1708,1710,1712], (ctx) => {//Karamja
	sendMessage(ctx.player, "you use a charge");//get right Message
	addSpotAnim(ctx.player, 1684);
	runAnim(ctx.player, 9603, function () {
		_entity.setCoords(ctx.player, _coords(2918, 3176, 0));
		runAnim(ctx.player, -1);
		_inv.setSlot(ctx.player, Inv.EQUIPMENT, ctx.slot, ctx.objId-2, 1);
	});
});

_events.bindEventListener(EventType.OPWORN3, [1708,1710,1712], (ctx) => {//Draynor Village
	sendMessage(ctx.player, "you use a charge");//get right Message
	addSpotAnim(ctx.player, 1684);
	runAnim(ctx.player, 9603, function () {
		_entity.setCoords(ctx.player, _coords(3081, 3251, 0));
		runAnim(ctx.player, -1);
		_inv.setSlot(ctx.player, Inv.EQUIPMENT, ctx.slot, ctx.objId-2, 1);
	});
});

_events.bindEventListener(EventType.OPWORN4, [1708,1710,1712], (ctx) => {//Al Kharid
	sendMessage(ctx.player, "you use a charge");//get right Message
	addSpotAnim(ctx.player, 1684);
	runAnim(ctx.player, 9603, function () {
		_entity.setCoords(ctx.player, _coords(3304, 3124, 0));
		runAnim(ctx.player, -1);
		_inv.setSlot(ctx.player, Inv.EQUIPMENT, ctx.slot, ctx.objId-2, 1);
	});
});

_events.bindEventListener(EventType.OPWORN1, 1706, (ctx) => {//Edgeville
	sendMessage(ctx.player, "<col=ff0000>You use your amulet's last charge.</col>");//get right Message
	addSpotAnim(ctx.player, 1684);
	runAnim(ctx.player, 9603, function () {
		_entity.setCoords(ctx.player, _coords(3086, 3502, 0));
		runAnim(ctx.player, -1);
		_inv.setSlot(ctx.player, Inv.EQUIPMENT, ctx.slot, 1704, 1);
	});
});

_events.bindEventListener(EventType.OPWORN2, 1706, (ctx) => {//Karamja
	sendMessage(ctx.player, "<col=ff0000>You use your amulet's last charge.</col>");//get right Message
	addSpotAnim(ctx.player, 1684);
	runAnim(ctx.player, 9603, function () {
		_entity.setCoords(ctx.player, _coords(2918, 3176, 0));
		runAnim(ctx.player, -1);
		_inv.setSlot(ctx.player, Inv.EQUIPMENT, ctx.slot, 1704, 1);
	});
});

_events.bindEventListener(EventType.OPWORN3, 1706, (ctx) => {//Draynor Village
	sendMessage(ctx.player, "<col=ff0000>You use your amulet's last charge.</col>");//get right Message
	addSpotAnim(ctx.player, 1684);
	runAnim(ctx.player, 9603, function () {
		_entity.setCoords(ctx.player, _coords(3081, 3251, 0));
		runAnim(ctx.player, -1);
	    _inv.setSlot(ctx.player, Inv.EQUIPMENT, ctx.slot, 1704, 1);
	});
});

_events.bindEventListener(EventType.OPWORN4, 1706, (ctx) => {//Al Kharid
	sendMessage(ctx.player, "<col=ff0000>You use your amulet's last charge.</col>");//get right Message
	addSpotAnim(ctx.player, 1684);
	runAnim(ctx.player, 9603, function () {
		_entity.setCoords(ctx.player, _coords(3304, 3124, 0));
		runAnim(ctx.player, -1);
		_inv.setSlot(ctx.player, Inv.EQUIPMENT, ctx.slot, 1704, 1);
	});
});