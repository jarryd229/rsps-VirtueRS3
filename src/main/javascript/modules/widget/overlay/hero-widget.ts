import { EventType } from 'engine/enums';
import _events from 'engine/events';
import _entity from 'engine/entity';
import _player from 'engine/player';

import { defaultHandler } from 'shared/util';
import { closeOverlaySub, setWidgetText, openWidget, openCentralWidget } from 'shared/widget';

_events.bindEventListener(EventType.IF_OPEN, 1446, (ctx) => {
	setWidgetText(ctx.player, 1446, 94, _entity.getName(ctx.player));
	setWidgetText(ctx.player, 1446, 93, _player.getPrefixTitle(ctx.player));
});

_events.bindEventListener(EventType.IF_OPEN, 1560, (ctx) => {
	openWidget(ctx.player, 1560, 16, 1558, true);//
	openWidget(ctx.player, 1560, 18, 1557, true);//Skills
	openWidget(ctx.player, 1560, 17, 1559, true);//Combat stats
});

_events.bindEventListener(EventType.IF_BUTTON, 1446, (ctx) => {
	switch (ctx.component) {
		case 108:
			openCentralWidget(ctx.player, 1561, false);
			break;
		default:
			defaultHandler(ctx, "hero-widget");
			return;
	}
});

_events.bindEventListener(EventType.IF_BUTTON, 1560, (ctx) => {
	switch (ctx.component) {
		case 22:
			closeOverlaySub(ctx.player, 1024, true);
			break;
		default:
			defaultHandler(ctx, "hero-widget");
			return;
	}
});
