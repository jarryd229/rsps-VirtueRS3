import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { chatplayer } from 'shared/dialog';
import { openCentralWidget } from 'shared/widget';
import { sendMessage } from 'shared/chat';
import _coords from 'shared/map/coords';

_events.bindEventListener(EventType.OPLOC1, 65907, async (ctx) => {//Staircase
	await chatplayer(ctx.player, "I should speak to Sedridor to find out how i can help at<br> the banquet before I start exploring.");
});

_events.bindEventListener(EventType.OPLOC1, 65913, async (ctx) => {//Ladder
	await chatplayer(ctx.player, "I should speak to Sedridor to find out how i can help at<br> the banquet before I start exploring.");
});

_events.bindEventListener(EventType.OPLOC1, 65938, (ctx) => {//Scoreboard
	openCentralWidget(ctx.player, 290, false);
});

_events.bindEventListener(EventType.OPLOC1, 65939, (ctx) => {//oak tree
	sendMessage(ctx.player, "I didn't know that imps liked to climb trees!");
});

_events.bindEventListener(EventType.OPLOC1, 65943, (ctx) => {//Bookcase
	sendMessage(ctx.player, "Is that a book with a tail?");
});

_events.bindEventListener(EventType.OPLOC1, 65946, (ctx) => {//Fountain
	sendMessage(ctx.player, "I had better not touch that until I know what it is.");
});

_events.bindEventListener(EventType.OPLOC1, 65956, (ctx) => {//portal
	_entity.setCoords(ctx.player, _coords(1378, 4374, 2));
});

_events.bindEventListener(EventType.OPLOC1, 65959, (ctx) => {//Exit portal
	_entity.setCoords(ctx.player, _coords(3222, 3222, 0));
});

_events.bindEventListener(EventType.OPLOC1, 65976, (ctx) => {//tree
	sendMessage(ctx.player, "Why are you looking at a tree you should be helping Sedridor? stop slacking!");
});