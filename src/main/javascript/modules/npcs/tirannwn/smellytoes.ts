import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';

import { chatplayer, chatnpc } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 6128, async (ctx) => {
	await chatplayer(ctx.player, "Hi there.");
	await chatnpc(ctx.player, ctx.npc, "Hey, ids me matesh!");
	await chatplayer(ctx.player, "Sorry, have we met?");
	await chatnpc(ctx.player, ctx.npc, "Yeah! you wazsh wiv me in dat pub overy by hill!");
	await chatplayer(ctx.player, "I have no idea what you're going on about.");
	await chatnpc(ctx.player, ctx.npc, "Glad yeeash remembers.");
});