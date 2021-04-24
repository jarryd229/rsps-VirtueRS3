import { EventType, Stat } from 'engine/enums';
import _events from 'engine/events';
import _config from 'engine/config';

import { takeItem } from 'shared/inv';
import { sendMessage } from 'shared/chat';
import { runAnim } from 'shared/anim';
 
_events.bindEventListener(EventType.OPHELD1, 23531, function(ctx) {//OVERLOAD_FLASK
	ENGINE.freezeEntity(ctx.player, 2);
		sendMessage(ctx.player, "You drink the " + _config.objName(ctx.objId) + ".");
	if (ctx.player.getImpactHandler().inCombat()) {
		runAnim(ctx.player, 18002);
	} else {
		runAnim(ctx.player, 18001);
	}
	//To get the current level, use api.getStatLevel(player, stat)
	//To set the current level, use api.setStatLevel(player, stat, level)
	ENGINE.boostStat(ctx.player, Stat.STRENGTH, 16);
	ENGINE.boostStat(ctx.player, Stat.ATTACK, 16);
	ENGINE.boostStat(ctx.player, Stat.MAGIC, 16);
	ENGINE.boostStat(ctx.player, Stat.RANGED, 16);
	takeItem(ctx.player, ctx.objId, 1);
}); 