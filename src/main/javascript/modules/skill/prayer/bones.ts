import { EventType, Inv, Stat } from 'engine/enums';
import { Player } from 'engine/models';
import _events from 'engine/events';
import _inv from 'engine/inv';

import { runAnim, addSpotAnim } from 'shared/anim';
import { sendSpamMessage } from 'shared/chat';
import { giveXp } from 'shared/stat';
/**
 * @author Kayla
 * @since 19/11/2014
 */

_events.bindEventListener(EventType.OPHELD1, 526, (ctx) => {//BONES
	buryBones(ctx.player, ctx.slot, 4.5);
});

_events.bindEventListener(EventType.OPHELD1, 2859, (ctx) => {//WOLF_BONES 
    buryBones(ctx.player, ctx.slot, 4.5);
});

_events.bindEventListener(EventType.OPHELD1, 528, (ctx) => {//BURNT_BONES
    buryBones(ctx.player, ctx.slot, 4.5);
});

_events.bindEventListener(EventType.OPHELD1, 3179, (ctx) => {//MONKEY_BONES
    buryBones(ctx.player, ctx.slot, 5);
});

_events.bindEventListener(EventType.OPHELD1, 17672, (ctx) => {//BAT_BONES
    buryBones(ctx.player, ctx.slot, 5.3);
});

_events.bindEventListener(EventType.OPHELD1, 17674, (ctx) => {//BIG_BONES
    buryBones(ctx.player, ctx.slot, 12.5);
});

_events.bindEventListener(EventType.OPHELD1, 3125, (ctx) => {//JOGRE_BONES
    buryBones(ctx.player, ctx.slot, 15);
});

_events.bindEventListener(EventType.OPHELD1, 4812, (ctx) => {//ZOGRE_BONES
    buryBones(ctx.player, ctx.slot, 22.5);
});

_events.bindEventListener(EventType.OPHELD1, 3123, (ctx) => {//SHAIKAHAN_BONES
    buryBones(ctx.player, ctx.slot, 22.5);
});

_events.bindEventListener(EventType.OPHELD1, 534, (ctx) => {//BABYDRAGON_BONES
    buryBones(ctx.player, ctx.slot, 30);
});

_events.bindEventListener(EventType.OPHELD1, 6812, (ctx) => {//WYVERN_BONES
    buryBones(ctx.player, ctx.slot, 50);
});

_events.bindEventListener(EventType.OPHELD1, 17676, (ctx) => {//DRAGON_BONES
    buryBones(ctx.player, ctx.slot, 72);
});

_events.bindEventListener(EventType.OPHELD1, 4830, (ctx) => {//FAYRG_BONES
	buryBones(ctx.player, ctx.slot, 84);  	
});

_events.bindEventListener(EventType.OPHELD1, 4832, (ctx) => {//RAURG_BONES
    buryBones(ctx.player, ctx.slot, 96);
});

_events.bindEventListener(EventType.OPHELD1, 6729, (ctx) => {//DAGANNOTH_BONES
    buryBones(ctx.player, ctx.slot, 125);
});

_events.bindEventListener(EventType.OPHELD1, 30209, (ctx) => {//AIRUT_BONES
    buryBones(ctx.player, ctx.slot, 132.5);
});

_events.bindEventListener(EventType.OPHELD1, 4834, (ctx) => {//OURG_BONES
    buryBones(ctx.player, ctx.slot, 140);
});

_events.bindEventListener(EventType.OPHELD1, 18830, (ctx) => {//FROST_DRAGON_BONES
    buryBones(ctx.player, ctx.slot, 180);
});

_events.bindEventListener(EventType.OPHELD1, 15410, (ctx) => {//ANCIENT_BONES
    buryBones(ctx.player, ctx.slot, 200);
});
	
function buryBones (player: Player, slot: number, xp: number) {
	sendSpamMessage(player, "You dig a hole in the ground...");
	_inv.clearSlot(player, Inv.BACKPACK, slot);
	runAnim(player, 827, function () {
		sendSpamMessage(player, "You bury the bones.");
		giveXp(player, Stat.PRAYER, xp);
	});
}
