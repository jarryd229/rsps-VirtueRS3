import { EventType } from 'engine/enums/event-type';
import { ChatListType } from 'engine/enums/chat-list-type';
import _events from 'engine/events';

import { setWidgetEvents, openOverlaySub } from 'shared/widget';
import { runClientScript, defaultHandler } from 'shared/util';
import { openModalBase } from 'shared/dialog';
import { sendDebugMessage } from 'shared/chat';

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 9/11/2014
 */
_events.bindEventListener(EventType.IF_OPEN, 550, (ctx) => {
	setWidgetEvents(ctx.player, 550, 7, 0, 500, 1022);
	setWidgetEvents(ctx.player, 550, 57, 0, 500, 6);
});

_events.bindEventListener(EventType.IF_PLAYER, ChatListType.FRIEND, (ctx) => {
	var player = ctx.player;
	if (ctx.interface == 550) {
		switch (ctx.button) {
			case 7:
				openOverlaySub(player, 1006, 451, false);
				runClientScript(player, 8178, []);
				runClientScript(player, 9206, [ctx.slot, 0, 29556758, 29556742, 29556743]);
				return;
		}
	}
	defaultHandler(ctx, "friend list");
});

_events.bindEventListener(EventType.IF_BUTTON, 550, (ctx) => {
	var player = ctx.player;

	switch (ctx.component) {
		case 7://Friends list pane
			if (ctx.button == 7) {
				openOverlaySub(player, 1006, 451, false);
				runClientScript(player, 8178, []);
				runClientScript(player, 9206, [ctx.slot, 0, 29556758, 29556742, 29556743]);
				return;
			}
			defaultHandler(ctx, "friend list");
			return;
		case 25://Add friend
			openModalBase(player);
			runClientScript(player, 8178, []);
			runClientScript(player, 103, []);
			return;
		case 33://Remove friend
			openModalBase(player);
			runClientScript(player, 8178, []);
			runClientScript(player, 104, []);
			return;
		case 42://Recruit friend
			sendDebugMessage(player, "Recruit friend has not been implemented");
			return;
		case 57://Add/set ignore note
			if (ctx.button == 1) {
				openOverlaySub(player, 1006, 451, false);
				runClientScript(player, 8178, []);
				runClientScript(player, 9206, [ctx.slot / 2, 1, 29556758, 29556742, 29556743]);
				return;
			}
			defaultHandler(ctx, "ignore list");
			return;
		case 74://Add ignore
			openModalBase(player);
			runClientScript(player, 8178, []);
			runClientScript(player, 105, []);
			return;
		case 82://Remove ignore
			openModalBase(player);
			runClientScript(player, 8178, []);
			runClientScript(player, 1419, []);
			return;
		case 49://Reorder friends list
		case 90://Reorder ignore list
		case 98:
		case 100://Switching between friend and ignore tabs. We'll send this as handled so it doesn't spam the chatbox
			return;
		default:
			defaultHandler(ctx, "friend list");
			return;
	}
});
