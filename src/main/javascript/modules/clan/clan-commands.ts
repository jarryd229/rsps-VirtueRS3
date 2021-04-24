import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { sendCommandResponse } from 'shared/chat';
import { setResumeHandler } from 'shared/dialog';
import { closeWidgetSub, openWidget } from 'shared/widget';

import { inClan, getClanHash } from './logic/core';

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 26/12/2014
 */
_events.bindEventListener(EventType.COMMAND, "makeclan", (ctx) => {
	if (inClan(ctx.player)) {
		sendCommandResponse(ctx.player, "You need to leave your current clan before you can use this command (clan=" + getClanHash(ctx.player) + ")", ctx.console);
		return;
	}
	openWidget(ctx.player, 1477, 437, 1094, false);
	setResumeHandler(ctx.player, (value) => {
		closeWidgetSub(ctx.player, 1477, 437);
		if (value) {
			CLAN_ENGINE.createClan(value, ctx.player, []);
		}
	});
});
