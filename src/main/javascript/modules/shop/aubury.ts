import { EventType, Inv } from 'engine/enums';
import _events from 'engine/events';
import { setVarp, setVarc } from 'engine/var';

import { openCentralWidget } from 'shared/widget';

/**
 * Aubury - Varrock Rune Shop
 */
_events.bindEventListener(EventType.OPNPC4, 5913, (ctx) => {
	setVarp(ctx.player, 304, Inv.AUBURYS_RUNE_SHOP);
	setVarp(ctx.player, 305, Inv.AUBURYS_FREE_STOCK);
	setVarc(ctx.player, 2360, "Aubury's Rune Shop");
	openCentralWidget(ctx.player, 1265);
});
