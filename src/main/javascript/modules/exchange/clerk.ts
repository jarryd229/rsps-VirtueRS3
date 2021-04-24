import { EventType } from "engine/enums";
import _events from 'engine/events';

import { openExchange } from "./exchange-widget";

_events.bindEventListener(EventType.OPNPC1, [1419, 2593, 2240], (ctx) => {
	openExchange(ctx.player);
});
