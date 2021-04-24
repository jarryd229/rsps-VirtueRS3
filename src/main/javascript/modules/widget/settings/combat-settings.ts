import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import { varbit, setVarBit } from 'engine/var';
import { defaultHandler } from 'shared/util';
import { sendMessage } from 'shared/chat';

_events.bindEventListener(EventType.IF_BUTTON, 1503, (ctx) => {
	var player = ctx.player;
	switch (ctx.component) {
		case 2://sheathe
			player.switchSheathing();
			return;
		case 4://special attack
			player.getCombatSchedule().updateAdrenaline(1000);
			player.getCombatSchedule().setSpecialEnabled(!player.getCombatSchedule().isSpecialEnabled());
			player.getCombatSchedule().setDefaultAttack();
			sendMessage(ctx.player, "Special is " + (player.getCombatSchedule().isSpecialEnabled() ? "enabled." : "disabled."));
			return;
		case 49://retaliate
			let wasRetaliating = varbit(ctx.player, 462) === 0;
			setVarBit(ctx.player, 462, wasRetaliating ? 1 : 0);
			return;
		case 32://attack
		case 36://balance
		case 40://strength
		case 44://defence
			defaultHandler(ctx, "Combat Settings");
			return;
		default:
			defaultHandler(ctx, "Combat Settings");
			return;
	}
});
