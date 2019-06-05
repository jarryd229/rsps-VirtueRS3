import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatplayer, chatnpc } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, [ 182, 183 ], async (ctx) => {
	await chatplayer(ctx.player, "Hello!");
	//random
	//await chatnpc(ctx.player, ctx.npc, "Arrh ye scurvy dog!");
	
	//await chatnpc(ctx.player, ctx.npc, "Batton down the hatches, there's a storm a brewin!");
	
	//await chatnpc(ctx.player, ctx.npc, "Man overboard!");
	
	//await chatnpc(ctx.player, ctx.npc, "Splice the mainbrace!");
	
	//await chatnpc(ctx.player, ctx.npc, "Arrh be off with ye!");
	
	//await chatnpc(ctx.player, ctx.npc, "Pieces of eight! Pieces of eight!");
	//await chatnpc(ctx.player, ctx.npc, "Oh wait that's the parrot's line.");
	
	//await chatnpc(ctx.player, ctx.npc, "I think ye'll be taking a long walk off a short plank!");
	
	//await chatnpc(ctx.player, ctx.npc, "Arrh arrh!");
	
	//await chatnpc(ctx.player, ctx.npc, "Yo ho ho and bottle of alcopop!");
	
	//await chatnpc(ctx.player, ctx.npc, "Arrh!");
	
	//await chatnpc(ctx.player, ctx.npc, "Shiver me timbers!");
	
	//await chatnpc(ctx.player, ctx.npc, "A pox on ye!");
	
	//await chatnpc(ctx.player, ctx.npc, "Arrh I'll keel haul ye!");
	
	//await chatnpc(ctx.player, ctx.npc, "Great blackbeard's beard!");
	
	//await chatnpc(ctx.player, ctx.npc, "Avast me hearties!");
	
	//await chatnpc(ctx.player, ctx.npc, "Avast behind!");
	//await chatplayer(ctx.player, "Who's got a vast behind?");
	//await chatnpc(ctx.player, ctx.npc, "Oh forget it.");
	
	//await chatnpc(ctx.player, ctx.npc, "Arrh! I be in search of buried treasure!");
	
	//await chatnpc(ctx.player, ctx.npc, "3 days at port for resupply then out on the high sea!");
	
	//await chatnpc(ctx.player, ctx.npc, "Yo ho ho me hearties!");
	
	//await chatnpc(ctx.player, ctx.npc, "Avast! Avast!");
	//await chatplayer(ctx.player, "A vast what?");
	//await chatnpc(ctx.player, ctx.npc, "Arrh, stow yer gab and leave me be.");
	
	await chatnpc(ctx.player, ctx.npc, "Yo ho ho and a bottle of rum!");
	
	//await chatnpc(ctx.player, ctx.npc, "Arrrh ye lily livered landlubber!");
	
	//await chatnpc(ctx.player, ctx.npc, "I'm the scourge of the seven seas!");
	
	//await chatnpc(ctx.player, ctx.npc, "All hands on deck!");
	
	//await chatnpc(ctx.player, ctx.npc, "Good day to you my dear sir!");
	
	//await chatnpc(ctx.player, ctx.npc, "I'm the scourge of the six seas!");
	//await chatplayer(ctx.player, "Don't you mean seven seas?");
	//await chatnpc(ctx.player, ctx.npc, "I'm the scourge of the seven seas!");
});