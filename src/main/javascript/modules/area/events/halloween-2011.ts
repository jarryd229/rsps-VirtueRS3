import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events'; 
 
import { openCentralWidget, setWidgetText } from 'shared/widget';

	//halloween 2011   0,64,81,49,10
_events.bindEventListener(EventType.OPLOC1, 62624, (ctx) => {
	openCentralWidget(ctx.player, 1151, false);
});

_events.bindEventListener(EventType.OPLOC1, 62428, (ctx) => {
	openCentralWidget(ctx.player, 1149, false);
	setWidgetText(ctx.player, 1149, 27, "Welcome Area Portal");
	setWidgetText(ctx.player, 1149, 28, "This welcome portal area is where you'll first arrive in a clan citadel, and where<br> visitors can be greeted. The statues around the portal can be customised, and<br> all banners will bear the clan's logo. In the rest of the welcome area you'll, find<br> the noticeboard, meeting tent and signpost, and the entrance to the clan's<br> battlefield.");
	setWidgetText(ctx.player, 1149, 29, "Notes for Deathcon attendees:<br> -Death does't do personal greetings (because of last year's incident).<br> -Beauty needs some help to pick the welcome portal statues.");
});