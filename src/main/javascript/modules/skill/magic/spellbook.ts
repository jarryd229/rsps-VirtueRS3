import { Player } from 'engine/models';
import { varp, varbit, setVarp } from 'engine/var';

import { selectProduct, startCrafting } from 'shared/makex'; 
import { setResumeHandler } from 'shared/dialog';
import { closeAllWidgets, openCentralWidget } from 'shared/widget';
import { sendDebugMessage } from 'shared/chat';

import { analyseItem, start } from '../invention/disassembly';

export function cast (player: Player, spellId: number) {
		//param 2871 = spellbook (0=Normal, 1=Ancient, 2=Lunar, 3=Common, 4=Dungeoneering)
		//varbit 0 = active spellbook
		switch (spellId) {
		case 14740://Enchant bolts
			enchantCrossbowBolts(player);
			return;
		case 14875://Home teleport
			openCentralWidget(player, 1092);
			return;
		default:
			sendDebugMessage(player, "Spell not yet implemented: "+spellId);
		}
}

export function castOnItem (player: Player, spellId: number, objId: number) {
	switch (spellId) {
	case 32942://Analyse
		analyseItem(player, objId);
		return;
	case 32943://Disassemble
		start(player, objId);
		return;
	default:
		sendDebugMessage(player, "Spell not yet implemented: "+spellId);
		return;
	}
}

function enchantCrossbowBolts (player: Player) {
	selectProduct(player, -1, -1, 6761, -1, "Enchant Bolts");
	setResumeHandler(player, () => {
		closeAllWidgets(player);
		var productId = varp(player, 1170) as number;
		var amount = varbit(player, 1003);
		if (amount) {
			setVarp(player, 1175, productId);
			var text = "You enchant the bolts.";
			startCrafting(player, amount, 21670, text);
		}
	});
}