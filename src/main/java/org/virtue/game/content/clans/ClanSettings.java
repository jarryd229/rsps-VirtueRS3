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
package org.virtue.game.content.clans;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Queue;

import org.virtue.Virtue;
import org.virtue.config.vartype.VarDomainType;
import org.virtue.config.vartype.bit.VarBitOverflowException;
import org.virtue.config.vartype.bit.VarBitType;
import org.virtue.game.content.chat.SocialUser;
import org.virtue.game.parser.AccountInfo;
import org.virtue.network.event.context.impl.out.ClanSettingsDeltaEventContext;
import org.virtue.network.event.context.impl.out.ClanSettingsEventContext;

/**
 * Represents the underlying settings data for a clan
 * 
 * @author Im Frizzy <skype:kfriz1998>
 * @author Frosty Teh Snowman <skype:travis.mccorkle>
 * @author Arthur <skype:arthur.behesnilian>
 * @author Sundays211
 * @since 20/12/2014
 */
public class ClanSettings {
	
	public static class Data {
		public List<ClanMember> members = new ArrayList<ClanMember>();
		public List<Long> bans = new ArrayList<Long>();
		public ClanRank minTalkRank = ClanRank.RECRUIT;
		public ClanRank minKickRank = ClanRank.RECRUIT;
		public String clanName = "";
		public long clanHash = 0L;
		public int updateNumber = 0;
		public int creationTime = 0;
		public boolean allowNonMembers = true;
		public Map<Integer, Object> varValues = new HashMap<Integer, Object>();
	}
	
	private final long clanHash;
	
	private ClanSettingsDelta delta;
	
	private int creationTimeMins;
	
	private String clanName;
	
	private ClanRank rankTalk = ClanRank.RECRUIT;
	
	private ClanRank rankKick = ClanRank.RECRUIT;
	
	//private ClanRank minLootShareRank = ClanRank.RECRUIT;
	
	private boolean allowUnaffined = true;
	
	private transient ClanChannel linkedChannel;
	
	private int updateNumber = 0;
	
	private int ownerSlot = -1;
	
	private int replacementOwnerSlot = -1;
	
	private final List<ClanMember> members = Collections.synchronizedList(new ArrayList<ClanMember>());
	
	private final List<ClanBan> bans = Collections.synchronizedList(new ArrayList<ClanBan>());
	
	private transient final List<SocialUser> onlineMembers = Collections.synchronizedList(new ArrayList<SocialUser>());
	private transient final List<SocialUser> onlineGuests = Collections.synchronizedList(new ArrayList<SocialUser>());
	
	private transient final Queue<SocialUser> initQueue = new LinkedList<SocialUser>();
	
	private final Map<Integer, Object> varValues = Collections.synchronizedMap(new HashMap<Integer, Object>());
	
	//private final EnumMap<ClanRank, EnumSet<ClanPermission>> permissions = new EnumMap<ClanRank, EnumSet<ClanPermission>>(ClanRank.class);
	
	private boolean needsSave;
	
	public ClanSettings (long clanHash, String clanName) {
		this.clanHash = clanHash;
		this.creationTimeMins = (int) System.currentTimeMillis() / (1000*60);
		this.updateNumber = 0;
		this.clanName = clanName;
		this.needsSave = true;
	}
	
	public ClanSettings (Data data) {
		this(data.clanHash, data.clanName);
		this.updateNumber = data.updateNumber;
		this.creationTimeMins = data.creationTime;
		this.allowUnaffined = data.allowNonMembers;
		this.rankTalk = data.minTalkRank;
		this.rankKick = data.minKickRank;
		
		for (ClanMember member : data.members) {
			AccountInfo info = Virtue.getInstance().getAccountIndex().lookupByHash(member.getUserHash());
			if (info == null) {
				member.setDisplayName(AccountInfo.generateNamePlaceholder(member.getUserHash()));
			} else {
				member.setDisplayName(info.getDisplayName());
			}
			members.add(member);
		}
		findClanOwner();
		for (long banHash : data.bans) {
			ClanBan ban = new ClanBan(banHash);
			AccountInfo info = Virtue.getInstance().getAccountIndex().lookupByHash(banHash);
			if (info == null) {
				ban.setDisplayName(AccountInfo.generateNamePlaceholder(banHash));
			} else {
				ban.setDisplayName(info.getDisplayName());
			}
			bans.add(ban);
		}
		
		varValues.putAll(data.varValues);
		needsSave = false;
	}
	
