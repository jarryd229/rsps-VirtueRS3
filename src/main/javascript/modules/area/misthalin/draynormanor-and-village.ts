import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';

import { mesbox, chatplayer, chatnpc, multi3 } from 'shared/dialog'; 
import { runAnim } from 'shared/anim';
import _coords from 'shared/map/coords';

    //dog kennel
	//varp 3468 1246925975 all blue draynor
	//interface 1383
 _events.bindEventListener(EventType.OPLOC1, 75852, async (ctx) => {//Trapdoor old xmas event
	//todo add knocking sound
	await chatnpc(ctx.player, 15874, "Get lost!");
	//todo add get lost sound
});

 _events.bindEventListener(EventType.OPLOC1, 5116, async (ctx) => {//Trapdoor (Mysterious old man house)
	await chatnpc(ctx.player, 16873, "Keep out of my basement!");//varp 3524 32772 to enter
});

 _events.bindEventListener(EventType.OPLOC1, [47424,47421], async (ctx) => {//draynormanor main door
	await chatplayer(ctx.player, "There's a sign on the door that says:");
	await mesbox(ctx.player, "Adventurers beware: Going in doesn't mean you'll come out again.");
       //varp 2170	from 67108864 to 67108992
	   //or varp 20
});

 _events.bindEventListener(EventType.OPLOC1, [96780,96781], (ctx) => {//deaths hourglass
	runAnim(ctx.player, 23603, function () {
        _entity.setCoords(ctx.player, _coords(414, 652, 0));
	});
});

 _events.bindEventListener(EventType.OPLOC1, 10041, async (ctx) => {//tree next to bank
    runAnim(ctx.player, 21189, async function () {
		runAnim(ctx.player, -1);
	    await chatnpc(ctx.player, 2574, "Qw! That really hurt!");
	});
});

 _events.bindEventListener(EventType.OPLOC2, 10041, async (ctx) => {//tree next to bank
	await chatplayer(ctx.player, "Hello?");
	await chatnpc(ctx.player, 2574, "Ssshhh! What do you want?");
	await chatplayer(ctx.player, "Well, it's not every day you see a man up a tree.");
	await chatnpc(ctx.player, 2574, "I'm trying to observe a suspect. Leave me alone!");
	multi3(ctx.player, "WHAT WOUlD YOU LIKE TO SAY?", "This is about the bank robbery, right?", () => {
	}, "You're not being very subtle up there.", () => {
	}, "Can I do anything to help?", async () => {
		await chatplayer(ctx.player, "Can I do anything to help?");
	});
});