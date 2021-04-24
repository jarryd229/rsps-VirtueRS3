import { EventType } from 'engine/enums';
import _events from 'engine/events';

import { chatnpc, multi2 } from 'shared/dialog';

_events.bindEventListener(EventType.OPNPC1, 16186, async (ctx) => {
	await chatnpc(ctx.player, ctx.npc, "Welcome to the Wizards' Tower, adventurer.");
	multi2(ctx.player, "CHOOSE AN OPTION", "What can i do here?", async () => {
		await chatnpc(ctx.player, ctx.npc, "It was wizards of the tower who discovered the Rune<br> Mysteries - the secret of creating runes out of rune<br> essence. Archmage Sedridor will teleport adventurers to<br> the essence mine. His office is on the second floor.");
		await chatnpc(ctx.player, ctx.npc, "Recently a wizard called Finix descovered an alternative<br> runecrafting method. Speak to him on the roof if you're<br> interested.");
		await chatnpc(ctx.player, ctx.npc, "If you'd like to practice combat magic, you might want to<br> attack the spellwisps outside the tower. I believe there's a<br> cluster of them to the west of here.");
	}, "I'm fine, thanks.", () => {
	});
});
