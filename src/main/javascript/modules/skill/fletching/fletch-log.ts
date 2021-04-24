import { Player } from "engine/models";
import { selectProduct } from "shared/makex";

import { setSelectionHandler } from "./logic";

export function selectFletchingProduct (player: Player, materialId: number) {
 	var categoryEnum;
 	switch (materialId) {
 	case 1511://Logs
 		categoryEnum = 6947;
 		break;
 	case 2862://Achey logs
 		categoryEnum = 6948;
 		break;
 	case 1521://Oak logs
 		categoryEnum = 6949;
 		break;
 	case 1519://Willow logs
 		categoryEnum = 6950;
 		break;
 	case 6333://Teak logs
 		categoryEnum = 6951;
 		break;
 	case 1517://Maple logs
 		categoryEnum = 6952;
 		break;
 	case 6332://Mahogany logs
 		categoryEnum = 6953;
 		break;
 	case 1515://Yew logs
 		categoryEnum = 6954;
 		break;
 	case 1513://Magic logs
 		categoryEnum = 6955;
 		break;
 	case 21600://Blisterwood logs
 		categoryEnum = 6956;
 		break;
 	case 21600://Elder logs
 		categoryEnum = 7994;
 		break;
 	}
 	selectProduct(player, 6939, 6940, categoryEnum);
 	setSelectionHandler(player);
 }
