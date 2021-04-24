import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity'; 

import { openCentralWidget } from 'shared/widget';
import _coords from 'shared/map/coords';
import { sendMessage } from 'shared/chat';

_events.bindEventListener(EventType.OPWORN1, [20769,20771,32152,32153], (ctx) => {//comp cape Kandarin Monastery
	_entity.setCoords(ctx.player, _coords(3086, 3502, 0));
});

_events.bindEventListener(EventType.OPWORN2, [20769,20771,32152,32153], (ctx) => {//comp cape Ardougne farm
	_entity.setCoords(ctx.player, _coords(2663, 3374, 0));
});

_events.bindEventListener(EventType.OPWORN3, [20769,20771,32152,32153], (ctx) => {//comp cape Max Guild
	_entity.setCoords(ctx.player, _coords(2276, 3314, 1));
});

_events.bindEventListener(EventType.OPWORN4, [20769,20771,32152,32153], (ctx) => {//comp cape Summoning restore
	sendMessage(ctx.player, "<col=ff0000>will be added soon. bugged atm.");
});

_events.bindEventListener(EventType.OPWORN5, [20769,20771,32152,32153], (ctx) => {//comp cape Customise
	openCentralWidget(ctx.player, 20, false);
});

_events.bindEventListener(EventType.OPWORN1, [20767,32151], (ctx) => {//max cape Customise
	openCentralWidget(ctx.player, 20, false);
});

_events.bindEventListener(EventType.OPWORN2, [20767,32151], (ctx) => {//max cape Max Guild
	_entity.setCoords(ctx.player, _coords(2276, 3314, 1));
});