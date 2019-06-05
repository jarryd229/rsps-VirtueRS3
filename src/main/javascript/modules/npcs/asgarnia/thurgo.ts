/**
 * Copyright (c) 2016 Virtue Studios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions\:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import { Stat, Inv } from 'engine/enums';
import { varp, setVarp, varbit, setVarBit } from 'engine/var';
import { Player, Npc } from 'engine/models';

import { getStatLevel } from 'shared/stat';
import { chatnpc, chatplayer, mesbox, multi2, multi3 } from 'shared/dialog';
import { giveItem, hasItem, takeItem } from 'shared/inv';

_events.bindEventListener(EventType.OPNPC1, 604, async (ctx) => {
	if (getStatLevel(ctx.player, Stat.SMITHING) >= 99) {
		await multi3(ctx.player, "WHAT WOULD YOU LIKE TO ASK ABOUT", "Skillcape of smithing.", async () => {
			await chatplayer(ctx.player, "That's an unusual cape you're wearing, what is it?");
			await chatnpc(ctx.player, ctx.npc, "It's a Skillcape of Smithing. Shows that I am a master<br> blacksmith, but of course that's only to be expected. I am<br> an Imcando dwarf after all and everybody knows we're<br> the best blacksmiths.");
		}, "I've noticed there are a couple of versions of each skillcape.", async () => {
			await chatnpc(ctx.player, ctx.npc, "Yes! We, the skill masters, have crafted new versions of<br> all skillcapes! We felt like it was time for a change.");
			//check if old model here
			await chatnpc(ctx.player, ctx.npc, "You can still choose to wear the old model skillcape if you<br> want. Would you like to change which model you are<br> currently using?");
			await multi2(ctx.player, "SELECT AN OPTION", "Yes, I would like to wear the old version of the skillcape.", async () => {
				await chatnpc(ctx.player, ctx.npc, "Would you like to wear the old model for just this cape, or<br> for the Quest point cape and all of the skillcapes you own?");
				await multi3(ctx.player, "SELECT AN OPTION", "I would just like to change the Smithing skillcape.", () => {
				}, "I would just like to change all my skillcapes.", async () => {
				//find varp id
				//setvarp here
				await chatnpc(ctx.player, ctx.npc, "No problem, you will now use the older model for all of<br> your skillcapes!");
		        }, "I've changed my mind!", () => {
		        });
		    }, "No, thank you.", async () => {
				await chatnpc(ctx.player, ctx.npc, "Great! I'm glad you're enjoying our new version!");
			});
		}, "Something else.", async () => {
			knightssword(ctx.player, ctx.npc);
		});
	}else{
        await multi2(ctx.player, "WHAT WOULD YOU LIKE TO ASK ABOUT", "Skillcape of smithing.", async () => {
			await chatplayer(ctx.player, "That's an unusual cape you're wearing, what is it?");
			await chatnpc(ctx.player, ctx.npc, "It's a Skillcape of Smithing. Shows that I am a master<br> blacksmith, but of course that's only to be expected. I am<br> an Imcando dwarf after all and everybody knows we're<br> the best blacksmiths.");
		}, "Something else.", async () => {
			knightssword(ctx.player, ctx.npc);
		});
	}
});


async function knightsswordredberrypie (player: Player, npc: Npc) {
    await chatplayer(player, "Would you like some redberry pie?");
	await mesbox(player, "You see Thurgo's eyes light up.");
	await chatnpc(player, npc, "I'd never say no to a redberry pie! They're GReAT stuff!");
	await mesbox(player, "You hand over the pie. Thurgo eats the pie. Thurgo pats his stomach.");
	takeItem(player, 2325, 1);
	setVarp(player, 2547, 3);
	await chatnpc(player, npc, "By Guthix! THAT was good pie! Anyone who makes pie like<br> THAT has got to be alright!");
}


async function knightssword (player: Player, npc: Npc) {
	if (varp(player, 2547) == 2){
	    if (hasItem(player, 2325)) {
		    multi2(player, "CHOOSE AN OPTION", "Hello. Are you an Imcando dwarf?", async () => {	
			    await chatplayer(player, "Hello. Are you an Imcando dwarf?");
				await chatnpc(player, npc, "Maby. Who wants to know?");
				multi2(player, "CHOOSE AN OPTION", "Would you like some redberry pie?", async () => {
					knightsswordredberrypie(player, npc);
			    }, "Can you make me a special sword?", async () => {
					await chatplayer(player, "Can you make me a special sword?");
				    await chatnpc(player, npc, "No. I don't do that anymore. I'm getting old");
				});	
			}, "Would you like some redberry pie?", async () => {	
			    knightsswordredberrypie(player, npc);
			});
	    } else {
		    await chatplayer(player, "Hello. Are you an Imcando dwarf?");
			await chatnpc(player, npc, "Maby. Who wants to know?");
		}
    } else if (varp(player, 2547) == 3){
	    await chatplayer(player, "Can you make me a special sword?");	
		await chatnpc(player, npc, "Well, after bringing me my favorite food I guess I should<br> give it a go. What sort of sword is it?");
		await chatplayer(player, "I need you to make a sword for one of Falador's knights.<br> He had one wich was passed down throuth five<br> generations, but his squire has lost it. So we need an<br> identical one to replace it.");	
	    await chatnpc(player, npc, "A Knight's sword eh? Well I'd need to know exactly how it<br> looked before I could make a new one.");
		await chatnpc(player, npc, "All the Faladian knights used to have swords with unique<br> designs according to their position. Could you bring me a<br> picture or something?");
		await chatplayer(player, "I'll go and ask his squire and see if I can find one.");
	    setVarp(player, 2547, 4);
	} else if (varp(player, 2547) == 4 || varp(player, 2547) == 5){
		await chatplayer(player, "About that sword...");
		if (hasItem(player, 666)) {
			await chatplayer(player, "I have found a picture of the sword I would like you to<br> make.");
			await mesbox(player, "You give the portrait to Thurgo. Thurgo studies the portrait.");
			await chatnpc(player, npc, "Ok. You'll need to get me some stuff in order for me to<br> make this.");
			await chatnpc(player, npc, "I'll need two iron bars to make the sword to start with. I'll<br> also need an ore called blurite. It's useless for making<br> actual weapons for fighting with except crossbows, but I'll<br> need some as decoration for the hilt.");
			await chatnpc(player, npc, "the only place I know where to get it is under this cliff<br> here...");
			await chatnpc(player, npc, "But it is guarded by a very powerful ice giant.");
			await chatnpc(player, npc, "Most of the rocks in that cliff are pretty useless, and<br> don't contain much of anything, but there's DEFINITELY<br> some blurite in there.");
			await chatnpc(player, npc, "You'll need a little bit of mining experience to be able to<br> find it.");
	        await chatplayer(player, "Ok. I'll go and find them then.");
		    takeItem(player, 666, 1);
	        setVarp(player, 2547, 6);
		} else {
			await chatnpc(player, npc, "Have you got a picture of the sword for me yet?");
			await chatplayer(player, "Sorry, not yet.");
			await chatnpc(player, npc, "Well, come back when you do.");
	    }
	} else if (varp(player, 2547) == 6){	
	    await chatplayer(player, "About that sword...");
		if (hasItem(player, 667, 1, Inv.BACKPACK) || hasItem(player, 667, 1, Inv.EQUIPMENT) || hasItem(player, 667, 1, Inv.BANK)) {
			await chatplayer(player, "Thanks for all your help in getting it for me!");
		    await chatnpc(player, npc, "No worries mate.");
		} else if (hasItem(player, 668, 1, Inv.BACKPACK) && hasItem(player, 2351, 2, Inv.BACKPACK)) {
		    await chatnpc(player, npc, "How are you doing finding those sword materials?");
		    await chatplayer(player, "I have them right here.");
		    await mesbox(player, "You give the blurite ore and two iron bars to Thurgo. Thurgo starts to<br> make the sword. Thurgo hands you a sword.");
			takeItem(player, 668, 1);
			takeItem(player, 2351, 2);
			giveItem(player, 667, 1);
			await chatplayer(player, "thank you very much!");
			await chatnpc(player, npc, "Just remember to call in with more pie some time!");
		} else {	
		    await chatnpc(player, npc, "How are you doing finding those sword materials?");
			//may need code to say i dont have iron bars
		    await chatplayer(player, "I don't have any blurite ore yet...");
		    await chatnpc(player, npc, "Better go get some then, huh?");
		}
	} else {
        await mesbox(player, "Thurgo doesn't appear to be interested in talking.");
    }
}