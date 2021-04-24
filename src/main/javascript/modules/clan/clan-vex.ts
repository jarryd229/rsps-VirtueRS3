import { EventType } from 'engine/enums';
import { Player, Npc } from 'engine/models';
import _events from 'engine/events';
import _map from 'engine/map';

import { sendMessage } from 'shared/chat';
import { runAnim } from 'shared/anim';

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 24/01/2015
 */
 _events.bindEventListener(EventType.OPHELD1, 20709, (ctx) => {
 	//Option 1 (Place) as an inventory item
 	placeClanVex(ctx.player);
 });

_events.bindEventListener(EventType.OPWORN1, 20709, (ctx) => {
 	//Option 1 (Place) as a worn item
 	placeClanVex(ctx.player);
 });

_events.bindEventListener(EventType.OPNPC1, 13634, (ctx) => {
 	//Option 1 (Read) as an NPC vexillum
 	readClanVex(ctx.player);
 });

_events.bindEventListener(EventType.OPNPC3, 13634, (ctx) => {
 	//Option 3 (Remove) as an NPC vexillum
 	checkVexOwnership(ctx.player, ctx.npc);
 });

 function placeClanVex (player: Player) {
 	var npc = ENGINE.createNpc(13634, _map.getCoords(player));
 	if(npc.getOwner() !== null) {
 		sendMessage(player, "You already have a clan vex out.");
 	} else {
 	   npc.setOwner(player);
 	   ENGINE.spawnNpc(npc);
 	   runAnim(player, 827);
 	   ENGINE.moveAdjacent(player);
 	}
 }

 function checkVexOwnership(player: Player, npc: Npc) {
 	if(!npc.isOwner(player)) {
 		sendMessage(player, "You are not the owner of this Clan Vex.");
 		return true;
 	}
 	npc.destroy();
 	player.setPet(null);

 }

 function readClanVex(player: Player) {
 	sendMessage(player, "There's no information about this clan.");
 }
