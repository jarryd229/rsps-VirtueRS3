import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import { setVarp } from 'engine/var';

import { mapMembers } from 'shared/util';
import { giveItem, hasItem, takeItem } from 'shared/inv';
import { chatnpc, chatplayer, mesbox, multi2 } from 'shared/dialog';

import { hasStarted, hasFinished } from '../../quest';

_events.bindEventListener(EventType.OPNPC1, 895, async (ctx) => {
    var player = ctx.player;
	var npc = ctx.npc;
	if(mapMembers()){
        if(hasFinished(player, 7)) {
			await chatnpc(player, npc, "Thank you for getting my ball back!");
			await chatplayer(player, "You're welcome.");
        } else if(hasStarted(player, 7)) {
			if (hasItem(player, 2407)) {
				await chatplayer(player, "HI, I have got your ball back. It was MUCH harder then I<br> thought it would be.");
				await chatnpc(player, npc, "Thank you so much!");
					takeItem(player, 2407, 1);
					setVarp(player, 2276, 7);
					//show quest finished
	        } else {
				await chatnpc(player, npc, "Have you got my ball back yet?");
				await chatplayer(player, "Not yet.");
				await chatnpc(player, npc, "Well, it's in the shed in that garden.");
			}
		} else {
				await chatplayer(player, "Hello young man.");
				await mesbox(player, "The boy sobs.");
				await multi2(player, "SELECT AN OPTION", "What's the matter?", async () => {
					await chatplayer(player, "What's the matter?");
					await chatnpc(player, npc, "I've kicked my ball over that hedge, into that garden! The<br> old lady who lives there is scary... She's locked the ball in<br> her wooden shed! Can you get my ball back for me please?");
					await multi2(player, "SELECT AN OPTION", "Ok, I'll see what i can do.", async () => {
						await chatplayer(player, "Ok, I'll see what i can do.");
						await chatnpc(player, npc, "Thanks mister!");
						setVarp(player, 2276, 1);
					}, "Get it back yourself.", async () => {
						await chatplayer(player, "Get it back yourself.");
						await chatnpc(player, npc, "You're a meany!");
						await mesbox(player, "The boy starts crying again.");
                    });
				}, "Well if you're not going to answer. I'll go.", async () => {
					await chatplayer(player, "Well if you're not going to answer. I'll go.");
					await mesbox(player, "The boy sniffs slightly.");
                });
		}
	} else {
		await chatplayer(player, "Hello young man.");
		await chatnpc(player, npc, "Leave me alone...");
    }
});