	/**
	 * Gets the current {@link ClanSettingsDelta} update set, used for updating the channel
	 * @return
	 */
	private ClanSettingsDelta getDelta() {
		synchronized (this) {
			if (delta == null) {
				delta = new ClanSettingsDelta(clanHash, updateNumber, false);
			}
			return delta;
		}	
	}
	
	public boolean needsSave () {
		return needsSave;
	}
	
	public void onSaved () {
		needsSave = false;
	}
	
	/**
	 * Sends the clan settings delta updates to every clan member who is currently logged in
	 */
	protected void dispatchUpdates () {
		if (delta == null) {
			sendInitPackets(updateNumber);
			return;
		}
		ClanSettingsDelta updateDelta;
		synchronized (this) {
			updateDelta = delta;
			delta = null;
			updateNumber++;
		}
		
		ClanSettingsDeltaEventContext affinedPacket = new ClanSettingsDeltaEventContext(true, updateDelta);
		ClanSettingsDeltaEventContext listedPacket = new ClanSettingsDeltaEventContext(false, updateDelta);
		synchronized (this) {
			for (SocialUser u : onlineMembers) {
				u.sendClanSettingsDelta(affinedPacket);
				u.clanDataUpdated();
			}
			for (SocialUser u : onlineGuests) {
				u.sendClanSettingsDelta(listedPacket);
			}
		}
		sendInitPackets(updateNumber);
	}
	
	/**
	 * Sends any queued initialisation packets
	 */
	private void sendInitPackets (int updateNum) {
		if (initQueue.isEmpty()) {
			return;
		}
		ClanSettingsEventContext.Member[] entries;
		String[] banEntries;
		ClanSettingsEventContext.Variable[] varEntries;
		synchronized (this) {			
			for (SocialUser u : initQueue) {
				if (u.getAffinedClanHash() == clanHash) {
					onlineMembers.add(u);
				} else {
					onlineGuests.add(u);
				}
			}
		}
		synchronized (this) {
			entries = new ClanSettingsEventContext.Member[members.size()];
			for (int i=0;i<members.size();i++) {
				ClanMember u = members.get(i);
				entries[i] = new ClanSettingsEventContext.Member(u.getDisplayName(), u.getRank(), 0, u.getJoinDay());
			}
		}
		synchronized (this) {
			banEntries = new String[bans.size()];
			for (int i=0;i<bans.size();i++) {
				banEntries[i] = bans.get(i).getDisplayName();
			}
		}
		synchronized (this) {
			varEntries = new ClanSettingsEventContext.Variable[varValues.size()];
			int i=0;
			for (Map.Entry<Integer, Object> setting : varValues.entrySet()) {
				varEntries[i++] = new ClanSettingsEventContext.Variable(setting.getKey(), setting.getValue());
			}
		}
		ClanSettingsEventContext memberPacket = new ClanSettingsEventContext(false, clanName, entries, banEntries,
				updateNum, allowUnaffined, rankTalk, rankKick, varEntries);
		ClanSettingsEventContext guestPacket = new ClanSettingsEventContext(true, clanName, entries, banEntries,
				updateNum, allowUnaffined, rankTalk, rankKick, varEntries);
		SocialUser user;
		while ((user = initQueue.poll()) != null) {
			if (user.getAffinedClanHash() == clanHash) {
				user.sendClanSettingsFull(memberPacket);
			} else {
				user.sendClanSettingsFull(guestPacket);
			}
		}
	}
	
	protected void registerOnlineMember (SocialUser user) {
		synchronized(this) {
			if (!initQueue.contains(user)) {
				initQueue.offer(user);
			}
		}
	}
	
	protected void deregisterOnlineMember (SocialUser user) {
		synchronized(this) {
			if (initQueue.contains(user)) {
				initQueue.remove(user);
			} else if (onlineGuests.contains(user)) {
				onlineGuests.remove(user);
			} else if (onlineMembers.contains(user)) {
				onlineMembers.remove(user);
			}
		}
	}
	
	/**
	 * Sends a broadcast system message to clan members
	 * @param message The message to send
	 * @param minRank The minimum rank that must be held in order to receive the message
	 */
	protected void sendBroadcast (String message, ClanRank minRank) {
		if (linkedChannel != null) {
			linkedChannel.sendBroadcast(message, minRank);
		}
	}
	
