/**
 * Copyright (c) 2014 Virtue Studios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
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
package org.virtue.game.parser;


/**
 * @author Im Frizzy <skype:kfriz1998>
 * @since Sep 30, 2014
 */
public enum ParserType {
    CHARACTER("./repository/character/game/"), 
	FRIEND("./repository/character/friend/"), 
	IGNORE("./repository/character/ignore/"), 
	VAR("./repository/character/var/"), 
	INV("./repository/character/inv/"), 
	SKILL("./repository/character/skill/"),
	EXCHANGE("./repository/character/exchange/"),
	LAYOUT("./repository/character/layout/"),
	CLAN_SETTINGS("./repository/clan/settings/");
	//CHARACTER("${character.folder}/game/"), 
	//FRIEND("${character.folder}/friend/"),
	//IGNORE("${character.folder}/ignore/"),
	//VAR("${character.folder}/var/"), 
	//INV("${character.folder}/inv/"), 
	//SKILL("${character.folder}/skill/"),
	//EXCHANGE("${character.folder}/exchange/"),
	//LAYOUT("${character.folder}/layout/"),
	//CLAN_SETTINGS("${clan.folder}/settings/");
	
	String path;
	
	ParserType(String path) {
		this.path = path;
	}
	
	public String getPath() {
		return path;
	}
	
}
