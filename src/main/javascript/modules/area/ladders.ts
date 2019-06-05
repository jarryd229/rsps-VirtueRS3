/**
 * Copyright (c) 2017 Virtue Studios
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
 
import { EventType } from 'engine/enums/event-type';
import _events from 'engine/events';
import _entity from 'engine/entity';
import _map from 'engine/map';


import { runAnim } from 'shared/anim';
import { defaultHandler } from 'shared/util';
import { multi3 } from 'shared/dialog';
import _coords from 'shared/map/coords';

        _events.bindEventListener(EventType.OPLOC1, 29355, (ctx) => {
		    if (_map.getCoordX(ctx.location) == 3116 && _map.getCoordY(ctx.location) == 9852) {//ladder from hill giants to varrock
		        runAnim(ctx.player, 828, function () {
                _entity.setCoords(ctx.player, _coords(3115, 3452, 0));
	            });
		    } else if (_map.getCoordX(ctx.location) == 3209 && _map.getCoordY(ctx.location) == 9616) {//ladder to lumbridge castle where cook is
		        runAnim(ctx.player, 828, function () {
                _entity.setCoords(ctx.player, _coords(3210, 3216, 0));
	            });
		    } else {
			    defaultHandler(ctx, "unhandled ladder");
		    }
        });

		_events.bindEventListener(EventType.OPLOC1, [36768, 11727], (ctx) => {
			runAnim(ctx.player, 828);
			ENGINE.teleportEntityBy(ctx.player, 0, 0, 1);
	    });

        _events.bindEventListener(EventType.OPLOC1, [36770, 11728], (ctx) => {
			runAnim(ctx.player, 828);
            ENGINE.teleportEntityBy(ctx.player, 0, 0, -1);
	    });

		_events.bindEventListener(EventType.OPLOC1, 36769, (ctx) => {//ladder lumbridge castle
			multi3(ctx.player, "WHAT WOULD YOU LIKE TO DO?", "Climb up the ladder.", () => {
				runAnim(ctx.player, 828);
				ENGINE.teleportEntityBy(ctx.player, 0, 0, 1);
			}, "Climb down the ladder.", () => {
                runAnim(ctx.player, 828);
			    ENGINE.teleportEntityBy(ctx.player, 0, 0, -1);
			}, "Never mind.", () => {
	        });
	    });

		_events.bindEventListener(EventType.OPLOC2, 36769, (ctx) => {//ladder lumbridge castle
		    runAnim(ctx.player, 828);
            ENGINE.teleportEntityBy(ctx.player, 0, 0, 1);
	    });

		_events.bindEventListener(EventType.OPLOC3, 36769, (ctx) => {//ladder lumbridge castle
			runAnim(ctx.player, 828);
            ENGINE.teleportEntityBy(ctx.player, 0, 0, -1);
	    });

		
		_events.bindEventListener(EventType.OPLOC1, 36771, (ctx) => {//ladder lumbridge castle
			runAnim(ctx.player, 828);
            ENGINE.teleportEntityBy(ctx.player, 0, -2, +1);
	    });

		_events.bindEventListener(EventType.OPLOC1, 36772, (ctx) => {//ladder lumbridge castle
	        runAnim(ctx.player, 828);
            ENGINE.teleportEntityBy(ctx.player, 0, +2, -1);
	    });

		_events.bindEventListener(EventType.OPLOC1, 39273, (ctx) => {//ladder betty's basement quest (swept away)
	        runAnim(ctx.player, 828, function () {
                _entity.setCoords(ctx.player, _coords(3014, 3257, 0));
	        });
	    });