	/**
	 * Queues an update packet for the user with the specified name within the channel. If the user is not in the channel, no update is sent
	 * @param userhash	The hash of the user to update
	 */
	protected void updateUser (long userhash) {
		/*ClanMember member = null;
		synchronized (members) {
			for (ClanMember m : members) {
				if (m.getUserHash() == userhash) {
					member = m;
					break;
				}
			}
		}
		if (member == null) {
			ClanBan ban = null;
			synchronized (bans) {
				for (ClanBan b : bans) {
					if (b.getUserHash() == userhash) {
						ban = b;
						break;
					}
				}
			}
			if (ban != null) {
				int slot = bans.indexOf(ban);
			}
		}
		/*if (member != null) {
			synchronized (updates) {
				int slot = users.indexOf(member);
				queueUpdate(new UpdateMember(slot, member.getName(), clanData.getRank(userhash), member.getNodeID()));
			}
		}*/
	}
	
	private void findClanOwner () {
		ownerSlot = -1;
		replacementOwnerSlot = -1;
		int highestRankSlot = 0;
		synchronized (members) {
			if (members.isEmpty()) {
				return;
			}
			ClanRank highestRank = members.get(0).getRank();
			for (int slot = 1;slot<members.size();slot++) {
				ClanRank rank = members.get(slot).getRank();
				if (rank.getID() > highestRank.getID()) {
					if (highestRank.equals(ClanRank.DEPUTY_OWNER)) {
						replacementOwnerSlot = highestRankSlot;
					}
					highestRankSlot = slot;
					highestRank = rank;
				} else if (rank.equals(ClanRank.DEPUTY_OWNER) && replacementOwnerSlot == -1) {
					replacementOwnerSlot = slot;
				}
				
			}
			ownerSlot = highestRankSlot;
			if (highestRankSlot != -1) {
				members.get(ownerSlot).setRank(ClanRank.OWNER);
			}		
		}
	}
	
	protected void linkChannel (ClanChannel channel) {
		this.linkedChannel = channel;
	}	
	
	protected void setName (String name) {
		this.clanName = name;
		getDelta().setClanName(name, 0);
		if (linkedChannel != null) {
			linkedChannel.updateBaseSettings(clanName, allowUnaffined, rankTalk.getID(), rankKick.getID());
		}
	}
	
	protected void setAllowNonMembers (boolean allowNonMembers) {
		this.allowUnaffined = allowNonMembers;
		updateChannelDetails();
	}
	
	protected void setMinTalkRank (ClanRank minTalkRank) {
		this.rankTalk = minTalkRank;
		updateChannelDetails();
	}
	
	protected void setMinKickRank (ClanRank minKickRank) {
		this.rankKick = minKickRank;
		updateChannelDetails();
	}
	
	private void updateChannelDetails () {
		synchronized (this) {
			getDelta().updateBaseSettings(allowUnaffined, rankTalk.getID(), rankKick.getID(), (byte) 0, (byte) 0);
		}
		if (linkedChannel != null) {
			linkedChannel.updateBaseSettings(clanName, allowUnaffined, rankTalk.getID(), rankKick.getID());
		}
	}
	
	/**
	 * Returns the unique hash code for the clan
	 * @return	The clan hash
	 */
	public long getClanHash () {
		return clanHash;
	}
	
	/**
	 * Returns the current update revision for the clan
	 * @return	The update number
	 */
	public int getUpdateNum () {
		return updateNumber;
	}
	
	/**
	 * Returns the time at which the clan was created, in minutes since the unix epoch
	 * @return The creation time, in minutes since the unix epoch
	 */
	public int getCreationTimeMinutes () {
		return creationTimeMins;
	}
	
	/**
	 * Returns the name of the clan
	 * @return	The clan name
	 */
	public String getClanName () {
		return clanName;
	}
	
	/**
	 * Returns the minimum rank needed to talk in the channel
	 * @return	The minimum talk rank
	 */
	public ClanRank getMinTalk () {
		return rankTalk;
	}
	
	/**
	 * Returns the minimum rank needed to kick guests from the channel
	 * @return	The minimum kick rank
	 */
	public ClanRank getMinKick () {
		return rankKick;
	}
	
	/**
	 * Returns whether guests are allowed to join the clan channel associated with this clan
	 * @return	True if guests are allowed to join, false otherwise
	 */
	public boolean allowNonMembers () {
		return allowUnaffined;
	}
	
