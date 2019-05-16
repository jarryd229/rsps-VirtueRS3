/**
 * Copyright (c) 2014 Virtue Studios
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
package org.virtue.network.event.encoder.impl;

import org.virtue.game.entity.player.Player;
import org.virtue.network.event.buffer.OutboundBuffer;
import org.virtue.network.event.context.impl.out.FriendChatEventContext;
import org.virtue.network.event.encoder.EventEncoder;
import org.virtue.network.event.encoder.ServerProtocol;

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 8/11/2014
 */
public class FriendChatEventEncoder implements EventEncoder<FriendChatEventContext> {

	/* (non-Javadoc)
	 * @see org.virtue.network.event.encoder.EventEncoder#encode(org.virtue.game.entity.player.Player, org.virtue.network.event.context.GameEventContext)
	 */
	@Override
	public OutboundBuffer encode(Player player, FriendChatEventContext context) {
		OutboundBuffer buffer = new OutboundBuffer();
		if (context.isFullUpdate()) {
			buffer.putVarShort(ServerProtocol.UPDATE_FRIENDCHANNEL_FULL, player);
			buffer.putString(context.getOwnerName());
			buffer.putByte(0);//No need to send the owner unfiltered name, as it's never used
			buffer.putString(context.getChannelName());
			buffer.putByte(context.getKickReq().getId());
			buffer.putByte(context.getUsers().length);
		} else {
			buffer.putVarByte(ServerProtocol.UPDATE_FRIENDCHANNEL_PART, player);
		}
		for (FriendChatEventContext.User user : context.getUsers()) {
			packUser(user, buffer);
		}
		if (context.isFullUpdate()) {
			buffer.finishVarShort();
		} else {
			buffer.finishVarByte();
		}
		return buffer;
	}
	
	private void packUser (FriendChatEventContext.User user, OutboundBuffer buffer) {
		buffer.putString(user.getName());
		buffer.putByte(user.hasFilteredName() ? 1 : 0);
		if (user.hasFilteredName()) {
			buffer.putString(user.getNameUnfiltered());
		}
		buffer.putShort(user.getNodeID());
		if (user.getRank() == null) {
			buffer.putByte(Byte.MIN_VALUE);
		} else {
			buffer.putByte(user.getRank().getId());
			buffer.putString(user.getWorldName());
		}
	}

}
