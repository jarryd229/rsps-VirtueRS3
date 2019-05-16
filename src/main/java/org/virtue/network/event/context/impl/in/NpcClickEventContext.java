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
package org.virtue.network.event.context.impl.in;

import org.virtue.network.event.context.GameEventContext;
import org.virtue.network.event.decoder.ClientProtocol;

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 15/11/2014
 */
public class NpcClickEventContext implements GameEventContext {

	private int entityIndex;
	
	private boolean forceRun;
	
	private OptionButton button;
	
	public NpcClickEventContext (int entityIndex, boolean forceRun, int opcode) {
		this.entityIndex = entityIndex;
		this.forceRun = forceRun;
		this.button = forOpcode(opcode);
	}
	
	public int getEntityIndex () {
		return entityIndex;
	}
	
	public boolean forceRun () {
		return forceRun;
	}
	
	public OptionButton getButton () {
		return button;
	}
	
	public static OptionButton forOpcode (int opcode) {
		switch (ClientProtocol.forOpcode(opcode)) {
		case OPNPC1:
			return OptionButton.ONE;
		case OPNPC2:
			return OptionButton.TWO;
		case OPNPC3:
			return OptionButton.THREE;
		case OPNPC4:
			return OptionButton.FOUR;
		case OPNPC5:
			return OptionButton.FIVE;
		case OPNPC6:
			return OptionButton.SIX;
		default:
			return null;
		}
	}
}
