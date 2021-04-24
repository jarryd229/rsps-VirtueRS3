import { EventType } from 'engine/enums';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { sendMessage } from 'shared/chat';
import { varbit, setVarBit } from 'engine/var';
import { defaultHandler } from 'shared/util';
import { closeAllWidgets } from 'shared/widget';
import _coords from 'shared/map/coords';

_events.bindEventListener(EventType.IF_BUTTON, 1610, (ctx) => {
	var player = ctx.player;
	switch (ctx.component) {
		//for Deposit box
		//dialog.requestCount(player, "How many minutes should this deposit box be available? (insert 999 for the duration of the scenario)")
		//.then(function (time) {
		//loc 8927 at player coords then time
		//});
		case 82://Heal
			ENGINE.restoreLifePoints(player);
			sendMessage(player, "You set your health to max.");
		return;
		case 115://Exit Button
			closeAllWidgets(player);
		return;
		case 145://invis
			//player.getModel().setRender(Render.INVISIBLE);
			//player.getModel().refresh();
			sendMessage(player, "You are invisible.");
		return;
		case 153://Invulnerable 
			var enabled = varbit(player, 27405) == 1;
			setVarBit(player, 27405, enabled ? 0 : 1);
			sendMessage(player, "You toggle your invulnerability.");
		return;	
		case 185://Jmod Quick-Chat Option
		return;
		case 269://Panic!
			ENGINE.restoreLifePoints(player);
			_entity.setCoords(player, _coords(2907, 3334, 3));
			closeAllWidgets(player);
			sendMessage(player, "Be healed!");
			sendMessage(player, "Don't Panic Mr Mainwaring!");
			return;
		case 291://Keep Max HP
			sendMessage(player, "Max HP timer toggled on.");
			sendMessage(player, "todo add the code");
		return;
		default:
			defaultHandler(ctx, "JMod ToolBox");
		return;
	}
});