	/**
	 * Returns whether the player of the specified name is a part of the clan.
	 * @param userhash	The hash of the player to check
	 * @return	True if the player is a member of the clan, false otherwise
	 */
	public boolean inClan (long userhash) {
		ClanMember member = getMember(userhash);
		return member != null;
	}
	
	public int getMemberCount () {
		return members.size();
	}
	
	/**
	 * Returns the rank of a player in the clan
	 * @param userhash	The hash of the player to check
	 * @return	The rank of the player
	 */
	public ClanRank getRank (long userhash) {
		ClanMember member = getMember(userhash);
		if (member != null) {
			return member.getRank();
		} else {
			return ClanRank.GUEST;
		}
	}
	
	public int getMemberVarBit (long userhash, int start, int end) {
		ClanMember member = getMember(userhash);
		if (member != null) {
			return member.getVarBitValue(start, end);
		} else {
			return -1;
		}
	}
	
	public boolean isBanned (long userhash) {
		if (getBan(userhash) == null) {
			return false;
		} else {
			return true;
		}
	}
	
	protected void addBan (long userhash) {
		ClanBan ban = new ClanBan(userhash);
		AccountInfo info = Virtue.getInstance().getAccountIndex().lookupByHash(userhash);
		ban.setDisplayName(info.getDisplayName());
		synchronized (this) {
			bans.add(ban);
			getDelta().addBanned(userhash, info.getDisplayName());
		}
	}
	
	protected void removeBan (long userhash) {
		synchronized (this) {
			for (int slot=0;slot<bans.size();slot++) {
				if (bans.get(slot).getUserHash() == userhash) {
					bans.remove(slot);
					getDelta().deleteBanned(slot);
					return;
				}
			}
			throw new IllegalArgumentException(userhash+" is not banned in "+clanName);
		}
	}
	
	public Collection<ClanBan> getBans () {
		return bans;
	}
	
	public Collection<ClanMember> getMembers () {
		return members;
	}
	
	/**
	 * Returns the clan member object for a specified player. 
	 * @param userhash	The hash of the player to search for
	 * @return	The {@link ClanMember} object for the player, or null if the player is not in the clan.
	 */
	private ClanMember getMember (long userhash) {
		//TODO: Find a more efficient way of doing this
		for (ClanMember member : members) {
			if (member.getUserHash() == userhash) {
				return member;
			}
		}
		return null;
	}
	
	private ClanBan getBan (long userhash) {
		for (ClanBan ban : bans) {
			if (ban.getUserHash() == userhash) {
				return ban;
			}
		}
		return null;
	}
	
	public ClanMember getOwner () {
		if (ownerSlot == -1) {
			return null;
		}
		return getMember(ownerSlot);
	}
	
	public ClanMember getMember (int slot) {
		if (slot < 0 || slot >= members.size()) {
			return null;
		}
		synchronized (members) {
			return members.get(slot);
		}
	}
	
	public int getReplacementOwnerSlot () {
		return replacementOwnerSlot;
	}
	
	/**
	 * Adds the provided player to the clan. 
	 * Note that setting the player's clan within the player data and sending the clan channel must be handled separately
	 * @param player The player to add to the clan
	 */
	 protected void addMember (SocialUser player) {
		if (inClan(player.getHash())) {
			return;
		}
		ClanMember newMember = new ClanMember(player.getHash());
		AccountInfo info = Virtue.getInstance().getAccountIndex().lookupByHash(newMember.getUserHash());
		if (info == null) {
			newMember.setDisplayName(AccountInfo.generateNamePlaceholder(newMember.getUserHash()));
		} else {
			newMember.setDisplayName(info.getDisplayName());
		}
		synchronized (this) {
			members.add(newMember);
			findClanOwner();
			getDelta().addMember(player.getHash(), newMember.getDisplayName(), newMember.getJoinDay());
		}
		
		if (linkedChannel != null) {
			linkedChannel.updateUserRank(player.getHash(), getRank(player.getHash()).getID());
		}
	}
	
	/**
	 * Removes the member with the specified user hash from the clan
	 * @param userhash The user hash of the player to remove
	 * @throws NullPointerException	 if the player is not in the clan.
	 */
	protected void removeMember (long userhash) throws NullPointerException {
		synchronized (this) {
			boolean found = false;
			for (int slot=0;slot<members.size();slot++) {
				if (members.get(slot).getUserHash() == userhash) {
					members.remove(slot);
					getDelta().deleteMember(slot);
					found = true;
					break;
				}
			}
			if (!found) {
				throw new NullPointerException(userhash+" is not in "+clanName);
			}
			findClanOwner();
		}
		if (linkedChannel != null) {
			linkedChannel.updateUserRank(userhash, getRank(userhash).getID());
		}		
	}
	
