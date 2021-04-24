/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 05/11/2014
 */
import { EventType } from 'engine/enums';
import _events from 'engine/events';
import _config from 'engine/config';

import { sendMessage, sendCommandResponse } from 'shared/chat';
import { giveItem, takeItem, hasSpace, invHasSpace } from 'shared/inv';
import { objectDialog, countDialog } from 'shared/dialog';
import { openOverlaySub } from 'shared/widget';
import { openExchange } from '../../exchange/exchange-widget';

_events.bindEventListener(EventType.COMMAND_ADMIN, "bank", (ctx) => {//Open Bank
	openOverlaySub(ctx.player, 1017, 762, false);
});

_events.bindEventListener(EventType.COMMAND_ADMIN, ["openge", "ge"], (ctx) => {//Open Grand Exchange
	openExchange(ctx.player);
});


_events.bindEventListener(EventType.COMMAND_ADMIN, ["removeitem", "delitem", "clearitem", "takeitem"], (ctx) => {
	var player = ctx.player;
	var args = ctx.cmdArgs;
	if (args.length < 1) {
		sendCommandResponse(player, "Usage: " + ctx.syntax + " [id] [amount]", ctx.console);
		return;
	}
	var amount = 1;
	var objId = parseInt(args[0]);
	if (isNaN(objId)) {
		sendCommandResponse(player, "Usage: " + ctx.syntax + " [id] [amount]", ctx.console);
		return;
	}
	if (args.length == 2) {
		amount = parseInt(args[1]);
	}
	takeItem(player, objId, amount);
});

_events.bindEventListener(EventType.COMMAND_ADMIN, ["item", "give"], async (ctx) => {
	let player = ctx.player;
	let args = ctx.cmdArgs;
	if (args.length < 1 || isNaN(parseInt(args[0]))) {
		const objId = await objectDialog(player, "Choose an item to spawn.");
		if (_config.objStackable(objId)) {
			const count = await countDialog(player, "Enter the number of items to spawn: ");
			giveItem(player, objId, count);
		} else if (hasSpace(player)) {
			giveItem(player, objId, 1);
		} else {
			sendMessage(player, "You do not have enough space in your backpack to store this item.");
		}
	} else {
		if (args.length < 1) {
			sendCommandResponse(player, "Usage: " + ctx.syntax + " [id] [amount]", ctx.console);
			return;
		}
		let amount = 1;
		let objId = parseInt(args[0]);
		if (args.length >= 2) {
			amount = parseInt(args[1]);
		}
		if (!ENGINE.itemExists(objId)) {
			sendCommandResponse(player, "The item you specified does not exist.", ctx.console);
			return;
		}
		let value = ENGINE.getExchangeCost(objId) * amount;
		if (_config.objStackable(objId) || invHasSpace(player, amount)) {
			giveItem(player, objId, amount);
			if (value == -1) {
				sendCommandResponse(player, "This item cannot be traded on the Grand Exchange.", ctx.console);
			} else {
				sendCommandResponse(player, "This item is worth: " + value + "gp on the Grand Exchange.", ctx.console);
			}
		} else {
			sendCommandResponse(player, "You do not have enough space in your backpack to store this item.", ctx.console);
		}
	}
});
