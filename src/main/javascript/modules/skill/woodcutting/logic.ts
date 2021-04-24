import { Stat } from "engine/enums";
import { Player } from "engine/models";
import { sendMessage } from "shared/chat";

import { runAnim, stopAnim } from "shared/anim";
import { delayFunction } from "shared/util";
import { getStatLevel, randomStatChance } from "shared/stat";

import { Hatchet, findHatchet } from "./hatchet";

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 05/11/2014
 */

export interface WoodcuttingAction {
	/**
	 * Minimum level required to perform the action
	 */
	levelReq: number;

	/**
	 * The chance, out of 255, to perform the action successfully at level 1.
	 * Note: This doesn't take into account modifiers (better hatchets, familiars, boosts, etc)
	 */
	baseChance: number;

	/**
	 * The chance, out of 255, to perform the action successfully at level 99.
	 * Note: This doesn't take into account modifiers (better hatchets, familiars, boosts, etc)
	 */
	maxChance: number;
}

export function runWoodcuttingAction(player: Player, action: WoodcuttingAction, onSuccess: () => void) {
	if (getStatLevel(player, Stat.WOODCUTTING) < action.levelReq) {
		sendMessage(player, "You require a woodcutting level of " + action.levelReq + " to chop this tree.");
		return;
	}
	var axe = findHatchet(player);//Find the highest hatchet the player holds and can use
	if (!axe) {
		sendMessage(player, "You need a hatchet to chop this tree.");
		return;
	}
	runAnim(player, axe.anim);
	delayFunction(player, 4, process, true);

	function process() {
		if (checkSuccess(player, action, axe)) {
			stopAnim(player);
			onSuccess();
		} else {
			runAnim(player, axe.anim);
			delayFunction(player, 4, process, true);
		}
	}
}

function checkSuccess(player: Player, action: WoodcuttingAction, axe: Hatchet): boolean {
	const extraChance = axe.bonus;
	//TODO: Add modifiers here

	return randomStatChance(
		player,
		Stat.WOODCUTTING,
		action.baseChance + extraChance,
		action.maxChance + extraChance
	);
}