	/**
	 * Sets the rank for the specified player in the clan. Note that permission checks must be done externally
	 * @param userhash	The user hash of the player to set the rank of
	 * @param rank	The desired rank
	 * @throws NullPointerException If the player is not in the clan.
	 */
	protected void setRank (long userhash, ClanRank rank) throws NullPointerException {
		ClanMember member = getMember(userhash);
		if (member == null) {
			throw new NullPointerException(userhash+" is not in "+clanName);
		}
		setRank(member, rank);
	}
	
	private void setRank (ClanMember member, ClanRank rank) {
		member.setRank(rank);
		synchronized (this) {
			int slot = members.indexOf(member);
			getDelta().setMemberRank(slot, rank.getID());
		}
		if (linkedChannel != null) {
			linkedChannel.updateUserRank(member.getUserHash(), rank.getID());
		}
		findClanOwner();
	}
	
	protected void setMemberVarBit (long userhash, int value, int start, int end) throws VarBitOverflowException {
		ClanMember member = getMember(userhash);
		if (member == null) {
			throw new NullPointerException(userhash+" is not in "+clanName);
		}
		setMemberVarBit(member, value, start, end);
	}
	
	private void setMemberVarBit (ClanMember member, int value, int startBit, int endBit) throws VarBitOverflowException {
		member.setVarMemberBit(value, startBit, endBit);
		synchronized (this) {
			int slot = members.indexOf(member);
			getDelta().setMemberExtraInfo(slot, value, startBit, endBit);
		}
	}
	
	protected void setVarBitValue (VarBitType varBit, int value) throws VarBitOverflowException {
		if (!varBit.getBaseVarDomain().equals(VarDomainType.CLAN_SETTING)) {
			throw new IllegalArgumentException("Invalid domain: "+varBit.getBaseVarDomain());
		}
		synchronized (this) {
			Object prevValue = varValues.get(varBit.baseVarId);		
			if (prevValue == null) {
				varValues.put(varBit.baseVarId, varBit.setVarbitValue(0, value));
			} else if (prevValue instanceof Integer) {
				varValues.put(varBit.baseVarId, varBit.setVarbitValue((int) prevValue, value));
			} else {
				return;
			}
			getDelta().setExtraSettingVarbit(varBit, value);
		}
	}
	
	protected void setVarValue (int key, Object value) {		
		synchronized (this) {
			if (value instanceof Integer) {
				getDelta().setExtraSettingInt(key, ((Integer) value).intValue());
			} else if (value instanceof Long) {
				getDelta().setExtraSettingLong(key, ((Long) value).longValue());
			} else if (value instanceof String) {
				getDelta().setExtraSettingString(key, (String) value);
			} else {
				throw new RuntimeException("Invalid value type");
			}
			
			if (varValues.containsKey(key)) {
				Object oldValue = varValues.get(key);
				if (oldValue.equals(value)) {
					return;
				}
				varValues.remove(key);
			}
			varValues.put(key, value);
		}
	}
	
	public Object getVarValue (int key) {
		return varValues.get(key);
	}
	
	public String getVarValueString (int key) {
		return (String) varValues.get(key);
	}
	
	public int getVarValueInt (int key) {
		if (!varValues.containsKey(key)) {
			return 0;
		}
		return (int) varValues.get(key);
	}
	
	public int getVarBitValue (VarBitType varBit) {
		if (!varBit.getBaseVarDomain().equals(VarDomainType.CLAN_SETTING)) {
			return -1;
		}
		return varBit.getVarbitValue(getVarValueInt(varBit.baseVarId));
	}
	
	public Map<Integer, Object> getPermanantVars () {
		return varValues;		
	}
	
	@Override
	public boolean equals (Object anObject) {
		if (this == anObject) {
            return true;
        }
		if (anObject instanceof ClanSettings) {
			ClanSettings anotherClan = (ClanSettings) anObject;
			return anotherClan.clanHash == this.clanHash;
		}
		return false;
		
	}

	@Override
	public int hashCode() {
		return (int) clanHash;
	}
}
