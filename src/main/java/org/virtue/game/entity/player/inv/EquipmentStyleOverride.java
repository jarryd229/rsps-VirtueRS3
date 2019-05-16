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
package org.virtue.game.entity.player.inv;

/**
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Kayla <skype:ashbysmith1996>
 * @author Sundays211
 * @since 24/01/2015
 */
public class EquipmentStyleOverride {
	
	private int objId;
	private int slot;
	
	private short[] recol;
	private byte[] recolSlots;
	
	private short[] retex;
	private byte[] retexSlots;
	
	public EquipmentStyleOverride (int itemID, int slot) {
		this.objId = itemID;
		this.slot = slot;
	}
	
	public void setRecol (short[] recol, byte[] slots) {
		this.recol = recol;
		this.recolSlots = slots;
	}
	
	public void setRetex (short[] retex, byte[] slots) {
		this.retex = retex;
		this.retexSlots = slots;
	}
	
	public int getObjId () {
		return objId;
	}
	
	public int getEquipSlot () {
		return slot;
	}
	
	public short[] getRecol () {
		return recol;
	}
	
	public byte[] getRecolSlots () {
		return recolSlots;
	}
	
	public short[] getRetex () {
		return retex;
	}
	
	public byte[] getRetexSlots () {
		return retexSlots;
	}

}
