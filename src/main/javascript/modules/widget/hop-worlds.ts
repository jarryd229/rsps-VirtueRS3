import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { setWidgetEvents, hideWidget, openCentralWidget, closeWidgetSub, setWidgetText, openWidget } from 'shared/widget';
import { setVarp } from 'engine/var';
import { defaultHandler } from 'shared/util';

_events.bindEventListener(EventType.IF_OPEN, 1587, (ctx) => {
	setWidgetEvents(ctx.player, 1587, 26, 0, 200, 6);
	setWidgetEvents(ctx.player, 1587, 47, 0, 1, 2);
	hideWidget(ctx.player, 1587, 29, true);
});

_events.bindEventListener(EventType.IF_BUTTON, 1587, (ctx) => {
	switch (ctx.component) {
		case 42://Close button
			return;
		case 26:
			hideWidget(ctx.player, 1587, 29, false);
			setWidgetText(ctx.player, 1587, 98, "Are you sure you want to switch to world " + ctx.slot + "?");
			return;
		case 47:
			setVarp(ctx.player, 4735, 104005679);
			setVarp(ctx.player, 4734, 7230);
			setVarp(ctx.player, 4736, 0);
			setWidgetEvents(ctx.player, 1477, 801, 0, 3, 2);
			return;
		case 84:
			setVarp(ctx.player, 20, -1761607680);
			closeWidgetSub(ctx.player, 1477, 426);
			openWidget(ctx.player, 1477, 333, 1215, true);
			hideWidget(ctx.player, 1477, 333, false);
			hideWidget(ctx.player, 745, 2, true);
			return;
		case 93:
			openCentralWidget(ctx.player, 1587, false);
			return;
		default:
			defaultHandler(ctx, "hop-worlds");
			return;
	}
});
