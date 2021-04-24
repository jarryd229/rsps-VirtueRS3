import { EventType } from 'engine/enums';
import _events from 'engine/events';
 
import { runAnim, addSpotAnim } from 'shared/anim';
import { chatplayer } from 'shared/dialog';
 
_events.bindEventListener(EventType.OPNPC1, 20985, async (ctx) => {
	addSpotAnim(ctx.player, 5128);
	runAnim(ctx.player, 24529);
	await chatplayer(ctx.player, "Ow! How did that pig give me an electric shock?");
});