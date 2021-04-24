import { EventType } from 'engine/enums';
import _events from 'engine/events';
import { pickpocket } from './pickpocket';
import { lootItem } from 'shared/util';

/**
 * @author Kayla
 * @author rsJuuuuu
 * @since 01/16/2015
 */
_events.bindEventListener(EventType.OPNPC3, [6174, 6388], (ctx) => {
	//TODO: Add blackjack logic
	pickpocket(ctx.player, Npc.BEARDED_POLLNIVNIAN_BANDIT, ctx.npc);
});

_events.bindEventListener(EventType.OPNPC3, [1880, 1881], (ctx) => {
	//TODO: Add blackjack logic
	pickpocket(ctx.player, Npc.POLLINIVNIAN_BANDIT, ctx.npc);
});

_events.bindEventListener(EventType.OPNPC3, [1905], (ctx) => {
	//TODO: Add blackjack logic
	pickpocket(ctx.player, Npc.MENAPHITE_THUG, ctx.npc);
});

var Npc = {
	BEARDED_POLLNIVNIAN_BANDIT: {
		level: 45,
		xp: 45,
		common: [lootItem(995, 40)],
		stunTime: 5,
		stunDamage: 20
	},
	POLLINIVNIAN_BANDIT: {
		level: 55,
		xp: 84.3,
		common: [lootItem(995, 50)],
		stunTime: 5,
		stunDamage: 50
	},
	MENAPHITE_THUG: {
		level: 65,
		xp: 137.5,
		common: [lootItem(995, 60)],
		stunTime: 5,
		stunDamage: 50
	},
};
