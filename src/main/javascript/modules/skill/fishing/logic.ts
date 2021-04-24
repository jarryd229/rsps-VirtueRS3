import { Player, Npc } from "engine/models";
import _map from 'engine/map';

import { stopAnim, runAnim } from "shared/anim";
import { delayFunction } from "shared/util";
import { hasSpace } from "shared/inv";
import { mesbox } from "shared/dialog";

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 01/16/2015
 */
export function runFishingAction(
	player: Player,
	fishingSpot: Npc,
	animId: number,
	speed: number,
	processCatch: () => boolean
) {
	const spotCoords = _map.getCoords(fishingSpot);
	runAnim(player, animId);
	delayFunction(player, speed, process, true);

	function process() {
		if (_map.getCoords(fishingSpot) !== spotCoords) {
			stopAnim(player);
		} else if (!hasSpace(player)) {
			mesbox(player, "Your inventory is too full to hold any more fish.");
			stopAnim(player);
		} else {
			if (processCatch()) {
				runAnim(player, animId);
				delayFunction(player, speed, process, true);
			} else {
				stopAnim(player);
			}
		}
	}
}
