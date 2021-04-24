import { EventType, Inv } from 'engine/enums';
import _events from 'engine/events';
import { setVarp, setVarc } from 'engine/var';

import { openCentralWidget } from 'shared/widget';

/**
 * Contains shops which don't have their own file.
 * Most of these should be added to their own file once full dialog is added
 *
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 5/02/2015
 */
_events.bindEventListener(EventType.OPNPC3, [520, 521], (ctx) => {
	setVarp(ctx.player, 304, Inv.LUMBRIDGE_GEN_STORE);
	setVarp(ctx.player, 305, Inv.LUMBRIDGE_GEN_STORE_FREE_STOCK);
	setVarc(ctx.player, 2360, "Lumbridge General Store");
	openCentralWidget(ctx.player, 1265, false);
});

_events.bindEventListener(EventType.OPNPC3, [522, 523], (ctx) => {
	setVarp(ctx.player, 304, Inv.VARROCK_GEN_STORE);
	setVarc(ctx.player, 2360, "Varrock General Store");
	openCentralWidget(ctx.player, 1265, false);
});

_events.bindEventListener(EventType.OPNPC3, [526, 527], (ctx) => {
	setVarp(ctx.player, 304, Inv.FALADOR_GEN_STORE);
	setVarc(ctx.player, 2360, "Falador General Store");
	openCentralWidget(ctx.player, 1265, false);
});

_events.bindEventListener(EventType.OPNPC3, 546, (ctx) => {
	setVarp(ctx.player, 304, Inv.ZAFF_STAFF_SHOP);
	setVarc(ctx.player, 2360, "Zaff's Superior Staves");
	openCentralWidget(ctx.player, 1265, false);
});

_events.bindEventListener(EventType.OPNPC3, 549, (ctx) => {
	setVarp(ctx.player, 304, Inv.HORVIKS_ARMOUR_SHOP);
	setVarc(ctx.player, 2360, "Horvik's Armour Shop");
	openCentralWidget(ctx.player, 1265, false);
});

_events.bindEventListener(EventType.OPNPC3, 550, (ctx) => {
	setVarp(ctx.player, 304, Inv.LOWES_ARCHERY_SHOP);
	setVarp(ctx.player, 305, Inv.LOWES_ARCHERY_FREE_STOCK);
	setVarc(ctx.player, 2360, "Lowe's Archery Emporium");
	openCentralWidget(ctx.player, 1265, false);
});

_events.bindEventListener(EventType.OPNPC3, 551, (ctx) => {
	setVarp(ctx.player, 304, Inv.VARROCK_SWORD_SHOP);
	setVarp(ctx.player, 305, Inv.VARROCK_SWORD_FREE_STOCK);
	setVarc(ctx.player, 2360, "Varrock Sword Shop");
	openCentralWidget(ctx.player, 1265, false);
});

_events.bindEventListener(EventType.OPNPC3, 8864, (ctx) => {
	setVarp(ctx.player, 304, Inv.LUMBRIDGE_FISH_STORE);
	setVarp(ctx.player, 305, Inv.LUMBRIDGE_FISH_STORE_FREE);
	setVarc(ctx.player, 2360, "Lumbridge Fishing Supplies");
	openCentralWidget(ctx.player, 1265, false);
});
