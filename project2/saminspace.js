(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SymbolSet_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.star = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(34,30,31,0)"],[0,0.145],0,0,0,0,0,7.9).s().p("Ag2A3QgXgWAAghQAAgfAXgXQAXgXAfAAQAhAAAWAXQAXAXAAAfQAAAhgXAWQgWAXghAAQgfAAgXgXg");
	this.shape.setTransform(2.525,-16.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(-5.3,-24.2,15.7,15.6), null);


(lib.TitleText = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3).p("Al+hwIAADfIL9ACIAAjhg");
	this.shape.setTransform(1320.1775,9.5662,0.7183,0.7183);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Al+BvIAAjfIL9AAIAADhg");
	this.shape_1.setTransform(1320.1775,9.5644,0.7183,0.7183);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(3).p("Al/hwIAADhIL/AAIAAjhg");
	this.shape_2.setTransform(1320.2493,86.3544,0.7183,0.7183);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Al/BxIAAjhIL/AAIAADhg");
	this.shape_3.setTransform(1320.2493,86.3548,0.7183,0.7183);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(3).p("AlmhfIAAC+ILNAAIAAi+g");
	this.shape_4.setTransform(1318.4534,47.1874,0.7183,0.7183);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlmBfIAAi9ILNAAIAAC9g");
	this.shape_5.setTransform(1318.4534,47.1874,0.7183,0.7183);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(3).p("AhwqHIAAUPIDhAAIAA0Pg");
	this.shape_6.setTransform(1277.9931,47.9596,0.7183,0.7183);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhwKIIAA0PIDhAAIAAUPg");
	this.shape_7.setTransform(1277.9931,47.9596,0.7183,0.7183);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(3).p("AKZqGIAADiIq9AAQgaABgiAEQhDAIgiASQhWAvgOAMQhDA2gsBqQgrBnARB/QAGAoALAmIAJAdQADAJAGAPQAMAdATAdQA+BbBtAyQA5AXA6AGQAdAEARgBIK9AAIAADiIq9AAQgvgCg3gHQhvgPglgbQhKgchYhPQh5hsgwiFQg0iOAFiSQAEh8ArhtQAphpBRhVQBbhfB2gsQBngmBhgGQAzgDA0ACg");
	this.shape_8.setTransform(1208.876,47.9309,0.7183,0.7183);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkKIQgvgCg3gHQhvgPglgbQhKgchYhPQh5hsgwiFQg0iOAFiSQAEh8ArhtQAphpBRhVQBbhfB2gsQBngmBhgGQAzgDA0ACIKIAAIAADiIq9AAQgaABgiAEQhDAIgiASQhWAvgOAMQhDA2gsBqQgrBnARB/QAGAoALAmIAJAdIAJAYQAMAdATAdQA+BbBtAyQA5AXA6AGQAdAEARgBIK9AAIAADig");
	this.shape_9.setTransform(1208.876,47.9309,0.7183,0.7183);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(3).p("AnwD5IAADbIIHAAIBIgFQBSgKAvgUQAygWAuggQAkgZAQgSQAtgwAWgpQA3hnADiTQADimhTh2QhJhnh4gsQgugUhSgJIhJgEIoHAAIAADjIIHAAIBDAGQBMAOArAuQAtAtAOA/QAEARAEA0QACAfgMAuQgSBEgnAhQgwApgYAKQggAMhSAFg");
	this.shape_10.setTransform(1015.8393,35.0295,0.7183,0.7183);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AnwHUIAAjbIIHAAQBSgFAggMQAYgKAwgpQAnghAShEQAMgugCgfQgEg0gEgRQgOg/gtgtQgrguhMgOIhDgGIoHAAIAAjjIIHAAIBJAEQBSAJAuAUQB4AsBJBnQBTB2gDCmQgDCTg3BnQgWApgtAwQgQASgkAZQguAggyAWQgvAUhSAKIhIAFg");
	this.shape_11.setTransform(1015.8393,35.0295,0.7183,0.7183);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(3).p("AhvqHIAAUPIDfAAIAA0Pg");
	this.shape_12.setTransform(965.3724,47.9596,0.7183,0.7183);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhvKIIAA0PIDfAAIAAUPg");
	this.shape_13.setTransform(965.3724,47.9596,0.7183,0.7183);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(3).p("AJ4qIIAADjIuhAAQgogDgpASQhRAkgCBrQgCBrBSAkQApASApgEIKXAAIA2AKQBAAPA2AfQCpBjgJDaQgJDiiUBcQhUA1iSAJQhGAEnQgCInDgCIAAjjIPnAAQAjgDAdgMQBegnAChzQAChzhfgmQgegLgkgDIpwAAQhhADhigsQjDhYgGjvQgGjvDYhYQBrgrBuAGQABACHCAAQDhgBDhgBg");
	this.shape_14.setTransform(893.3515,48.1056,0.7183,0.7183);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AjhKJInDgCIAAjjIPnAAQAjgDAdgMQBegnAChzQAChzhfgmQgegLgkgDIpwAAQhhADhigsQjDhYgGjvQgGjvDYhYQBrgrBuAGQABACHCAAIHCgCIAADjIuhAAQgogDgpASQhRAkgCBrQgCBrBSAkQApASApgEIKXAAIA2AKQBAAPA2AfQCpBjgJDaQgJDiiUBcQhUA1iSAJQgzADkCAAIjhgBg");
	this.shape_15.setTransform(893.3515,48.1056,0.7183,0.7183);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(3).p("AtkKRIEDAAIJMviIJOPiIERAAIrrzXQgJgTgTgSQgkglgrABQguABgeAbQgNALgWAiQgQAXrZTAg");
	this.shape_16.setTransform(1105.9345,47.3301,0.7183,0.7183);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AJHKRIpPviIpMPiIkCAAQLZzAAQgXQAWgiAMgLQAfgbAsgBQAsgBAlAlQASASAKATILqTXg");
	this.shape_17.setTransform(1104.9814,47.3301,0.7183,0.7183);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(3).p("AqeKIIDYAAIAAuzIONOTIAeAYQAkAYAlAAQAlgBAagRQANgJAFgJIAQgZQAQgiAAgpQgBgpAApAQAAkgABkYIjYAAIAAOzIuRuKQgMgNgSgMQglgZgdADQgiAEgUAJQgSAIgNAQQgPAUgGARQgJAbgBArQgBBAABRPg");
	this.shape_18.setTransform(636.3514,49.9785,0.7184,0.7184);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AHlKAIgegYIuNuTIAAOzIjYAAQgBxPABhAQABgrAJgbQAGgRAPgUQANgQASgIQAUgJAigEQAdgDAlAZQASAMAMANIOROKIAAuzIDYAAIgBI4QAAJAABApQAAApgQAiIgQAZQgFAJgNAJQgaARglABIgBAAQgkAAgkgYg");
	this.shape_19.setTransform(636.351,49.9785,0.7184,0.7184);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(3).p("AhwqHIDhAAIAAUPIjhAAg");
	this.shape_20.setTransform(563.3955,48.8584,0.7184,0.7184);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AhwKHIAA0OIDhAAIAAUOg");
	this.shape_21.setTransform(563.3955,48.8584,0.7184,0.7184);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(3).p("AtjKRIECAAIJMviIJOPiIERAAIrrzXIgcglQgkglgsABQgtABgeAbQgMAKgXAjQgQAXrYTAg");
	this.shape_22.setTransform(164.2638,49.0011,0.7184,0.7184);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AJHKRIpPviIpMPiIkCAAQLZzAAPgXQAXgjAMgKQAegbAtgBQAsgBAkAlIAcAlILrTXg");
	this.shape_23.setTransform(163.3105,49.0011,0.7184,0.7184);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(3).p("AvCKHIDfAAID3uOIFuNKQAHAUASAVQAkAqA2ACQA2ACAhgqQASgWAKgXQAFgCC1mkQBbjSBajSID4OOIDgAAIlLzCIgVgwQgggvg4ACQg3ACgfAnQgUAmgCgCQgGAPmIOEImQuTIgZgnQglgmg0AAQg2ABgaAfQgKALgWAyQgSApk7SZg");
	this.shape_24.setTransform(298.8974,49.6848,0.7184,0.7184);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgBKYQg2gCglgqQgRgVgIgUIlttKIj4OOIjeAAQE7yZASgpQAWgyAJgLQAbgfA2gBQA0AAAlAmIAZAnIGOOTIGPuTQADACAUgmQAfgnA3gCQA4gCAgAvIAVAwIFLTCIjhAAIj3uOIi1GkQi1GkgFACQgKAXgSAWQggApgzAAIgEgBg");
	this.shape_25.setTransform(298.1928,49.6848,0.7184,0.7184);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(3).p("AJ4qIIAADjIuhAAQgogEgpATQhRAkgCBrQgCBrBSAkQApASApgEIKXAAQBXAGBVAyQCpBjgJDaQgJDiiUBcQhUA1iSAJQhGAEnQgCQjpgBjagBIAAjjIPnAAQAjgDAdgMQBdgnAChzQAChzhfgmQgdgLgkgDIpwAAQgYABglgFQhJgKg9gbQjDhYgGjvQgGjvDYhYQBrgrBuAGQABACHCAAQDhgBDhgBg");
	this.shape_26.setTransform(50.063,49.7048,0.7184,0.7184);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AjhKJInDgCIAAjjIPnAAQAjgDAdgMQBdgnAChzQAChzhfgmQgdgLgkgDIpwAAQgYABglgFQhJgKg9gbQjDhYgGjvQgGjvDYhYQBrgrBuAGQABACHCAAIHCgCIAADjIuhAAQgogEgpATQhRAkgCBrQgCBrBSAkQApASApgEIKXAAQBXAGBVAyQCpBjgJDaQgJDiiUBcQhUA1iSAJQgzADkCAAIjhgBg");
	this.shape_27.setTransform(50.063,49.7048,0.7184,0.7184);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#FFFFFF").ss(8,0,2).p("Aj7mGQBGgIBJACQAmABBiALIAUADQABAAAVAIQAaAKAUAPQAgAXAYAzIARAuQAoCPgSC/QgWDfhiAoQgfAMguAKQgrAIhbgBQhAgBhEgF");
	this.shape_28.setTransform(435.8702,291.5893,0.7184,0.7184);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#FFFFFF").ss(8,0,2).p("AAAmuIABNd");
	this.shape_29.setTransform(419.9456,291.6536,0.7184,0.7184);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#FFFFFF").p("AixmtIhOABIACNaIBKAAIgCrAIFoK/IBNAAIgCtaIhKAAIACLBg");
	this.shape_30.setTransform(384.6519,290.6477,0.7184,0.7184);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Aj9GuIgCtaIBOgBIFnLBIgCrBIBKAAIACNaIhNAAIloq/IACLAg");
	this.shape_31.setTransform(384.652,290.6477,0.7184,0.7184);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#FFFFFF").ss(8,0,2).p("AjBADIGDgF");
	this.shape_32.setTransform(334.0735,306.4715,0.7184,0.7184);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#FFFFFF").ss(8,0,2).p("Aj+GjID7tFIECNF");
	this.shape_33.setTransform(334.6803,290.5579,0.7184,0.7184);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#FFFFFF").ss(8).p("AAACjIAAlF");
	this.shape_34.setTransform(1048.8722,310.0817,0.7184,0.7184);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#FFFFFF").ss(8).p("AjilMIDiI7IDjo5");
	this.shape_35.setTransform(1048.8875,284.9924,0.7184,0.7184);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#FFFFFF").ss(8).p("AjmjzICIgFQBBgBAWABQAXABAUAGQA+ATAoAuQAtAzAIBMQAEAogIA1QgHAygKAeQgTA0gmAeQggAZgxAJQgfAGhMADQg7ACg4gH");
	this.shape_36.setTransform(1007.9052,280.5903,0.7184,0.7184);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#FFFFFF").ss(8).p("AAAmrIABNX");
	this.shape_37.setTransform(993.8393,291.2045,0.7184,0.7184);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#FFFFFF").ss(8).p("AjmjzICHgFQBCgBAWABQAXABATAGQA/ATAoAuQBFBPgUCNQgHAzgLAdQgTA0glAeQggAZgxAJQgfAGhMADQg7ACg5gH");
	this.shape_38.setTransform(962.8433,280.4466,0.7184,0.7184);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FFFFFF").ss(8).p("AAAmrIABNX");
	this.shape_39.setTransform(948.7928,291.0608,0.7184,0.7184);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FFFFFF").ss(8,0,2).p("AjBACIGDgD");
	this.shape_40.setTransform(912.7269,306.8846,0.7184,0.7184);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FFFFFF").ss(8,0,2).p("Aj+GiID8tFIEBNG");
	this.shape_41.setTransform(913.3173,290.989,0.7184,0.7184);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").p("AiYmtIhKAAIAANbIBKAAIAAlgIEyACIAAFeIBJAAIAAtbIhJAAIAAG/IkyAAg");
	this.shape_42.setTransform(866.4052,290.989,0.7184,0.7184);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("ACaGuIAAleIkygCIAAFgIhKAAIAAtbIBKAAIAAG/IEyAAIAAm/IBJAAIAANbg");
	this.shape_43.setTransform(866.4052,290.989,0.7184,0.7184);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").p("Ai6jXICnAEQA+ALAkAlQAjAlAIBfIAABWQgBARgEAWQgKAsgTAZQgTAYgkASIghAMIAfA6IALgDQANgFANgGQAggPAPgOQAOgNAFgFQANgNALgTQAYgnAIgvIAGgxQACgVAAgUQAAgegHgvIgEgUQgFgYgGgTQgKgegZgcQgJgLgPgNQgdgagcgKQgdgKgPgEQgBAAgXgEQgagEiYgBQgQAUAHAWg");
	this.shape_44.setTransform(764.8035,280.0154,0.7184,0.7184);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAADaIAhgNQAkgRATgZQATgYAKgsQAEgWABgRIAAhWQgIhfgjgmQgkglg+gKIingEIgJgSQgHgWAQgVQCYABAaAFIAYAEQAPADAdALQAcAJAdAaQAPANAJALQAZAdAKAdQAGATAFAYIAEAVQAHAuAAAfIgCAoIgGAyQgIAugYAnQgLATgNAOIgTASQgPAOggAPIgaAKIgLAEg");
	this.shape_45.setTransform(764.8035,279.9788,0.7184,0.7184);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").p("AjmmtIAANbIBKAAIAAknIA9ABQBCAAATgCICfEoIBPAAIjGluQgSAFgwAEIh4AAIAAn2g");
	this.shape_46.setTransform(762.6752,291.0608,0.7184,0.7184);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("ACWGuIiekoQgUAChBgBIg9AAIAAEnIhKAAIAAtbIBKAAIAAH1IB4AAQAvgCATgHIDFFvg");
	this.shape_47.setTransform(762.554,291.0608,0.7184,0.7184);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFFFFF").ss(8,0,2).p("AC/AAIl9AA");
	this.shape_48.setTransform(723.9914,319.0443,0.7184,0.7184);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(8,0,2).p("ACfAAIk9AA");
	this.shape_49.setTransform(722.0337,292.7133,0.7184,0.7184);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#FFFFFF").ss(8,0,2).p("AC8AAIl3AA");
	this.shape_50.setTransform(723.6681,262.6823,0.7184,0.7184);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#FFFFFF").ss(8,0,2).p("AgBmqIADNU");
	this.shape_51.setTransform(712.9453,291.2404,0.7184,0.7184);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#FFFFFF").ss(8).p("ADTjCQAAgqgKgoQgFgVgHgPQgVgtg8gbQgqgTgugCQg2gDg1AUQglAQgZAbQgjAlgMA1IgQBIQgHAxgCAgQgEBAACAxIAFBxQAAAzANA0QAIAjAHATQAKAcASAXQAVAbAYAQQArAdBBADQBSADA6gqQA6grAYhRQAEgPACgUQABgLADglQADg8gDhEIirAA");
	this.shape_52.setTransform(683.2605,290.913,0.7184,0.7184);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#FFFFFF").ss(8).p("ADTjCQAAgqgKgoQgFgUgHgQQgVgug7gaQgqgTgvgCQg1gDg2AUQgjAOgbAcQgjAlgMA1IgPBJQgHAqgDAnQgEA5ACA4IAFBxQABA2AMAwQAJAlAGASQALAcARAXQANAQAPAOQACACAPALQArAdBBADQAgAAAZgEQAvgJAkgbQA8grAWhQQAEgPACgUQABgLADglQADg8gDhEIirgB");
	this.shape_53.setTransform(638.1495,291.0489,0.7184,0.7184);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#FFFFFF").p("AAlmtIhJAAIAANbIBJAAg");
	this.shape_54.setTransform(608.4655,291.2943,0.7184,0.7184);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkGuIAAtbIBJAAIAANbg");
	this.shape_55.setTransform(608.4655,291.2943,0.7184,0.7184);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#FFFFFF").p("Ai5jXICmAEQA/ALAjAlQAkAlAHBfIAABWQgBARgEAWQgKAsgTAZQgTAYgkARIghANIAfA6IALgDQANgFANgGQAigQANgNQAGgFANgNQANgOAMgSQAYgoAHguIAGgyQACgUAAgUQAAgegGgvIgEgUQgGgYgGgTQgKgegZgcQgJgLgPgNQgdgagcgKQgcgKgQgEQgQgCgIgCQgggFiRAAQgQAUAGAWg");
	this.shape_56.setTransform(582.1222,279.9443,0.7184,0.7184);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AAADZIAhgMQAkgRATgZQATgYAKgsQAEgWABgRIAAhWQgHhfgkgmQgjglg/gKIimgEIgKgSQgGgWAQgVQCRAAAgAFIAYAFQAQADAcALQAcAJAdAaQAPANAJALQAZAdAKAdQAGATAGAYIAEAVQAGAuAAAfIgCAoIgGAyQgHAtgYAoQgMATgNANIgTATQgNAMgiARQgNAGgNAEIgLAEg");
	this.shape_57.setTransform(582.1222,279.907,0.7184,0.7184);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#FFFFFF").p("AjmmtIAANbIBKAAIAAknIA9AAQBCAAATgBICfEoIBOAAIjFlvQgTAGgvAEIh4AAIAAn2g");
	this.shape_58.setTransform(579.9924,290.989,0.7184,0.7184);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("ACWGuIiekoQgUAChBgBIg9AAIAAEnIhKAAIAAtbIBKAAIAAH1IB4AAQAvgDASgGIDGFvg");
	this.shape_59.setTransform(579.8714,290.989,0.7184,0.7184);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#FFFFFF").p("AjcmtIgBA+IC5AAIAAMdIBIAAIAAsdIC6AAIAAg9g");
	this.shape_60.setTransform(539.1865,290.9529,0.7184,0.7184);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AgkGuIAAsdIi5AAIABg+IG6ABIAAA9Ii6AAIAAMdg");
	this.shape_61.setTransform(539.1895,290.9531,0.7184,0.7184);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#FFFFFF").p("AjcmtIgBA+IC4AAIAAMdIBJAAIAAsdIC6AAIAAg9g");
	this.shape_62.setTransform(940.9783,188.6641,0.7184,0.7184);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AglGuIAAsdIi4AAIABg+IG6ABIAAA9Ii6AAIAAMdg");
	this.shape_63.setTransform(940.9797,188.6645,0.7184,0.7184);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#FFFFFF").ss(8,0,2).p("AjSm3QAEJggEBBIAAALQACAqAhApQARAVASANQAcAVAmAJQAVAEAmADQAKABAJAAQAdAAARgDQAigGAdgPQAZgOAVgUQAWgVAIgWIAHgVQAHgTADgfQAHgygDhUQgBgZAAgmQAAgWABgpQgCh0ABkf");
	this.shape_64.setTransform(886.4838,189.213,0.7184,0.7184);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#FFFFFF").ss(8,0,2).p("AAOmaQhCgEg+AqQgkAYgTAZQghAogNBMQgIA0gICXQgFBbAFAnQAIBVAKAlQAQA7AlAmQApAoA7ARQAhAJAbAAQAhAAAggJQA9gQAmgpQAdggAOgxQAJghALhXQAGguABg4QACiigHg5QgLhYgsg2QhGhVhagGg");
	this.shape_65.setTransform(828.4684,188.4692,0.7184,0.7184);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#FFFFFF").ss(8,0,2).p("Aj7mHQBIgHBHACQApABBfALQAOACAHABIAWAIQAaAKATAPQAgAYAYAyIARAuQAoCQgTC+QgWDfhjAoQgeANgvAJQgrAIhagBQg5gBhLgG");
	this.shape_66.setTransform(721.6275,188.5995,0.7184,0.7184);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#FFFFFF").ss(8,0,2).p("AAAmuIAANd");
	this.shape_67.setTransform(705.6711,188.6286,0.7184,0.7184);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#FFFFFF").ss(8,0,2).p("AC/AAIl9AA");
	this.shape_68.setTransform(668.4557,216.6659,0.7184,0.7184);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#FFFFFF").ss(8,0,2).p("ACfAAIk+AA");
	this.shape_69.setTransform(666.4799,190.3349,0.7184,0.7184);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#FFFFFF").ss(6,0,2).p("AC8AAIl3AA");
	this.shape_70.setTransform(668.1324,160.3039,0.7184,0.7184);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#FFFFFF").ss(8,0,2).p("AgBmpIADNT");
	this.shape_71.setTransform(657.4096,188.8441,0.7184,0.7184);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#FFFFFF").ss(8,0,2).p("ADcjDQADhSgrg2Qgwg8hXgLQhRgJhAAnQghAVgYAjQgOAUgPAgQgMAcgGAmQgFAbgFBGQgHBPACBJQACA1ACAUQACAjAHAgQANA/AGAVQALAhATAYQAmAuBCARQA5AQA5gLQBCgLAngnQAhghANgxQAIgcgBgb");
	this.shape_72.setTransform(615.2808,188.6546,0.7184,0.7184);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#FFFFFF").ss(8,0,2).p("AjBACIGDgD");
	this.shape_73.setTransform(554.8156,204.6319,0.7184,0.7184);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#FFFFFF").ss(8,0,2).p("Aj+GiID9tEIEBNG");
	this.shape_74.setTransform(555.4063,188.7543,0.7184,0.7184);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(8).p("AjSjzQBDgDBEgBQBCgCAVABQAYABATAGQA+ATAoAuQBGBPgUCNQgHAzgLAdQgTA0glAeQggAZgxAJQgfAGhMADQg+ADg2gI");
	this.shape_75.setTransform(496.0987,178.1487,0.7184,0.7184);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(8).p("AAAmqIABNV");
	this.shape_76.setTransform(483.4561,188.7723,0.7184,0.7184);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#FFFFFF").ss(8).p("ADPi3QABgigIggQgOg9gpgmQg+g7hdAEQhgADg3BFQgoAzgBBHQAABBAhAwQAPAWAeATQAUANA9AfQAeAPBQAgQAvASAhAdQAZAWAMAQQAVAZAJAdQAPAxgRA2QgJAdgNASQgeArg2ATQgdALgsAFQgwAEgugJQhWgSgqhAQgng8AKhO");
	this.shape_77.setTransform(441.9417,188.6555,0.7184,0.7184);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TitleText, new cjs.Rectangle(-1.5,-6,1351,355.2), null);


(lib.Text2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("SAM \nIN SPACE", "bold 96px 'Arial Black'");
	this.text.textAlign = "center";
	this.text.lineHeight = 137;
	this.text.lineWidth = 434;
	this.text.parent = this;
	this.text.setTransform(4.8,-208.05);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text2, new cjs.Rectangle(-214,-210,437.7,423.7), null);


(lib.Text1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("FIRST START SCREEN WITH ONE START BUTTON AND BACKGROUND OF SAM AND FRIEND HOVERING IN SPACE", "bold 15px 'Arial Black'", "#333333");
	this.text.lineHeight = 23;
	this.text.lineWidth = 351;
	this.text.parent = this;
	this.text.setTransform(2,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Text1, new cjs.Rectangle(0,0,354.6,75.9), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4).p("AKcC8I03l3");
	this.shape.setTransform(1048.2519,351.3593,0.9999,0.9999,-12.9289);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4).p("AKXC+I0ul7");
	this.shape_1.setTransform(1052.2809,340.8683,0.9999,0.9999,-12.9289);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4).p("AKbC1I01lp");
	this.shape_2.setTransform(1055.6588,331.1165,0.9999,0.9999,-12.9289);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4).p("AKVC/I0pl9");
	this.shape_3.setTransform(1060.8628,321.9459,0.9999,0.9999,-12.9289);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4).p("Ao/lFQBDhHAnAAIUFGDQgkAeghAjQgfAhgfAmIAAAAQgiAqggAyQgdAvgXAvQgWArgOAlQyqlMihgdQAXgnAig3QAng8AZglQAZgmAegnQAqg4Afghg");
	this.shape_4.setTransform(1055.5858,337.0128,0.9999,0.9999,-12.9289);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4).p("AJtDEIzYmI");
	this.shape_5.setTransform(1083.7155,281.8462,0.9999,0.9999,-12.9289);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4).p("AJhDJIzBmR");
	this.shape_6.setTransform(1089.5255,275.2037,0.9999,0.9999,-12.9289);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4).p("AJSDAIyjl/");
	this.shape_7.setTransform(1095.1099,269.254,0.9999,0.9999,-12.9289);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4).p("Aooj4IBnglIEuBVQGPB1HnCjQgjATgsAeQghAYgfAaQgfAcgTAXQgYAdgMAYIzumEQAcgdAggbQAngiAqgZQAagQAhgMg");
	this.shape_8.setTransform(1090.0246,276.8908,0.9999,0.9999,-12.9289);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(4).p("AFvsUQiNA/h6BgQjMChh3DhQihEyAfFsQAQDCBBCo");
	this.shape_9.setTransform(1422.1163,375.506,0.9999,0.9999,-12.9289);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4).p("AhDAAQAAgcAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgcAAQgbAAgUgUQgUgUAAgdg");
	this.shape_10.setTransform(1284.5339,440.4045,0.9999,0.9999,-12.9289);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(4).p("AhEAAQAAgcAUgUQAUgUAcAAQAcAAAVAUQAUAUAAAcQAAAcgUAUQgVAUgcAAQgcAAgUgUQgUgUAAgcg");
	this.shape_11.setTransform(1256.9556,441.7087,0.9999,0.9999,-12.9289);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4).p("AFwGHQgIBogRBiQgGAlgHAUQgMAfgWAUQgSAQgZAKQh6gEiJgBQiSgCgugGQhWgNgmgtQgFgFgNgVQgbgtABg8QAAgeAKguQAAgDBAmfQAylIA4ipQARgzAbglQAdgnBRg3QBCgtBBgi");
	this.shape_12.setTransform(671.4621,532.2679,0.9999,0.9999,-12.9289);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(4).p("AADAAIgGAB");
	this.shape_13.setTransform(1433.9257,286.2383,0.9999,0.9999,-12.9289);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4).p("AF8tcQjdBhimCrQhFBHg/BeQh1Cvg5DIQgmCBgLCHQgQDIArC/QAfCJA5B6");
	this.shape_14.setTransform(1415.8595,378.9171,0.9999,0.9999,-12.9289);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(4).p("AEoj/Qg+DzgLCAQgDAagEAPQgJAegTAUQgRAQgbAGQgaAGg9ADQh5AGiGgJIhzgI");
	this.shape_15.setTransform(696.3676,594.172,0.9999,0.9999,-12.9289);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(8).p("AOGEgI8Lo/");
	this.shape_16.setTransform(1299.8147,302.9709,0.9999,0.9999,-12.9289);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(8).p("AEupsQnjEfhNFnQgbCBAEDeQADCEALBwIABAK");
	this.shape_17.setTransform(1794.4785,382.6606,0.9999,0.9999,-12.9289);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(8).p("A5CoJMAyFAQT");
	this.shape_18.setTransform(1585.1648,341.4359,0.9999,0.9999,-12.9289);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(8).p("A45n8MAxzAP5");
	this.shape_19.setTransform(1591.818,329.7526,0.9999,0.9999,-12.9289);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(8).p("AuCkeIcFI9");
	this.shape_20.setTransform(1309.5204,290.8433,0.9999,0.9999,-12.9289);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(4).p("AhGAAQAAgcAVgVQAVgVAcAAQAdAAAVAVQAVAUAAAdQAAAdgVAVQgVAVgdAAQgdAAgUgVQgVgVAAgdg");
	this.shape_21.setTransform(1038.1107,439.3464,0.9999,0.9999,-12.9289);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(4).p("AhCAAQAAgaAUgUQAUgUAaAAQAcAAAUAUQATATAAAbQAAAcgTAUQgUATgcAAQgbAAgTgTQgUgUAAgcg");
	this.shape_22.setTransform(1061.878,438.1989,0.9999,0.9999,-12.9289);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(4).p("AhEAAQAAgcAUgUQAVgUAbAAQAdAAAUAUQAUAUAAAcQAAAcgUAVQgUAUgdAAQgbAAgVgUQgUgVAAgcg");
	this.shape_23.setTransform(1088.7206,436.3712,0.9999,0.9999,-12.9289);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(4).p("AGHuMQi6BdiVCNQiwCnhwDaQhAB8giB7Qg9DZAPDcQATEXCGD1");
	this.shape_24.setTransform(1409.5171,380.2228,0.9999,0.9999,-12.9289);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(8).p("ABykBIhyDMQhxDaAGBJ");
	this.shape_25.setTransform(198.1938,423.3476,0.9999,0.9999,-12.9289);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(8).p("AgeDkQhPgagxhBQgwhAAAhMQABg+Ahg4QAgg3AzgbQAXgMAkgFQAXgDBFgDQBLgEBpAM");
	this.shape_26.setTransform(314.4164,471.4348,0.9999,0.9999,-12.9289);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(8).p("AgcDvQg3gggtg2QhbhsAuhvQA0h+BhghQBQgaCnAb");
	this.shape_27.setTransform(514.6681,163.6304,0.9999,0.9999,-12.9289);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(4).p("ABFhLIAlAOIi4CHIghgTg");
	this.shape_28.setTransform(603.1,454.95,0.9999,0.9999,-12.9289,0,0,0,0.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(4).p("ABEhLIAmANIi5CIIgggTg");
	this.shape_29.setTransform(614.75,456.95,0.9999,0.9999,-12.9289,0,0,0,0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(4).p("ABEhLIAmANIi4CIIghgUg");
	this.shape_30.setTransform(626.4,458.7,0.9999,0.9999,-12.9289,0,0,0,0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_31.setTransform(496.5337,546.3682,0.9999,0.9999,-12.9289);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_32.setTransform(494.3639,536.9166,0.9999,0.9999,-12.9289);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_33.setTransform(492.2951,527.2344,0.9999,0.9999,-12.9289);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_34.setTransform(490.0133,517.2944,0.9999,0.9999,-12.9289);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(8).p("ACTk7QBcAGArAMQBJAVAfA0QAgA0gLBIQgLBHgwBBQh6CQikBHQhoAug/AMQhuAWhRgrQg2gdgmg3QgXg3ADg6QACgtATgsQALgZAbgpQAwhJBHg5QAqghAugYQBYguBjgOQA1gHAxADg");
	this.shape_35.setTransform(363.6976,286.5418,0.9999,0.9999,-12.9289);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(8).p("AJrpIIzVSQ");
	this.shape_36.setTransform(436.6154,298.3169,0.9999,0.9999,-12.9289);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(4).p("AFRC8QAOg7AJhAQASh+gYgTQgdgWjqgvQjogugXAKQgYALhPBKQhSBNgHAYQgLAjAABN");
	this.shape_37.setTransform(856.7307,167.1351,0.9999,0.9999,-12.9289);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(4).p("ADTEVQAVhVAghoQATg5ADgSQAGgggLgaQgQgmg3gaQhVgpi9g8Qh0gjhrgdIgJgD");
	this.shape_38.setTransform(880.7693,155.4402,0.9999,0.9999,-12.9289);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(4).p("ABCijIA4ARIjDE1IgxgUg");
	this.shape_39.setTransform(786.65,157.05,0.9999,0.9999,-12.9289,0,0,0,0.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(4).p("ABDijIA3ASIjCE1IgygUg");
	this.shape_40.setTransform(799.3,157.55,0.9999,0.9999,-12.9289,0,0,0,0.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(4).p("ABCijIA4ASIjDE0IgxgTg");
	this.shape_41.setTransform(812.05,158.35,0.9999,0.9999,-12.9289,0,0,0,0.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(8).p("AECk9IAuDDIp2Gg");
	this.shape_42.setTransform(514.5102,39.6505,0.9999,0.9999,-12.9289);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(8).p("AKEBnQwjiijCgqIgJgC");
	this.shape_43.setTransform(755.4996,191.3674,0.9999,0.9999,-12.9289);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(8).p("An3rjICPBfQVBOAAmAkQAOANAMAOIANAQQAQASAJAQQAYAmAFA9QAGBOglA5QgQAagaAVQgPAMggAUQgsAcgwAOQgvAOg0gBQgYgBgigFQjLgi3ChfIjfgO");
	this.shape_44.setTransform(1859.6701,370.0949,0.9999,0.9999,-12.9289);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(8).p("AgPrrICjPdIkvHs");
	this.shape_45.setTransform(1595.6277,236.8849,0.9999,0.9999,-12.9289);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(8).p("APQrGIlyJDI48M8");
	this.shape_46.setTransform(1468.5871,531.126,0.9999,0.9999,-12.9289);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(8).p("AIjsxIwnXTIFrCC");
	this.shape_47.setTransform(1384.5561,539.4407,0.9999,0.9999,-12.9289);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(8).p("EgknAcCIV9H2IA4AQQBDAKA4gaMAjLgQdICukBQgLgugKhEQgViHAChsQAChOANg6IAAgBQAYhqAJgiQAXhaAchHIAAgBQAkhbAthGQAlg5Ayg1QBEhGBXgvIARgJIABAAIBKg1QBcg5BUgTQAWg+kjsWIkosKQrSiln1hnQnDhcgQAOQgXATmGJHImDJD");
	this.shape_48.setTransform(1575.8606,393.9481,0.9999,0.9999,-12.9289);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(4).p("AFjq3QiPA3h7BcQg2ApgtAsQgSAQgUAWQisC3hKDsQgmB7gHCGQgFBPAICJQAFBMAMBBQAFAcARBM");
	this.shape_49.setTransform(1428.7497,371.3923,0.9999,0.9999,-12.9289);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(8).p("Au4ilIdxFL");
	this.shape_50.setTransform(1309.9179,485.1777,0.9999,0.9999,-12.9289);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(8).p("Au4lBIcRJCIBSBJ");
	this.shape_51.setTransform(1334.6971,275.2763,0.9999,0.9999,-12.9289);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(8).p("A49pHIA3A1QAvAvAPAVQAMAPEVBiQFdB7MLD/QMuEMNfEV");
	this.shape_52.setTransform(1602.4281,307.5773,0.9999,0.9999,-12.9289);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(8).p("ACzi8IgSAJQgxAcgxArQhMBDg9BbQgyBLgkBU");
	this.shape_53.setTransform(1759.2991,349.9048,0.9999,0.9999,-12.9289);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(8).p("AAsiFQg6CIgZCk");
	this.shape_54.setTransform(1747.0119,387.9411,0.9999,0.9999,-12.9289);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(8).p("AZaBBQgKBAgFBIIgDA0Qg5Ad+WlCQl3g+t8iZ");
	this.shape_55.setTransform(1586.9552,435.2991,0.9999,0.9999,-12.9289);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(8).p("AATADIglgF");
	this.shape_56.setTransform(1417.6676,447.5679,0.9999,0.9999,-12.9289);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(8).p("AAAADQAAgCAAgB");
	this.shape_57.setTransform(1415.6763,447.3839,0.9999,0.9999,-12.9289);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(8).p("AAAgEIAAAJ");
	this.shape_58.setTransform(1415.7805,447.9498,0.9999,0.9999,-12.9289);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(4).p("AABABIgBgB");
	this.shape_59.setTransform(1406.3162,479.898,0.9999,0.9999,-12.9289);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(4).p("AgfNCQhiiVg2jaQhjmVCel4QCEk+DcjO");
	this.shape_60.setTransform(1390.6607,397.7773,0.9999,0.9999,-12.9289);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(4).p("AiyByQA4g0A/gtQBUg8BVgnQArgTAagH");
	this.shape_61.setTransform(1408.9733,295.7413,0.9999,0.9999,-12.9289);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(8).p("AHenRIu7Oj");
	this.shape_62.setTransform(449.9988,139.2116,0.9999,0.9999,-12.9289);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(8).p("AjE06IYvIBQh5A6hpBJQhCAug7AxQhoBYhbBtQhpB9hRCcQiTEYggEyQgOCDAGCLQAMD+BRCKIBzDCMghxgGV");
	this.shape_63.setTransform(1117.9544,376.7022,0.9999,0.9999,-12.9289);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(8).p("Ar7skIAggwQKuBIKtB3QVdDtAFDoQADCIhUCgQhRCaiQCUQiRCUiyBvQi6B0i8A0QlABZ1hkMQqxiHpwiYIAKgS");
	this.shape_64.setTransform(583.0829,288.8182,0.9999,0.9999,-12.9289);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(4).p("AABgvQnxhQm0hEIgOgEQgggGgOABQgKAAgGADQgEACgGAGQgJAIgDANQgDAKABAEIACAMQADANAFACIAzAKQCiAdLrB6IQlCvQATgJAJgTQAIgOgDgPQgCgMgKgKQgTgSgkAAIgWgDQg1gHkEgrQoEhThxgTg");
	this.shape_65.setTransform(491.5977,78.7578,0.9999,0.9999,-12.9289);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(4).p("AFAD5QBiAXBHAbQAShKAQhQQAhifgIgeQgLgrgVgYQgcghg2gKQgFgBkWhIQj5hBhQgKQgZgDgJABQhvBnhOBKQiVCMACAVQAEAkgEBLIAdABQCCAFCWAOQDvAVC6AiQBGANBAAQg");
	this.shape_66.setTransform(870.7849,160.6046,0.9999,0.9999,-12.9289);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(8).p("AmvFLIiyi2QAjhrAxhvQBijfBGgWQBHgVHKBNQDlAnDXAq");
	this.shape_67.setTransform(573.2912,159.3805,0.9999,0.9999,-12.9289);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(8).p("AJLgDIsclnQheBkhgBxQjCDhgPBCQAjAZGeBnQDPAzDIAug");
	this.shape_68.setTransform(923.2,296.6,0.9999,0.9999,-12.9289,0,0,-1.9,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(8).p("Eg30gD+ICdAyQPQEyO0EEQX+GlQdC2QByAUByAMQF+AwCOAKQDaARCXgUQFpgvFDkEQCyiPDUkFQCLirA1hlQBVikggiNQgoi1jdiHQm6kNv9jx");
	this.shape_69.setTransform(540.9957,339.2128,0.9999,0.9999,-12.9289);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(8).p("AdMGkQmUhfnWhVQlGg7lCgvIjSgeIh0h4I9gmS");
	this.shape_70.setTransform(501.9107,196.0175,0.9999,0.9999,-12.9289);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(8).p("A4PCBIbDIqIC9AAQEMkIEWkSQItoiAxguQAMgLgxgMQgbgIgngHQkTgyuthPQnVgnmfge");
	this.shape_71.setTransform(356.5145,306.549,0.9999,0.9999,-12.9289);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(8).p("AnprSIONEuIArSc");
	this.shape_72.setTransform(381.6327,542.2439,0.9999,0.9999,-12.9289);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(8).p("ArpLDIXT2F");
	this.shape_73.setTransform(160.5655,560.7809,0.9999,0.9999,-12.9289);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(8).p("AlELuIJ7ojIAAvW");
	this.shape_74.setTransform(90.9022,741.7482,0.9999,0.9999,-12.9289);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(4).p("AucmdIdTLVIAPAQQAOASAAASQAAALgHAKQgOAYgYADQgPACgXgJI9hq2");
	this.shape_75.setTransform(112.0913,652.8008,0.9999,0.9999,-12.9289);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(8).p("AI6EPIxyoc");
	this.shape_76.setTransform(256.1854,485.9728,0.9999,0.9999,-12.9289);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(8).p("AY3GnMgrOgNJIiBAfQiXAphrA2");
	this.shape_77.setTransform(491.9809,438.2461,0.9999,0.9999,-12.9289);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(8).p("ACBsXQiuBagbBrIhHEwQiGKACmCsQB9CDBrBSQA2AqAdAP");
	this.shape_78.setTransform(338.291,524.7007,0.9999,0.9999,-12.9289);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(8).p("EAhDAHRMgnYgOdI6zE6");
	this.shape_79.setTransform(425.7238,633.1556,0.9999,0.9999,-12.9289);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(8).p("AMBHrI4CS3IlpiwIAq6uQgNgGgOgIQgigTgEgHQgMgQADgYQACgZAQgRQADgEAJgGQANgJAPgDQAKgBANACQAHABAWAHIAhAMIQJvOIRLi7IAehDQAKgYAGghQAMhBgWgr");
	this.shape_80.setTransform(119.1201,640.7683,0.9999,0.9999,-12.9289);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(8).p("Az3YBQgSgkgrgQQgwgSgPgJQgTgLgYgYQg2g3ANh2QAIhLAshAQAthCA+gYQAEgBBvgdQhOh4hHh6QiOj0AjgHQAkgIDCA2QCVAqCtA6QBZitGOlRQB9hpCNhtIBzhYIAApIQAAgNHeBtIBhAWIACgBIPAt6");
	this.shape_81.setTransform(282.5125,270.7082,0.9999,0.9999,-12.9289);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(8).p("AuxBmIBamEIX/hLIELLw");
	this.shape_82.setTransform(484.7849,51.0546,0.9999,0.9999,-12.9289);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(8).p("Eghkgp5IAAB+IEcHVISfEIQS9ERCgAsQDjA/APAGQA0AWAeA7QAbA2gOB6QgJBNggDdQC0AkDGBWQCdBFEPCUQDKBvBfEQQAvCHAHBxQgxgXhPgQQieggiYAlQhWAVhSAxQh7BKiRCWQi1C9h6C8QjXFMhPF7QgwDnAPC6QAIBoAcBQQA5CoB6CKQh8AEhzAjQhEAVhDAhQglATg7AiQhbAxhrAbQhFASiuAfQi+AgjGgFQh7gEj8gbQjBgVi4gnQhqgWhTgYQhkgbhugmQhRgbg0gUIgRgG");
	this.shape_83.setTransform(857.7509,290.0072,0.9999,0.9999,-12.9289);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(8).p("AgHgBIAPAD");
	this.shape_84.setTransform(741.9347,561.6308,0.9999,0.9999,-12.9289);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(4).p("AgmgMIBNAZ");
	this.shape_85.setTransform(738.6676,561.2524,0.9999,0.9999,-12.9289);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(4).p("AJDGYIAAADQgXCbgaBvQg4Dvg6ADQt4AzhUhtQg9hPBvrIQAskUAwjjQAyjnAXggQAog0CchhICShXIBJAV");
	this.shape_86.setTransform(677.2762,534.8176,0.9999,0.9999,-12.9289);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(4).p("Ah2gBQB4AFCIgD");
	this.shape_87.setTransform(693.8102,619.1115,0.9999,0.9999,-12.9289);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(4).p("ABsOBQBigCBDgIQBIgIAVgMQA1geAsjTIAijOQgRACgbgBQg3gBg0gRQgSgGgOgGQh4g1g8iBQhVi2gYjLQgbjuAvk5QAJg8ARhXIgzAiQg+Apg2AqQiuCGgaBWQgsCPhZIrQhhJcAjA8QAZApDMAUQAwAFBBAD");
	this.shape_88.setTransform(676.7228,531.0776,0.9999,0.9999,-12.9289);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AAA9AD").s().p("AnVMNIAq6uIOBFKIAAPWIp7Ijg");
	this.shape_89.setTransform(71.7061,727.2525,0.9999,0.9999,-12.9289);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#707477").s().p("AsbLvIJ8oiIAAvWIO8FfI4BS0g");
	this.shape_90.setTransform(137.1661,730.5369,0.9999,0.9999,-12.9289);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AOtGgI9hq2QgOgGgOgJQghgTgFgHQgLgQACgYQADgYAPgRQAEgFAIgFQANgKAPgCQALgCAMACIAeAIIdzLhIAPAQQAOASAAASQAAALgHAKQgOAYgYADIgEABQgOAAgUgIg");
	this.shape_91.setTransform(107.8997,652.1898,0.9999,0.9999,-12.9289);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#AAA9AD").s().p("AyNGeIQKvMIRKi7IDHBfI3CV0g");
	this.shape_92.setTransform(117.4704,566.2021,0.9999,0.9999,-12.9289);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#AAA9AD").s().p("AhBDdQgxgSgPgJQgSgLgYgYQg3g3ANh1QAJhLAshAQAshCA/gYIBxgeICdAyIhzDMQhwDaAFBJQgRgkgrgQg");
	this.shape_93.setTransform(187.7385,421.7364,0.9999,0.9999,-12.9289);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#AAA9AD").s().p("AgvDjQhQgagwhBQgxhAAAhLQABg/Ahg4QAhg2AygbQAYgNAkgFQAXgDBEgDQBLgDBqALQivBagbBrIg7D7g");
	this.shape_94.setTransform(316.521,470.609,0.9999,0.9999,-12.9289);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#707477").s().p("AlbN2IgOgQIv7mKIXC10IOsG9QiGKBClCsQB/CCBrBSQA2AqAdAPI6zE7QAAgSgOgSg");
	this.shape_95.setTransform(228.0072,568.5508,0.9999,0.9999,-12.9289);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#707477").s().p("Ah0H5QgdgPg2gpQhrhTh+iCQimisCGqAIAlikIONEuIArSbg");
	this.shape_96.setTransform(376.3506,544.9092,0.9999,0.9999,-12.9289);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#AAA9AD").s().p("AkoEgQg2gdgmg3QgXg3ADg6QACgtATgsQALgZAbgpQAwhJBHg5QAqghAugYQBYguBjgOQA1gHAxADQBcAGArAMQBJAVAfA0QAgA0gLBIQgLBHgwBBQh6CQikBHQhoAug/AMQgmAIghAAQhDAAg1gdg");
	this.shape_97.setTransform(364.0476,286.0418,0.9999,0.9999,-12.9289);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_98.setTransform(494.7177,536.4328,0.9999,0.9999,-12.9289);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_99.setTransform(496.8876,545.8855,0.9999,0.9999,-12.9289);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_100.setTransform(490.3673,516.8118,0.9999,0.9999,-12.9289);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_101.setTransform(492.6491,526.7517,0.9999,0.9999,-12.9289);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#707477").s().p("A3MCCQBZitGPlRQB8hpCNhuIB0hXQGfAdHVAnQOtBPETAzIzWSPgADinqQhjAOhYAuQgtAYgqAiQhIA4gwBJQgaApgMAbQgTArgCAuQgCA5AXA2QAmA4A2AdQBQArBtgXQBAgMBpguQCkhGB6iQQAvhCALhHQALhHgfg0Qggg1hJgUQgqgNhcgGIgdgBQgkAAgmAFg");
	this.shape_102.setTransform(350.3588,307.5425,0.9999,0.9999,-12.9289);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AqfJIITVyPQAnAGAbAIQAxAMgMALQgxAuotIjIohIZg");
	this.shape_103.setTransform(442.1159,296.6345,0.9999,0.9999,-12.9289);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#AAA9AD").s().p("AumFcIO/t5QCjAdLrB7Iu8Ojg");
	this.shape_104.setTransform(404.157,141.4933,0.9999,0.9999,-12.9289);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#AAA9AD").s().p("AiRCZQhbhsAuhvQA0h+BhghQBQgaCnAbQhGAWhiDeQgwBwgjBrQg3gggtg2g");
	this.shape_105.setTransform(516.6504,162.7557,0.9999,0.9999,-12.9289);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhsA3ICziBIAmANIi4CIg");
	this.shape_106.setTransform(603.1405,454.2745,0.9999,0.9999,-12.9289);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AhsA3ICziBIAmANIi4CIg");
	this.shape_107.setTransform(614.7805,456.2701,0.9999,0.9999,-12.9289);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AhsA3ICziBIAmANIi4CIg");
	this.shape_108.setTransform(626.3889,458.0164,0.9999,0.9999,-12.9289);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#AAA9AD").s().p("Ar+CVIgNgDIBWl1IWVhGIAsC/IplGUQnxhRm0hEg");
	this.shape_109.setTransform(468.0432,48.3237,0.9999,0.9999,-12.9289);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#AAA9AD").s().p("ArlJ0IgqybIuPkvIAiiLQAbhsCvhZQBrg2CWgqICCgfMArOANKIiTBXQidBhgnA1QgXAfgyDnQgxDjgrEVQhvLHA8BPgAl7B9II8ChIAAhIIo8ipgAl7AcII8ChIAAhJIo8ingAl6hGII8CgIAAhIIo8iogAl6isII8ChIAAhIIo8ipgATolZIAhAUIC6iJIgngNgAR7mEIAhAUIC5iJIgmgNgAQOmxIAhATIC5iIIgmgOg");
	this.shape_110.setTransform(502.3156,527.6359,0.9999,0.9999,-12.9289);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#707477").s().p("ACeFGIp0hmIJkmUIgsi/IBpgEIEMLwQg1gIkEgrg");
	this.shape_111.setTransform(531.8963,41.2568,0.9999,0.9999,-12.9289);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("Ag+AfQrrh6iigeIgzgKQgFgCgDgMIgCgNQgBgDADgKQADgNAJgIIAKgJQAGgDAKAAQAOgBAgAHIAOADQG0BEHxBRIJ1BmQEEArA1AHIAWACQAkAAATATQAKAKACAMQADAPgIAOQgJATgTAIg");
	this.shape_112.setTransform(491.9397,78.2232,0.9999,0.9999,-12.9289);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#707477").s().p("AgGLSQiSgBgugHQhWgNgmgtQgFgFgNgVQgbgtABg8QAAgeAKguIBAmhQAylJA4ipQARgzAbgkQAdgoBRg3QBCgtBBgiQgwE5AcDuQAYDLBVC3QA8CAB4A1QgIBogRBiQgGAlgHAUQgMAfgWAUQgSAQgZAKQh6gEiJgBg");
	this.shape_113.setTransform(671.8105,531.7609,0.9999,0.9999,-12.9289);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AhGNyIhzgIQjMgUgYgpQgjg8BgpcQBZorAsiPQAbhWCtiGQA2gqA+gpIA0giQgRBXgJA8QhCAihCAtQhQA3gdAnQgbAlgRAzQg5CpgyFIIhAGiQgJAugBAeQAAA8AaAtQAOAVAEAFQAnAtBWANQAuAGCQACQCLABB5AEQAZgKASgQQAXgUALgfQAIgUAGglQARhiAHhoQAOAGATAGQg+DzgLCBQgDAagEAPQgJAegTAUQgRAQgbAGQgaAGg9ADIhdACQhVAAhNgFg");
	this.shape_114.setTransform(669.7765,533.4705,0.9999,0.9999,-12.9289);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#707477").s().p("AiEJdIhzh5Itui7IO9ujIPxCmIAAB/IEcHTQjXgqjlgnQnLhMhHAVQilgbhSAaQhgAgg0B+QgvBwBbBsQAuA2A2AgICyC2g");
	this.shape_115.setTransform(517.1986,140.6767,0.9999,0.9999,-12.9289);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AhrDuQAbgHARgQQATgTAJgfQAEgOADgaQALiBA9jyQAzAQA3ACQAcABARgDIgiDOQgtDTg1AdQgUANhHAHQhEAJhiACQA9gDAagGg");
	this.shape_116.setTransform(721.0799,587.1826,0.9999,0.9999,-12.9289);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#AAA9AD").s().p("AosNcQg9hPBvrIQAskUAwjjQAyjnAXggQAog0CchhICShXIBJAVIgzAhQg+Aqg2AqQiuCGgaBVQgsCPhZIsQhhJcAjA7QAZAqDMAUQAwAEBBAEIABAAQCGAJB6gGQBigDBDgIQBIgIAVgMQA1gdAsjUIAijOIBPAaIgRgEIARAHQgXCbgaBvQg4Dvg6ADQkcAQjJAAQmuAAg5hKg");
	this.shape_117.setTransform(677.6441,534.3956,0.9999,0.9999,-12.9289);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#707477").s().p("Aq1KNQqxiHpwiYIAKgSIBrAAIIioZQItojAxguQAMgLgxgMIAggwQKuBIKtB3QVdDtAFDoQADCIhUCgQhRCaiQCUQiRCUiyBvQi6B0i8A0QhPAWiSAAQm2AAwKjJg");
	this.shape_118.setTransform(584.5104,288.19,0.9999,0.9999,-12.9289);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("Ah5CQIC8kzIA4ASIjDE1g");
	this.shape_119.setTransform(786.897,156.319,0.9999,0.9999,-12.9289);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("Ah5CQIC8kzIA3ASIjCE1g");
	this.shape_120.setTransform(799.5541,156.8244,0.9999,0.9999,-12.9289);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("Ah5CQIC8kzIA3ASIjCE1g");
	this.shape_121.setTransform(812.3139,157.6652,0.9999,0.9999,-12.9289);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#9CE5E3").s().p("AfKX0QiOgKl/gwQhxgMhygUQwei239mlQu0kEvRkzIicgyQhOh4hHh5QiOj0AjgHQAkgIDCA2QCVAqCtA6IbEIpIBSAAIgLASQJxCYKxCHQVgEMFBhZQC7g0C7h0QCyhvCQiUQCRiUBQiaQBUihgDiHQgFjo1cjtQqvh3qshIIggAwQgcgIgngHQkTgyushPQnWgnmggeIAApIQAAgNHfBtIBhAWIACgBIb9F+IB0B5IDSAdQFCAwFGA7QHWBUGUBfIAEABQP+DxG5ENQDdCGApC1QAfCNhVClQg0BliMCrQjTEFiyCPQlEEEloAvQhTAKhnAAQhVAAhigHg");
	this.shape_122.setTransform(516.6951,296.2855,0.9999,0.9999,-12.9289);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#707477").s().p("AhXCFQiWgOiCgFIAAgBQABhNAKgjQAIgYBShNQBOhKAZgLQAWgKDoAuQDqAvAdAWQAZATgSB+QgJBAgOA7Qi7gijugVg");
	this.shape_123.setTransform(857.0563,166.6407,0.9999,0.9999,-12.9289);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AEGD5QAOg8AJg/QASh+gZgTQgdgWjqgvQjogvgWAKQgZAMhOBKQhSBMgIAYQgKAjgBBNIAAABIgdgBQAEhLgEgjQgCgWCViMIC9ixQAJgBAZADQBqAdB0AkQC+A7BVApQA3AaAQAnQALAZgGAhQgDARgTA6QggBogVBUQhAgPhGgNg");
	this.shape_124.setTransform(863.107,159.0462,0.9999,0.9999,-12.9289);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("ACHD7QAVhUAghpQATg5ADgQQAGgigLgaQgQgmg3gaQhVgpi9g7Qh0gkhrgdQBQALD6BAIEaBJQA2AKAcAiQAVAYALAqQAIAeghCfQgQBQgSBKQhHgbhigXg");
	this.shape_125.setTransform(889.1421,155.7496,0.9999,0.9999,-12.9289);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#707477").s().p("AiUEMQmehngjgZQAPhCDCjhQBghxBehkIMcFnIlTFyQjJgujOgzg");
	this.shape_126.setTransform(924.3977,296.1235,0.9999,0.9999,-12.9289);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#707477").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAVgVAcAAQAeAAAUAVQAVAUAAAdQAAAdgVAVQgUAVgeAAQgdAAgUgVg");
	this.shape_127.setTransform(1038.4607,438.8464,0.9999,0.9999,-12.9289);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#707477").s().p("AguAwQgUgUAAgcQAAgaAUgUQAUgUAaAAQAcAAAUAUQATATAAAbQAAAcgTAUQgUATgcAAQgbAAgTgTg");
	this.shape_128.setTransform(1062.228,437.699,0.9999,0.9999,-12.9289);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#707477").s().p("AgvAxQgVgVABgcQgBgcAVgTQAUgVAbABQAcgBAVAVQATATABAcQgBAcgTAVQgVATgcABQgbgBgUgTg");
	this.shape_129.setTransform(1089.0706,435.8712,0.9999,0.9999,-12.9289);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#AAA9AD").s().p("EAeAAmDQh7gEj8gbQjBgVi4gnQhqgWhTgYQhkgbhugmQhRgbg0gUIAAgCIgBAAIhPgaQgQACgcgBQg3gBg0gRQgSgGgOgGQh4g1g7iBQhWi2gYjMQgcjuAxk5QAJg8ARhXMgsYgNfIiBAfQiXAqhrA2QhpgMhLAEQhFADgXADQgkAFgYAMQgzAbggA3QghA4gBA+QAABNAxBAQAwBBBQAaIAKABIgKA1Ix0odIAfhDQAKgXAGghQAMhCgXgqQgFhJBxjbIByjMQPREzO0EEQX/GkQcC2QByAUByAMQF+AwCOAKQDaARCXgUQFogvFEkEQCyiPDTkEQCMirA1hlQBUilgfiNQgoi1jeiHQm5kNv9jxIgFgBQmUhfnWhUQlEg7lDgwIizi2QAjhrAyhwQBijfBGgVQBHgVHJBNQDmAmDXArISeEIQS+ERChAsQDiA/AQAGQA0AWAeA7QAbA2gPB6QgIBNggDdQCzAkDHBWQCdBFEOCUQDKBvBfEQQAwCHAGByQgwgXhPgQQieggiYAlQhXAVhRAxQh8BKiQCVQi2C9h6C8QjWFMhPF7QgwDnAOC6QAJBoAbBQQA6CoB5CKQh7AEhzAjQhEAVhDAhQglATg7AiQhcAxhqAbQhFASivAfQijAcioAAIg5gBgEAougCRQjCDhgPBCQAjAZGeBnQDPAzDJAuIFTlzIsdlmQheBkhgBxgEAoHgbPIi8CxQiWCNACAVQAFAkgFBLIAdABQCCAFCXAOQDuAVC7AiQBGANBBAQQBhAXBIAbQARhKAQhQQAhiggIgeQgLgrgUgYQgdghg2gKIkbhJQj6hBhQgKQgTgCgJAAIgGAAgEAgqgWpIAxATIDEk1Ig4gSgAew3OIAxAUIDDk2Ig3gSgAc13wIAyAUIDDk2Ig4gRg");
	this.shape_130.setTransform(632.3977,362.5298,0.9999,0.9999,-12.9289);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#707477").s().p("Aq3iDQAXgoAjg4IUzF2IACABQgVAsgPAkQyqlKihgdg");
	this.shape_131.setTransform(1047.0154,355.4551,0.9999,0.9999,-12.9289);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#707477").s().p("AJ/DrI0zl2QAmg8AZgkIUrF6QgeAvgXAug");
	this.shape_132.setTransform(1050.4009,345.6248,0.9999,0.9999,-12.9289);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#707477").s().p("Aq2iWQAagmAdgnIUyFoIAEADIgBAAQghAqggAyg");
	this.shape_133.setTransform(1054.7981,335.8442,0.9999,0.9999,-12.9289);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#707477").s().p("AJ5DfI0yloQAqg4AgggIUpF8IAAABQgfAggfAmg");
	this.shape_134.setTransform(1058.45,325.7219,0.9999,0.9999,-12.9289);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#707477").s().p("AJyDiI0pl8QBChIAnAAIUGGCQgkAggiAjg");
	this.shape_135.setTransform(1063.8349,317.2276,0.9999,0.9999,-12.9289);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#707477").s().p("AqIilQAbgdAggcITWGIQgXAcgMAZg");
	this.shape_136.setTransform(1081.6505,284.5678,0.9999,0.9999,-12.9289);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#707477").s().p("AqEimQAngiArgZIABADIS2GNQgfAbgUAYg");
	this.shape_137.setTransform(1085.7631,277.9046,0.9999,0.9999,-12.9289);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#707477").s().p("Ap6iyIgBgDQAagPAhgNIAZgJIABADISiGAQghAXgfAbg");
	this.shape_138.setTransform(1091.8683,271.9893,0.9999,0.9999,-12.9289);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#707477").s().p("Ap4iwIgBgDIBOgbIEvBUQGOB1HoCjQgjATgsAeg");
	this.shape_139.setTransform(1098.9193,266.3955,0.9999,0.9999,-12.9289);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#707477").s().p("AgvAxQgVgVAAgcQAAgcAVgTQATgVAcABQAcgBAUAVQAVATAAAcQAAAcgVAVQgUATgcABQgcgBgTgTg");
	this.shape_140.setTransform(1257.3056,441.2087,0.9999,0.9999,-12.9289);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#AAA9AD").s().p("A0uO4Qh6iKg5ioQgchQgIhoQgPi6AwjnQBPl6DXlMQB6i8C1i9QCRiWB7hKQBSgxBWgVQCYglCeAgQBPAQAxAXIYvIBQh5A6hpBIQhCAug7AyQhoBYhbBsQhpB+hRCcQiTEYggExQgOCEAGCLQAMD9BRCKIBzDDgAkzH3QgUAUAAAdQAAAcAUAUQAVAUAcAAQAcAAAUgUQAUgUAAgcQAAgdgUgUQgUgUgcAAQgcAAgVAUgAo7HOQgUAUAAAcQAAAbAUAUQATAUAcAAQAcAAAUgUQATgTAAgcQAAgcgTgUQgUgUgcAAQgbAAgUAUgAsoGhQgVAVAAAdQAAAeAVAVQAUAVAeAAQAdAAAVgVQAVgVAAgeQAAgdgVgVQgVgVgdAAQgdAAgVAVgAunswQgfAhgqA4QgeAngZAmQgZAlgnA8QgiA3gXAoQChAdSqFMQAOglAWgrQAXgvAdgvQAggyAigqIAAAAQAfgmAfghQAhgjAkgfI0FmDIgBAAQgnAAhCBHgAm5zgQghAMgaAQQgrAZgnAiQggAbgbAdITuGFQAMgYAXgdQAUgXAfgcQAfgaAhgYQAsgeAjgTQnoikmOh1IkvhVg");
	this.shape_141.setTransform(1101.9895,376.3045,0.9999,0.9999,-12.9289);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#707477").s().p("AgvAwQgUgTAAgdQAAgbAUgVQAUgTAbgBQAcABAUATQAUAVAAAbQAAAdgUATQgUAVgcgBQgbABgUgVg");
	this.shape_142.setTransform(1284.8839,439.9045,0.9999,0.9999,-12.9289);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#AAA9AD").s().p("AvQMbIhzjDQhRiJgMj+QgGiLAOiDQAgkxCTkZQBRicBph+QBbhsBohYIcLJAQjcDOiFE+QifF4BkGVQA1DaBiCVIgCADgAjbGjQgUAUAAAcQAAAdAUAUQAUAUAcAAQAdAAAUgUQAUgUAAgdQAAgcgUgUQgUgUgdAAQgcAAgUAUgAnrFyQgUAUAAAdQAAAcAUAUQAUAUAdAAQAcAAAUgUQAUgUAAgcQAAgdgUgUQgUgUgcAAQgdAAgUAUg");
	this.shape_143.setTransform(1291.1479,390.5077,0.9999,0.9999,-12.9289);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AvAjvQA6gyBDguIcEI9Qg/Aug3A0g");
	this.shape_144.setTransform(1304.8704,296.4922,0.9999,0.9999,-12.9289);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#AAA9AD").s().p("Av5jdQBphIB5g6IcRJCQgaAHgqATQhWAmhVA9g");
	this.shape_145.setTransform(1320.0317,281.3169,0.9999,0.9999,-12.9289);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#707477").s().p("Al7JFQhjmVCel4QCFk+DbjOQA4g0A/guQBVg9BVgmQArgTAZgHIAdAYQi6BdiVCOQiwCmhwDbQhAB7giB7Qg9DaAPDbQATEYCGD1IgfArQhiiVg2jag");
	this.shape_146.setTransform(1407.5468,381.765,0.9999,0.9999,-12.9289);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#707477").s().p("AmYGGQgPjcA9jZQAih7A/h8QBwjaCwinQCWiNC5hdIA2AxQjdBhinCrQhEBHg/BfQh1Cug5DIQgmCBgLCHQgQDIArC/QAfCJA5B6IgpA4QiFj1gTkXg");
	this.shape_147.setTransform(1413.1283,379.5092,0.9999,0.9999,-12.9289);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#707477").s().p("AlxJbQgri/AQjIQALiHAmiBQA5jIB1iuQA/hfBFhIQCmiqDdhhIAAAAIA4A0QiNBAh6BgQjMChh3DhQihEyAfFsQAQDCBBCoIALAIIg7BUQg5h6gfiJg");
	this.shape_148.setTransform(1419.5193,377.6573,0.9999,0.9999,-12.9289);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#707477").s().p("AkwMRQhCiogQjCQgflsChkyQB3jhDMihQB6hgCNg/QAvAvAPAVQiQA2h7BcQg2ApguAtQgRAQgUAVQisC4hJDrQgnB7gHCHQgEBOAICKQAEBLAMBBQAFAcASBMIAAABIABACIAAAAIAlAHIhIBlg");
	this.shape_149.setTransform(1426.1499,374.5708,0.9999,0.9999,-12.9289);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#AAA9AD").s().p("AsiMrIlqiBINby0IAEAAIgCgDIDLkdQN7CZF2A+IlyJCI48M8g");
	this.shape_150.setTransform(1447.9515,523.7267,0.9999,0.9999,-12.9289);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#AAA9AD").s().p("ArLGSIGCpCQGGpHAXgTQAQgOHEBcICkPdIkxHsQsJkAldh7g");
	this.shape_151.setTransform(1539.5995,244.4871,0.9999,0.9999,-12.9289);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#858A8E").s().p("AofPBIg4gQI19n2IY9s8IFypCQeXFDA5gdIACg0QgBBsAUCIQALBEAKAuIitEBMgjMAQbQgoATguAAQgSAAgTgDg");
	this.shape_152.setTransform(1573.3865,532.6564,0.9999,0.9999,-12.9289);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#AAA9AD").s().p("AmgInQl2g+t8iYIgmgHIAAAAIgBgDQgRhMgFgcQgMhBgFhLQgIiJAFhOQAHiHAmh8QBKjrCsi4QAUgVASgQMAyAAQRQgtBGgkBbIAAABQg7CIgZClIAAABQgNA6gCBOIgCA0QgFACgRAAQjDAA73kpg");
	this.shape_153.setTransform(1576.4345,376.4832,0.9999,0.9999,-12.9289);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("A5rndQAugtA2gpIABAAMAxyAP4QgyA1glA6g");
	this.shape_154.setTransform(1588.5127,335.7852,0.9999,0.9999,-12.9289);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#AAA9AD").s().p("A6PmyIgBAAQB8hcCPg3QALAPEWBiQFdB7MJEAQMwELNfEVIgBAAIgRAJQhYAvhDBHg");
	this.shape_155.setTransform(1598.9344,320.1849,0.9999,0.9999,-12.9289);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#858A8E").s().p("AvEHVIExnsIikveQH0BoLSClIEnMIQEjMWgWA/QhUAThbA5IhLA0QtekVsvkLg");
	this.shape_156.setTransform(1680.7069,244.1445,0.9999,0.9999,-12.9289);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#AAA9AD").s().p("Al3KPQgLgugKhEQgViIAChsQAGhIAJhAIAAgBQAYhpAJgiQAXhZAchIIAAgBQAlhTAxhMQA+hbBNhEQAxgrAwgcIARgJIABAAIBKg0QBcg5BUgUICOBfQnjEfhNFnQgbCBAEDeQADCEALBxg");
	this.shape_157.setTransform(1782.6599,380.0813,0.9999,0.9999,-12.9289);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#AAA9AD").s().p("ALPKxQgYgBgigFQjLgi3ChfQgLhxgDiEQgEjeAbiAQBNloHkkfQVBOAAnAkIAZAbIAOAQQAPASAKAQQAXAmAFA9QAHBOglA5QgRAagZAVQgQAMggAUQgrAcgxAOQgrANgxAAIgHAAg");
	this.shape_158.setTransform(1869.3093,371.9907,0.9999,0.9999,-12.9289);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-4.2,-4.2,2006.6000000000001,832.1), null);


(lib.Sweet2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("AgFAmQALgGAGgNQAGgMgDgNQgCgMgKgJQgJgJgNgB");
	this.shape.setTransform(27.9617,17.7886,0.9996,0.9996,41.2242);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").p("AgwgIQAHgSAQgKQAQgKAQACQAVAEANAUQANAUgIATQgFALgMAHQgMAIgPAA");
	this.shape_1.setTransform(26.7867,28.0559,0.9996,0.9996,41.2242);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").p("AgfgGQATgJATAIQAQAHAJAO");
	this.shape_2.setTransform(26.9521,38.2483,0.9996,0.9996,41.2242);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").p("AgyAiIAAgEQgBgWAMgQQAMgRATgDQAVgEATARQATAQABAb");
	this.shape_3.setTransform(37.2018,45.012,0.9996,0.9996,41.2242);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").p("AghgdQgGAOAEAPQAEAOANAIQANAKAPgDQARgCALgN");
	this.shape_4.setTransform(92.6803,21.5664,0.9996,0.9996,41.2242);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").p("AgpgKQAFATARAKQARAJAQgGQAPgFAHgOQAIgOgDgR");
	this.shape_5.setTransform(78.5425,8.0026,0.9996,0.9996,41.2242);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").p("AgwANQALATAVAHQAUAGATgKQATgLAFgXQAGgWgOgT");
	this.shape_6.setTransform(66.0373,3.3544,0.9996,0.9996,41.2242);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").p("AAngMQgEgEgKgEQgPgGgNAEQgQAEgKAPQgKAOABAS");
	this.shape_7.setTransform(47.8042,52.5204,0.9996,0.9996,41.2242);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").p("AAvgiQgRgLgSgBQgSgCgOAKQgWAOgDAeQgDAXAKAS");
	this.shape_8.setTransform(60.6565,52.9337,0.9996,0.9996,41.2242);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").p("AAmgyQgMgDgDAAQgPgBgMAGQgMAFgHAMQgIAKgCALQgCATANATQAOATAXAH");
	this.shape_9.setTransform(81.9169,43.0808,0.9996,0.9996,41.2242);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").p("AgIgnQgQAEgKASQgEAFgCAKQgCAOAHAMQAHALAOAEQALAEALgDQAYgFAHgUQAFgMgFgNQgEgNgKgIQgQgNgRAFg");
	this.shape_10.setTransform(87.9937,32.1647,0.9996,0.9996,41.2242);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").p("AgVgmQgQAKgEAYQgDAaAMANQAKAJAQABQANAAANgIQANgIAGgOQAHgPgGgPQgEgNgMgIQgLgHgNgBQgNAAgIAGg");
	this.shape_11.setTransform(82.8542,17.8398,0.9996,0.9996,41.2242);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").p("AABgrQgNABgMAJQgLAIgFANQgHAXAOARQAJAMAQADQAPADAOgHQAQgJAFgVQAFgSgKgQQgIgLgNgEQgIgDgHAAg");
	this.shape_12.setTransform(67.1853,17.3786,0.9996,0.9996,41.2242);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221F20").p("AgFgsQgQACgMAPQgHALgCANQgCANAHAMQAIAOAPAGQAOAHAQgGQAQgGAIgRQAHgRgGgPQgEgQgOgJQgOgJgOACg");
	this.shape_13.setTransform(75.6466,32.459,0.9996,0.9996,41.2242);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221F20").p("AACgoQgPgBgNANQgIAJgCAOQgCAHABAFQACAKAGAKQAHAKAMADQAMAEANgIQANgHAGgNQAGgOgEgPQgEgPgMgIQgHgEgLAAg");
	this.shape_14.setTransform(63.3991,33.5574,0.9996,0.9996,41.2242);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221F20").p("AgRgkQgMAHgEAUQgIAdAQANQAKAJAPgBQANgCAKgJQAMgKACgQQABgPgJgNQgIgLgOgDQgNgEgLAGg");
	this.shape_15.setTransform(71.2928,43.865,0.9996,0.9996,41.2242);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221F20").p("AgJgoQgUAEgIASQgKATANAWQAIALAMAFQANAGAMgEQATgFAIgUQAJgUgKgRQgGgMgOgFQgOgGgMAEg");
	this.shape_16.setTransform(51.9676,42.007,0.9996,0.9996,41.2242);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221F20").p("AgHgtQgOADgLANQgJAMAAAQQAAAPAIAMQAOAVASABQAOAAAMgLQAMgLADgPQAEgOgFgOQgFgQgMgIQgOgIgPAEg");
	this.shape_17.setTransform(38.7189,33.4098,0.9996,0.9996,41.2242);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221F20").p("AgeAzQAIABAKgCQARgDALgNQASgSgDgbQgDgZgUgO");
	this.shape_18.setTransform(40.6613,5.6842,0.9996,0.9996,41.2242);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221F20").p("AgCgtQgbADgKAUQgGAOAFAQQACAFAGALQAPAVATAAQAQAAAMgMQALgNACgQQABgLgEgMQgGgMgKgHQgKgHgQAAg");
	this.shape_19.setTransform(36.2255,16.2243,0.9996,0.9996,41.2242);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").p("AgnADQABANAGAKQAHAMANAEQALAEAMgGQAIgEAEgEQANgMADgTQADgUgNgMQgIgJgNgCQgMgCgMAGQgPAHgFASQgDAQAAAAg");
	this.shape_20.setTransform(50.5629,7.1735,0.9996,0.9996,41.2242);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221F20").p("AgHgvQgPACgKARQgFAJgCAJQgEAOAFAQQAGATAPAGQAOAGAOgGQAPgGAIgMQAJgOgCgQQgCgPgJgLQgSgVgTADg");
	this.shape_21.setTransform(52.0792,22.2815,0.9996,0.9996,41.2242);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221F20").p("AAWgBIgrAD");
	this.shape_22.setTransform(94.7759,36.7579,0.9996,0.9996,41.2242);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221F20").p("AAwgXIhfAv");
	this.shape_23.setTransform(99.2442,34.4265,0.9996,0.9996,41.2242);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221F20").p("AAYgRIguAj");
	this.shape_24.setTransform(97.599,30.1609,0.9996,0.9996,41.2242);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221F20").p("AAfgqIg9BV");
	this.shape_25.setTransform(99.9734,23.2038,0.9996,0.9996,41.2242);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221F20").p("AAWgnIgrBP");
	this.shape_26.setTransform(98.4029,19.801,0.9996,0.9996,41.2242);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221F20").p("AgYATIAygl");
	this.shape_27.setTransform(19.9831,28.3412,0.9996,0.9996,41.2242);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221F20").p("AgeANIA9gZ");
	this.shape_28.setTransform(21.284,20.1445,0.9996,0.9996,41.2242);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#221F20").p("Ag4AcIBxg3");
	this.shape_29.setTransform(17.4261,23.6753,0.9996,0.9996,41.2242);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#221F20").p("AgeAkIA9hI");
	this.shape_30.setTransform(18.8224,30.8793,0.9996,0.9996,41.2242);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#221F20").p("AgXAtIAvhZ");
	this.shape_31.setTransform(19.2034,34.2367,0.9996,0.9996,41.2242);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#221F20").p("AA3iwQg0AEgpAJQgmAHgVAIQgRAGgOAKQgoAbAEAVQABAGAGAGQADADALAIQAMAKAQAFQAOAEAFAGQAHAIgBAQQgCAVAEAPQAJAuAbANQAQAHAdgKQAagJAKAHQAHAFADAPQADAVAIAOQAKASAPAOQARAPAMgDQAKgCAHgUQAEgNAKgvQALg1AThR");
	this.shape_32.setTransform(9.9387,27.7463,0.9996,0.9996,41.2242);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#221F20").p("AiqAVQAWhIAdhDQAVgtAYgFQAPgDAKAGQAFAEADAGQAEAJADAGQAIAWAFAIQAGALAHAEQAEACAGgBQARgBAKAAQAgAAAIAEQAOAGAIARQAFAIACAJQADAPgGATQgGARAEAJQAFAJALAIQAGAFASAKQAOAHAFACQAIADAEAGQAKANgDAWQgDAWgaAVQgWASggAHQgUAEgyADQgmACgpgD");
	this.shape_33.setTransform(107.4436,28.6096,0.9996,0.9996,41.2242);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#221F20").p("Ah5gNQAdANAjAHQASAEAUABQAVACAWgBQAhgCAagGQAVgFASgG");
	this.shape_34.setTransform(33.2671,44.6925,0.9996,0.9996,41.2242);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#221F20").p("AAtErQApgQAlgaIAYgSQAYgUAagcQAVgWAMgPQAug5AVhEQAGgUAEgWQAHghACgeQACgfgFgbQgHgpgVggQgMgUgSgQQgUgUgZgNIgagMQgagJgfgBQgTgBghADIgMABQgsAEgmAOQgVAGgXALQgpATgkAZIgMAIQg6AngmA0QgOAUgHAMQgdAwgLA0IgCAOQgGAnABAhQACAfAGAYQAEAPADAHQAHATALASIAGAKQAHAKALANQAOAOALAJQAPAMAVAK");
	this.shape_35.setTransform(59.2541,26.6806,0.9996,0.9996,41.2242);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F6ED56").s().p("AgKAQQgGgWgCggIACAAQANACAJAJQAKAJACAMQADAMgGANQgGANgLAGIgBABIgHgXg");
	this.shape_36.setTransform(27.7036,17.5957,0.9996,0.9996,41.2242);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#88BF6A").s().p("AgeAzQAKg1AcgwQAUAOADAZQADAbgSASQgLANgRADIgLABIgHAAg");
	this.shape_37.setTransform(40.6613,5.6842,0.9996,0.9996,41.2242);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#88BF6A").s().p("AggAYQgGgLgCgFQgFgPAGgPQAKgUAbgCQAQgBAKAHQAKAHAGAMQAEAMgBALQgCAQgLAMQgMAOgQAAQgTAAgPgWg");
	this.shape_38.setTransform(36.2255,16.2243,0.9996,0.9996,41.2242);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#F6ED56").s().p("AgMAqQgNgEgHgMQgGgKgBgNIADgQQAFgSAPgHQAMgGAMACQANACAIAJQANAMgDAUQgDATgNAMQgEAEgIAEQgIADgGAAIgJgBg");
	this.shape_39.setTransform(50.5629,7.1735,0.9996,0.9996,41.2242);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F6ED56").s().p("AgBAwQgSgBgOgVQgIgMAAgPQAAgQAJgMQALgNAOgDQAPgEAOAIQAMAIAFAQQAFAOgEAOQgDAPgMALQgMALgNAAIgBAAg");
	this.shape_40.setTransform(38.7189,33.4098,0.9996,0.9996,41.2242);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#88BF6A").s().p("AgPAnQgWgHgKgTIgBgCIALgIQAlgYAogTQANATgFAWQgFAXgUALQgLAGgMAAQgHAAgIgCg");
	this.shape_41.setTransform(65.9997,3.3214,0.9996,0.9996,41.2242);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#88BF6A").s().p("AgRAtQgPgGgGgTQgFgQAEgOQACgJAFgJQAKgRAPgCQATgDASAVQAJALACAPQACAQgJAOQgIAMgPAGQgHADgHAAQgHAAgHgDg");
	this.shape_42.setTransform(52.0792,22.2815,0.9996,0.9996,41.2242);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F6ED56").s().p("AgIArQgQgDgJgMQgOgRAHgXQAFgNALgIQAMgJANgBQAHAAAIADQANAEAIALQAKAQgFASQgFAVgQAJQgKAFgLAAIgIgBg");
	this.shape_43.setTransform(67.1853,17.3786,0.9996,0.9996,41.2242);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#88BF6A").s().p("AgTAVQgRgKgFgTQAngNArgFQADARgIAOQgHAOgPAFQgGADgHAAQgJAAgLgGg");
	this.shape_44.setTransform(78.674,7.8525,0.9996,0.9996,41.2242);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#88BF6A").s().p("AgOAnQgMgFgIgLQgNgWAKgTQAIgSAUgEQAMgEAOAGQAOAFAGAMQAKARgJAUQgIAUgTAFIgKACQgHAAgIgEg");
	this.shape_45.setTransform(51.9676,42.007,0.9996,0.9996,41.2242);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F6ED56").s().p("AgKAoQgMgDgHgKQgGgKgCgKQgBgFACgHQACgOAIgJQANgNAPABQALAAAHAEQAMAIAEAPQAEAPgGAOQgGANgNAHQgJAFgIAAIgIgBg");
	this.shape_46.setTransform(63.3991,33.5574,0.9996,0.9996,41.2242);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F6ED56").s().p("AgdgGQAKgOAQgEQANgEAPAGQAKAEAEAEQglAZgoAQQgBgTAKgOg");
	this.shape_47.setTransform(47.644,52.7033,0.9996,0.9996,41.2242);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F6ED56").s().p("AggAjQgMgNADgaQAEgYAQgKQAIgGANAAQANABALAHQAMAIAEANQAGAPgHAPQgGAOgNAIQgNAIgNAAQgQgBgKgJg");
	this.shape_48.setTransform(82.8542,17.8398,0.9996,0.9996,41.2242);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#88BF6A").s().p("AgOAqQgPgGgIgOQgHgMACgNQACgNAHgLQAMgPAQgCQAOgCAOAJQAOAJAEAQQAGAPgHARQgIARgQAGQgIADgHAAQgHAAgIgEg");
	this.shape_49.setTransform(75.6466,32.459,0.9996,0.9996,41.2242);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#88BF6A").s().p("AgSAWQgNgIgEgOQgEgPAGgOIAbALQAXANAVATQgLANgRACIgHABQgLAAgKgIg");
	this.shape_50.setTransform(92.6803,21.5664,0.9996,0.9996,41.2242);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F6ED56").s().p("AANA2QgXgIgOgTQgNgSACgTQACgMAIgKQAHgLAMgGQAMgGAPACIAPADQgCAegHAgQgEAXgHAUg");
	this.shape_51.setTransform(82.0244,43.2415,0.9996,0.9996,41.2242);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8D4995").s().p("AiGEwQgJgPgQgHQgUgIgTAJIAAAAQgVgKgPgMIACgBQAPgBAMgHQALgHAFgMQAIgTgMgUQgNgVgWgDQgRgDgQAKQgQAKgGASQgLgSgHgTIABAAQANgHAGgMQAGgNgDgNQgDgNgKgIQgKgJgNgCIgCAAQgBghAGgnIACgOQAJABAJgBQASgEAMgLQARgTgDgcQgDgYgTgOIAVggQAmg0A6gnIABACQALATAVAHQAVAGATgKQATgLAFgXQAGgXgOgTQAXgLAVgGQAFAUAQAJQARAKARgGQAPgFAHgPQAIgOgDgRIAMgBQAhgDATABQAfABAaAJQgHAOAFAQQAEAOAMAJQANAJARgCQAQgCALgNQASAQAMAUQAVAgAHApQAFAbgCAfIgPgDQgPgBgMAGQgMAFgIAMQgHAKgCALQgDAUANATQAOASAYAHIAEABQgVBEguA5QgQgMgTgBQgSgBgPAJQgWAPgDAfQgDAXALASIACADIgYASQgEgEgKgEQgPgGgOAEQgQAEgKAPQgKAPABASIAAABQgSAGgVAGIAAgBQAAgagTgSQgTgQgWAEQgSADgMAQQgNARABAWIAAAGQgUgBgSgEgAh2CCQgOADgKANQgJAMAAAQQAAAQAIAMQANAVATABQAOAAANgLQALgLAEgPQAEgPgFgOQgFgQgNgIQgJgGgKAAIgLACgAAkBwQgUAEgIASQgJAVAMAVQAIALAMAFQANAGANgDQATgFAIgVQAJgVgKgRQgGgMgOgFQgIgDgJAAIgKABgAkZApQgHAOAGAQQABAFAHAMQAPAVAUAAQAPAAAMgNQAMgMACgRQABgMgFgLQgFgNgLgHQgKgGgQAAQgbACgKAVgAC5ADQgLAHgFAUQgHAeAQANQAKAJAOgBQAPgCAKgJQAMgKABgQQACgQgJgNQgJgLgOgDIgKgBQgIAAgHADgAAygNQgJAJgCAMQgBAJABAEQABALAGAJQAIALALADQANADAOgIQAMgHAGgNQAHgOgEgQQgFgOgLgHQgIgFgKAAIgBAAQgQAAgMANgAhagqQgPACgKARQgFAJgCAIQgEAPAFAQQAGASAPAGQAOAGAPgGQAPgFAIgNQAJgNgCgRQgCgPgJgLQgPgSgRAAIgGABgACbh3QgQADgMAPQgHAKgCANQgCAOAHAMQAIAOAPAHQAPAGAQgGQAQgGAIgRQAHgQgGgRQgEgPgOgJQgMgIgMAAIgFAAgAjSiKQgPAHgFASIgDASQABAMAGAKQAHANANAEQALADANgGQAIgDAEgEQANgMADgUQADgUgNgNQgIgIgNgCIgHgBQgJAAgJAEgAgailQgLAIgFANQgHAYAOARQAJAMAQADQAPADAOgHQAQgJAFgVQAFgTgKgQQgIgLgNgEQgIgDgGAAQgOABgMAJgADzjFQgQAEgKASQgEAFgCAKQgCAPAHAMQAHALAOAEQALAEAMgDQAYgFAHgUQAFgMgFgOQgEgNgKgIQgMgKgMAAIgKACgABhkOQgQAKgEAYQgDAbAMANQAKAJAQABQAOAAANgIQANgIAGgOQAHgQgGgPQgEgNgMgIQgLgHgNgBQgOAAgIAGg");
	this.shape_52.setTransform(58.5953,27.4324,0.9996,0.9996,41.2242);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#88BF6A").s().p("AgZAhQgQgNAIgdQAEgUAMgHQALgGANAEQAOADAIALQAJANgBAPQgCAQgMAKQgKAJgNACIgDAAQgNAAgJgIg");
	this.shape_53.setTransform(71.2928,43.865,0.9996,0.9996,41.2242);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F6ED56").s().p("AgmAuQgKgSADgXQADgeAWgPQAOgJASABQASABARAMQgMAPgVAVQgaAcgXAUg");
	this.shape_54.setTransform(60.5576,53.0465,0.9996,0.9996,41.2242);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F6ED56").s().p("AgfgHQATgJATAIQAQAHAJAOQgigHgdgNg");
	this.shape_55.setTransform(26.8686,38.3436,0.9996,0.9996,41.2242);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F6ED56").s().p("AgOAnQgOgEgHgLQgHgMACgOQACgKAEgFQAKgSAQgEQARgFAQANQAKAIAEANQAFANgFAMQgHAUgYAFIgIABQgHAAgHgCg");
	this.shape_56.setTransform(87.9937,32.1647,0.9996,0.9996,41.2242);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#88BF6A").s().p("AgYAWQgLgMgGgKIgHgJQAHgSAQgKQAQgKAQACQAVAEANAUQANAVgIASQgFALgMAIQgMAHgPAAIgBACQgLgKgOgOg");
	this.shape_57.setTransform(26.7373,28.1122,0.9996,0.9996,41.2242);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#88BF6A").s().p("AgzAgIABgGQgBgWAMgQQAMgQATgDQAVgEATAQQATASABAZIAAABQgbAGgfACIgSAAIgbgBg");
	this.shape_58.setTransform(36.9461,45.2717,0.9996,0.9996,41.2242);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#68BA9B").s().p("Ag8CoQgIgpgVggQgMgUgRgQQgVgUgYgNIgIgEIABgBQAWhIAehDQAUgtAZgFQAPgDAKAGQAFAEADAGIAGAPQAJAWAEAIQAGALAIAEQAEACAFgBIAcgBQAgAAAHAEQAOAGAJARQAEAIACAJQAEAPgHATQgGARAFAJQAEAJALAIQAHAFASAKIATAJQAHADAEAGQAKANgDAWQgCAWgaAVQgWASghAHQgUAEgxADIgfABQgYAAgYgCg");
	this.shape_59.setTransform(107.406,28.5766,0.9996,0.9996,41.2242);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#68BA9B").s().p("ABLClQgPgOgKgSQgIgOgDgVQgDgPgHgFQgKgHgaAJQgdAKgQgHQgbgNgJguQgEgPACgVQABgQgHgIQgFgGgOgEQgQgFgMgKIgOgLQgGgGgBgGQgEgVAogbQAOgKARgGQAVgIAmgHQApgJA0gEIAHAWQAHATALASIAGAKQAHAKALANQAOAOALAJQAPAMAVAKQgTBRgLA1QgKAvgEANQgHAUgKACIgEAAQgLAAgOgMg");
	this.shape_60.setTransform(9.9436,27.7506,0.9996,0.9996,41.2242);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sweet2, new cjs.Rectangle(-1.2,-0.5,121.2,55.7), null);


(lib.Sweet1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("AAWgBIgrAD");
	this.shape.setTransform(94.907,35.858,0.9997,0.9997,39.9667);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").p("AAwgXIhfAv");
	this.shape_1.setTransform(99.3043,33.4128,0.9997,0.9997,39.9667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").p("AAXgRIgtAj");
	this.shape_2.setTransform(97.5849,29.2,0.9997,0.9997,39.9667);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").p("AAfgqIg9BV");
	this.shape_3.setTransform(99.7871,22.1758,0.9997,0.9997,39.9667);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").p("AAVgnIgqBP");
	this.shape_4.setTransform(98.1613,18.8241,0.9997,0.9997,39.9667);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").p("AghhsQAFAvALArQARBCAiA8");
	this.shape_5.setTransform(89.7569,33.2369,0.9997,0.9997,39.9667);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").p("Ag4iuQAOBYAZBPQAdBeAtBX");
	this.shape_6.setTransform(84.2334,32.3627,0.9997,0.9997,39.9667);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").p("AhHjYQAZB7ApB0QAhBiAtBe");
	this.shape_7.setTransform(77.5537,31.2355,0.9997,0.9997,39.9667);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").p("AhOjvQAUCFArB7QAlBxA6Bs");
	this.shape_8.setTransform(72.2782,30.4009,0.9997,0.9997,39.9667);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").p("AhWj/QASCUAzCLQApBzBABs");
	this.shape_9.setTransform(64.9931,29.0463,0.9997,0.9997,39.9667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").p("AhekEQATCdA6CQQAtBzBEBn");
	this.shape_10.setTransform(58.9384,27.8958,0.9997,0.9997,39.9667);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").p("AhbkAQAVCVA4CQQArByA/Bo");
	this.shape_11.setTransform(50.983,26.2675,0.9997,0.9997,39.9667);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").p("AhXjwQAVB/ApBxQAtCABEBv");
	this.shape_12.setTransform(44.6186,24.678,0.9997,0.9997,39.9667);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221F20").p("AhNjLQAVB0AqBnQAmBiA3BY");
	this.shape_13.setTransform(37.107,23.1718,0.9997,0.9997,39.9667);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221F20").p("Ag8iOQAKBYAmBOQAfBCArAz");
	this.shape_14.setTransform(30.0706,22.9747,0.9997,0.9997,39.9667);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221F20").p("AgYATIAxgl");
	this.shape_15.setTransform(19.9218,29.068,0.9997,0.9997,39.9667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221F20").p("AgeANIA9gZ");
	this.shape_16.setTransform(21.0425,20.844,0.9997,0.9997,39.9667);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221F20").p("Ag4AcIBxg3");
	this.shape_17.setTransform(17.2627,24.459,0.9997,0.9997,39.9667);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221F20").p("AgeAkIA9hI");
	this.shape_18.setTransform(18.8553,31.6634,0.9997,0.9997,39.9667);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221F20").p("AgXAtIAvhZ");
	this.shape_19.setTransform(19.2715,34.9797,0.9997,0.9997,39.9667);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").p("AA3iwQg0AEgpAJQhAAMgaATQgoAbAEAVQABAGAGAGQADADALAIQAMAKAQAFQAOAEAFAGQAHAIgBAQQgCAVAEAPQAMAwAYALQAQAHAdgKQAagJAKAHQAHAFADAPQADAVAIAOQALASAOAOQARAPAMgDQALgCAGgUQAEgNAKgvIAeiG");
	this.shape_20.setTransform(9.8665,28.6943,0.9997,0.9997,39.9667);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221F20").p("AiqAVQAWhIAdhDQAVgtAZgFQAOgEAKAHQAFAEADAGQAEAJADAGQAJAXAEAHQAGALAIAEQADACAGgBQARgBAKAAQAgAAAIAEQAOAGAIARQAFAIACAJQADAPgGATQgGARAFAJQAEAJALAIQAGAFATAKQAOAHAEACQAHADAFAGQAKANgDAWQgDAWgZAVQgWASghAHQgUAEgyADQgmACgpgD");
	this.shape_21.setTransform(107.3818,27.4084,0.9997,0.9997,39.9667);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221F20").p("AgRjCQgfA0gJA0IgDANQgKBHAOA3QAKAmAVAfQALAPAHAIQAZAcAiARIAQAH");
	this.shape_22.setTransform(33.0004,18.6035,0.9997,0.9997,39.9667);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221F20").p("AjOEiQAgANAnAEQAdAEAfgCIARgBQAggDAegKQAlgMAmgXQAZgPAVgSQASgQAfgeIAHgIQAUgVAUgcQAZgkARgpQAOgkAHgiIAEgYQAJg1gIgsQgGgngWgjQgRgbgYgTQgOgLgUgMIgHgDQgPgHgPgEQgegJgsACIgYABQgDAAgaADQgjAGglAMQgfALgeAQQgXAMgeAVIgPAKQghAWgWAXQgUATgSAZQgJAMgLAS");
	this.shape_23.setTransform(60.3407,28.9048,0.9997,0.9997,39.9667);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#D73189").s().p("AAcC5IgBAAQgqgyghhCQglhOgKhZIgDAAQAKg0Aeg0QAWB0AoBnQAnBiA4BYQgngFgggNg");
	this.shape_24.setTransform(35.6412,21.8291,0.9997,0.9997,39.9667);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#D73189").s().p("Ag5AXQgphxgVh/QAXgWAhgWQAUCVA3CPQAsBzA/BnQgeAKghADQhDhvguiAg");
	this.shape_25.setTransform(48.5476,24.9501,0.9997,0.9997,39.9667);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#D73189").s().p("AgoA3Qg6iPgUidQAegQAggLIAAABQASCUAzCLQApB0BABrIAAABQgVASgZAQQhDhngth0g");
	this.shape_26.setTransform(61.6677,28.283,0.9997,0.9997,39.9667);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#D73189").s().p("AgkAUQgqh6gUiFIAcgEIAYgBQAaB7AnB1QAjBhAsBeIABABQgUAcgUAVQg6hsglhxg");
	this.shape_27.setTransform(74.0299,31.4698,0.9997,0.9997,39.9667);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#D73189").s().p("AgegHQgZhPgOhXQAQADAPAIIAHADQAUAMAMALQAFAvAMArQARBBAjA9IgFAXQgGAkgOAjQgthWgehfg");
	this.shape_28.setTransform(85.2636,33.1237,0.9997,0.9997,39.9667);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#D73189").s().p("Ag9CoQgGgngWgiQgRgbgYgUQgOgLgUgLIgHgEIABgBQAWhIAdhDQAVgtAZgFQAOgEAKAHQAFAEADAGIAHAPIANAeQAGALAIAEQADACAGgBIAbgBQAgAAAIAEQAOAGAIARQAFAIACAJQADAPgGATQgGARAFAJQAEAJALAIQAGAFATAKIASAJQAHADAFAGQAKANgDAWQgDAWgZAVQgWASghAHQgUAEgyADIgeABQgYAAgZgCg");
	this.shape_29.setTransform(107.3627,27.3924,0.9997,0.9997,39.9667);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D73189").s().p("ABLClQgOgOgLgSQgIgOgDgVQgDgPgHgFQgKgHgaAJQgdAKgQgHQgYgLgMgwQgEgPACgVQABgQgHgIQgFgGgOgEQgQgFgMgKIgOgLQgGgGgBgGQgEgVAogbQAagTBAgMQApgJA0gEQAKAmAVAfQALAPAHAIQAbAcAiARIgeCGQgKAvgEANQgGAUgLACIgEAAQgLAAgOgMg");
	this.shape_30.setTransform(9.8709,28.698,0.9997,0.9997,39.9667);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3974B7").s().p("AAzCHQgigRgZgdQgIgHgKgPQgWgfgKglQgNg4AKhHIACgNIADAAQAKBYAmBPQAgBCAqAyg");
	this.shape_31.setTransform(29.8375,22.6063,0.9997,0.9997,39.9667);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3974B7").s().p("AAoDvQg2hYgnhiQgphngWh0QALgSAKgMQARgYAUgUQAVB/AoBxQAtCABFBvIgRACIgSAAQgWAAgUgCg");
	this.shape_32.setTransform(42.4207,22.8446,0.9997,0.9997,39.9667);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#3974B7").s().p("Ag0A7Qg4iPgUiVIAOgLQAfgVAWgLQAUCdA5CQQAuBzBDBnQglAXgmALQg+hngshzg");
	this.shape_33.setTransform(55.3258,26.9788,0.9997,0.9997,39.9667);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#3974B7").s().p("AA7EJQg/hsgphzQg0iLgRiUIgBgCQAlgMAkgGQAUCFAqB8QAmBwA6BsIgHAIQgfAegSAQg");
	this.shape_34.setTransform(67.8226,30.0827,0.9997,0.9997,39.9667);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#3974B7").s().p("AAzDYQgshegihjQgphzgZh7QAsgCAeAJQANBYAYBPQAeBeAuBXQgQApgaAkg");
	this.shape_35.setTransform(79.2351,32.6128,0.9997,0.9997,39.9667);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#3974B7").s().p("AgTgRQgMgrgEgvQAYATAQAbQAWAjAGAlQAIAsgJA2Qghg9gShBg");
	this.shape_36.setTransform(90.0339,33.339,0.9997,0.9997,39.9667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sweet1, new cjs.Rectangle(-0.9,-0.6,122,55.800000000000004), null);


(lib.tooLong = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Ugh, this is taking \nforever! Lets just go \nsomewhere else.", "bold 72px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 80;
	this.text.lineWidth = 944;
	this.text.parent = this;
	this.text.setTransform(112.683,39.35,0.1879,0.1879);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah/DsQgOgXACgbQABgPAFgNQgwgBg4gLQg6gLgZgJQgqgNgfgZQgdgWgQgSQgbghgHgnQgJgwAWgwQAMgZARgUQARgUAZgNQAQgJAmgPQA/gZCPgNQA3gFBEgDQBWgDA/ADQArACAoAHIAWAEQCSAcAtA7QAPAWAJAYQASAvgJAuQgHAggVAcQgLAQgXAXQg6A3hgAUQgkAIgmAEQgjADhAABQhWAChagEQgIAMgEAPQgIAaAHAYQAFAUANAPQgagLgOgYg");
	this.shape.setTransform(110.4853,68.0566,1.9672,1.9672);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").ss(0.5).p("AkJE0QgJAagCAdQgEA3AbAsQAcAwAzAWQgagegKgnQgNgwAQg0QAIgdAQgYQCxAJCsgEQB/gDBEgGQBMgHBHgQQC+goBzhtQAugtAWgfQApg5ANg/QAEgVACgVQAFhHgbhIQgSgwgegqQgYghgogbQhohJjSgpIgtgHQhPgNhUgEQh9gHisAHQiFAFhtAKQkbAah9AyQhMAdggARQgxAbgiAoQgiAmgXAzQgsBfASBfQAOBNA2BBQAfAkA5AsQA+AxBTAbQASAGAbAHQAvAMBJAOQBvAVBeACg");
	this.shape_1.setTransform(110.6043,68.5933);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tooLong, new cjs.Rectangle(15.4,13.6,190.5,109.2), null);


(lib.SpeechPol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Hey You! \nStop right there!", "bold 7px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 8;
	this.text.lineWidth = 74;
	this.text.parent = this;
	this.text.setTransform(47.15,13.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5).p("ACGCZQAPArgVAjQgOAYgaALQANgPAFgTQAKglgXgpQhaAFhXgCQhAgCgigDQgmgDgkgIQhggVg6g3QgXgWgMgQQgUgbgHghQgJguASgwQAJgYAPgVQAqg6CUgeIAXgEQAogGArgCQA/gEBWAEQBDACA3AFQCQAOA/AZQAmAPAQAIQAYAOASAUQAQARANAcQAWAwgJAwQgHAmgcAhQgOASgeAXQgfAYgqAOQgZAIg7AMQg0AKgzABg");
	this.shape.setTransform(47.6044,27.5044);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABqDsQAKglgXgoQhaAEhXgCQhAgBgigDQgmgEgkgIQhggUg6g3QgXgWgMgRQgUgcgHggQgJgtASgwQAJgZAPgVQAqg6CUgdIAXgEQAogHArgCQA/gDBWADQBDADA3AFQCQANA/AZQAmAPAQAJQAYANASAUQAQASANAbQAWAwgJAwQgHAngcAhQgOARgeAXQgfAZgqANQgZAJg7ALQg0ALgzABQAPAqgVAkQgOAXgaAMQANgPAFgUg");
	this.shape_1.setTransform(47.6044,27.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SpeechPol, new cjs.Rectangle(-1,-1,97.2,56.2), null);


(lib.SpeechLast = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("ZOOM", "bold 8px 'Arial'", "#DB615B");
	this.text.textAlign = "center";
	this.text.lineHeight = 9;
	this.text.lineWidth = 25;
	this.text.parent = this;
	this.text.setTransform(28.05,27.35);

	this.text_1 = new cjs.Text("I need to \nZOOM out of here!", "bold 8px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 9;
	this.text_1.lineWidth = 74;
	this.text_1.parent = this;
	this.text_1.setTransform(51.1,18.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221E1F").ss(0.5,1,1).p("AEYhUQAeBJgTBFQgPA3guArQgcAZgzAdQhSAxhlAJQg5AFhKgIQhygOg6gVQhogmgkhOQghhGAahZQANgvAWgiQA8heCCggQBIgSBrABQBtABBgArQBJAgAZAhIAjAtQARgDASgFQAwgNAsgWQA8gfAvgwQhEBehiAqQgXAJgZAIg");
	this.shape.setTransform(61.2644,26.9868);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AijEJQhygOg6gVQhogmgkhOQghhGAahZQANgvAWgiQA8heCCggQBIgSBrABQBtABBgArQBJAgAZAhIAjAtQARgDASgFQAwgNAsgWQA8gfAvgwQhEBehiAqQgXAJgZAIQAeBJgTBFQgPA3guArQgcAZgzAdQhSAxhlAJQgVACgYAAQgnAAgvgFg");
	this.shape_1.setTransform(61.2644,26.9868);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SpeechLast, new cjs.Rectangle(10.9,-1,100.8,56), null);


(lib.Speech22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("So where \nshould we go?", "bold 7px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 8;
	this.text.lineWidth = 57;
	this.text.parent = this;
	this.text.setTransform(47.65,14.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5).p("ACGCZQAPArgVAjQgOAYgaALQANgPAFgTQAKglgXgpQhaAFhXgCQhAgCgigDQgmgDgkgIQhggVg6g3QgXgWgMgQQgUgbgHghQgJguASgwQAJgYAPgVQAqg6CUgeIAXgEQAogGArgCQA/gEBWAEQBDACA3AFQCQAOA/AZQAmAPAQAIQAYAOASAUQAQARANAcQAWAwgJAwQgHAmgcAhQgOASgeAXQgfAYgqAOQgZAIg7AMQg0AKgzABg");
	this.shape.setTransform(47.6044,27.5044);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABqDsQAKglgXgoQhaAEhXgCQhAgBgigDQgmgEgkgIQhggUg6g3QgXgWgMgRQgUgcgHggQgJgtASgwQAJgZAPgVQAqg6CUgdIAXgEQAogHArgCQA/gDBWADQBDADA3AFQCQANA/AZQAmAPAQAJQAYANASAUQAQASANAbQAWAwgJAwQgHAngcAhQgOARgeAXQgfAZgqANQgZAJg7ALQg0ALgzABQAPAqgVAkQgOAXgaAMQANgPAFgUg");
	this.shape_1.setTransform(47.6044,27.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Speech22, new cjs.Rectangle(-1,-1,97.2,56.2), null);


(lib.Speech11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("SPACE", "bold 6px 'Arial'", "#DB615B");
	this.text.textAlign = "center";
	this.text.lineHeight = 6;
	this.text.lineWidth = 19;
	this.text.parent = this;
	this.text.setTransform(61.4,25.7);

	this.text_1 = new cjs.Text("I'm really hungry.\nI wonder if I can get \nany food from that guy if I close the SPACE \nbetween us.", "bold 6px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 6;
	this.text_1.lineWidth = 79;
	this.text_1.parent = this;
	this.text_1.setTransform(48.4,7.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5).p("AiFCZQgFANgBAPQgCAcAOAWQAOAYAaALQgNgPgFgTQgHgZAIgaQAEgPAIgMQBaAFBWgCQBAgCAjgDQAmgDAkgIQBggVA6g3QAXgWALgQQAVgcAHggQAJgugSgwQgJgYgPgVQgtg7iSgdIgWgEQgogGgrgCQg/gEhWAEQhEACg3AFQiPAOg/AZQgmAPgQAIQgZAOgRAUQgRATgMAaQgWAwAJAwQAHAmAbAhQAQASAdAXQAfAYAqAOQAZAIA6AMQA4AKAwABg");
	this.shape.setTransform(47.5855,27.5003);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah/DsQgOgXACgbQABgPAFgNQgwgBg4gLQg6gLgZgJQgqgNgfgZQgdgWgQgSQgbghgHgnQgJgwAWgwQAMgZARgUQARgUAZgNQAQgJAmgPQA/gZCPgNQA3gFBEgDQBWgDA/ADQArACAoAHIAWAEQCSAcAtA7QAPAWAJAYQASAvgJAuQgHAggVAcQgLAQgXAXQg6A3hgAUQgkAIgmAEQgjADhAABQhWAChagEQgIAMgEAPQgIAaAHAYQAFAUANAPQgagLgOgYg");
	this.shape_1.setTransform(47.5855,27.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Speech11, new cjs.Rectangle(-1,-1,97.2,56.2), null);


(lib.Speech2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Hey Sam,\nthis is fun and all but \nmaybe we should get back \nto the mission?", "bold 6px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 7;
	this.text.lineWidth = 86;
	this.text.parent = this;
	this.text.setTransform(47.85,8.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5).p("ACGCZQAPArgVAjQgOAYgaALQANgPAFgTQAKglgXgpQhaAFhXgCQhAgCgigDQgmgDgkgIQhggVg6g3QgXgWgMgQQgUgbgHghQgJguASgwQAJgYAPgVQAqg6CUgeIAXgEQAogGArgCQA/gEBWAEQBDACA3AFQCQAOA/AZQAmAPAQAIQAYAOASAUQAQARANAcQAWAwgJAwQgHAmgcAhQgOASgeAXQgfAYgqAOQgZAIg7AMQg0AKgzABg");
	this.shape.setTransform(47.6044,27.5044);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABqDsQAKglgXgoQhaAEhXgCQhAgBgigDQgmgEgkgIQhggUg6g3QgXgWgMgRQgUgcgHggQgJgtASgwQAJgZAPgVQAqg6CUgdIAXgEQAogHArgCQA/gDBWADQBDADA3AFQCQANA/AZQAmAPAQAJQAYANASAUQAQASANAbQAWAwgJAwQgHAngcAhQgOARgeAXQgfAZgqANQgZAJg7ALQg0ALgzABQAPAqgVAkQgOAXgaAMQANgPAFgUg");
	this.shape_1.setTransform(47.6044,27.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Speech2, new cjs.Rectangle(-1,-1,97.2,56.2), null);


(lib.Speech1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("SHIP", "bold 6px 'Arial'", "#DB615B");
	this.text.textAlign = "center";
	this.text.lineHeight = 7;
	this.text.lineWidth = 15;
	this.text.parent = this;
	this.text.setTransform(35.8,26.5);

	this.text_1 = new cjs.Text("You're such a buzkill \nRodrick! Ugh, back to the \nSHIP it is then", "bold 6px 'Arial'", "#333333");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 7;
	this.text_1.lineWidth = 85;
	this.text_1.parent = this;
	this.text_1.setTransform(48.95,12.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5).p("AiFCZQgFANgBAPQgCAcAOAWQAOAYAaALQgNgPgFgTQgHgZAIgaQAEgPAIgMQBaAFBWgCQBAgCAjgDQAmgDAkgIQBggVA6g3QAXgWALgQQAVgcAHggQAJgugSgwQgJgYgPgVQgtg7iSgdIgWgEQgogGgrgCQg/gEhWAEQhEACg3AFQiPAOg/AZQgmAPgQAIQgZAOgRAUQgRATgMAaQgWAwAJAwQAHAmAbAhQAQASAdAXQAfAYAqAOQAZAIA6AMQA4AKAwABg");
	this.shape.setTransform(47.5855,27.5003);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ah/DsQgOgXACgbQABgPAFgNQgwgBg4gLQg6gLgZgJQgqgNgfgZQgdgWgQgSQgbghgHgnQgJgwAWgwQAMgZARgUQARgUAZgNQAQgJAmgPQA/gZCPgNQA3gFBEgDQBWgDA/ADQArACAoAHIAWAEQCSAcAtA7QAPAWAJAYQASAvgJAuQgHAggVAcQgLAQgXAXQg6A3hgAUQgkAIgmAEQgjADhAABQhWAChagEQgIAMgEAPQgIAaAHAYQAFAUANAPQgagLgOgYg");
	this.shape_1.setTransform(47.5855,27.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Speech1, new cjs.Rectangle(-1,-1,97.2,56.2), null);


(lib.Speech_lose = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Watch where \nyou're going Sam!", "bold 71px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 79;
	this.text.lineWidth = 858;
	this.text.parent = this;
	this.text.setTransform(114.083,42.35,0.1879,0.1879);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah/DsQgOgXACgbQABgPAFgNQgwgBg4gLQg6gLgZgJQgqgNgfgZQgdgWgQgSQgbghgHgnQgJgwAWgwQAMgZARgUQARgUAZgNQAQgJAmgPQA/gZCPgNQA3gFBEgDQBWgDA/ADQArACAoAHIAWAEQCSAcAtA7QAPAWAJAYQASAvgJAuQgHAggVAcQgLAQgXAXQg6A3hgAUQgkAIgmAEQgjADhAABQhWAChagEQgIAMgEAPQgIAaAHAYQAFAUANAPQgagLgOgYg");
	this.shape.setTransform(110.4853,68.0566,1.9672,1.9672);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").ss(0.5).p("AkJE0QgJAagCAdQgEA3AbAsQAcAwAzAWQgagegKgnQgNgwAQg0QAIgdAQgYQCxAJCsgEQB/gDBEgGQBMgHBHgQQC+goBzhtQAugtAWgfQApg5ANg/QAEgVACgVQAFhHgbhIQgSgwgegqQhZh1khg5IgtgHQhPgNhUgEQh9gHisAHQiFAFhtAKQkbAah9AyQhMAdggARQgxAbgiAoQgiAmgXAzQgsBfASBfQAOBNA2BBQAfAkA5AsQA+AxBTAbQAyARBzAWQBvAVBeACg");
	this.shape_1.setTransform(110.6043,68.5933);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").ss(0.5).p("AELEzQAJAaACAdQADA3gbAsQgcAwgyAWQAZgdAKgnQANgxgQg0QgIgdgPgYQiyAJisgEQh/gChEgGQhLgIhIgPQi+gphzhsQgugtgWgfQgog5gOg/QgEgVgCgVQgFhHAbhJQASgvAegqQBYh1Ehg5IAtgIQAVgDATgDQA8gIA/gDQABAAABAAQB9gHCrAHQBpAEBaAHQAYACAXACQAlAEAiAEQDkAZBtArQBMAdAgARQAwAbAjAnQAhAnAYAzQAsBegSBfQgNBOg3BBQgfAjg5AuQg+AwhTAbQgyAQhyAXQhwAVhdACg");
	this.shape_2.setTransform(125.7457,68.9031);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{scaleX:1.9672,scaleY:1.9672,skewX:0,skewY:0,x:110.4853,y:68.0566}},{t:this.text,p:{scaleX:0.1879,rotation:0,x:114.083,y:42.35,text:"Watch where \nyou're going Sam!",lineHeight:79.3,lineWidth:858}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{scaleX:1.9671,scaleY:1.9671,skewX:-0.0329,skewY:179.9671,x:125.9154,y:68.2816}},{t:this.text,p:{scaleX:0.1784,rotation:-0.5677,x:128.3042,y:42.529,text:"This is stupid. Let's \njust go somewhere else",lineHeight:81.3,lineWidth:944}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.4,12.7,205.6,110.39999999999999);


(lib.Speech_ice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("There is no\nway I'm going down\nthat cold hell!", "bold 7px 'Arial'", "#333333");
	this.text.textAlign = "center";
	this.text.lineHeight = 8;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(47.35,10.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5).p("ACGCZQAPArgVAjQgOAYgaALQANgPAFgTQAKglgXgpQhaAFhXgCQhAgCgigDQgmgDgkgIQhggVg6g3QgXgWgMgQQgUgbgHghQgJguASgwQAJgYAPgVQAqg6CUgeIAXgEQAogGArgCQA/gEBWAEQBDACA3AFQCQAOA/AZQAmAPAQAIQAYAOASAUQAQARANAcQAWAwgJAwQgHAmgcAhQgOASgeAXQgfAYgqAOQgZAIg7AMQg0AKgzABg");
	this.shape.setTransform(47.6044,27.5044);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABqDsQAKglgXgoQhaAEhXgCQhAgBgigDQgmgEgkgIQhggUg6g3QgXgWgMgRQgUgcgHggQgJgtASgwQAJgZAPgVQAqg6CUgdIAXgEQAogHArgCQA/gDBWADQBDADA3AFQCQANA/AZQAmAPAQAJQAYANASAUQAQASANAbQAWAwgJAwQgHAngcAhQgOARgeAXQgfAZgqANQgZAJg7ALQg0ALgzABQAPAqgVAkQgOAXgaAMQANgPAFgUg");
	this.shape_1.setTransform(47.6044,27.0875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Speech_ice, new cjs.Rectangle(-1,-1,97.2,56.2), null);


(lib.Snow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgFAAgJQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgFAGgJAAQgHAAgGgGg");
	this.shape.setTransform(559.925,235.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgFAHQgEgDAAgEQAAgDAEgDQADgCACAAQAEAAADACQACADAAADQAAAJgJAAQgDAAgCgCg");
	this.shape_1.setTransform(539.45,217.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgDgEgBgFQABgEADgEQAEgDAEgBQAFABAEADQADAEABAEQgBAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape_2.setTransform(533.35,177.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_3.setTransform(564.2,139.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGgBAIQABAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_4.setTransform(535.25,124.925);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_5.setTransform(540.375,120.35);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgIAAgNQAAgLAJgJQAIgJAMAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgMAAgIgJg");
	this.shape_6.setTransform(532.925,122.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgCgDAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_7.setTransform(560.525,95.025);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_8.setTransform(552.525,38.875);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_9.setTransform(560.15,77.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgFAAgIQAAgGAGgGQAFgFAHgBQAHABAGAFQAGAGgBAGQABAIgGAFQgGAGgHgBQgHABgFgGg");
	this.shape_10.setTransform(565.65,60.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgJAAgPQAAgNAKgLQAKgKANABQAOgBAKAKQAKALAAANQAAAPgKAJQgKALgOAAQgNAAgKgLg");
	this.shape_11.setTransform(555.875,14.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_12.setTransform(542.275,302.375);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_13.setTransform(522.225,256.175);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJALQgFgFABgGQgBgFAFgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_14.setTransform(561.15,284.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.3).s().p("AgCAAQAAAAAAAAQAAgBABAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQABAAAAABQAAAAAAAAQAAAAAAABQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQAAgBAAAAg");
	this.shape_15.setTransform(556.2,294.475);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_16.setTransform(556.3,227.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_17.setTransform(520.075,243.825);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_18.setTransform(525.825,205.625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAHQgDgDAAgEQAAgCADgDQADgDACAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgCgCg");
	this.shape_19.setTransform(548.175,171.975);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgCgCAAgEQAAgDACgCQACgCADgBQADABADACQACACAAADQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_20.setTransform(530.525,165.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgIAAgMQAAgKAIgJQAIgIALAAQALAAAJAIQAIAJAAAKQAAAMgIAIQgJAIgLAAQgKAAgJgIg");
	this.shape_21.setTransform(519.125,160.425);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_22.setTransform(546.625,140.85);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgDgDgBgGQABgEADgEQAEgDAEAAQAFAAAEADQADAEABAEQgBAGgDADQgEAEgFgBQgEABgEgEg");
	this.shape_23.setTransform(503.65,88.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_24.setTransform(499.025,160.125);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgRARQgHgHAAgKQAAgJAHgIQAIgGAJgBQAKABAHAGQAIAIAAAJQAAAKgIAHQgHAIgKAAQgJAAgIgIg");
	this.shape_25.setTransform(539.275,95.75);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgGAAgHQAAgHAGgFQAFgFAHAAQAHAAAGAFQAGAFgBAHQABAHgGAGQgGAFgHAAQgHAAgFgFg");
	this.shape_26.setTransform(518.4,59.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJALQgFgFABgGQgBgFAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_27.setTransform(555.65,65.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_28.setTransform(547.5,59.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQARQgHgHAAgKQAAgJAHgHQAIgHAIAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_29.setTransform(538.7,48.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_30.setTransform(522.775,86.325);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_31.setTransform(510.725,13.825);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_32.setTransform(556.325,12.975);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgFAGQgCgDAAgDQAAgCACgCQADgDACAAQAIAAAAAHQAAAIgIAAQgCAAgDgCg");
	this.shape_33.setTransform(562.55,293.725);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgWAYQgKgKAAgOQAAgNAKgJQAJgKANAAQAOAAAKAKQAJAJAAANQAAAOgJAKQgKAJgOAAQgNAAgJgJg");
	this.shape_34.setTransform(559.675,298.975);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgDADgGAAQgEAAgEgDg");
	this.shape_35.setTransform(531.75,292.275);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgCgDgBgEQABgDACgDQADgDADAAQAEAAADADQADADgBADQABAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_36.setTransform(514.05,216.375);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgEAFQgCgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQAAAAAAAAQgBAAgBgBQAAAAgBAAQAAgBgBAAg");
	this.shape_37.setTransform(533.325,265.85);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_38.setTransform(532.225,233.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgCAAQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBg");
	this.shape_39.setTransform(534.225,226.125);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgEgDABgFQgBgEAEgDQADgEAEAAQAEAAAEAEQAEADgBAEQABAFgEADQgEADgEAAQgEAAgDgDg");
	this.shape_40.setTransform(523.5,190.85);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_41.setTransform(530.675,164.075);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_42.setTransform(483.1,199.775);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_43.setTransform(513.425,190.825);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTATQgIgHAAgMQAAgKAIgIQAJgJAKABQAMgBAHAJQAIAIAAAKQAAAMgIAHQgHAJgMgBQgKABgJgJg");
	this.shape_44.setTransform(551.5,156.85);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAIAAAIQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_45.setTransform(555.275,104.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgTAVQgIgJgBgMQABgLAIgIQAJgJAKAAQAMAAAIAJQAIAIAAALQAAAMgIAJQgIAHgMABQgKgBgJgHg");
	this.shape_46.setTransform(536.2,108.85);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgLAMQgEgFAAgHQAAgGAEgEQAFgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAFQgEAEgHAAQgGAAgFgEg");
	this.shape_47.setTransform(540.725,166.225);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_48.setTransform(515.925,108.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAJQgDgEAAgFQAAgEADgFQAFgDAEAAQAFAAAEADQAFAFAAAEQAAAFgFAEQgEAFgFAAQgEAAgFgFg");
	this.shape_49.setTransform(544.4,135.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.9).s().p("AghAiQgOgOAAgUQAAgTAOgPQAOgOATAAQAUAAAOAOQAOAPAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_50.setTransform(512.975,97.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgLAAgKgJg");
	this.shape_51.setTransform(500.9,77.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.1).s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_52.setTransform(536.2,53.05);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJALQgFgFAAgGQAAgFAFgFQAEgEAFAAQAGAAAEAEQAFAFAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_53.setTransform(529.6,57.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAJAAAAAIQAAAJgJAAQgDAAgDgCg");
	this.shape_54.setTransform(544.825,57.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.9).s().p("AgbAbQgKgLgBgQQABgPAKgLQAMgMAPAAQAQAAAMAMQAKALABAPQgBAQgKALQgMAMgQAAQgPAAgMgMg");
	this.shape_55.setTransform(487.45,43.625);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_56.setTransform(490.775,6.95);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFABQAGgBAAAFQAAAFgGABQgFgBAAgFg");
	this.shape_57.setTransform(494.25,296.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAJAJQAIAIAAALQAAAMgIAIQgJAJgMAAQgLAAgIgJg");
	this.shape_58.setTransform(549.025,295.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_59.setTransform(533,251.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGABQAHgBAAAGQAAAGgHAAQgGAAAAgGg");
	this.shape_60.setTransform(512.375,250.85);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgCgDAAgEQAAgCACgDQADgEADAAQAEAAADAEQACACABADQAAAKgKgBQgDAAgDgCg");
	this.shape_61.setTransform(498.45,241.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_62.setTransform(501.825,220.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALABQAMgBAIAJQAJAIAAALQAAAMgJAIQgIAJgMgBQgLABgIgJg");
	this.shape_63.setTransform(540.275,252.15);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgFgFAAgIQAAgGAFgGQAGgFAGAAQAIAAAFAFQAFAGAAAGQAAAIgFAFQgFAFgIAAQgGAAgGgFg");
	this.shape_64.setTransform(522.275,236.725);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_65.setTransform(535.725,199.225);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_66.setTransform(502.575,215.45);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.2).s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_67.setTransform(514.725,195.325);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgFgHAAgIQAAgHAFgHQAHgFAHAAQAIAAAHAFQAFAHAAAHQAAAIgFAHQgHAFgIAAQgHAAgHgFg");
	this.shape_68.setTransform(541.85,165.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgEgEAAgHQAAgFAEgFQAFgFAFAAQAHAAAEAFQAEAFAAAFQAAAHgEAEQgEAEgHABQgFgBgFgEg");
	this.shape_69.setTransform(538.625,186.75);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_70.setTransform(528.725,114.175);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgKALQgGgEAAgHQAAgFAGgFQAFgGAFAAQAHAAAEAGQAFAFABAFQgBAHgFAEQgEAFgHABQgFgBgFgFg");
	this.shape_71.setTransform(535.9,126.15);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_72.setTransform(482.35,80.775);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_73.setTransform(551.475,109.425);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.3).s().p("AgWAXQgKgJAAgOQAAgNAKgJQAKgKAMAAQAOAAAJAKQAKAJAAANQAAAOgKAJQgJAKgOAAQgMAAgKgKg");
	this.shape_74.setTransform(506.425,119.275);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.8).s().p("AggAiQgOgOAAgUQAAgSAOgOQAOgOASAAQAUAAAOAOQANAOAAASQAAAUgNAOQgOANgUAAQgSAAgOgNg");
	this.shape_75.setTransform(510.275,82.075);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgHAIABQAJgBAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_76.setTransform(486.925,48.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAAAQAAAGgGAAQgFAAAAgGg");
	this.shape_77.setTransform(541.375,58);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_78.setTransform(520.725,69.575);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_79.setTransform(547.55,42.425);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgFAFABQAGgBAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_80.setTransform(488.95,43.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgHgJgBgLQABgLAHgHQAIgIALAAQALAAAJAIQAHAHABALQgBALgHAJQgJAHgLABQgKgBgJgHg");
	this.shape_81.setTransform(496.45,14);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.8).s().p("AgaAaQgLgKABgQQgBgOALgLQALgLAPAAQAQAAAKALQAMALgBAOQABAQgMAKQgLALgPAAQgPAAgLgLg");
	this.shape_82.setTransform(528,36.375);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLANQgGgGAAgHQAAgGAGgGQAFgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgFgFg");
	this.shape_83.setTransform(517.075,280.875);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_84.setTransform(499.675,301.475);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAFgJAAQgIAAgGgFg");
	this.shape_85.setTransform(507.6,280.05);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_86.setTransform(470.475,249.125);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgEAGAAQAHAAAFAEQAFAFAAAGQAAAHgFAFQgFAFgHgBQgGABgFgFg");
	this.shape_87.setTransform(491.525,279.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAHgGAHAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgHAAgHgGg");
	this.shape_88.setTransform(511.5,250.025);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAKgKAAQgDAAgDgDg");
	this.shape_89.setTransform(499.025,204.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgCgDAAgFQAAgEACgDQADgCAEAAQAEAAAEACQACADAAAEQAAAFgCADQgEACgEAAQgEAAgDgCg");
	this.shape_90.setTransform(498.55,188.45);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.2).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_91.setTransform(524.675,190.825);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_92.setTransform(504.4,197.45);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgCgDgBgDQABgCACgDQACgCADAAQAEAAACACQACADAAACQAAADgCADQgCACgEAAQgDAAgCgCg");
	this.shape_93.setTransform(526.2,157.35);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_94.setTransform(499.025,185.125);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgIAAQgBgDADgCQADgDADgBQAEABADADQADADAAACQAAAEgDADQgDADgEAAQgIAAAAgKg");
	this.shape_95.setTransform(501.7,163.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_96.setTransform(503.25,119);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgOAOQgFgGAAgIQAAgIAFgFQAHgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgHgGg");
	this.shape_97.setTransform(518.35,169.15);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_98.setTransform(546.875,144.775);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_99.setTransform(489.65,91.75);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgPAQQgHgGAAgKQAAgJAHgGQAHgHAIAAQAKAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_100.setTransform(504.725,64.075);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMAOQgGgGAAgIQAAgHAGgFQAFgGAHAAQAIAAAGAGQAFAFAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_101.setTransform(523.8,80.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgQASQgIgIAAgKQAAgJAIgIQAHgHAJAAQALAAAHAHQAHAIAAAJQAAAKgHAIQgHAHgLAAQgJAAgHgHg");
	this.shape_102.setTransform(508.35,107.675);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_103.setTransform(474.15,62.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.8).s().p("AgaAbQgLgLAAgQQAAgPALgLQAMgLAOAAQAPAAAMALQALALAAAPQAAAQgLALQgLALgQAAQgOAAgMgLg");
	this.shape_104.setTransform(528.3,62.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHAAQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_105.setTransform(464.05,28.575);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
	this.shape_106.setTransform(531.725,80.275);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgIAAgNQAAgMAJgIQAJgJALAAQANAAAIAJQAJAIAAAMQAAANgJAIQgIAJgNAAQgLAAgJgJg");
	this.shape_107.setTransform(541.725,72.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.1).s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_108.setTransform(522.45,54.25);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.3).s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_109.setTransform(527.35,271.95);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgPAQQgHgGAAgKQAAgJAHgGQAGgIAJAAQAKAAAGAIQAHAGAAAJQAAAKgHAGQgGAIgKgBQgJABgGgIg");
	this.shape_110.setTransform(507.875,279.4);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgIAAQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAAJgJgBQgIABAAgJg");
	this.shape_111.setTransform(502.325,238.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_112.setTransform(494.8,262.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgLALQgEgEAAgHQAAgGAEgEQAGgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgGgFg");
	this.shape_113.setTransform(489.45,284.275);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgGAIQgEgEAAgEQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_114.setTransform(487.975,227.175);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.5).s().p("AgXAYQgLgKABgOQgBgNALgKQAKgLANAAQAPAAAJALQAKAKAAANQAAAOgKAKQgJALgPgBQgNABgKgLg");
	this.shape_115.setTransform(489.8,237.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.8).s().p("AgZAaQgLgLAAgPQAAgOALgMQALgLAOAAQAQAAAKALQALAMAAAOQAAAPgLALQgKALgQAAQgOAAgLgLg");
	this.shape_116.setTransform(470.525,194.85);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgFgGgBgHQABgHAFgFQAFgFAHgBQAIABAFAFQAFAFAAAHQAAAHgFAGQgFAGgIgBQgHABgFgGg");
	this.shape_117.setTransform(495.15,176.05);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgCAAgEQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAAEgDACQgDADgDAAQgDAAgCgDg");
	this.shape_118.setTransform(507.975,204.225);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLANQgGgGAAgHQAAgGAGgFQAFgGAGAAQAHAAAFAGQAGAFAAAGQAAAHgGAGQgFAFgHAAQgGAAgFgFg");
	this.shape_119.setTransform(488.75,161.475);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_120.setTransform(479.575,178.475);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgFAHQgDgDAAgEQAAgDADgDQADgCACAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgCAAgDgCg");
	this.shape_121.setTransform(467.875,160);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.8).s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_122.setTransform(463.375,145.35);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgQARQgIgHABgKQgBgJAIgIQAHgGAJgBQAKABAIAGQAGAIAAAJQAAAKgGAHQgIAIgKAAQgJAAgHgIg");
	this.shape_123.setTransform(481.25,110.6);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_124.setTransform(482.975,154.175);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgWAYQgLgKAAgOQAAgNALgKQAJgJANgBQAOABAKAJQAKAKAAANQAAAOgKAKQgKAJgOABQgNgBgJgJg");
	this.shape_125.setTransform(480.4,92.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,5.4).s().p("AglAmQgQgQAAgWQAAgVAQgQQAQgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgVAAgQgPg");
	this.shape_126.setTransform(507.4,64.65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.3).s().p("AgWAXQgKgJAAgOQAAgNAKgJQAKgKAMAAQANAAALAKQAJAJAAANQAAAOgJAJQgLAKgNAAQgMAAgKgKg");
	this.shape_127.setTransform(498.95,54.925);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_128.setTransform(490.15,31.65);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_129.setTransform(517.3,63.975);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgIAJQgFgEAAgFQAAgFAFgEQAEgDAEAAQAFAAAFADQADAEAAAFQAAAFgDAEQgFAFgFAAQgEAAgEgFg");
	this.shape_130.setTransform(489.9,83.25);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAXQgJgJgBgOQAAgNAKgJQAKgLANABQAOgBAJALQALAJAAANQAAAOgLAJQgJAKgOAAQgNAAgKgKg");
	this.shape_131.setTransform(476.05,16.05);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgEAAQgBgFAFAAQAFAAABAFQgBAGgFAAQgFAAABgGg");
	this.shape_132.setTransform(458,257.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLALQgEgEAAgHQAAgGAEgEQAFgFAGgBQAHABAFAFQAEAEAAAGQAAAHgEAEQgFAGgHgBQgGABgFgGg");
	this.shape_133.setTransform(480.025,266.85);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgKAIgIQAJgIAKAAQALAAAJAIQAIAHAAALQAAALgIAJQgJAHgLABQgLgBgIgHg");
	this.shape_134.setTransform(472.625,269.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_135.setTransform(497.275,223.625);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_136.setTransform(471.575,230.525);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_137.setTransform(501.5,223.275);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_138.setTransform(478.325,221.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_139.setTransform(478.475,205.025);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgQAQQgGgGAAgKQAAgJAGgGQAIgHAIAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgIAAgIgHg");
	this.shape_140.setTransform(450.7,169.75);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.2).s().p("AgWAXQgIgKgBgNQABgMAIgJQAKgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAKQgJAIgNABQgMgBgKgIg");
	this.shape_141.setTransform(479.75,139.4);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_142.setTransform(451.85,168.3);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4).s().p("AgbAcQgMgLAAgRQAAgQAMgMQALgLAQAAQARAAALALQAMAMAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_143.setTransform(473.9,173.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgFAGQgCgDAAgDQAAgCACgDQADgCACAAQADAAADACQACADAAACQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_144.setTransform(486.925,162.425);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAHQgHAGgJAAQgIAAgGgGg");
	this.shape_145.setTransform(452.025,169.925);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRATQgIgIAAgLQAAgKAIgIQAHgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAIQgIAHgLAAQgKAAgHgHg");
	this.shape_146.setTransform(477.125,111.45);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgQAQQgGgHAAgJQAAgIAGgIQAIgGAIAAQAJAAAHAGQAHAIAAAIQAAAJgHAHQgHAHgJAAQgIAAgIgHg");
	this.shape_147.setTransform(449.25,84.15);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_148.setTransform(436.175,93.175);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.3).s().p("AgWAXQgKgJAAgOQAAgMAKgKQAKgKAMAAQAOAAAKAKQAJAKAAAMQAAAOgJAJQgKAKgOAAQgMAAgKgKg");
	this.shape_149.setTransform(481.65,129.225);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLAMQgFgFgBgHQABgGAFgGQAEgEAHAAQAHAAAGAEQAEAGAAAGQAAAHgEAFQgGAFgHABQgHgBgEgFg");
	this.shape_150.setTransform(430.55,84.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgJAAgMQAAgMAJgIQAJgJALAAQANAAAIAJQAJAIAAAMQAAAMgJAJQgIAJgNAAQgLAAgJgJg");
	this.shape_151.setTransform(472.925,58.625);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.3).s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_152.setTransform(488.625,78.875);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_153.setTransform(471.325,65.225);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.7).s().p("AgZAaQgLgLAAgPQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_154.setTransform(475.575,43.725);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_155.setTransform(461.175,22.3);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgHAAQAAgGAHAAQAHAAABAGQgBAHgHAAQgHAAAAgHg");
	this.shape_156.setTransform(486.6,32.725);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_157.setTransform(432.425,278.225);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgDADgDQADgEAEAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_158.setTransform(451.75,284.575);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgKAKQgEgEAAgGQAAgFAEgEQAEgFAGAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgGAAgEgFg");
	this.shape_159.setTransform(476.8,235.175);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLALQgEgEAAgHQAAgGAEgFQAFgEAGAAQAHAAAEAEQAFAFAAAGQAAAHgFAEQgEAFgHAAQgGAAgFgFg");
	this.shape_160.setTransform(460.525,257.025);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_161.setTransform(476.85,230.025);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgLAJgKQAJgJAMAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_162.setTransform(496.475,224.725);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_163.setTransform(461.425,222.5);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.5).s().p("AgYAZQgKgLAAgOQAAgOAKgKQALgKANAAQAPAAAKAKQAKALAAANQAAAOgKALQgKAKgPAAQgNAAgLgKg");
	this.shape_164.setTransform(434.825,202.775);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.4).s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_165.setTransform(455.6,177.075);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.5).s().p("AgXAZQgKgKAAgPQAAgOAKgKQAKgJANgBQAOABAKAJQAKAKAAAOQAAAPgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_166.setTransform(443.975,188.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABABAAAAQAAABABAAQAAAAAAABQAAAAAAAAQAAAGgGAAQgFAAAAgGg");
	this.shape_167.setTransform(444.9,176);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgEgFgBgGQABgFAEgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAGgFAFQgFAEgGABQgFgBgFgEg");
	this.shape_168.setTransform(470.3,157.4);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgDgDgBgFQABgEADgDQADgDAEgBQAFABADADQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_169.setTransform(434.25,156.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgLAAgKgJg");
	this.shape_170.setTransform(484.125,147.075);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_171.setTransform(452.5,95.225);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgGAAQABgFAFAAQAHAAAAAFQAAAGgHAAQgFAAgBgGg");
	this.shape_172.setTransform(466.7,126.075);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAHAHAAAKQAAALgHAHQgHAIgLAAQgKAAgHgIg");
	this.shape_173.setTransform(434.6,114.325);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_174.setTransform(426.075,77.625);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgQAQQgGgGAAgKQAAgJAGgGQAIgHAIAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgIAAgIgHg");
	this.shape_175.setTransform(448.1,77.775);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.5).s().p("AgeAfQgOgMAAgTQAAgSAOgNQANgNARABQASgBAOANQAMANAAASQAAATgMAMQgOANgSABQgRgBgNgNg");
	this.shape_176.setTransform(448.65,96.9);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_177.setTransform(435.9,48.025);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgQAQQgGgGAAgKQAAgIAGgHQAIgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgIgHg");
	this.shape_178.setTransform(449.05,25.85);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgHAIAAQAKAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_179.setTransform(434.8,47.15);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_180.setTransform(458.875,11.85);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_181.setTransform(448.825,44.1);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgGgHAAgJQAAgIAGgGQAHgIAIAAQAJAAAHAIQAGAGAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_182.setTransform(430.125,16.05);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAJQgEgEAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgDgDg");
	this.shape_183.setTransform(432.875,299.65);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgEgEAAgHQAAgFAEgFQAEgEAGAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_184.setTransform(429.775,287.475);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgFAAgFQAAgFAEgEQAFgEAEAAQAFAAAFAEQADAEAAAFQAAAFgDAFQgFAEgFAAQgEAAgFgEg");
	this.shape_185.setTransform(450.55,298.775);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEABQAFgBAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_186.setTransform(472.075,267.75);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_187.setTransform(438.625,301.625);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_188.setTransform(412.875,241.15);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAHgGAHAAQAIAAAHAGQAGAHAAAHQAAAJgGAGQgHAGgIAAQgHAAgHgGg");
	this.shape_189.setTransform(435.45,267.05);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.3).s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_190.setTransform(430.975,221.725);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAGQgDgDAAgDQAAgHAHAAQADAAADADQACACAAACQAAADgCADQgDACgDAAQgCAAgCgCg");
	this.shape_191.setTransform(461.675,229.725);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_192.setTransform(418.125,200.475);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_193.setTransform(428.525,181.425);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.2).s().p("AgVAXQgJgKAAgNQAAgMAJgJQAJgKAMABQANgBAKAKQAIAJABAMQgBANgIAKQgKAIgNABQgMgBgJgIg");
	this.shape_194.setTransform(425.5,173.8);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgYAZQgKgKAAgPQAAgOAKgKQAKgLAOAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKALgPAAQgOAAgKgLg");
	this.shape_195.setTransform(436.7,127.675);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgLAIgIQAJgIAKAAQAMAAAIAIQAIAJAAAKQAAALgIAJQgIAIgMAAQgKAAgJgIg");
	this.shape_196.setTransform(444.125,134.725);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgGAGQgCgCAAgEQAAgCACgDQADgDADAAQAEAAADADQACADAAACQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_197.setTransform(437.65,134.05);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAGQgDgDAAgDQAAgCADgCQACgDACAAQAHAAABAHQgBAIgHAAQgCAAgCgCg");
	this.shape_198.setTransform(419.1,114.875);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAQgLAAgKgJg");
	this.shape_199.setTransform(396.35,132.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKALgPAAQgOAAgKgLg");
	this.shape_200.setTransform(421.3,115.775);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPARQgHgIAAgJQAAgJAHgGQAHgHAIAAQAKAAAGAHQAHAGAAAJQAAAJgHAIQgGAGgKAAQgJAAgGgGg");
	this.shape_201.setTransform(471.375,94.85);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.1).s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_202.setTransform(406.95,84.8);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_203.setTransform(430.175,49.875);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgKAOAAQAOAAALAKQAKAKAAAOQAAAPgKAKQgLAKgOAAQgOAAgKgKg");
	this.shape_204.setTransform(437.4,74.625);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgGAHAAQAIAAAFAGQAHAGAAAHQAAAIgHAFQgFAHgIAAQgHAAgGgHg");
	this.shape_205.setTransform(457.05,47.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgDAEAAQAGAAADADQAEAEgBAEQAAAGgDADQgDAEgGgBQgEABgEgEg");
	this.shape_206.setTransform(447.15,66.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLAMQgGgFAAgHQAAgGAGgGQAFgEAGAAQAHAAAFAEQAGAGgBAGQABAHgGAFQgFAGgHAAQgGAAgFgGg");
	this.shape_207.setTransform(457.8,7.8);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.3).s().p("AgXAYQgJgKAAgOQAAgMAJgKQAKgKANAAQAOAAAKAKQAJAKAAAMQAAAOgJAKQgKAJgOAAQgNAAgKgJg");
	this.shape_208.setTransform(469.05,23.65);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgZAZQgKgKAAgPQAAgOAKgKQALgLAOAAQAPAAALALQAKAKAAAOQAAAPgKAKQgLALgPAAQgOAAgLgLg");
	this.shape_209.setTransform(437.8,15.375);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.3).s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_210.setTransform(445.525,286.875);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_211.setTransform(403.025,284.725);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_212.setTransform(436.85,269.775);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_213.setTransform(440.075,205.025);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQAHAAAAAGQAAAHgHAAQgCAAgCgCg");
	this.shape_214.setTransform(466.575,228.925);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.3).s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_215.setTransform(423.95,190.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_216.setTransform(427.625,204.35);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgFAHAAQAHAAAGAFQAFAGAAAGQAAAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_217.setTransform(457.025,215.125);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_218.setTransform(458.725,206.125);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_219.setTransform(440.375,210.975);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgSATQgJgIABgLQgBgKAJgIQAIgIAKAAQAMAAAHAIQAJAIgBAKQABALgJAIQgHAIgMAAQgKAAgIgIg");
	this.shape_220.setTransform(435.65,136.825);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_221.setTransform(429.975,181.025);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgKAIgJQAJgIAKAAQALAAAJAIQAIAIAAALQAAALgIAJQgJAIgLAAQgLAAgIgIg");
	this.shape_222.setTransform(443.875,162.575);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgJgKAAgOQAAgNAJgJQAKgKANAAQAOAAAJAKQAKAJAAANQAAAOgKAKQgJAJgOAAQgNAAgKgJg");
	this.shape_223.setTransform(429.375,159.125);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.2).s().p("AgdAeQgMgMAAgSQAAgQAMgNQAMgMARAAQARAAANAMQAMANAAAQQAAASgMAMQgNAMgRAAQgRAAgMgMg");
	this.shape_224.setTransform(404.9,132.775);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAHgGAHAAQAJAAAGAGQAGAGAAAIQAAAIgGAHQgGAGgJAAQgHAAgHgGg");
	this.shape_225.setTransform(427.25,93.6);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_226.setTransform(389.625,114);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgRASQgGgIgBgKQABgJAGgHQAIgIAJAAQAKAAAHAIQAIAHAAAJQAAAKgIAIQgHAGgKAAQgJAAgIgGg");
	this.shape_227.setTransform(468.15,72.05);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgHQAGgGAIAAQAJAAAGAGQAHAHAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_228.setTransform(410.725,72.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTATQgIgIAAgLQAAgKAIgIQAJgJAKABQAMgBAIAJQAIAIAAAKQAAALgIAIQgIAJgMAAQgKAAgJgJg");
	this.shape_229.setTransform(430.625,68.55);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMAMQgEgFgBgHQABgGAEgFQAGgGAGAAQAHAAAGAGQAEAFAAAGQAAAHgEAFQgGAGgHAAQgGAAgGgGg");
	this.shape_230.setTransform(448.2,51.1);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_231.setTransform(416.675,42.075);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDADgFABQgEgBgDgDg");
	this.shape_232.setTransform(440.725,39.45);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_233.setTransform(434.725,11.125);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_234.setTransform(455.95,271.975);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgEAFAAQAGAAAEAEQAEAEABAFQgBAGgEAFQgEADgGAAQgFAAgEgDg");
	this.shape_235.setTransform(432.5,247.35);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_236.setTransform(424.175,284.975);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgEAAgEQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_237.setTransform(405.075,216.35);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_238.setTransform(369.225,197.275);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgIAAQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgIAAAAgJg");
	this.shape_239.setTransform(429.8,233.35);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgDAEQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAgFAFAAQAGAAAAAFQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAAAg");
	this.shape_240.setTransform(371.75,218.35);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgIgHg");
	this.shape_241.setTransform(400.425,188.475);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_242.setTransform(423.55,169.125);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEABQAFgBADAEQAEADAAAEQAAAFgEADQgDAEgFgBQgEABgDgEg");
	this.shape_243.setTransform(433.225,203.75);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLALQgEgEAAgHQAAgGAEgEQAGgFAFgBQAHABAFAFQAFAEgBAGQABAHgFAEQgFAGgHgBQgFABgGgGg");
	this.shape_244.setTransform(374.6,165.15);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgTAUQgIgIAAgMQAAgLAIgIQAIgJALAAQAMAAAIAJQAIAIAAALQAAAMgIAIQgIAJgMAAQgLAAgIgJg");
	this.shape_245.setTransform(408.375,125.05);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.7).s().p("AggAhQgOgNAAgUQAAgSAOgOQAOgOASAAQAUAAANAOQAOAOAAASQAAAUgOANQgNAOgUAAQgSAAgOgOg");
	this.shape_246.setTransform(448.05,123.35);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.3).s().p("AgWAYQgKgKAAgOQAAgMAKgKQAJgKANAAQAOAAAJAKQAKAKAAAMQAAAOgKAKQgJAJgOAAQgNAAgJgJg");
	this.shape_247.setTransform(424.975,141.2);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_248.setTransform(430.975,124.35);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHABAIQgBAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_249.setTransform(397.35,100.425);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_250.setTransform(431.175,131.925);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgYAZQgLgKAAgPQAAgNALgLQAKgLAOAAQAPAAAKALQALALAAANQAAAPgLAKQgKAKgPAAQgOAAgKgKg");
	this.shape_251.setTransform(429.725,63.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_252.setTransform(450.625,61.325);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.2).s().p("AgVAXQgJgKAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAKAJAAAMQAAANgKAKQgJAIgNABQgMgBgJgIg");
	this.shape_253.setTransform(400.2,64.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.3).s().p("AgWAXQgJgKAAgNQAAgMAJgKQAKgJAMAAQANAAAKAJQAJAKAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_254.setTransform(419.275,73.125);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgJAAgMQAAgLAJgJQAIgJAMAAQAMAAAJAJQAJAJAAALQAAANgJAIQgJAJgMAAQgMAAgIgJg");
	this.shape_255.setTransform(437.625,48.95);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.5).s().p("AgXAZQgLgLAAgOQAAgNALgLQAKgKANAAQAPAAAKAKQAKALAAANQAAAPgKAKQgKAKgPAAQgNAAgKgKg");
	this.shape_256.setTransform(413.025,14.375);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgFAGQgCgDAAgDQAAgHAHAAQADAAADACQACACAAADQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_257.setTransform(425.875,283.575);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgKALQgEgEAAgHQAAgFAEgFQAEgEAGAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_258.setTransform(360.375,289.675);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_259.setTransform(373.5,278.875);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAJQgDgEAAgFQAAgEADgDQAEgEAEAAQAFAAADAEQAEADAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_260.setTransform(364.05,261.15);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgFAFAAQAHAAAEAFQAFAFgBAFQABAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_261.setTransform(385.85,248.3);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgIAAgMQAAgLAIgIQAJgIAKAAQAMAAAIAIQAIAIAAALQAAAMgIAIQgIAIgMAAQgKAAgJgIg");
	this.shape_262.setTransform(385.5,231.6);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_263.setTransform(399.125,247.225);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.2).s().p("AgVAXQgKgKAAgNQAAgNAKgIQAJgKAMAAQANAAAKAKQAJAIAAANQAAANgJAKQgKAJgNAAQgMAAgJgJg");
	this.shape_264.setTransform(403.45,246.15);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgQASQgIgIAAgKQAAgJAIgIQAHgHAJAAQALAAAHAHQAHAIAAAJQAAAKgHAIQgHAHgLAAQgJAAgHgHg");
	this.shape_265.setTransform(406.3,175.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgFgGAAgHQAAgGAFgFQAGgGAGAAQAHAAAGAGQAFAFAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_266.setTransform(426.675,205.425);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgLAIgIQAIgIALAAQALAAAJAIQAIAIAAALQAAALgIAJQgJAIgLAAQgLAAgIgIg");
	this.shape_267.setTransform(435.95,144.55);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_268.setTransform(413.375,158.925);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4).s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAAMAMQALALAAAQQAAARgLALQgMAMgRAAQgQAAgLgMg");
	this.shape_269.setTransform(418.725,172.05);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgLAAgQQAAgPALgLQALgMAPAAQAQAAALAMQALALAAAPQAAAQgLALQgLAMgQAAQgPAAgLgMg");
	this.shape_270.setTransform(409.9,141.525);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgHAAgJQAAgJAHgGQAGgHAJAAQAJAAAIAHQAGAGAAAJQAAAJgGAHQgIAHgJAAQgJAAgGgHg");
	this.shape_271.setTransform(370.5,133.55);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_272.setTransform(403.775,112.625);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_273.setTransform(422.275,144.575);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAVQgJgIAAgNQAAgMAJgJQAJgIAMgBQANABAJAIQAJAJAAAMQAAAMgJAJQgJAKgNgBQgMABgJgKg");
	this.shape_274.setTransform(391.275,88.25);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgFgFAAgIQAAgGAFgGQAGgFAGAAQAIAAAFAFQAFAGAAAGQAAAIgFAFQgFAFgIAAQgGAAgGgFg");
	this.shape_275.setTransform(355.7,93.1);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.3).s().p("AgeAeQgMgMAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMAMQgNANgSAAQgRAAgNgNg");
	this.shape_276.setTransform(413.475,106.25);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAALgIAHQgHAHgKAAQgJAAgIgHg");
	this.shape_277.setTransform(388.25,75.25);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.1).s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQAAQARAAAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_278.setTransform(408.4,30);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_279.setTransform(360.65,75.45);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKAMQgFgGAAgGQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAGQgEAEgHAAQgFAAgFgEg");
	this.shape_280.setTransform(439.75,28.45);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.2).s().p("AgdAeQgMgNAAgRQAAgQAMgNQANgMAQAAQARAAANAMQAMAMAAARQAAARgMANQgNAMgRAAQgRAAgMgMg");
	this.shape_281.setTransform(401.325,12.775);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.8).s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLg");
	this.shape_282.setTransform(364.975,10.325);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_283.setTransform(378.625,288.45);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_284.setTransform(382.175,302.125);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgLALQgEgEAAgHQAAgFAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgGAAgFgFg");
	this.shape_285.setTransform(392.75,285);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_286.setTransform(371.525,270);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMAMQgEgFgBgHQABgGAEgFQAGgFAGAAQAHAAAGAFQAEAFAAAGQAAAHgEAFQgGAFgHAAQgGAAgGgFg");
	this.shape_287.setTransform(367.65,244.875);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgEAAQAAgFAEABQAFgBAAAFQAAAFgFABQgEgBAAgFg");
	this.shape_288.setTransform(380.825,245.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_289.setTransform(360.9,255.4);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_290.setTransform(422.475,216.725);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgIALgBQAMABAJAIQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_291.setTransform(390.325,180.55);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAGQgCgCAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgDAEgEAAQgDAAgDgEg");
	this.shape_292.setTransform(330.475,199.85);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_293.setTransform(375.35,185.25);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgEgFgBgGQABgFAEgFQAEgFAGABQAGgBAFAFQAFAFAAAFQAAAGgFAFQgFAFgGgBQgGABgEgFg");
	this.shape_294.setTransform(360.85,203.25);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_295.setTransform(379.625,205.475);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgSATQgIgIAAgLQAAgLAIgHQAIgIAKAAQAMAAAHAIQAIAIAAAKQAAALgIAIQgHAIgMAAQgKAAgIgIg");
	this.shape_296.setTransform(411.975,175.325);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_297.setTransform(401.4,185.925);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_298.setTransform(362.475,183.475);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.4).s().p("AgeAfQgNgNAAgSQAAgSANgMQAMgNASAAQASAAANANQANAMAAASQAAASgNANQgNANgSAAQgSAAgMgNg");
	this.shape_299.setTransform(367.125,130.425);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQARQgHgHAAgKQAAgIAHgIQAIgHAIAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_300.setTransform(342.85,124);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_301.setTransform(371.125,123.025);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgIAAgNQAAgLAJgJQAIgJAMAAQANAAAIAJQAJAJAAALQAAANgJAIQgJAJgMAAQgMAAgIgJg");
	this.shape_302.setTransform(350.675,93.275);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgLAIgIQAIgIALAAQALAAAJAIQAIAIAAALQAAALgIAJQgJAIgLAAQgLAAgIgIg");
	this.shape_303.setTransform(348.2,109.95);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgLAIgIQAJgIAKAAQAMAAAIAIQAIAIAAALQAAALgIAJQgIAIgMAAQgKAAgJgIg");
	this.shape_304.setTransform(356.575,35.25);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_305.setTransform(396.15,104.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_306.setTransform(381.975,62.95);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgFgGAAgHQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgGgFg");
	this.shape_307.setTransform(403.275,77.425);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAIQgDgDAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_308.setTransform(383.9,19.55);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgKAIgJQAJgIAKAAQALAAAJAIQAIAIAAALQAAALgIAJQgJAIgLAAQgLAAgIgIg");
	this.shape_309.setTransform(390.475,16.875);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_310.setTransform(322.95,266.175);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_311.setTransform(351.925,275.25);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_312.setTransform(351.3,228.125);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_313.setTransform(392.425,229.125);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAAAAAAAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_314.setTransform(379,243.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_315.setTransform(346.925,248.025);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgLAIgIQAJgIAKAAQAMAAAIAIQAIAIAAALQAAALgIAJQgIAIgMAAQgKAAgJgIg");
	this.shape_316.setTransform(353.175,191.775);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgYAZQgLgKABgPQgBgNALgLQALgLANAAQAOAAALALQAKALAAANQAAAPgKAKQgLAKgOAAQgNAAgLgKg");
	this.shape_317.setTransform(341.2,188.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_318.setTransform(360.425,180.575);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.3).s().p("AgCAAQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_319.setTransform(375.125,178.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQARQgHgHAAgKQAAgIAHgIQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_320.setTransform(344.45,161.75);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.3).s().p("AgWAXQgKgKAAgNQAAgNAKgJQAJgKANAAQANAAAKAKQAKAJAAANQAAANgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_321.setTransform(364.975,148.55);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgQASQgIgIAAgKQAAgJAIgIQAGgHAKAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgKAAgGgHg");
	this.shape_322.setTransform(351.2,164.25);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgCgDAAgDQAAgHAHAAQAIAAAAAHQAAADgCADQgDACgDAAQgDAAgCgCg");
	this.shape_323.setTransform(340.675,149.025);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgEAFgBQAGABAAAEQAAAGgGgBQgFABAAgGg");
	this.shape_324.setTransform(361.05,92.75);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAALQAAALgIAJQgIAIgMAAQgLAAgIgIg");
	this.shape_325.setTransform(336.325,98.725);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEgBQAFABAEADQADAEAAAEQAAAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape_326.setTransform(392.975,103.8);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4).s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_327.setTransform(356.35,55.275);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgEAFgHAAQgFAAgFgFg");
	this.shape_328.setTransform(348.25,106.9);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_329.setTransform(398.75,49.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgFgHAAgIQAAgIAFgGQAHgGAHAAQAIAAAHAGQAFAGAAAIQAAAIgFAHQgHAGgIAAQgHAAgHgGg");
	this.shape_330.setTransform(341.25,28.275);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgZAaQgKgLAAgPQAAgOAKgLQALgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_331.setTransform(355.675,59.725);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_332.setTransform(389,44.05);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_333.setTransform(342.55,33.75);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_334.setTransform(366.125,297.725);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgCAAgEQAAgDADgCQADgDACAAQAEAAACADQADACAAADQAAADgDADQgCADgEAAQgCAAgDgDg");
	this.shape_335.setTransform(362.325,256.125);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_336.setTransform(319.325,265.475);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_337.setTransform(368,242.25);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAFAEQADAEAAAFQAAAGgDAEQgFAEgGAAQgFAAgEgEg");
	this.shape_338.setTransform(341.65,201.225);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDAAgGQAAgFAEgDQADgEAFAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_339.setTransform(343.925,230.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgKAMQgGgFAAgHQAAgGAGgFQAEgEAGAAQAHAAAEAEQAFAFABAGQgBAHgFAFQgEAEgHAAQgGAAgEgEg");
	this.shape_340.setTransform(355.45,224.925);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_341.setTransform(345.975,208.375);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_342.setTransform(354.6,175.65);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_343.setTransform(347.275,186.375);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_344.setTransform(331.375,169.85);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_345.setTransform(319.325,170.825);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAJQgEgDAAgGQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDAEQgEADgFAAQgEAAgDgDg");
	this.shape_346.setTransform(336,161.95);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgFAHQgEgDAAgEQAAgCAEgDQADgEACAAQAEAAADAEQACACAAADQABAKgKgBQgDAAgCgCg");
	this.shape_347.setTransform(328.95,150.5);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_348.setTransform(373.375,135.525);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgTAVQgJgJAAgMQAAgLAJgJQAIgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgIgIg");
	this.shape_349.setTransform(327.975,157.875);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_350.setTransform(365.2,80.975);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.3).s().p("AgeAfQgMgOAAgRQAAgQAMgOQAOgMAQAAQARAAANAMQANAOAAAQQAAARgNAOQgNAMgRAAQgQAAgOgMg");
	this.shape_351.setTransform(343.55,135.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgUAUQgIgIAAgMQAAgLAIgIQAJgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgJgJg");
	this.shape_352.setTransform(354.45,81);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgZAaQgLgLABgPQgBgOALgLQALgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_353.setTransform(338.9,72.625);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgHAIAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgIAAgHgHg");
	this.shape_354.setTransform(378.125,43.975);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.4).s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_355.setTransform(329.225,75.075);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgLAJgKQAKgJALAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_356.setTransform(391.775,74.575);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,5).s().p("AgjAkQgOgPAAgVQAAgUAOgPQAPgOAUAAQAVAAAPAOQAOAPAAAUQAAAVgOAPQgPAOgVAAQgUAAgPgOg");
	this.shape_357.setTransform(340.875,26.125);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgHAAQAAgCACgDQADgDACABQAJAAAAAHQAAAJgJAAQgHAAAAgJg");
	this.shape_358.setTransform(347.15,288.05);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEABQAFgBAAAEQAAAEgFABQgEgBAAgEg");
	this.shape_359.setTransform(340.925,241.75);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAJQgDgEgBgFQABgEADgEQAEgDAEAAQAFAAAEADQADAEABAEQgBAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_360.setTransform(298.8,243.425);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.3).s().p("AgWAXQgKgKAAgNQAAgMAKgKQAJgKANAAQANAAAKAKQAKAKgBAMQABANgKAKQgKAKgNAAQgNAAgJgKg");
	this.shape_361.setTransform(313.6,253.6);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAFQAAAGgEAEQgEAEgGABQgFgBgEgEg");
	this.shape_362.setTransform(310.025,245.95);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDABgGQgBgEAEgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAGgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_363.setTransform(329.55,257.05);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_364.setTransform(347.125,224.35);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgEAEgFQAFgEAEAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgEAAgFgEg");
	this.shape_365.setTransform(351.425,208.725);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_366.setTransform(353.9,185.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_367.setTransform(356.8,198.25);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgQASQgIgIAAgKQAAgJAIgIQAHgHAJAAQAKAAAIAHQAHAIAAAJQAAAKgHAIQgIAHgKAAQgJAAgHgHg");
	this.shape_368.setTransform(319.025,160.075);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgHAIAAQAKAAAGAHQAHAGAAAJQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_369.setTransform(328.325,114.625);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.1).s().p("AgbAdQgMgMAAgRQAAgPAMgNQALgMAQAAQARAAALAMQANANAAAPQAAARgNAMQgLAMgRgBQgQABgLgMg");
	this.shape_370.setTransform(363.75,114.15);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgJAJQgDgDAAgGQAAgEADgEQAEgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgFAAgEgEg");
	this.shape_371.setTransform(340.8,143.8);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgIAAgMQAAgKAIgJQAIgIALAAQALAAAJAIQAIAJAAAKQAAAMgIAIQgJAIgLAAQgKAAgJgIg");
	this.shape_372.setTransform(335.225,129.875);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgFgGgBgHQABgHAFgFQAGgGAGABQAIgBAFAGQAFAFAAAHQAAAHgFAGQgFAFgIABQgGgBgGgFg");
	this.shape_373.setTransform(332.25,138.65);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgFAAgFQAAgFAEgEQAFgEAEAAQAGAAAEAEQAEAEAAAFQAAAFgEAFQgEAEgGAAQgEAAgFgEg");
	this.shape_374.setTransform(345.475,96.175);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_375.setTransform(339.15,107.875);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgHAAgJQAAgJAHgGQAGgHAJAAQAJAAAIAHQAGAGAAAJQAAAJgGAHQgIAHgJAAQgJAAgGgHg");
	this.shape_376.setTransform(371.85,52.15);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgLAJgKQAJgJAMAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_377.setTransform(344.7,89.55);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQAMALgBAPQABAQgMALQgLALgQAAQgPAAgLgLg");
	this.shape_378.setTransform(342.7,80.275);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgOAOQgFgGAAgIQAAgHAFgGQAHgGAHAAQAIAAAHAGQAFAFAAAIQAAAIgFAGQgHAGgIAAQgHAAgHgGg");
	this.shape_379.setTransform(349.7,71.875);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.9).s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgPATAAQAUAAAOAPQAOAOAAATQAAAUgOAOQgOAOgUABQgTgBgOgOg");
	this.shape_380.setTransform(333.425,29.45);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_381.setTransform(334.825,17.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_382.setTransform(350.45,12);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgQASQgIgIAAgKQAAgJAIgHQAHgIAJAAQAKAAAIAIQAHAHAAAJQAAAKgHAIQgIAHgKAAQgJAAgHgHg");
	this.shape_383.setTransform(284.425,285.325);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgEgGAAgHQAAgGAEgFQAGgFAGgBQAIABAEAFQAFAFABAGQgBAHgFAGQgEAEgIAAQgGAAgGgEg");
	this.shape_384.setTransform(314.75,238.15);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgGgGg");
	this.shape_385.setTransform(310.925,253.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgCAAgEQAAgCADgDQADgDACAAQAEAAACADQADADAAACQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_386.setTransform(322.3,303.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgIAAgMQAAgKAIgJQAIgIALAAQALAAAJAIQAIAJAAAKQAAAMgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_387.setTransform(325.35,293.9);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAOQgFgFAAgJQAAgIAFgFQAHgHAHAAQAIAAAHAHQAFAFAAAIQAAAJgFAFQgHAHgIAAQgHAAgHgHg");
	this.shape_388.setTransform(315.15,279.3);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_389.setTransform(337.1,231.45);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgDABgDQAAgIAHAAQAJAAAAAIQAAADgDADQgCADgEgBQgCABgDgDg");
	this.shape_390.setTransform(344.1,226.8);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_391.setTransform(308.825,214.925);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgQASQgIgIAAgKQAAgJAIgHQAHgIAJAAQAKAAAIAIQAHAHAAAJQAAAKgHAIQgIAHgKAAQgJAAgHgHg");
	this.shape_392.setTransform(332.925,190.95);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgHAKAAQAKAAAIAHQAHAIAAAJQAAALgHAHQgIAHgKAAQgKAAgHgHg");
	this.shape_393.setTransform(311.65,215.875);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_394.setTransform(341.675,205.075);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_395.setTransform(293.325,178.025);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgCgDAAgEQAAgJAIAAQAKAAAAAJQgBAEgCADQgDADgEAAQgDAAgDgDg");
	this.shape_396.setTransform(342.75,174.075);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_397.setTransform(317.025,124.425);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.7).s().p("AgZAaQgLgLAAgPQAAgPALgKQAKgLAPAAQAQAAAKALQALAKAAAPQAAAPgLALQgKALgQAAQgPAAgKgLg");
	this.shape_398.setTransform(312.45,118.85);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.7).s().p("AgYAaQgMgLAAgPQAAgOAMgLQAKgLAOABQAPgBALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgKgLg");
	this.shape_399.setTransform(300.25,88.35);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.3).s().p("AgeAfQgMgNAAgSQAAgRAMgNQANgMARAAQASAAANAMQAMANAAARQAAASgMANQgNAMgSAAQgRAAgNgMg");
	this.shape_400.setTransform(313.675,73.475);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgKAKQgEgDAAgHQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAHgEADQgFAFgGAAQgFAAgFgFg");
	this.shape_401.setTransform(321.925,104.65);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgFAAgJQAAgHAGgGQAFgGAIAAQAJAAAFAGQAGAGAAAHQAAAJgGAFQgFAGgJAAQgHAAgGgGg");
	this.shape_402.setTransform(337.1,118.425);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAAMgJAJQgJAJgMAAQgLAAgJgJg");
	this.shape_403.setTransform(339.55,45.45);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.2).s().p("AgdAeQgMgMAAgSQAAgRAMgMQAMgMARAAQARAAAMAMQANANAAAQQAAASgNAMQgMAMgRAAQgRAAgMgMg");
	this.shape_404.setTransform(290.85,48.65);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgLALQgEgEAAgHQAAgFAEgGQAFgEAGAAQAGAAAFAEQAFAGAAAFQAAAHgFAEQgFAFgGAAQgGAAgFgFg");
	this.shape_405.setTransform(312.3,43.15);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_406.setTransform(328.275,18.075);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_407.setTransform(322.15,19.75);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgMgLAAgQQAAgPAMgMQALgLAPAAQAQAAALALQAMAMAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_408.setTransform(275.625,52.925);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_409.setTransform(303.525,304.275);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgCAAQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAgBg");
	this.shape_410.setTransform(330.35,249.3);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_411.setTransform(300.45,238.15);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.2).s().p("AgBAAQAAAAAAAAQAAAAAAAAQABgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAgBgBQAAAAAAAAQAAAAAAgBg");
	this.shape_412.setTransform(298.65,235.1);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgNAOQgHgFABgJQgBgHAHgHQAFgFAIgBQAIABAHAFQAFAHAAAHQAAAJgFAFQgHAHgIgBQgIABgFgHg");
	this.shape_413.setTransform(270.25,243.95);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_414.setTransform(282.225,200.175);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAgDADAAQAEAAAAADQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAQgDAAAAgEg");
	this.shape_415.setTransform(286.425,239.575);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.3).s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_416.setTransform(300,219.95);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_417.setTransform(323.875,174.975);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgIAAgMQAAgKAIgJQAIgIALAAQALAAAJAIQAIAJAAAKQAAAMgIAIQgJAIgLAAQgKAAgJgIg");
	this.shape_418.setTransform(346.125,191.675);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgGAHQgEgDAAgEQAAgDAEgDQADgEADAAQAEAAADAEQAEADAAADQAAAEgEADQgDAEgEAAQgDAAgDgEg");
	this.shape_419.setTransform(333.55,154.65);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgFgEAAgGQAAgFAFgEQAEgFAFAAQAGAAAFAFQAEAEAAAFQAAAGgEAEQgFAFgGAAQgFAAgEgFg");
	this.shape_420.setTransform(319.875,189.025);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAFQAAAGgFAFQgEADgGAAQgFAAgEgDg");
	this.shape_421.setTransform(312.9,189.75);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEABQAFgBAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_422.setTransform(310.325,144);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQAAAAABgBQAAAAABAAQAAAAAAAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_423.setTransform(270.85,120.55);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_424.setTransform(345.225,140.425);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAFQgDgCAAgDQAAgGAHAAQAHAAAAAGQAAADgBACQgDACgDABQgCgBgCgCg");
	this.shape_425.setTransform(316.25,138.65);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_426.setTransform(323.375,104.125);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.8).s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLg");
	this.shape_427.setTransform(317.3,37.775);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_428.setTransform(330.025,108.275);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_429.setTransform(287.8,67.9);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgHgIAAgLQAAgKAHgIQAIgHAKAAQALAAAIAHQAHAIAAAKQAAALgHAIQgIAHgLAAQgKAAgIgHg");
	this.shape_430.setTransform(322.825,60.625);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgIAAgMQAAgKAIgJQAIgJALABQAMgBAIAJQAIAJAAAKQAAAMgIAIQgIAJgMAAQgLAAgIgJg");
	this.shape_431.setTransform(281.925,73.85);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgDADgEQADgDAEAAQAFAAADADQADAEAAADQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_432.setTransform(302.975,9.775);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAGAGQAHAHAAAIQAAAJgHAHQgGAGgJAAQgIAAgHgGg");
	this.shape_433.setTransform(290.1,292.95);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgRASQgHgIAAgKQAAgJAHgIQAIgHAJAAQAKAAAHAHQAIAIAAAJQAAAKgIAIQgHAHgKAAQgJAAgIgHg");
	this.shape_434.setTransform(271.05,280.1);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_435.setTransform(324.05,264.15);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgEAFQgCgDAAgCQAAgGAGAAQAHAAAAAGQAAAHgHAAQgCAAgCgCg");
	this.shape_436.setTransform(308.75,228.45);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgGAGQgCgCAAgEQAAgDACgDQADgCADAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_437.setTransform(290.1,248);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_438.setTransform(265.475,235.975);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgHAAQAAgCADgCQACgDACABQADgBACADQADACAAACQAAAIgIgBQgHABAAgIg");
	this.shape_439.setTransform(289.325,216.85);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAIAAAHAGQAGAGAAAIQAAAIgGAHQgHAGgIAAQgIAAgGgGg");
	this.shape_440.setTransform(292.65,231.75);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgFAAgJQAAgIAGgFQAFgHAIAAQAIAAAGAHQAGAFAAAIQAAAJgGAFQgGAGgIABQgHgBgGgGg");
	this.shape_441.setTransform(285.475,152.75);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgHQAGgGAIAAQAKAAAFAGQAHAHAAAIQAAAJgHAHQgFAGgKAAQgIAAgGgGg");
	this.shape_442.setTransform(270.55,174.85);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_443.setTransform(293.475,214.075);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAHQgHAGgJAAQgIAAgGgGg");
	this.shape_444.setTransform(314.625,194.775);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_445.setTransform(259.825,134.525);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_446.setTransform(264.975,163.5);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_447.setTransform(282.025,159.425);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgYAZQgKgLAAgOQAAgNAKgLQAKgLAOABQAOgBALALQALALAAANQAAAOgLALQgLALgOgBQgOABgKgLg");
	this.shape_448.setTransform(295.05,108.3);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgRASQgHgHAAgLQAAgJAHgIQAIgHAJAAQALAAAHAHQAHAIAAAJQAAALgHAHQgHAHgLAAQgJAAgIgHg");
	this.shape_449.setTransform(297.05,112.6);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRATQgIgJAAgKQAAgKAIgHQAIgIAJAAQALAAAIAIQAHAHAAAKQAAAKgHAJQgIAHgLAAQgJAAgIgHg");
	this.shape_450.setTransform(279.85,91.3);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgEgGAAgHQAAgHAEgEQAGgGAGAAQAIAAAFAGQAEAEAAAHQAAAHgEAGQgFAEgIAAQgGAAgGgEg");
	this.shape_451.setTransform(289.45,71.1);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4).s().p("AgbAcQgLgMAAgQQAAgPALgMQAMgLAPAAQAQAAAMALQALAMAAAPQAAAQgLAMQgMAMgQgBQgPABgMgMg");
	this.shape_452.setTransform(269.675,75.5);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_453.setTransform(284.05,38.575);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_454.setTransform(276.85,86.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgKAAgOQABgNAJgJQAKgLANAAQAOAAAJALQALAJAAANQAAAOgLAKQgJAKgOAAQgNAAgKgKg");
	this.shape_455.setTransform(289.75,79.2);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_456.setTransform(324.5,70.05);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgLAIgIQAJgIAKAAQALAAAJAIQAIAIAAALQAAALgIAJQgJAIgLAAQgKAAgJgIg");
	this.shape_457.setTransform(273.85,37.55);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgHAAQAAgHAHAAQADAAADACQACACAAADQAAAEgCABQgDADgDAAQgHAAAAgIg");
	this.shape_458.setTransform(259.175,280.95);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgDAAQgBgEAEABQAFgBAAAEQAAAFgFAAQgEAAABgFg");
	this.shape_459.setTransform(246.4,299.7);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_460.setTransform(280.175,254.6);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_461.setTransform(247.075,251.575);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_462.setTransform(296.075,227.1);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_463.setTransform(255.35,220.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgHAAgMQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_464.setTransform(247.95,231.6);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_465.setTransform(287.925,201.575);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_466.setTransform(273.975,177.525);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLAMQgFgFgBgHQABgGAFgGQAFgEAGAAQAHAAAGAEQAEAGAAAGQAAAHgEAFQgGAFgHABQgGgBgFgFg");
	this.shape_467.setTransform(271.25,171.85);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAIgKAAQgKAAgHgIg");
	this.shape_468.setTransform(248.65,147.875);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.3).s().p("AgdAeQgNgMAAgSQAAgQANgNQAMgMARAAQARAAANAMQANANAAAQQAAASgNAMQgNAMgRAAQgRAAgMgMg");
	this.shape_469.setTransform(306.7,201.1);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.4).s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQASAAANANQANANAAARQAAASgNANQgNANgSAAQgRAAgNgNg");
	this.shape_470.setTransform(265.775,202.975);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_471.setTransform(269.15,147.55);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgDgDgBgFQABgEADgDQADgDAEAAQAFAAADADQAEADAAAEQAAAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_472.setTransform(274.5,116.475);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.8).s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_473.setTransform(223.85,161.825);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape_474.setTransform(279.1,113.95);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgGgHAAgJQAAgIAGgHQAHgGAIAAQAJAAAHAGQAGAHAAAIQAAAJgGAHQgHAGgJAAQgIAAgHgGg");
	this.shape_475.setTransform(287.975,92.875);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgHAAQAAgCADgCQACgDACAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_476.setTransform(243.075,68.075);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_477.setTransform(302.525,44.775);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.1).s().p("AgbAcQgMgLAAgRQAAgPAMgNQALgMAQABQARgBALAMQAMANAAAPQAAARgMALQgLAMgRABQgQgBgLgMg");
	this.shape_478.setTransform(286.775,78.85);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4).s().p("AgbAcQgMgLAAgRQAAgQAMgLQALgMAQAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgQAAgLgMg");
	this.shape_479.setTransform(253.325,60.875);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_480.setTransform(272.75,42.775);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgGAGQgCgCAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgEADgDAAQgDAAgDgDg");
	this.shape_481.setTransform(230.8,6.825);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_482.setTransform(278.875,30.275);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgFAAQgBgGAGABQAGgBAAAGQAAAGgGAAQgGAAABgGg");
	this.shape_483.setTransform(273.95,303.95);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQABgEAEAAQAGAAgBAEQABAFgGAAQgEAAgBgFg");
	this.shape_484.setTransform(266.7,246);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_485.setTransform(244.25,264.9);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgGgGAAgHQAAgGAGgGQAFgFAHgBQAIABAFAFQAGAGAAAGQAAAHgGAGQgFAGgIgBQgHABgFgGg");
	this.shape_486.setTransform(289.9,240.3);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQAQQgHgGAAgKQAAgJAHgGQAHgIAJAAQAKAAAHAIQAHAGAAAJQAAAKgHAGQgHAIgKgBQgJABgHgIg");
	this.shape_487.setTransform(258.975,250.15);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_488.setTransform(256.25,229.35);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_489.setTransform(268.575,177.625);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLALQgFgEAAgHQAAgGAFgFQAFgEAGgBQAHABAFAEQAFAFAAAGQAAAHgFAEQgFAFgHABQgGgBgFgFg");
	this.shape_490.setTransform(245.375,202.2);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.7).s().p("AgZAaQgLgLAAgPQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_491.setTransform(285.3,161.6);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgUAUQgIgIAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAIQgJAJgMAAQgLAAgJgJg");
	this.shape_492.setTransform(250.3,163.4);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgNANQgFgFAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAFQgFAGgIAAQgHAAgGgGg");
	this.shape_493.setTransform(257.7,154.125);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_494.setTransform(247.425,164.225);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAADAEQAEADAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_495.setTransform(246.025,177.975);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAOQgGgFAAgJQAAgHAGgGQAHgHAHAAQAIAAAHAHQAGAFAAAIQAAAJgGAFQgHAHgIAAQgIAAgGgHg");
	this.shape_496.setTransform(247.825,165.45);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgUAVQgJgIAAgNQAAgMAJgJQAIgIAMgBQANABAIAIQAJAJAAAMQAAANgJAIQgIAKgNgBQgMABgIgKg");
	this.shape_497.setTransform(295.525,162.6);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_498.setTransform(232.25,122.825);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAFQgCgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgCAAgCgCg");
	this.shape_499.setTransform(253.675,80.325);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_500.setTransform(280.45,106.775);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAADADQAEAEAAAEQAAAFgEAEQgDADgFAAQgEAAgEgDg");
	this.shape_501.setTransform(255.75,84.625);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.7).s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_502.setTransform(236.025,82.9);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgKALQgEgEAAgHQAAgFAEgEQAFgFAFAAQAGAAAFAFQAEAEAAAFQAAAHgEAEQgFAEgGAAQgFAAgFgEg");
	this.shape_503.setTransform(252.55,44.6);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_504.setTransform(242.5,71.1);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAGAAAFAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgFAAgFgFg");
	this.shape_505.setTransform(255.55,50.55);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgUAUQgIgIAAgMQAAgLAIgIQAJgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgJgJg");
	this.shape_506.setTransform(234.3,36.7);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgFgFAAgIQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgHAAgFgFg");
	this.shape_507.setTransform(229.025,287.325);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_508.setTransform(241.5,271.825);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgJAAQAAgDADgDQADgCADAAQAEAAADACQADADAAADQAAAEgDADQgDADgEAAQgJAAAAgKg");
	this.shape_509.setTransform(242.825,230.8);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAADADQAEAEAAAEQAAAFgEADQgDAEgFAAQgEAAgDgEg");
	this.shape_510.setTransform(259.025,278);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgCgDAAgEQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_511.setTransform(275.975,237.6);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_512.setTransform(222.925,218.85);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_513.setTransform(268.3,232);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGABQAHgBAAAGQAAAGgHAAQgGAAAAgGg");
	this.shape_514.setTransform(247.125,167.15);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgQARQgIgHAAgKQAAgJAIgIQAHgGAJAAQAKAAAIAGQAGAIAAAJQAAAKgGAHQgIAIgKgBQgJABgHgIg");
	this.shape_515.setTransform(227.55,225.65);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_516.setTransform(263.325,176.575);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAGQgCgDAAgDQAAgCACgCQACgDACAAQAHAAAAAHQAAAHgHAAQgCAAgCgBg");
	this.shape_517.setTransform(243.375,186.3);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_518.setTransform(236.45,187.8);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQARQgHgHAAgKQAAgJAHgHQAHgHAJAAQAKAAAHAHQAHAHAAAJQAAAKgHAHQgHAHgKAAQgJAAgHgHg");
	this.shape_519.setTransform(221.475,124.825);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgGAGQgCgCAAgEQAAgDACgDQADgCADAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgDAAgDgDg");
	this.shape_520.setTransform(282.9,152.6);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHAAQAIAAAFAFQAGAFgBAHQABAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_521.setTransform(279.45,67.75);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.3).s().p("AgWAYQgKgKAAgOQAAgNAKgJQAJgKANAAQANAAAKAKQAKAJAAANQAAAOgKAKQgKAJgNAAQgNAAgJgJg");
	this.shape_522.setTransform(271.45,94.05);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_523.setTransform(212.4,102.175);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgDAAgDQAAgDADgCQACgDADAAQADAAADADQADACAAADQAAAEgDACQgCADgEAAQgDAAgCgDg");
	this.shape_524.setTransform(247.375,99.025);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRASQgHgHgBgLQABgKAHgHQAIgIAJAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgJAAgIgIg");
	this.shape_525.setTransform(244.4,78.125);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_526.setTransform(246.725,53.775);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_527.setTransform(249.825,19.475);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgFAAgJQAAgHAGgGQAFgGAIAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgGAGgIAAQgHAAgGgGg");
	this.shape_528.setTransform(268.525,59.125);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgPAPQgGgGAAgJQAAgJAGgFQAHgHAIAAQAJAAAHAHQAGAFAAAJQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_529.setTransform(236.65,46.2);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLAMQgGgFAAgHQAAgGAGgGQAFgEAGAAQAIAAAEAEQAGAGAAAGQAAAHgGAFQgEAGgIAAQgGAAgFgGg");
	this.shape_530.setTransform(242.15,285.9);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAFQgDgCABgDQgBgCADgCQACgDACABQAHAAAAAGQAAAIgHgBQgCAAgCgCg");
	this.shape_531.setTransform(244.55,289.3);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_532.setTransform(220.725,296.6);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgFAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAFQgGAGgIAAQgHAAgFgGg");
	this.shape_533.setTransform(206.55,243.75);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_534.setTransform(206.675,239.25);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHgBQAIABAGAFQAGAGgBAHQABAIgGAGQgGAGgIgBQgHABgGgGg");
	this.shape_535.setTransform(258,253.45);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAIgGAHQgGAGgJAAQgIAAgGgGg");
	this.shape_536.setTransform(237.625,214.15);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_537.setTransform(239.25,200.8);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgFABgIQgBgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_538.setTransform(217.1,172.625);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgPARQgIgHAAgKQAAgIAIgIQAGgGAJgBQAKABAGAGQAHAIAAAIQAAAKgHAHQgGAGgKABQgJgBgGgGg");
	this.shape_539.setTransform(259.4,146.05);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_540.setTransform(221.875,160.225);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgHAKgBQAKABAIAHQAHAIAAAJQAAALgHAHQgIAIgKAAQgKAAgHgIg");
	this.shape_541.setTransform(234.7,154.6);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgFAHQgDgDAAgEQAAgDADgDQACgDADABQAKAAAAAIQAAAEgDADQgDACgEAAQgDAAgCgCg");
	this.shape_542.setTransform(203.6,205.9);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgLAIgIQAIgIALAAQAMAAAIAIQAIAIAAALQAAALgIAJQgIAIgMAAQgLAAgIgIg");
	this.shape_543.setTransform(232.025,148.325);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.3).s().p("AgBAAQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_544.setTransform(219.1,151);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgOAQQgHgHAAgJQAAgIAHgGQAGgHAIAAQAJAAAHAHQAGAGAAAIQAAAJgGAHQgHAGgJAAQgIAAgGgGg");
	this.shape_545.setTransform(257.925,118.475);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgGAAgIQAAgIAGgFQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape_546.setTransform(221.225,108.375);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.9).s().p("AghAjQgOgOgBgVQABgTAOgOQAOgPATAAQAUAAAOAPQAOAOABATQgBAVgOAOQgOAOgUgBQgTABgOgOg");
	this.shape_547.setTransform(246.15,136.85);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_548.setTransform(215.475,91.675);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgEAAQgBgEAFgBQAFABABAEQgBAGgFgBQgFABABgGg");
	this.shape_549.setTransform(199.7,102.65);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgGAIgBQAKABAGAGQAHAGgBAJQABAJgHAHQgGAGgKAAQgIAAgHgGg");
	this.shape_550.setTransform(235.85,51.7);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_551.setTransform(206.725,33.975);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFAAQAHAAAEAEQAEAFAAAFQAAAGgEAFQgEAEgHAAQgFAAgFgEg");
	this.shape_552.setTransform(246.425,35.825);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgFAAgGQAAgFAFgFQAFgFAFAAQAHAAAEAFQAFAFAAAFQAAAGgFAFQgEAEgHABQgFgBgFgEg");
	this.shape_553.setTransform(213.175,12.5);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgLgLAAgQQAAgPALgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLg");
	this.shape_554.setTransform(233.175,13.5);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_555.setTransform(236.625,31.075);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_556.setTransform(198.5,296.9);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgDAEAAQAFAAgBADQABAEgFAAQgEAAAAgEg");
	this.shape_557.setTransform(235.75,287.725);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgEgEAAgGQgBgFAFgEQAEgFAFAAQAGAAAFAFQADAEAAAFQAAAGgDAEQgFAFgGAAQgFAAgEgFg");
	this.shape_558.setTransform(200.25,251.45);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgCgDgBgEQAAgJAJAAQAEABADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_559.setTransform(234.7,243.8);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAFQgCgCgBgDQABgGAGAAQAIAAAAAGQAAADgCACQgDACgDAAQgCAAgCgCg");
	this.shape_560.setTransform(209.75,238);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgCAAgEQAAgCADgDQACgDADABQADgBADADQADADgBACQABAEgDACQgDACgDABQgDgBgCgCg");
	this.shape_561.setTransform(188.8,204.45);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAJAAAFAGQAGAGAAAHQAAAIgGAGQgFAGgJAAQgHAAgGgGg");
	this.shape_562.setTransform(178.75,224.9);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJALQgFgFAAgGQAAgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAFQgEAEgGAAQgFAAgEgEg");
	this.shape_563.setTransform(176.775,184.925);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_564.setTransform(255.475,180.325);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgLALQgEgEAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAEQgGAFgGAAQgGAAgFgFg");
	this.shape_565.setTransform(217.8,192.875);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_566.setTransform(189.225,147.975);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAJAAAGAGQAGAHAAAHQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_567.setTransform(207.05,145.1);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgFAAgFQAAgFAEgEQAFgEAEAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAQgEAAgFgEg");
	this.shape_568.setTransform(205.7,127.225);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.7).s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape_569.setTransform(190.525,162.3);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_570.setTransform(240.95,124.925);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_571.setTransform(192.625,109.325);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,5.3).s().p("AgkAlQgQgPAAgWQAAgVAQgPQAPgQAVAAQAWAAAPAQQAQAPAAAVQAAAWgQAPQgPAQgWAAQgVAAgPgQg");
	this.shape_572.setTransform(217.925,75.375);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgEgFAAgGQgBgGAFgEQAFgFAFAAQAHAAAEAFQAFAEgBAGQABAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_573.setTransform(256.6,85.125);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_574.setTransform(181.825,83.025);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgMgLAAgQQAAgPAMgLQAMgMAOAAQAQAAALAMQAMALAAAPQAAAQgMALQgLALgQAAQgOAAgMgLg");
	this.shape_575.setTransform(202.7,66.2);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgDgFAAgFQAAgEADgFQAEgEAFAAQAFAAAEAEQAFAFAAAEQAAAFgFAFQgEADgFAAQgFAAgEgDg");
	this.shape_576.setTransform(245.25,45.75);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgPAPQgGgGAAgJQAAgJAGgFQAHgHAIAAQAJAAAHAHQAGAFAAAJQAAAJgGAGQgHAHgJAAQgIAAgHgHg");
	this.shape_577.setTransform(175.225,84.1);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_578.setTransform(235.025,24.575);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgLAIgIQAJgIAKAAQAMAAAIAIQAIAIAAALQAAALgIAJQgIAIgMAAQgKAAgJgIg");
	this.shape_579.setTransform(224.4,66.7);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.3).s().p("AgCAAQAAAAAAAAQABgBAAAAQAAAAABAAQAAgBAAAAQAAAAABABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQgBABAAAAQAAAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAgBg");
	this.shape_580.setTransform(198.425,267.95);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.2).s().p("AgVAWQgKgJAAgNQAAgMAKgKQAJgIAMgBQANABAJAIQAKAKgBAMQABANgKAJQgJAJgNAAQgMAAgJgJg");
	this.shape_581.setTransform(165.25,254.05);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_582.setTransform(214.95,223.175);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgEABgHQgBgFAFgFQAEgEAGAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_583.setTransform(235.7,231.225);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgEAAgEQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgEAAgDgDg");
	this.shape_584.setTransform(188.25,188.45);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABABQAAAAABAAQAAABAAAAQABABAAAAQAAABgBABQAAAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBgBAAgBg");
	this.shape_585.setTransform(153,239);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgFAHAAQAIAAAFAFQAFAFAAAHQAAAHgFAGQgFAFgIAAQgHAAgFgFg");
	this.shape_586.setTransform(215.975,175.325);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAFAEQADAEAAAEQAAAGgDADQgFAEgFAAQgEAAgEgEg");
	this.shape_587.setTransform(168.05,199.775);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.5).s().p("AgYAZQgKgKAAgPQAAgOAKgKQAKgKAOAAQAOAAALAKQAKAKAAAOQAAAPgKAKQgLAKgOAAQgNAAgLgKg");
	this.shape_588.setTransform(198.4,187.9);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_589.setTransform(227.7,160.225);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgIAAQABgHAHAAQAEAAACACQACACABADQAAAIgJAAQgHAAgBgIg");
	this.shape_590.setTransform(200.75,162.975);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgCAAgEQAAgIAIAAQAJAAgBAIQAAAEgCACQgDACgDAAQgDAAgCgCg");
	this.shape_591.setTransform(204.75,107.45);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgFAGQgCgDAAgDQAAgHAHAAQAIAAAAAHQAAADgCADQgCACgEAAQgCAAgDgCg");
	this.shape_592.setTransform(172.05,142.325);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_593.setTransform(201.7,127.2);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgEgFAAgHQAAgGAEgFQAGgFAFAAQAHAAAFAFQAEAFAAAGQAAAHgEAFQgFAFgHAAQgGAAgFgFg");
	this.shape_594.setTransform(203.4,128.975);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAFAAAFAEQAEAFAAAEQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_595.setTransform(196.9,129.3);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgCAAgEQAAgDADgDQADgCACAAQAEAAACACQADADAAADQAAAEgDACQgCADgEAAQgCAAgDgDg");
	this.shape_596.setTransform(164.25,125.15);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAAMgIAHQgIAIgLAAQgKAAgIgIg");
	this.shape_597.setTransform(202.975,73.05);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_598.setTransform(160,49.75);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_599.setTransform(181.675,50.125);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAHAAAGAGQAGAFgBAHQABAIgGAFQgGAGgHgBQgHABgFgGg");
	this.shape_600.setTransform(201.6,48.8);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAFQgFAEgHAAQgGAAgFgEg");
	this.shape_601.setTransform(201.375,38.55);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQAQQgGgGAAgKQAAgJAGgGQAHgHAJAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgHgHg");
	this.shape_602.setTransform(201.025,33.775);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_603.setTransform(217.875,26.15);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_604.setTransform(166.775,271.275);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.3).s().p("AgCAAQAAAAABAAQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_605.setTransform(150.3,263.95);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAEAAAEAEQADADAAADQAAAFgDADQgEADgEAAQgDAAgDgDg");
	this.shape_606.setTransform(181,251.975);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgCgDAAgDQgBgIAIAAQAJAAgBAIQAAADgCADQgDACgDAAQgCAAgDgCg");
	this.shape_607.setTransform(176.5,270.2);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_608.setTransform(179.425,220.075);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgFAAgFQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAFgEAFQgEAEgGAAQgFAAgEgEg");
	this.shape_609.setTransform(208.125,232.9);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgOAPQgHgGABgJQgBgIAHgGQAGgHAIAAQAJAAAHAHQAFAGAAAIQAAAJgFAGQgHAHgJAAQgIAAgGgHg");
	this.shape_610.setTransform(182.75,193.425);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.2).s().p("AgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAgBAAAAg");
	this.shape_611.setTransform(184.875,195.925);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgEAEAAQAFAAADAEQADADAAAEQAAAFgDADQgDADgFABQgEgBgDgDg");
	this.shape_612.setTransform(163.025,141.7);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgFAGAAQAHAAAFAFQAEAFAAAGQAAAHgEAFQgFAFgHAAQgFAAgGgFg");
	this.shape_613.setTransform(204.95,177.825);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_614.setTransform(204.45,123.9);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgIAAgNQAAgLAJgJQAJgJALAAQAMAAAJAJQAJAJAAALQAAANgJAIQgJAJgMAAQgLAAgJgJg");
	this.shape_615.setTransform(206.925,159.925);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_616.setTransform(219.575,139.075);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAFAEQADAEAAAEQAAAGgDADQgFAEgFAAQgEAAgEgEg");
	this.shape_617.setTransform(159.05,123.275);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgJANgBQAOABAJAJQALAKAAANQAAAOgLAKQgJAJgOABQgNgBgKgJg");
	this.shape_618.setTransform(157.9,142.1);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAIQAAAJgGAGQgGAGgJAAQgIAAgGgGg");
	this.shape_619.setTransform(176.325,120.975);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_620.setTransform(179,117.55);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.5).s().p("AgYAYQgKgJAAgPQAAgNAKgKQALgLANABQAOgBALALQAKAKAAANQAAAPgKAJQgLAKgOAAQgNAAgLgKg");
	this.shape_621.setTransform(183.725,35.95);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4).s().p("AgbAcQgMgMAAgQQAAgPAMgMQAMgMAPAAQARAAALAMQALAMAAAPQAAAQgLAMQgLAMgRAAQgPAAgMgMg");
	this.shape_622.setTransform(173.2,74.225);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgGAIAAQAKAAAGAGQAGAGAAAJQAAAJgGAHQgGAGgKABQgIgBgHgGg");
	this.shape_623.setTransform(186.6,57.25);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_624.setTransform(208.75,65.7);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_625.setTransform(188.825,10.825);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgGAGAAQAHAAAFAGQAFAFAAAGQAAAHgFAFQgFAGgHAAQgGAAgFgGg");
	this.shape_626.setTransform(184.425,49.75);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgGAGAAQAHAAAFAGQAFAFAAAGQAAAHgFAFQgFAGgHAAQgGAAgFgGg");
	this.shape_627.setTransform(137.975,290.05);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_628.setTransform(191.325,273.975);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_629.setTransform(158.975,257.1);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgEAAgEQAAgDADgDQAEgDADAAQAFAAACADQADADAAADQAAAEgDAEQgCADgFAAQgDAAgEgDg");
	this.shape_630.setTransform(188.35,275.45);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgGAAgJQAAgHAGgHQAGgGAIAAQAIAAAHAGQAGAHAAAHQAAAJgGAGQgHAGgIAAQgIAAgGgGg");
	this.shape_631.setTransform(169.425,218.775);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_632.setTransform(181.375,198.975);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSAUQgJgIABgMQgBgKAJgJQAIgHAKgBQALABAIAHQAJAJAAAKQAAAMgJAIQgIAHgLAAQgKAAgIgHg");
	this.shape_633.setTransform(147.1,225.65);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAOQgFgFAAgJQAAgIAFgFQAHgHAHAAQAJAAAFAHQAHAFgBAIQABAJgHAFQgFAHgJAAQgHAAgHgHg");
	this.shape_634.setTransform(157.9,183.45);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgDAEgEQAEgDADgBQAFABADADQADAEAAADQAAAFgDADQgDAEgFAAQgDAAgEgEg");
	this.shape_635.setTransform(166.8,178.4);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAJQgDgEAAgFQAAgEADgFQAFgDAEAAQAFAAAEADQAFAFAAAEQAAAFgFAEQgEAFgFAAQgEAAgFgFg");
	this.shape_636.setTransform(162.45,204.4);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.9).s().p("AgaAcQgMgMAAgQQAAgPAMgLQALgLAPAAQAQAAALALQAMALAAAPQAAAQgMAMQgLALgQgBQgPABgLgLg");
	this.shape_637.setTransform(123.125,195);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgYAaQgLgLAAgPQAAgOALgLQAKgKAOAAQAPAAALAKQAKALAAAOQAAAPgKALQgLAKgPAAQgOAAgKgKg");
	this.shape_638.setTransform(212.675,169.225);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgEgEAAgHQAAgFAEgFQAEgEAGAAQAGAAAFAEQAEAFAAAFQAAAHgEAEQgFAEgGAAQgGAAgEgEg");
	this.shape_639.setTransform(157.925,179.725);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTATQgHgHAAgMQAAgKAHgJQAIgHALgBQALABAJAHQAHAJABAKQgBAMgHAHQgJAIgLAAQgLAAgIgIg");
	this.shape_640.setTransform(159.5,132.85);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgEAAgHQAAgFAFgFQAFgFAFAAQAHAAAFAFQAEAFAAAFQAAAHgEAEQgFAFgHAAQgFAAgFgFg");
	this.shape_641.setTransform(210.35,102.3);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_642.setTransform(167.575,151.75);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_643.setTransform(169.725,86.625);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_644.setTransform(204.95,46.65);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAIgGAGQgGAGgIAAQgHAAgGgGg");
	this.shape_645.setTransform(167.625,101.975);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgDQADgEAEAAQAFAAAEAEQADADAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_646.setTransform(208.75,67.775);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAGQgCgDAAgDQAAgCACgCQACgDACAAQADAAACADQACACAAACQAAADgCADQgCACgDAAQgCAAgCgCg");
	this.shape_647.setTransform(185.85,77.3);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQABgFAEAAQAGAAgBAFQABAGgGAAQgEAAgBgGg");
	this.shape_648.setTransform(167.25,69.1);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgLAJgKQAJgJAMAAQANAAAJAJQAJAKAAALQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_649.setTransform(197.1,22.15);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgEAEgFQAFgEAEAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgEAAgFgEg");
	this.shape_650.setTransform(131.475,22.075);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPARQgHgHAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAHQgGAGgKAAQgJAAgGgGg");
	this.shape_651.setTransform(199.625,275.175);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgFABgGQgBgGAFgEQAEgEAGgBQAGABAFAEQAEAEAAAGQAAAGgEAFQgFAFgGAAQgGAAgEgFg");
	this.shape_652.setTransform(119.15,280.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgKALQgFgEAAgHQAAgGAFgFQAEgEAGAAQAHAAAFAEQAEAFAAAGQAAAHgEAEQgFAFgHAAQgFAAgFgFg");
	this.shape_653.setTransform(174.375,251.775);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgEgFAAgHQAAgGAEgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgFAAgGgFg");
	this.shape_654.setTransform(154.2,217.525);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgKALQgEgEAAgHQAAgFAEgEQAFgFAFAAQAGAAAEAFQAFAEAAAFQAAAHgFAEQgEAEgGAAQgFAAgFgEg");
	this.shape_655.setTransform(149.65,249.35);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgGAGQgCgCAAgEQAAgDACgDQADgCADAAQAEAAADACQACADAAADQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_656.setTransform(185.65,230.425);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_657.setTransform(156.325,198.2);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgIAJQgDgEAAgFQAAgEADgEQAEgDAEAAQAFAAAEADQADAEAAAEQAAAFgDAEQgEADgFAAQgEAAgEgDg");
	this.shape_658.setTransform(177.225,157.225);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgCgDAAgDQAAgDACgCQADgCACAAQAIAAAAAHQAAADgCADQgCACgEAAQgCAAgDgCg");
	this.shape_659.setTransform(138.725,209.025);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgGAHQgCgDAAgEQAAgDACgCQADgDADAAQAEAAADADQACACAAADQAAAEgCADQgDACgEAAQgDAAgDgCg");
	this.shape_660.setTransform(173.05,192.575);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQAAAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBg");
	this.shape_661.setTransform(171.925,170.425);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAFAAAEAEQADAEAAAEQAAAGgDADQgDAEgGAAQgEAAgEgEg");
	this.shape_662.setTransform(133.05,155.425);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAFQgDgCAAgDQAAgHAHABQAHgBABAHQgBAIgHgBQgCAAgCgCg");
	this.shape_663.setTransform(113.1,138.45);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_664.setTransform(136.975,105.925);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_665.setTransform(153.925,113.975);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_666.setTransform(169.975,121);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_667.setTransform(167.675,131.525);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_668.setTransform(134.75,47.3);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4).s().p("AgbAcQgMgLAAgRQAAgQAMgLQAMgMAPAAQARAAALAMQAMALAAAQQAAARgMALQgLAMgRAAQgPAAgMgMg");
	this.shape_669.setTransform(129.95,121.65);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTATQgHgIgBgLQABgLAHgHQAIgJALAAQALAAAJAJQAHAHABALQgBALgHAIQgJAJgLgBQgKABgJgJg");
	this.shape_670.setTransform(169.75,102.95);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.8).s().p("AgaAbQgLgLAAgQQAAgOALgMQAMgLAOAAQAQAAALALQALAMAAAOQAAAQgLALQgLALgQAAQgOAAgMgLg");
	this.shape_671.setTransform(157.95,16.05);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_672.setTransform(134.15,87.8);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHgBAIQABAKgHAGQgGAHgKgBQgIABgHgHg");
	this.shape_673.setTransform(157.55,34.45);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,5.2).s().p("AgjAkQgQgOAAgWQAAgUAQgPQAPgPAUgBQAWABAOAPQAQAPAAAUQAAAWgQAOQgOAQgWAAQgUAAgPgQg");
	this.shape_674.setTransform(165.65,14.65);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgPAQQgIgGAAgKQAAgIAIgIQAHgGAIAAQAKAAAHAGQAGAIAAAIQAAAKgGAGQgHAIgKAAQgIAAgHgIg");
	this.shape_675.setTransform(155.55,28.45);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgDgDgBgGQABgEADgDQAEgEAEgBQAFABAEAEQADADABAEQgBAGgDADQgEAEgFgBQgEABgEgEg");
	this.shape_676.setTransform(131.95,303.9);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFgBQgEABAAgFg");
	this.shape_677.setTransform(135.675,252.7);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgIAKQgFgFAAgFQAAgEAFgFQAEgEAEAAQAGAAAEAEQADAFAAAEQAAAFgDAFQgEADgGAAQgEAAgEgDg");
	this.shape_678.setTransform(121.35,295.5);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgFgGgBgHQABgHAFgFQAGgGAGABQAIgBAFAGQAFAFAAAHQAAAHgFAGQgFAFgIABQgGgBgGgFg");
	this.shape_679.setTransform(149.1,280.05);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_680.setTransform(148.075,259.275);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFgBQAGABAAAFQAAAHgGAAQgFAAAAgHg");
	this.shape_681.setTransform(172.525,232.35);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_682.setTransform(157.525,235.325);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgEAEgEQADgEAFAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgFAAgDgEg");
	this.shape_683.setTransform(146.45,222.175);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_684.setTransform(108.875,182.575);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgFAEABQAFgBAAAFQAAAFgFABQgEgBAAgFg");
	this.shape_685.setTransform(192.325,173.8);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_686.setTransform(141.45,201.65);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgDgDAAgEQAAgDADgDQADgDADAAQAEAAADADQADADAAADQAAAEgDADQgDADgEAAQgDAAgDgDg");
	this.shape_687.setTransform(155.975,171.625);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAAIgIAAQgHAAAAgIg");
	this.shape_688.setTransform(113.325,166.8);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgOAQQgGgHgBgJQABgIAGgGQAGgHAIAAQAJAAAGAHQAHAGAAAIQAAAJgHAHQgGAGgJAAQgIAAgGgGg");
	this.shape_689.setTransform(95.85,154.025);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgIAAgMQAAgKAIgJQAJgIAKAAQAMAAAIAIQAIAJAAAKQAAAMgIAIQgIAIgMAAQgKAAgJgIg");
	this.shape_690.setTransform(113.975,116.075);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgGAIQgEgEAAgEQAAgEAEgDQADgDADAAQAFAAADADQADADAAAEQAAAEgDAEQgDADgFAAQgDAAgDgDg");
	this.shape_691.setTransform(167.875,98.65);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDAAgFQAAgEAEgEQADgDAEAAQAFAAAEADQADAEAAAEQAAAFgDADQgEAEgFAAQgEAAgDgEg");
	this.shape_692.setTransform(137,111.15);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgFgEABgGQgBgFAFgEQAEgFAFAAQAGAAAEAFQAFAEAAAFQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_693.setTransform(144.25,98.025);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgKAKQgEgEAAgGQAAgGAEgDQAEgFAGAAQAGAAAEAFQAFADAAAGQAAAGgFAEQgEAFgGAAQgGAAgEgFg");
	this.shape_694.setTransform(135.25,82.25);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgCgCAAgEQAAgCACgDQADgCACAAQADAAADACQADADAAACQAAADgDADQgDACgDAAQgCAAgDgCg");
	this.shape_695.setTransform(184.25,42.6);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgJAAgMQAAgMAJgIQAIgJAMAAQAMAAAJAJQAJAIAAAMQAAAMgJAJQgJAJgMAAQgMAAgIgJg");
	this.shape_696.setTransform(115.775,65.425);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_697.setTransform(170.85,71.75);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,4.4).s().p("AgeAfQgNgNAAgSQAAgRANgNQANgNARAAQATAAAMANQANANAAARQAAASgNANQgMANgTAAQgRAAgNgNg");
	this.shape_698.setTransform(148.6,34.4);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgLAPAAQAQAAALALQALALAAAPQAAAQgLALQgLALgQAAQgPAAgLgLg");
	this.shape_699.setTransform(167.25,20.4);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgTAUQgJgIAAgMQAAgLAJgIQAJgIAKAAQAMAAAJAIQAIAIAAALQAAAMgIAIQgJAIgMAAQgKAAgJgIg");
	this.shape_700.setTransform(137.45,50.125);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAEAAAEADQADADAAAEQAAAFgDADQgEADgEAAQgEAAgDgDg");
	this.shape_701.setTransform(97.8,244.175);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_702.setTransform(106.9,288.575);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgFgFAAgIQAAgGAFgGQAFgFAHAAQAHAAAGAFQAFAGAAAGQAAAIgFAFQgGAFgHAAQgHAAgFgFg");
	this.shape_703.setTransform(111.825,269.575);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgEgFAAgGQAAgFAEgFQAFgEAFgBQAHABAEAEQAEAFAAAFQAAAGgEAFQgEAFgHAAQgFAAgFgFg");
	this.shape_704.setTransform(142.375,288.7);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgFAAgIQAAgHAGgFQAGgFAGAAQAIAAAFAFQAGAFgBAHQABAIgGAFQgFAFgIAAQgGAAgGgFg");
	this.shape_705.setTransform(95.75,271.15);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgIAAQAAgDADgCQACgCADgBQADABADACQADACgBADQAAAJgIAAQgIAAAAgJg");
	this.shape_706.setTransform(124.45,213.1);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgZAaQgKgLAAgPQAAgOAKgKQALgLAOAAQAPAAALALQAKAKAAAOQAAAPgKALQgLAKgPAAQgOAAgLgKg");
	this.shape_707.setTransform(152.475,176.325);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgJALAAQANAAAIAJQAJAJAAALQAAAMgJAJQgIAJgNAAQgLAAgJgJg");
	this.shape_708.setTransform(151.025,191.875);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_709.setTransform(124.075,168.675);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgIAAgMQAAgKAIgJQAIgIALAAQAMAAAIAIQAIAJAAAKQAAAMgIAIQgIAIgMAAQgLAAgIgIg");
	this.shape_710.setTransform(101.35,209.75);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgHAIQgDgDAAgFQAAgEADgDQADgDAEAAQAFAAADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDg");
	this.shape_711.setTransform(101.325,183.725);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgEgEgBgGQABgFAEgEQAEgEAFAAQAGAAAFAEQADAEAAAFQAAAGgDAEQgFAEgGAAQgFAAgEgEg");
	this.shape_712.setTransform(137.9,197.125);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_713.setTransform(130.125,150.275);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAGQgDgDAAgDQAAgHAHAAQADAAADADQABACAAACQAAADgBADQgDACgDAAQgCAAgCgCg");
	this.shape_714.setTransform(154.7,155.625);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAGQgCgCAAgEQAAgJAIAAQAJAAAAAJQAAAEgCACQgDADgEAAQgDAAgDgDg");
	this.shape_715.setTransform(149.45,143.75);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgEAEgFQAFgEAEAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgEAAgFgEg");
	this.shape_716.setTransform(82.425,121.875);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgKALQgEgFAAgGQAAgFAEgEQAFgFAFAAQAHAAAEAFQAEAEAAAFQAAAGgEAFQgEAEgHAAQgFAAgFgEg");
	this.shape_717.setTransform(137,95.825);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.2).s().p("AgWAWQgIgJgBgNQABgMAIgKQAKgJAMAAQANAAAJAJQAJAKAAAMQAAANgJAJQgJAKgNgBQgMABgKgKg");
	this.shape_718.setTransform(104.7,123.7);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.6).s().p("AgYAZQgLgKAAgPQAAgOALgKQAKgLAOAAQAPAAAKALQALAKAAAOQAAAPgLAKQgKALgPAAQgOAAgKgLg");
	this.shape_719.setTransform(113.175,88.625);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgXAYQgKgKAAgOQAAgNAKgKQAKgKANAAQAOAAAKAKQAKAKAAANQAAAOgKAKQgKAKgOAAQgNAAgKgKg");
	this.shape_720.setTransform(157.175,58.775);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.7).s().p("AgZAaQgKgLAAgPQAAgOAKgKQALgLAOAAQAPAAALALQAKAKAAAOQAAAPgKALQgLALgPAAQgOAAgLgLg");
	this.shape_721.setTransform(135.425,68.8);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgFgEAAgGQAAgGAFgEQAEgEAFAAQAGAAAEAEQAFAEAAAGQAAAGgFAEQgEAFgGAAQgFAAgEgFg");
	this.shape_722.setTransform(75.325,6.4);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgEAEgFQAEgEAFAAQAGAAAEAEQAEAFAAAEQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_723.setTransform(100.3,30.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgIAAQAAgDACgDQADgDADAAQAEAAADADQACADAAADQAAAJgJAAQgIAAAAgJg");
	this.shape_724.setTransform(103.575,28.25);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAFQgCgCAAgDQAAgCACgCQACgCACAAQADAAACACQACACAAACQAAADgCACQgCACgDAAQgCAAgCgCg");
	this.shape_725.setTransform(91.45,267.15);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_726.setTransform(105.925,268.725);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgHAAgJQAAgJAHgGQAGgHAJAAQAJAAAHAHQAHAGAAAJQAAAJgHAHQgHAHgJAAQgJAAgGgHg");
	this.shape_727.setTransform(104.225,279.575);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgGAHAAQAIAAAFAGQAGAFAAAHQAAAIgGAFQgFAGgIAAQgHAAgFgGg");
	this.shape_728.setTransform(88.025,272.225);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_729.setTransform(78.15,230.3);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMAOQgGgGAAgIQAAgHAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgFgFg");
	this.shape_730.setTransform(113.975,245.475);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.5).s().p("AgYAYQgJgJgBgPQABgNAJgKQALgLANABQAPgBAKALQAJAKABANQgBAPgJAJQgKAKgPAAQgNAAgLgKg");
	this.shape_731.setTransform(116.15,243.85);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgHAAQAAgHAHAAQAIAAAAAHQAAADgCADQgDACgDAAQgHAAAAgIg");
	this.shape_732.setTransform(90.775,225.475);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDAAgGQAAgFAEgDQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_733.setTransform(109.775,240.4);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAFQgDgCAAgDQAAgCADgCQACgDACABQADgBADADQACACAAACQAAADgCACQgDACgDABQgCgBgCgCg");
	this.shape_734.setTransform(77.55,193.1);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgPAQQgHgGAAgKQAAgIAHgHQAHgHAIAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgIAAgHgHg");
	this.shape_735.setTransform(145.825,197.125);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAJQgEgDAAgGQAAgFAEgDQAFgEAEgBQAFABAFAEQADADAAAFQAAAGgDADQgFAEgFAAQgEAAgFgEg");
	this.shape_736.setTransform(93.25,203.2);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgHAAgIQAAgIAGgGQAGgGAIAAQAIAAAHAGQAGAGAAAIQAAAIgGAHQgHAGgIAAQgIAAgGgGg");
	this.shape_737.setTransform(62.675,162.675);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_738.setTransform(115.325,135.875);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRASQgIgHAAgLQAAgJAIgIQAHgHAKAAQALAAAHAHQAHAIAAAJQAAALgHAHQgIAHgKAAQgKAAgHgHg");
	this.shape_739.setTransform(79,117.275);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgGAAgKQAAgJAHgHQAGgGAJAAQAKAAAHAGQAGAHAAAJQAAAKgGAGQgHAHgKAAQgIAAgHgHg");
	this.shape_740.setTransform(131.125,130.575);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_741.setTransform(114.225,114.075);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgFAGQgDgCAAgEQAAgHAIgBQAIABAAAHQABAEgDACQgDACgDABQgDgBgCgCg");
	this.shape_742.setTransform(121.3,100.15);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3).s().p("AgUAVQgJgJAAgMQAAgLAJgJQAJgIALgBQAMABAJAIQAIAJAAALQAAAMgIAJQgJAIgMAAQgLAAgJgIg");
	this.shape_743.setTransform(109.2,94.1);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQABgFAFAAQAGAAAAAFQAAAHgGgBQgFABgBgHg");
	this.shape_744.setTransform(88.05,123.7);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgMANQgFgGAAgHQAAgHAFgFQAFgGAHAAQAHAAAGAGQAFAFABAHQgBAHgFAGQgGAGgHgBQgHABgFgGg");
	this.shape_745.setTransform(132.7,62.3);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgHAAQAAgHAHAAQADAAADACQACADAAACQAAAEgCACQgDACgDAAQgHAAAAgIg");
	this.shape_746.setTransform(109.425,80.9);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.4).s().p("AgWAYQgKgKAAgOQAAgNAKgKQAJgKANAAQAOAAAKAKQAKAKgBANQABAOgKAKQgKAKgOAAQgNAAgJgKg");
	this.shape_747.setTransform(89,58.575);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgEAAQAAgEAEAAQAFAAAAAEQAAAFgFAAQgEAAAAgFg");
	this.shape_748.setTransform(72.9,72.875);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgPARQgIgHABgKQgBgJAIgHQAGgHAJAAQAKAAAGAHQAIAHgBAJQABAKgIAHQgGAHgKAAQgJAAgGgHg");
	this.shape_749.setTransform(147.6,32.225);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.3).s().p("AgWAXQgKgJAAgOQAAgNAKgJQAJgKANAAQAOAAAKAKQAJAJAAANQAAAOgJAJQgKAKgOAAQgNAAgJgKg");
	this.shape_750.setTransform(97.125,24.825);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_751.setTransform(110.375,297.6);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAFAFQAGAGAAAHQAAAIgGAGQgFAFgIAAQgHAAgGgFg");
	this.shape_752.setTransform(95.925,251.825);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgLAIgIQAJgIAKAAQAMAAAIAIQAIAIAAALQAAALgIAJQgIAIgMAAQgKAAgJgIg");
	this.shape_753.setTransform(85.175,266.175);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.9).s().p("AgTAUQgJgIAAgMQAAgLAJgIQAIgJALAAQAMAAAIAJQAJAIAAALQAAAMgJAIQgIAJgMAAQgLAAgIgJg");
	this.shape_754.setTransform(92.925,248.425);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_755.setTransform(105.425,236.625);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgEAAQAAgFAEAAQAFAAAAAFQAAAGgFAAQgEAAAAgGg");
	this.shape_756.setTransform(59.95,236.625);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQAQQgGgGAAgKQAAgJAGgGQAHgHAJAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgHgHg");
	this.shape_757.setTransform(133.125,203.175);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQABgFAFgBQAHABgBAFQABAHgHAAQgFAAgBgHg");
	this.shape_758.setTransform(106.5,180.6);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgFgHgBgIQABgIAFgFQAHgHAHAAQAJAAAFAHQAHAGgBAHQABAIgHAHQgFAFgJABQgHgBgHgFg");
	this.shape_759.setTransform(98.4,176.05);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2).s().p("AgNAOQgGgGAAgIQAAgHAGgGQAGgGAHAAQAIAAAGAGQAGAGAAAHQAAAJgGAFQgFAGgJAAQgHAAgGgGg");
	this.shape_760.setTransform(99.325,153.525);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_761.setTransform(91.45,170.425);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJALQgEgFAAgGQgBgFAFgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAFQgFADgGAAQgFAAgEgDg");
	this.shape_762.setTransform(87.75,129.55);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgRASQgHgIAAgKQAAgKAHgHQAIgHAJAAQALAAAHAHQAHAHAAAKQAAAKgHAIQgHAHgLAAQgJAAgIgHg");
	this.shape_763.setTransform(63.975,145.025);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_764.setTransform(69.575,123.65);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEAEAAAEQAAAFgEAEQgEAEgFAAQgEAAgEgEg");
	this.shape_765.setTransform(72.025,94.375);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.1).s().p("AgGAIQgEgDAAgFQAAgDAEgDQADgEADAAQAFAAADAEQADADAAADQAAAFgDADQgDADgFAAQgDAAgDgDg");
	this.shape_766.setTransform(50.85,144.075);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgFAGQgCgCAAgEQAAgCACgCQADgDACAAQADAAADADQACACAAACQAAAEgCACQgDACgDAAQgCAAgDgCg");
	this.shape_767.setTransform(78.525,105.85);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.2).s().p("AgWAXQgJgKAAgNQAAgMAJgJQAKgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAKQgKAJgNAAQgMAAgKgJg");
	this.shape_768.setTransform(71.625,78.875);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgEAAgHQAAgGAFgEQAFgFAFAAQAHAAAEAFQAFAEAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_769.setTransform(87.375,103.225);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgEAAgHQAAgFAFgFQAEgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAEQgFAFgGAAQgGAAgEgFg");
	this.shape_770.setTransform(67.025,42.125);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.9).s().p("AgIAAQAAgCADgDQACgDADAAQAEAAACADQADADAAACQAAAJgJAAQgIAAAAgJg");
	this.shape_771.setTransform(98.3,74.025);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.3).s().p("AgWAXQgKgJAAgOQAAgNAKgKQAKgJAMAAQAOAAAKAJQAJAKAAANQAAAOgJAJQgKAKgOAAQgMAAgKgKg");
	this.shape_772.setTransform(82.6,33);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.7).s().p("AgGAAQAAgGAGAAQAHAAAAAGQAAAHgHAAQgGAAAAgHg");
	this.shape_773.setTransform(85.15,59.475);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQABAAABAAQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBQgBAAAAgBg");
	this.shape_774.setTransform(48.55,264.275);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1).s().p("AgGAHQgCgDAAgEQAAgDACgDQADgCADAAQAEAAACACQADADAAADQAAAEgDADQgCACgEAAQgDAAgDgCg");
	this.shape_775.setTransform(72.275,269.625);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgFAAgGQAAgGAFgEQAEgFAGAAQAGAAAFAFQAFAEAAAGQAAAHgFAEQgEAFgHAAQgGAAgEgFg");
	this.shape_776.setTransform(75.875,258.525);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHgBQAIABAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_777.setTransform(49.925,251.65);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.5).s().p("AgDAAQAAgDADgBQAEABABADQgBAEgEAAQgDAAAAgEg");
	this.shape_778.setTransform(57.6,247.8);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.2).s().p("AgBAAQAAAAAAAAQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBg");
	this.shape_779.setTransform(63.5,201.725);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgDAAgGQAAgFAEgEQAEgDAEAAQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGABQgEgBgEgEg");
	this.shape_780.setTransform(77.775,156.95);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_781.setTransform(76.6,168.075);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgHgGAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_782.setTransform(102.475,192.025);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAFQgCgCAAgDQAAgGAGAAQAHAAAAAGQAAAHgHAAQgCAAgCgCg");
	this.shape_783.setTransform(67.425,114.675);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.7).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_784.setTransform(77.65,123.75);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgSASQgHgHAAgLQAAgKAHgIQAIgHAKAAQALAAAHAHQAIAIAAAKQAAALgIAHQgHAIgLAAQgKAAgIgIg");
	this.shape_785.setTransform(93.875,156.525);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgOAPQgGgGAAgJQAAgIAGgGQAGgGAIAAQAJAAAHAGQAFAGABAIQgBAJgFAGQgHAGgJAAQgIAAgGgGg");
	this.shape_786.setTransform(72.25,121.975);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgJAAgLQAAgKAIgJQAIgIALAAQAMAAAIAIQAIAJAAAKQAAALgIAJQgIAIgMAAQgLAAgIgIg");
	this.shape_787.setTransform(89.825,58.2);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgRARQgGgHgBgKQABgJAGgHQAIgHAJAAQAKAAAHAHQAIAHAAAJQAAAKgIAHQgHAHgKAAQgJAAgIgHg");
	this.shape_788.setTransform(70.35,85.825);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAGgEAEQgFAEgFAAQgFAAgEgEg");
	this.shape_789.setTransform(64.9,116.05);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.2).s().p("AgVAXQgKgKAAgNQAAgMAKgJQAJgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAKQgKAJgNAAQgMAAgJgJg");
	this.shape_790.setTransform(78.625,85.775);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.2).s().p("AgOAPQgGgGgBgJQABgIAGgGQAGgGAIgBQAJABAGAGQAHAGgBAIQABAJgHAGQgGAHgJAAQgIAAgGgHg");
	this.shape_791.setTransform(80.75,56.45);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,5.3).s().p("AglAmQgPgQAAgWQAAgVAPgQQAQgPAVAAQAWAAAQAPQAPAQAAAVQAAAWgPAQQgQAPgWAAQgUAAgRgPg");
	this.shape_792.setTransform(64.55,42.6);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.9).s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAQAAALAMQAMALAAAPQAAAQgMALQgLAMgQAAQgPAAgLgMg");
	this.shape_793.setTransform(55.675,10.975);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,5.3).s().p("AglAlQgPgPAAgWQAAgVAPgPQAQgQAVAAQAWAAAQAQQAPAPAAAVQAAAWgPAPQgQAQgWAAQgVAAgQgQg");
	this.shape_794.setTransform(95.85,41.075);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.4).s().p("AgQAQQgHgGAAgKQAAgJAHgGQAHgIAJAAQAKAAAHAIQAHAGAAAJQAAAKgHAGQgHAIgKgBQgJABgHgIg");
	this.shape_795.setTransform(55.325,266.35);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgFABgGQgBgFAFgFQAFgEAFAAQAHAAAEAEQAFAFgBAFQABAGgFAFQgEAEgHAAQgFAAgFgEg");
	this.shape_796.setTransform(88.3,268.275);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_797.setTransform(62.925,228.875);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.2).s().p("AgBAAQAAAAAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAgBAAAAQAAAAAAgBg");
	this.shape_798.setTransform(54.075,239.525);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgEAFAAQAGAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgGAAQgFAAgEgEg");
	this.shape_799.setTransform(55.575,235.425);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgFgDAAgHQAAgFAFgEQAEgFAFAAQAHAAAEAFQAEAEAAAFQAAAHgEADQgEAFgHAAQgFAAgEgFg");
	this.shape_800.setTransform(74.1,188.25);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.8).s().p("AgTAUQgIgIAAgMQAAgKAIgJQAIgIALAAQALAAAJAIQAIAJAAAKQAAAMgIAIQgJAIgLAAQgLAAgIgIg");
	this.shape_801.setTransform(70.175,249.8);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLAMQgFgFAAgHQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_802.setTransform(43.925,195.825);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgKALQgFgEAAgHQAAgGAFgFQAEgEAGAAQAHAAAEAEQAFAFAAAGQAAAGgFAFQgEAFgHAAQgFAAgFgFg");
	this.shape_803.setTransform(73.275,206.425);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgEAGQgDgDAAgDQAAgCADgCQACgDACAAQAIAAAAAHQAAADgDADQgCACgDAAQgCAAgCgCg");
	this.shape_804.setTransform(54.275,135.275);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.6).s().p("AgFAAQAAgFAFAAQAGAAAAAFQAAAGgGAAQgFAAAAgGg");
	this.shape_805.setTransform(63.625,176.525);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.5).s().p("AgRASQgHgHAAgLQAAgJAHgHQAIgIAJAAQAKAAAIAIQAHAHAAAJQAAALgHAHQgIAHgKAAQgJAAgIgHg");
	this.shape_806.setTransform(64.875,148.55);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.7).s().p("AgSATQgIgIAAgLQAAgKAIgIQAIgIAKAAQALAAAIAIQAIAIAAAKQAAALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_807.setTransform(57.675,161.525);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgEgEAAgGQgBgFAFgEQAEgEAFgBQAGABAFAEQADAEAAAFQAAAGgDAEQgFAEgGAAQgFAAgEgEg");
	this.shape_808.setTransform(74.25,145.5);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.1).s().p("AgNAPQgHgHAAgIQAAgIAHgFQAFgHAIABQAIgBAHAHQAFAGABAHQgBAIgFAHQgHAFgIAAQgIAAgFgFg");
	this.shape_809.setTransform(69.65,107.1);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_810.setTransform(72.425,89.725);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,5.7).s().p("AgnAoQgQgRAAgXQAAgXAQgQQARgQAWgBQAXABARAQQAQARAAAWQAAAXgQARQgRAQgXAAQgWAAgRgQg");
	this.shape_811.setTransform(51.775,80.6);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.9).s().p("AgNAOQgFgGAAgIQAAgHAFgGQAGgFAHAAQAIAAAGAFQAFAGAAAHQAAAIgFAGQgGAFgIAAQgHAAgGgFg");
	this.shape_812.setTransform(62.425,91.725);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgCAAQAAAAAAAAQAAgBABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAQAAAAAAAAQgBAAAAgBQgBAAAAAAQAAgBAAgBg");
	this.shape_813.setTransform(86.125,57.675);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_814.setTransform(43,37.125);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQADAEAAAEQAAAFgDAEQgEAEgFAAQgEAAgEgEg");
	this.shape_815.setTransform(59.6,6.375);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgFgFAAgIQAAgHAFgFQAGgFAGAAQAIAAAFAFQAFAFAAAHQAAAIgFAFQgFAFgIAAQgGAAgGgFg");
	this.shape_816.setTransform(42.925,279.475);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgDgEgBgFQABgEADgEQAEgDAEgBQAFABAEADQADAEABAEQgBAFgDAEQgEADgFABQgEgBgEgDg");
	this.shape_817.setTransform(57.25,284.6);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.8).s().p("AgGAAQgBgHAHAAQAHAAAAAHQAAADgCADQgCACgDAAQgHgBABgHg");
	this.shape_818.setTransform(66.15,272.6);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.6).s().p("AgLAMQgEgFAAgHQAAgGAEgEQAFgFAGAAQAHAAAEAFQAFAFAAAFQAAAHgFAFQgEAEgHAAQgGAAgFgEg");
	this.shape_819.setTransform(44.375,220.025);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgMANQgGgFAAgIQAAgHAGgFQAFgFAHAAQAIAAAFAFQAGAFAAAHQAAAIgGAFQgFAFgIAAQgHAAgFgFg");
	this.shape_820.setTransform(63.55,272.575);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.1).s().p("AgVAWQgJgJAAgNQAAgMAJgJQAJgJAMAAQANAAAJAJQAJAJAAAMQAAANgJAJQgJAJgNAAQgMAAgJgJg");
	this.shape_821.setTransform(65.9,199.925);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.6).s().p("AgRATQgIgIAAgLQAAgKAIgHQAHgIAKAAQALAAAIAIQAHAHAAAKQAAALgHAIQgIAHgLAAQgKAAgHgHg");
	this.shape_822.setTransform(56.525,150.8);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.2).s().p("AgHAIQgEgDABgFQgBgEAEgDQADgEAEAAQAFAAADAEQAEADgBAEQABAFgEADQgDADgFAAQgEAAgDgDg");
	this.shape_823.setTransform(64.5,119.3);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.8).s().p("AgLANQgGgGAAgHQAAgGAGgGQAFgFAGAAQAHAAAGAFQAFAGAAAGQAAAHgFAGQgGAFgHAAQgGAAgFgFg");
	this.shape_824.setTransform(50.475,113.825);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,3.2).s().p("AgVAWQgKgJABgNQgBgMAKgJQAJgKAMAAQANAAAKAKQAJAJAAAMQAAANgJAJQgKAKgNAAQgMAAgJgKg");
	this.shape_825.setTransform(76.05,135.925);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.4).s().p("AgJAKQgEgFAAgFQAAgFAEgEQAEgEAFAAQAFAAAFAEQAEAEAAAFQAAAFgEAFQgFAEgFAAQgFAAgEgEg");
	this.shape_826.setTransform(68.825,59.625);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,2.3).s().p("AgPAQQgGgHAAgJQAAgJAGgGQAHgGAIAAQAJAAAHAGQAGAGAAAJQAAAJgGAHQgHAGgJABQgIgBgHgGg");
	this.shape_827.setTransform(50.275,90.55);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,0.4).s().p("AgDAAQAAgDADAAQAEAAAAADQAAAEgEAAQgDAAAAgEg");
	this.shape_828.setTransform(79.975,68.25);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.5).s().p("AgJAKQgEgEAAgGQAAgFAEgEQAEgFAFAAQAGAAAEAFQAEAEAAAFQAAAGgEAEQgEAEgGABQgFgBgEgEg");
	this.shape_829.setTransform(53.375,38.05);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.rf(["#FFFFFF","#221F20"],[0,1],0,0,0,0,0,1.3).s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_830.setTransform(56.55,24.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Snow, new cjs.Rectangle(41.1,4.9,526.4,300.6), null);


(lib.Sky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AED9DC").s().p("EhhMATwMAAAgnfMDCZAAAMAAAAnfg");
	this.shape.setTransform(622.125,126.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Sky, new cjs.Rectangle(0,0,1244.3,252.9), null);


(lib.Ship2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4).p("AKcC8I03l3");
	this.shape.setTransform(1223.632,467.5331,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4).p("AKXC+I0ul7");
	this.shape_1.setTransform(1230.6877,459.157,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4).p("AKbC1I01lp");
	this.shape_2.setTransform(1236.8998,451.2365,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4).p("AKVC/I0pl9");
	this.shape_3.setTransform(1244.6549,444.5315,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4).p("Ao/lFQBDhHAnAAIUFGDQgkAeghAjQgfAhgfAmIAAAAQgiAqggAyQgdAvgXAvQgWArgOAlQyqlMihgdQAXgnAig3QAng8AZglQAZgmAegnQAqg4Afghg");
	this.shape_4.setTransform(1235.0023,456.7479,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4).p("AJtDEIzYmI");
	this.shape_5.setTransform(1278.6571,415.2491,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4).p("AJhDJIzBmR");
	this.shape_6.setTransform(1286.2,411.1409,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4).p("AJSDAIyjl/");
	this.shape_7.setTransform(1293.3151,407.6008,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4).p("Aooj4IBnglIEuBVQGPB1HnCjQgjATgsAeQghAYgfAaQgfAcgTAXQgYAdgMAYIzumEQAcgdAggbQAngiAqgZQAagQAhgMg");
	this.shape_8.setTransform(1286.1478,412.9087,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(4).p("AFvsUQiNA/h6BgQjMChh3DhQihEyAfFsQAQDCBBCo");
	this.shape_9.setTransform(1568.9506,627.3338,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4).p("AhDAAQAAgcAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgcAAQgbAAgUgUQgUgUAAgdg");
	this.shape_10.setTransform(1418.9893,637.8298,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(4).p("AhEAAQAAgcAUgUQAUgUAcAAQAcAAAVAUQAUAUAAAcQAAAcgUAUQgVAUgcAAQgcAAgUgUQgUgUAAgcg");
	this.shape_11.setTransform(1392.5598,628.9401,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4).p("AFwGHQgIBogRBiQgGAlgHAUQgMAfgWAUQgSAQgZAKQh6gEiJgBQiSgCgugGQhWgNgmgtQgFgFgNgVQgbgtABg8QAAgeAKguQAAgDBAmfQAylIA4ipQARgzAbglQAdgnBRg3QBCgtBBgi");
	this.shape_12.setTransform(811.9562,499.2598,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(4).p("AADAAIgGAB");
	this.shape_13.setTransform(1607.7807,547.8195,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4).p("AF8tcQjdBhimCrQhFBHg/BeQh1Cvg5DIQgmCBgLCHQgQDIArC/QAfCJA5B6");
	this.shape_14.setTransform(1561.9883,628.2429,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(4).p("AEoj/Qg+DzgLCAQgDAagEAPQgJAegTAUQgRAQgbAGQgaAGg9ADQh5AGiGgJIhzgI");
	this.shape_15.setTransform(816.2599,566.5383,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(8).p("AOGEgI8Lo/");
	this.shape_16.setTransform(1476.0335,514.3484,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(8).p("AEupsQnjEfhNFnQgbCBAEDeQADCEALBwIABAK");
	this.shape_17.setTransform(1918.1217,770.6235,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(8).p("A5CoJMAyFAQT");
	this.shape_18.setTransform(1733.3825,655.1337,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(8).p("A45n8MAxzAP5");
	this.shape_19.setTransform(1743.2845,646.6002,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(8).p("AuCkeIcFI9");
	this.shape_20.setTransform(1488.9539,506.5172,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(4).p("AhGAAQAAgcAVgVQAVgVAcAAQAdAAAVAVQAVAUAAAdQAAAdgVAVQgVAVgdAAQgdAAgUgVQgVgVAAgdg");
	this.shape_21.setTransform(1186.7734,546.4565,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(4).p("AhCAAQAAgaAUgUQAUgUAaAAQAcAAAUAUQATATAAAbQAAAcgTAUQgUATgcAAQgbAAgTgTQgUgUAAgcg");
	this.shape_22.setTransform(1209.558,554.0957,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(4).p("AhEAAQAAgcAUgUQAVgUAbAAQAdAAAUAUQAUAUAAAcQAAAcgUAVQgUAUgdAAQgbAAgVgUQgUgVAAgcg");
	this.shape_23.setTransform(1235.4556,562.2239,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(4).p("AGHuMQi6BdiVCNQiwCnhwDaQhAB8giB7Qg9DZAPDcQATEXCGD1");
	this.shape_24.setTransform(1555.5982,627.1431,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(8).p("ABykBIhyDMQhxDaAGBJ");
	this.shape_25.setTransform(399.1242,223.3767,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(8).p("AgeDkQhPgagxhBQgwhAAAhMQABg+Ahg4QAgg3AzgbQAXgMAkgFQAXgDBFgDQBLgEBpAM");
	this.shape_26.setTransform(493.887,311.1696,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(8).p("AgcDvQg3gggtg2QhbhsAuhvQA0h+BhghQBQgaCnAb");
	this.shape_27.setTransform(778.3234,95.5066,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(4).p("ABFhLIAlAOIi4CHIghgTg");
	this.shape_28.setTransform(771.45,401.6,0.9999,1.0015,0,5.2204,8.4709,0,0.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(4).p("ABEhLIAmANIi5CIIgggTg");
	this.shape_29.setTransform(781.8,407.75,0.9999,1.0015,0,5.2204,8.4709,0,0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(4).p("ABEhLIAmANIi4CIIghgUg");
	this.shape_30.setTransform(792.25,413.65,0.9999,1.0015,0,5.2204,8.4709,0,0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_31.setTransform(642.507,448.3458,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_32.setTransform(643.3908,438.6725,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_33.setTransform(644.4414,428.8197,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_34.setTransform(645.3709,418.6466,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(8).p("ACTk7QBcAGArAMQBJAVAfA0QAgA0gLBIQgLBHgwBBQh6CQikBHQhoAug/AMQhuAWhRgrQg2gdgmg3QgXg3ADg6QACgtATgsQALgZAbgpQAwhJBHg5QAqghAugYQBYguBjgOQA1gHAxADg");
	this.shape_35.setTransform(597.7358,155.5815,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(8).p("AJrpIIzVSQ");
	this.shape_36.setTransform(662.8948,193.3852,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(4).p("AFRC8QAOg7AJhAQASh+gYgTQgdgWjqgvQjogugXAKQgYALhPBKQhSBNgHAYQgLAjAABN");
	this.shape_37.setTransform(1100.0334,224.2552,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(4).p("ADTEVQAVhVAghoQATg5ADgSQAGgggLgaQgQgmg3gaQhVgpi9g8Qh0gjhrgdIgJgD");
	this.shape_38.setTransform(1126.3452,222.0872,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(4).p("ABCijIA4ARIjDE1IgxgUg");
	this.shape_39.setTransform(1037.05,189.05,0.9999,1.0015,0,5.2204,8.4709,0,0.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(4).p("ABDijIA3ASIjCE1IgygUg");
	this.shape_40.setTransform(1048.8,194.15,0.9999,1.0015,0,5.2204,8.4709,0,0.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(4).p("ABCijIA4ASIjDE0IgxgTg");
	this.shape_41.setTransform(1060.6,199.65,0.9999,1.0015,0,5.2204,8.4709,0,0.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(8).p("AECk9IAuDDIp2Gg");
	this.shape_42.setTransform(816.6258,-21.0007,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(8).p("AKEBnQwjiijCgqIgJgC");
	this.shape_43.setTransform(996.9884,209.8876,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(8).p("An3rjICPBfQVBOAAmAkQAOANAMAOIANAQQAQASAJAQQAYAmAFA9QAGBOglA5QgQAagaAVQgPAMggAUQgsAcgwAOQgvAOg0gBQgYgBgigFQjLgi3ChfIjfgO");
	this.shape_44.setTransform(1983.5388,782.7311,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(8).p("AgPrrICjPdIkvHs");
	this.shape_45.setTransform(1775.6818,560.7706,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(8).p("APQrGIlyJDI48M8");
	this.shape_46.setTransform(1564.5398,790.5453,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(8).p("AIjsxIwnXTIFrCC");
	this.shape_47.setTransform(1482.6628,767.5353,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(8).p("EgknAcCIV9H2IA4AQQBDAKA4gaMAjLgQdICukBQgLgugKhEQgViHAChsQAChOANg6IAAgBQAYhqAJgiQAXhaAchHIAAgBQAkhbAthGQAlg5Ayg1QBEhGBXgvIARgJIABAAIBKg1QBcg5BUgTQAWg+kjsWIkosKQrSiln1hnQnDhcgQAOQgXATmGJHImDJD");
	this.shape_48.setTransform(1708.3161,701.0439,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(4).p("AFjq3QiPA3h7BcQg2ApgtAsQgSAQgUAWQisC3hKDsQgmB7gHCGQgFBPAICJQAFBMAMBBQAFAcARBM");
	this.shape_49.setTransform(1576.4863,625.9029,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(8).p("Au4ilIdxFL");
	this.shape_50.setTransform(1429.0576,689.1935,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(8).p("Au4lBIcRJCIBSBJ");
	this.shape_51.setTransform(1517.5406,501.1297,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(8).p("A49pHIA3A1QAvAvAPAVQAMAPEVBiQFdB7MLD/QMuEMNfEV");
	this.shape_52.setTransform(1760.1745,629.6632,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(8).p("ACzi8IgSAJQgxAcgxArQhMBDg9BbQgyBLgkBU");
	this.shape_53.setTransform(1895.0827,726.9547,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(8).p("AAsiFQg6CIgZCk");
	this.shape_54.setTransform(1871.6908,758.1742,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(8).p("AZaBBQgKBAgFBIIgDA0Qg5Ad+WlCQl3g+t8iZ");
	this.shape_55.setTransform(1705.9611,743.9523,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(8).p("AATADIglgF");
	this.shape_56.setTransform(1542.403,693.3871,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(8).p("AAAADQAAgCAAgB");
	this.shape_57.setTransform(1540.5809,692.4839,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(8).p("AAAgEIAAAJ");
	this.shape_58.setTransform(1540.5038,693.0536,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(4).p("AABABIgBgB");
	this.shape_59.setTransform(1521.664,719.5901,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(4).p("AgfNCQhiiVg2jaQhjmVCel4QCEk+DcjO");
	this.shape_60.setTransform(1532.3594,636.7155,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(4).p("AiyByQA4g0A/gtQBUg8BVgnQArgTAagH");
	this.shape_61.setTransform(1581.2863,547.5936,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(8).p("AHenRIu7Oj");
	this.shape_62.setTransform(724.8697,48.8525,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(8).p("AjE06IYvIBQh5A6hpBJQhCAug7AxQhoBYhbBtQhpB9hRCcQiTEYggEyQgOCDAGCLQAMD+BRCKIBzDCMghxgGV");
	this.shape_63.setTransform(1281.5487,516.9011,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(8).p("Ar7skIAggwQKuBIKtB3QVdDtAFDoQADCIhUCgQhRCaiQCUQiRCUiyBvQi6B0i8A0QlABZ1hkMQqxiHpwiYIAKgS");
	this.shape_64.setTransform(804.0589,238.1827,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(4).p("AABgvQnxhQm0hEIgOgEQgggGgOABQgKAAgGADQgEACgGAGQgJAIgDANQgDAKABAEIACAMQADANAFACIAzAKQCiAdLrB6IQlCvQATgJAJgTQAIgOgDgPQgCgMgKgKQgTgSgkAAIgWgDQg1gHkEgrQoEhThxgTg");
	this.shape_65.setTransform(782.8749,7.3277,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(4).p("AFAD5QBiAXBHAbQAShKAQhQQAhifgIgeQgLgrgVgYQgcghg2gKQgFgBkWhIQj5hBhQgKQgZgDgJABQhvBnhOBKQiVCMACAVQAEAkgEBLIAdABQCCAFCWAOQDvAVC6AiQBGANBAAQg");
	this.shape_66.setTransform(1115.3214,223.2761,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(8).p("AmvFLIiyi2QAjhrAxhvQBijfBGgWQBHgVHKBNQDlAnDXAq");
	this.shape_67.setTransform(834.9628,113.0158,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(8).p("AJLgDIsclnQheBkhgBxQjCDhgPBCQAjAZGeBnQDPAzDIAug");
	this.shape_68.setTransform(1122.6,370.2,0.9999,1.0015,0,5.2204,8.4709,-1.9,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(8).p("Eg30gD+ICdAyQPQEyO0EEQX+GlQdC2QByAUByAMQF+AwCOAKQDaARCXgUQFpgvFDkEQCyiPDUkFQCLirA1hlQBVikggiNQgoi1jdiHQm6kNv9jx");
	this.shape_69.setTransform(748.7126,270.0802,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(8).p("AdMGkQmUhfnWhVQlGg7lCgvIjSgeIh0h4I9gmS");
	this.shape_70.setTransform(756.2399,121.2475,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(8).p("A4PCBIbDIqIC9AAQEMkIEWkSQItoiAxguQAMgLgxgMQgbgIgngHQkTgyuthPQnVgnmfge");
	this.shape_71.setTransform(584.7521,171.739,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(8).p("AnprSIONEuIArSc");
	this.shape_72.setTransform(535.3565,402.3303,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(8).p("ArpLDIXT2F");
	this.shape_73.setTransform(320.9912,338.6615,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(8).p("AlELuIJ7ojIAAvW");
	this.shape_74.setTransform(199.1258,483.0868,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(4).p("AucmdIdTLVIAPAQQAOASAAASQAAALgHAKQgOAYgYADQgPACgXgJI9hq2");
	this.shape_75.setTransform(246.7078,407.3135,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(8).p("AI6EPIxyoc");
	this.shape_76.setTransform(434.4268,303.4674,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(8).p("AY3GnMgrOgNJIiBAfQiXAphrA2");
	this.shape_77.setTransform(671.7439,345.1213,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(8).p("ACBsXQiuBagbBrIhHEwQiGKACmCsQB9CDBrBSQA2AqAdAP");
	this.shape_78.setTransform(499.8969,369.9565,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(8).p("EAhDAHRMgnYgOdI6zE6");
	this.shape_79.setTransform(548.7688,503.8912,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(8).p("AMBHrI4CS3IlpiwIAq6uQgNgGgOgIQgigTgEgHQgMgQADgYQACgZAQgRQADgEAJgGQANgJAPgDQAKgBANACQAHABAWAHIAhAMIQJvOIRLi7IAehDQAKgYAGghQAMhBgWgr");
	this.shape_80.setTransform(257.0726,398.5898,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(8).p("Az3YBQgSgkgrgQQgwgSgPgJQgTgLgYgYQg2g3ANh2QAIhLAshAQAthCA+gYQAEgBBvgdQhOh4hHh6QiOj0AjgHQAkgIDCA2QCVAqCtA6QBZitGOlRQB9hpCNhtIBzhYIAApIQAAgNHeBtIBhAWIACgBIPAt6");
	this.shape_81.setTransform(526.0338,110.9338,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(8).p("AuxBmIBamEIX/hLIELLw");
	this.shape_82.setTransform(785.0378,-21.1915,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(8).p("Eghkgp5IAAB+IEcHVISfEIQS9ERCgAsQDjA/APAGQA0AWAeA7QAbA2gOB6QgJBNggDdQC0AkDGBWQCdBFEPCUQDKBvBfEQQAvCHAHBxQgxgXhPgQQieggiYAlQhWAVhSAxQh7BKiRCWQi1C9h6C8QjXFMhPF7QgwDnAPC6QAIBoAcBQQA5CoB6CKQh8AEhzAjQhEAVhDAhQglATg7AiQhbAxhrAbQhFASiuAfQi+AgjGgFQh7gEj8gbQjBgVi4gnQhqgWhTgYQhkgbhugmQhRgbg0gUIgRgG");
	this.shape_83.setTransform(1062.8882,340.0383,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(8).p("AgHgBIAPAD");
	this.shape_84.setTransform(869.3529,552.6861,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(4).p("AgmgMIBNAZ");
	this.shape_85.setTransform(866.3873,551.1324,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(4).p("AJDGYIAAADQgXCbgaBvQg4Dvg6ADQt4AzhUhtQg9hPBvrIQAskUAwjjQAyjnAXggQAog0CchhICShXIBJAV");
	this.shape_86.setTransform(816.652,503.787,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(4).p("Ah2gBQB4AFCIgD");
	this.shape_87.setTransform(806.1117,589.025,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(4).p("ABsOBQBigCBDgIQBIgIAVgMQA1geAsjTIAijOQgRACgbgBQg3gBg0gRQgSgGgOgGQh4g1g8iBQhVi2gYjLQgbjuAvk5QAJg8ARhXIgzAiQg+Apg2AqQiuCGgaBWQgsCPhZIrQhhJcAjA8QAZApDMAUQAwAFBBAD");
	this.shape_88.setTransform(817.2898,500.0712,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AAA9AD").s().p("AnVMNIAq6uIOBFKIAAPWIp7Ijg");
	this.shape_89.setTransform(185.1712,462.6223,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#707477").s().p("AsbLvIJ8oiIAAvWIO8FfI4BS0g");
	this.shape_90.setTransform(245.9257,489.7157,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AOtGgI9hq2QgOgGgOgJQghgTgFgHQgLgQACgYQADgYAPgRQAEgFAIgFQANgKAPgCQALgCAMACIAeAIIdzLhIAPAQQAOASAAASQAAALgHAKQgOAYgYADIgEABQgOAAgUgIg");
	this.shape_91.setTransform(242.6065,405.3935,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#AAA9AD").s().p("AyNGeIQKvMIRKi7IDHBfI3CV0g");
	this.shape_92.setTransform(278.3066,328.1389,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#AAA9AD").s().p("AhBDdQgxgSgPgJQgSgLgYgYQg3g3ANh1QAJhLAshAQAshCA/gYIBxgeICdAyIhzDMQhwDaAFBJQgRgkgrgQg");
	this.shape_93.setTransform(389.422,218.2199,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#AAA9AD").s().p("AgvDjQhQgagwhBQgxhAAAhLQABg/Ahg4QAhg2AygbQAYgNAkgFQAXgDBEgDQBLgDBqALQivBagbBrIg7D7g");
	this.shape_94.setTransform(495.7938,311.357,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#707477").s().p("AlbN2IgOgQIv7mKIXC10IOsG9QiGKBClCsQB/CCBrBSQA2AqAdAPI6zE7QAAgSgOgSg");
	this.shape_95.setTransform(381.8893,370.8861,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#707477").s().p("Ah0H5QgdgPg2gpQhrhTh+iCQimisCGqAIAlikIONEuIArSbg");
	this.shape_96.setTransform(529.21,403.0877,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#AAA9AD").s().p("AkoEgQg2gdgmg3QgXg3ADg6QACgtATgsQALgZAbgpQAwhJBHg5QAqghAugYQBYguBjgOQA1gHAxADQBcAGArAMQBJAVAfA0QAgA0gLBIQgLBHgwBBQh6CQikBHQhoAug/AMQgmAIghAAQhDAAg1gdg");
	this.shape_97.setTransform(597.8858,155.4315,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_98.setTransform(643.5393,438.5392,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_99.setTransform(642.6554,448.2136,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_100.setTransform(645.5193,418.5143,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_101.setTransform(644.5898,428.6874,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#707477").s().p("A3MCCQBZitGPlRQB8hpCNhuIB0hXQGfAdHVAnQOtBPETAzIzWSPgADinqQhjAOhYAuQgtAYgqAiQhIA4gwBJQgaApgMAbQgTArgCAuQgCA5AXA2QAmA4A2AdQBQArBtgXQBAgMBpguQCkhGB6iQQAvhCALhHQALhHgfg0Qggg1hJgUQgqgNhcgGIgdgBQgkAAgmAFg");
	this.shape_102.setTransform(578.2997,170.6057,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AqfJIITVyPQAnAGAbAIQAxAMgMALQgxAuotIjIohIZg");
	this.shape_103.setTransform(668.2718,194.0136,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#AAA9AD").s().p("AumFcIO/t5QCjAdLrB7Iu8Ojg");
	this.shape_104.setTransform(680.5668,34.3737,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#AAA9AD").s().p("AiRCZQhbhsAuhvQA0h+BhghQBQgaCnAbQhGAWhiDeQgwBwgjBrQg3gggtg2g");
	this.shape_105.setTransform(780.13,95.6033,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhsA3ICziBIAmANIi4CIg");
	this.shape_106.setTransform(771.3363,401.1369,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AhsA3ICziBIAmANIi4CIg");
	this.shape_107.setTransform(781.7018,407.2804,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AhsA3ICziBIAmANIi4CIg");
	this.shape_108.setTransform(792.1148,413.1783,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#AAA9AD").s().p("Ar+CVIgNgDIBWl1IWVhGIAsC/IplGUQnxhRm0hEg");
	this.shape_109.setTransform(769.7506,-29.7056,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#AAA9AD").s().p("ArlJ0IgqybIuPkvIAiiLQAbhsCvhZQBrg2CWgqICCgfMArOANKIiTBXQidBhgnA1QgXAfgyDnQgxDjgrEVQhvLHA8BPgAl7B9II8ChIAAhIIo8ipgAl7AcII8ChIAAhJIo8ingAl6hGII8CgIAAhIIo8iogAl6isII8ChIAAhIIo8ipgATolZIAhAUIC6iJIgngNgAR7mEIAhAUIC5iJIgmgNgAQOmxIAhATIC5iIIgmgOg");
	this.shape_110.setTransform(653.4376,433.0632,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#707477").s().p("ACeFGIp0hmIJkmUIgsi/IBpgEIEMLwQg1gIkEgrg");
	this.shape_111.setTransform(832.1992,-12.9241,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("Ag+AfQrrh6iigeIgzgKQgFgCgDgMIgCgNQgBgDADgKQADgNAJgIIAKgJQAGgDAKAAQAOgBAgAHIAOADQG0BEHxBRIJ1BmQEEArA1AHIAWACQAkAAATATQAKAKACAMQADAPgIAOQgJATgTAIg");
	this.shape_112.setTransform(783.0282,7.1423,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#707477").s().p("AgGLSQiSgBgugHQhWgNgmgtQgFgFgNgVQgbgtABg8QAAgeAKguIBAmhQAylJA4ipQARgzAbgkQAdgoBRg3QBCgtBBgiQgwE5AcDuQAYDLBVC3QA8CAB4A1QgIBogRBiQgGAlgHAUQgMAfgWAUQgSAQgZAKQh6gEiJgBg");
	this.shape_113.setTransform(812.1069,499.1027,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AhGNyIhzgIQjMgUgYgpQgjg8BgpcQBZorAsiPQAbhWCtiGQA2gqA+gpIA0giQgRBXgJA8QhCAihCAtQhQA3gdAnQgbAlgRAzQg5CpgyFIIhAGiQgJAugBAeQAAA8AaAtQAOAVAEAFQAnAtBWANQAuAGCQACQCLABB5AEQAZgKASgQQAXgUALgfQAIgUAGglQARhiAHhoQAOAGATAGQg+DzgLCBQgDAagEAPQgJAegTAUQgRAQgbAGQgaAGg9ADIhdACQhVAAhNgFg");
	this.shape_114.setTransform(809.6572,499.9623,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#707477").s().p("AiEJdIhzh5Itui7IO9ujIPxCmIAAB/IEcHTQjXgqjlgnQnLhMhHAVQilgbhSAaQhgAgg0B+QgvBwBbBsQAuA2A2AgICyC2g");
	this.shape_115.setTransform(787.4949,75.0665,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AhrDuQAbgHARgQQATgTAJgfQAEgOADgaQALiBA9jyQAzAQA3ACQAcABARgDIgiDOQgtDTg1AdQgUANhHAHQhEAJhiACQA9gDAagGg");
	this.shape_116.setTransform(841.4127,569.2283,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#AAA9AD").s().p("AosNcQg9hPBvrIQAskUAwjjQAyjnAXggQAog0CchhICShXIBJAVIgzAhQg+Aqg2AqQiuCGgaBVQgsCPhZIsQhhJcAjA7QAZAqDMAUQAwAEBBAEIABAAQCGAJB6gGQBigDBDgIQBIgIAVgMQA1gdAsjUIAijOIBPAaIgRgEIARAHQgXCbgaBvQg4Dvg6ADQkcAQjJAAQmuAAg5hKg");
	this.shape_117.setTransform(816.7947,503.7169,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#707477").s().p("Aq1KNQqxiHpwiYIAKgSIBrAAIIioZQItojAxguQAMgLgxgMIAggwQKuBIKtB3QVdDtAFDoQADCIhUCgQhRCaiQCUQiRCUiyBvQi6B0i8A0QhPAWiSAAQm2AAwKjJg");
	this.shape_118.setTransform(805.2654,238.3075,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("Ah5CQIC8kzIA4ASIjDE1g");
	this.shape_119.setTransform(1037.152,188.6747,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("Ah5CQIC8kzIA3ASIjCE1g");
	this.shape_120.setTransform(1048.9395,193.7916,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("Ah5CQIC8kzIA3ASIjCE1g");
	this.shape_121.setTransform(1060.7199,199.2613,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#9CE5E3").s().p("AfKX0QiOgKl/gwQhxgMhygUQwei239mlQu0kEvRkzIicgyQhOh4hHh5QiOj0AjgHQAkgIDCA2QCVAqCtA6IbEIpIBSAAIgLASQJxCYKxCHQVgEMFBhZQC7g0C7h0QCyhvCQiUQCRiUBQiaQBUihgDiHQgFjo1cjtQqvh3qshIIggAwQgcgIgngHQkTgyushPQnWgnmggeIAApIQAAgNHfBtIBhAWIACgBIb9F+IB0B5IDSAdQFCAwFGA7QHWBUGUBfIAEABQP+DxG5ENQDdCGApC1QAfCNhVClQg0BliMCrQjTEFiyCPQlEEEloAvQhTAKhnAAQhVAAhigHg");
	this.shape_122.setTransform(738.7589,221.039,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#707477").s().p("AhXCFQiWgOiCgFIAAgBQABhNAKgjQAIgYBShNQBOhKAZgLQAWgKDoAuQDqAvAdAWQAZATgSB+QgJBAgOA7Qi7gijugVg");
	this.shape_123.setTransform(1100.1587,224.1015,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AEGD5QAOg8AJg/QASh+gZgTQgdgWjqgvQjogvgWAKQgZAMhOBKQhSBMgIAYQgKAjgBBNIAAABIgdgBQAEhLgEgjQgCgWCViMIC9ixQAJgBAZADQBqAdB0AkQC+A7BVApQA3AaAQAnQALAZgGAhQgDARgTA6QggBogVBUQhAgPhGgNg");
	this.shape_124.setTransform(1108.2239,219.1876,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("ACHD7QAVhUAghpQATg5ADgQQAGgigLgaQgQgmg3gaQhVgpi9g7Qh0gkhrgdQBQALD6BAIEaBJQA2AKAcAiQAVAYALAqQAIAeghCfQgQBQgSBKQhHgbhigXg");
	this.shape_125.setTransform(1133.815,225.64,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#707477").s().p("AiUEMQmehngjgZQAPhCDCjhQBghxBehkIMcFnIlTFyQjJgujOgzg");
	this.shape_126.setTransform(1123.5491,370.4181,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#707477").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAVgVAcAAQAeAAAUAVQAVAUAAAdQAAAdgVAVQgUAVgeAAQgdAAgUgVg");
	this.shape_127.setTransform(1186.9234,546.3065,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#707477").s().p("AguAwQgUgUAAgcQAAgaAUgUQAUgUAaAAQAcAAAUAUQATATAAAbQAAAcgTAUQgUATgcAAQgbAAgTgTg");
	this.shape_128.setTransform(1209.708,553.9457,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#707477").s().p("AgvAxQgVgVABgcQgBgcAVgTQAUgVAbABQAcgBAVAVQATATABAcQgBAcgTAVQgVATgcABQgbgBgUgTg");
	this.shape_129.setTransform(1235.6056,562.0739,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#AAA9AD").s().p("EAeAAmDQh7gEj8gbQjBgVi4gnQhqgWhTgYQhkgbhugmQhRgbg0gUIAAgCIgBAAIhPgaQgQACgcgBQg3gBg0gRQgSgGgOgGQh4g1g7iBQhWi2gYjMQgcjuAxk5QAJg8ARhXMgsYgNfIiBAfQiXAqhrA2QhpgMhLAEQhFADgXADQgkAFgYAMQgzAbggA3QghA4gBA+QAABNAxBAQAwBBBQAaIAKABIgKA1Ix0odIAfhDQAKgXAGghQAMhCgXgqQgFhJBxjbIByjMQPREzO0EEQX/GkQcC2QByAUByAMQF+AwCOAKQDaARCXgUQFogvFEkEQCyiPDTkEQCMirA1hlQBUilgfiNQgoi1jeiHQm5kNv9jxIgFgBQmUhfnWhUQlEg7lDgwIizi2QAjhrAyhwQBijfBGgVQBHgVHJBNQDmAmDXArISeEIQS+ERChAsQDiA/AQAGQA0AWAeA7QAbA2gPB6QgIBNggDdQCzAkDHBWQCdBFEOCUQDKBvBfEQQAwCHAGByQgwgXhPgQQieggiYAlQhXAVhRAxQh8BKiQCVQi2C9h6C8QjWFMhPF7QgwDnAOC6QAJBoAbBQQA6CoB5CKQh7AEhzAjQhEAVhDAhQglATg7AiQhcAxhqAbQhFASivAfQijAcioAAIg5gBgEAougCRQjCDhgPBCQAjAZGeBnQDPAzDJAuIFTlzIsdlmQheBkhgBxgEAoHgbPIi8CxQiWCNACAVQAFAkgFBLIAdABQCCAFCXAOQDuAVC7AiQBGANBBAQQBhAXBIAbQARhKAQhQQAhiggIgeQgLgrgUgYQgdghg2gKIkbhJQj6hBhQgKQgTgCgJAAIgGAAgEAgqgWpIAxATIDEk1Ig4gSgAew3OIAxAUIDDk2Ig3gSgAc13wIAyAUIDDk2Ig4gRg");
	this.shape_130.setTransform(827.3997,325.6953,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#707477").s().p("Aq3iDQAXgoAjg4IUzF2IACABQgVAsgPAkQyqlKihgdg");
	this.shape_131.setTransform(1220.8594,471.1179,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#707477").s().p("AJ/DrI0zl2QAmg8AZgkIUrF6QgeAvgXAug");
	this.shape_132.setTransform(1227.1031,463.1263,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#707477").s().p("Aq2iWQAagmAdgnIUyFoIAEADIgBAAQghAqggAyg");
	this.shape_133.setTransform(1234.286,455.5526,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#707477").s().p("AJ5DfI0yloQAqg4AgggIUpF8IAAABQgfAggfAmg");
	this.shape_134.setTransform(1240.8716,447.3845,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#707477").s().p("AJyDiI0pl8QBChIAnAAIUGGCQgkAggiAjg");
	this.shape_135.setTransform(1248.5877,441.3811,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#707477").s().p("AqIilQAbgdAggcITWGIQgXAcgMAZg");
	this.shape_136.setTransform(1275.529,417.2393,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#707477").s().p("AqEimQAngiArgZIABADIS2GNQgfAbgUAYg");
	this.shape_137.setTransform(1281.4766,412.4891,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#707477").s().p("Ap6iyIgBgDQAagPAhgNIAZgJIABADISiGAQghAXgfAbg");
	this.shape_138.setTransform(1289.0725,409.1723,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#707477").s().p("Ap4iwIgBgDIBOgbIEvBUQGOB1HoCjQgjATgsAeg");
	this.shape_139.setTransform(1297.4612,406.5043,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#707477").s().p("AgvAxQgVgVAAgcQAAgcAVgTQATgVAcABQAcgBAUAVQAVATAAAcQAAAcgVAVQgUATgcABQgcgBgTgTg");
	this.shape_140.setTransform(1392.7098,628.7901,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#AAA9AD").s().p("A0uO4Qh6iKg5ioQgchQgIhoQgPi6AwjnQBPl6DXlMQB6i8C1i9QCRiWB7hKQBSgxBWgVQCYglCeAgQBPAQAxAXIYvIBQh5A6hpBIQhCAug7AyQhoBYhbBsQhpB+hRCcQiTEYggExQgOCEAGCLQAMD9BRCKIBzDDgAkzH3QgUAUAAAdQAAAcAUAUQAVAUAcAAQAcAAAUgUQAUgUAAgcQAAgdgUgUQgUgUgcAAQgcAAgVAUgAo7HOQgUAUAAAcQAAAbAUAUQATAUAcAAQAcAAAUgUQATgTAAgcQAAgcgTgUQgUgUgcAAQgbAAgUAUgAsoGhQgVAVAAAdQAAAeAVAVQAUAVAeAAQAdAAAVgVQAVgVAAgeQAAgdgVgVQgVgVgdAAQgdAAgVAVgAunswQgfAhgqA4QgeAngZAmQgZAlgnA8QgiA3gXAoQChAdSqFMQAOglAWgrQAXgvAdgvQAggyAigqIAAAAQAfgmAfghQAhgjAkgfI0FmDIgBAAQgnAAhCBHgAm5zgQghAMgaAQQgrAZgnAiQggAbgbAdITuGFQAMgYAXgdQAUgXAfgcQAfgaAhgYQAsgeAjgTQnoikmOh1IkvhVg");
	this.shape_141.setTransform(1266.271,510.8635,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#707477").s().p("AgvAwQgUgTAAgdQAAgbAUgVQAUgTAbgBQAcABAUATQAUAVAAAbQAAAdgUATQgUAVgcgBQgbABgUgVg");
	this.shape_142.setTransform(1419.1393,637.6798,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#AAA9AD").s().p("AvQMbIhzjDQhRiJgMj+QgGiLAOiDQAgkxCTkZQBRicBph+QBbhsBohYIcLJAQjcDOiFE+QifF4BkGVQA1DaBiCVIgCADgAjbGjQgUAUAAAcQAAAdAUAUQAUAUAcAAQAdAAAUgUQAUgUAAgdQAAgcgUgUQgUgUgdAAQgcAAgUAUgAnrFyQgUAUAAAdQAAAcAUAUQAUAUAdAAQAcAAAUgUQAUgUAAgcQAAgdgUgUQgUgUgcAAQgdAAgUAUg");
	this.shape_143.setTransform(1440.3706,593.5808,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AvAjvQA6gyBDguIcEI9Qg/Aug3A0g");
	this.shape_144.setTransform(1482.4785,510.3087,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#AAA9AD").s().p("Av5jdQBphIB5g6IcRJCQgaAHgqATQhWAmhVA9g");
	this.shape_145.setTransform(1501.4923,501.6159,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#707477").s().p("Al7JFQhjmVCel4QCFk+DbjOQA4g0A/guQBVg9BVgmQArgTAZgHIAdAYQi6BdiVCOQiwCmhwDbQhAB7giB7Qg9DaAPDbQATEYCGD1IgfArQhiiVg2jag");
	this.shape_146.setTransform(1552.9252,628.0603,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#707477").s().p("AmYGGQgPjcA9jZQAih7A/h8QBwjaCwinQCWiNC5hdIA2AxQjdBhinCrQhEBHg/BfQh1Cug5DIQgmCBgLCHQgQDIArC/QAfCJA5B6IgpA4QiFj1gTkXg");
	this.shape_147.setTransform(1558.892,627.9886,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#707477").s().p("AlxJbQgri/AQjIQALiHAmiBQA5jIB1iuQA/hfBFhIQCmiqDdhhIAAAAIA4A0QiNBAh6BgQjMChh3DhQihEyAfFsQAQDCBBCoIALAIIg7BUQg5h6gfiJg");
	this.shape_148.setTransform(1565.4973,628.5932,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#707477").s().p("AkwMRQhCiogQjCQgflsChkyQB3jhDMihQB6hgCNg/QAvAvAPAVQiQA2h7BcQg2ApguAtQgRAQgUAVQisC4hJDrQgnB7gHCHQgEBOAICKQAEBLAMBBQAFAcASBMIAAABIABACIAAAAIAlAHIhIBlg");
	this.shape_149.setTransform(1572.7117,628.126,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#AAA9AD").s().p("AsiMrIlqiBINby0IAEAAIgCgDIDLkdQN7CZF2A+IlyJCI48M8g");
	this.shape_150.setTransform(1547.0259,776.2183,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#AAA9AD").s().p("ArLGSIGCpCQGGpHAXgTQAQgOHEBcICkPdIkxHsQsJkAldh7g");
	this.shape_151.setTransform(1720.1161,547.553,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#858A8E").s().p("AofPBIg4gQI19n2IY9s8IFypCQeXFDA5gdIACg0QgBBsAUCIQALBEAKAuIitEBMgjMAQbQgoATguAAQgSAAgTgDg");
	this.shape_152.setTransform(1662.6266,830.6109,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#AAA9AD").s().p("AmgInQl2g+t8iYIgmgHIAAAAIgBgDQgRhMgFgcQgMhBgFhLQgIiJAFhOQAHiHAmh8QBKjrCsi4QAUgVASgQMAyAAQRQgtBGgkBbIAAABQg7CIgZClIAAABQgNA6gCBOIgCA0QgFACgRAAQjDAA73kpg");
	this.shape_153.setTransform(1713.9389,685.0415,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("A5rndQAugtA2gpIABAAMAxyAP4QgyA1glA6g");
	this.shape_154.setTransform(1737.959,651.2454,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#AAA9AD").s().p("A6PmyIgBAAQB8hcCPg3QALAPEWBiQFdB7MJEAQMwELNfEVIgBAAIgRAJQhYAvhDBHg");
	this.shape_155.setTransform(1752.6321,640.415,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#858A8E").s().p("AvEHVIExnsIikveQH0BoLSClIEnMIQEjMWgWA/QhUAThbA5IhLA0QtekVsvkLg");
	this.shape_156.setTransform(1853.3824,598.9846,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#AAA9AD").s().p("Al3KPQgLgugKhEQgViIAChsQAGhIAJhAIAAgBQAYhpAJgiQAXhZAchIIAAgBQAlhTAxhMQA+hbBNhEQAxgrAwgcIARgJIABAAIBKg0QBcg5BUgUICOBfQnjEfhNFnQgbCBAEDeQADCEALBxg");
	this.shape_157.setTransform(1907.4334,764.0575,0.9999,1.0015,0,5.2204,8.4709);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#AAA9AD").s().p("ALPKxQgYgBgigFQjLgi3ChfQgLhxgDiEQgEjeAbiAQBNloHkkfQVBOAAnAkIAZAbIAOAQQAPASAKAQQAXAmAFA9QAHBOglA5QgRAagZAVQgQAMggAUQgrAcgxAOQgrANgxAAIgHAAg");
	this.shape_158.setTransform(1991.7118,788.2384,0.9999,1.0015,0,5.2204,8.4709);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Ship2, new cjs.Rectangle(127.2,-66.7,1969.3999999999999,1001.1), null);


(lib.Ship = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4).p("AKcC8I03l3");
	this.shape.setTransform(1086.825,455.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4).p("AKXC+I0ul7");
	this.shape_1.setTransform(1093.1,445.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4).p("AKbC1I01lp");
	this.shape_2.setTransform(1098.575,437);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(4).p("AKVC/I0pl9");
	this.shape_3.setTransform(1105.7,429.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4).p("Ao/lFQBDhHAnAAIUFGDQgkAeghAjQgfAhgfAmIAAAAQgiAqggAyQgdAvgXAvQgWArgOAlQyqlMihgdQAXgnAig3QAng8AZglQAZgmAegnQAqg4Afghg");
	this.shape_4.setTransform(1097.1844,442.7313);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4).p("AJtDEIzYmI");
	this.shape_5.setTransform(1136.95,395.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4).p("AJhDJIzBmR");
	this.shape_6.setTransform(1144.1,390.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(4).p("AJSDAIyjl/");
	this.shape_7.setTransform(1150.875,385.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4).p("Aooj4IBnglIEuBVQGPB1HnCjQgjATgsAeQghAYgfAaQgfAcgTAXQgYAdgMAYIzumEQAcgdAggbQAngiAqgZQAagQAhgMg");
	this.shape_8.setTransform(1144.209,391.8313);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(4).p("AFvsUQiNA/h6BgQjMChh3DhQihEyAfFsQAQDCBBCo");
	this.shape_9.setTransform(1445.8622,562.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4).p("AhDAAQAAgcAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgcAAQgbAAgUgUQgUgUAAgdg");
	this.shape_10.setTransform(1297.225,594.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(4).p("AhEAAQAAgcAUgUQAUgUAcAAQAcAAAVAUQAUAUAAAcQAAAcgUAUQgVAUgcAAQgcAAgUgUQgUgUAAgcg");
	this.shape_11.setTransform(1270.05,589.85);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4).p("AFwGHQgIBogRBiQgGAlgHAUQgMAfgWAUQgSAQgZAKQh6gEiJgBQiSgCgugGQhWgNgmgtQgFgFgNgVQgbgtABg8QAAgeAKguQAAgDBAmfQAylIA4ipQARgzAbglQAdgnBRg3QBCgtBBgi");
	this.shape_12.setTransform(679.0495,547.1072);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(4).p("AADAAIgGAB");
	this.shape_13.setTransform(1477.35,477.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4).p("AF8tcQjdBhimCrQhFBHg/BeQh1Cvg5DIQgmCBgLCHQgQDIArC/QAfCJA5B6");
	this.shape_14.setTransform(1438.9999,564.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(4).p("AEoj/Qg+DzgLCAQgDAagEAPQgJAegTAUQgRAQgbAGQgaAGg9ADQh5AGiGgJIhzgI");
	this.shape_15.setTransform(689.4746,613.0242);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(8).p("AOGEgI8Lo/");
	this.shape_16.setTransform(1342.875,464.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(8).p("AEupsQnjEfhNFnQgbCBAEDeQADCEALBwIABAK");
	this.shape_17.setTransform(1807.2377,652.575);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(8).p("A5CoJMAyFAQT");
	this.shape_18.setTransform(1612.425,565.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(8).p("A45n8MAxzAP5");
	this.shape_19.setTransform(1621.525,555.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(8).p("AuCkeIcFI9");
	this.shape_20.setTransform(1355.05,454.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(4).p("AhGAAQAAgcAVgVQAVgVAcAAQAdAAAVAVQAVAUAAAdQAAAdgVAVQgVAVgdAAQgdAAgUgVQgVgVAAgdg");
	this.shape_21.setTransform(1057.25,538.575);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(4).p("AhCAAQAAgaAUgUQAUgUAaAAQAcAAAUAUQATATAAAbQAAAcgTAUQgUATgcAAQgbAAgTgTQgUgUAAgcg");
	this.shape_22.setTransform(1080.675,542.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(4).p("AhEAAQAAgcAUgUQAVgUAbAAQAdAAAUAUQAUAUAAAcQAAAcgUAVQgUAUgdAAQgbAAgVgUQgUgVAAgcg");
	this.shape_23.setTransform(1107.25,547);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(4).p("AGHuMQi6BdiVCNQiwCnhwDaQhAB8giB7Qg9DZAPDcQATEXCGD1");
	this.shape_24.setTransform(1432.5252,564.0535);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(8).p("ABykBIhyDMQhxDaAGBJ");
	this.shape_25.setTransform(242.0842,335.0262);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(8).p("AgeDkQhPgagxhBQgwhAAAhMQABg+Ahg4QAgg3AzgbQAXgMAkgFQAXgDBFgDQBLgEBpAM");
	this.shape_26.setTransform(344.6165,407.9092);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(8).p("AgcDvQg3gggtg2QhbhsAuhvQA0h+BhghQBQgaCnAb");
	this.shape_27.setTransform(608.6999,152.6748);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(4).p("ABFhLIAlAOIi4CHIghgTg");
	this.shape_28.setTransform(629.7,456.45,1,1,0,0,0,0,0.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(4).p("ABEhLIAmANIi5CIIgggTg");
	this.shape_29.setTransform(640.65,461,1,1,0,0,0,0,0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(4).p("ABEhLIAmANIi4CIIghgUg");
	this.shape_30.setTransform(651.55,465.3,1,1,0,0,0,0,0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_31.setTransform(505.375,521.7072);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_32.setTransform(505.375,512.0083);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_33.setTransform(505.525,502.1072);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_34.setTransform(505.525,491.9072);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(8).p("ACTk7QBcAGArAMQBJAVAfA0QAgA0gLBIQgLBHgwBBQh6CQikBHQhoAug/AMQhuAWhRgrQg2gdgmg3QgXg3ADg6QACgtATgsQALgZAbgpQAwhJBHg5QAqghAugYQBYguBjgOQA1gHAxADg");
	this.shape_35.setTransform(434.0301,238.7045);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(8).p("AJrpIIzVSQ");
	this.shape_36.setTransform(502.475,266.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(4).p("AFRC8QAOg7AJhAQASh+gYgTQgdgWjqgvQjogugXAKQgYALhPBKQhSBNgHAYQgLAjAABN");
	this.shape_37.setTransform(941.3562,232.6365);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(4).p("ADTEVQAVhVAghoQATg5ADgSQAGgggLgaQgQgmg3gaQhVgpi9g8Qh0gjhrgdIgJgD");
	this.shape_38.setTransform(967.4059,226.6156);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(4).p("ABCijIA4ARIjDE1IgxgUg");
	this.shape_39.setTransform(875.3,207.1,1,1,0,0,0,0,0.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(4).p("ABDijIA3ASIjCE1IgygUg");
	this.shape_40.setTransform(887.5,210.4,1,1,0,0,0,0,0.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(4).p("ABCijIA4ASIjDE0IgxgTg");
	this.shape_41.setTransform(899.75,214.1,1,1,0,0,0,0,0.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(8).p("AECk9IAuDDIp2Gg");
	this.shape_42.setTransform(636.2897,31.7846);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(8).p("AKEBnQwjiijCgqIgJgC");
	this.shape_43.setTransform(837.2541,233.6049);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(8).p("An3rjICPBfQVBOAAmAkQAOANAMAOIANAQQAQASAJAQQAYAmAFA9QAGBOglA5QgQAagaAVQgPAMggAUQgsAcgwAOQgvAOg0gBQgYgBgigFQjLgi3ChfIjfgO");
	this.shape_44.setTransform(1873.598,654.9143);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(8).p("AgPrrICjPdIkvHs");
	this.shape_45.setTransform(1646.0202,465.9757);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(8).p("APQrGIlyJDI48M8");
	this.shape_46.setTransform(1456.3378,724.3714);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(8).p("AIjsxIwnXTIFrCC");
	this.shape_47.setTransform(1372.5642,713.6724);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(8).p("EgknAcCIV9H2IA4AQQBDAKA4gaMAjLgQdICukBQgLgugKhEQgViHAChsQAChOANg6IAAgBQAYhqAJgiQAXhaAchHIAAgBQAkhbAthGQAlg5Ayg1QBEhGBXgvIARgJIABAAIBKg1QBcg5BUgTQAWg+kjsWIkosKQrSiln1hnQnDhcgQAOQgXATmGJHImDJD");
	this.shape_48.setTransform(1591.6044,614.6565);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(4).p("AFjq3QiPA3h7BcQg2ApgtAsQgSAQgUAWQisC3hKDsQgmB7gHCGQgFBPAICJQAFBMAMBBQAFAcARBM");
	this.shape_49.setTransform(1453.249,559.7494);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(8).p("Au4ilIdxFL");
	this.shape_50.setTransform(1311.95,644.075);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(8).p("Au4lBIcRJCIBSBJ");
	this.shape_51.setTransform(1383.0756,445.0094);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(8).p("A49pHIA3A1QAvAvAPAVQAMAPEVBiQFdB7MLD/QMuEMNfEV");
	this.shape_52.setTransform(1636.83,536.4079);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(8).p("ACzi8IgSAJQgxAcgxArQhMBDg9BbQgyBLgkBU");
	this.shape_53.setTransform(1780.275,612.7725);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(8).p("AAsiFQg6CIgZCk");
	this.shape_54.setTransform(1759.7858,647.1005);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(8).p("AZaBBQgKBAgFBIIgDA0Qg5Ad+WlCQl3g+t8iZ");
	this.shape_55.setTransform(1593.1659,657.4479);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(8).p("AATADIglgF");
	this.shape_56.setTransform(1425.4,631.525);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(8).p("AAAADQAAgCAAgB");
	this.shape_57.setTransform(1423.5,630.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(8).p("AAAgEIAAAJ");
	this.shape_58.setTransform(1423.475,631.475);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(4).p("AABABIgBgB");
	this.shape_59.setTransform(1407.1,660.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(4).p("AgfNCQhiiVg2jaQhjmVCel4QCEk+DcjO");
	this.shape_60.setTransform(1410.2157,576.9459);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(4).p("AiyByQA4g0A/gtQBUg8BVgnQArgTAagH");
	this.shape_61.setTransform(1450.9,481.5797);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(8).p("AHenRIu7Oj");
	this.shape_62.setTransform(551.125,114.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(8).p("AjE06IYvIBQh5A6hpBJQhCAug7AxQhoBYhbBtQhpB9hRCcQiTEYggEyQgOCDAGCLQAMD+BRCKIBzDCMghxgGV");
	this.shape_63.setTransform(1149.0994,495.3768);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(8).p("Ar7skIAggwQKuBIKtB3QVdDtAFDoQADCIhUCgQhRCaiQCUQiRCUiyBvQi6B0i8A0QlABZ1hkMQqxiHpwiYIAKgS");
	this.shape_64.setTransform(647.3762,290.0167);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(4).p("AABgvQnxhQm0hEIgOgEQgggGgOABQgKAAgGADQgEACgGAGQgJAIgDANQgDAKABAEIACAMQADANAFACIAzAKQCiAdLrB6IQlCvQATgJAJgTQAIgOgDgPQgCgMgKgKQgTgSgkAAIgWgDQg1gHkEgrQoEhThxgTg");
	this.shape_65.setTransform(605.2034,64.7788);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(4).p("AFAD5QBiAXBHAbQAShKAQhQQAhifgIgeQgLgrgVgYQgcghg2gKQgFgBkWhIQj5hBhQgKQgZgDgJABQhvBnhOBKQiVCMACAVQAEAkgEBLIAdABQCCAFCWAOQDvAVC6AiQBGANBAAQg");
	this.shape_66.setTransform(956.5175,229.4157);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(8).p("AmvFLIiyi2QAjhrAxhvQBijfBGgWQBHgVHKBNQDlAnDXAq");
	this.shape_67.setTransform(666.7964,161.6504);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(8).p("AJLgDIsclnQheBkhgBxQjCDhgPBCQAjAZGeBnQDPAzDIAug");
	this.shape_68.setTransform(977.15,373.7,1,1,0,0,0,-1.9,0);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(8).p("Eg30gD+ICdAyQPQEyO0EEQX+GlQdC2QByAUByAMQF+AwCOAKQDaARCXgUQFpgvFDkEQCyiPDUkFQCLirA1hlQBVikggiNQgoi1jdiHQm6kNv9jx");
	this.shape_69.setTransform(595.0727,329.723);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(8).p("AdMGkQmUhfnWhVQlGg7lCgvIjSgeIh0h4I9gmS");
	this.shape_70.setTransform(589.0166,181.3907);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(8).p("A4PCBIbDIqIC9AAQEMkIEWkSQItoiAxguQAMgLgxgMQgbgIgngHQkTgyuthPQnVgnmfge");
	this.shape_71.setTransform(422.5509,256.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(8).p("AnprSIONEuIArSc");
	this.shape_72.setTransform(394.2931,491.9748);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(8).p("ArpLDIXT2F");
	this.shape_73.setTransform(174.65,460.575);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(8).p("AlELuIJ7ojIAAvW");
	this.shape_74.setTransform(66.2466,621.3919);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(4).p("AucmdIdTLVIAPAQQAOASAAASQAAALgHAKQgOAYgYADQgPACgXgJI9hq2");
	this.shape_75.setTransform(106.8058,539.4281);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(8).p("AI6EPIxyoc");
	this.shape_76.setTransform(284.6,409.05);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(8).p("AY3GnMgrOgNJIiBAfQiXAphrA2");
	this.shape_77.setTransform(525.1321,415.2917);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(8).p("ACBsXQiuBagbBrIhHEwQiGKACmCsQB9CDBrBSQA2AqAdAP");
	this.shape_78.setTransform(355.9697,465.175);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(8).p("EAhDAHRMgnYgOdI6zE6");
	this.shape_79.setTransform(416.9291,590.4616);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(8).p("AMBHrI4CS3IlpiwIAq6uQgNgGgOgIQgigTgEgHQgMgQADgYQACgZAQgRQADgEAJgGQANgJAPgDQAKgBANACQAHABAWAHIAhAMIQJvOIRLi7IAehDQAKgYAGghQAMhBgWgr");
	this.shape_80.setTransform(116.3501,529.2718);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(8).p("Az3YBQgSgkgrgQQgwgSgPgJQgTgLgYgYQg2g3ANh2QAIhLAshAQAthCA+gYQAEgBBvgdQhOh4hHh6QiOj0AjgHQAkgIDCA2QCVAqCtA6QBZitGOlRQB9hpCNhtIBzhYIAApIQAAgNHeBtIBhAWIACgBIPAt6");
	this.shape_81.setTransform(358.4345,205.1027);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(8).p("AuxBmIBamEIX/hLIELLw");
	this.shape_82.setTransform(604.7616,36.2494);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(8).p("Eghkgp5IAAB+IEcHVISfEIQS9ERCgAsQDjA/APAGQA0AWAeA7QAbA2gOB6QgJBNggDdQC0AkDGBWQCdBFEPCUQDKBvBfEQQAvCHAHBxQgxgXhPgQQieggiYAlQhWAVhSAxQh7BKiRCWQi1C9h6C8QjXFMhPF7QgwDnAPC6QAIBoAcBQQA5CoB6CKQh8AEhzAjQhEAVhDAhQglATg7AiQhbAxhrAbQhFASiuAfQi+AgjGgFQh7gEj8gbQjBgVi4gnQhqgWhTgYQhkgbhugmQhRgbg0gUIgRgG");
	this.shape_83.setTransform(914.8548,352.6398);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(8).p("AgHgBIAPAD");
	this.shape_84.setTransform(741.175,591.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(4).p("AgmgMIBNAZ");
	this.shape_85.setTransform(738.075,590.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(4).p("AJDGYIAAADQgXCbgaBvQg4Dvg6ADQt4AzhUhtQg9hPBvrIQAskUAwjjQAyjnAXggQAog0CchhICShXIBJAV");
	this.shape_86.setTransform(684.1465,550.8936);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(4).p("Ah2gBQB4AFCIgD");
	this.shape_87.setTransform(681.4007,636.7627);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(4).p("ABsOBQBigCBDgIQBIgIAVgMQA1geAsjTIAijOQgRACgbgBQg3gBg0gRQgSgGgOgGQh4g1g8iBQhVi2gYjLQgbjuAvk5QAJg8ARhXIgzAiQg+Apg2AqQiuCGgaBWQgsCPhZIrQhhJcAjA8QAZApDMAUQAwAFBBAD");
	this.shape_88.setTransform(684.4439,547.124);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AAA9AD").s().p("AnVMNIAq6uIOBFKIAAPWIp7Ijg");
	this.shape_89.setTransform(50.325,603.375);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#707477").s().p("AsbLvIJ8oiIAAvWIO8FfI4BS0g");
	this.shape_90.setTransform(113.4,621.225);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AOtGgI9hq2QgOgGgOgJQghgTgFgHQgLgQACgYQADgYAPgRQAEgFAIgFQANgKAPgCQALgCAMACIAeAIIdzLhIAPAQQAOASAAASQAAALgHAKQgOAYgYADIgEABQgOAAgUgIg");
	this.shape_91.setTransform(102.4035,538.3036);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#AAA9AD").s().p("AyNGeIQKvMIRKi7IDHBfI3CV0g");
	this.shape_92.setTransform(130.975,456.625);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#AAA9AD").s().p("AhBDdQgxgSgPgJQgSgLgYgYQg3g3ANh1QAJhLAshAQAshCA/gYIBxgeICdAyIhzDMQhwDaAFBJQgRgkgrgQg");
	this.shape_93.setTransform(231.7998,331.525);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#AAA9AD").s().p("AgvDjQhQgagwhBQgxhAAAhLQABg/Ahg4QAhg2AygbQAYgNAkgFQAXgDBEgDQBLgDBqALQivBagbBrIg7D7g");
	this.shape_94.setTransform(346.3997,407.9842);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#707477").s().p("AlbN2IgOgQIv7mKIXC10IOsG9QiGKBClCsQB/CCBrBSQA2AqAdAPI6zE7QAAgSgOgSg");
	this.shape_95.setTransform(238.2,483.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#707477").s().p("Ah0H5QgdgPg2gpQhrhTh+iCQimisCGqAIAlikIONEuIArSbg");
	this.shape_96.setTransform(388.0947,493.8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#AAA9AD").s().p("AkoEgQg2gdgmg3QgXg3ADg6QACgtATgsQALgZAbgpQAwhJBHg5QAqghAugYQBYguBjgOQA1gHAxADQBcAGArAMQBJAVAfA0QAgA0gLBIQgLBHgwBBQh6CQikBHQhoAug/AMQgmAIghAAQhDAAg1gdg");
	this.shape_97.setTransform(434.0301,238.7045);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_98.setTransform(505.375,512.025);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_99.setTransform(505.375,521.725);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_100.setTransform(505.525,491.925);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AkegnIAAhQII9CnIAABIg");
	this.shape_101.setTransform(505.525,502.125);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#707477").s().p("A3MCCQBZitGPlRQB8hpCNhuIB0hXQGfAdHVAnQOtBPETAzIzWSPgADinqQhjAOhYAuQgtAYgqAiQhIA4gwBJQgaApgMAbQgTArgCAuQgCA5AXA2QAmA4A2AdQBQArBtgXQBAgMBpguQCkhGB6iQQAvhCALhHQALhHgfg0Qggg1hJgUQgqgNhcgGIgdgBQgkAAgmAFg");
	this.shape_102.setTransform(415.875,256.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AqfJIITVyPQAnAGAbAIQAxAMgMALQgxAuotIjIohIZg");
	this.shape_103.setTransform(507.7602,266.5);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#AAA9AD").s().p("AumFcIO/t5QCjAdLrB7Iu8Ojg");
	this.shape_104.setTransform(505.475,106.775);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#AAA9AD").s().p("AiRCZQhbhsAuhvQA0h+BhghQBQgaCnAbQhGAWhiDeQgwBwgjBrQg3gggtg2g");
	this.shape_105.setTransform(610.3749,152.6748);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AhsA3ICziBIAmANIi4CIg");
	this.shape_106.setTransform(629.45,456.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AhsA3ICziBIAmANIi4CIg");
	this.shape_107.setTransform(640.35,460.75);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AhsA3ICziBIAmANIi4CIg");
	this.shape_108.setTransform(651.275,465.05);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#AAA9AD").s().p("Ar+CVIgNgDIBWl1IWVhGIAsC/IplGUQnxhRm0hEg");
	this.shape_109.setTransform(588.6,30.25);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#AAA9AD").s().p("ArlJ0IgqybIuPkvIAiiLQAbhsCvhZQBrg2CWgqICCgfMArOANKIiTBXQidBhgnA1QgXAfgyDnQgxDjgrEVQhvLHA8BPgAl7B9II8ChIAAhIIo8ipgAl7AcII8ChIAAhJIo8ingAl6hGII8CgIAAhIIo8iogAl6isII8ChIAAhIIo8ipgATolZIAhAUIC6iJIgngNgAR7mEIAhAUIC5iJIgmgNgAQOmxIAhATIC5iIIgmgOg");
	this.shape_110.setTransform(514.75,505.15);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#707477").s().p("ACeFGIp0hmIJkmUIgsi/IBpgEIEMLwQg1gIkEgrg");
	this.shape_111.setTransform(652.425,37.65);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("Ag+AfQrrh6iigeIgzgKQgFgCgDgMIgCgNQgBgDADgKQADgNAJgIIAKgJQAGgDAKAAQAOgBAgAHIAOADQG0BEHxBRIJ1BmQEEArA1AHIAWACQAkAAATATQAKAKACAMQADAPgIAOQgJATgTAIg");
	this.shape_112.setTransform(605.2034,64.7433);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#707477").s().p("AgGLSQiSgBgugHQhWgNgmgtQgFgFgNgVQgbgtABg8QAAgeAKguIBAmhQAylJA4ipQARgzAbgkQAdgoBRg3QBCgtBBgiQgwE5AcDuQAYDLBVC3QA8CAB4A1QgIBogRBiQgGAlgHAUQgMAfgWAUQgSAQgZAKQh6gEiJgBg");
	this.shape_113.setTransform(679.0495,547.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AhGNyIhzgIQjMgUgYgpQgjg8BgpcQBZorAsiPQAbhWCtiGQA2gqA+gpIA0giQgRBXgJA8QhCAihCAtQhQA3gdAnQgbAlgRAzQg5CpgyFIIhAGiQgJAugBAeQAAA8AaAtQAOAVAEAFQAnAtBWANQAuAGCQACQCLABB5AEQAZgKASgQQAXgUALgfQAIgUAGglQARhiAHhoQAOAGATAGQg+DzgLCBQgDAagEAPQgJAegTAUQgRAQgbAGQgaAGg9ADIhdACQhVAAhNgFg");
	this.shape_114.setTransform(676.6842,548.3113);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#707477").s().p("AiEJdIhzh5Itui7IO9ujIPxCmIAAB/IEcHTQjXgqjlgnQnLhMhHAVQilgbhSAaQhgAgg0B+QgvBwBbBsQAuA2A2AgICyC2g");
	this.shape_115.setTransform(615.85,131.275);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AhrDuQAbgHARgQQATgTAJgfQAEgOADgaQALiBA9jyQAzAQA3ACQAcABARgDIgiDOQgtDTg1AdQgUANhHAHQhEAJhiACQA9gDAagGg");
	this.shape_116.setTransform(714.675,612.15);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#AAA9AD").s().p("AosNcQg9hPBvrIQAskUAwjjQAyjnAXggQAog0CchhICShXIBJAVIgzAhQg+Aqg2AqQiuCGgaBVQgsCPhZIsQhhJcAjA7QAZAqDMAUQAwAEBBAEIABAAQCGAJB6gGQBigDBDgIQBIgIAVgMQA1gdAsjUIAijOIBPAaIgRgEIARAHQgXCbgaBvQg4Dvg6ADQkcAQjJAAQmuAAg5hKg");
	this.shape_117.setTransform(684.1465,550.9737);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#707477").s().p("Aq1KNQqxiHpwiYIAKgSIBrAAIIioZQItojAxguQAMgLgxgMIAggwQKuBIKtB3QVdDtAFDoQADCIhUCgQhRCaiQCUQiRCUiyBvQi6B0i8A0QhPAWiSAAQm2AAwKjJg");
	this.shape_118.setTransform(648.4552,290.1328);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("Ah5CQIC8kzIA4ASIjDE1g");
	this.shape_119.setTransform(875.25,206.875);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("Ah5CQIC8kzIA3ASIjCE1g");
	this.shape_120.setTransform(887.475,210.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("Ah5CQIC8kzIA3ASIjCE1g");
	this.shape_121.setTransform(899.725,213.875);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#9CE5E3").s().p("AfKX0QiOgKl/gwQhxgMhygUQwei239mlQu0kEvRkzIicgyQhOh4hHh5QiOj0AjgHQAkgIDCA2QCVAqCtA6IbEIpIBSAAIgLASQJxCYKxCHQVgEMFBhZQC7g0C7h0QCyhvCQiUQCRiUBQiaQBUihgDiHQgFjo1cjtQqvh3qshIIggAwQgcgIgngHQkTgyushPQnWgnmggeIAApIQAAgNHfBtIBhAWIACgBIb9F+IB0B5IDSAdQFCAwFGA7QHWBUGUBfIAEABQP+DxG5ENQDdCGApC1QAfCNhVClQg0BliMCrQjTEFiyCPQlEEEloAvQhTAKhnAAQhVAAhigHg");
	this.shape_122.setTransform(580.5377,282.8489);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#707477").s().p("AhXCFQiWgOiCgFIAAgBQABhNAKgjQAIgYBShNQBOhKAZgLQAWgKDoAuQDqAvAdAWQAZATgSB+QgJBAgOA7Qi7gijugVg");
	this.shape_123.setTransform(941.3312,232.6365);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AEGD5QAOg8AJg/QASh+gZgTQgdgWjqgvQjogvgWAKQgZAMhOBKQhSBMgIAYQgKAjgBBNIAAABIgdgBQAEhLgEgjQgCgWCViMIC9ixQAJgBAZADQBqAdB0AkQC+A7BVApQA3AaAQAnQALAZgGAhQgDARgTA6QggBogVBUQhAgPhGgNg");
	this.shape_124.setTransform(948.9288,226.5875);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("ACHD7QAVhUAghpQATg5ADgQQAGgigLgaQgQgmg3gaQhVgpi9g7Qh0gkhrgdQBQALD6BAIEaBJQA2AKAcAiQAVAYALAqQAIAeghCfQgQBQgSBKQhHgbhigXg");
	this.shape_125.setTransform(975.0453,229.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#707477").s().p("AiUEMQmehngjgZQAPhCDCjhQBghxBehkIMcFnIlTFyQjJgujOgzg");
	this.shape_126.setTransform(978,373.925);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#707477").s().p("AgxAyQgVgVAAgdQAAgcAVgVQAVgVAcAAQAeAAAUAVQAVAUAAAdQAAAdgVAVQgUAVgeAAQgdAAgUgVg");
	this.shape_127.setTransform(1057.25,538.575);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#707477").s().p("AguAwQgUgUAAgcQAAgaAUgUQAUgUAaAAQAcAAAUAUQATATAAAbQAAAcgTAUQgUATgcAAQgbAAgTgTg");
	this.shape_128.setTransform(1080.675,542.775);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#707477").s().p("AgvAxQgVgVABgcQgBgcAVgTQAUgVAbABQAcgBAVAVQATATABAcQgBAcgTAVQgVATgcABQgbgBgUgTg");
	this.shape_129.setTransform(1107.25,547);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#AAA9AD").s().p("EAeAAmDQh7gEj8gbQjBgVi4gnQhqgWhTgYQhkgbhugmQhRgbg0gUIAAgCIgBAAIhPgaQgQACgcgBQg3gBg0gRQgSgGgOgGQh4g1g7iBQhWi2gYjMQgcjuAxk5QAJg8ARhXMgsYgNfIiBAfQiXAqhrA2QhpgMhLAEQhFADgXADQgkAFgYAMQgzAbggA3QghA4gBA+QAABNAxBAQAwBBBQAaIAKABIgKA1Ix0odIAfhDQAKgXAGghQAMhCgXgqQgFhJBxjbIByjMQPREzO0EEQX/GkQcC2QByAUByAMQF+AwCOAKQDaARCXgUQFogvFEkEQCyiPDTkEQCMirA1hlQBUilgfiNQgoi1jeiHQm5kNv9jxIgFgBQmUhfnWhUQlEg7lDgwIizi2QAjhrAyhwQBijfBGgVQBHgVHJBNQDmAmDXArISeEIQS+ERChAsQDiA/AQAGQA0AWAeA7QAbA2gPB6QgIBNggDdQCzAkDHBWQCdBFEOCUQDKBvBfEQQAwCHAGByQgwgXhPgQQieggiYAlQhXAVhRAxQh8BKiQCVQi2C9h6C8QjWFMhPF7QgwDnAOC6QAJBoAbBQQA6CoB5CKQh7AEhzAjQhEAVhDAhQglATg7AiQhcAxhqAbQhFASivAfQijAcioAAIg5gBgEAougCRQjCDhgPBCQAjAZGeBnQDPAzDJAuIFTlzIsdlmQheBkhgBxgEAoHgbPIi8CxQiWCNACAVQAFAkgFBLIAdABQCCAFCXAOQDuAVC7AiQBGANBBAQQBhAXBIAbQARhKAQhQQAhiggIgeQgLgrgUgYQgdghg2gKIkbhJQj6hBhQgKQgTgCgJAAIgGAAgEAgqgWpIAxATIDEk1Ig4gSgAew3OIAxAUIDDk2Ig3gSgAc13wIAyAUIDDk2Ig4gRg");
	this.shape_130.setTransform(678.5,373.3148);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#707477").s().p("Aq3iDQAXgoAjg4IUzF2IACABQgVAsgPAkQyqlKihgdg");
	this.shape_131.setTransform(1084.25,459.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#707477").s().p("AJ/DrI0zl2QAmg8AZgkIUrF6QgeAvgXAug");
	this.shape_132.setTransform(1089.75,450.375);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#707477").s().p("Aq2iWQAagmAdgnIUyFoIAEADIgBAAQghAqggAyg");
	this.shape_133.setTransform(1096.225,441.825);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#707477").s().p("AJ5DfI0yloQAqg4AgggIUpF8IAAABQgfAggfAmg");
	this.shape_134.setTransform(1102.05,432.775);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#707477").s().p("AJyDiI0pl8QBChIAnAAIUGGCQgkAggiAjg");
	this.shape_135.setTransform(1109.2,425.6998);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#707477").s().p("AqIilQAbgdAggcITWGIQgXAcgMAZg");
	this.shape_136.setTransform(1133.875,397.85);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#707477").s().p("AqEimQAngiArgZIABADIS2GNQgfAbgUAYg");
	this.shape_137.setTransform(1139.375,392.275);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#707477").s().p("Ap6iyIgBgDQAagPAhgNIAZgJIABADISiGAQghAXgfAbg");
	this.shape_138.setTransform(1146.65,387.875);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#707477").s().p("Ap4iwIgBgDIBOgbIEvBUQGOB1HoCjQgjATgsAeg");
	this.shape_139.setTransform(1154.775,384);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#707477").s().p("AgvAxQgVgVAAgcQAAgcAVgTQATgVAcABQAcgBAUAVQAVATAAAcQAAAcgVAVQgUATgcABQgcgBgTgTg");
	this.shape_140.setTransform(1270.05,589.85);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#AAA9AD").s().p("A0uO4Qh6iKg5ioQgchQgIhoQgPi6AwjnQBPl6DXlMQB6i8C1i9QCRiWB7hKQBSgxBWgVQCYglCeAgQBPAQAxAXIYvIBQh5A6hpBIQhCAug7AyQhoBYhbBsQhpB+hRCcQiTEYggExQgOCEAGCLQAMD9BRCKIBzDDgAkzH3QgUAUAAAdQAAAcAUAUQAVAUAcAAQAcAAAUgUQAUgUAAgcQAAgdgUgUQgUgUgcAAQgcAAgVAUgAo7HOQgUAUAAAcQAAAbAUAUQATAUAcAAQAcAAAUgUQATgTAAgcQAAgcgTgUQgUgUgcAAQgbAAgUAUgAsoGhQgVAVAAAdQAAAeAVAVQAUAVAeAAQAdAAAVgVQAVgVAAgeQAAgdgVgVQgVgVgdAAQgdAAgVAVgAunswQgfAhgqA4QgeAngZAmQgZAlgnA8QgiA3gXAoQChAdSqFMQAOglAWgrQAXgvAdgvQAggyAigqIAAAAQAfgmAfghQAhgjAkgfI0FmDIgBAAQgnAAhCBHgAm5zgQghAMgaAQQgrAZgnAiQggAbgbAdITuGFQAMgYAXgdQAUgXAfgcQAfgaAhgYQAsgeAjgTQnoikmOh1IkvhVg");
	this.shape_141.setTransform(1133.1728,491.8257);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#707477").s().p("AgvAwQgUgTAAgdQAAgbAUgVQAUgTAbgBQAcABAUATQAUAVAAAbQAAAdgUATQgUAVgcgBQgbABgUgVg");
	this.shape_142.setTransform(1297.225,594.75);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#AAA9AD").s().p("AvQMbIhzjDQhRiJgMj+QgGiLAOiDQAgkxCTkZQBRicBph+QBbhsBohYIcLJAQjcDOiFE+QifF4BkGVQA1DaBiCVIgCADgAjbGjQgUAUAAAcQAAAdAUAUQAUAUAcAAQAdAAAUgUQAUgUAAgdQAAgcgUgUQgUgUgdAAQgcAAgUAUgAnrFyQgUAUAAAdQAAAcAUAUQAUAUAdAAQAcAAAUgUQAUgUAAgcQAAgdgUgUQgUgUgcAAQgdAAgUAUg");
	this.shape_143.setTransform(1314.385,548);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AvAjvQA6gyBDguIcEI9Qg/Aug3A0g");
	this.shape_144.setTransform(1348.8,459.425);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#AAA9AD").s().p("Av5jdQBphIB5g6IcRJCQgaAHgqATQhWAmhVA9g");
	this.shape_145.setTransform(1366.975,448.025);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#707477").s().p("Al7JFQhjmVCel4QCFk+DbjOQA4g0A/guQBVg9BVgmQArgTAZgHIAdAYQi6BdiVCOQiwCmhwDbQhAB7giB7Qg9DaAPDbQATEYCGD1IgfArQhiiVg2jag");
	this.shape_146.setTransform(1429.8063,565.525);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#707477").s().p("AmYGGQgPjcA9jZQAih7A/h8QBwjaCwinQCWiNC5hdIA2AxQjdBhinCrQhEBHg/BfQh1Cug5DIQgmCBgLCHQgQDIArC/QAfCJA5B6IgpA4QiFj1gTkXg");
	this.shape_147.setTransform(1435.752,564.575);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#707477").s().p("AlxJbQgri/AQjIQALiHAmiBQA5jIB1iuQA/hfBFhIQCmiqDdhhIAAAAIA4A0QiNBAh6BgQjMChh3DhQihEyAfFsQAQDCBBCoIALAIIg7BUQg5h6gfiJg");
	this.shape_148.setTransform(1442.3962,564.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#707477").s().p("AkwMRQhCiogQjCQgflsChkyQB3jhDMihQB6hgCNg/QAvAvAPAVQiQA2h7BcQg2ApguAtQgRAQgUAVQisC4hJDrQgnB7gHCHQgEBOAICKQAEBLAMBBQAFAcASBMIAAABIABACIAAAAIAlAHIhIBlg");
	this.shape_149.setTransform(1449.5504,562.675);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#AAA9AD").s().p("AsiMrIlqiBINby0IAEAAIgCgDIDLkdQN7CZF2A+IlyJCI48M8g");
	this.shape_150.setTransform(1437.425,712.95);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#AAA9AD").s().p("ArLGSIGCpCQGGpHAXgTQAQgOHEBcICkPdIkxHsQsJkAldh7g");
	this.shape_151.setTransform(1589.25,461.2576);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#858A8E").s().p("AofPBIg4gQI19n2IY9s8IFypCQeXFDA5gdIACg0QgBBsAUCIQALBEAKAuIitEBMgjMAQbQgoATguAAQgSAAgTgDg");
	this.shape_152.setTransform(1557.7,749.724);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#AAA9AD").s().p("AmgInQl2g+t8iYIgmgHIAAAAIgBgDQgRhMgFgcQgMhBgFhLQgIiJAFhOQAHiHAmh8QBKjrCsi4QAUgVASgQMAyAAQRQgtBGgkBbIAAABQg7CIgZClIAAABQgNA6gCBOIgCA0QgFACgRAAQjDAA73kpg");
	this.shape_153.setTransform(1595.619,598.1693);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("A5rndQAugtA2gpIABAAMAxyAP4QgyA1glA6g");
	this.shape_154.setTransform(1616.5,561.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#AAA9AD").s().p("A6PmyIgBAAQB8hcCPg3QALAPEWBiQFdB7MJEAQMwELNfEVIgBAAIgRAJQhYAvhDBHg");
	this.shape_155.setTransform(1630.15,548.325);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#858A8E").s().p("AvEHVIExnsIikveQH0BoLSClIEnMIQEjMWgWA/QhUAThbA5IhLA0QtekVsvkLg");
	this.shape_156.setTransform(1726.8773,492.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#AAA9AD").s().p("Al3KPQgLgugKhEQgViIAChsQAGhIAJhAIAAgBQAYhpAJgiQAXhZAchIIAAgBQAlhTAxhMQA+hbBNhEQAxgrAwgcIARgJIABAAIBKg0QBcg5BUgUICOBfQnjEfhNFnQgbCBAEDeQADCEALBxg");
	this.shape_157.setTransform(1795.8411,647.825);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#AAA9AD").s().p("ALPKxQgYgBgigFQjLgi3ChfQgLhxgDiEQgEjeAbiAQBNloHkkfQVBOAAnAkIAZAbIAOAQQAPASAKAQQAXAmAFA9QAHBOglA5QgRAagZAVQgQAMggAUQgrAcgxAOQgrANgxAAIgHAAg");
	this.shape_158.setTransform(1882.1169,659.3285);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#99FF99").ss(4).p("AKcC8I03l3");
	this.shape_159.setTransform(1086.825,455.075);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#99FF99").ss(4).p("AKXC+I0ul7");
	this.shape_160.setTransform(1093.1,445.75);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#99FF99").ss(4).p("AKbC1I01lp");
	this.shape_161.setTransform(1098.575,437);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#99FF99").ss(4).p("AKVC/I0pl9");
	this.shape_162.setTransform(1105.7,429.225);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#99FF99").ss(4).p("Ao/lFQBDhHAnAAIUFGDQgkAeghAjQgfAhgfAmIAAAAQgiAqggAyQgdAvgXAvQgWArgOAlQyqlMihgdQAXgnAig3QAng8AZglQAZgmAegnQAqg4Afghg");
	this.shape_163.setTransform(1097.1844,442.7313);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#99FF99").ss(4).p("AJtDEIzYmI");
	this.shape_164.setTransform(1136.95,395.25);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#99FF99").ss(4).p("AJhDJIzBmR");
	this.shape_165.setTransform(1144.1,390.075);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f().s("#99FF99").ss(4).p("AJSDAIyjl/");
	this.shape_166.setTransform(1150.875,385.525);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f().s("#99FF99").ss(4).p("Aooj4IBnglIEuBVQGPB1HnCjQgjATgsAeQghAYgfAaQgfAcgTAXQgYAdgMAYIzumEQAcgdAggbQAngiAqgZQAagQAhgMg");
	this.shape_167.setTransform(1144.209,391.8313);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f().s("#99FF99").ss(4).p("AFvsUQiNA/h6BgQjMChh3DhQihEyAfFsQAQDCBBCo");
	this.shape_168.setTransform(1445.8622,562.275);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f().s("#99FF99").ss(4).p("AhDAAQAAgcAUgUQAUgUAbAAQAcAAAUAUQAUAUAAAcQAAAdgUAUQgUAUgcAAQgbAAgUgUQgUgUAAgdg");
	this.shape_169.setTransform(1297.225,594.75);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f().s("#99FF99").ss(4).p("AhEAAQAAgcAUgUQAUgUAcAAQAcAAAVAUQAUAUAAAcQAAAcgUAUQgVAUgcAAQgcAAgUgUQgUgUAAgcg");
	this.shape_170.setTransform(1270.05,589.85);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f().s("#99FF99").ss(4).p("AFwGHQgIBogRBiQgGAlgHAUQgMAfgWAUQgSAQgZAKQh6gEiJgBQiSgCgugGQhWgNgmgtQgFgFgNgVQgbgtABg8QAAgeAKguQAAgDBAmfQAylIA4ipQARgzAbglQAdgnBRg3QBCgtBBgi");
	this.shape_171.setTransform(679.0495,547.1072);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f().s("#99FF99").ss(4).p("AADAAIgGAB");
	this.shape_172.setTransform(1477.35,477.9);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f().s("#99FF99").ss(4).p("AF8tcQjdBhimCrQhFBHg/BeQh1Cvg5DIQgmCBgLCHQgQDIArC/QAfCJA5B6");
	this.shape_173.setTransform(1438.9999,564.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#99FF99").ss(4).p("AEoj/Qg+DzgLCAQgDAagEAPQgJAegTAUQgRAQgbAGQgaAGg9ADQh5AGiGgJIhzgI");
	this.shape_174.setTransform(689.4746,613.0242);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#99FF99").ss(8).p("AOGEgI8Lo/");
	this.shape_175.setTransform(1342.875,464.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#99FF99").ss(8).p("AEupsQnjEfhNFnQgbCBAEDeQADCEALBwIABAK");
	this.shape_176.setTransform(1807.2377,652.575);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#99FF99").ss(8).p("A5CoJMAyFAQT");
	this.shape_177.setTransform(1612.425,565.55);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#99FF99").ss(8).p("A45n8MAxzAP5");
	this.shape_178.setTransform(1621.525,555.65);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#99FF99").ss(8).p("AuCkeIcFI9");
	this.shape_179.setTransform(1355.05,454.55);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#99FF99").ss(4).p("AhGAAQAAgcAVgVQAVgVAcAAQAdAAAVAVQAVAUAAAdQAAAdgVAVQgVAVgdAAQgdAAgUgVQgVgVAAgdg");
	this.shape_180.setTransform(1057.25,538.575);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#99FF99").ss(4).p("AhCAAQAAgaAUgUQAUgUAaAAQAcAAAUAUQATATAAAbQAAAcgTAUQgUATgcAAQgbAAgTgTQgUgUAAgcg");
	this.shape_181.setTransform(1080.675,542.775);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#99FF99").ss(4).p("AhEAAQAAgcAUgUQAVgUAbAAQAdAAAUAUQAUAUAAAcQAAAcgUAVQgUAUgdAAQgbAAgVgUQgUgVAAgcg");
	this.shape_182.setTransform(1107.25,547);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#99FF99").ss(4).p("AGHuMQi6BdiVCNQiwCnhwDaQhAB8giB7Qg9DZAPDcQATEXCGD1");
	this.shape_183.setTransform(1432.5252,564.0535);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#99FF99").ss(8).p("ABykBIhyDMQhxDaAGBJ");
	this.shape_184.setTransform(242.0842,335.0262);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#99FF99").ss(8).p("AgeDkQhPgagxhBQgwhAAAhMQABg+Ahg4QAgg3AzgbQAXgMAkgFQAXgDBFgDQBLgEBpAM");
	this.shape_185.setTransform(344.6165,407.9092);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#99FF99").ss(8).p("AgcDvQg3gggtg2QhbhsAuhvQA0h+BhghQBQgaCnAb");
	this.shape_186.setTransform(608.6999,152.6748);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#99FF99").ss(4).p("ABFhLIAlAOIi4CHIghgTg");
	this.shape_187.setTransform(629.7,456.45,1,1,0,0,0,0,0.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#99FF99").ss(4).p("ABEhLIAmANIi5CIIgggTg");
	this.shape_188.setTransform(640.65,461,1,1,0,0,0,0,0.2);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#99FF99").ss(4).p("ABEhLIAmANIi4CIIghgUg");
	this.shape_189.setTransform(651.55,465.3,1,1,0,0,0,0,0.2);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#99FF99").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_190.setTransform(505.375,521.7072);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#99FF99").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_191.setTransform(505.375,512.0083);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#99FF99").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_192.setTransform(505.525,502.1072);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#99FF99").ss(4).p("AEfAwIAABIIo9ifIAAhQg");
	this.shape_193.setTransform(505.525,491.9072);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#99FF99").ss(8).p("ACTk7QBcAGArAMQBJAVAfA0QAgA0gLBIQgLBHgwBBQh6CQikBHQhoAug/AMQhuAWhRgrQg2gdgmg3QgXg3ADg6QACgtATgsQALgZAbgpQAwhJBHg5QAqghAugYQBYguBjgOQA1gHAxADg");
	this.shape_194.setTransform(434.0301,238.7045);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#99FF99").ss(8).p("AJrpIIzVSQ");
	this.shape_195.setTransform(502.475,266.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#99FF99").ss(4).p("AFRC8QAOg7AJhAQASh+gYgTQgdgWjqgvQjogugXAKQgYALhPBKQhSBNgHAYQgLAjAABN");
	this.shape_196.setTransform(941.3562,232.6365);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#99FF99").ss(4).p("ADTEVQAVhVAghoQATg5ADgSQAGgggLgaQgQgmg3gaQhVgpi9g8Qh0gjhrgdIgJgD");
	this.shape_197.setTransform(967.4059,226.6156);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#99FF99").ss(4).p("ABCijIA4ARIjDE1IgxgUg");
	this.shape_198.setTransform(875.3,207.1,1,1,0,0,0,0,0.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#99FF99").ss(4).p("ABDijIA3ASIjCE1IgygUg");
	this.shape_199.setTransform(887.5,210.4,1,1,0,0,0,0,0.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#99FF99").ss(4).p("ABCijIA4ASIjDE0IgxgTg");
	this.shape_200.setTransform(899.75,214.1,1,1,0,0,0,0,0.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#99FF99").ss(8).p("AECk9IAuDDIp2Gg");
	this.shape_201.setTransform(636.2897,31.7846);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#99FF99").ss(8).p("AKEBnQwjiijCgqIgJgC");
	this.shape_202.setTransform(837.2541,233.6049);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#99FF99").ss(8).p("An3rjICPBfQVBOAAmAkQAOANAMAOIANAQQAQASAJAQQAYAmAFA9QAGBOglA5QgQAagaAVQgPAMggAUQgsAcgwAOQgvAOg0gBQgYgBgigFQjLgi3ChfIjfgO");
	this.shape_203.setTransform(1873.598,654.9143);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#99FF99").ss(8).p("AgPrrICjPdIkvHs");
	this.shape_204.setTransform(1646.0202,465.9757);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#99FF99").ss(8).p("APQrGIlyJDI48M8");
	this.shape_205.setTransform(1456.3378,724.3714);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#99FF99").ss(8).p("AIjsxIwnXTIFrCC");
	this.shape_206.setTransform(1372.5642,713.6724);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#99FF99").ss(8).p("EgknAcCIV9H2IA4AQQBDAKA4gaMAjLgQdICukBQgLgugKhEQgViHAChsQAChOANg6IAAgBQAYhqAJgiQAXhaAchHIAAgBQAkhbAthGQAlg5Ayg1QBEhGBXgvIARgJIABAAIBKg1QBcg5BUgTQAWg+kjsWIkosKQrSiln1hnQnDhcgQAOQgXATmGJHImDJD");
	this.shape_207.setTransform(1591.6044,614.6565);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#99FF99").ss(4).p("AFjq3QiPA3h7BcQg2ApgtAsQgSAQgUAWQisC3hKDsQgmB7gHCGQgFBPAICJQAFBMAMBBQAFAcARBM");
	this.shape_208.setTransform(1453.249,559.7494);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#99FF99").ss(8).p("Au4ilIdxFL");
	this.shape_209.setTransform(1311.95,644.075);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#99FF99").ss(8).p("Au4lBIcRJCIBSBJ");
	this.shape_210.setTransform(1383.0756,445.0094);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#99FF99").ss(8).p("A49pHIA3A1QAvAvAPAVQAMAPEVBiQFdB7MLD/QMuEMNfEV");
	this.shape_211.setTransform(1636.83,536.4079);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#99FF99").ss(8).p("ACzi8IgSAJQgxAcgxArQhMBDg9BbQgyBLgkBU");
	this.shape_212.setTransform(1780.275,612.7725);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#99FF99").ss(8).p("AAsiFQg6CIgZCk");
	this.shape_213.setTransform(1759.7858,647.1005);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#99FF99").ss(8).p("AZaBBQgKBAgFBIIgDA0Qg5Ad+WlCQl3g+t8iZ");
	this.shape_214.setTransform(1593.1659,657.4479);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#99FF99").ss(8).p("AATADIglgF");
	this.shape_215.setTransform(1425.4,631.525);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#99FF99").ss(8).p("AAAADQAAgCAAgB");
	this.shape_216.setTransform(1423.5,630.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#99FF99").ss(8).p("AAAgEIAAAJ");
	this.shape_217.setTransform(1423.475,631.475);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#99FF99").ss(4).p("AABABIgBgB");
	this.shape_218.setTransform(1407.1,660.5);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#99FF99").ss(4).p("AgfNCQhiiVg2jaQhjmVCel4QCEk+DcjO");
	this.shape_219.setTransform(1410.2157,576.9459);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#99FF99").ss(4).p("AiyByQA4g0A/gtQBUg8BVgnQArgTAagH");
	this.shape_220.setTransform(1450.9,481.5797);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#99FF99").ss(8).p("AHenRIu7Oj");
	this.shape_221.setTransform(551.125,114.4);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#99FF99").ss(8).p("AjE06IYvIBQh5A6hpBJQhCAug7AxQhoBYhbBtQhpB9hRCcQiTEYggEyQgOCDAGCLQAMD+BRCKIBzDCMghxgGV");
	this.shape_222.setTransform(1149.0994,495.3768);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#99FF99").ss(8).p("Ar7skIAggwQKuBIKtB3QVdDtAFDoQADCIhUCgQhRCaiQCUQiRCUiyBvQi6B0i8A0QlABZ1hkMQqxiHpwiYIAKgS");
	this.shape_223.setTransform(647.3762,290.0167);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#99FF99").ss(4).p("AABgvQnxhQm0hEIgOgEQgggGgOABQgKAAgGADQgEACgGAGQgJAIgDANQgDAKABAEIACAMQADANAFACIAzAKQCiAdLrB6IQlCvQATgJAJgTQAIgOgDgPQgCgMgKgKQgTgSgkAAIgWgDQg1gHkEgrQoEhThxgTg");
	this.shape_224.setTransform(605.2034,64.7788);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#99FF99").ss(4).p("AFAD5QBiAXBHAbQAShKAQhQQAhifgIgeQgLgrgVgYQgcghg2gKQgFgBkWhIQj5hBhQgKQgZgDgJABQhvBnhOBKQiVCMACAVQAEAkgEBLIAdABQCCAFCWAOQDvAVC6AiQBGANBAAQg");
	this.shape_225.setTransform(956.5175,229.4157);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#99FF99").ss(8).p("AmvFLIiyi2QAjhrAxhvQBijfBGgWQBHgVHKBNQDlAnDXAq");
	this.shape_226.setTransform(666.7964,161.6504);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#99FF99").ss(8).p("AJLgDIsclnQheBkhgBxQjCDhgPBCQAjAZGeBnQDPAzDIAug");
	this.shape_227.setTransform(977.15,373.7,1,1,0,0,0,-1.9,0);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#99FF99").ss(8).p("Eg30gD+ICdAyQPQEyO0EEQX+GlQdC2QByAUByAMQF+AwCOAKQDaARCXgUQFpgvFDkEQCyiPDUkFQCLirA1hlQBVikggiNQgoi1jdiHQm6kNv9jx");
	this.shape_228.setTransform(595.0727,329.7229);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#99FF99").ss(8).p("AdMGkQmUhfnWhVQlGg7lCgvIjSgeIh0h4I9gmS");
	this.shape_229.setTransform(589.0166,181.3907);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#99FF99").ss(8).p("A4PCBIbDIqIC9AAQEMkIEWkSQItoiAxguQAMgLgxgMQgbgIgngHQkTgyuthPQnVgnmfge");
	this.shape_230.setTransform(422.5509,256.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#99FF99").ss(8).p("AnprSIONEuIArSc");
	this.shape_231.setTransform(394.2931,491.9748);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#99FF99").ss(8).p("ArpLDIXT2F");
	this.shape_232.setTransform(174.65,460.575);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#99FF99").ss(8).p("AlELuIJ7ojIAAvW");
	this.shape_233.setTransform(66.2466,621.3919);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#99FF99").ss(4).p("AucmdIdTLVIAPAQQAOASAAASQAAALgHAKQgOAYgYADQgPACgXgJI9hq2");
	this.shape_234.setTransform(106.8058,539.4281);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#99FF99").ss(8).p("AI6EPIxyoc");
	this.shape_235.setTransform(284.6,409.05);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#99FF99").ss(8).p("AY3GnMgrOgNJIiBAfQiXAphrA2");
	this.shape_236.setTransform(525.1321,415.2916);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#99FF99").ss(8).p("ACBsXQiuBagbBrIhHEwQiGKACmCsQB9CDBrBSQA2AqAdAP");
	this.shape_237.setTransform(355.9697,465.175);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#99FF99").ss(8).p("EAhDAHRMgnYgOdI6zE6");
	this.shape_238.setTransform(416.9291,590.4616);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#99FF99").ss(8).p("AMBHrI4CS3IlpiwIAq6uQgNgGgOgIQgigTgEgHQgMgQADgYQACgZAQgRQADgEAJgGQANgJAPgDQAKgBANACQAHABAWAHIAhAMIQJvOIRLi7IAehDQAKgYAGghQAMhBgWgr");
	this.shape_239.setTransform(116.3501,529.2718);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#99FF99").ss(8).p("Az3YBQgSgkgrgQQgwgSgPgJQgTgLgYgYQg2g3ANh2QAIhLAshAQAthCA+gYQAEgBBvgdQhOh4hHh6QiOj0AjgHQAkgIDCA2QCVAqCtA6QBZitGOlRQB9hpCNhtIBzhYIAApIQAAgNHeBtIBhAWIACgBIPAt6");
	this.shape_240.setTransform(358.4345,205.1028);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#99FF99").ss(8).p("AuxBmIBamEIX/hLIELLw");
	this.shape_241.setTransform(604.7616,36.2494);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#99FF99").ss(8).p("Eghkgp5IAAB+IEcHVISfEIQS9ERCgAsQDjA/APAGQA0AWAeA7QAbA2gOB6QgJBNggDdQC0AkDGBWQCdBFEPCUQDKBvBfEQQAvCHAHBxQgxgXhPgQQieggiYAlQhWAVhSAxQh7BKiRCWQi1C9h6C8QjXFMhPF7QgwDnAPC6QAIBoAcBQQA5CoB6CKQh8AEhzAjQhEAVhDAhQglATg7AiQhbAxhrAbQhFASiuAfQi+AgjGgFQh7gEj8gbQjBgVi4gnQhqgWhTgYQhkgbhugmQhRgbg0gUIgRgG");
	this.shape_242.setTransform(914.8548,352.6398);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#99FF99").ss(8).p("AgHgBIAPAD");
	this.shape_243.setTransform(741.175,591.5);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#99FF99").ss(4).p("AgmgMIBNAZ");
	this.shape_244.setTransform(738.075,590.4);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#99FF99").ss(4).p("AJDGYIAAADQgXCbgaBvQg4Dvg6ADQt4AzhUhtQg9hPBvrIQAskUAwjjQAyjnAXggQAog0CchhICShXIBJAV");
	this.shape_245.setTransform(684.1464,550.8936);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#99FF99").ss(4).p("Ah2gBQB4AFCIgD");
	this.shape_246.setTransform(681.4007,636.7627);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#99FF99").ss(4).p("ABsOBQBigCBDgIQBIgIAVgMQA1geAsjTIAijOQgRACgbgBQg3gBg0gRQgSgGgOgGQh4g1g8iBQhVi2gYjLQgbjuAvk5QAJg8ARhXIgzAiQg+Apg2AqQiuCGgaBWQgsCPhZIrQhhJcAjA8QAZApDMAUQAwAFBBAD");
	this.shape_247.setTransform(684.4439,547.124);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_158,p:{y:659.3285}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151,p:{y:461.2576}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117,p:{x:684.1465}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_158,p:{y:659.3284}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151,p:{y:461.2575}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117,p:{x:684.1464}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4,-4.1,2011.1,854.3000000000001);


(lib.Screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EgzcglwMBm5AAAQHBAAE9E+QE+E9AAHBMAAAAppQAAHAk+E+Qk9E+nBAAMhm5AAAQnBAAk9k+Qk+k+AAnAMAAAgppQAAnBE+k9QE9k+HBAAg");
	this.shape.setTransform(437.675,241.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66CCFF").s().p("EgzcAlxQnBAAk9k+Qk+k9AAnBMAAAgppQAAnBE+k9QE9k+HBABMBm5AAAQHBgBE9E+QE+E9AAHBMAAAAppQAAHBk+E9Qk9E+nBAAg");
	this.shape_1.setTransform(437.675,241.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Screen, new cjs.Rectangle(-1,-1,877.4,485.3), null);


(lib.SamEat = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5,1,1).p("AgMgDQAMAGANAA");
	this.shape.setTransform(15.275,52.25);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").ss(0.5,1,1).p("AgMAAIAZAA");
	this.shape_1.setTransform(19.725,52.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").ss(0.5,1,1).p("AgDgVIAHAr");
	this.shape_2.setTransform(7.8,68.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").ss(0.5,1,1).p("AAVgDQgPAFgMABIgOAB");
	this.shape_3.setTransform(24.075,91.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").ss(0.5,1,1).p("AAAAHQABAAACgBQACgCAAgEQgCgGgCAAQgBAAgCADQgCADAAACQAAAEADABg");
	this.shape_4.setTransform(28.775,47.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").ss(0.5,1,1).p("AgCgEQgCABAAACQAAACABACQADAEADgDQADgDgCgCQgDgFgDACg");
	this.shape_5.setTransform(28.8632,44.1099);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").ss(0.5,1,1).p("AgIgHQAGADADADQAGAEADAF");
	this.shape_6.setTransform(22.4,47.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").ss(0.5,1,1).p("AgJgCQAJAEAKAB");
	this.shape_7.setTransform(22.35,48.125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").ss(0.5,1,1).p("AgNAQQAQADAPgIQAIgEACgEQADgDgBgEQgBgJgKgCQgEgBgGABIgHACQgEACgKAFQgKADgHgE");
	this.shape_8.setTransform(24.7875,46.7848);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").ss(0.5,1,1).p("AADgTQAEAGABAJIAAAHQgEAMgLAF");
	this.shape_9.setTransform(20.7,46.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").ss(0.5,1,1).p("AAfg2QAeAOASAdQAGALADAHQAJAbgNANQgLAKgZgDQhTgKg4g5");
	this.shape_10.setTransform(11.4712,156.0096);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").ss(0.5,1,1).p("AAlADQgGgMgLgPIgCgBQgBgDgDABQgBAAAAABQgBAAgBADQgDAIADAJQgFgHgIgEQgDgCgBACQgCABABADIAGANIgOgJQgCgCgCAAQgCgBgCACQgBACACADIAHAMQgGgGgIgCQgEgBgBABQgCABAAABIAAACIAEAEQAMAMAKAJ");
	this.shape_11.setTransform(24.675,58.7607);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").ss(0.5,1,1).p("AApgDIgLADQgTADgSABQgQAAgOgCIgDAA");
	this.shape_12.setTransform(18.625,98.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221F20").ss(0.5,1,1).p("AAcgNIgFAAQgMABgKAFQgOAGgKALIgEAE");
	this.shape_13.setTransform(26.05,60.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAEgEIgHAEIAHAFg");
	this.shape_14.setTransform(21.8,35.35);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221F20").ss(0.5,1,1).p("AAIgCIAAgCQgEgGgBAAQgDgCgDACQgDACgBAEQgCAEACAFQABAFADABQAFADAEgEQADgDAAgEQAAgDgBgCg");
	this.shape_15.setTransform(21.0333,35.3909);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAEgEIgHAEIAHAFg");
	this.shape_16.setTransform(30.4,35.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221F20").ss(0.5,1,1).p("AAIgCIAAgCQgDgFgDgBQgCgCgDACQgDACgBAEQgCAFACAEQACAGACAAQAEACAFgDQADgDAAgEQAAgDgBgCg");
	this.shape_17.setTransform(29.6262,35.4292);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221F20").ss(0.5,1,1).p("AAmAEQgUABgSgCQgSgCgTgE");
	this.shape_18.setTransform(14.125,90.0417);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221F20").ss(0.5,1,1).p("AAVgCQgNAEgMABQgLABgFgB");
	this.shape_19.setTransform(24.25,89.5333);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").ss(0.5,1,1).p("AATgJIADAHQABAGgEAGQgGALgMABQgKABgIgKQgEgHAAgGIABgFQADgOAQgCQAOgBAGANg");
	this.shape_20.setTransform(20.06,90.977);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221F20").ss(0.5,1,1).p("AAoADQgWACgTgCQgPgBgXgF");
	this.shape_21.setTransform(14.275,92.025);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221F20").ss(0.5,1,1).p("AA2AZQAEgGABgFQACgGAAgEQABgMgHgKIgEgEQgBgCgCABQgCAAAAABQgDAKgCABQgCABgEgEQgFgEgCAAQgBgBgBABIgDABQgBABgDAEQgCADgBABQgDAAgHgFIgDAAQgCAAgBABQgBACgCAEQgCAEgBABQgHAFgMgGQgEgDgDgEQgGgDgJADQgMAGgCAP");
	this.shape_22.setTransform(21.4017,53.6438);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221F20").ss(0.5,1,1).p("AgYAEQALgGANgBQAOAAALAF");
	this.shape_23.setTransform(21.025,30.9232);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221F20").ss(0.5,1,1).p("AgaACQAMgIAPABQAPACALAJ");
	this.shape_24.setTransform(29.275,31.0697);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221F20").ss(0.5,1,1).p("AgJgWQAMgBAKAEIAGADQACACADAHQAHAMgDAHQgFAKgPABQgJABgJgBQgFAAgDgCQgEgDgBgGQgBgKAEgIQADgKAIgGgAgcgTIAFgCQAIgBAGAA");
	this.shape_25.setTransform(29.5,35.3284);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221F20").ss(0.5,1,1).p("AAJgWQgLgBgKAEIgGADQgCACgEAHQgGAMADAHQAFAKAPABQAJABAJgBQAEAAAEgCQAEgDAAgGQACgKgEgIQgDgKgJgGgAAcgTQgJgDgJAAQAAAAgBAA");
	this.shape_26.setTransform(21.1,35.3295);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221F20").ss(0.5,1,1).p("AgZCCIAnj/QADgEAGAAQACAAABAB");
	this.shape_27.setTransform(4.875,141.65);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221F20").ss(0.5,1,1).p("AgIhoIAEAFQANATgBAuIgCCEIAAAH");
	this.shape_28.setTransform(13.9533,139.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#221F20").ss(0.5,1,1).p("AAkAAQgfANgdgNIgLgF");
	this.shape_29.setTransform(9.9,129.9814);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#221F20").ss(0.5,1,1).p("AAOizQgRD0gKBnIAAAM");
	this.shape_30.setTransform(8.8,111.925);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#221F20").ss(0.5,1,1).p("AAJicIAAADIgREzIAAAD");
	this.shape_31.setTransform(13.975,114.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#221F20").ss(0.5,1,1).p("AgJiUQAGAEAEALQAMAeABA2QABBCADAUIACAGQADADAGACQAjALAWAdQASAXgHARQgDAKgKAFQgKAFgLABQgJAAgMgCQgHgCgOgDQgSgEgkgDQghgEgUgLQgEgCgCgDIgCgCIgCgHQgDgaADgsIAHiEQACglAQgKIADgB");
	this.shape_32.setTransform(30.7938,143.0042);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#221F20").ss(0.5,1,1).p("AAGi2QATCJAPDXIAAADIAAAFQgCAFgJAAQgXABgagFIAAgDQgMiUgHiY");
	this.shape_33.setTransform(25.675,111.0923);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#221F20").ss(0.5,1,1).p("AAdCmIgQgnQgahOAJg7QAEghARgeQARgfAbgTQAGgDAPgIQAMgGAAgHIAAAAQgBgFgHgGQgNgKgaAAQgWgBgUAFQgXAGgVAQQgVARgMAWQgVAoADBGQACAmAAASQABAhgEAYQgDASAEAGQAFAHAPADIBfAQ");
	this.shape_34.setTransform(12.691,39.2417);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#221F20").ss(0.5,1,1).p("AhNicQAWgNAhAGQAgAGASAUQAhAhADA/QABAUgCAfQgDAuAAAHQgCBAAVAmQg5gNgugD");
	this.shape_35.setTransform(29.9,40.1027);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#221F20").ss(0.5,1,1).p("AggAAQADgJAGgKIAIgKQAGgDABAAQACACgBAEQgBAHgEAKQAFgGAHgDQADgCABABQADADgDAEIgGAMIAMgFQADgDACADQABACgCACIgGALQAIgEAJgDQADgBACAAQABABACADIAAACQgCAEgCACQgYASgBAB");
	this.shape_36.setTransform(17.6,58.2719);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#221F20").ss(0.5,1,1).p("AADgNQAHAIgEAIQgDAJgKAC");
	this.shape_37.setTransform(25.9113,40.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#221F20").ss(0.5,1,1).p("Agng8QAUAaANAXQALAUAKAPQAJAPAQAW");
	this.shape_38.setTransform(32.625,65.275);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#221F20").ss(0.5,1,1).p("AgChEIAFCJ");
	this.shape_39.setTransform(9.975,87.025);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#221F20").ss(0.5,1,1).p("AAJhyQAEAUgDASQgBAFgHAZIgDAOQgFAQgCAmIgCBd");
	this.shape_40.setTransform(27.3893,81.35);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#221F20").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_41.setTransform(26.225,92.975);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#221F20").ss(0.5,1,1).p("AgngLIgDAFQgSAigDApQgBATACABQAFACAYg2QATgpAZg9IAJgTQABgDADgBIADAAQADABAFAFQAFAHAEADQAHAIANAK");
	this.shape_42.setTransform(11.6333,67.0786);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#221F20").ss(0.5,1,1).p("AAwiKQgSAAgWAFIgWAGQgJACgLAGQgKAGgPAfQgSAogJAwQgGAiAFAjQADAaAEALQAGARAMAHQAGADALAAQAXAAAbgmQAQgUAQgfQAihAAThE");
	this.shape_43.setTransform(9.0286,69.875);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#221F20").ss(0.5,1,1).p("Ag4huIAJABQAGABAJADQAXAWAXAbQAWAXAIAMQANASALASIAKAPQAJAVgHAbQgIAbgRAFQgKADgNgHQgIgEgNgLQgOgMgLgSQgDgEgPgeQgWgngcgn");
	this.shape_44.setTransform(31.6154,67.195);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#221F20").ss(0.5,1,1).p("AgMCIIAEgDQANgHALgMQAgggAKg2QAJglgKgkIgGgSQgPgfgngVQgVgMgSgEQgDgBgEgBQgEgBgJgB");
	this.shape_45.setTransform(28.3007,38.025);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#AD7E53").s().p("AAwCgQhTgKg4g6IAnj8IAMAGQAeAOAegOQAOATgBAuIgCCMIAAAAQAeAOASAdQAGALADAIQAJAbgNANQgIAIgRAAIgLgBg");
	this.shape_46.setTransform(11.4712,145.4096);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#DA615B").s().p("Ag+CIQgMgHgGgRQgEgLgDgaQgFgjAGgiQAJgwASgoQAPgfAKgGQALgGAJgCIAWgGQAWgFASAAIANACIABABQgGAKgDAJQADABAFAFIAJAKQAHAIANAKQgTBEgiBAQgQAfgQAUQgbAmgXAAQgLAAgGgDgAglApQgBATACABQAFACAYg2IgJgrIAAAAQgSAigDApg");
	this.shape_47.setTransform(9.0286,69.875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AD7E53").s().p("AAAANQgQgBgXgGIAAAAIgBgTIACAAQATAFASACQASACAUgBIgBAFQAAAGAFAHIgWABIgTgBg");
	this.shape_48.setTransform(14.225,91.025);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3B74B7").s().p("AhvC+IABgMIAclbIAAgXIAAAAQAXAGAQABQAUACAWgCQAHAKALgCQALgBAGgKIABAAIAOgBQAMgBAPgGIACAAIgBAQQATCJAPDXIABACIgBAGQgCAEgIAAQgXACgbgFIAAgEQgMiTgIiYIAAgBQgTAFgSAAQgQAAgOgBIgSE1IADgCIACACQgQAHgPAAQgPAAgQgHg");
	this.shape_49.setTransform(18.525,110.9064);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F7ED5C").s().p("AAZCpIhfgQQgPgDgFgGQgEgGADgTQAEgXgBghQAAgTgCgmQgDhGAVgnQAMgXAVgQQAVgQAXgHQAUgFAWABQAaABANAKQAHAGABAEIgBAAIABABQAAAGgMAHIgVALQgbATgRAfQgRAdgEAiQgJA7AaBNIAQAnIAAAAIgDAFg");
	this.shape_50.setTransform(12.691,39.2667);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EEC87A").s().p("AADAgQgDgBgBABQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIgCABIgCgEIgFAAIgRAIIAGgMQABgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQgBAAAAAAQgBAAgBAAQAAAAgBABIgNAGIAHgNQADgEgDgCQgBgBAAAAQAAAAgBAAQAAAAgBAAQgBABAAAAQgIAEgFAGQAEgLABgGQABgDgCgCQgBgBgGADIgEAFIgBAAIgEgJIABAAQACgQAMgGQAJgDAGADIAHAHQAMAHAHgGIADgFIADgGIADgBIADAAQAHAFADAAIADgEIAEgFIADgBIACAAIAHAEQAEAEACgBQACgBADgKQAAAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAAAABABQAAAAAAAAQABAAAAABIAEAEQAHAKgBANQAAAEgCAGQgBAEgEAGIAAABIgDgBQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAABIgBACQgDAIACAJQgEgHgKgEQAAAAgBAAQgBgBAAAAQgBAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABQAAAAAAABQAAABABABIAFAOIgNgLQgBAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBADACACIAHAOQgHgHgIgDg");
	this.shape_51.setTransform(21.3267,55.3438);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FBE1A3").s().p("AgPAPIgJgKQgFgFgCAAQACgJAHgKIAHgKQAGgDABAAQACACgBAEQgBAHgDAKQAEgGAHgDQABgBAAAAQABAAABAAQAAAAAAAAQABAAAAAAQADADgDAEIgFAMIALgFQABgBABAAQAAAAABAAQABAAAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAgBABQAAABAAAAIgHALIARgHIAFgBIADAEIAAACIgEAGIgYATQgNgKgHgIg");
	this.shape_52.setTransform(17.6,58.2719);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#B4B4B4").s().p("AgRANQgEgHAAgGIABgFQADgOAQgCQAOgBAGANIADAHQABAGgEAGQgGALgMABIgBAAQgKAAgHgJg");
	this.shape_53.setTransform(20.06,90.977);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgFAXQgOgBgFgKQgDgHAGgMQADgHACgCIAGgDQAKgEAMABIAAABQAIAFADAKQAEAIgBAKQgBAGgEADQgDACgFAAIgJAAIgJAAgAgCgJQgCACgBADQgCAFACAFQABAFADABQAEACAEgEQADgDAAgEIADACIAAgIIgDACIgBgDQgDgFgCgBIgDAAIgDABg");
	this.shape_54.setTransform(20.8705,35.3284);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FBE1A3").s().p("AgmCOIgHgHQgGgCgIADIgBgBQgNgBgNgGQgbhNAJg7QAFgiARgdQARgfAbgTIAVgLQAMgHAAgGQAHAAAFACIAGABQATAFAVALQAnAWAPAfIgOAAQgLgKgPgCQgQgBgMAJIAGATIANgCIAAABQgHAGgEAJQgEAKACAJQABAGADADIgNAVQAGAHgDAKQgDAJgLACIAFAcIgHACIgPAHQgJADgHgEIgDABIAAAIQAGACAEAEQAFAFADAEQARADAPgIQAIgEACgEIAJABIgCAGQAAAEADABIABAAIAAAAIANAMQgMALgNAIIgFACIgBABIgDgEQgBAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQgEAKgCABQgBAAgEgDIgHgFIgCAAIgDABIgEAGIgEADQgCABgHgFIgDAAIgCABIgEAFIgEAGQgDACgEAAQgFAAgHgEgAgMBVIANAFQACAAgFgEQgHgFgBAAgAgcg4IgGADQgCABgDAHQgGAOADAHQAFAJAOABQAKACAJgCQAEAAADgCQAEgDABgGQABgJgEgKQgDgJgHgGIAAgBIgEAAQgKAAgJAEg");
	this.shape_55.setTransform(22.6625,39.0833);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#DA615B").s().p("AgxCdQgSgCgTgFIgCAAIgEhfIgCgBQAQgVAQgeQAihBAThEIAYgTIADgFIAAgCIACgBIAAACIADAFQAMAMALAIIgDAEIAAAAQAcAnAWApQAEAUgDASIgIAdIgEAOQgFAQgCAmIgCA5QgNAFgNABIgQAAIgBABQgHgNgPACQgOACgEAOIgNAAIgagBg");
	this.shape_56.setTransform(19.0393,74.6417);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#221F20").s().p("AgDALQgDgBgBgFQgCgFACgEQABgEADgCQADgCADACQABAAAEAGIAAACIgEACIAFADQAAAEgDADQgDACgDAAIgDgBg");
	this.shape_57.setTransform(21.025,35.3909);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FBE1A3").s().p("AggAHIgEgFIAAgCQAAAAAAAAQAAAAABAAQAAgBAAAAQAAAAABgBQABgBAEABQAIACAGAHIgHgNQgCgCABgDQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAIAOAKIgGgNQAAgBAAgBQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAIAEAFAHQgDgJADgIIACgCIAFAAIACACQALAOAGANQgMABgKAFQgPAGgKAMQgKgIgMgMg");
	this.shape_58.setTransform(24.675,58.825);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#AA7E76").s().p("AgMAQQgCgEgGgFQgEgEgHgCIABgHIACgBQAHAEAKgDIAPgHIAGgCQAGgBAFABQAKACABAJQABAEgDADQgDAEgHAEQgMAGgMAAIgIgBg");
	this.shape_59.setTransform(24.6375,46.7848);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgCAAIAEgCIAAAFg");
	this.shape_60.setTransform(21.6583,35.375);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAAADIgBgFIADgBIAAAIg");
	this.shape_61.setTransform(22.025,35.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#AD7E53").s().p("AgVAOQAEgGgBgIIgCgGIABgBIAQAAQAMgBANgFIgBATIgBAAQgPAGgMABIgNABg");
	this.shape_62.setTransform(24.15,90.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#BD5E38").s().p("AgGAAIACgEQABAAAGAEQAGAFgCAAg");
	this.shape_63.setTransform(22.0985,47.625);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D4CC4D").s().p("AgZCVQACgGAAgEQABgNgHgKIABgBIAEgDQAOgHALgMQAfggALg2QAIglgKgkIgGgSQgPgfgmgVQgWgMgSgEIgGgCQgFgBgJgBIAAAAQAXgNAhAGQAgAGASAUQAhAhADA/QABAUgCAfIgDA1QgCBAAVAmQg6gNgugDg");
	this.shape_64.setTransform(29.9,40.1027);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#DA615B").s().p("AAgBqQgIgEgNgLQgOgNgLgRIgSgiQgWgogcgnIAAAAIADgEQAKgMAPgGQAKgFAMgBQgFgOgLgOIgCgCIADABIAPAEQAXAVAXAbQAWAYAIAMQANASALARIAKAQQAJAVgHAbQgIAbgRAFIgGABQgIAAgJgFg");
	this.shape_65.setTransform(31.6154,67.22);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FBE1A3").s().p("AgLBTIAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQACgBAAgFQgCgGgCgBQgCAAgCAEIgJgBQADgEgBgEQgBgJgKgCQgEgBgGABIgFgcQALgCADgJQADgKgGgGIANgWQAEACAEAAQAJACAJgCQAPgBAFgJQADgHgGgOQgEgHgCgBIgGgDQgJgFgNABIgNACIgGgTQAMgJAQABQAOACALAKIAOAAIAHASQAJAjgIAmQgKA2ggAggAgMAlQAAAAgBAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQAAABAAAAQABABAAAAQAAABAAAAQAEAFADgEQADgCgCgEQgCgDgCAAIgDABg");
	this.shape_66.setTransform(29.8507,39.9697);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EEC87A").s().p("AgBAHQgDgBAAgEIACgFQACgDABAAQACAAACAGQAAAEgCACQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAAAAAg");
	this.shape_67.setTransform(28.775,47.525);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgMAXQgFAAgDgCQgEgDgBgGQgBgKAEgIQADgKAIgFIAAgBQAMgBAKAEIAGADQACACADAHQAGAMgDAHQgEAKgPABIgJAAIgJAAgAgEgJQgDACgBAEQgCAFACAEQACAGACAAQAEACAFgDQADgDAAgEIADABIAAgIIgEACIAAgCQgDgFgDgBIgCgBIgDABg");
	this.shape_68.setTransform(29.7295,35.3284);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EEC87A").s().p("AgDADQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAABgBQADgCADAFQACACgDADIgDABQAAAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBg");
	this.shape_69.setTransform(28.8632,44.1099);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AD7E53").s().p("AAqCTIgVgFQgSgEgkgDQghgEgUgLIgGgFIgCgCIgCgHQgDgaADgsIAHiEQACglAQgKIAAAEQAbAFAXgCQAJAAACgEIAAgGIAAgCIABAAQAGAEAEALQAMAeABA2QABBCADAUIACAGQADADAGACQAjALAWAdQASAXgHARQgDAKgKAFQgKAFgLABIgEAAQgHAAgKgCg");
	this.shape_70.setTransform(30.7938,143.0042);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#221F20").s().p("AgDALQgCAAgCgGQgCgEACgFQABgEADgCQADgCACACQADABADAFIAAACIgEACIAFADQAAAEgDADQgDACgDAAIgDgBg");
	this.shape_71.setTransform(29.6179,35.4292);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCAAIAEgCIAAAFg");
	this.shape_72.setTransform(30.2583,35.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAAADIgBgEIADgDIAAAIg");
	this.shape_73.setTransform(30.625,35.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.SamEat, new cjs.Rectangle(-1,21.3,42.7,141.2), null);


(lib.Sam = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#020303").ss(0.2,1,1).p("AgYgPQAKAIAMAHQAWAPAFAB");
	this.shape.setTransform(21.8,20.625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#020303").ss(0.2,1,1).p("AgDgKIAHAV");
	this.shape_1.setTransform(29.55,4.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#020303").ss(0.2,1,1).p("AgYgPQAKAKANAIQANAJANAE");
	this.shape_2.setTransform(21.3,21.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#020303").ss(0.2,1,1).p("AgUgVIAQAnIABAAIAYAEIgTgpIAAAAg");
	this.shape_3.setTransform(24.975,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#020303").ss(0.2,1,1).p("AgDAAIAHAB");
	this.shape_4.setTransform(24.975,6.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#020303").ss(0.2,1,1).p("AgUARQAPADAFABQAGACAGgBQAEAAACgCQAGgEAAgIQABgHgEgFQgFgJgegGIgKgC");
	this.shape_5.setTransform(27.66,4.445);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#020303").ss(0.2,1,1).p("AAVgQQgNgCgJgBIgFABQgHADgDAFQgHAKAGAJIACACQADADAIACIASAE");
	this.shape_6.setTransform(23.0685,3.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#020303").ss(0.2,1,1).p("Aglg7IABAHIACAFQACABABACIAUAPQANAIABACQAHAFACADIALARQADAEABAFIACAJQAEATAFAPIAAAC");
	this.shape_7.setTransform(32.85,17.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#020303").ss(0.2,1,1).p("AA3AqQgEgOgBgFQAAgEgCgHIgLgaIgQgMQgIgGgGgEIgHgEIgHANQgHAJgLALQgLALgNAYIgEAFIgBAD");
	this.shape_8.setTransform(29.325,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#020303").ss(0.2,1,1).p("AAbg0QgQAcgdAnIgIAm");
	this.shape_9.setTransform(21.125,28.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#020303").ss(0.2,1,1).p("AgxhLQAHgTAKgCQAOgEAQgEQAagFAHADIATAQQgcAhgCAGIgOAxQgBAAgBACQgDAHgJAeQgJAeAAACQgFgBgHAEQgJAFAAAEQgCAGgBADQgBAFADAFQAFAIAVAAQAJgBAJgEQAQgHABgLIAIhSIgKABQgLgBgFgD");
	this.shape_10.setTransform(15.45,33.2688);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#020303").ss(0.2,1,1).p("AgeAPQAWgbAKgDQANgEAfgCIAdgCIAFgFIAGgLQAFgKABgIQABgGgBgGQgBgGABgDQABgIAJgMIAGgGQgHgDgJgCQgMgCgbAFIgbAHQgEABgFABIgCABAgeAPQABABANAFQANAFAAADQACAEgsBNIgggCIgPgFQgQgGABgHQAAgKANgIQADgCATACIANgTQAQgWANgQg");
	this.shape_11.setTransform(10.8242,22.7609);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#020303").ss(0.2,1,1).p("AhpA0QAIgEAOgDQAfgHAWgBQAQAAARACQAQAPAVADQAUAAALgEIAGgDQAFgDAGgEQACgDACgCIAHgIQAHgLAAgRQAAgRgJgPQgEgIgIgHQgMgIgLgCQgIgCgMACQgLABgJAEQgLAGgGAJ");
	this.shape_12.setTransform(21.95,5.7125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#020303").ss(0.2,1,1).p("AgEgWQgBAGABAGQAAANAEAMIAFAI");
	this.shape_13.setTransform(21.7167,7.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#020303").ss(0.2,1,1).p("AgLgJQABAHADAGQAAAGAFgBQABAAABgDQABgEgBgFQACAGAGACQADAAAAgBIABgCIgDgE");
	this.shape_14.setTransform(36.75,27.7571);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#020303").ss(0.2,1,1).p("AABACIgBgD");
	this.shape_15.setTransform(37.575,27.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#020303").ss(0.2,1,1).p("AANATIACADIACABQACAAABgCIAAgEQgBgGgGgLQgBgEAAgGQAAgKgLgBIgEgBQgHAAgFAEIAAABIgBACQgBACACABIAEAJQACADgBACQgCADAAACQAAAAgCAFQgFAHAAADQAFABAEgDQADgCAAgF");
	this.shape_16.setTransform(36.4479,25.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#020303").ss(0.2,1,1).p("AgBAAIADAA");
	this.shape_17.setTransform(7.85,12.425);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#020303").ss(0.2,1,1).p("AgTgGIgDgBIgCgBQgBgCACgBQAAgBADgBQADgCAGAAQAHAAADgBIAIgFQAGgCAEACQAEACAEAGQAEAHgCAGIAAAAIgBACIgDAAQgEABgGAAQgGABAAABQgCADgBACIgEADQgCAIgDACQgDgDABgGQAAgEAEgCQgDACgKADQgGABgBgDQAAgBABgDQADgEAGgCQgIACgEgEIgBgCIACgCg");
	this.shape_18.setTransform(9.6455,13.0625);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#AD7E53").s().p("AgVAuIgPgFQgQgHABgHQAAgKANgHQADgCATACIANgSIAcgnQABACANAFQANAEAAADQACAFgsBMg");
	this.shape_19.setTransform(5.2267,29.025);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ECF6F9").s().p("AgHAOQAAgEAEgCIgNAFQgGABgBgDIABgEQADgEAGgCQgIACgEgEIgBgCIACgCIAFgBIgDgBIgCgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIADgCQADgCAGAAIAKgBIAIgFQAGgCAEACQAEACAEAGQAEAHgCAGIAAAAIgBACIgDAAIgKABQgGABAAABIgDAFIgEADQgCAIgDACQgDgDABgGg");
	this.shape_20.setTransform(9.6455,13.0625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AD7E53").s().p("AghAuQgDgEABgFIADgJQAAgFAJgEQAIgEAEABIAJgfQAJgfADgHQAFAEALAAIAKAAIgIBRQgBAKgQAHQgKAEgIABQgVAAgFgIg");
	this.shape_21.setTransform(14.8375,38.625);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#3B74B7").s().p("AABBBQAAgBAAAAQAAgBABAAQAAAAAAAAQAAgBAAAAIAPgwQABgHAdgfIgTgQQgIgEgZAGIgeAHQgKACgHATQAAgDgNgFQgNgFgCgBQAXgcALgDQANgEAfgCIAcgCIAEgFQALALANAIQANAJAOAEQgQAcgeAnIgIAmIgKAAQgMgBgEgDg");
	this.shape_22.setTransform(15.75,26.75);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#AD7E53").s().p("AgDAHQgNgHgLgLIAGgIIAVAPQAXAPAEABIgDAGIgBACQgOgEgMgJg");
	this.shape_23.setTransform(21.55,21.05);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AED9DC").s().p("AAAAQQgIgCgEgDIgBgCQgHgJAHgKQAEgFAHgDIADgBIARAng");
	this.shape_24.setTransform(22.7435,3.975);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgDASIgBAAIgQgnIAWADIAAAAIATAog");
	this.shape_25.setTransform(24.975,4.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AED9DC").s().p("AAAAVIgUgEIAPADIgTgpIAKACQAeAGAFAJQAEAFgBAHQAAAIgGAEQgCACgEAAIgFAAIgHgBg");
	this.shape_26.setTransform(27.66,4.445);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#B4B4B4").s().p("AgtAnIgFgIQgGgMAAgOIABgLIAAgCIAAAAIACACQADAEAIABIATADIABAAIAIACIACAAIATAEQAHACAGgBQAEAAACgCQAGgEAAgHQABgHgEgGQgFgJgegGIgKgCIAAAAIgXgCIgFABQAHgJALgGQAIgEALgBQAMgCAIACQALACAMAIQAIAHAEAIQAJAPAAARQgBARgHALIgGAIIgFAFIgKAHIgHADQgKAEgTAAQgWgDgPgPg");
	this.shape_27.setTransform(26.8667,5.7125);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#DB615B").s().p("ABnA0QAAgEgCgGIgKgcIgRgMIgOgJIgGgEIgJANQgGAIgLALQgMANgNAXQgEgBgXgQIgWgPIACgDQAFgKABgIQABgEgBgGIgBgKQABgHAKgMIAGgGIgQgFQgMgDgbAGIgcAHIgIACIgDABIABgBQABgHgEgGQgDgGgEgCQAIgEAOgDQAfgHAVgBQAQAAATACQAPAPAVADQAUAAAKgEIACAHIABAFIAEADIAUAPIAPAKQAGAFADAEIALAQQADAFABAFIACAIQADAUAFAOIAAAFIgFgBQgIAAgEAEIgGgTg");
	this.shape_28.setTransform(23.975,16.545);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#ECF6F9").s().p("AgEAWQgDgHAAgHQAAAFgDACQgEAEgFgBQAAgEAFgGIACgGIACgDQABgCgCgEIgEgJQgBgBAAAAQAAgBAAAAQgBAAAAgBQAAAAABgBIABgCIAAAAQAFgEAHAAIAEAAQALACAAAJIABAKQAGALABAHIAAADQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAAAAAIgCgBIgCgCIACAFIgBACIgCABQgHgCgCgHQABAGgBAEQgBAAAAABQAAABgBAAQAAAAgBABQAAAAAAAAIgBAAQgDAAAAgFg");
	this.shape_29.setTransform(36.4479,25.9821);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgYgPQAKAIAMAHQAWAPAFAB");
	this.shape_30.setTransform(21.8,20.625);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgDgKIAHAV");
	this.shape_31.setTransform(29.55,4.525);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgYgPQAKAKANAIQANAJANAE");
	this.shape_32.setTransform(21.3,21.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgUgVIAQAnIABAAIAYAEIgTgpIAAAAg");
	this.shape_33.setTransform(24.975,4.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgDAAIAHAB");
	this.shape_34.setTransform(24.975,6.025);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgUARQAPADAFABQAGACAGgBQAEAAACgCQAGgEAAgIQABgHgEgFQgFgJgegGIgKgC");
	this.shape_35.setTransform(27.66,4.445);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#99FF99").ss(0.5,1,1).p("AAVgQQgNgCgJgBIgFABQgHADgDAFQgHAKAGAJIACACQADADAIACIASAE");
	this.shape_36.setTransform(23.0685,3.975);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#99FF99").ss(0.5,1,1).p("Aglg7IABAHIACAFQACABABACIAUAPQANAIABACQAHAFACADIALARQADAEABAFIACAJQAEATAFAPIAAAC");
	this.shape_37.setTransform(32.85,17.05);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#99FF99").ss(0.5,1,1).p("AA3AqQgEgOgBgFQAAgEgCgHIgLgaIgQgMQgIgGgGgEIgHgEIgHANQgHAJgLALQgLALgNAYIgEAFIgBAD");
	this.shape_38.setTransform(29.325,19.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#99FF99").ss(0.5,1,1).p("AAbg0QgQAcgdAnIgIAm");
	this.shape_39.setTransform(21.125,28.35);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgxhLQAHgTAKgCQAOgEAQgEQAagFAHADIATAQQgcAhgCAGIgOAxQgBAAgBACQgDAHgJAeQgJAeAAACQgFgBgHAEQgJAFAAAEQgCAGgBADQgBAFADAFQAFAIAVAAQAJgBAJgEQAQgHABgLIAIhSIgKABQgLgBgFgD");
	this.shape_40.setTransform(15.45,33.2688);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgeAPQAWgbAKgDQANgEAfgCIAdgCIAFgFIAGgLQAFgKABgIQABgGgBgGQgBgGABgDQABgIAJgMIAGgGQgHgDgJgCQgMgCgbAFIgbAHQgEABgFABIgCABAgeAPQABABANAFQANAFAAADQACAEgsBNIgggCIgPgFQgQgGABgHQAAgKANgIQADgCATACIANgTQAQgWANgQg");
	this.shape_41.setTransform(10.8242,22.7609);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#99FF99").ss(0.5,1,1).p("AhpA0QAIgEAOgDQAfgHAWgBQAQAAARACQAQAPAVADQAUAAALgEIAGgDQAFgDAGgEQACgDACgCIAHgIQAHgLAAgRQAAgRgJgPQgEgIgIgHQgMgIgLgCQgIgCgMACQgLABgJAEQgLAGgGAJ");
	this.shape_42.setTransform(21.95,5.7125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgEgWQgBAGABAGQAAANAEAMIAFAI");
	this.shape_43.setTransform(21.7167,7.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgLgJQABAHADAGQAAAGAFgBQABAAABgDQABgEgBgFQACAGAGACQADAAAAgBIABgCIgDgE");
	this.shape_44.setTransform(36.75,27.7571);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#99FF99").ss(0.5,1,1).p("AABACIgBgD");
	this.shape_45.setTransform(37.575,27.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#99FF99").ss(0.5,1,1).p("AANATIACADIACABQACAAABgCIAAgEQgBgGgGgLQgBgEAAgGQAAgKgLgBIgEgBQgHAAgFAEIAAABIgBACQgBACACABIAEAJQACADgBACQgCADAAACQAAAAgCAFQgFAHAAADQAFABAEgDQADgCAAgF");
	this.shape_46.setTransform(36.4479,25.525);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgBAAIADAA");
	this.shape_47.setTransform(7.85,12.425);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgTgGIgDgBIgCgBQgBgCACgBQAAgBADgBQADgCAGAAQAHAAADgBIAIgFQAGgCAEACQAEACAEAGQAEAHgCAGIAAAAIgBACIgDAAQgEABgGAAQgGABAAABQgCADgBACIgEADQgCAIgDACQgDgDABgGQAAgEAEgCQgDACgKADQgGABgBgDQAAgBABgDQADgEAGgCQgIACgEgEIgBgCIACgCg");
	this.shape_48.setTransform(9.6455,13.0625);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#B4B4B4").s().p("AgtAnIgFgIQgGgMAAgOIABgLIAAgCIAAAAIACACQADAEAIABIATADIABAAIAKACIATAEQAHACAGgBQAEAAACgCQAGgEAAgHQABgHgEgGQgFgJgegGIgKgCIAAAAIgXgCIgFABQAHgJALgGQAIgEALgBQAMgCAIACQALACAMAIQAIAHAEAIQAJAPAAARQgBARgHALIgGAIIgFAFIgKAHIgHADQgKAEgTAAQgWgDgPgPg");
	this.shape_49.setTransform(26.8667,5.7125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_49},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,40.5,46.1);


(lib.Reset = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221E1F").p("ADHipIA7g3IAAClIibgMIAxgyQgZgbglgVQhJgqhFARQg3AOgjAoQgsAxgBBJQAABHAoA2QAcAnAuAVQAYALAYAFQA3AKAtgSQAkgPAfghQAkgkAMgrQAHgXACgEQAHgQALgFQAKgDALABQANACAHAGQARASgQAyQgOArgdAnQgLAQgVAWQgvAtg4AQQhQAYhTgeQhWgfgyhJQgog6gGhIQgHhJAghAQAfhAA/goQA7giBEgEQBRgFBAAlQAqAZAeAmg");
	this.shape.setTransform(26.6448,26.5412);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSD5QhWgfgyhJQgog6gGhIQgHhJAghAQAfhAA/goQA7giBEgEQBRgFBAAlQAqAZAeAmIA7g3IAAClIibgMIAxgyQgZgbglgVQhJgqhFARQg3AOgjAoQgsAxgBBJQAABHAoA2QAcAnAuAVQAYALAYAFQA3AKAtgSQAkgPAfghQAkgkAMgrIAJgbQAHgQALgFQAKgDALABQANACAHAGQARASgQAyQgOArgdAnQgLAQgVAWQgvAtg4AQQgkALgkAAQgsAAgvgRg");
	this.shape_1.setTransform(26.6448,26.5412);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#99FF99").p("ADHipIA7g3IAAClIibgMIAxgyQgZgbglgVQhJgqhFARQg3AOgjAoQgsAxgBBJQAABHAoA2QAcAnAuAVQAYALAYAFQA3AKAtgSQAkgPAfghQAkgkAMgrQAHgXACgEQAHgQALgFQAKgDALABQANACAHAGQARASgQAyQgOArgdAnQgLAQgVAWQgvAtg4AQQhQAYhTgeQhWgfgyhJQgog6gGhIQgHhJAghAQAfhAA/goQA7giBEgEQBRgFBAAlQAqAZAeAmg");
	this.shape_2.setTransform(26.6448,26.5412);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,55.3,55.1);


(lib.Pol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5,1,1).p("AB0gKQgzgJgxAEQhDAFhAAb");
	this.shape.setTransform(27.55,16.474);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").ss(0.5,1,1).p("AB+gJQhEgNhCAJQg7AHg6AY");
	this.shape_1.setTransform(27.375,12.6866);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").ss(0.5,1,1).p("ACMgHQhWgShSANQg7AJg0AV");
	this.shape_2.setTransform(27.075,8.773);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").ss(0.5,1,1).p("ACkgHQirgliKA6IgSAI");
	this.shape_3.setTransform(26.525,5.3332);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").ss(0.5,1,1).p("AC7gFIgEgBQhbgehhAKQhiAKhTAu");
	this.shape_4.setTransform(26.275,2.9843);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").ss(0.5,1,1).p("AAuBIIgHgZQgGgWgHgPQgDgKgHgLIgJgPQgMgSgQgMQgLgJgNgG");
	this.shape_5.setTransform(12.05,13.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").ss(0.5,1,1).p("AgbBTQAAgSACgTQACgNAFgUIABgDQAFgSAIgSQAGgPALgTQAEgHALgP");
	this.shape_6.setTransform(41.75,10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").ss(0.5,1,1).p("AABgBIgBAD");
	this.shape_7.setTransform(7.5,6.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").ss(0.5,1,1).p("AABAAIgBAB");
	this.shape_8.setTransform(10,7.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").ss(0.5,1,1).p("AACAAIgDAB");
	this.shape_9.setTransform(12.925,10.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").ss(0.5).p("AgWgUIAuAp");
	this.shape_10.setTransform(28.5,24.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").ss(0.5).p("AAXgUIguAp");
	this.shape_11.setTransform(39.2,24.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").ss(0.5).p("AgfhPQAXCLAAAXQAAAMAFAKQADAMAJABQAGABAGgFQAGgFACgIQAFgOgDgSQgKgtgriMIgBgF");
	this.shape_12.setTransform(58.9755,62.3793);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221F20").ss(0.5).p("AAHAAQABAEgEACQgEADgDgDQgDgCAAgEQgBgEADgCQADgBADACQAFACAAADg");
	this.shape_13.setTransform(43.0739,27.7304);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221F20").ss(0.5).p("AAfANQgEALgMAEQgLAFgMgFQgQgFgGgPQgGgPAKgOQAIgKAQABQANACAKAJQAIAGADAJQADAIgEAJg");
	this.shape_14.setTransform(42.9317,27.7531);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221F20").ss(0.5).p("AAHAAQABAEgEACQgDACgEgCQgDgCAAgEQgBgEADgCQADgCADACQAFACAAAEg");
	this.shape_15.setTransform(24.8239,27.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221F20").ss(0.5).p("AAfANQgDALgNAFQgMAEgLgEQgQgGgGgPQgGgPAKgOQAIgKAQACQANABAKAJQAIAGADAJQADAIgEAJg");
	this.shape_16.setTransform(24.6817,27.434);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221F20").ss(0.5).p("AAsgTQgZgIgYAGQgeAHgUAXQgFAFACAFQACAGAJAAQAGgBAFgFIAJgIQAOgMARgDQATgDAQAHQADACACABQAEABAEAAQAHgCABgFQABgEgEgFQgFgFgIgCg");
	this.shape_17.setTransform(38.0314,54.5417);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221F20").ss(0.5).p("AgOgBQAHAEAQgDQACAAACAAQACgCAAgC");
	this.shape_18.setTransform(1.505,94.0673);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221F20").ss(0.5).p("AAAktIAAJb");
	this.shape_19.setTransform(0,63.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").ss(0.5).p("AAAksIAAJZ");
	this.shape_20.setTransform(2.875,63.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221F20").ss(0.5).p("AgMgCQAFAEAHAAQAIAAAFgE");
	this.shape_21.setTransform(1.425,33.8982);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221F20").ss(0.5).p("AgHgTIAOAlIABAD");
	this.shape_22.setTransform(2.1376,31.6822);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221F20").ss(0.5).p("AAGgSQgCAIgEAKQgEAMgCAH");
	this.shape_23.setTransform(0.7,31.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221F20").ss(0.5).p("AAigfQgLAOgVASQgbAYgHAH");
	this.shape_24.setTransform(6.25,59.225);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221F20").ss(0.5).p("AAfgcIgGAFQgKAKgRAOQgPANgLAQ");
	this.shape_25.setTransform(5.8182,55.6359);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221F20").ss(0.5).p("AAOigQgYC8gLBNQAmACAkANQAXAKAAANQAAAHgFAGQgFAFgIABQgKADgRgFIhpgaQARg6AOhbQAMhPAGhI");
	this.shape_26.setTransform(27.0616,83.9959);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221F20").ss(0.5).p("AAKiUIgeDrQAlABAkAOQAXAIAAAOQAAAHgFAGQgFAFgHABQgKACgSgEIhpgaQAkh8AKiA");
	this.shape_27.setTransform(42.189,81.3007);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221F20").ss(0.5).p("ADygrQhEA1hQAVQg1AOg3gDQgigBgugJQhKgOhDgiIgHgD");
	this.shape_28.setTransform(32.3626,54.5737);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#221F20").ss(0.5).p("AAjhVQAvAYALAoQABAFACAUQAAAkgOAVQgMASgYAJQgWAJgYgBQghgBgWgPQgWgQgLgbQgLgdAIgfQAJgmAcgUQAVgLATgCQAYgDAZAMg");
	this.shape_29.setTransform(33.8859,40.6837);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#221F20").ss(0.5).p("AA8AiQgugMgegWQgWgOgSgV");
	this.shape_30.setTransform(18.4606,63.8601);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#221F20").ss(0.5).p("Ai8C5QgSgUgNgYIgEgGIgMgcQgfhNAVhVQAbhoBIgwIABgBQAugfA9gGQA5gFA2AWIAVAKQAnASAhAcQA+A1ATBFQAFASABAVQABAGAAAZQAAArgEAZQgDAVgGARQgJAXgNAUQglA2hDAX");
	this.shape_31.setTransform(31.676,41.8037);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#221F20").ss(0.5).p("AA4gCQgpAHglgCQgUgBgJgB");
	this.shape_32.setTransform(33.6723,67.8414);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#221F20").s().p("AgDAGQgDgCAAgEQgBgEADgCQADgBADACQAFACAAADQABAEgEACIgEABIgDgBg");
	this.shape_33.setTransform(43.0739,27.7304);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#221F20").s().p("AgDAGQgDgCAAgEQgBgEADgCQADgBADABQAFACAAAEQABAEgEACIgDACIgEgCg");
	this.shape_34.setTransform(24.8239,27.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E17DAC").s().p("AhsAcIgHgZQBAgbBEgFQAwgEAzAJQgCASAAARQg2gVg6AFQg7AFgvAeIgBACg");
	this.shape_35.setTransform(27.55,17.899);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D92D8A").s().p("Ah9AAIABAAQA5gZA7gHQBCgJBEANIgBADIgHAhQgygIgxADQhEAFhAAcQgGgVgGgPg");
	this.shape_36.setTransform(27.325,14.5616);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E17DAC").s().p("AiEAQIgKgPIAEgBQA0gWA7gJQBSgNBVARIADABQgJASgFARQhEgLhCAIQg6AHg6AYIgBABQgEgLgGgLg");
	this.shape_37.setTransform(27,10.723);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D92D8A").s().p("AilAIIACgCIASgIQCKg6CsAlIABAAQgMAUgGAOIgCgBQhWgRhSAMQg7AJg0AWIgDADQgNgTgQgMg");
	this.shape_38.setTransform(26.475,6.9832);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EEC87A").s().p("AgHDQQgigBgugJQhKgOhDgjIgHgDQgfhOAVhVQAbhnBIgwIABgCQAugfA9gFQA5gFA2AWIAVAJQAnATAhAcQA+A0ATBFQAFASABAVIABAfQAAArgEAaIgBgFQhEA2hQAVQgtALgvAAIgQAAgAA5CQQgeAHgUAXQgFAFACAGQADAFAIAAQAGAAAGgFIAJgJQANgMATgDQASgEARAIIAFADQAEACADgBQAHgCABgFQABgFgEgFQgFgFgIgCQgOgEgOAAQgLAAgLADgAAHhDQgSACgVALQgcAUgJAlQgIAgALAdQALAbAWAQQAWAPAgABQAZABAWgJQAYgJAMgSQAOgVAAgkQgCgVgBgFQgLgngvgYQgVgKgUAAIgJABgABWh7QgKAOAGAQQAGAPAQAFQANAFAKgFQANgEAEgLQADgJgDgJQgDgJgHgGQgKgJgPgCIgEAAQgNAAgGAJgAhgh+QgKAOAGAPQAGAQAQAFQAMAEAMgEQANgFADgLQAEgIgDgKQgDgJgIgGQgKgIgOgCIgFAAQgMAAgHAJg");
	this.shape_39.setTransform(31.676,37.9976);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AA7E76").s().p("Ag6ATQgCgFAFgFQAUgXAegHQAYgGAZAIQAIACAFAFQAEAFgBAEQgBAFgHACQgEAAgEgBIgFgDQgQgHgTADQgRADgOAMIgJAIQgFAFgGABQgJAAgCgGg");
	this.shape_40.setTransform(38.0314,54.5417);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgIAdQgQgGgGgPQgGgPAKgOQAIgKAQACQANABAKAJQAIAGADAJQADAIgEAJQgDALgNAFQgGACgGAAQgFAAgGgCgAgCgGQgEACABAEQABAEADACQAEACADgCQAEgCgBgEQgBgEgEgCIgEgBIgCABg");
	this.shape_41.setTransform(24.6817,27.434);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIAcQgQgFgGgPQgGgPAKgOQAIgKAQABQANACAKAJQAIAGADAJQADAIgEAJQgEALgMAEQgGADgFAAQgFAAgHgDgAgCgGQgEACABAEQABAEADACQADACAEgCQAEgDgBgDQgBgEgEgCIgEgBIgCABg");
	this.shape_42.setTransform(42.9317,27.7531);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3974B7").s().p("AghAIQAMgPAOgNIAcgZIAJAVIAEAGIgBABQgKAOgWASIgiAfg");
	this.shape_43.setTransform(6.275,57.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E17DAC").s().p("Ai5AYIABgEQBTguBjgKQBhgJBbAdIgBACIgPAVIgBgBQirgkiKA6IgSAIIgCADQgMgJgNgGg");
	this.shape_44.setTransform(26.025,3.9093);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3974B7").s().p("AgXD3IhqgaQARg6AOhbQANhPAGhIQgugLgfgXQgWgPgSgUQgTgUgNgYIgDgGIgKgVIAEgDQBDAiBKAOQAvAJAhACQA3ACA2gOQBQgUBDg2IACAEQgEAVgGARQgJAXgNAUQglA2hDAXIgfDrQAnABAkAOQAWAIABAOQAAAHgGAGQgFAFgHABQgJACgTgEIhpgaQAjh9ALh/QgqAIgkgCIgegCIgjEJQAnABAkAOQAVAJABAOQAAAHgGAFQgFAFgHACIgHAAQgIAAgMgDg");
	this.shape_45.setTransform(32.525,75.2417);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3974B7").s().p("AAJB2QgJgCgDgMQgFgKAAgLQAAgYgXiKQAGgRADgVQArCMAKAuQADASgFANQgCAIgGAGQgFAEgFAAIgCAAg");
	this.shape_46.setTransform(58.9721,62.4333);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BCBEC0").s().p("AgOEsIAApYIABgCIAAAAQAGAFAHAAQAIAAAFgFIABgBIAAADIAAJZQAAAAgBABQgBAAAAAAQgBAAAAAAQgBAAAAAAIgKACQgJAAgFgEg");
	this.shape_47.setTransform(1.45,63.8529);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#949598").s().p("AgNARIAAAAQACgIAEgLIAHgTIAOAlIgBABQgFAFgIAAQgHAAgGgFg");
	this.shape_48.setTransform(1.45,31.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pol2, new cjs.Rectangle(-1,-1,64.2,102.3), null);


(lib.Pol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5,1,1).p("AB0gKQgxgJgzAEQhFAFg+Ab");
	this.shape.setTransform(27.575,16.4657);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").ss(0.5,1,1).p("AB+gKQhGgLhAAIQg7AHg6AX");
	this.shape_1.setTransform(27.375,12.7109);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").ss(0.5,1,1).p("ACMgHQhVgShUANQg5AJg1AV");
	this.shape_2.setTransform(27.1,8.8024);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").ss(0.5,1,1).p("ACkgHQisgliJA6IgSAI");
	this.shape_3.setTransform(26.525,5.3332);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").ss(0.5,1,1).p("AC8gFIgFgBQhbgehhAKQhiAKhUAu");
	this.shape_4.setTransform(26.3,2.9843);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").ss(0.5,1,1).p("AAuBHIgHgYQgGgWgGgPIgKgVIgKgPQgLgSgQgMQgMgJgNgF");
	this.shape_5.setTransform(12.05,13.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").ss(0.5,1,1).p("AgbBTQAAgUADgQQAAgMAGgWIABgDQAFgRAIgTQAGgQALgRIAPgX");
	this.shape_6.setTransform(41.75,10.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").ss(0.5,1,1).p("AAAgBIAAAD");
	this.shape_7.setTransform(7.5,6.15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").ss(0.5,1,1).p("AABAAIgBAB");
	this.shape_8.setTransform(10,7.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").ss(0.5,1,1).p("AACAAIgDAB");
	this.shape_9.setTransform(12.925,10.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").ss(0.5).p("AgXgUIAuAp");
	this.shape_10.setTransform(28.5,24.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").ss(0.5).p("AAYgUIgvAp");
	this.shape_11.setTransform(39.225,24.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").ss(0.5).p("AgpgDQAEgGAKgFQAXgLAYAGQAQAFAGAIQAEAGgBAGQAAAHgFAFQgHAGgPgEQgQgFgGAAQgHAAgNAFQgLACgGgIQgGgIAGgJg");
	this.shape_12.setTransform(36.0841,54.4595);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221F20").ss(0.5).p("Ah2gkQCtAUAXgBQACAAAHABQAIABAHADQANAHACAKQACAIgGAIQgFAIgIADQgRAHgSgEQhCgRh3gh");
	this.shape_13.setTransform(68.6583,53.9527);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221F20").ss(0.5).p("AAIAAQABAEgFACQgDADgEgDQgDgBAAgFQgBgEADgCQAEgBADACQAEACABADg");
	this.shape_14.setTransform(43.098,27.7304);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221F20").ss(0.5).p("AAfANQgEAMgNAEQgKAEgMgEQgQgGgGgPQgGgOAKgOQAIgLAQACQANABAKAJQAHAGADAJQAEAJgEAIg");
	this.shape_15.setTransform(42.9534,27.7406);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221F20").ss(0.5).p("AAIAAQABAEgFACQgDADgEgDQgDgCAAgEQgBgEADgCQADgCAEADQAEACABADg");
	this.shape_16.setTransform(24.848,27.4181);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221F20").ss(0.5).p("AAfANQgFAMgMAEQgLAEgLgEQgQgGgGgPQgGgOAKgOQAIgLAQACQANABAKAJQAHAGADAJQAEAIgEAJg");
	this.shape_17.setTransform(24.7034,27.4406);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221F20").ss(0.5).p("AgOgBQAIAFAPgEQADAAABAAQADgCgBgC");
	this.shape_18.setTransform(1.5143,94.0583);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221F20").ss(0.5).p("AAAktIAAJb");
	this.shape_19.setTransform(0,63.925);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").ss(0.5).p("AAAksIAAJZ");
	this.shape_20.setTransform(2.9,63.85);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221F20").ss(0.5).p("AgMgCQAFAEAHAAQAIAAAFgE");
	this.shape_21.setTransform(1.425,33.8982);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221F20").ss(0.5).p("AgGgSIANAl");
	this.shape_22.setTransform(2.125,31.625);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221F20").ss(0.5).p("AAHgSQgCAHgFALQgEAMgCAH");
	this.shape_23.setTransform(0.725,31.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221F20").ss(0.5).p("AAhggQgKAPgWASQgbAZgHAH");
	this.shape_24.setTransform(6.25,59.25);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221F20").ss(0.5).p("AAegbIgEADQgLAKgRAOQgOANgMAQ");
	this.shape_25.setTransform(5.7518,55.7191);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221F20").ss(0.5).p("AAOifIgiEIQAkACAlAOQAXAIAAAOQAAAHgFAGQgFAFgHABQgLADgRgFIhpgaQARg6AOhaQANhQAGhI");
	this.shape_26.setTransform(27.0869,83.9959);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221F20").ss(0.5).p("AAKiUIgeDrQAmABAjAOQAXAIAAAOQABAHgGAGQgFAFgHACQgIACgUgFIhpgaQAkh+ALh+");
	this.shape_27.setTransform(42.191,81.3226);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221F20").ss(0.5).p("ADygrQhFA2hQAUQg1AOg3gCQgggCgwgIQhKgOhDgiIgHgD");
	this.shape_28.setTransform(32.4511,54.5234);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#221F20").ss(0.5).p("AAkhVQAOAHANALQAXATAHAaQADALAAAPQAAAkgOAUQgMATgYAJQgVAJgZgBQgigCgVgPQgYgQgIgaQgMgeAIgeQAIgnAdgTQAVgMATgCQAXgCAbAMg");
	this.shape_29.setTransform(33.89,40.716);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#221F20").ss(0.5).p("AA9AiQgsgLghgXQgWgOgSgV");
	this.shape_30.setTransform(18.483,63.8601);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#221F20").ss(0.5).p("Ai8C5QgRgSgPgZIgDgHIgMgbQgehMAUhXQAahnBIgxIACgBQAvgfA7gFQA3gFA4AVIAWAKQAmARAiAdQA+A1ASBFQAIAcAAAqQABAkgEAbIgBACQgCAOgCAGQgIAkgUAcQgkA1hDAY");
	this.shape_31.setTransform(31.722,41.8278);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#221F20").ss(0.5).p("AA0gCQgmAHgogCIgegC");
	this.shape_32.setTransform(34.1334,67.8422);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#221F20").s().p("AgDAGQgDgCAAgEQgBgEADgCQADgCAEADQAEACABADQABAEgFACIgEACIgDgCg");
	this.shape_33.setTransform(24.848,27.4181);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#221F20").s().p("AgDAGQgDgBAAgFQgBgEADgCQAEgBADACQAEACABADQABAEgFACIgEABIgDgBg");
	this.shape_34.setTransform(43.098,27.7304);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E17DAC").s().p("Ai5AZIAAgBIABgEQBUguBigKQBhgJBbAdIgBACIgPAVIgBgBQisgkiJA6IgSAIIgCADQgLgJgOgFg");
	this.shape_35.setTransform(26.025,3.9093);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#E17DAC").s().p("AiEAQIgJgPIADgBQA1gWA5gJQBUgNBVASIABAAQgHASgFARQhGgKhAAHQg8AHg5AYIgBABg");
	this.shape_36.setTransform(27,10.7274);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E17DAC").s().p("AhsAcIgHgZQA+gbBFgFQAzgEAxAJQgCARAAASQg5gVg3AFQg6AFgvAfIgCABg");
	this.shape_37.setTransform(27.575,17.8907);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#D92D8A").s().p("AilAIIACgCIATgIQCJg6CsAlIABABQgLARgHAQIgCgBQhUgRhUAMQg5AJg2AXIgDACQgNgTgQgMg");
	this.shape_38.setTransform(26.475,6.9832);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#D92D8A").s().p("Ah9AAIABAAQA5gYA7gIQBBgIBFAMIgBADQgFAWgBALQgygIgyADQhGAFg+AcQgGgVgGgPg");
	this.shape_39.setTransform(27.325,14.5859);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EEC87A").s().p("AgIDQQgfgCgxgIQhKgOhDgjIgGgDQgehMAUhXQAahnBIgxIACgBQAvgfA7gFQA3gFA4AVIAWAKQAmARAiAdQA+A1ASBFQAIAbAAArQABAkgEAbIgBAAQhFA3hQAUQgtAMgwAAIgQAAgAA9C5QAPAEAIgHQAEgEABgHQAAgHgDgGQgGgJgRgFQgYgFgYALQgKAFgDAGQgGAJAFAIQAGAIALgCQANgEAHAAIACAAQAHAAAOAFgAAHhEQgTACgUAMQgdATgJAmQgIAfAMAeQAJAaAYAQQAUAPAiACQAZABAWgJQAYgJAMgTQANgUAAgkQAAgQgDgLQgGgZgYgTQgMgLgPgHQgXgKgUAAIgHAAgABWh7QgLAOAGAPQAGAPARAGQAMAEALgEQAMgEAFgMQADgIgDgKQgDgJgIgGQgKgJgOgBIgEAAQgNAAgGAJgAhgh+QgKAOAGAPQAGAPAQAGQAMAEALgEQAMgEAFgMQAEgJgEgJQgDgJgHgGQgKgJgOgBIgEAAQgNAAgHAJg");
	this.shape_40.setTransform(31.722,38.0218);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AA7E76").s().p("AASAUQgQgFgGAAQgHAAgNAFQgLACgGgIQgGgIAGgJQAEgGAKgFQAXgLAYAGQAQAFAGAIQAEAGgBAGQAAAHgFAFQgEAEgIAAIgKgCg");
	this.shape_41.setTransform(36.0841,54.4595);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgIAdQgQgGgGgPQgGgOAKgOQAIgLAQACQANABAKAJQAHAGADAJQAEAIgEAJQgFAMgMAEQgFACgGAAQgFAAgGgCgAgDgGQgDACABAEQAAAEADACQAEADADgDQAFgCgBgEQgBgDgEgCIgEgCIgDABg");
	this.shape_42.setTransform(24.7034,27.4406);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgIAdQgQgGgGgPQgGgOAKgOQAIgLAQACQANABAKAJQAHAGADAJQAEAJgEAIQgEAMgNAEQgFACgGAAQgEAAgHgCgAgDgGQgDACABAEQAAAFADABQAEADADgDQAFgCgBgEQgBgDgEgCIgEgCIgDABg");
	this.shape_43.setTransform(42.9534,27.7406);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#3974B7").s().p("AghAHQAMgPAOgNIAcgYIAJAVIAEAGIgBAAQgKAPgWASIgiAfg");
	this.shape_44.setTransform(6.275,57.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3974B7").s().p("AgYD4IhpgaQARg6AOhbQAMhPAHhIQgtgLghgXQgWgPgSgVQgRgSgPgZIgDgGIgJgVIADgEQBDAjBLAOQAwAJAgABQA3ADA1gOQBQgVBFg3IABAAIAAACIgFAVQgIAkgUAcQgkA0hDAZIggDqQAoACAjANQAXAJAAAOQAAAHgFAFQgGAGgGABQgJACgTgEIhqgaQAkh/AKh+QgmAIgogBIgegCIgjEIQAlACAmAOQAWAIAAAOQAAAHgGAGQgEAFgIABIgHABQgIAAgMgDg");
	this.shape_45.setTransform(32.6,75.1917);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#3974B7").s().p("ABEAjQhDgRh2ghIgCAAIAEgVQCtAUAXgBIAJABQAIABAHADQANAHACAKQACAIgGAIQgFAIgIADQgLAFgKAAQgHAAgHgCg");
	this.shape_46.setTransform(68.3767,53.9512);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#BCBEC0").s().p("AgOErIAApYIABgCIAAAAQAGAGAHAAQAIAAAFgGIABAAIABACIgBJZQgBABAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAIgKACQgHAAgGgFg");
	this.shape_47.setTransform(1.475,63.9012);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#949598").s().p("AgNARIAAAAIAHgSIAGgUIAOAmIgBAAQgFAFgIAAQgHAAgGgFg");
	this.shape_48.setTransform(1.45,31.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#221F20").ss(0.5,1,1).p("AB0gKQgwgJgzAEQhGAFg+Ab");
	this.shape_49.setTransform(27.45,16.4657);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#221F20").ss(0.5,1,1).p("AB+gJQhCgMhEAIQg7AHg6AY");
	this.shape_50.setTransform(27.275,12.6988);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#221F20").ss(0.5,1,1).p("ACMgHQhVgShUANQg4AJg2AV");
	this.shape_51.setTransform(27,8.8024);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#221F20").ss(0.5,1,1).p("AC7gFIgEgBQhbgehhAKQhiAKhTAu");
	this.shape_52.setTransform(26.175,2.9843);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#221F20").ss(0.5,1,1).p("AAuBIIgHgZQgGgVgGgQQgGgLgFgJIgJgPQgLgTgRgMQgKgIgOgG");
	this.shape_53.setTransform(11.95,13.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#221F20").ss(0.5,1,1).p("AgbBTQAAgUADgQQAAgNAGgVIABgEQAFgRAIgSQAFgPAMgTQAFgJAKgN");
	this.shape_54.setTransform(41.65,10.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#221F20").ss(0.5).p("AgWgUIAuAp");
	this.shape_55.setTransform(28.4,24.05);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#221F20").ss(0.5).p("AgfhPQAXCMAAAWQAAALAFALQADAMAJABQAGABAGgFQAGgFACgIQAFgOgDgSQgIgjgjh4IgLgj");
	this.shape_56.setTransform(58.8755,62.3824);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#221F20").ss(0.5).p("AAHAAQABAEgEACQgEADgDgDQgDgBAAgFQgBgEADgCQAEgBADACQAEACAAADg");
	this.shape_57.setTransform(42.9739,27.7304);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#221F20").ss(0.5).p("AAfANQgEALgNAEQgKAFgMgFQgQgFgGgPQgGgPAKgOQAIgKAQABQANACAKAJQAHAGADAJQADAIgDAJg");
	this.shape_58.setTransform(42.8524,27.7531);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#221F20").ss(0.5).p("AAHAAQACAEgFACQgEADgDgDQgDgCAAgEQgBgEADgCQADgCAEADQADACABADg");
	this.shape_59.setTransform(24.7326,27.4181);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#221F20").ss(0.5).p("AAgANQgFAMgMAEQgMAEgLgEQgQgGgGgPQgGgPALgNQAHgLAQACQANABAKAJQAIAGADAJQADAIgDAJg");
	this.shape_60.setTransform(24.5909,27.4406);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#221F20").ss(0.5).p("AAsgTQgZgIgYAGQgeAHgUAXQgFAFACAFQACAGAJAAQAFgBAGgEIAJgJQANgMASgDQATgDAQAHQAIAFAFgBQAHgCABgFQABgEgEgFQgFgFgIgCg");
	this.shape_61.setTransform(37.9412,54.5417);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#221F20").ss(0.5).p("AgOAAQAJAFAOgEQADAAABgBQADgBgBgC");
	this.shape_62.setTransform(-0.575,78.7431);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#221F20").ss(0.5).p("AABksIgBJZ");
	this.shape_63.setTransform(0.8,48.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#221F20").ss(0.5).p("AAHgSQgCAIgFAKQgEAMgCAH");
	this.shape_64.setTransform(-1.375,16.375);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#221F20").ss(0.5).p("AgsgTIBZAn");
	this.shape_65.setTransform(5.525,54.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#221F20").ss(0.5).p("AglgPQAaAKALAEQATAHAQAL");
	this.shape_66.setTransform(4.6367,51.2491);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#221F20").ss(0.5).p("AAOifIgiEIQAkACAlAOQAXAIAAAOQAAAHgFAGQgFAFgIABQgKADgRgFIhpgaQARg7AOhZQANhSAGhG");
	this.shape_67.setTransform(26.9895,83.9972);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#221F20").ss(0.5).p("AAKiUIgeDrQAlABAkAOQAXAIAAAOQAAAHgFAGQgFAFgHACQgJACgTgFIhpgaQAkh7AKiB");
	this.shape_68.setTransform(42.0885,81.3226);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#221F20").ss(0.5).p("ADygrQhCA1hSAVQg1AOg3gDQghgBgvgJQhPgPhFgk");
	this.shape_69.setTransform(32.2624,54.5747);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#221F20").ss(0.5).p("AAjhUQAOAGAOALQAXAUAHAaQADALAAAPQAAAkgOAUQgMASgYAKQgWAIgYgBQgigBgVgPQgWgQgLgbQgLgdAIgfQAJgmAcgUQAVgLATgCQAYgCAZAMg");
	this.shape_70.setTransform(33.7859,40.6913);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#221F20").ss(0.5).p("AA9AiQgsgKghgYQgWgOgSgV");
	this.shape_71.setTransform(18.381,63.8601);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#221F20").ss(0.5).p("Ai8DXQgPgQgLgTIgJgOIgMgcQgfhPAVhTQAbhoBIgwIACgBQAvggA7gFQA2gFA5AWIAVAJQAnATAhAcQA+A0ATBFQAHAcAAAqQAAAvgEAW");
	this.shape_72.setTransform(31.576,38.7528);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#221F20").ss(0.5).p("ABChQQgDASgGARIgBACQgIAXgOAUQgjA1hDAY");
	this.shape_73.setTransform(50.0157,58.7589);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#221F20").s().p("AgDAGQgDgCAAgEQgBgEADgCQADgCAEADQADACABADQACAEgFACIgEACIgDgCg");
	this.shape_74.setTransform(24.7326,27.4181);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#221F20").s().p("AgDAGQgDgBAAgFQgBgEADgCQAEgBADACQAEACAAADQABAEgEACIgEABIgDgBg");
	this.shape_75.setTransform(42.9739,27.7304);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E17DAC").s().p("Ai5AYIABgEQBUguBigKQBhgJBbAdIgBACIgPAVIgBgBQisgkiJA6IgSAIIgCADQgKgIgPgHg");
	this.shape_76.setTransform(25.925,3.9093);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E17DAC").s().p("AiEAQIgJgPIADgBQA2gWA4gJQBUgNBVASIABAAQgIASgEARQhDgLhDAIQg7AHg6AYIgBABIgKgWg");
	this.shape_77.setTransform(26.9,10.7274);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E17DAC").s().p("AhsAcIgHgZQA+gbBFgFQAzgEAxAJIAAAAQgCARAAASQg5gVg3AFQg6AFgvAfIgCABg");
	this.shape_78.setTransform(27.475,17.8907);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#D92D8A").s().p("AilAIIACgCIATgIQCJg6CsAlIABAAQgMAUgGAOIgCgBQhUgRhUAMQg5AJg2AXIgDACQgNgTgQgMg");
	this.shape_79.setTransform(26.375,6.9832);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#D92D8A").s().p("Ah9AAIABAAQA5gZA7gHQBEgIBCAMIgBADQgFAWgBALIgBAAQgwgIgzADQhGAFg+AcQgGgVgGgPg");
	this.shape_80.setTransform(27.225,14.5738);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EEC87A").s().p("AgHDQQghgCgvgJQhPgOhFgmQgfhOAVhUQAbhnBIgxIACgBQAvgfA7gFQA2gFA5AVIAVAKQAnASAhAcQA+A1ATBFQAHAbAAArQAAAugEAWIgBgEQhCA1hSAVQgtAMgvAAIgQAAgAA5CPQgdAHgVAYQgEAFABAFQADAGAIAAQAGgBAGgEIAJgJQANgNATgDQASgDARAIQAIAFAEgBQAHgCABgGQABgEgEgFQgEgFgJgCQgOgEgOAAQgLAAgLACgAAHhEQgSACgVAMQgcATgJAlQgIAgALAeQALAbAWAPQAVAPAhABQAZABAWgIQAYgJAMgTQAOgUAAgkQAAgQgDgLQgHgZgXgTQgOgMgOgGQgWgKgVAAIgHAAgABWh7QgKAOAGAPQAGAPAQAGQANAEAKgEQANgEAEgMQADgJgDgJQgDgJgHgGQgKgJgOgBIgEAAQgNAAgHAJgAhfh+QgLANAGAQQAGAPAQAGQAMAEAMgEQAMgEAFgMQADgJgDgJQgDgJgIgGQgKgJgOgBIgEAAQgNAAgGAJg");
	this.shape_81.setTransform(31.576,38.0218);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#AA7E76").s().p("Ag6ATQgCgFAFgFQAUgXAegHQAYgGAZAIQAIACAFAFQAEAFgBAEQgBAFgHACQgFABgIgFQgQgHgTADQgSADgNAMIgJAJQgGAEgFABQgJAAgCgGg");
	this.shape_82.setTransform(37.9412,54.5417);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgIAdQgQgGgGgPQgGgPALgNQAHgLAQACQANABAKAJQAIAGADAJQADAIgDAJQgFAMgMAEQgGACgGAAQgFAAgGgCgAgCgGQgEACABAEQABAEADACQADADAEgDQAEgCgBgEQgBgDgEgCIgEgCIgCABg");
	this.shape_83.setTransform(24.5909,27.4406);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgIAcQgQgFgGgPQgGgPAKgOQAIgKAQABQANACAKAJQAHAGADAJQADAIgDAJQgEALgNAEQgFADgGAAQgFAAgGgDgAgDgGQgDACABAEQAAAEADACQADACAEgCQAEgDgBgDQAAgEgEgCIgEgBIgDABg");
	this.shape_84.setTransform(42.8524,27.7531);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#3974B7").s().p("AgWD3IhpgZQAQg7APhbQANhQAGhHQgsgKgigYQgWgPgSgUQgPgRgLgSIgJgPIgMgcQBEAmBQAOQAuAJAiACQA3ACA1gOQBSgVBBg1IACAEQgDASgGASIgBAAIAAACQgHAWgPAVQgkA1hDAYIggDrQAnABAkAOQAWAIABAOQAAAHgGAGQgFAFgGACQgJACgTgFIhqgaQAjh8ALiAQgmAIgogCIgegCIgjEJQAlABAlAOQAXAJAAAOQAAAHgGAFQgFAFgHACIgHAAQgIAAgMgDg");
	this.shape_85.setTransform(32.3,75.2417);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#3974B7").s().p("AgrgDIgCAAIAAggIAmAOQASAIAQALIALAYIAIAOg");
	this.shape_86.setTransform(5.425,53.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#3974B7").s().p("AAJBnQgJgCgDgMQgFgLAAgKQAAgXgXiLIAAgCIASgGIABAAQAjB4AIAkQADASgFAOQgCAIgGAFQgFAEgFAAIgCAAg");
	this.shape_87.setTransform(58.8721,63.9333);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#3974B7").s().p("AAAgRIAJAdIAAAAIgRAGQAGgSACgRg");
	this.shape_88.setTransform(56.625,52.425);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#BCBEC0").s().p("AgOEsIAApYIABgCIABAAQAFAFAHAAQAIAAAFgFIABAAIABACIgBJZQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgKABQgIAAgGgDg");
	this.shape_89.setTransform(-0.625,48.6431);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#949598").s().p("AgMAQIgBAAIAHgSIAGgTIAOAlIgBAAQgEAGgJAAQgGAAgGgGg");
	this.shape_90.setTransform(-0.65,16.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:34.1334}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22,p:{x:2.125,y:31.625}},{t:this.shape_21,p:{x:1.425,y:33.8982}},{t:this.shape_20,p:{x:2.9,y:63.85}},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:39.225}},{t:this.shape_10},{t:this.shape_9,p:{x:12.925}},{t:this.shape_8,p:{x:10}},{t:this.shape_7,p:{x:7.5}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3,p:{x:26.525}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_32,p:{x:34.0081}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_22,p:{x:0.025,y:16.375}},{t:this.shape_21,p:{x:-0.625,y:18.6482}},{t:this.shape_63},{t:this.shape_20,p:{x:-2.1,y:48.575}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_11,p:{x:39.125}},{t:this.shape_55},{t:this.shape_9,p:{x:12.825}},{t:this.shape_8,p:{x:9.9}},{t:this.shape_7,p:{x:7.4}},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_3,p:{x:26.425}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-1,84.69999999999999,102.3);


(lib.Planets = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("AB1hNQgXglgrgQQg1gWg1AYQg2AXgVA2QgOAkAGAkQAHAvAiAgQARATAdAMQA1AWA2gYQA1gXAWg3QAIgTABgWQADgvgagog");
	this.shape.setTransform(26.8505,41.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").p("AgMgBIAZAD");
	this.shape_1.setTransform(11.7,44.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").p("AgdAHIA8gN");
	this.shape_2.setTransform(10.3,46.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").p("AgRAIIAjgP");
	this.shape_3.setTransform(12.075,48.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").p("AgYAUQASgNAhgb");
	this.shape_4.setTransform(12.4839,51.832);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").p("AgTAVIAngp");
	this.shape_5.setTransform(14.025,52.95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").p("AAQgEIgfAJ");
	this.shape_6.setTransform(42.2,36.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").p("AARAAIghAA");
	this.shape_7.setTransform(42.975,40.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").p("AAhgCIhBAF");
	this.shape_8.setTransform(44.25,38.55);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").p("AAWgKIgrAV");
	this.shape_9.setTransform(42.325,35.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").p("AAUgQIgnAh");
	this.shape_10.setTransform(41.55,33.725);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").p("AgwBSQAaAIAWADQAdAGATgDQAYgGACgLQABgEgGgLQgFgGgGgGQgGgFgBgDQgCgFAEgIQAFgLABgHQACgZgJgJQgGgHgPAAQgPgBgEgGQgCgDABgIQACgLgBgIQgBgKgEgJQgGgLgFgBQgGgBgHAJQgEAEgNAVQgcAqgLAQ");
	this.shape_11.setTransform(46.0317,34.5342);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").p("ABUAEQgWAjgdAjQgQAUgNgBQgGAAgFgFQgCgCgBgEQAAgCgBgGQgCgWgFgEQgBgCgEAAQgKgCgEgBQgPgFgEgDQgJgIAAgQQABgHAGgIQAFgHgBgGQgBgIgPgNQgDgDgFgEQgDgDgBgDQgEgLAFgIQABgDAEgEQAFgGAKgEQANgGARABQALABAYAFQATAEAUAH");
	this.shape_12.setTransform(8.4529,51.4429);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221F20").p("AhehFQgWAegBAmQgBAwAiAjQAjAkAwAAQAgAAAbgPQAigTAQglQAKgVAAgYQABgwgigjQgigjgxgBQgSAAgRAFQgmALgXAgg");
	this.shape_13.setTransform(157.025,61.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221F20").p("AADALIgFgV");
	this.shape_14.setTransform(163.95,72.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221F20").p("AAOAWIgbgr");
	this.shape_15.setTransform(165.875,72.55);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221F20").p("AAMAMIgWgX");
	this.shape_16.setTransform(166.55,70.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221F20").p("AAYAOIgvgb");
	this.shape_17.setTransform(169.2,69.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221F20").p("AAXAKIgtgT");
	this.shape_18.setTransform(169.7,67.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221F20").p("AgHgKIAPAV");
	this.shape_19.setTransform(148.6,50.475);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").p("AgEgNIAJAb");
	this.shape_20.setTransform(151.675,48.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221F20").p("AgLgYIAXAx");
	this.shape_21.setTransform(149.425,48.325);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221F20").p("AgOgNIAdAb");
	this.shape_22.setTransform(147.45,50.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221F20").p("AgSgKIAlAV");
	this.shape_23.setTransform(146.45,51.875);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221F20").p("ABNAZQgCgWgDgSQgFgcgIgLQgNgRgIABQgEABgGAIQgEAGgCAGQgCAGgCACQgEADgHAAQgJgBgGABQgVAFgFALQgDAGAEANQAEALgDAEQgCADgHABQgJACgGADQgIAEgGAGQgGAHABAGQABAEAIADQAEACAWAFQAQADAoAK");
	this.shape_24.setTransform(145.9433,47.012);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221F20").p("AgVhLQAhAHAkAMQAUAGAEALQACAGgDAFQgBACgJAFQgQAIgCAGQgBABABADQABAGAAAFQACAOgCADQgCAGgHAFQgDACgEABQgGACgIgCQgIgCgEADQgFADgGAPQgFAMgCACQgFAEgKAAQgJAAgKgKQgJgJgEgOQgCgIgEgVQgCgTgBgP");
	this.shape_25.setTransform(170.1818,73.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221F20").p("AjZieIgPgHQgRgFgRABQgTACgGALQgEAIAEAMQAGATAVAXQAnAtBYA5IBQAwQApAWA2AZQBtAyBFANQAmAHAXgFQALgCAEgHQANgVg4g3");
	this.shape_26.setTransform(96.4399,45.3339);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221F20").p("AjAi3IgDgBQgmgNghgEQhWgMgMAYQgCADAAAGQAAA2BWBMIARANQA/AvBKAqQBLAsBsAzQA9AdBQARQBFAPA4gCQAiAAAIgPQAGgMgNgXQgIgOgWgbQgeglgpgf");
	this.shape_27.setTransform(96.2805,45.3978);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221F20").p("AjpitQgKAkAAAmQAAApAMApQAcBXBMA2QBHAyBWAAQBAAAA5gcQA3gbAmgx");
	this.shape_28.setTransform(91.625,57.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#221F20").p("ADcDQQAZgnAJgsQAEgTACgRIAAgXQAAhKglhAQgvhPhUgjQgygVg2AAQgzAAguARQgtARgmAgQgPAPgIAIQgbAegRAk");
	this.shape_29.setTransform(95.95,41.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#221F20").p("AABAAIgBAB");
	this.shape_30.setTransform(69.825,35.975);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#221F20").p("AAagFIgzAL");
	this.shape_31.setTransform(119.775,31.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#221F20").p("AAyghIhjBD");
	this.shape_32.setTransform(120.95,26.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#221F20").p("AAbgbIg1A3");
	this.shape_33.setTransform(116.625,25.25);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#221F20").p("AAgg3Ig+Bv");
	this.shape_34.setTransform(113.15,19.125);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#221F20").p("AAWg0IgrBp");
	this.shape_35.setTransform(109.675,18.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#221F20").p("AgYATIAygl");
	this.shape_36.setTransform(70.3,67.575);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#221F20").p("AgeANIA9gZ");
	this.shape_37.setTransform(65.875,60.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#221F20").p("Ag4AcIBxg3");
	this.shape_38.setTransform(65.3,65.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#221F20").p("AgeAlIA9hI");
	this.shape_39.setTransform(71.1,70.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#221F20").p("AgXAtIAvhY");
	this.shape_40.setTransform(73.6,72.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#221F20").p("AA4iwQgxAEgtAIQglAIgVAHQgSAHgOAJQgnAdADAUQACAGAFAGQAEADAKAIQANAJAQAFQANAFAFAFQAHAIgBARQgBAVADAPQAKAuAbANQAPAHAdgKQAagJALAHQAHAFADAPQADAVAIAOQAKASAOANQARAQAMgDQALgCAHgVQAEgNAJguIAeiG");
	this.shape_41.setTransform(62.3298,73.7487);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#221F20").p("AiwA0QAShXAYhKQAQgwAYgIQANgFAMAGQAFADAEAGQAEAIAEAHQALAVAFAHQAHAKAIADQAEABAHgBQAPgDALgBQAhgDAHADQAOAEAKAQQAFAHAEAKQAFAOgFATQgEASAGAJQAFAIAMAHQAIAEASAIQAPAFAFACQAHADAFAFQALAMAAAWQgDAYgVAVQgTAUggALQgUAGgxAJQgnAGgnAB");
	this.shape_42.setTransform(123.025,16.8364);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3F7EBE").s().p("AADBdQgGAAgEgFQgCgCgBgEIgBgIQgDgWgEgEQgCgCgDAAIgOgDQgQgFgDgDQgKgIABgQQAAgHAGgIQAFgHgBgGQgBgIgOgNIgIgHQgEgDgBgDQgDgLAFgIQAAgDAEgEQAGgGAJgEQAOgGARABQALABAXAFQATAEAVAHIABAAQAHAuAiAgIgBABQgXAjgcAjQgQATgNAAIgBAAg");
	this.shape_43.setTransform(8.5279,51.4429);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#80BC56").s().p("AgzCDQgdgMgRgSQgighgHguQgGgkAOglQAVg2A2gXQA1gXA1AVQArARAXAlQAaAngDAvQgBAWgIATQgWA3g1AXQgcAMgcAAQgZAAgagKg");
	this.shape_44.setTransform(26.8505,41.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#3F7EBE").s().p("AAABdQgWgDgagIIgCgBQADgvgagnIAng6QANgVAEgEQAHgJAGABQAFABAGALQAEAJABAKQABAIgCALQgBAIACADQAEAGAPABQAPAAAGAHQAJAJgCAZQgBAHgFALQgEAIACAFQABADAGAFQAGAGAFAGQAGALgBAEQgCALgYAGIgQABQgOAAgSgEg");
	this.shape_45.setTransform(46.0317,34.5342);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BD75AA").s().p("ABLClQgOgOgKgSQgIgOgDgUQgDgPgHgFQgLgIgaAKQgdAJgPgHQgbgMgKguQgDgPABgWQABgQgHgIQgFgGgNgEQgQgFgNgJIgOgMQgFgFgCgGQgDgUAngdQAOgKASgGQAVgIAlgHQAtgJAxgEIAFgBQAcBYBMA2IgeCDQgJAugEANQgHAUgLADIgEAAQgKAAgPgNg");
	this.shape_46.setTransform(62.3108,73.6737);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#76BFA7").s().p("Ah/B8QhMg2gchXQgMgpAAgpQAAgmAKgkIARANQA+AwBKAqQBMAsBsAyQA9AdBPARQgmAxg3AbQg5AchAAAQhWAAhHgyg");
	this.shape_47.setTransform(91.625,57.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#76BFA7").s().p("AAqCRQg2gYgogXIhQgwQhYg4gnguQAQgkAcgeIAXgXQAmggAsgRQAvgRAyAAQA3AAAyAVQBUAjAuBPQAnBAAABKIgCAXQgBARgEATQgJAsgZAnQhEgNhugyg");
	this.shape_48.setTransform(95.95,41.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BD75AA").s().p("ADGDBQhQgRg9gdQhsgzhLgsQhKgqg/gvIgRgNQhWhMAAg2QAAgGACgDQAMgYBWAMQAhAEAmANIgXAYIgMgFQgRgGgSACQgTACgGAKQgEAIAEANQAHATAUAXQAoAtBYA4IBPAwQApAXA2AZQBuAxBEANQAnAIAWgFQAMgCAEgHQAMgVg3g4QAEgTABgQIABAAQApAfAeAlQAWAbAIAOQANAXgGAMQgIAPgiAAIgNAAQgzAAg9gNg");
	this.shape_49.setTransform(96.2805,45.3978);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#BD75AA").s().p("AixA3IABgEQAThXAYhKQAPgwAYgIQANgFANAGQAEADAEAGIAJAPIAQAcQAHAKAIADQAEABAGgBIAbgEQAggDAIADQANAEALAQQAEAHAFAKQAFAOgFATQgEASAGAJQAFAIAMAHQAIAEASAIIAUAHQAHADAFAFQALAMAAAWQgDAYgVAVQgTAUggALQgVAGgwAJQgnAGgnABIgDACQguhPhUgjg");
	this.shape_50.setTransform(122.95,16.9114);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F0EA5A").s().p("AgpA6IgZgHQgJgDgBgEQgBgGAHgHQAGgGAIgEQAGgDAJgCQAGgBACgDQAEgEgEgLQgEgNADgGQAFgLAUgFQAHgBAJABQAHAAADgDQADgCABgGQADgGAEgGQAFgIAFgBQAIgBANARQAHALAFAcQAEASABAWIABACQgmAMgYAgIg4gNg");
	this.shape_51.setTransform(145.9683,47.0191);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E8933F").s().p("AhUBSQgigjABgwQABgmAWgeQAXggAmgLQARgFASAAQAxABAiAjQAiAjgBAwQAAAYgKAVQgQAlgiATQgbAPggAAQgwAAgjgkg");
	this.shape_52.setTransform(157.025,61.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F0EA5A").s().p("AgyBCQgJgJgEgNQgCgJgEgVQgCgTgBgPIAAAAQAigTAQglIABABQAhAHAkAMQAUAHAEAKQACAGgDAGQgBACgJAEQgQAJgCAFQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAIABALQACAOgCADQgCAHgHAEIgHADQgGACgIgCQgIgCgEADQgFADgGAPIgHAOQgFAFgKgBQgJAAgKgKg");
	this.shape_53.setTransform(170.1568,73.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Planets, new cjs.Rectangle(-2.5,-1.9,183.4,96), null);


(lib.Phase2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("THEME 2", "bold 96px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 109;
	this.text.lineWidth = 484;
	this.text.parent = this;
	this.text.setTransform(528,278.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#99FF99").ss(1,1,1).p("EhTPg0kMCmfAAAMAAABpJMimfAAAg");
	this.shape.setTransform(532.775,336.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#99FFCC").s().p("EhTPA0lMAAAhpJMCmfAAAMAAABpJg");
	this.shape_1.setTransform(532.775,336.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Phase2, new cjs.Rectangle(-1,-1,1067.6,675), null);


(lib.Park_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("AAAgHIAAAP");
	this.shape.setTransform(742.3061,227.3082,2.253,2.253);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").p("AgEAIIAJgP");
	this.shape_1.setTransform(781.959,282.4505,2.253,2.253);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").p("AgMhMIAZCZ");
	this.shape_2.setTransform(780.1566,263.2436,2.253,2.253);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").p("AgPhUIAfCp");
	this.shape_3.setTransform(777.2277,265.1024,2.253,2.253);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").p("AgYAAIAxAB");
	this.shape_4.setTransform(775.1436,284.1403,2.253,2.253);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").p("AgEAJIAKgQ");
	this.shape_5.setTransform(755.4861,304.6426,2.253,2.253);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").p("AgnlSIBPKl");
	this.shape_6.setTransform(767.1051,265.0815,0.5627,0.5627);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").ss(2).p("AAOn4IgbPx");
	this.shape_7.setTransform(757.3983,274.4366,0.5627,0.5627);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").p("AgegCIA9AF");
	this.shape_8.setTransform(747.319,305.9944,2.253,2.253);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").p("AAEiGIgHEN");
	this.shape_9.setTransform(755.0355,276.1984,2.253,2.253);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").p("AAMiDIgWEH");
	this.shape_10.setTransform(742.982,275.6352,2.253,2.253);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").p("AiKAAIEVAA");
	this.shape_11.setTransform(761.2313,245.8955,2.253,2.253);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").p("Ak6gBIJ1AD");
	this.shape_12.setTransform(761,235.525);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221F20").p("Ah6AAID1AA");
	this.shape_13.setTransform(764.7798,229.6739,2.253,2.253);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221F20").p("AAAgWIABAt");
	this.shape_14.setTransform(729.6892,240.6009,2.253,2.253);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221F20").p("AARgMIghAZ");
	this.shape_15.setTransform(733.2377,232.5464,2.253,2.253);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221F20").p("Am9AAIN7AB");
	this.shape_16.setTransform(767.3161,225.6493,0.5627,0.5627);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221F20").ss(2).p("AmCAAIMFAA");
	this.shape_17.setTransform(770.6235,218.4103,0.5627,0.5627);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221F20").p("AAPgPIgdAf");
	this.shape_18.setTransform(745.6292,221.8447,2.253,2.253);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221F20").p("AgDAhIAAgDIAHg9");
	this.shape_19.setTransform(772.7171,211.4093,2.253,2.253);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").p("AgBAOIADgb");
	this.shape_20.setTransform(776.4954,182.1354,2.253,2.253);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221F20").p("AATAOIADgXIgxAA");
	this.shape_21.setTransform(775.4421,155.1678,2.253,2.253);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221F20").p("AABgLIgBAX");
	this.shape_22.setTransform(768.8352,155.6626,2.253,2.253);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221F20").p("AABgNIgBAc");
	this.shape_23.setTransform(766.4132,182.1918,2.253,2.253);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221F20").p("AABgeIgBA+");
	this.shape_24.setTransform(764.6108,211.1429,2.253,2.253);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221F20").p("ABdAAIi5AB");
	this.shape_25.setTransform(771.5388,185.4586,2.253,2.253);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221F20").ss(2).p("Ai8hgIgXC5IGygD");
	this.shape_26.setTransform(770.1889,195.4939);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221F20").p("AhWAAICtAA");
	this.shape_27.setTransform(772.9469,158.4225,2.253,2.253);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221F20").ss(2).p("AlKi7IgYFuILQgC");
	this.shape_28.setTransform(771.8558,169.0369,0.5627,0.5627);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#6F4E2E").s().p("AiNAXIgCguIEfACIAAAsg");
	this.shape_29.setTransform(768.0995,227.5498,1.826,0.8735,0,4.2107,0);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#6F4E2E").s().p("AgUhUIAAAAIAQAAIAZCZIgKAQg");
	this.shape_30.setTransform(777.9542,265.196,2.253,2.253);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A27D56").s().p("AghCCIAXkIIAsAAIgHENg");
	this.shape_31.setTransform(747.7076,276.1984,2.253,2.253);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#6F4E2E").s().p("AgBiGIAKAAIgHD8IgKARg");
	this.shape_32.setTransform(755.8747,276.1984,2.253,2.253);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6F4E2E").s().p("AgUAfIADg9IAmAAIgIA9g");
	this.shape_33.setTransform(768.5479,211.1992,2.253,2.253);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#6F4E2E").s().p("AgVgNIAtAAIgEAbIgrABg");
	this.shape_34.setTransform(771.1388,182.1918,2.253,2.253);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#6F4E2E").s().p("AgaAMIADgXIAxAAIgCAXg");
	this.shape_35.setTransform(774.124,155.6626,2.253,2.253);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#A27D56").s().p("AgOBUIgUioIAlAAIAAAAIAgCpg");
	this.shape_36.setTransform(772.4906,265.046,2.253,2.253);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#A27D56").s().p("AhXgtIC1ABIAABZIi7ABg");
	this.shape_37.setTransform(772.7722,168.6174,2.253,2.253);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A27D56").s().p("AhagnIAAgBIC/gBIAABSIjJABg");
	this.shape_38.setTransform(771.3078,194.8086,2.253,2.253);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A27D56").s().p("AhyAGIAdgeIDJAAIAAAxIjmAAg");
	this.shape_39.setTransform(767.9283,223.985,2.253,2.253);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#A27D56").s().p("AiPAMIAigYID9AAIAAAag");
	this.shape_40.setTransform(761.5072,232.6591,2.253,2.253);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6F4E2E").s().p("Ao4BcIgIi5ISBAGIAAC1g");
	this.shape_41.setTransform(761.4639,240.879,0.5627,0.5627);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#221F20").ss(1,1,1).p("An1B7QArgVAWgKQDohoEHg2QArgJAzgJIA6gJQBJgKA0gFICmgO");
	this.shape_42.setTransform(438.3926,111.0908,2.2529,2.2529);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#221F20").p("Ag+AHQBHgIA2gF");
	this.shape_43.setTransform(500.0438,88.1062,2.2529,2.2529);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#221F20").p("AhAAFIBZgGQALgBAXgBIAGgB");
	this.shape_44.setTransform(532.5111,84.9573,2.2529,2.2529);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#221F20").ss(0.5).p("AgVAFQAIgMAOACQAQABAFAN");
	this.shape_45.setTransform(532.9586,81.2023,2.2529,2.2529);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#221F20").ss(0.5).p("AgnACQABgFAFgEQAFgEAGAAQAHAAAFAEQAFAEABAFQADgGAGgEQAGgEAIAAQARACAEAO");
	this.shape_46.setTransform(546.983,82.7668,2.2529,2.2529);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#221F20").ss(0.5).p("AhDAFQACgFAGgEQAGgEAGABQAGACADAFQADADAAABQAJgLAPgBQANAAAKAKQALgNAQgCQARgBAMAL");
	this.shape_47.setTransform(501.8684,85.5571,2.2529,2.2529);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#221F20").p("AqfhOIAtgBQIpgJIPBzQBoAXBxAf");
	this.shape_48.setTransform(697.2177,101.8254,2.2529,2.2529);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#221F20").p("AmYidQFABSEnCGQBqAwBfAz");
	this.shape_49.setTransform(940.5248,155.6492,2.2529,2.2529);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#221F20").p("AhHA1QAJADAFgIQAEAHAIgDQADgBABgBQAEgDABgEQAEADAEAAQAFACADgCIABAAIAAgBQADgDADgCQADgCAJABIACABQADAAAEADIABADQADAEAFADQAFACAJgBQAFAAAEgCQAEgDAAgFQADAAACgCQACgDgBgCQAIgCAFgHQAGgHgBgIQAAgIgGgGQgFgGgIgCQACgDAAgFQgBgEgCgFQgIgOgQgDQgKgCgKAEIgDABQgHgHgHgDQgNgGgKAEQgFACgFAE");
	this.shape_50.setTransform(526.4399,56.807,2.2529,2.2529);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#221F20").p("AgEAHQAEgHAIgE");
	this.shape_51.setTransform(524.739,67.1109,2.2529,2.2529);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#221F20").p("AgEgBQAEABACAF");
	this.shape_52.setTransform(523.0539,67.6015,2.2529,2.2529);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#221F20").p("AAHglQgKAHgBATQgBALADAPIACAPIAGAL");
	this.shape_53.setTransform(526.9759,75.9156,2.2529,2.2529);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#221F20").p("AgHApIAHgKQADgHACgPIACgQQABgMgCgHQgCgIgEgCQgCgCgDAA");
	this.shape_54.setTransform(518.4616,76.8316,2.2529,2.2529);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#221F20").p("AgHBhQAGgEAGgIQAKgOABgIQAFAQAPAHQAIAEAHABIAEAIQAFAIAKAFQAOAFAQgBQAMgBAHgFQALgGgCgKQAFAAADgDQAHgFgBgIQAQgEALgPQAMgOgBgRQgBgWgSgPQgJgIgNgDQAFgGgBgLQgBgHgGgMQgSgggggFQgQgDgPAIQgQAHgGAOQgBgMgIgMQgHgLgMgGQgKgHgNAAQgOgBgMAEQgZAKgMAYQgMgCgMAHQgNAHgFAMQgJAVAMAbQghAAgMALQgHAHgDAJIgCAGQgEAPADANQADAPALAHQANAJANgHQgCAKAEAJQAFAKAJAEQAHADAIgBQAOgCAGgKQADAGAHADQAHACAHgCQAFgBAFgEQAHgEAEgKQAJAFAHACQALACAHgEg");
	this.shape_55.setTransform(479.4089,48.3066,2.2529,2.2529);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#221F20").ss(0.8).p("AgMAOQALgQARgI");
	this.shape_56.setTransform(483.9785,70.5692,2.2529,2.2529);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#221F20").ss(0.8).p("AgHgFQAHAFAGAJ");
	this.shape_57.setTransform(479.7296,71.673,2.2529,2.2529);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#221F20").p("AAOgnQgXAPgCApIAAAc");
	this.shape_58.setTransform(488.5413,79.6627,2.2529,2.2529);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#221F20").p("AAJAtIAAgBIACgTQACgcgDgMIgBgFQgFgOgGgDQgFgEgJAA");
	this.shape_59.setTransform(471.0188,81.8295,2.2529,2.2529);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#221F20").p("AgdhJQgOAHgHANQgHgCgJAFQgIAFgDAHQgGAPAIARQgWAAgIAHQgEAEgDALQgDAKACAHQABAJAIAGQAIAGAJgEQgCAGAEAGQADAGAGADQAGACAGgCQAHgBAEgGQACAEAEACQAFACAEgBIAHgEQAFgEACgFQAIAEADAAQAGACAFgCIABgBQABgBACgDQACgCACgCQAGgEALADIAFABQAFABAEADIACAFQAEAGAGADIACABQAIADAKgBQAIgBAEgDQAHgEgBgHQAEAAADgDQADgDgBgEIAVgQ");
	this.shape_60.setTransform(446.6468,69.7217,2.2529,2.2529);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#221F20").p("AgHAJQAHgJALgG");
	this.shape_61.setTransform(450.3196,83.6869,2.2529,2.2529);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#221F20").p("AgFgDQAFADAEAG");
	this.shape_62.setTransform(447.7214,84.4074,2.2529,2.2529);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#221F20").p("AAKgWQgOAJgCAbIAAAP");
	this.shape_63.setTransform(453.2252,89.1812,2.2529,2.2529);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#221F20").p("AAFAeIABgLQACgSgCgIQgDgLgFgEQgDgCgGAA");
	this.shape_64.setTransform(442.0696,90.584,2.2529,2.2529);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#221F20").p("AhUADQAqAMArgEQAsgDAngSIAEgC");
	this.shape_65.setTransform(289.4152,286.6913,2.2529,2.2529);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#221F20").p("AiIAAQAEAFAQAGQAMAEALACQA0AKAyAAQA+gBA3gMQAJgCACgEIAAgBQACgCgBgDQgCgFgHgGQgQgKglgDIgbgCQhMgFgxAGQgcAFgTAFQgNAEgBAFQgBACACACg");
	this.shape_66.setTransform(284.9203,220.1296,2.2529,2.2529);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#221F20").p("AARiMIghEZ");
	this.shape_67.setTransform(312.173,252.3486,2.2529,2.2529);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#221F20").p("AgkiZIBIEz");
	this.shape_68.setTransform(262.102,253.5314,2.2529,2.2529);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#221F20").p("AmsBEIAGgVQASgwAvgfQAvgfA0AFQARABATAHQAuAQAeAoQAfApACAwQABg8AjgvQAkgvA2gQQAwgOAxANQAwAOAkAmQANgZAUgVQAiglAugRQA9gYBBAP");
	this.shape_69.setTransform(-123.957,247.0748,2.2529,2.2529);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#221F20").ss(0.5).p("AgTgPQAZAQAMAR");
	this.shape_70.setTransform(-84.356,237.3443,2.2529,2.2529);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#221F20").p("AkUhBQAlARAaAfQAaAfAHAmQgCg3AqgtQAqgtA5gDQAdgBAbALQAfANAaAkIATAiQAFgcATgWQAUgWAagHQAggJAgAOQAgAOARAg");
	this.shape_71.setTransform(35.8406,231.8142,2.2529,2.2529);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#221F20").p("Al4AgQAlgtA0gVQA0gVAyAMQA2AOAkAsQgSgdATgkQATgjAjgJQAigIAiAQQAiAOAXAdQAUAZAQAkQAKAYAOAsQASg8ArgkQApgkAwABQAsABAmAi");
	this.shape_72.setTransform(182.5178,217.2893,2.2529,2.2529);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#221F20").p("AkbhnQAKgLANgIQAfgSAoABQAqABAbAZQAXAWAHAlQAEAWgCAiQgBAQgDANQAhg9A8gfQAggPAkgGQBGgLA2AhQA2AhAXAzQAYA3gRBB");
	this.shape_73.setTransform(359.9598,238.0627,2.2529,2.2529);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#221F20").p("AidBIQA9glBIgiQBXgpBggf");
	this.shape_74.setTransform(-138.5343,218.9784,2.2529,2.2529);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#221F20").p("AvOChQLBkOLggrQD9gOEBAM");
	this.shape_75.setTransform(117.0078,166.5952,2.2529,2.2529);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#221F20").p("ArXgBIWvAD");
	this.shape_76.setTransform(-56.6854,269.2454,2.2529,2.2529);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#221F20").p("AlgAAILAAB");
	this.shape_77.setTransform(186.6294,269.9776,2.2529,2.2529);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#221F20").p("AqogBIVRAD");
	this.shape_78.setTransform(463.2309,270.8788,2.2529,2.2529);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#221F20").p("AiaAAIE1AB");
	this.shape_79.setTransform(524.5102,270.9914,2.2529,2.2529);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#221F20").p("AhQAAIChAA");
	this.shape_80.setTransform(588.0424,271.2731,2.2529,2.2529);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#221F20").p("ArEgBIWJAD");
	this.shape_81.setTransform(776.386,271.8363,2.2529,2.2529);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#221F20").p("AiIAAIERAB");
	this.shape_82.setTransform(798.1267,271.8926,2.2529,2.2529);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#221F20").p("AhOAAICdAA");
	this.shape_83.setTransform(953.972,272.3995,2.2529,2.2529);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#28663C").s().p("AiaBOIAAgxQATgxAugeQAvgfAzAEQASACASAGQAvARAeAoQAfAoABAwIAAADg");
	this.shape_84.setTransform(-184.5383,251.2705,2.2529,2.2529);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#28663C").s().p("AudChIAAgDQABg8AjgvQAkgwA3gPQAwgOAxAOQAwANAkAlQANgYAUgVQAigkAugSQA9gXBBAPQAlARAaAfQAZAfAIAmQgCg3AqgtQAqgtA5gDQAdgBAcALQAfANAaAkIATAiQAFgcASgWQATgWAagHQAhgJAfAOQAhAOAQAgQAmgvA0gUQAzgVAyAMQA2ANAlAuQgSgeATglQASgjAkgJQAhgIAkAQQAhAPAYAdQAUAZAQAlQAKAXAOArQASg7ArglQApgkAwABQArACAnAhQgcAFgSAFQgNAEgCAFQAAAAAAABQAAABAAAAQAAABABAAQAAABAAAAIA1Deg");
	this.shape_85.setTransform(58.8891,232.7295,2.2529,2.2529);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#ABAAAD").s().p("AhACRIgBAAIhHkqQAEAFAQAGQAMAFALACQA0AKAyAAQA+gBA3gNQAIgCACgEIABAAIghEUQgnATgsADIgVABQghAAgfgJg");
	this.shape_86.setTransform(284.9691,254.7107,2.2529,2.2529);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#717477").s().p("AhdARQgLgCgMgEQgQgGgEgFIgBgEQABgFANgEQATgFAcgFQAxgGBMAFIAbACQAlADAQAKQAHAGACAFIgBAFIAAABQgCAEgJACQg3AMg+ABQgyAAg0gKg");
	this.shape_87.setTransform(284.9128,220.1296,2.2529,2.2529);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#28663C").s().p("AjcCNIAZjXQACgCgBgDQgCgGgHgGQgQgKglgDIgbgCQAKgLANgHQAfgTAoABQAqABAbAZQAXAWAHAmQAEAVgCAjQgBAPgDAOQAhg+A8gfQAggPAkgGQBGgLA2AiQA2AhAXAzQAYA3gRBBIAAABg");
	this.shape_88.setTransform(359.9598,238.6,2.2529,2.2529);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#AED9DC").s().p("AgNAAIgBAAIAEgDIAEgEQAGgEAKADIAFABIgBABIAAABQgMAFgGAKQgEgGgFgEg");
	this.shape_89.setTransform(449.6008,83.497,2.2529,2.2529);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#5AB379").s().p("AAyBIIgCgBQgGgDgEgGIgCgFQgEgDgFgBIgFgBQgLgDgGAEIgEAEIgDAEIgBABQgFACgGgCIgLgEQgCAFgFAEIgHAEQgEABgFgCQgEgCgCgEQgEAGgHABQgGACgGgCQgGgDgDgGQgEgGACgGQgJAEgIgGQgIgGgBgJQgCgHADgKQADgLAEgEQAIgHAWAAQgIgRAGgPQADgHAIgFQAJgFAHACQAHgNAOgHIgCAGQgEAPACANQAEAPAKAHQANAJAMgHQgCAKAFAIQAFAKAJAEQAGADAIgBQAOgCAHgKQADAGAHADQAHACAHgCQAFgBAEgEQAJAAAFAEQAHAEAFAOIgVAQQABAEgDADQgDADgEAAQABAHgHAEQgEADgIABIgFAAQgHAAgGgCg");
	this.shape_90.setTransform(446.8635,69.7217,2.2529,2.2529);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#AED9DC").s().p("AgcAEIA4gIIABABIg5AIg");
	this.shape_91.setTransform(479.5082,90.8709,2.2529,2.2529);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#AED9DC").s().p("AgVAKIAAgBQAGgEAHgHQAJgOABgHQAFAPAPAHIgBABQgRAIgKAQQgGgJgJgFg");
	this.shape_92.setTransform(482.6623,68.1165,2.2529,2.2529);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#A27D56").s().p("AgaAiQACgdgDgLIgBgFQgFgOgGgDQgGgEgJAAQAIgFADgJQAKAFAHABQAKADAIgEIABgBIAAABQAIAFAGAKQALgRARgIIABgBQAHAEAIAAIADAIIAAABQgXAPgDAoIAAAcIg4AJg");
	this.shape_93.setTransform(479.5082,79.7753,2.2529,2.2529);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#3E914D").s().p("AgYABIAFgBQAIgMAOABQAQACAFANIABAEIgrAEg");
	this.shape_94.setTransform(532.5644,82.4607,2.2529,2.2529);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#3E914D").s().p("AALAAIAAAAIgVABg");
	this.shape_95.setTransform(535.634,84.5628,2.2529,2.2529);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#5AB379").s().p("AATA1QgFgDgDgEIgBgDQgEgDgDAAIgDgBQgIgBgDACIgGAFIAAABIgBAAQgDACgFgCQgEAAgEgDQgBAEgEADIgEACQgIADgEgHQgFAIgJgDIAAAAQAHgFgCgHQARgFALgOQALgPgBgQQAAgWgSgPIAAAAQAFgEAFgCQAKgEANAGQAHADAHAHIADgBQAKgEAKACQAQADAIAOQACAFABAEQAAAFgCADQAIACAFAGQAGAGAAAIQABAIgGAHQgFAHgIACQABACgCADQgCACgDAAQAAAFgEADQgEACgFAAIgFAAQgFAAgEgBg");
	this.shape_96.setTransform(525.9793,56.807,2.2529,2.2529);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#3E914D").s().p("AgRAFQACgFAFgEQAFgEAFAAQAGAAAFAEQAFADABAFIAAADIghACg");
	this.shape_97.setTransform(541.914,82.2535,2.2529,2.2529);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#3E914D").s().p("AgQABIAhgCIAAABIghACg");
	this.shape_98.setTransform(541.9703,84.1122,2.2529,2.2529);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#A27D56").s().p("AghCCIAXkIIAsAAIgHENg");
	this.shape_99.setTransform(987.3715,315.5428,2.2529,2.2529);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#6F4E2E").s().p("AgBiGIAKAAIgHD8IgKARg");
	this.shape_100.setTransform(995.5383,315.5428,2.2529,2.2529);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6F4E2E").s().p("AgUAfIADg9IAmAAIgIA9g");
	this.shape_101.setTransform(1008.2109,250.5462,2.2529,2.2529);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#6F4E2E").s().p("AgVgNIAtAAIgEAbIgrABg");
	this.shape_102.setTransform(1010.8018,221.54,2.2529,2.2529);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#6F4E2E").s().p("AgaAMIADgXIAxAAIgCAXg");
	this.shape_103.setTransform(1013.7869,195.0119,2.2529,2.2529);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#A27D56").s().p("AgOBUIgUioIAlAAIAAAAIAgCpg");
	this.shape_104.setTransform(1012.1535,304.3909,2.2529,2.2529);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#6F4E2E").s().p("AgUhUIAAAAIAQAAIAZCZIgKAQg");
	this.shape_105.setTransform(1017.6168,304.3909,2.2529,2.2529);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#A27D56").s().p("AhXgtIC1ABIAABZIi7ABg");
	this.shape_106.setTransform(1012.4351,207.9662,2.2529,2.2529);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#99C555").s().p("AgkgNIBNgBIAAAcIhQAAg");
	this.shape_107.setTransform(1024.4882,221.4273,2.2529,2.2529);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#A27D56").s().p("AhagnIAAgBIC/gBIAABSIjJABg");
	this.shape_108.setTransform(1010.9707,234.1563,2.2529,2.2529);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#99C555").s().p("AgxAgIAIg+IBbAAIAAA+g");
	this.shape_109.setTransform(1022.348,250.4899,2.2529,2.2529);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#A27D56").s().p("AhyAGIAdgeIDJAAIAAAxIjmAAg");
	this.shape_110.setTransform(1007.5914,263.3315,2.2529,2.2529);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#A27D56").s().p("AiPAMIAigYID9AAIAAAag");
	this.shape_111.setTransform(1001.1706,272.0053,2.2529,2.2529);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#6F4E2E").s().p("AiNAXIgCguIEfACIAAAsg");
	this.shape_112.setTransform(1001.1706,280.0031,2.2529,2.2529);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E6E7E8").s().p("AgLBNIgaiZIBLAAIAACZg");
	this.shape_113.setTransform(1025.0515,302.5886,2.2529,2.2529);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#E6E7E8").s().p("EgrcAEGIAAoLMAhrAAHIASBLIABAAQApANAtgEQAsgEAngSIAHg9MAt4AAJIgNAJIACAvIBFAAIgXEIIA+AEIALgRIAHj7IAdAAIAUCpIAzABIAKgQIAyAAIAAEog");
	this.shape_114.setTransform(407.1334,327.7649,2.2529,2.2529);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#99C555").s().p("AgfGcIAAgBQAQhBgYg3QgXg0g1ghQg2gihHALQgjAGggAPQg9AfghA/QADgOAAgQQACgjgEgVQgGgmgXgWQgbgZgrgBQgngBgfATQgNAHgKALQhOgFgxAGQgmghgsgCQgwgBgpAkQgrAlgSA8QgOgsgKgXQgQglgUgZQgXgdgigPQgjgQgiAIQgjAJgTAjQgTAlASAeQgkgug2gNQgygMg0AVQg0AUglAvQgRgggggOQgggOggAJQgaAHgUAWQgTAWgFAcIgTgiQgagkgfgNQgcgLgdABQg5ADgqAtQgqAtACA4QgHgmgaggQgagfglgRQhAgPg+AXQguASgiAkQgUAWgNAYQgjglgxgOQgxgOgwAOQg3AQgjAwQgkAvgBA8QgBgwgfgpQgfgogugRIABgBQA9glBIgiQBYgqBggfQLBkNLhgrQD9gPEBAMIANABQDohpEHg2QArgJAzgJIA6gJQBJgKA0gFIBqgJIAjgCIAtgBQIogJIQB0QBoAXBxAfQFABSEpCHQBqAvBfAzIAFAAIAAAdIhBAAIADgZIgyAAIgDAZIhDgBIgGBcIBBAAIgCAdIhCABIAAAAIgKBTIBGgBIgDA+IhEAAIgdAgIAAATIgYAAIgUAPg");
	this.shape_115.setTransform(429.6625,178.0497,2.2529,2.2529);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#AED9DC").s().p("AgwAaQACgaAPgKIAAgBQAEAHAGACIACABQAIACAKgBQAHAAAEgDQAHgEgBgHQAEAAADgDQADgDgBgEIAVgQIABAFQADAMgCAbIgCAUQg1AIgpAJg");
	this.shape_116.setTransform(462.6267,86.3651,2.2529,2.2529);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#AED9DC").s().p("AgvAIQAqgIA1gIIgBABQgyAIgrAJg");
	this.shape_117.setTransform(462.3298,93.9124,2.2529,2.2529);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3E914D").s().p("AgWAGQAEgGAGgEQAHgEAHAAQAQACAEAOIgsABg");
	this.shape_118.setTransform(550.9256,81.9657,2.2529,2.2529);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#AED9DC").s().p("Aj+BPQDbhhD8g2IAlgHIABACQkHA1jpBpg");
	this.shape_119.setTransform(394.3481,113.738,2.2529,2.2529);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#5AB379").s().p("ABGBwQgKgFgFgIIgEgIQgHgBgIgEQgPgHgFgQQgBAIgKAOQgGAIgGAEIgBAAQgHAEgLgCQgHgCgJgFQgEAKgHAEQgFAEgFABQgHACgHgCQgHgDgDgGQgGAKgOACQgIABgHgDQgJgEgFgKQgEgJACgKQgNAHgNgJQgLgHgDgPQgDgNAEgPIACgGQADgJAHgHQAMgLAhAAQgMgbAJgVQAFgMANgHQAMgHAMACQAMgYAZgKQAMgEAOABQANAAAKAHQAMAGAHALQAIAMABAMQAGgOAQgHQAPgIAQADQAgAFASAgQAGAMABAHQABALgFAGQANADAJAIQASAPABAWQABARgMAOQgLAPgQAEQABAIgHAFQgDADgFAAQACAKgLAGQgHAFgMABIgHAAQgMAAgLgEg");
	this.shape_120.setTransform(479.4089,48.3066,2.2529,2.2529);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#AED9DC").s().p("EgrcgI7MBW5AAAIAANRIgFAAQhfgzhqgwQkpiIlAhRQhxgehogXQoQh0ooAIQgEgPgRgCQgIAAgGAEQgHAEgDAHQgCgGgFgEQgFgEgGAAQgGAAgFAEQgFAEgBAGQgGgOgPgBQgPgCgJANIgEABIgDgOQgDgQABgLQABgUALgHIAAAAQADAEAEACQAGADAIgBQAGAAADgDQAFgCAAgFQACAAACgDQACgCAAgDQAIgCAFgGQAFgHAAgIQgBgIgFgHQgGgHgIgBQADgEgBgEQAAgFgDgEQgIgPgPgDQgKgBgKADIgEACQgHgIgHgDQgNgFgLAEQgEABgFAEIgBAAQgJgIgNgDQAFgGgBgLQgBgHgGgMQgSgggggFQgQgDgPAIQgQAHgGAOQgBgMgIgMQgHgLgMgGQgLgHgNAAQgOgBgMAEQgZAKgMAYQgMgCgMAHQgNAHgFAMQgJAVAMAbQghAAgMAMQgHAHgDAJQgOAHgGANQgIgCgIAFQgIAFgDAHQgHAPAIARQgVAAgIAIQgFAEgDALQgDAKACAHQACAJAHAGQAJAGAIgEQgBAGADAGQADAGAGADQAGACAHgCQAGgBAEgGQACAEAFACQAEACAFgBIAGgEQAGAAADADQAGAEADAKQACAJgCASIgBALQj7A2jbBiQkBgMj9AOQrhArrBEPQhgAehYAqQhIAig9AmIgBABQgTgHgRgBQg0gFgvAfQgvAfgSAxg");
	this.shape_121.setTransform(407.1334,128.7762,2.2529,2.2529);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#AED9DC").s().p("AhLArIABgPQACgoAXgPIABgBQAFAIAKAFQAOAFAQgBQALgBAHgFQALgGgCgKQAFAAADgDIABAAQAIADAGgJQADAIAIgDIAFgCQADAAADACQAEACACAIQACAHgBAMIgCAQQgCAPgEAHIgDAFIgCgBQgLgMgSACQgQABgKAOQgJgLgPAAQgOABgJANIgDgGQgEgFgFgCQgGgBgGAEQgGAEgCAHg");
	this.shape_122.setTransform(502.9273,77.1282,2.2529,2.2529);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#A27D56").s().p("AgRAYQACgSgCgIQgDgLgGgEQgDgCgGAAQAFgEACgFIALAEQAHABAFgCIABAAIAAAAQAFADAEAHQAGgKAMgHIABAAIAAgCQAFACAEADIADAFIgBAAQgPAKgCAaIAAAPIgkAIg");
	this.shape_123.setTransform(447.4605,89.4629,2.2529,2.2529);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#3E914D").s().p("AhFADIADAAQACgGAGgEQAGgDAGABQAFABAEAFIADAFQAJgLAOgBQAOgBAKALQAKgNAQgCQASgCALAMIADABIgFAEIgKACQg2AFhHAJg");
	this.shape_124.setTransform(501.6994,86.064,2.2529,2.2529);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#A27D56").s().p("AgSAjQADgHACgPIACgQQABgMgBgHQgDgIgDgCQgEgCgDAAQAEgDABgEQAEADAEAAQAFACADgCIABAAQAEACACAFQAFgIAJgEIAAAAIAAgBQADAAAEADIABADIAAABQgLAHgBATQAAALACAPIAEAPIAFALIgyAEg");
	this.shape_125.setTransform(522.5952,75.9454,2.2529,2.2529);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#221F20").p("AAAhlIAADL");
	this.shape_126.setTransform(660.55,199.75);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#BD5E38").s().p("AAJAGIgLgDIgJgDIgGgFIAEAAIAFAAIARAFIAFADIAEADg");
	this.shape_127.setTransform(-56.3975,132.7543,2.253,2.253);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#221F20").ss(0.5,1,1).p("AAAAAIABAA");
	this.shape_128.setTransform(512.2612,187.615,2.253,2.253);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#6D6E71").s().p("AinA0QhHgWABgeQgBgdBHgVQBFgWBiABQBjgBBGAWQBGAVgBAdQABAehGAWQhGAUhjAAQhiAAhFgUg");
	this.shape_129.setTransform(-55.6652,350.789,2.253,2.253);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Park_back, new cjs.Rectangle(-221.6,-0.1,1255.1999999999998,387), null);


(lib.Lollipop = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("AgwpCIgCRiQABAFAGAIQAOASAcAAQAYAAAQgPQAHgHAFgKIAAxi");
	this.shape.setTransform(51.8749,149.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").p("AhciBQgLAcAJAPQABACAGAIQAEAGAAAEQgBADgEAEQgEAEgCAFQgCAFAAAGQAAAGADAEQADAEAKgBQANgCAJADQAKADAJAIQAIAIACAJQABAEgCAFQgCAGAAADQABAJAIAJQAIAJAWAQQANAKAkAXQAYAPATAO");
	this.shape_1.setTransform(30.4725,78.1586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").p("AirBwQAggJAJgSIAGgNQACgGAFgEQAEgDAHAAQAKgBAHgCQAVgEAGgJQAFgHgCgOQgCgMAEgEQAEgEALACQASAEAKAAQANAAANgGQAPgFAPgBQAHgBALABQALAAAKgBQAYgCAJgEQAPgHALgOQAMgQAAgPIAAgSIACgIQADgMAOgM");
	this.shape_2.setTransform(76.2459,38.0631);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").p("AnJhMQgBATAEASQAFAQAJALQANARAiAMQA5AWBPANIAxAHQA2AGANABQBjAIBlgCIARgBQBhgEBcgOQAvgGBOgfQAVgJALgGQARgKAIgQQAEgGADgJQAFgQgBgQ");
	this.shape_3.setTransform(51.3742,42.167);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").p("AnXhdQAMARAMgBQADAAAFgCQAEgDADABQADABABAHQACAHAEACQAHAGAVgLQAZgNgDgKQgBgCgEgCQgEgDgCgEQgEgJAFgFQAFgFAUAIQAPAGAaAEQAiAHAIACQAoANAVADQAdAEASAPQAFAEgBADQAAADgFABQgFACAAACQgCAHASAIQAJAEAQACIAvAAQAXAAAIABQANACADAGQABADgBAGQgCAGABAFQACAHALAFQAKAFAAABQAAAEgMACQgIACgFAAQgaACgpgCQgXAAgHAHIgEAFQgFAKABAPQABAOAIAHQACACAJAGQAHAEACAFQABAEgBAEQgBAEABADQAEALAdAGQAHACAIAAQAGAAAFABQAGACAIAFQAIAGAJAEQASAIAIgBQAFgBAFgEQAFgEAEgBQAHgCAJADQAHADAFgDQADgBADgEQAEgIAFgFQAJgLAEgCQAGgDAMADQAUAHAIABQAdAFASgHQAHgDASgNQAIgGAGgGQAEgFAEgCQAJgEANACQAQACALgDQANgEAUgRQANgLAMgPIAOgTQAFgJgCgFQgDgGgoABQgOAAgSABQgMgBgIgEQgTgIAAgKQABgIALgFQAFgCAHAAQAGAAACgCQACgDAAgPQAAgHgBgHQAAgDABgCQAEgGAUgCQAjgBAKgBQAJgBAIgEQAMgHAMgFQAUgJAggKQATgFAKgKQAPgPAGgY");
	this.shape_4.setTransform(47.5438,62.2506);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").p("AhmjsQAGB1ABAVQABASADAJQADAOAJAGQALAHATgDQAMgCAXgHQAXgJAIgDQANgFAGAEQAEADAEAIQAEAIAGAEQADACAUAEQAZAEAEABQAHABADADQAEAEACAHQACAGAEADQAFAEAJgBQAKgBAFADQAEADACAGQABAIAEAFQAHAJASAEQAOADABAEQAAAGgGADQgEACgGgBQgFgBgNgEQgVgGgMACQgFABgFACQgEADgFABQgGABgJgCQgLgDgIAAQgTgBgMAFQgHADgMAKQgPAMgCAIQgCAEACAUIACAYQACAQABABQADAEAHACQALACAGADQAOAGADAFQAFAJgEANQgEAJgSAKQgNAIgNAEQgYAIgSgBQgNgCgRgGQgDgBgIgFQgFgCgEAAQgFAAgGADQgJAFgHACQgJADgRACQgLABgNAAIgCAAQgPAAgwAI");
	this.shape_5.setTransform(51.7608,24.6838);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").p("An5hBQACAOAJAKIAIAHQAwAiA3AWQAuATBTAJQA7AHBtAFQBhAEArAAQA9AAA8gFQAYgCAngGQBOgNBIgWQAhgMAQgIQAZgNATgTQAQgQAJgP");
	this.shape_6.setTransform(50.925,45.625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").p("Am5iqQgBABgUAOQgVAPgMALQgIAHgDAJIgCAEQgDAJACAFIADCQIADAGIAGALQAGAMASALIARAJIAaAJQA+AWBGAPIB6ARQA4AHAjABQAwADBHgCQCPgDB7gWIA2gLQAogJAogTQARgIALgHQAcgQAHgKQAOgTAAgmQgBgVgCg2IgBgYQAAgTgBgEIgBgEQgDgGgGgGQgQgRgggS");
	this.shape_7.setTransform(51.0759,50.465);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").p("AmwibQALAgARAgQAbAzA0A0QBfBhB6AfQAdAHAlAEQAyAFAxgHQBygQBkhJQA2goAhgoQAug4AdhP");
	this.shape_8.setTransform(51.275,76.8198);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").p("AHHC9IgDgTQgDgNgDgKQgJgigRgmQgphXhPhEQgqglgrgWQhWgthigGQhBgEg/ANIgYAGQg7AQg1AeQhWAxg3BMQgvBCgWBQQgGAYgEAYIgBAG");
	this.shape_9.setTransform(51.2993,19.1599);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D73189").s().p("Ag3AUQgzg0gbgzQgRgfgLghQA9AWBHAPIAAADQgMAcAKAPIAHAKQAEAFAAAFQgBADgEADQgEAFgCAEQgDAFAAAGQABAHADAEQADADAKAAQANgCAIADQAKADAJAHQAIAIACAKQABAEgCAFIgCAJQABAJAHAIQAIAKAXAQQAOAJAjAXQAZAQATAOQh6gfhfhhg");
	this.shape_10.setTransform(24.2,76);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#3A83C2").s().p("AgTBBQhGgPg9gWIgagKIgSgIQgRgKgHgMIgGgLIgDgGIAAgaQAMASAMgBQACAAAGgDQAEgCACABQAEABABAGQACAHAEADQAHAFAVgKQAYgOgDgJQAAgCgEgDQgEgDgCgDQgEgJAFgFQAFgFAUAHQAPAGAZAFIAqAIQAnAOAWADQAdAEASAOQAEAFAAADQAAACgFACQgFACgBACQgBAGARAHQAKAEAPACIAwAAIAfABQANACACAGQACADgCAHQgBAGABAFQACAHALAGQAKAEAAACQgBADgLADIgNABQgaADgpgCQgXgBgHAHIgEAFg");
	this.shape_11.setTransform(23.15,58.425);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#3A83C2").s().p("AiIDkQhOgMg5gXQgigMgOgRQgJgMgEgQQADgYAHgYQAVhQAwhCQA3hMBVgxQA2geA6gQIAXgGIAICKQABATACAJQAEAOAJAFQAKAHAUgDQAMgCAWgHIAggMQANgEAHAEQAEACADAIQAEAIAGAEQAEACAUAEIAdAFQAGABADADQAEAEACAHQACAHAEACQAFAEAKgBQAKAAAEACQAEADACAGQACAJAEAEQAHAJARAEQAPADAAAFQABAFgGADQgEACgHgBIgSgFQgVgGgMADIgJACIgJAEQgHABgIgCIgUgDQgSgBgMAFQgIADgMAKQgOAMgDAIQgBAEABAUIACAZIAEAQQADAEAGACQAMADAGACQANAGAEAGQAFAIgFANQgEAKgSAKQgNAIgNAEQgZAHgSgBQgNgBgQgHIgMgGQgEgBgEAAQgFgBgGADQgKAFgGACQgKAEgRABQgKACgNAAIgBAAQgQAAgwAHIAAADg");
	this.shape_12.setTransform(39.2269,24.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D73189").s().p("Ah5A+QgJgEgIgGQgIgFgGgCQgFgBgGAAIgPgCQgdgGgEgLQgBgDABgEQABgEgBgEQgCgFgHgEIgLgHQgIgHgBgOQgBgPAFgKQA4AHAkABQAvADBIgCQCPgDB7gWIgOATQgMAPgNALQgUARgNAEQgLACgQgBQgNgCgJADQgEACgEAFIgOAMQgSANgHADQgSAHgdgFQgIgBgTgHQgMgDgGADQgEACgJALQgFAFgEAIQgDAEgDABQgFADgHgDQgJgDgHACQgEABgFAEQgFAEgFABIgCAAQgJAAgQgHg");
	this.shape_13.setTransform(57.0089,71.8863);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D73189").s().p("Aj2DxIhDgHIAAgCQAxgIAPAAIABAAQANAAALgBQARgCAKgDQAHgCAJgFQAGgDAFAAQAEAAAEACIAMAGQARAGANACQASABAYgIQANgEANgIQASgKAFgJQAEgNgFgJQgEgFgNgGQgGgDgLgCQgHgCgDgEIgEgRIgCgYQgBgUABgEQADgIAOgMQAMgKAIgDQAMgFATABIASADQAIACAHgBIAJgEIAKgDQALgCAVAGIASAFQAHABAEgCQAGgDgBgGQAAgEgPgDQgRgEgHgJQgEgFgCgIQgBgGgFgDQgEgDgKABQgKABgFgEQgEgDgCgGQgCgHgDgEQgEgDgGgBIgcgFQgUgEgDgCQgHgEgDgIQgEgIgEgDQgGgEgNAFIghAMQgWAHgMACQgUADgKgHQgJgGgDgOQgDgJgBgSIgIiKQBAgNBCAEQBhAGBVAtQArAWArAlQBOBEAqBXQgOAMgDAMIgBAIIAAASQgBAPgLAQQgMAOgPAHQgJAEgYACQgKABgKAAIgSAAQgQABgPAGQgOAGgNAAQgKAAgSgEQgLgCgDAEQgFAEACAMQADAOgGAHQgGAJgVAEIgRADQgHAAgDADQgFAEgDAGIgGANQgIASggAJIgRABIgxAAQhNAAhLgGg");
	this.shape_14.setTransform(61.9,24.6985);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#3A83C2").s().p("AhpCZQglgEgcgHQgTgOgZgQQgjgXgOgKQgXgQgIgJQgIgIAAgJIABgJQACgFgBgFQgBgJgJgIQgIgHgLgEQgIgCgNABQgKABgEgDQgDgEAAgHQAAgGADgFQACgEAEgFQAEgDAAgDQABgFgEgFIgIgKQgJgPALgcIABgDIB5AQQgFALABAOQABAPAIAHIALAHQAHAEACAGQABADgBAEQgBAFABADQAEAKAdAHIAPABQAGAAAFACQAGABAIAFQAIAFAJAEQASAJAJgCQAFgBAFgEQAFgEAEgBQAHgBAJADQAHACAFgCQADgCADgEQAEgHAFgFQAJgKAEgCQAGgEAMAEQATAGAIABQAdAGASgIQAHgCASgNIAOgNQAEgEAEgCQAJgFANACQAQADALgEQANgEAUgQQANgLAMgPIAOgTIA2gLQAngJApgTIAAABQgcBPgvA4QggAog3AoQhkBJhwAQQgdAEgeAAQgVAAgVgCg");
	this.shape_15.setTransform(57.5475,76.6042);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D73189").s().p("AgvCNQgkgCg4gHIAEgFQAHgHAXABQApACAagDIANgBQAMgDAAgDQAAgCgKgEQgLgGgCgHQgBgFACgGQABgHgBgDQgDgGgNgCIgfgBIgvAAQgQgCgJgEQgSgIACgGQAAgCAFgCQAFgCAAgCQABgDgFgFQgSgOgdgEQgVgDgogNIgqgIQgagFgPgGQgUgHgFAFQgFAFAEAJQACADAEADQAEADABACQADAIgZAOQgVAKgHgFQgEgDgCgHQgBgGgDgBQgDgBgEACQgFADgDAAQgMABgMgRIgDh4QgBgFADgIIABgFQACAOAJAKIAIAHQAwAiA3AXQAuATBTAJQA7AHBtAFQBhAEArAAQA9AAA8gFQAYgCAngGQBOgNBIgWQAhgMAQgJQgGAYgPAPQgKAKgTAGQggAJgUAJIgYALQgIAEgJABIgtADQgUABgEAGQgBACAAAEIABANQAAAQgCACQgCADgGgBQgHAAgFACQgLAFgBAJQAAAJATAKQAIAEAMAAIAggBQAoAAADAGQACAEgFAKQh7AWiQADIg1ABQglAAgcgCg");
	this.shape_16.setTransform(47.325,53.315);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3A83C2").s().p("AiTBVIAGgMQADgGAFgEQADgDAHAAIARgDQAVgFAGgIQAGgHgDgOQgCgNAFgDQADgFALADQASADAKABQANgBAOgFQAOgFAQgCIASAAQAKABAKgBQAYgCAJgEQAPgHAMgPQALgPABgQIAAgRIABgIQADgMAOgMQARAmAJAhIAFAXIAEASQgDAKgEAGQgJAPgRAMQgKAGgVAJQhOAfgvAGQhbAOhhAEQAhgKAIgSg");
	this.shape_17.setTransform(77.9,38);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#397CAE").s().p("AhXBaQhtgEg7gHQhTgKgugTQg3gXgwghIgIgHQgJgKgCgNQAEgJAIgHQALgLAVgPIAWgPQgHAYgDAYQAEAQAJALQAOASAiALQA5AWBOANIAyAHIBDAHQBjAIBkgCIASgBQBhgEBcgOQAvgGBOgfQAVgJAKgFQARgLAJgQQAEgGADgJIgEgTIgGgXIABAAQAgASAQARQAGAGACAGIACAEIgCABQgJAOgQAQQgTASgZAOQgQAJghALQhIAXhOAMQgnAHgYABQg8AFg9AAQgrAAhhgEg");
	this.shape_18.setTransform(51.025,42.775);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3A83C2").s().p("AguB0QgDgGgoABIggAAQgMAAgIgEQgTgKAAgJQABgJAMgEQAEgCAHAAQAGAAACgDQACgCAAgQIgBgNQAAgEABgCQAEgFAVgCIAtgDQAIgBAIgDIAYgNQATgIAggJQATgGAKgKQAPgPAGgYQAZgNATgTQAQgQAJgPIACAAQABAEAAATIABAXIACBNQABAkgOAUQgHAJgcAQIgcAQQgpATgnAJIg1ALQAFgKgCgEg");
	this.shape_19.setTransform(86.1002,52);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#ABD4BA").s().p("AgrIvQgGgIgBgEIACxiQAyAFAxgHIAARiQgFALgHAHQgQAPgYAAQgcAAgOgTg");
	this.shape_20.setTransform(51.875,149.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#99FF99").p("AgwpCIgCRiQABAFAGAIQAOASAcAAQAYAAAQgPQAHgHAFgKIAAxi");
	this.shape_21.setTransform(51.8749,149.75);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#99FF99").p("AhciBQgLAcAJAPQABACAGAIQAEAGAAAEQgBADgEAEQgEAEgCAFQgCAFAAAGQAAAGADAEQADAEAKgBQANgCAJADQAKADAJAIQAIAIACAJQABAEgCAFQgCAGAAADQABAJAIAJQAIAJAWAQQANAKAkAXQAYAPATAO");
	this.shape_22.setTransform(30.4725,78.1586);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#99FF99").p("AirBwQAggJAJgSIAGgNQACgGAFgEQAEgDAHAAQAKgBAHgCQAVgEAGgJQAFgHgCgOQgCgMAEgEQAEgEALACQASAEAKAAQANAAANgGQAPgFAPgBQAHgBALABQALAAAKgBQAYgCAJgEQAPgHALgOQAMgQAAgPIAAgSIACgIQADgMAOgM");
	this.shape_23.setTransform(76.2459,38.0631);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#99FF99").p("AnJhMQgBATAEASQAFAQAJALQANARAiAMQA5AWBPANIAxAHQA2AGANABQBjAIBlgCIARgBQBhgEBcgOQAvgGBOgfQAVgJALgGQARgKAIgQQAEgGADgJQAFgQgBgQ");
	this.shape_24.setTransform(51.3742,42.167);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#99FF99").p("AnXhdQAMARAMgBQADAAAFgCQAEgDADABQADABABAHQACAHAEACQAHAGAVgLQAZgNgDgKQgBgCgEgCQgEgDgCgEQgEgJAFgFQAFgFAUAIQAPAGAaAEQAiAHAIACQAoANAVADQAdAEASAPQAFAEgBADQAAADgFABQgFACAAACQgCAHASAIQAJAEAQACIAvAAQAXAAAIABQANACADAGQABADgBAGQgCAGABAFQACAHALAFQAKAFAAABQAAAEgMACQgIACgFAAQgaACgpgCQgXAAgHAHIgEAFQgFAKABAPQABAOAIAHQACACAJAGQAHAEACAFQABAEgBAEQgBAEABADQAEALAdAGQAHACAIAAQAGAAAFABQAGACAIAFQAIAGAJAEQASAIAIgBQAFgBAFgEQAFgEAEgBQAHgCAJADQAHADAFgDQADgBADgEQAEgIAFgFQAJgLAEgCQAGgDAMADQAUAHAIABQAdAFASgHQAHgDASgNQAIgGAGgGQAEgFAEgCQAJgEANACQAQACALgDQANgEAUgRQANgLAMgPIAOgTQAFgJgCgFQgDgGgoABQgOAAgSABQgMgBgIgEQgTgIAAgKQABgIALgFQAFgCAHAAQAGAAACgCQACgDAAgPQAAgHgBgHQAAgDABgCQAEgGAUgCQAjgBAKgBQAJgBAIgEQAMgHAMgFQAUgJAggKQATgFAKgKQAPgPAGgY");
	this.shape_25.setTransform(47.5438,62.2506);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#99FF99").p("AhmjsQAGB1ABAVQABASADAJQADAOAJAGQALAHATgDQAMgCAXgHQAXgJAIgDQANgFAGAEQAEADAEAIQAEAIAGAEQADACAUAEQAZAEAEABQAHABADADQAEAEACAHQACAGAEADQAFAEAJgBQAKgBAFADQAEADACAGQABAIAEAFQAHAJASAEQAOADABAEQAAAGgGADQgEACgGgBQgFgBgNgEQgVgGgMACQgFABgFACQgEADgFABQgGABgJgCQgLgDgIAAQgTgBgMAFQgHADgMAKQgPAMgCAIQgCAEACAUIACAYQACAQABABQADAEAHACQALACAGADQAOAGADAFQAFAJgEANQgEAJgSAKQgNAIgNAEQgYAIgSgBQgNgCgRgGQgDgBgIgFQgFgCgEAAQgFAAgGADQgJAFgHACQgJADgRACQgLABgNAAIgCAAQgPAAgwAI");
	this.shape_26.setTransform(51.7608,24.6838);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#99FF99").p("An5hBQACAOAJAKIAIAHQAwAiA3AWQAuATBTAJQA7AHBtAFQBhAEArAAQA9AAA8gFQAYgCAngGQBOgNBIgWQAhgMAQgIQAZgNATgTQAQgQAJgP");
	this.shape_27.setTransform(50.925,45.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#99FF99").p("Am5iqQgBABgUAOQgVAPgMALQgIAHgDAJIgCAEQgDAJACAFIADCQIADAGIAGALQAGAMASALIARAJIAaAJQA+AWBGAPIB6ARQA4AHAjABQAwADBHgCQCPgDB7gWIA2gLQAogJAogTQARgIALgHQAcgQAHgKQAOgTAAgmQgBgVgCg2IgBgYQAAgTgBgEIgBgEQgDgGgGgGQgQgRgggS");
	this.shape_28.setTransform(51.0759,50.465);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#99FF99").p("AmwibQALAgARAgQAbAzA0A0QBfBhB6AfQAdAHAlAEQAyAFAxgHQBygQBkhJQA2goAhgoQAug4AdhP");
	this.shape_29.setTransform(51.275,76.8198);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#99FF99").p("AHHC9IgDgTQgDgNgDgKQgJgigRgmQgphXhPhEQgqglgrgWQhWgthigGQhBgEg/ANIgYAGQg7AQg1AeQhWAxg3BMQgvBCgWBQQgGAYgEAYIgBAG");
	this.shape_30.setTransform(51.2993,19.1599);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1,104.7,210.5);


(lib.Ice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5,1,1).p("AADgxQgKABgEANQgCAGABAQQACAVABAKQABAUADAMQALgDAEgIQAEgHgBgMQgJhFgBAAg");
	this.shape.setTransform(31.4661,62.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4CA555").s().p("AgJASIgDgfQgBgQACgGQAEgNAKgBIAKBFQABAMgEAHQgEAIgLADQgDgMgBgUg");
	this.shape_1.setTransform(31.4661,62.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").ss(0.5,1,1).p("AAVgtQgPgCgHALQgFAGgCANQgMA9AAACQAZgBAHgUQAJhGAAAAg");
	this.shape_2.setTransform(42.2263,43.9527);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9E04E").s().p("AgIgRQACgNAFgGQAHgLAPACIgJBGQgHAUgZABIAMg/g");
	this.shape_3.setTransform(42.2263,43.9527);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").ss(0.5,1,1).p("AAigdIgSgLQgtBHgEAHQANAGAIgHQACgCALgRg");
	this.shape_4.setTransform(53.875,17.401);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4CA555").s().p("AghAmQAEgHAthHIASALIghAvIgNATQgEAEgGAAQgFAAgGgDg");
	this.shape_5.setTransform(53.875,17.401);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").ss(0.5,1,1).p("AAugBQgDgQgJgEQgGgCgMAEIg9AUQAJASADACQAGAEAQgGQAFgBA0gTg");
	this.shape_6.setTransform(73.65,39.3819);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3A83C2").s().p("AghAVQgEgCgIgSIA9gUQAMgEAGACQAJAEADAQIg5AUQgKAEgGAAQgEAAgCgCg");
	this.shape_7.setTransform(73.65,39.3819);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").ss(0.5,1,1).p("AAmADIgPgcQgMAFgfALQgYAMAKAXg");
	this.shape_8.setTransform(88.3925,87.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4CA455").s().p("AgUgJIArgQIAPAcIhIAXQgKgXAYgMg");
	this.shape_9.setTransform(88.3925,87.05);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").ss(0.5,1,1).p("AgBA0IAdgNQgGgPgMgeQgKgcgJgRQgOAEgDAJQgCAIADANQACAGAWA/g");
	this.shape_10.setTransform(61.4979,52.975);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D73189").s().p("AgZgRQgDgNACgIQADgJAOgEQAJARAKAcIASAtIgdANIgYhFg");
	this.shape_11.setTransform(61.4979,52.975);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").ss(0.5,1,1).p("AgFgrQADACACAHIAZBKIgRAFIgZg7QgBgDgEgIQgDgHACgFQACgEAGgCQAGgCAEACg");
	this.shape_12.setTransform(75.235,71.7056);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9E04E").s().p("AgRgOIgFgLQgDgHACgFQACgEAGgCQAGgCAEACQADACACAHIAZBKIgRAFg");
	this.shape_13.setTransform(75.235,71.7056);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221F20").ss(0.5,1,1).p("AgoAWQAFACAHgDQAlgLAmgUIgKgMIhTAcQACABAAAGQAAAHAEACg");
	this.shape_14.setTransform(21.225,87.3818);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D73189").s().p("AgoAWQgEgCAAgHQAAgGgCgBIBTgcIAKAMQgmAUglALIgHACIgFgBg");
	this.shape_15.setTransform(21.225,87.3818);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221F20").ss(0.5,1,1).p("AgZAOQgGAHAAAGQAAADADADQADACADgCQAYgRAVgXQAJgJgBgLQgBgLgOAIQgKAGgMAPQAAABgTAWg");
	this.shape_16.setTransform(49.2014,75.1092);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#3A83C2").s().p("AgcAhQgDgDAAgDQAAgGAGgHIATgXQAMgPAKgGQAOgIABALQABALgJAJQgVAXgYARIgCABIgEgBg");
	this.shape_17.setTransform(49.2014,75.1092);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221F20").p("ACDAUQglANgoACQhCAEg4gdQgjgRgbgd");
	this.shape_18.setTransform(59.175,29.4272);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221F20").p("AgIAHIARgM");
	this.shape_19.setTransform(79.025,54.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").p("ADjACQgvAYgzAMQhYAVhWgSQhmgVhRhG");
	this.shape_20.setTransform(55.4114,54.9639);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221F20").p("Aljg/QBnA+ByAfQDxBFD/hH");
	this.shape_21.setTransform(53.7379,77.2428);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221F20").p("AmvHgQgehFAXhEQAQgwAogjQAWgSAYgLQgVgiABgoQAAgoAVghQAXgjAngRQAngRAqAHQgKgWgCgjQgEg/AigwQAaglArgUQAYgLAYgEQgJgXgDgZQgEgpANgjQALgbAWgYQANgOAZgVQAXgTAPgHQAbgOARgFQAegIATAMQALAHAHANQAGANABAOQAAAVgQASQgEgWgQgFQgLgDgMAIQgLAHgHALQgRAdAhA5QAKASASANQAXASAKAMQAbAgALAuQAqAMAdAeQAeAfAGAoQAHAmgQAlQgKAVgMAPQA2AKAmAlQAmAkAHAyQAHAsgVArQgLAXgQASQAQAHARAPQAfAbAHAlQAGAigRAi");
	this.shape_22.setTransform(51.8356,47.6911);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221F20").p("ABShrIgTAXQgoAygPAUIgoA1QghAtgPAW");
	this.shape_23.setTransform(24.8177,154.8158);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221F20").p("AC2i7IgpAlQg6A2g3A4IgSASQgvAwgmAqQg3A9gxA8");
	this.shape_24.setTransform(37.3686,162.8493);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221F20").p("ADLjTIg7A1Qg0AxgwAwQgUAUgYAbQgNANg3A5QgzA6guA3IglAs");
	this.shape_25.setTransform(56.5239,166.1476);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221F20").p("ACZiUIkxEp");
	this.shape_26.setTransform(69.75,172.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221F20").p("AhahyIC1Dl");
	this.shape_27.setTransform(74.55,154.875);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221F20").p("AiajIIE2GR");
	this.shape_28.setTransform(63.85,163.675);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#221F20").p("AicjXIE5Gw");
	this.shape_29.setTransform(45.3,165.75);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#221F20").p("AiJi0IETFq");
	this.shape_30.setTransform(29.625,169.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#221F20").p("AlnjVIAPD0QAHA0ADASQAFAfAIARQAHARALALQAIAIASAFQAdAJBAAFIAgADQApACAeAAIBuAAQAeAAADAAQANgCATgBIBMgCQAtgCAPgDQAXgEAOgNQAHgFAEgHQAHgKAEgQQADgKAGgcIAdiQQABgJAGgpQAMhAAPg4");
	this.shape_31.setTransform(51.592,166.7842);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#221F20").p("AmojcIgrAKQgXAHgKANQgQAUAJAqQAZB7ANA0QAUBSAhBvQAJAhATAGQAPAGASgJQAUgKB5gDIECgHQA6gBApABQAeAAAPADQASADAzAEQAuAEAYAFQAgAGAGAAQAMAAAKgFQAQgJAIgbQABgGANg/IAIgmQAJgtALgiQAHgaAWhFQAVhCAHgtQADgOgEgLQgEgOgOgKQgPgLgggMQgVgHgJgCQg3gRg/gLQhKgMgygEQgtgEgvAAQgoABhSADIhxALQiLAQiCAeg");
	this.shape_32.setTransform(51.1266,117.8043);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#C2A56C").s().p("AmEEXQgTgGgJghQghhvgUhSQgNg0gZh7QgJgqAQgUQAKgNAXgHIArgKQCCgeCLgQIBxgLQBSgDAogBQAvAAAtAEQAyAEBKAMQA/ALA3ARIAeAJQAgAMAPALQAOAKAEAOQAEALgDAOQgHAtgVBCIgdBfQgLAigJAtIgIAmIgOBFQgIAbgQAJQgKAFgMAAQgGAAgggGQgYgFgugEQgzgEgSgDQgPgDgeAAQgpgBg6ABIkCAHQh5ADgUAKQgLAGgKAAQgGAAgGgDg");
	this.shape_33.setTransform(51.1266,117.8043);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#C2A56C").s().p("AgbhGIA3BKIgvBCg");
	this.shape_34.setTransform(18.675,158.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#C2A56C").s().p("AgyBDQgEgTgGgzIgEgsIAwhDIBRBtQg3A8gwA8QgHgSgFgeg");
	this.shape_35.setTransform(23.225,170.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C2A56C").s().p("AhKAAIgDg7QAUgKB3gDIAQAWIg3BFIgpA2g");
	this.shape_36.setTransform(23.35,151.425);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("Am2gMQAQgwAogiQAWgTAYgLQBnA/ByAgQDxBDD/hFQAQAGARAPQAfAaAHAlQAGAigRAiIgegJQg3gSg/gKQhKgNgygDQgtgEgvAAQgoABhSADIhxALQiLAPiCAeQgehFAXhDg");
	this.shape_37.setTransform(51.8356,83.25);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#BE9546").s().p("AgQgJIAhgBIgSAVg");
	this.shape_38.setTransform(31.325,145.15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C2A56C").s().p("AAiBXQg/gGgdgJQgRgEgJgJQgLgLgHgQQAxg7A2g9IBmCEIglAtg");
	this.shape_39.setTransform(29.625,178.55);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#C2A56C").s().p("AhcAIIApg2IA2hGIBaB7IgSATQgwAxglAqg");
	this.shape_40.setTransform(30.825,157.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C2A56C").s().p("AgjAVIAkgrIAjAtQgfAAgogCg");
	this.shape_41.setTransform(39.825,185.325);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#C2A56C").s().p("AhlgwIATgWICYgFIAgAqQg6A0g3A4g");
	this.shape_42.setTransform(41.325,151.15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#C2A56C").s().p("AhigLQAmgqAvgxIARgTIBgCCQg0A6guA2g");
	this.shape_43.setTransform(39.7,170.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#C2A56C").s().p("Ag5BPIgjguQAug2Azg6IBYB4IgoAng");
	this.shape_44.setTransform(49.175,179.725);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#C2A56C").s().p("AgjgTIBHgBIAAAFIgnAkg");
	this.shape_45.setTransform(51.925,145.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C2A56C").s().p("AAHgSIAaAiIghADIgfAAg");
	this.shape_46.setTransform(57.75,185.775);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("Ag+CLQgigRgcgdQgJgXgDgZQgEgpANgiQALgbAWgYQANgOAagVQAXgTAPgHQAagOARgFQAegIATAMQALAHAHANQAGANABAOQAAAVgQASQgEgWgQgFQgLgDgMAIQgLAHgHALQgRAdAhA4QAKASASANQAXASAKAMQAbAgALAuQglANgoACIgQABQg5AAgygag");
	this.shape_47.setTransform(58.5188,16.4642);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#C2A56C").s().p("AhngKQA3g4A5g1IBfB5IgtAvIhDBHg");
	this.shape_48.setTransform(50.55,159.75);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#C2A56C").s().p("AhggmIAoglIAAgGQA5gCApABIA3BFQg0AwgvAwg");
	this.shape_49.setTransform(61.2,151.655);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#C2A56C").s().p("Ag4ghQAeAAAPADQARADAzAEIAAAFIg6A0g");
	this.shape_50.setTransform(71.15,146.825);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C2A56C").s().p("AhoApIB3h0IBaBzQgFAHgGAFQgPANgXAEQgOADgtACIhLACg");
	this.shape_51.setTransform(68.925,179.775);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#C2A56C").s().p("AhngBIBEhHIAsguIBfB4Ih3B2g");
	this.shape_52.setTransform(60.025,171.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C2A56C").s().p("AhTgeIA8g2IAAgEQAtAEAXAEQAgAGAHAAQgPA4gMA/IgtAsg");
	this.shape_53.setTransform(79.275,153.375);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#C2A56C").s().p("AhhgLQAwgxAzgxIBfB4IhjBig");
	this.shape_54.setTransform(70.7,161.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#C2A56C").s().p("AhBgIIBjhiIAgAoIgWBuIgJAmQgFAQgGAJg");
	this.shape_55.setTransform(77.025,173.025);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("Ag/CjQhmgWhShGQgKgWgCglQgDg+AigwQAaglArgUQAYgLAYgEQAbAdAjASQA3AdBDgEQAogCAlgNQAqALAeAfQAdAfAHAoQAGAlgQAlQgJAWgNAOIgRANQgwAYgzANQgvALgvAAQgnAAgogIg");
	this.shape_56.setTransform(57.2526,42.828);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AiWCIQhygghog/QgUgiAAgnQAAgoAWghQAWgjAngRQAngRAqAHQBSBHBmAVQBVASBYgVQAzgMAwgYIARgNQA2AKAmAlQAmAkAIAxQAGAsgVArQgLAXgQASQiBAlh+AAQh5AAh3gig");
	this.shape_57.setTransform(54.9512,66.6547);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#C2A56C").s().p("AgWACIAtgrIgIAwIgGAjg");
	this.shape_58.setTransform(82.725,162.125);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#99FF99").ss(0.5,1,1).p("AADgxQgKABgEANQgCAGABAQQACAVABAKQABAUADAMQALgDAEgIQAEgHgBgMQgJhFgBAAg");
	this.shape_59.setTransform(31.4661,62.275);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#99FF99").ss(0.5,1,1).p("AAVgtQgPgCgHALQgFAGgCANQgMA9AAACQAZgBAHgUQAJhGAAAAg");
	this.shape_60.setTransform(42.2263,43.9527);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#99FF99").ss(0.5,1,1).p("AAigdIgSgLQgtBHgEAHQANAGAIgHQACgCALgRg");
	this.shape_61.setTransform(53.875,17.401);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#99FF99").ss(0.5,1,1).p("AAugBQgDgQgJgEQgGgCgNAEIg8AUQAIASAEACQAGAEAQgGQAFgBA0gTg");
	this.shape_62.setTransform(73.65,39.3819);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#99FF99").ss(0.5,1,1).p("AAmACIgPgbQgMAFgfALQgYAMAKAXg");
	this.shape_63.setTransform(88.3925,87.05);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#4CA455").s().p("AgUgJIArgQIAPAbIhIAYQgKgXAYgMg");
	this.shape_64.setTransform(88.3925,87.05);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgBA0IAdgNQgGgPgMgeQgKgcgJgRQgOAEgDAJQgCAIADANQACAGAWA/g");
	this.shape_65.setTransform(61.4979,52.975);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgFgrQADACACAHIAZBKIgRAFIgZg7QgBgDgEgIQgDgHACgFQACgEAGgCQAGgCAEACg");
	this.shape_66.setTransform(75.235,71.7056);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgoAWQAFACAHgDQAlgLAmgUIgKgMIhTAcQACABAAAGQAAAHAEACg");
	this.shape_67.setTransform(21.225,87.3818);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgZAOQgGAHAAAGQAAADADADQADACADgCQAYgRAVgXQAJgJgBgLQgBgLgOAIQgKAGgMAPQAAABgTAWg");
	this.shape_68.setTransform(49.2014,75.1092);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#99FF99").p("ACDAUQglANgoACQhCAEg4gdQgjgRgbgd");
	this.shape_69.setTransform(59.175,29.4272);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#99FF99").p("AgIAHIARgM");
	this.shape_70.setTransform(79.025,54.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#99FF99").p("ADjACQgvAYgzAMQhYAVhWgSQhmgVhRhG");
	this.shape_71.setTransform(55.4114,54.9639);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#99FF99").p("Aljg/QBnA+ByAfQDxBFD/hH");
	this.shape_72.setTransform(53.7379,77.2428);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#99FF99").p("AmvHgQgehFAXhEQAQgwAogjQAWgSAYgLQgVgiABgoQAAgoAVghQAXgjAngRQAngRAqAHQgKgWgCgjQgEg/AigwQAaglArgUQAYgLAYgEQgJgXgDgZQgEgpANgjQALgbAWgYQANgOAZgVQAXgTAPgHQAbgOARgFQAegIATAMQALAHAHANQAGANABAOQAAAVgQASQgEgWgQgFQgLgDgMAIQgLAHgHALQgRAdAhA5QAKASASANQAXASAKAMQAbAgALAuQAqAMAdAeQAeAfAGAoQAHAmgQAlQgKAVgMAPQA2AKAmAlQAmAkAHAyQAHAsgVArQgLAXgQASQAQAHARAPQAfAbAHAlQAGAigRAi");
	this.shape_73.setTransform(51.8356,47.6911);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#99FF99").p("ABShrIgTAXQgoAygPAUIgoA1QghAtgPAW");
	this.shape_74.setTransform(24.8177,154.8158);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#99FF99").p("AC2i7IgpAlQg6A2g3A4IgSASQgvAwgmAqQg3A9gxA8");
	this.shape_75.setTransform(37.3686,162.8493);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#99FF99").p("ADLjTIg7A1Qg0AxgwAwQgUAUgYAbQgNANg3A5QgzA6guA3IglAs");
	this.shape_76.setTransform(56.5239,166.1476);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#99FF99").p("ACZiUIkxEp");
	this.shape_77.setTransform(69.75,172.8);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#99FF99").p("AhahyIC1Dl");
	this.shape_78.setTransform(74.55,154.875);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#99FF99").p("AiajIIE2GR");
	this.shape_79.setTransform(63.85,163.675);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#99FF99").p("AicjXIE5Gw");
	this.shape_80.setTransform(45.3,165.75);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#99FF99").p("AiJi0IETFq");
	this.shape_81.setTransform(29.625,169.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#99FF99").p("AlnjVIAPD0QAHA0ADASQAFAfAIARQAHARALALQAIAIASAFQAdAJBAAFIAgADQApACAeAAIBuAAQAeAAADAAQANgCATgBIBMgCQAtgCAPgDQAXgEAOgNQAHgFAEgHQAHgKAEgQQADgKAGgcIAdiQQABgJAGgpQAMhAAPg4");
	this.shape_82.setTransform(51.592,166.7842);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#99FF99").p("AmojcIgrAKQgXAHgKANQgQAUAJAqQAZB7ANA0QAUBSAhBvQAJAhATAGQAPAGASgJQAUgKB5gDIECgHQA6gBApABQAeAAAPADQASADAzAEQAuAEAYAFQAgAGAGAAQAMAAAKgFQAQgJAIgbQABgGANg/IAIgmQAJgtALgiQAHgaAWhFQAVhCAHgtQADgOgEgLQgEgOgOgKQgPgLgggMQgVgHgJgCQg3gRg/gLQhKgMgygEQgtgEgvAAQgoABhSADIhxALQiLAQiCAeg");
	this.shape_83.setTransform(51.1266,117.8043);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_17},{t:this.shape_68},{t:this.shape_15},{t:this.shape_67},{t:this.shape_13},{t:this.shape_66},{t:this.shape_11},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_7},{t:this.shape_62},{t:this.shape_5},{t:this.shape_61},{t:this.shape_3},{t:this.shape_60},{t:this.shape_1},{t:this.shape_59}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.4,-2.3,105.9,191);


(lib.Floor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E7E8").s().p("EhbHAg0MAAAhBnMC2PAAAMAAABBng");
	this.shape.setTransform(583.15,112.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Floor, new cjs.Rectangle(0,-97.9,1166.3,419.9), null);


(lib.Eric = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#020303").ss(0.2,1,1).p("AgLgKIAXAV");
	this.shape.setTransform(13.725,3.325);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#020303").ss(0.2,1,1).p("AgcgIIAgAaIAKgDIAAAAIAPgFIgkgbIAAAAg");
	this.shape_1.setTransform(9.8,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#020303").ss(0.2,1,1).p("AgBAAIACAA");
	this.shape_2.setTransform(10.9,6.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#020303").ss(0.2,1,1).p("AgEAUQALgDAEgCQAHgCAEgDIACgBQACgBACgDIABgEQABgFgDgEQgCgGgGgDQgEgCgFAAIgFAAQgHABgRAFIgKAD");
	this.shape_3.setTransform(12.0042,4.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#020303").ss(0.2,1,1).p("AAJgVIgUAJQgIAFgBAJQAAAGADAGQADAFAGACQADABAIgCIASgG");
	this.shape_4.setTransform(8.0969,5.4031);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#020303").ss(0.2,1,1).p("AgIALQAGgNAMgI");
	this.shape_5.setTransform(26.85,25.475);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#020303").ss(0.2,1,1).p("AgLAHQAKgJANgE");
	this.shape_6.setTransform(18.6,33.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#020303").ss(0.2,1,1).p("AACACIgDgC");
	this.shape_7.setTransform(26.95,13.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#020303").ss(0.2,1,1).p("AANAOIACACIABACQAAACgDABQgBAAgCgBQgGgBgKgIIgKgCQgIgCgBgHIgBgHQABgHAFgFIABAAIACgBIADACIAIAFQAEADACgBIAEgCIAFgBQAHgEAEABQAAAFgDADQgDACgEAAQAGABAHAEQAFACgBACQgBACgDABQgFABgDgCQAFADABAHQAAABgBABIgCAAg");
	this.shape_8.setTransform(25.7833,12.6833);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#020303").ss(0.2,1,1).p("AAAACIAAgD");
	this.shape_9.setTransform(1.75,27.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#020303").ss(0.2,1,1).p("AgGAUIgBADIgBACQgCABgBgBQgCgCAAgBQgCgEAAgGQAAgHgBgDIgEgIQgDgGADgFQADgEAFgDQAHgEAFACIACABIABAEIAAAKQAAAEACACQADABACABIAEADQABACAEABQADACABACQgEADgFgBQgEgBgCgEQACAFACAJQABAGgDAAQgBABgDgCQgEgEgBgEQACAHgEAFQgBABgBgBQgCAAAAgBg");
	this.shape_10.setTransform(2.4375,25.6867);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#020303").ss(0.2,1,1).p("AgXASQANgHAMgJQANgJAKgL");
	this.shape_11.setTransform(14.85,21.35);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#020303").ss(0.2,1,1).p("AgYASIAYgRQAPgKAKgI");
	this.shape_12.setTransform(14.4,20.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#020303").ss(0.2,1,1).p("AguAFIADgBQAWgJAWABQAUAAAaAJ");
	this.shape_13.setTransform(18.375,12.1205);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#020303").ss(0.2,1,1).p("AA5AJQgigTgoADQgVACgSAI");
	this.shape_14.setTransform(18.05,9.8489);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#020303").ss(0.2,1,1).p("AgSgmQAMAiARAcIAIAO");
	this.shape_15.setTransform(15.85,16.35);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#020303").ss(0.2,1,1).p("AAaBHQAWgEALgEQASgHAJgNQADgEAAgEQAAgFgGgEQgFgDgGAAQgMAAgMACQACgEgFgFIgigsIAAAAIgTgaQgHgIgEgCQgEgDgPABQgJABgQgCIgZgD");
	this.shape_16.setTransform(26.7,27.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#020303").ss(0.2,1,1).p("AhyiMQAFAHAIAIQAJAJAEAFIA7BTQANAUAEAIQAEANADASIACAOQADAcAAAdQABAPADAGQAFALARAFQAPAFALgEQAPgGABgNQABgGgDgGQgEgGgHgBIgKgCQgCgBgEgIIgTg8IAAgBIgMgnQgFgLAAgBIgHgJQgTgUgDgEQAEgCAGgIQAFgHAFgBQACAAAFAAIAxAFQAJABAEACQADADAEAIIAKAWQAPAeATAu");
	this.shape_17.setTransform(17.8,29.8441);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#020303").ss(0.2,1,1).p("AAWgnIgDABQgVALgMATQgMAVAHAXIACAF");
	this.shape_18.setTransform(4.3594,19.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#020303").ss(0.2,1,1).p("AAgg/QAEAKgYARQgdAUgCAEQgJAOgDAWQgDAXAFAR");
	this.shape_19.setTransform(3.2543,17.525);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").ss(0.2).p("AAsgiQgPgQgRgFQgNgEgPAEQgQADgKAMQgRASAEAfQADAUAKALQAIAJANAFQATAGAQgFQAMgDALgJQAVgTgBgXIgBgD");
	this.shape_20.setTransform(8.6882,5.752);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#ECF6F9").s().p("AgDAbQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAIgBgGIgBADIgBACQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAAAAAAAIgCgDQgCgEAAgGIgBgKIgEgIQgDgGADgFQADgEAFgDQAHgEAFACIACABIABAEIAAAKQAAAEACACIAFACIAEADQABACAEABQADACABACQgEADgFgBQgEgBgCgEQACAFACAJQABAGgDAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBgBAAQgEgEgBgEQACAHgEAFIgCABIAAgBg");
	this.shape_21.setTransform(2.4375,25.6867);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AED9DC").s().p("AgIARQgGgCgDgFQgDgGAAgFQABgKAIgFIAgAaIgSAGIgIABIgDAAg");
	this.shape_22.setTransform(8.0969,5.8281);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgcgIIAVgJIAAAAIAkAbIgOAEIgBAAIgKAEg");
	this.shape_23.setTransform(9.8,5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AED9DC").s().p("AgDgDIAFAAIACAHg");
	this.shape_24.setTransform(12.9,2.625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AED9DC").s().p("AAKARIgjgbIAJgDIAZgHIAIAIIAJAXQgEACgHACIgPAGg");
	this.shape_25.setTransform(11.65,4.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B4B4B4").s().p("AgVA2QgNgFgIgJQgKgLgDgUQgEgfARgSQAKgMAQgDQAPgEANAEQARAFAPAQIgGAAIgZAGIgJADIgBABIgUAIQgIAGgBAJQAAAFADAGQADAFAGACQADACAJgDIAbgJIABAAIADgBIAQgFQAHgBAEgDIAAABIABADQABAXgVATQgLAJgMADQgHADgHAAQgLAAgKgEg");
	this.shape_26.setTransform(8.6882,5.752);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AED9DC").s().p("AgHgLIAPANIgBAEIgEAEIgCACg");
	this.shape_27.setTransform(14.125,4.175);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#AED9DC").s().p("AgGgCIgDgIQAFAAAEACQAFAEACAFQADAEgBAGg");
	this.shape_28.setTransform(14.0042,3.325);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#AD7E53").s().p("AgaAPIAZgRIAYgTIADAFIABACQgKALgNAJQgMAJgNAHg");
	this.shape_29.setTransform(14.6,21);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#87A8AA").s().p("Ah1AjQADgWAJgOQACgEAegUQAYgRgEgKQATAHARgFQAMgEAKgJIAAABQASgJAVgCQAogDAjAUIgBAAQgFAEgBAIIABAHIgBAAQgagKgUAAQgXgBgWAKQAMAiARAcIgZATIgZARIAAgBIgcglIgOgOQgIgIgEgGIgBgCQgWAJgMAUQgMAVAHAYQgFgCgIAEQgEACgEAFQgFgRADgXg");
	this.shape_30.setTransform(11.8688,16.4489);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#AD7E53").s().p("AgFA1QgRgGgFgLQgDgFgBgQQAAgcgEgbQAKgKAOgEIAAAAIASA7QADAHADACIAKABQAHABAEAGQADAGgBAHQgBANgPAFQgGACgFAAQgHAAgHgCg");
	this.shape_31.setTransform(21.0361,38.4691);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#295075").s().p("AgcA8QgCgSgFgNQgEgJgMgUIgZgkQANgHANgKQANgJAKgLIAEAHIAZADQAQACAKgBQAOgBAEACQAFACAFAIIAUAbIABAAQgNAHgGAOIgBABIgKgWQgEgIgEgDQgDgCgJgBIgwgFIgIAAQgFABgFAHQgGAIgEACIAWAYIAHAIIAFAMIANAoIAAABIAAAAQgOAEgKAKg");
	this.shape_32.setTransform(20.1,26.925);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#ECF6F9").s().p("AAKAUQgGgBgKgIIgKgCQgIgCgBgHIgBgHQABgHAFgFIABAAIACgBIADACIAIAFQAEADACgBIAEgCIAFgBQAHgEAEABQAAAFgDADQgDACgEAAQAGABAHAEQAFACgBACQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAgBABQgFABgDgCQAFADABAHIgBACIgCAAIgFgCIACACIABACQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBABIgBAAIgCgBg");
	this.shape_33.setTransform(25.7833,12.6833);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AD7E53").s().p("AgOAxQgTgvgPgdIABgBQAFgOAOgHIAhAtQAEAEgBAEQAMgDALABQAHAAAFADQAGAEAAAFQAAAEgEAEQgJANgSAGQgLAFgVAEg");
	this.shape_34.setTransform(30.75,29.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgLgKIAXAV");
	this.shape_35.setTransform(13.725,3.325);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgcgIIAgAaIAKgDIAAAAIAPgFIgkgbIAAAAg");
	this.shape_36.setTransform(9.8,5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgBAAIACAA");
	this.shape_37.setTransform(10.9,6.55);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgEAUQALgDAEgCQAHgCAEgDIACgBQACgBACgDIABgEQABgFgDgEQgCgGgGgDQgEgCgFAAIgFAAQgHABgRAFIgKAD");
	this.shape_38.setTransform(12.0042,4.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#99FF99").ss(0.5,1,1).p("AAJgVIgUAJQgIAFgBAJQAAAGADAGQADAFAGACQADABAIgCIASgG");
	this.shape_39.setTransform(8.0969,5.4031);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgIALQAGgNAMgI");
	this.shape_40.setTransform(26.85,25.475);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgLAHQAKgJANgE");
	this.shape_41.setTransform(18.6,33.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#99FF99").ss(0.5,1,1).p("AACACIgDgC");
	this.shape_42.setTransform(26.95,13.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#99FF99").ss(0.5,1,1).p("AANAOIACACIABACQAAACgDABQgBAAgCgBQgGgBgKgIIgKgCQgIgCgBgHIgBgHQABgHAFgFIABAAIACgBIADACIAIAFQAEADACgBIAEgCIAFgBQAHgEAEABQAAAFgDADQgDACgEAAQAGABAHAEQAFACgBACQgBACgDABQgFABgDgCQAFADABAHQAAABgBABIgCAAg");
	this.shape_43.setTransform(25.7833,12.6833);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#99FF99").ss(0.5,1,1).p("AAAACIAAgD");
	this.shape_44.setTransform(1.75,27.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgGAUIgBADIgBACQgCABgBgBQgCgCAAgBQgCgEAAgGQAAgHgBgDIgEgIQgDgGADgFQADgEAFgDQAHgEAFACIACABIABAEIAAAKQAAAEACACQADABACABIAEADQABACAEABQADACABACQgEADgFgBQgEgBgCgEQACAFACAJQABAGgDAAQgBABgDgCQgEgEgBgEQACAHgEAFQgBABgBgBQgCAAAAgBg");
	this.shape_45.setTransform(2.4375,25.6867);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgXASQANgHAMgJQANgJAKgL");
	this.shape_46.setTransform(14.85,21.35);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgYASIAYgRQAPgKAKgI");
	this.shape_47.setTransform(14.4,20.625);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#99FF99").ss(0.5,1,1).p("AguAFIADgBQAWgJAWABQAUAAAaAJ");
	this.shape_48.setTransform(18.375,12.1205);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#99FF99").ss(0.5,1,1).p("AA5AJQgigTgoADQgVACgSAI");
	this.shape_49.setTransform(18.05,9.8489);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#99FF99").ss(0.5,1,1).p("AgSgmQAMAiARAcIAIAO");
	this.shape_50.setTransform(15.85,16.35);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#99FF99").ss(0.5,1,1).p("AAaBHQAWgEALgEQASgHAJgNQADgEAAgEQAAgFgGgEQgFgDgGAAQgMAAgMACQACgEgFgFIgigsIAAAAIgTgaQgHgIgEgCQgEgDgPABQgJABgQgCIgZgD");
	this.shape_51.setTransform(26.7,27.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#99FF99").ss(0.5,1,1).p("AhyiMQAFAHAIAIQAJAJAEAFIA7BTQANAUAEAIQAEANADASIACAOQADAcAAAdQABAPADAGQAFALARAFQAPAFALgEQAPgGABgNQABgGgDgGQgEgGgHgBIgKgCQgCgBgEgIIgTg8IAAgBIgMgnQgFgLAAgBIgHgJQgTgUgDgEQAEgCAGgIQAFgHAFgBQACAAAFAAIAxAFQAJABAEACQADADAEAIIAKAWQAPAeATAu");
	this.shape_52.setTransform(17.8,29.8441);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#99FF99").ss(0.5,1,1).p("AAWgnIgDABQgVALgMATQgMAVAHAXIACAF");
	this.shape_53.setTransform(4.3594,19.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#99FF99").ss(0.5,1,1).p("AAgg/QAEAKgYARQgdAUgCAEQgJAOgDAWQgDAXAFAR");
	this.shape_54.setTransform(3.2543,17.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#99FF99").ss(0.5).p("AAsgiQgPgQgRgFQgNgEgPAEQgQADgKAMQgRASAEAfQADAUAKALQAIAJANAFQATAGAQgFQAMgDALgJQAVgTgBgXIgBgD");
	this.shape_55.setTransform(8.6882,5.752);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,37.7,46);


(lib.empty = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Do = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").p("AgSgvIAMBWIAZADIgMhL");
	this.shape.setTransform(40.9981,102.9016);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").p("AgEAfIgTg7IAcgJQACAnARAlIACAD");
	this.shape_1.setTransform(53.078,93.5151);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").p("AAEg8QgFABgFAEQgFAFgCAHQgDAKACARQADA0AFAYQAOgDAFgKQAEgIgBgQQgLhTgBAAg");
	this.shape_2.setTransform(52.07,67.7276);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").p("AAZg2QgQgEgKAOQgGAIgCAPQgPBLAAABQAegBAIgYQACgFAFgnQAFgogBAAg");
	this.shape_3.setTransform(65.0773,45.5512);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").p("AApgiIgWgNQg3BWgEAIQAQAHAKgIQADgDANgUg");
	this.shape_4.setTransform(92.35,18.2,1,1,0,0,0,-0.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").p("AA5gBQgEgUgKgEQgIgDgPAFIhKAYQALAVAEAEQAHAFAUgIQAGgCA/gWg");
	this.shape_5.setTransform(115.1253,24.8938);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").p("AAtADIgSghQgOAGgnANQgdAPANAbg");
	this.shape_6.setTransform(122.25,12.15,1,1,0,0,0,-0.1,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").p("AgDA/IAkgQQgHgSgOgkQgNghgLgVQgRAEgEALQgDAJAFARQACAHAaBMg");
	this.shape_7.setTransform(129.7167,43.968);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").p("AgHg0QAEADADAIIAeBZIgVAGIgfhHQgBgEgFgJQgEgJADgFQACgGAHgCQAIgDAFADg");
	this.shape_8.setTransform(114.1701,79.0944);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").p("AgvAbQAEACAKgCQAugPAtgXIgMgPQgHADgrAPQgeAKgVAFQACACABAIQAAAHAFADg");
	this.shape_9.setTransform(49.679,118.5306);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").p("AgfASQgGAHAAAHQAAAFADADQAEADAEgCQAdgWAZgbQALgMgBgNQgBgNgRAKQgNAIgOARQgEAFgUAYg");
	this.shape_10.setTransform(64.6543,131.5353);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").p("AgmAAQAEADAJACIBFAOQADgFgBgHQgCgGgFgDQgIgGgQgCQgHgBgQgFQgPgDgJABQgJABgDAFQgEAHAKAFg");
	this.shape_11.setTransform(43.6271,136.2219);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").p("AEKibQgWgJgYANQgWAOgKAYQgOAkASA9QANArABAEQAHAbAAAWQgCAagMAWQgOAXgWAHQgmAKgtgjQgMgIgYgTQgVgPgSgGQgPgFgWAAQgMABgcADIi/AYIgBAAIgEgD");
	this.shape_12.setTransform(69,146.1412);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221F20").p("AAxgLQgUAKgbAGQgZAGgZAA");
	this.shape_13.setTransform(111.025,128.6776);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221F20").p("AAJhPQANAogHAqQgHAsgZAh");
	this.shape_14.setTransform(126.1376,112.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221F20").p("AA+lsIABAEQAJAmA9A8QA7A6AIApQAEAZgJAZQgIAZgTARQgTARgaAFQgZAGgZgHQgOgEgdgNQgZgIgPAIQgRAIgFAWQgFAUAHATQAEANAMAXQAMAXADANQAJAZgFAcQgEAbgPAVQgPAWgZAMQgZAMgaAAQgHASAVAkQAWAkgIASQgJAVgsAFIhKAG");
	this.shape_15.setTransform(142.5421,68.6384);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221F20").p("AgChPQAQAKANANQAeAeALAkQAIAZgGASQgFAQgNAHQgIAEgHgBQgQAAgPgSQgEgEgGgMQgHgKgFgFQgLgMgQgGQgQgFgRAC");
	this.shape_16.setTransform(143.6161,24.9528);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221F20").p("AgQhEQAeBAACBIIAAAD");
	this.shape_17.setTransform(144.75,12.491);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221F20").p("Ag/kvQARgWAbgOQAZgOAdgBQAdgBAbALQAcALATAVIAKAMQAfApACA9QABAygWBHQhHDqibCPQhBA6g2gD");
	this.shape_18.setTransform(89.8111,68.7057);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221F20").p("AirE/QgagYgIgfQgIgdAGghQAGgeASgbQAfgwA/ggQAKgFAVgLQARgJALgIQAggYADgfQACgNgFgQQgCgFgHgYQgMgmALgVQAGgLAQgMQAWgPAFgFQANgNAKgcQAMgkAFgIQASggAngNQAngMAhAQ");
	this.shape_19.setTransform(82.7043,69.8009);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").p("AuBkhQA3AnBDApQAmAYAuAaIAaAOQDBBqDLBDQAqAOAUAKQAhARARAXQAJANAJAUQAIAXAFAMIACAFQANAfANANQAHAHAJACQAQAEASgKQASgKAGgPQACgEAAgHQAAgOABgDIACgSQAEgTAGgFQAGgFALADQAUAHAQAFIArAMQAcAJBJAOQBmASAkAIIAgAGQAuAHCyAWQAYAEAMgLQABgBAEgGQAEgEAEgDQAMgGAHABQAJABALAKQAHAGADAJQADAJADADQAJAHAWgEQAWgDAIAHQACACACAFQADAJAGALQAKAUAFAAQAFABAGgIQAGgHACgJQAEgOgKgYQgKgXAFgNQADgKAIgHQAKgIAKAAIAFAAQAGACAHADQAIAEAWgTQAYgWAHgcQAFgSgEgVQgFgXgSgiQgfg6ggglQg7hGhSglQgpgSgwgK");
	this.shape_20.setTransform(108.3641,113.9016);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221F20").p("AoAltQgfgEgjgDQg8gEg+AAQhBAAgeAHQghAHgUAUQgXAYgFAcQgIApAjAvQAXAgAwApQA2AuA7AmQBMAyBxA3IC9BUQCGA6BvAkQA+AVBCARQA5APBiAXIBEAPQCFAeBBAKQBwAPBfgNQBNgKAngVQAcgQAMgYQAbg5g+hcQglg2hAgdQglgSgqgH");
	this.shape_21.setTransform(100.0032,89.9215);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221F20").p("AD9jaIjWgPQhUgHguAGQhLAMgqAqQgYAYgKAgQgKAiAKAfQAKAiA7A1QA4A0AHAnQACALAAATQgBAYABAGQABAlAVAQQANAJAQgEQARgDAEgOQACgKgFgNQgDgHgIgPQgMgXABgbQABgRAGgQ");
	this.shape_22.setTransform(24.7867,72.4425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221F20").p("AHlJ3QBiiXAximIAGgWQAPg1AMhCQAcingEheQgFilhPh+QhRiBh1g/QgegQgbgKQjqhYkdCqQhXA1hIBQQgtAyhVB4QggAtgeAvIgPAaIgBAAQhcCZg9Cn");
	this.shape_23.setTransform(102.3845,62.7994);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221F20").p("An2BCQBABLBiAmQBdAlBngEQBhgEBggmQBagkBVg+QBLg3BKhNQA5g8BBhTQAEgFADgF");
	this.shape_24.setTransform(93.9077,155.0468);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221F20").p("Ag4lcQgXCUAEB3QAFCPArB0QANAhACARQAAAJgBAOQgCATAAAEQAAAUAHARQAIATAOAJQAOAIASgDQASgEAIgNIADgIQAEgPgLgXQgDgHgGgOQgGgSACgTQABgUAKgQ");
	this.shape_25.setTransform(35.8141,128.8877);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDDF4F").s().p("AgGArIgMhWIABgCIAaAOIgBACIALBLg");
	this.shape_26.setTransform(40.95,102.525);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#459F55").s().p("AgZAFQgJgCgEgCQgKgGAEgGQADgGAJgBQAJAAAPADIAXAFQAQACAIAGQAFADACAHQABAHgDAEg");
	this.shape_27.setTransform(43.6271,136.1964);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E17DAC").s().p("AAZARQgegEgjgDIACgaIBMAGIADABIgQAag");
	this.shape_28.setTransform(46.225,51.65);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#459F55").s().p("AgOgQQgCgQADgLQACgGAFgFQAFgFAFgBQABAAALBUQABAPgEAJQgFAJgOAEQgFgZgDg0g");
	this.shape_29.setTransform(52.07,67.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DA3832").s().p("AgHAXIgQg0IAcgJQACAoARAkg");
	this.shape_30.setTransform(53.075,93.55);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#3974B7").s().p("AgwAaQgFgCAAgIQgBgIgCgBQAVgGAegKIAygRIAMAOQgtAXguAPIgJABIgFgBg");
	this.shape_31.setTransform(49.775,118.575);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3974B7").s().p("AgJgUQACgPAGgJQAKgNAQADIgEAoQgFAogCAFQgIAXgeACIAPhMg");
	this.shape_32.setTransform(65.0773,45.539);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#DA3832").s().p("AgiAoQgDgDAAgFQAAgHAGgHIAYgdQAOgRANgIQARgKABANQABANgLAMQgZAbgdAWIgDAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAgBAAg");
	this.shape_33.setTransform(64.6543,131.5353);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D92D8A").s().p("Aj3FaQgPgJgIgTQgHgRAAgUIACgXIABgXQgCgRgNghQgrh0gFiPQgEh3AXiUIAHgKQAmAXAtAaIgBADIAMBXIAaADIgLhNIABgBQDBBpDJBEQArAPATAJQAiARARAYQAJAMAIAUIANAiIADAFIgDABQgWgJgYAOQgXANgJAYQgOAkASA+IAOAvQAHAcgBAVQgBAbgMAVQgOAXgXAHQglALgtgjIgkgbQgVgQgSgFQgQgGgWABIgnADIi/AZQALAXgEAPIgDAIQgIANgSAEIgKABQgMAAgKgGgAjYA9QgJABgDAGQgEAGAKAHQAEACAJACIBGAOQADgEgBgHQgCgHgFgEQgIgGgQgCIgYgFQgNgDgIAAIgDAAgAAugCQgNAGgPASIgWAdQgHAIAAAHQAAAEAEADQAEADADgCQAdgWAagbQAKgMgBgNQgBgHgFAAQgFAAgHAFgAh/hpQgfALgUAGQABABABAIQABAIAEACQAEACAKgCQAwgPAsgYIgMgOIgyARg");
	this.shape_34.setTransform(62.0454,128.151);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FDDF4F").s().p("AgoAuQAEgIA3hWIAWANIgnA5QgNAUgDADQgFAEgHAAQgGAAgIgDg");
	this.shape_35.setTransform(92.475,18.3383);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EEC87A").s().p("AjAEzIAAgBQgZgYgJgfQgIgdAHghQAGgeASgbQAegwBAggIAegQQASgJALgIQAhgXADggQABgNgFgQIgKgdQgMgmALgVQAGgLASgMQAVgPAFgFQAMgNAKgcQANgkAEgIQATggAmgNQAngMAiAQIAJgCQAfApABA9QABAygVBHQhHDqicCPQhAA6g2gDIgBABg");
	this.shape_36.setTransform(84.7815,71.1259);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D92D8A").s().p("AgtAEQADgSAGgFQAGgEANADIAiALIAgAJQgUAJgbAHQgZAGgZAAg");
	this.shape_37.setTransform(111.025,127.565);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#3974B7").s().p("AgVgQIgGgOQgEgJADgFQACgFAHgDQAIgCAFADQAEADACAIIAfBYIgVAGg");
	this.shape_38.setTransform(114.0979,79.0432);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#459F55").s().p("AgoAaQgEgEgLgVIBKgYQAPgFAIADQAKAEAEAUIhFAYQgMAFgHAAQgFAAgDgCg");
	this.shape_39.setTransform(115.225,24.8938);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#DA3832").s().p("AgZgLIA1gTIASAhIhXAcQgNgbAdgPg");
	this.shape_40.setTransform(122.2868,12.175);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FDDF4F").s().p("AgegVQgFgQADgJQAEgLARgEQALAUANAhIAVA3IgkAPIgchTg");
	this.shape_41.setTransform(129.64,44.025);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EEC87A").s().p("AlPDTQhignhAhKIgGgBIADgIQAEgPgLgXIC/gZIAogDQAWgBAQAGQASAFAVAQIAkAbQAtAjAlgLQAXgHAOgXQAMgVABgbQABgVgHgbIgOgvQgSg+AOgkQAJgYAXgNQAXgOAWAJIADgBQANAgAMAMQAHAHAKADQAPADASgJQASgKAGgPQACgFAAgHIABgRQAZAAAagGQAbgHAUgKIALAEQAdAJBJANQBmATAjAHIAhAGIgBAEQhFBZg8BAQhKBNhLA3QhVA+haAjQhgAnhhADIgWABQhbAAhTghg");
	this.shape_42.setTransform(93.425,151.8744);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#D92D8A").s().p("ABqI5QhCgRg+gVQhvgkiGg6IAAgBQA2ADBBg6QCbiPBHjrQAWhGgBgyQgCg9gfgpIgJACQghgQgmAMQgnANgSAgQgFAIgMAkQgKAcgNANQgFAFgWAPQgRAMgGALQgLAVAMAlIAKAdQAFAQgCANQgDAgghAYQgLAIgRAJIgfAQQg/AggfAwQgSAbgGAeQgGAhAIAdQAIAfAaAYIgBABIhjgsQgSglgBgoIgeAJIARA1Qhxg3hMgzQA8imBdiZIAAAAIAQgaQAegwAfgtQBVh3AugzQBIhPBXg1QEdirDqBZQAaAKAfAQQAfBAABBJQAeAdALAlQAIAZgGATQgFAPgNAHQAJAmA9A8QA7A6AIApQAEAZgJAZQgIAZgTAQQgTARgaAFQgZAGgZgHQgOgEgdgNQgZgIgQAIQgRAIgFAWQgFAUAHAUQAEANAMAXQAMAXAEANQAJAZgFAcQgEAbgQAVQgPAWgZAMQgZAMgaAAQgHASAVAkQAWAkgIASQgJAVgsAFIgZACIABAGQANAogHArQgHArgaAhIgCAFQhigXg5gPgACNCDQgHADgDAFQgCAFADAJIAHAOIAgBHIAUgGIgfhZQgCgIgFgDQgCgCgEAAIgGABgAnSAPQgFAFgCAHQgDAKACARQADA1AGAYQAOgDAFgKQAEgIgBgQQgKhUgBAAQgGABgGAEgAlLjDQgGAJgCAPIgPBNQAggCAIgXQABgFAFgpIAFgoIgHgBQgMAAgJALgAEbjUQgDAJAFAQIAcBUIAlgPIgVg4QgOghgLgUQgRAEgEALgAC/l9IhLAZQALAWAEADQAHAFAUgHIBGgZQgEgUgKgFIgHgBQgGAAgKADgAhfl4QAQAHAJgIQAEgDANgUIAng6IgVgNQg4BXgEAIgADZnvQgdAPAMAcIBZgcIgSgjIg2AUg");
	this.shape_43.setTransform(98.014,60.638);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EEC87A").s().p("AinI3IhEgQIACgFQAaghAHgrQAHgqgNgoIgBgHIAZgCQAsgEAJgWQAIgSgWgkQgVgkAHgSQAaAAAZgMQAZgMAPgWQAQgVAEgbQAFgbgJgZQgEgOgMgWQgMgYgEgMQgHgVAFgTQAFgWARgIQAQgIAZAIQAcANAOAEQAZAHAZgGQAagFATgRQATgQAIgaQAJgYgEgaQgIgpg7g6Qg9g8gJgmQANgGAFgQQAGgSgIgaQgLglgdgdQgBhJgfhAQB0A/BQCBQBPB+AGCkQADBggcClQgMBDgOA0IgHAXQgxCmhiCWIgBAKQhAgKiFgdg");
	this.shape_44.setTransform(147.7444,66.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E17DAC").s().p("ANlHXQgFAAgKgUIgJgUQgCgFgCgCQgIgHgWADQgWAEgJgHQgDgDgDgJQgDgJgHgGQgLgKgJgBQgHgBgMAGQgEADgEAEIgFAHQgMALgYgEQiygWgugHIgggGQgkgIhmgSQhJgOgcgJIgrgMIgkgMQgMgDgGAFQgGAFgEATIgCASIgBARQAAAHgCAEQgGAPgSAKQgSAKgQgEQgJgCgGgHQgNgNgNgfIgCgFIgNgjQgJgUgJgNQgRgXghgRQgUgKgqgOQjLhEjBhqIgagOQgugZgmgYQhDgpg3gnQgBAbAMAXIALAWQAFANgCAKQgEANgRADQgQAEgNgIQgVgQgBglIAAgeQAAgTgCgLQgHgng4g0Qg7g2gKgiQgKgfAKgiQAKggAYgYQAqgqBLgMQAugGBVAHICJAKIgCAaQg9gEg9AAQhBAAgfAHQghAHgTAUQgYAYgFAcQgHApAiAvQAXAgAxApQA2AuA6AmQBNAzBwA2IC9BUQCHA6BuAkQA/AVBCARQA5APBiAXIBDAPQCGAeBBAKQBvAPBggNQBMgKAngVQAdgQALgYQAcg5g/hcQglg2hAgdQglgRgpgHIAGgXQAwAKApASQBSAkA7BGQAgAlAfA7QASAiAFAXQAEAVgFASQgHAcgYAWQgWATgIgEIgNgFIgFAAQgKAAgKAIQgIAHgDAKQgFANAKAXQAKAYgEAOQgCAJgGAHQgFAHgFAAIgBAAg");
	this.shape_45.setTransform(98.9752,95.7451);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#99FF99").p("AgSgvIAMBWIAZADIgMhL");
	this.shape_46.setTransform(40.9981,102.9016);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#99FF99").p("AgEAfIgTg7IAcgJQACAnARAlIACAD");
	this.shape_47.setTransform(53.078,93.5151);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#99FF99").p("AAEg8QgFABgFAEQgFAFgCAHQgDAKACARQADA0AFAYQAOgDAFgKQAEgIgBgQQgLhTgBAAg");
	this.shape_48.setTransform(52.07,67.7276);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#99FF99").p("AAZg2QgQgEgKAOQgGAIgCAPQgPBLAAABQAegBAIgYQACgFAFgnQAFgogBAAg");
	this.shape_49.setTransform(65.0773,45.5512);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#99FF99").p("AApgiIgWgNQg3BWgEAIQAQAHAKgIQADgDANgUg");
	this.shape_50.setTransform(92.35,18.2,1,1,0,0,0,-0.1,0);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#99FF99").p("AA5gBQgEgUgKgEQgIgDgPAFIhKAYQALAVAEAEQAHAFAUgIQAGgCA/gWg");
	this.shape_51.setTransform(115.1253,24.8938);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#99FF99").p("AAtADIgSghQgOAGgnANQgdAPANAbg");
	this.shape_52.setTransform(122.25,12.15,1,1,0,0,0,-0.1,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#99FF99").p("AgDA/IAkgQQgHgSgOgkQgNghgLgVQgRAEgEALQgDAJAFARQACAHAaBMg");
	this.shape_53.setTransform(129.7167,43.968);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#99FF99").p("AgHg0QAEADADAIIAeBZIgVAGIgfhHQgBgEgFgJQgEgJADgFQACgGAHgCQAIgDAFADg");
	this.shape_54.setTransform(114.1701,79.0944);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#99FF99").p("AgvAbQAEACAKgCQAugPAtgXIgMgPQgHADgrAPQgeAKgVAFQACACABAIQAAAHAFADg");
	this.shape_55.setTransform(49.679,118.5306);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#99FF99").p("AgfASQgGAHAAAHQAAAFADADQAEADAEgCQAdgWAZgbQALgMgBgNQgBgNgRAKQgNAIgOARQgEAFgUAYg");
	this.shape_56.setTransform(64.6543,131.5353);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#99FF99").p("AgmAAQAEADAJACIBFAOQADgFgBgHQgCgGgFgDQgIgGgQgCQgHgBgQgFQgPgDgJABQgJABgDAFQgEAHAKAFg");
	this.shape_57.setTransform(43.6271,136.2219);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#99FF99").p("AEKibQgWgJgYANQgWAOgKAYQgOAkASA9QANArABAEQAHAbAAAWQgCAagMAWQgOAXgWAHQgmAKgtgjQgMgIgYgTQgVgPgSgGQgPgFgWAAQgMABgcADIi/AYIgBAAIgEgD");
	this.shape_58.setTransform(69,146.1412);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#99FF99").p("AAxgLQgUAKgbAGQgZAGgZAA");
	this.shape_59.setTransform(111.025,128.6775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#99FF99").p("AAJhPQANAogHAqQgHAsgZAh");
	this.shape_60.setTransform(126.1376,112.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#99FF99").p("AA+lsIABAEQAJAmA9A8QA7A6AIApQAEAZgJAZQgIAZgTARQgTARgaAFQgZAGgZgHQgOgEgdgNQgZgIgPAIQgRAIgFAWQgFAUAHATQAEANAMAXQAMAXADANQAJAZgFAcQgEAbgPAVQgPAWgZAMQgZAMgaAAQgHASAVAkQAWAkgIASQgJAVgsAFIhKAG");
	this.shape_61.setTransform(142.5421,68.6384);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#99FF99").p("AgChPQAQAKANANQAeAeALAkQAIAZgGASQgFAQgNAHQgIAEgHgBQgQAAgPgSQgEgEgGgMQgHgKgFgFQgLgMgQgGQgQgFgRAC");
	this.shape_62.setTransform(143.6161,24.9528);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#99FF99").p("AgQhEQAeBAACBIIAAAD");
	this.shape_63.setTransform(144.75,12.491);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#99FF99").p("Ag/kvQARgWAbgOQAZgOAdgBQAdgBAbALQAcALATAVIAKAMQAfApACA9QABAygWBHQhHDqibCPQhBA6g2gD");
	this.shape_64.setTransform(89.8111,68.7057);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#99FF99").p("AirE/QgagYgIgfQgIgdAGghQAGgeASgbQAfgwA/ggQAKgFAVgLQARgJALgIQAggYADgfQACgNgFgQQgCgFgHgYQgMgmALgVQAGgLAQgMQAWgPAFgFQANgNAKgcQAMgkAFgIQASggAngNQAngMAhAQ");
	this.shape_65.setTransform(82.7043,69.8009);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#99FF99").p("AuBkhQA3AnBDApQAmAYAuAaIAaAOQDBBqDLBDQAqAOAUAKQAhARARAXQAJANAJAUQAIAXAFAMIACAFQANAfANANQAHAHAJACQAQAEASgKQASgKAGgPQACgEAAgHQAAgOABgDIACgSQAEgTAGgFQAGgFALADQAUAHAQAFIArAMQAcAJBJAOQBmASAkAIIAgAGQAuAHCyAWQAYAEAMgLQABgBAEgGQAEgEAEgDQAMgGAHABQAJABALAKQAHAGADAJQADAJADADQAJAHAWgEQAWgDAIAHQACACACAFQADAJAGALQAKAUAFAAQAFABAGgIQAGgHACgJQAEgOgKgYQgKgXAFgNQADgKAIgHQAKgIAKAAIAFAAQAGACAHADQAIAEAWgTQAYgWAHgcQAFgSgEgVQgFgXgSgiQgfg6ggglQg7hGhSglQgpgSgwgK");
	this.shape_66.setTransform(108.3641,113.9016);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#99FF99").p("AoAltQgfgEgjgDQg8gEg+AAQhBAAgeAHQghAHgUAUQgXAYgFAcQgIApAjAvQAXAgAwApQA2AuA7AmQBMAyBxA3IC9BUQCGA6BvAkQA+AVBCARQA5APBiAXIBEAPQCFAeBBAKQBwAPBfgNQBNgKAngVQAcgQAMgYQAbg5g+hcQglg2hAgdQglgSgqgH");
	this.shape_67.setTransform(100.0032,89.9215);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#99FF99").p("AD9jaIjWgPQhUgHguAGQhLAMgqAqQgYAYgKAgQgKAiAKAfQAKAiA7A1QA4A0AHAnQACALAAATQgBAYABAGQABAlAVAQQANAJAQgEQARgDAEgOQACgKgFgNQgDgHgIgPQgMgXABgbQABgRAGgQ");
	this.shape_68.setTransform(24.7866,72.4425);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#99FF99").p("AHlJ3QBiiXAximIAGgWQAPg1AMhCQAcingEheQgFilhPh+QhRiBh1g/QgegQgbgKQjqhYkdCqQhXA1hIBQQgtAyhVB4QggAtgeAvIgPAaIgBAAQhcCZg9Cn");
	this.shape_69.setTransform(102.3845,62.7994);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#99FF99").p("An2BCQBABLBiAmQBdAlBngEQBhgEBggmQBagkBVg+QBLg3BKhNQA5g8BBhTQAEgFADgF");
	this.shape_70.setTransform(93.9077,155.0468);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#99FF99").p("Ag4lcQgXCUAEB3QAFCPArB0QANAhACARQAAAJgBAOQgCATAAAEQAAAUAHARQAIATAOAJQAOAIASgDQASgEAIgNIADgIQAEgPgLgXQgDgHgGgOQgGgSACgTQABgUAKgQ");
	this.shape_71.setTransform(35.8141,128.8877);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:122.2868}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40,p:{x:122.2867}},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,200,178.3);


(lib.DoMan = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5,1,1).p("Ah0BWQARAbAiANQAfALAjgBQAwgCAegVQAfgVAQgnQARgsgMgqQgOg4gngaQgdgRgcgDQgjgDgkARQgSAJgRANQgkAegKAmQgEAOAAAXQgBAyAUAeg");
	this.shape.setTransform(-0.342,-5.5185);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").ss(0.5,1,1).p("AgJgBQgCAGAGAEQAFADAFgDQAFgDABgGQABgGgFgDQgFgCgEADQgGADgBAEg");
	this.shape_1.setTransform(-11.9067,-24.1819);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").ss(0.5,1,1).p("AgdgbQgKAIgEANQgFAMAFAMQAGAQARAHQAJACAHAAQAHAAAKgCQAXgIAIgWQAIgVgOgTQgLgPgWACQgTACgPANg");
	this.shape_2.setTransform(-11.7054,-24.1679);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").ss(0.5,1,1).p("AgKgBQgBAGAGAEQAFADAFgDQAEgDABgGQACgGgFgDQgFgCgFADQgGADgBAEg");
	this.shape_3.setTransform(13.7523,-23.1319);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").ss(0.5,1,1).p("AgrASQAGAQARAHQARAFAQgGQAXgHAIgWQAIgVgOgUQgLgOgWACQgTACgPANQgKAIgEANQgFAMAFAMg");
	this.shape_4.setTransform(14.3446,-23.1119);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").ss(0.5,1,1).p("AhPgEIACAAQA3AKA5gBIArgDIACgB");
	this.shape_5.setTransform(-0.35,33.059);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").ss(0.5,1,1).p("AAPiHQgrCfgNBFQgFAiAKAHQAHAEAMgEQAMgEAHgJQAMgNACgUQAFgkAWho");
	this.shape_6.setTransform(-34.1476,23.0191);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").ss(0.5,1,1).p("AgRjgQAiELAOBuQg3ADgyATIgGACQgaAMAAASQgBAJAIAIQAHAIALACQAMADAbgGICWglQgYhTgUiBQgShygJhm");
	this.shape_7.setTransform(9.2485,55.7474);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").ss(0.5,1,1).p("AAqjBQAPC5AzCvIiWAlQgOADgFABQgMABgIgCQgLgCgHgHQgIgIABgKQAAgTAggNQA1gUA0gCIgrlO");
	this.shape_8.setTransform(-12.2515,51.9571);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").ss(0.5,1,1).p("AgMAwQAaAJAcgIQAPgFAJgHQANgKgKgKQgHgGgSgEQgWgFgFgCQgagMgRgVQgJgLgCgBQgGgGgHgBIgBAAQgGAAgGAFQgFAEgDAHQgEALAGAQQAGASAOAPQAOAPASAHQADACACAAg");
	this.shape_9.setTransform(-11.3246,11.0257);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").ss(0.5,1,1).p("AgPidIAoEZQABALgBADQgEAQgRADQgLACgRgG");
	this.shape_10.setTransform(33.8333,34.9597);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").ss(0.5,1,1).p("AgJiYIACAdQALC9AGBX");
	this.shape_11.setTransform(30.275,34.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").ss(0.5,1,1).p("AlZg9QBZBHBrAfIAQAFQBMATBPgDQAwgCBCgMQBsgVBmg0");
	this.shape_12.setTransform(1.725,14.0266);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221F20").ss(0.5,1,1).p("AhSAwQA/gPAvggQAggXAXgZ");
	this.shape_13.setTransform(21.2,27.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221F20").ss(0.5,1,1).p("AEnDnQAQgWAMgYQAEgKAJgWQAbhGgBhMQgBgsgLgpQgjiUhshGQgVgPgcgMQgxgUg1gFQhcgJhgAuQgTAIgYAPQglAXggAcQhRBIgZBdQgHAbgCAdQgBAMAAAgQgBAxAGAoIADAQQAJAuATAlQAGAMAIANQAyBLBiAi");
	this.shape_14.setTransform(2.7472,-3.9413);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EEC87A").s().p("AjJEYIgRgFIAHgXQAbAJAcgIQAPgFAJgHQANgKgKgKQgHgGgSgEQgWgFgFgCQgbgNgRgVIgLgMQgGgGgHgBIgBAAIAtgaQARAaAiANQAfAMAkgBQAwgCAegVQAegWAQgmQARgtgMgrQgOg2gmgbQgdgRgcgCQgkgDgkARQgSAIgRAOIghgsQAIAAAKgCQAXgIAIgWQAIgWgOgTQgLgPgWACQgUACgPANIhGgIQAfgcAlgXQAZgOASgIQBgguBeAIQAzAFAxAVQAdAMAVAOQBrBHAjCTQALApABAtQACBMgcBGQhlA1hsAVQhDAMguACIgZAAQhDAAhAgQgAA+izQgUACgOAMQgLAJgEAMQgEAOAEAMQAGAQASAGQARAGAQgGQAXgIAIgVQAJgWgPgUQgJgNgSAAIgGABg");
	this.shape_15.setTransform(8.5789,-9.3647);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EEC87A").s().p("Ah0B+QgGgpABgwIABgsQACgeAHgaQAZhdBRhJIBGAIQgLAIgEANQgEAOAEALQAGARASAGQAJADAHgBIAgAsQgkAegKAmQgEAOAAAYQgBAxAUAeIgtAbQgGgBgGAFQgFAEgCAHQgEALAFAQQAGATAOAPQAOAPATAIIAEABIgGAXQhqgfhZhIg");
	this.shape_16.setTransform(-21.1817,-4.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AA7E76").s().p("AgMAwIgFgCQgSgHgOgPQgOgPgGgSQgGgQAEgLQADgHAFgEQAGgFAGAAIABAAQAHABAGAGIALAMQARAVAaAMQAFACAWAFQASAEAHAGQAKAKgNAKQgJAHgPAFQgNAEgNAAQgPAAgNgFg");
	this.shape_17.setTransform(-11.3246,11.0257);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#3974B7").s().p("AgHFkQgKgCgHgIQgIgIAAgJQAAgSAbgMIAFgCQAygTA4gDIgyl5IgqADQg5ACg3gLQAPC4AzCvIiWAlIgUAEQgLACgJgCQgKgDgHgHQgIgIAAgJQAAgUAhgNQA0gTA2gCIgtlOQhigjgxhLQgJgMgFgMQgUglgIguIgDgQQBYBIBrAfIARAFQBMATBPgDQAvgCBDgMQBsgVBlg1IgNAfQgLAYgRAXIApEZIABAOQgEAQgSACQgMADgRgHIgSkUQgXAaggAXQgwAhg+APQAIBmASBxQAUCCAYBTIiWAlQgTAEgLAAIgJgBg");
	this.shape_18.setTransform(1.7583,43.5224);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#3974B7").s().p("AgkCGQgKgHAFgiQANhFArifIABAAQAIAuAUAlIgBAAQgWBogFAkQgCAUgMANQgHAJgMAEQgGACgEAAQgGAAgDgCg");
	this.shape_19.setTransform(-34.1226,23.0191);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgUApQgRgHgGgQQgFgMAFgMQAEgNAKgIQAPgNATgCQAWgCALAOQAOAUgIAVQgIAWgXAHQgJADgIAAQgIAAgIgCgAgIgIQgGADgBAEQgCAGAGAEQAGADAFgDQAEgDABgGQABgGgFgDIgDgBIgGACg");
	this.shape_20.setTransform(14.3446,-23.1119);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgUApQgRgHgGgQQgFgMAFgMQAEgNAKgIQAPgNATgCQAWgCALAPQAOATgIAVQgIAWgXAIQgKACgHAAQgHAAgJgCgAgEgIQgGADgBAEQgCAGAGAEQAGADAEgDQAFgDABgGQABgGgFgDIgFgBIgEACg");
	this.shape_21.setTransform(-11.7054,-24.1679);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#221F20").s().p("AgFAJQgGgEABgGQABgEAGgDQAFgDAFACQAFADgCAGQgBAGgEADQgDACgCAAQgCAAgDgCg");
	this.shape_22.setTransform(13.7523,-23.1319);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#221F20").s().p("AgFAJQgGgEACgGQABgEAGgDQAEgDAFACQAFADgBAGQgBAGgFADQgCACgDAAQgCAAgDgCg");
	this.shape_23.setTransform(-11.9067,-24.1819);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221F20").ss(0.5,1,1).p("AA3AIQgEgNgLgHQgNgIgNAFQAAAAgOAIQgHAEgGgBQgHgBgJgKQgIgKgIACQgHADgCAHQgBAGADAHQAIAOAOAEQAPAFAOgIQAKgJAGgDQANgCAHAFQAJAHAAAL");
	this.shape_24.setTransform(-3.6975,12.8076);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221F20").ss(0.5,1,1).p("AgWAAIAtAA");
	this.shape_25.setTransform(-38.1,-20.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221F20").ss(0.5,1,1).p("AgSgOQAWALAPAR");
	this.shape_26.setTransform(-37.125,-25.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221F20").ss(0.5,1,1).p("AgHgUQgBANAGANQAEAJAHAH");
	this.shape_27.setTransform(-35.3067,-29.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221F20").ss(0.5,1,1).p("AgJAAQgCAFAGADQAFAEAFgEQAEgCABgGQABgGgFgCQgEgCgEADQgGACgBAFg");
	this.shape_28.setTransform(11.3591,-25.865);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#221F20").ss(0.5,1,1).p("AgpARQAHAQAQAFQAPAFAPgFQAWgHAHgUQAIgUgNgTQgKgOgVADQgSABgOAMQgKAJgEALQgEAMAEALg");
	this.shape_29.setTransform(11.5363,-25.8249);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#221F20").ss(0.5,1,1).p("AgJAAQgBAGAFACQAFAEAFgEQAEgCABgGQABgGgFgCQgEgCgFADQgFACgBAFg");
	this.shape_30.setTransform(-12.4486,-25.8775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#221F20").ss(0.5,1,1).p("AgpARQAHAPAPAGQAPAGAQgGQAWgHAHgUQAIgUgOgTQgKgOgVADQgRABgOAMQgKAIgEAMQgEAMAEALg");
	this.shape_31.setTransform(-12.2786,-25.8124);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#221F20").ss(0.5,1,1).p("AgtBOIADAAIAHAAQAVgCAFgIQAFgIgCgKQgCgKgIgIQAKACAJgFQAJgFAEgJQAFgJgDgKQgCgKgIgHIAFAAQAKAAAJgFQAKgFADgJQADgIgFgLQgGgLgMgGIgEgC");
	this.shape_32.setTransform(-29.7937,-17.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#221F20").ss(0.5,1,1).p("AghgUQAGAUAVAMQASAMAWgE");
	this.shape_33.setTransform(16.325,-31.3105);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#221F20").ss(0.5,1,1).p("AgjAVQAVgCASgLQATgKANgS");
	this.shape_34.setTransform(-15.3,-31.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#221F20").ss(0.5,1,1).p("ABbATQABgLgQgQQgNgNgSgLQgNgHgTgBQgmgCgfgFQgSgDgIAHQgGAFgCAJQgBAHABACQAAAKAIAKQALAMAUANQAaAPAcAGQANADAOAAQAcABATgMIADgDQAIgFACgGg");
	this.shape_35.setTransform(-7.3442,11.7338);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#221F20").ss(0.5,1,1).p("ABaChQigkCgOgRQgEgHgBgHQgBgOAPgLQADgDAFgCQAKgDALAC");
	this.shape_36.setTransform(-41.6282,-5.3614);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#221F20").ss(0.5,1,1).p("AA6B0QgUgsglhFQglhCgUgtQgBgCAAgDQAAgCACAA");
	this.shape_37.setTransform(-40.0083,-8.75);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#221F20").ss(0.5,1,1).p("AiRCJIAGgFQAfgbA3gpQBDgzAhgYQA5grAdgbQAJgIABgDQAHgNgLgPQgJgKgRgG");
	this.shape_38.setTransform(41.573,9.85);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#221F20").ss(0.5,1,1).p("AhXBXQAigjA1gwQA0gvAigjQABgCABgDQAAgCgCgB");
	this.shape_39.setTransform(43.18,5.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#221F20").ss(0.5,1,1).p("AgSjkIAyGAQg2ACg1AUQghALAAAVQAAAKAIAIQAHAIAKACQAPADAagHICXglQgYhUgViDQgSh1gIhn");
	this.shape_40.setTransform(8.925,54.7847);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#221F20").ss(0.5,1,1).p("AgMjTIAsFUQg3ACg0AUQghAMAAAUQgBAKAIAIQAIAIAKACQAMADAdgGICXgmQg0i0gPi6IAAgC");
	this.shape_41.setTransform(-12.9265,50.9224);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#221F20").ss(0.5,1,1).p("Ag5gkIACACQAYAXAZAPQAgAWAgAL");
	this.shape_42.setTransform(-28.025,9.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#221F20").ss(0.5,1,1).p("AkkgHQAwAWAzANQBNAUBSgDQAugCBEgNQBwgVBmg1");
	this.shape_43.setTransform(7.15,14.17);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#221F20").ss(0.5,1,1).p("Agyh7QhEAigPA5QgEAQAAAWQgBAyAUAfQASAbAjAOQAeAMAkgBQAzgDAdgVQAggWAPgnQARgpgLgvQgOg4gpgbQgYgRgigDQghgDgmARg");
	this.shape_44.setTransform(-0.8323,-7.5187);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#221F20").ss(0.5,1,1).p("AhSAuQA5gUAqgZIBCgu");
	this.shape_45.setTransform(20.975,26.275);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#221F20").ss(0.5,1,1).p("AEeEXIAEgGIARgoQAshvgeh9QgliWhshHQhEgthVgIQhegJhiAvQggAOggAWQg5AngnAxIgDAE");
	this.shape_46.setTransform(5.7831,-13.623);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#221F20").ss(0.5,1,1).p("AgEhlQgEAgAAAiQABAjADAXQABASADAQQAFAcAEAR");
	this.shape_47.setTransform(-33.55,0.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#221F20").ss(0.5,1,1).p("AgFgTIALAn");
	this.shape_48.setTransform(-32.05,12.775);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#221F20").ss(0.5,1,1).p("AhVhKQALAXALAPQA2BOBfAg");
	this.shape_49.setTransform(-22.85,22.25);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#221F20").ss(0.5,1,1).p("AhQgEIACAAQA4AKA6gBQAXgBAUgDIACAA");
	this.shape_50.setTransform(-0.825,31.709);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3974B7").s().p("AhUhzQgEgHgBgIQgBgNAPgMQADgDAFgBIAcAJQAAAAgBAAQAAAAAAABQAAAAgBAAQAAABAAAAQAAABAAABQAAAAAAABQAAAAAAABQABAAAAABQAUAtAlBDQAlBEAUAsIACAAQABASADAQIAKAtQigkCgOgRg");
	this.shape_51.setTransform(-41.6282,-5.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#3974B7").s().p("AgIFpQgLgCgHgIQgIgIAAgKQABgVAhgLQA0gUA3gCIgzmAQgUACgXABQg6ACg3gLQAOC5A0C1IiYAlQgdAHgLgDQgLgDgHgHQgJgIABgKQAAgUAhgNQA1gTA3gDIgtlUQhhggg1hPQgMgPgKgXIgMgoIgKgtQAZAXAYAQQAhAVAhALQAvAXA0ANQBNAUBQgDQAwgCBEgNQBwgVBmg2IgSAoIgEAGIASATQg3AqgeAbIgyAhQgrAZg5AUQAJBnASB0QAVCEAYBUIiZAlQgSAFgNAAIgIgBg");
	this.shape_52.setTransform(1.45,42.4597);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3974B7").s().p("AhsBRQAigjA1gvQA0gwAigjQAAgBAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAQAAgBgBAAIALgHQARAFAJAKQALAPgHAOQgBACgJAJQgdAag5ArIhkBLg");
	this.shape_53.setTransform(45.273,6.175);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EEC87A").s().p("AiREcQgzgNgwgXQgggLgigVQgYgQgYgXQgDgQgCgSQgDgXgBgkQAAgiAEggIAHAAQAVgDAFgIQAFgHgCgJQgCgKgIgJQAKACAKgFQAJgEAEgKQAFgJgDgLQgCgKgIgGIAFAAQAKgBAJgEQAKgGADgIQADgJgFgLQgGgLgMgGQAngxA5gnQAhgWAfgOQBjgvBdAJQBVAIBFAtQBrBHAmCWQAeB9gsBvQhmA2hwAVQhEANgvACIgVAAQhGAAhDgRgAizC8QgFAFgCAJQgCAGABADQABAKAIAKQAKANAVAMQAZAPAdAGQANADAOAAQAcABATgMIAEgCQAIgGACgGIABgEQAAgMgPgQQgOgOgSgKQgNgIgTgBQgngCgegEIgKgBQgLAAgGAFgAhShUQhEAigPA4QgEAQAAAXQgBAyAVAfQARAbAjAOQAfAMAlgBQAxgDAdgVQAhgWAPgnQAQgpgLgwQgNg3gpgbQgYgRghgDIgLgBQgdAAghAPgAiNi3QgSABgOAMQgKAIgEAMQgEANAEALQAHAPAPAGQAPAGARgGQAWgHAHgUQAIgVgOgTQgIgMgRAAIgGABgABhi3QgTABgOAMQgKAJgEALQgEANAEALQAHAQAQAFQAPAFAQgFQAWgHAHgUQAIgVgNgTQgJgMgQAAIgGABg");
	this.shape_54.setTransform(2.3331,-11.428);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#AA7E76").s().p("AgzAaQgUgMgLgNQgIgJAAgKQgBgDABgGQACgJAGgFQAIgHASADQAfAEAmACQATABANAIQASAKANAOQAQAPgBAMQgDgOgLgHQgNgHgNAEIgOAHQgJAFgGgBQgGgCgJgJQgIgJgIACQgHACgBAIQgCAFAEAHQAHAOAOAFIgDAQQgcgGgagPg");
	this.shape_55.setTransform(-7.3442,11.58);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#AA7E76").s().p("AgLASQgOAAgNgDIADgQQAPAEAOgHQAKgJAGgDQANgCAHAFQAJAHAAAKIAAAAIgEADQgRALgYAAIgFAAg");
	this.shape_56.setTransform(-3.175,14.8398);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgSAmQgQgFgHgQQgEgLAEgMQAEgLAKgJQAOgMASgBQAVgDAKAOQANATgIAUQgHAUgWAHQgJADgHAAQgHAAgHgDgAgEgIQgFADgBAEQgCAGAGADQAEAEAFgEQAEgDABgFQABgGgEgDIgEgBQgCAAgDACg");
	this.shape_57.setTransform(11.5363,-25.8249);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgTAmQgPgGgHgPQgEgLAEgMQAEgMAKgIQAOgMARgBQAVgDAKAOQAOATgIAUQgHAUgWAHQgJADgHAAQgIAAgHgDgAgEgIQgGADgBAEQgBAGAGADQAEADAFgDQAEgDABgFQABgGgEgDIgEgBQgCAAgDACg");
	this.shape_58.setTransform(-12.2786,-25.8124);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#221F20").s().p("AgFAIQgFgCABgGQABgFAFgCQAFgDAEACQAFACgBAGQgBAGgEACQgDACgCAAQgCAAgDgCg");
	this.shape_59.setTransform(-12.4486,-25.8775);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#221F20").s().p("AgFAIQgGgDACgFQABgFAGgCQAEgDAEACQAFACgBAGQgBAGgEACQgDACgCAAQgCAAgDgCg");
	this.shape_60.setTransform(11.3591,-25.865);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#BD5E38").s().p("AAsAYQAAgLgJgHQgHgFgNACQgGADgKAJQgOAIgPgFQgOgEgIgOQgDgHABgGQACgHAHgDQAIgCAIAKQAJAKAHABQAGABAHgEIAOgIQANgFANAIQALAHAEANIgBAFQgCAGgIAFg");
	this.shape_61.setTransform(-3.6975,12.8326);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.6,-42.5,108.80000000000001,122.8);


(lib.Chomp = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221F20").ss(0.5,1,1).p("AAAgIIgBAAIgMAQQAEACAJgCIAJgDIADgCIABgDQAAAAgCgBQgFgEgGgDg");
	this.shape.setTransform(66,-90.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221F20").ss(0.5,1,1).p("AAFhAQgmA6glA9IAhAKIAUgkIADgBQAHgEAHAAQAUgBARgHQAPgGAKgLQAKgNgCgLQgBgFgLgLQgKgJgIgFQgNgHgTgC");
	this.shape_1.setTransform(64.316,-89.425);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").ss(0.5,1,1).p("AAZBVIA+h2IAAgBQAAgBgJgEIgdgPIgmAtIAeg7IgdgMQgKgFgCABQgDAEgBACIgpAxIgCADIgmAtIAjAVIAzhJ");
	this.shape_2.setTransform(54.35,-92.5833);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").ss(0.5,1,1).p("AAKg6IgpBSQgDADACAFIAEAEIAGAEIAEACQABAAADgCQABgCAvg8IggBCIAeAP");
	this.shape_3.setTransform(53.45,-90.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").ss(0.5,1,1).p("AAxARQAHgKAEgMQAIgYgIgRQgKgSgWgEQgSgCgUANQgMAIgRAUQgOASgFAKQgHARACAPQAFAWAQAKQANAIASgDQARgDAPgO");
	this.shape_4.setTransform(44.7563,-97.3747);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").ss(0.5,1,1).p("AAagBQADgHAAgFQABgFgDgFQgDgFgEgBQgGgCgIAEQgTAJgLATQgDAGgBAGQgBAIAEAFQAFAFAIAAQAFAAAIgEQAPgIAHgNQABgEACgCIAAAAQAAAAAAgBgAAaAAQAAAAAAgB");
	this.shape_5.setTransform(44.7201,-96.7083);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").ss(0.5,1,1).p("AAAhKIhGBvIAeANIAUglIAOAGIgZAuIAeAKIAuhPQAMgRANgOIgggQIgcAyIgQgJIAog2IghgKg");
	this.shape_6.setTransform(36.15,-101.125);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").ss(0.5,1,1).p("AAggJQgEgJgHgCQgHgDgLAGQgOAIgJANQgKAQAFAKQADAIAIACQAGACAHgCQAFgDAAgBIgEAZQgNAIgPgDQgHgCgCgBQgJgFgGgHQgNgRAHggQAFgRANgOQAIgJATgPQAIgHAHgCQAXgJARAMQAMAIAFAPQACAOAAABg");
	this.shape_7.setTransform(28.0628,-105.2147);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").ss(0.5,1,1).p("AhEBLQAxgTAkgoQAlgnAPgz");
	this.shape_8.setTransform(33.65,-76.975);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgcBCIgJgDQgJgFgGgHQgNgRAHggQAFgRANgOQAIgJATgPQAIgHAHgCQAXgJARAMQAMAIAFAPIACAPIgdAMQgEgJgHgCQgHgDgLAGQgOAIgJANQgKAQAFAKQADAIAIACQAGACAHgCIAFgEIgEAZQgJAGgLAAIgIgBg");
	this.shape_9.setTransform(28.0628,-105.2147);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AglAZIAng+IAkAWIgMAWIgOgGIgTAlg");
	this.shape_10.setTransform(32.9,-99.925);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfARIAfgwIAgAKIgnA1g");
	this.shape_11.setTransform(36.325,-105.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AggAeIAkhFIAFACIAYAPIgjA+g");
	this.shape_12.setTransform(36.25,-97.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgdARIAcgwIAfAQQgNANgMARIgKARg");
	this.shape_13.setTransform(40.175,-103.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgqA/QgQgKgFgWQgCgPAHgRQAFgKAOgSQARgUAMgIQAUgNASACQAWAEAKASQAIARgIAYQgEAMgHAKIABABIgcAiIgBgBQgPAOgRADIgJABQgMAAgKgGgAAGgVQgUAJgLAUQgDAFgBAHQgBAHAFAFQAEAGAJAAQAFAAAIgEQASgKAHgTIgBAAIAEgLQAAgFgCgFQgDgFgFgCIgEAAQgEAAgFACg");
	this.shape_14.setTransform(44.7563,-97.3747);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ag/AqIAmgtIADgDIAngxIAFgGQACgBAKAFIAeAMIgfA6IgRgIIAIgPIgzBJg");
	this.shape_15.setTransform(52.075,-94.8583);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPBFIgBAAIgegPIAghCIgPgLIAmguIAdAPQAJAEAAABIAAABIg9B2g");
	this.shape_16.setTransform(58.325,-91.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgWApIgGgEIgFgFQgBgEADgDIAhhCIARAIIAAABIAPALIgxA9IgDACg");
	this.shape_17.setTransform(53.45,-90.175);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhGA3QAlg9Amg6IADAAQATACANAHQAIAFAKAJQALALABAFQACALgKANQgKALgPAGQgRAHgUABQgHAAgHAEIgDABIgUAkgAADgDQAEACAKgCIAJgDIADgCIABgDQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAgBAAQgFgEgHgDIgBAAg");
	this.shape_18.setTransform(64.316,-89.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Chomp, new cjs.Rectangle(21,-112.9,51.400000000000006,44.5), null);


(lib.CapBar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.captions = new cjs.Text("0", "bold 78px 'Arial Black'");
	this.captions.name = "captions";
	this.captions.textAlign = "center";
	this.captions.lineHeight = 112;
	this.captions.lineWidth = 52;
	this.captions.parent = this;
	this.captions.setTransform(0.05,-15.8444,0.4881,0.4881);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkSFVQgSgPgRgQQgbgcgVgeQhPhuAAiOQAAiMBPhuQAVgeAbgcQBzhxCbgNQAUgCATAAQC0AACBCAQCACBAACzQAACXhZByQgSAXgVAWQgRAQgSAPQh1BgidAAQicAAh2hgg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.captions}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CapBar, new cjs.Rectangle(-43.7,-43.7,87.4,87.4), null);


(lib.Birds = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").p("AYXAAI0NrpIAAF4I8lAAIAALkIclAAIAAF4g");
	this.shape.setTransform(156.375,74.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#676767").s().p("AEMFyI8kAAIAArkIckAAIAAl3IUNLpI0NLrg");
	this.shape_1.setTransform(156.125,74.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Arrow, new cjs.Rectangle(-1,-1,314.3,151.3), null);


(lib.arNav2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_38 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221E1F").p("AjDBEIDGgiIABBdIC9h/Ii+h9IABBdIjHgig");
	this.shape.setTransform(19.2501,12.6436,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6EC5A").s().p("AAFAiIjGAiIAAiGIDHAiIgBheIC9B+Ii8B+g");
	this.shape_1.setTransform(19.45,12.65,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},19).wait(22));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,40.9,30.9);


(lib.arNav = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_38 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(38).call(this.frame_38).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221E1F").p("AjDBEIDGgiIABBdIC9h/Ii+h9IABBdIjHgig");
	this.shape.setTransform(19.6499,12.6436);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F6EC5A").s().p("AAFAiIjGAiIAAiGIDHAiIgBheIC9B+Ii8B+g");
	this.shape_1.setTransform(19.45,12.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[]},19).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.3,40.9,28.6);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Snow();
	this.instance.setTransform(577.7,-230.8,2.0371,2.0383,0,0,0,283.6,152.6);
	this.instance.compositeOperation = "screen";

	this.instance_1 = new lib.Snow();
	this.instance_1.setTransform(577.7,311.05,2.0371,2.0383,0,0,0,283.6,152.6);
	this.instance_1.compositeOperation = "screen";

	this.instance_2 = new lib.Snow();
	this.instance_2.setTransform(577.7,892,2.0371,2.0383,0,0,0,283.6,152.6);
	this.instance_2.compositeOperation = "screen";

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(83.8,-531.8,1072.3,1735.5), null);


(lib.stars = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.SymbolSet_1();
	this.instance.setTransform(353.1,223.65,1,1,0,0,0,360.4,170.7);
	this.instance.alpha = 0.3906;
	this.instance.compositeOperation = "overlay";

	this.star = new lib.star();
	this.star.name = "star";
	this.star.setTransform(315.45,313.45,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_1 = new lib.star();
	this.star_1.name = "star_1";
	this.star_1.setTransform(307.55,324.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_2 = new lib.star();
	this.star_2.name = "star_2";
	this.star_2.setTransform(348.6,268.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_3 = new lib.star();
	this.star_3.name = "star_3";
	this.star_3.setTransform(350.05,302.9,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_4 = new lib.star();
	this.star_4.name = "star_4";
	this.star_4.setTransform(358.05,250.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_5 = new lib.star();
	this.star_5.name = "star_5";
	this.star_5.setTransform(374.3,292.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_6 = new lib.star();
	this.star_6.name = "star_6";
	this.star_6.setTransform(365.4,266.65,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_7 = new lib.star();
	this.star_7.name = "star_7";
	this.star_7.setTransform(335.4,274.45,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_8 = new lib.star();
	this.star_8.name = "star_8";
	this.star_8.setTransform(299.65,257.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_9 = new lib.star();
	this.star_9.name = "star_9";
	this.star_9.setTransform(261.45,277.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_10 = new lib.star();
	this.star_10.name = "star_10";
	this.star_10.setTransform(232.9,289.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_11 = new lib.star();
	this.star_11.name = "star_11";
	this.star_11.setTransform(171.7,287.95,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_12 = new lib.star();
	this.star_12.name = "star_12";
	this.star_12.setTransform(107.7,285.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_13 = new lib.star();
	this.star_13.name = "star_13";
	this.star_13.setTransform(115.15,265.05,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_14 = new lib.star();
	this.star_14.name = "star_14";
	this.star_14.setTransform(97.05,269.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_15 = new lib.star();
	this.star_15.name = "star_15";
	this.star_15.setTransform(134.85,243.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_16 = new lib.star();
	this.star_16.name = "star_16";
	this.star_16.setTransform(149.85,236.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_17 = new lib.star();
	this.star_17.name = "star_17";
	this.star_17.setTransform(116.7,188.45,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_18 = new lib.star();
	this.star_18.name = "star_18";
	this.star_18.setTransform(133.55,156.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_19 = new lib.star();
	this.star_19.name = "star_19";
	this.star_19.setTransform(92.85,165.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_20 = new lib.star();
	this.star_20.name = "star_20";
	this.star_20.setTransform(111.4,162.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_21 = new lib.star();
	this.star_21.name = "star_21";
	this.star_21.setTransform(125,170.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_22 = new lib.star();
	this.star_22.name = "star_22";
	this.star_22.setTransform(156,170.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_23 = new lib.star();
	this.star_23.name = "star_23";
	this.star_23.setTransform(143.55,186.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_24 = new lib.star();
	this.star_24.name = "star_24";
	this.star_24.setTransform(177.2,171.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_25 = new lib.star();
	this.star_25.name = "star_25";
	this.star_25.setTransform(177.1,186.95,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_26 = new lib.star();
	this.star_26.name = "star_26";
	this.star_26.setTransform(217.35,140.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_27 = new lib.star();
	this.star_27.name = "star_27";
	this.star_27.setTransform(222.2,177.05,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_28 = new lib.star();
	this.star_28.name = "star_28";
	this.star_28.setTransform(242.05,137.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_29 = new lib.star();
	this.star_29.name = "star_29";
	this.star_29.setTransform(249.9,174.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_30 = new lib.star();
	this.star_30.name = "star_30";
	this.star_30.setTransform(255.6,145.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_31 = new lib.star();
	this.star_31.name = "star_31";
	this.star_31.setTransform(266.15,171.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_32 = new lib.star();
	this.star_32.name = "star_32";
	this.star_32.setTransform(269.45,142.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_33 = new lib.star();
	this.star_33.name = "star_33";
	this.star_33.setTransform(290.8,168.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_34 = new lib.star();
	this.star_34.name = "star_34";
	this.star_34.setTransform(273.7,157.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_35 = new lib.star();
	this.star_35.name = "star_35";
	this.star_35.setTransform(303.1,176.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_36 = new lib.star();
	this.star_36.name = "star_36";
	this.star_36.setTransform(272.15,191.35,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_37 = new lib.star();
	this.star_37.name = "star_37";
	this.star_37.setTransform(292.05,204.1,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_38 = new lib.star();
	this.star_38.name = "star_38";
	this.star_38.setTransform(255.25,262.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_39 = new lib.star();
	this.star_39.name = "star_39";
	this.star_39.setTransform(282.4,242.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_40 = new lib.star();
	this.star_40.name = "star_40";
	this.star_40.setTransform(289.3,327.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_41 = new lib.star();
	this.star_41.name = "star_41";
	this.star_41.setTransform(255.5,307.75,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_42 = new lib.star();
	this.star_42.name = "star_42";
	this.star_42.setTransform(282.15,312.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_43 = new lib.star();
	this.star_43.name = "star_43";
	this.star_43.setTransform(242.7,319.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_44 = new lib.star();
	this.star_44.name = "star_44";
	this.star_44.setTransform(275.05,270.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_45 = new lib.star();
	this.star_45.name = "star_45";
	this.star_45.setTransform(264.25,317.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_46 = new lib.star();
	this.star_46.name = "star_46";
	this.star_46.setTransform(269.4,253.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_47 = new lib.star();
	this.star_47.name = "star_47";
	this.star_47.setTransform(302.65,287.9,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_48 = new lib.star();
	this.star_48.name = "star_48";
	this.star_48.setTransform(280.4,261.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_49 = new lib.star();
	this.star_49.name = "star_49";
	this.star_49.setTransform(292.2,280.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_50 = new lib.star();
	this.star_50.name = "star_50";
	this.star_50.setTransform(251.5,284.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_51 = new lib.star();
	this.star_51.name = "star_51";
	this.star_51.setTransform(258.05,293.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_52 = new lib.star();
	this.star_52.name = "star_52";
	this.star_52.setTransform(224.85,302.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_53 = new lib.star();
	this.star_53.name = "star_53";
	this.star_53.setTransform(204.75,276.1,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_54 = new lib.star();
	this.star_54.name = "star_54";
	this.star_54.setTransform(208.6,314.35,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_55 = new lib.star();
	this.star_55.name = "star_55";
	this.star_55.setTransform(187.25,297.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_56 = new lib.star();
	this.star_56.name = "star_56";
	this.star_56.setTransform(195.45,324.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_57 = new lib.star();
	this.star_57.name = "star_57";
	this.star_57.setTransform(169.85,307.9,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_58 = new lib.star();
	this.star_58.name = "star_58";
	this.star_58.setTransform(188.7,334.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_59 = new lib.star();
	this.star_59.name = "star_59";
	this.star_59.setTransform(153.7,315.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_60 = new lib.star();
	this.star_60.name = "star_60";
	this.star_60.setTransform(160.75,325.75,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_61 = new lib.star();
	this.star_61.name = "star_61";
	this.star_61.setTransform(128.8,310.65,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_62 = new lib.star();
	this.star_62.name = "star_62";
	this.star_62.setTransform(148.3,303.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_63 = new lib.star();
	this.star_63.name = "star_63";
	this.star_63.setTransform(126.15,299.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_64 = new lib.star();
	this.star_64.name = "star_64";
	this.star_64.setTransform(154.25,281.1,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_65 = new lib.star();
	this.star_65.name = "star_65";
	this.star_65.setTransform(168.05,336.9,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_66 = new lib.star();
	this.star_66.name = "star_66";
	this.star_66.setTransform(153.75,292.05,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_67 = new lib.star();
	this.star_67.name = "star_67";
	this.star_67.setTransform(125.15,331.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_68 = new lib.star();
	this.star_68.name = "star_68";
	this.star_68.setTransform(115.3,321.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_69 = new lib.star();
	this.star_69.name = "star_69";
	this.star_69.setTransform(154.35,336.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_70 = new lib.star();
	this.star_70.name = "star_70";
	this.star_70.setTransform(142.4,324.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_71 = new lib.star();
	this.star_71.name = "star_71";
	this.star_71.setTransform(180.5,279.65,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_72 = new lib.star();
	this.star_72.name = "star_72";
	this.star_72.setTransform(179.45,313.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_73 = new lib.star();
	this.star_73.name = "star_73";
	this.star_73.setTransform(173.95,261.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_74 = new lib.star();
	this.star_74.name = "star_74";
	this.star_74.setTransform(217.75,281.9,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_75 = new lib.star();
	this.star_75.name = "star_75";
	this.star_75.setTransform(196.65,246.35,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_76 = new lib.star();
	this.star_76.name = "star_76";
	this.star_76.setTransform(258.6,209.95,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_77 = new lib.star();
	this.star_77.name = "star_77";
	this.star_77.setTransform(250.4,242.1,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_78 = new lib.star();
	this.star_78.name = "star_78";
	this.star_78.setTransform(248,228.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_79 = new lib.star();
	this.star_79.name = "star_79";
	this.star_79.setTransform(227.4,247.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_80 = new lib.star();
	this.star_80.name = "star_80";
	this.star_80.setTransform(233,212.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_81 = new lib.star();
	this.star_81.name = "star_81";
	this.star_81.setTransform(235.55,237.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_82 = new lib.star();
	this.star_82.name = "star_82";
	this.star_82.setTransform(205.05,261.05,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_83 = new lib.star();
	this.star_83.name = "star_83";
	this.star_83.setTransform(257,221.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_84 = new lib.star();
	this.star_84.name = "star_84";
	this.star_84.setTransform(242.5,251.65,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_85 = new lib.star();
	this.star_85.name = "star_85";
	this.star_85.setTransform(212.75,231.95,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_86 = new lib.star();
	this.star_86.name = "star_86";
	this.star_86.setTransform(239.65,163.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_87 = new lib.star();
	this.star_87.name = "star_87";
	this.star_87.setTransform(199.7,169.95,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_88 = new lib.star();
	this.star_88.name = "star_88";
	this.star_88.setTransform(189.55,134.05,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_89 = new lib.star();
	this.star_89.name = "star_89";
	this.star_89.setTransform(171.95,148.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_90 = new lib.star();
	this.star_90.name = "star_90";
	this.star_90.setTransform(137.4,131.45,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_91 = new lib.star();
	this.star_91.name = "star_91";
	this.star_91.setTransform(145.65,139.2,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_92 = new lib.star();
	this.star_92.name = "star_92";
	this.star_92.setTransform(118.25,134.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_93 = new lib.star();
	this.star_93.name = "star_93";
	this.star_93.setTransform(127.8,146.1,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_94 = new lib.star();
	this.star_94.name = "star_94";
	this.star_94.setTransform(100.6,145.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_95 = new lib.star();
	this.star_95.name = "star_95";
	this.star_95.setTransform(115.25,152.05,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_96 = new lib.star();
	this.star_96.name = "star_96";
	this.star_96.setTransform(87.95,154.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_97 = new lib.star();
	this.star_97.name = "star_97";
	this.star_97.setTransform(143.95,159.1,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_98 = new lib.star();
	this.star_98.name = "star_98";
	this.star_98.setTransform(84.2,189.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_99 = new lib.star();
	this.star_99.name = "star_99";
	this.star_99.setTransform(114.2,178,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_100 = new lib.star();
	this.star_100.name = "star_100";
	this.star_100.setTransform(82.3,210.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_101 = new lib.star();
	this.star_101.name = "star_101";
	this.star_101.setTransform(97.75,175.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_102 = new lib.star();
	this.star_102.name = "star_102";
	this.star_102.setTransform(113.5,234.45,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_103 = new lib.star();
	this.star_103.name = "star_103";
	this.star_103.setTransform(111.25,207.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_104 = new lib.star();
	this.star_104.name = "star_104";
	this.star_104.setTransform(97.35,236,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_105 = new lib.star();
	this.star_105.name = "star_105";
	this.star_105.setTransform(98.55,202.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_106 = new lib.star();
	this.star_106.name = "star_106";
	this.star_106.setTransform(111,224.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_107 = new lib.star();
	this.star_107.name = "star_107";
	this.star_107.setTransform(88.7,220.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_108 = new lib.star();
	this.star_108.name = "star_108";
	this.star_108.setTransform(141.25,222.35,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_109 = new lib.star();
	this.star_109.name = "star_109";
	this.star_109.setTransform(101.25,250.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_110 = new lib.star();
	this.star_110.name = "star_110";
	this.star_110.setTransform(152.7,210.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_111 = new lib.star();
	this.star_111.name = "star_111";
	this.star_111.setTransform(133.1,266.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_112 = new lib.star();
	this.star_112.name = "star_112";
	this.star_112.setTransform(131.05,216.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_113 = new lib.star();
	this.star_113.name = "star_113";
	this.star_113.setTransform(178.95,238.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_114 = new lib.star();
	this.star_114.name = "star_114";
	this.star_114.setTransform(152.4,259.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_115 = new lib.star();
	this.star_115.name = "star_115";
	this.star_115.setTransform(207.2,191.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_116 = new lib.star();
	this.star_116.name = "star_116";
	this.star_116.setTransform(234.05,183.95,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_117 = new lib.star();
	this.star_117.name = "star_117";
	this.star_117.setTransform(193.85,206.05,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_118 = new lib.star();
	this.star_118.name = "star_118";
	this.star_118.setTransform(221.7,165.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_119 = new lib.star();
	this.star_119.name = "star_119";
	this.star_119.setTransform(207.85,208.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_120 = new lib.star();
	this.star_120.name = "star_120";
	this.star_120.setTransform(184.15,161.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_121 = new lib.star();
	this.star_121.name = "star_121";
	this.star_121.setTransform(228.75,152.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_122 = new lib.star();
	this.star_122.name = "star_122";
	this.star_122.setTransform(174.85,203.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_123 = new lib.star();
	this.star_123.name = "star_123";
	this.star_123.setTransform(212.15,156.65,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_124 = new lib.star();
	this.star_124.name = "star_124";
	this.star_124.setTransform(204.9,224.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_125 = new lib.star();
	this.star_125.name = "star_125";
	this.star_125.setTransform(175.95,224.95,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_126 = new lib.star();
	this.star_126.name = "star_126";
	this.star_126.setTransform(234.35,223.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_127 = new lib.star();
	this.star_127.name = "star_127";
	this.star_127.setTransform(215.65,330,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_128 = new lib.star();
	this.star_128.name = "star_128";
	this.star_128.setTransform(211.25,292.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_129 = new lib.star();
	this.star_129.name = "star_129";
	this.star_129.setTransform(264.05,340.75,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_130 = new lib.star();
	this.star_130.name = "star_130";
	this.star_130.setTransform(222.1,349.75,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_131 = new lib.star();
	this.star_131.name = "star_131";
	this.star_131.setTransform(274.15,290.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_132 = new lib.star();
	this.star_132.name = "star_132";
	this.star_132.setTransform(240.05,341.45,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_133 = new lib.star();
	this.star_133.name = "star_133";
	this.star_133.setTransform(222.05,266.95,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_134 = new lib.star();
	this.star_134.name = "star_134";
	this.star_134.setTransform(280.6,302.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_135 = new lib.star();
	this.star_135.name = "star_135";
	this.star_135.setTransform(233.4,330.05,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_136 = new lib.star();
	this.star_136.name = "star_136";
	this.star_136.setTransform(283.45,229.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_137 = new lib.star();
	this.star_137.name = "star_137";
	this.star_137.setTransform(327.1,286.9,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_138 = new lib.star();
	this.star_138.name = "star_138";
	this.star_138.setTransform(376.45,253.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_139 = new lib.star();
	this.star_139.name = "star_139";
	this.star_139.setTransform(413.35,301.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_140 = new lib.star();
	this.star_140.name = "star_140";
	this.star_140.setTransform(368.75,321.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_141 = new lib.star();
	this.star_141.name = "star_141";
	this.star_141.setTransform(382.6,282.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_142 = new lib.star();
	this.star_142.name = "star_142";
	this.star_142.setTransform(369.3,345.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_143 = new lib.star();
	this.star_143.name = "star_143";
	this.star_143.setTransform(346.7,334,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_144 = new lib.star();
	this.star_144.name = "star_144";
	this.star_144.setTransform(352.9,353,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_145 = new lib.star();
	this.star_145.name = "star_145";
	this.star_145.setTransform(347.25,322.2,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_146 = new lib.star();
	this.star_146.name = "star_146";
	this.star_146.setTransform(367.75,333.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_147 = new lib.star();
	this.star_147.name = "star_147";
	this.star_147.setTransform(325.6,339.9,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_148 = new lib.star();
	this.star_148.name = "star_148";
	this.star_148.setTransform(362.85,300.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_149 = new lib.star();
	this.star_149.name = "star_149";
	this.star_149.setTransform(310.5,343.2,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_150 = new lib.star();
	this.star_150.name = "star_150";
	this.star_150.setTransform(333.4,250.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_151 = new lib.star();
	this.star_151.name = "star_151";
	this.star_151.setTransform(325.5,323.1,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_152 = new lib.star();
	this.star_152.name = "star_152";
	this.star_152.setTransform(310.4,248.75,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_153 = new lib.star();
	this.star_153.name = "star_153";
	this.star_153.setTransform(341.65,240.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_154 = new lib.star();
	this.star_154.name = "star_154";
	this.star_154.setTransform(303.75,237.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_155 = new lib.star();
	this.star_155.name = "star_155";
	this.star_155.setTransform(331.35,185.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_156 = new lib.star();
	this.star_156.name = "star_156";
	this.star_156.setTransform(301.9,218,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_157 = new lib.star();
	this.star_157.name = "star_157";
	this.star_157.setTransform(316.7,151.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_158 = new lib.star();
	this.star_158.name = "star_158";
	this.star_158.setTransform(314.8,208.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_159 = new lib.star();
	this.star_159.name = "star_159";
	this.star_159.setTransform(288.45,155.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_160 = new lib.star();
	this.star_160.name = "star_160";
	this.star_160.setTransform(347,165.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_161 = new lib.star();
	this.star_161.name = "star_161";
	this.star_161.setTransform(306.25,191.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_162 = new lib.star();
	this.star_162.name = "star_162";
	this.star_162.setTransform(336.6,150.35,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_163 = new lib.star();
	this.star_163.name = "star_163";
	this.star_163.setTransform(340.7,203.75,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_164 = new lib.star();
	this.star_164.name = "star_164";
	this.star_164.setTransform(326.05,164.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_165 = new lib.star();
	this.star_165.name = "star_165";
	this.star_165.setTransform(400.85,168.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_166 = new lib.star();
	this.star_166.name = "star_166";
	this.star_166.setTransform(387.8,159.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_167 = new lib.star();
	this.star_167.name = "star_167";
	this.star_167.setTransform(425,153.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_168 = new lib.star();
	this.star_168.name = "star_168";
	this.star_168.setTransform(385.6,175.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_169 = new lib.star();
	this.star_169.name = "star_169";
	this.star_169.setTransform(405.45,146.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_170 = new lib.star();
	this.star_170.name = "star_170";
	this.star_170.setTransform(398.2,184.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_171 = new lib.star();
	this.star_171.name = "star_171";
	this.star_171.setTransform(377.9,150.45,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_172 = new lib.star();
	this.star_172.name = "star_172";
	this.star_172.setTransform(391.65,212.75,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_173 = new lib.star();
	this.star_173.name = "star_173";
	this.star_173.setTransform(361.7,185.05,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_174 = new lib.star();
	this.star_174.name = "star_174";
	this.star_174.setTransform(381.45,203.1,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_175 = new lib.star();
	this.star_175.name = "star_175";
	this.star_175.setTransform(330.4,261.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_176 = new lib.star();
	this.star_176.name = "star_176";
	this.star_176.setTransform(369.25,231.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_177 = new lib.star();
	this.star_177.name = "star_177";
	this.star_177.setTransform(332.55,311.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_178 = new lib.star();
	this.star_178.name = "star_178";
	this.star_178.setTransform(341,216.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_179 = new lib.star();
	this.star_179.name = "star_179";
	this.star_179.setTransform(397.8,268.9,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_180 = new lib.star();
	this.star_180.name = "star_180";
	this.star_180.setTransform(337.95,297.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_181 = new lib.star();
	this.star_181.name = "star_181";
	this.star_181.setTransform(385.8,238.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_182 = new lib.star();
	this.star_182.name = "star_182";
	this.star_182.setTransform(391.8,321.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_183 = new lib.star();
	this.star_183.name = "star_183";
	this.star_183.setTransform(396.65,256.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_184 = new lib.star();
	this.star_184.name = "star_184";
	this.star_184.setTransform(428.25,290.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_185 = new lib.star();
	this.star_185.name = "star_185";
	this.star_185.setTransform(417.15,272.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_186 = new lib.star();
	this.star_186.name = "star_186";
	this.star_186.setTransform(439.65,269.2,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_187 = new lib.star();
	this.star_187.name = "star_187";
	this.star_187.setTransform(394.55,299.1,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_188 = new lib.star();
	this.star_188.name = "star_188";
	this.star_188.setTransform(433.1,248.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_189 = new lib.star();
	this.star_189.name = "star_189";
	this.star_189.setTransform(411.4,329.85,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_190 = new lib.star();
	this.star_190.name = "star_190";
	this.star_190.setTransform(402.25,242.95,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_191 = new lib.star();
	this.star_191.name = "star_191";
	this.star_191.setTransform(459.1,258.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_192 = new lib.star();
	this.star_192.name = "star_192";
	this.star_192.setTransform(418.35,311,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_193 = new lib.star();
	this.star_193.name = "star_193";
	this.star_193.setTransform(457,234.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_194 = new lib.star();
	this.star_194.name = "star_194";
	this.star_194.setTransform(459.65,314.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_195 = new lib.star();
	this.star_195.name = "star_195";
	this.star_195.setTransform(452.95,274.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_196 = new lib.star();
	this.star_196.name = "star_196";
	this.star_196.setTransform(481.2,288.6,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_197 = new lib.star();
	this.star_197.name = "star_197";
	this.star_197.setTransform(444.95,325.3,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_198 = new lib.star();
	this.star_198.name = "star_198";
	this.star_198.setTransform(460.8,296.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_199 = new lib.star();
	this.star_199.name = "star_199";
	this.star_199.setTransform(481.5,301.1,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_200 = new lib.star();
	this.star_200.name = "star_200";
	this.star_200.setTransform(481.5,245.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_201 = new lib.star();
	this.star_201.name = "star_201";
	this.star_201.setTransform(495.45,236.95,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_202 = new lib.star();
	this.star_202.name = "star_202";
	this.star_202.setTransform(476,204.95,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_203 = new lib.star();
	this.star_203.name = "star_203";
	this.star_203.setTransform(492.7,182.2,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_204 = new lib.star();
	this.star_204.name = "star_204";
	this.star_204.setTransform(472.8,188.05,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_205 = new lib.star();
	this.star_205.name = "star_205";
	this.star_205.setTransform(470.05,161.15,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_206 = new lib.star();
	this.star_206.name = "star_206";
	this.star_206.setTransform(460.45,177.5,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_207 = new lib.star();
	this.star_207.name = "star_207";
	this.star_207.setTransform(453.15,155.05,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_208 = new lib.star();
	this.star_208.name = "star_208";
	this.star_208.setTransform(452.45,187.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_209 = new lib.star();
	this.star_209.name = "star_209";
	this.star_209.setTransform(436.25,170.1,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_210 = new lib.star();
	this.star_210.name = "star_210";
	this.star_210.setTransform(455,207.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_211 = new lib.star();
	this.star_211.name = "star_211";
	this.star_211.setTransform(418.3,214.25,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_212 = new lib.star();
	this.star_212.name = "star_212";
	this.star_212.setTransform(438.65,213.4,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_213 = new lib.star();
	this.star_213.name = "star_213";
	this.star_213.setTransform(418.55,239,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_214 = new lib.star();
	this.star_214.name = "star_214";
	this.star_214.setTransform(415.05,195,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_215 = new lib.star();
	this.star_215.name = "star_215";
	this.star_215.setTransform(412.7,228.55,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_216 = new lib.star();
	this.star_216.name = "star_216";
	this.star_216.setTransform(374.65,214.8,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_217 = new lib.star();
	this.star_217.name = "star_217";
	this.star_217.setTransform(403.35,198.7,0.922,0.7061,0,0,0,2.5,-16.4);

	this.star_218 = new lib.star();
	this.star_218.name = "star_218";
	this.star_218.setTransform(428.1,198.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_219 = new lib.star();
	this.star_219.name = "star_219";
	this.star_219.setTransform(437.2,185.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_220 = new lib.star();
	this.star_220.name = "star_220";
	this.star_220.setTransform(445.8,206.25,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_221 = new lib.star();
	this.star_221.name = "star_221";
	this.star_221.setTransform(460.2,211.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_222 = new lib.star();
	this.star_222.name = "star_222";
	this.star_222.setTransform(461.65,237.55,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_223 = new lib.star();
	this.star_223.name = "star_223";
	this.star_223.setTransform(482.7,213.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_224 = new lib.star();
	this.star_224.name = "star_224";
	this.star_224.setTransform(472.9,196.3,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_225 = new lib.star();
	this.star_225.name = "star_225";
	this.star_225.setTransform(454.7,191.25,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_226 = new lib.star();
	this.star_226.name = "star_226";
	this.star_226.setTransform(430.75,219.3,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_227 = new lib.star();
	this.star_227.name = "star_227";
	this.star_227.setTransform(444.45,302.7,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_228 = new lib.star();
	this.star_228.name = "star_228";
	this.star_228.setTransform(453.9,339.85,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_229 = new lib.star();
	this.star_229.name = "star_229";
	this.star_229.setTransform(476.3,320.85,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_230 = new lib.star();
	this.star_230.name = "star_230";
	this.star_230.setTransform(456.55,326.85,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_231 = new lib.star();
	this.star_231.name = "star_231";
	this.star_231.setTransform(439,312.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_232 = new lib.star();
	this.star_232.name = "star_232";
	this.star_232.setTransform(419.85,311.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_233 = new lib.star();
	this.star_233.name = "star_233";
	this.star_233.setTransform(411.7,283.55,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_234 = new lib.star();
	this.star_234.name = "star_234";
	this.star_234.setTransform(401.45,269.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_235 = new lib.star();
	this.star_235.name = "star_235";
	this.star_235.setTransform(325.4,297.9,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_236 = new lib.star();
	this.star_236.name = "star_236";
	this.star_236.setTransform(301.55,287.2,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_237 = new lib.star();
	this.star_237.name = "star_237";
	this.star_237.setTransform(286.85,340.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_238 = new lib.star();
	this.star_238.name = "star_238";
	this.star_238.setTransform(270.1,307.9,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_239 = new lib.star();
	this.star_239.name = "star_239";
	this.star_239.setTransform(346.2,313.25,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_240 = new lib.star();
	this.star_240.name = "star_240";
	this.star_240.setTransform(310.1,327,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_241 = new lib.star();
	this.star_241.name = "star_241";
	this.star_241.setTransform(350.6,273.2,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_242 = new lib.star();
	this.star_242.name = "star_242";
	this.star_242.setTransform(334.55,331.55,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_243 = new lib.star();
	this.star_243.name = "star_243";
	this.star_243.setTransform(333.1,273.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_244 = new lib.star();
	this.star_244.name = "star_244";
	this.star_244.setTransform(379.8,274.3,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_245 = new lib.star();
	this.star_245.name = "star_245";
	this.star_245.setTransform(345.3,296.55,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_246 = new lib.star();
	this.star_246.name = "star_246";
	this.star_246.setTransform(315.7,238.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_247 = new lib.star();
	this.star_247.name = "star_247";
	this.star_247.setTransform(246.05,271.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_248 = new lib.star();
	this.star_248.name = "star_248";
	this.star_248.setTransform(205.25,217.85,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_249 = new lib.star();
	this.star_249.name = "star_249";
	this.star_249.setTransform(173.75,258.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_250 = new lib.star();
	this.star_250.name = "star_250";
	this.star_250.setTransform(151.05,209.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_251 = new lib.star();
	this.star_251.name = "star_251";
	this.star_251.setTransform(175.6,197.55,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_252 = new lib.star();
	this.star_252.name = "star_252";
	this.star_252.setTransform(129.15,202.3,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_253 = new lib.star();
	this.star_253.name = "star_253";
	this.star_253.setTransform(166,178.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_254 = new lib.star();
	this.star_254.name = "star_254";
	this.star_254.setTransform(145.4,227.2,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_255 = new lib.star();
	this.star_255.name = "star_255";
	this.star_255.setTransform(184.95,185.5,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_256 = new lib.star();
	this.star_256.name = "star_256";
	this.star_256.setTransform(183.2,212.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_257 = new lib.star();
	this.star_257.name = "star_257";
	this.star_257.setTransform(145.45,173.5,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_258 = new lib.star();
	this.star_258.name = "star_258";
	this.star_258.setTransform(182.5,171.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_259 = new lib.star();
	this.star_259.name = "star_259";
	this.star_259.setTransform(128.55,190.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_260 = new lib.star();
	this.star_260.name = "star_260";
	this.star_260.setTransform(174.25,163,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_261 = new lib.star();
	this.star_261.name = "star_261";
	this.star_261.setTransform(107.9,219.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_262 = new lib.star();
	this.star_262.name = "star_262";
	this.star_262.setTransform(157.05,164,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_263 = new lib.star();
	this.star_263.name = "star_263";
	this.star_263.setTransform(112.3,254.3,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_264 = new lib.star();
	this.star_264.name = "star_264";
	this.star_264.setTransform(108.15,197.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_265 = new lib.star();
	this.star_265.name = "star_265";
	this.star_265.setTransform(150,255.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_266 = new lib.star();
	this.star_266.name = "star_266";
	this.star_266.setTransform(90.35,241,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_267 = new lib.star();
	this.star_267.name = "star_267";
	this.star_267.setTransform(159.9,228.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_268 = new lib.star();
	this.star_268.name = "star_268";
	this.star_268.setTransform(115.2,302.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_269 = new lib.star();
	this.star_269.name = "star_269";
	this.star_269.setTransform(113.4,245.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_270 = new lib.star();
	this.star_270.name = "star_270";
	this.star_270.setTransform(141.55,299.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_271 = new lib.star();
	this.star_271.name = "star_271";
	this.star_271.setTransform(105.2,272.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_272 = new lib.star();
	this.star_272.name = "star_272";
	this.star_272.setTransform(152.85,309.25,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_273 = new lib.star();
	this.star_273.name = "star_273";
	this.star_273.setTransform(110.85,313.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_274 = new lib.star();
	this.star_274.name = "star_274";
	this.star_274.setTransform(144.4,283.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_275 = new lib.star();
	this.star_275.name = "star_275";
	this.star_275.setTransform(162.7,342.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_276 = new lib.star();
	this.star_276.name = "star_276";
	this.star_276.setTransform(159.6,287.9,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_277 = new lib.star();
	this.star_277.name = "star_277";
	this.star_277.setTransform(195.85,306.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_278 = new lib.star();
	this.star_278.name = "star_278";
	this.star_278.setTransform(194.95,327.5,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_279 = new lib.star();
	this.star_279.name = "star_279";
	this.star_279.setTransform(227.6,293.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_280 = new lib.star();
	this.star_280.name = "star_280";
	this.star_280.setTransform(229.45,327.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_281 = new lib.star();
	this.star_281.name = "star_281";
	this.star_281.setTransform(234.5,280.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_282 = new lib.star();
	this.star_282.name = "star_282";
	this.star_282.setTransform(248.85,334.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_283 = new lib.star();
	this.star_283.name = "star_283";
	this.star_283.setTransform(253,285.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_284 = new lib.star();
	this.star_284.name = "star_284";
	this.star_284.setTransform(289.1,314.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_285 = new lib.star();
	this.star_285.name = "star_285";
	this.star_285.setTransform(233.85,305.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_286 = new lib.star();
	this.star_286.name = "star_286";
	this.star_286.setTransform(280.9,269.15,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_287 = new lib.star();
	this.star_287.name = "star_287";
	this.star_287.setTransform(266.15,332.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_288 = new lib.star();
	this.star_288.name = "star_288";
	this.star_288.setTransform(238.4,254.85,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_289 = new lib.star();
	this.star_289.name = "star_289";
	this.star_289.setTransform(287.45,294.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_290 = new lib.star();
	this.star_290.name = "star_290";
	this.star_290.setTransform(251.15,302.75,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_291 = new lib.star();
	this.star_291.name = "star_291";
	this.star_291.setTransform(275.8,218.55,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_292 = new lib.star();
	this.star_292.name = "star_292";
	this.star_292.setTransform(274.8,283.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_293 = new lib.star();
	this.star_293.name = "star_293";
	this.star_293.setTransform(270.4,232.55,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_294 = new lib.star();
	this.star_294.name = "star_294";
	this.star_294.setTransform(306.5,272.9,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_295 = new lib.star();
	this.star_295.name = "star_295";
	this.star_295.setTransform(275.7,244.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_296 = new lib.star();
	this.star_296.name = "star_296";
	this.star_296.setTransform(316.85,221,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_297 = new lib.star();
	this.star_297.name = "star_297";
	this.star_297.setTransform(294.4,267.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_298 = new lib.star();
	this.star_298.name = "star_298";
	this.star_298.setTransform(320.1,206.5,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_299 = new lib.star();
	this.star_299.name = "star_299";
	this.star_299.setTransform(323.95,284.55,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_300 = new lib.star();
	this.star_300.name = "star_300";
	this.star_300.setTransform(319.65,195.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_301 = new lib.star();
	this.star_301.name = "star_301";
	this.star_301.setTransform(350.2,222.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_302 = new lib.star();
	this.star_302.name = "star_302";
	this.star_302.setTransform(329.2,230.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_303 = new lib.star();
	this.star_303.name = "star_303";
	this.star_303.setTransform(364.9,191.75,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_304 = new lib.star();
	this.star_304.name = "star_304";
	this.star_304.setTransform(352.85,236.2,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_305 = new lib.star();
	this.star_305.name = "star_305";
	this.star_305.setTransform(351.45,163.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_306 = new lib.star();
	this.star_306.name = "star_306";
	this.star_306.setTransform(343.65,211.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_307 = new lib.star();
	this.star_307.name = "star_307";
	this.star_307.setTransform(318.3,161.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_308 = new lib.star();
	this.star_308.name = "star_308";
	this.star_308.setTransform(336.9,174.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_309 = new lib.star();
	this.star_309.name = "star_309";
	this.star_309.setTransform(293.15,177.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_310 = new lib.star();
	this.star_310.name = "star_310";
	this.star_310.setTransform(313.15,147.75,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_311 = new lib.star();
	this.star_311.name = "star_311";
	this.star_311.setTransform(269.3,205.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_312 = new lib.star();
	this.star_312.name = "star_312";
	this.star_312.setTransform(269.35,142.7,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_313 = new lib.star();
	this.star_313.name = "star_313";
	this.star_313.setTransform(257.85,179.15,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_314 = new lib.star();
	this.star_314.name = "star_314";
	this.star_314.setTransform(206.4,182.5,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_315 = new lib.star();
	this.star_315.name = "star_315";
	this.star_315.setTransform(215.7,147.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_316 = new lib.star();
	this.star_316.name = "star_316";
	this.star_316.setTransform(129.2,178.85,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_317 = new lib.star();
	this.star_317.name = "star_317";
	this.star_317.setTransform(178.35,146.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_318 = new lib.star();
	this.star_318.name = "star_318";
	this.star_318.setTransform(156.35,194.7,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_319 = new lib.star();
	this.star_319.name = "star_319";
	this.star_319.setTransform(165.45,132.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_320 = new lib.star();
	this.star_320.name = "star_320";
	this.star_320.setTransform(135.1,165.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_321 = new lib.star();
	this.star_321.name = "star_321";
	this.star_321.setTransform(119.85,139.85,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_322 = new lib.star();
	this.star_322.name = "star_322";
	this.star_322.setTransform(131.4,152.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_323 = new lib.star();
	this.star_323.name = "star_323";
	this.star_323.setTransform(93.95,170.5,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_324 = new lib.star();
	this.star_324.name = "star_324";
	this.star_324.setTransform(189.15,133.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_325 = new lib.star();
	this.star_325.name = "star_325";
	this.star_325.setTransform(117.35,207.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_326 = new lib.star();
	this.star_326.name = "star_326";
	this.star_326.setTransform(147.9,137.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_327 = new lib.star();
	this.star_327.name = "star_327";
	this.star_327.setTransform(203,166.3,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_328 = new lib.star();
	this.star_328.name = "star_328";
	this.star_328.setTransform(137.75,216.75,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_329 = new lib.star();
	this.star_329.name = "star_329";
	this.star_329.setTransform(193.45,145.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_330 = new lib.star();
	this.star_330.name = "star_330";
	this.star_330.setTransform(217.4,164.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_331 = new lib.star();
	this.star_331.name = "star_331";
	this.star_331.setTransform(197.25,259.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_332 = new lib.star();
	this.star_332.name = "star_332";
	this.star_332.setTransform(243,223.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_333 = new lib.star();
	this.star_333.name = "star_333";
	this.star_333.setTransform(257.2,216.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_334 = new lib.star();
	this.star_334.name = "star_334";
	this.star_334.setTransform(239.3,240.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_335 = new lib.star();
	this.star_335.name = "star_335";
	this.star_335.setTransform(226.25,221.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_336 = new lib.star();
	this.star_336.name = "star_336";
	this.star_336.setTransform(247.15,201.85,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_337 = new lib.star();
	this.star_337.name = "star_337";
	this.star_337.setTransform(214.65,233.55,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_338 = new lib.star();
	this.star_338.name = "star_338";
	this.star_338.setTransform(298.5,160.75,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_339 = new lib.star();
	this.star_339.name = "star_339";
	this.star_339.setTransform(359.7,176.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_340 = new lib.star();
	this.star_340.name = "star_340";
	this.star_340.setTransform(334.2,263.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_341 = new lib.star();
	this.star_341.name = "star_341";
	this.star_341.setTransform(256.85,350.5,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_342 = new lib.star();
	this.star_342.name = "star_342";
	this.star_342.setTransform(245.45,316.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_343 = new lib.star();
	this.star_343.name = "star_343";
	this.star_343.setTransform(295.95,230.75,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_344 = new lib.star();
	this.star_344.name = "star_344";
	this.star_344.setTransform(321.25,250.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_345 = new lib.star();
	this.star_345.name = "star_345";
	this.star_345.setTransform(301.5,307.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_346 = new lib.star();
	this.star_346.name = "star_346";
	this.star_346.setTransform(360.05,339.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_347 = new lib.star();
	this.star_347.name = "star_347";
	this.star_347.setTransform(427.35,341.2,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_348 = new lib.star();
	this.star_348.name = "star_348";
	this.star_348.setTransform(432.7,332.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_349 = new lib.star();
	this.star_349.name = "star_349";
	this.star_349.setTransform(394.8,338.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_350 = new lib.star();
	this.star_350.name = "star_350";
	this.star_350.setTransform(415.05,325.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_351 = new lib.star();
	this.star_351.name = "star_351";
	this.star_351.setTransform(436.35,290.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_352 = new lib.star();
	this.star_352.name = "star_352";
	this.star_352.setTransform(448.6,265,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_353 = new lib.star();
	this.star_353.name = "star_353";
	this.star_353.setTransform(330.45,343.9,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_354 = new lib.star();
	this.star_354.name = "star_354";
	this.star_354.setTransform(309.75,345.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_355 = new lib.star();
	this.star_355.name = "star_355";
	this.star_355.setTransform(338.95,248.25,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_356 = new lib.star();
	this.star_356.name = "star_356";
	this.star_356.setTransform(296.95,243.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_357 = new lib.star();
	this.star_357.name = "star_357";
	this.star_357.setTransform(222.55,260.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_358 = new lib.star();
	this.star_358.name = "star_358";
	this.star_358.setTransform(202.25,205.7,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_359 = new lib.star();
	this.star_359.name = "star_359";
	this.star_359.setTransform(215.2,133.2,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_360 = new lib.star();
	this.star_360.name = "star_360";
	this.star_360.setTransform(150.45,150.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_361 = new lib.star();
	this.star_361.name = "star_361";
	this.star_361.setTransform(85.6,186.75,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_362 = new lib.star();
	this.star_362.name = "star_362";
	this.star_362.setTransform(145.55,187.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_363 = new lib.star();
	this.star_363.name = "star_363";
	this.star_363.setTransform(132.05,236.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_364 = new lib.star();
	this.star_364.name = "star_364";
	this.star_364.setTransform(90.35,293.75,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_365 = new lib.star();
	this.star_365.name = "star_365";
	this.star_365.setTransform(95.8,324.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_366 = new lib.star();
	this.star_366.name = "star_366";
	this.star_366.setTransform(111.5,337.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_367 = new lib.star();
	this.star_367.name = "star_367";
	this.star_367.setTransform(121.9,325.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_368 = new lib.star();
	this.star_368.name = "star_368";
	this.star_368.setTransform(138.95,335.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_369 = new lib.star();
	this.star_369.name = "star_369";
	this.star_369.setTransform(158.7,330.3,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_370 = new lib.star();
	this.star_370.name = "star_370";
	this.star_370.setTransform(174.85,311.5,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_371 = new lib.star();
	this.star_371.name = "star_371";
	this.star_371.setTransform(187.35,270.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_372 = new lib.star();
	this.star_372.name = "star_372";
	this.star_372.setTransform(265.5,194.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_373 = new lib.star();
	this.star_373.name = "star_373";
	this.star_373.setTransform(234.45,151.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_374 = new lib.star();
	this.star_374.name = "star_374";
	this.star_374.setTransform(230.05,179.15,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_375 = new lib.star();
	this.star_375.name = "star_375";
	this.star_375.setTransform(232.35,206.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_376 = new lib.star();
	this.star_376.name = "star_376";
	this.star_376.setTransform(299.15,191.7,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_377 = new lib.star();
	this.star_377.name = "star_377";
	this.star_377.setTransform(363.8,229.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_378 = new lib.star();
	this.star_378.name = "star_378";
	this.star_378.setTransform(370.9,258.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_379 = new lib.star();
	this.star_379.name = "star_379";
	this.star_379.setTransform(303.05,256.2,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_380 = new lib.star();
	this.star_380.name = "star_380";
	this.star_380.setTransform(215.55,275.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_381 = new lib.star();
	this.star_381.name = "star_381";
	this.star_381.setTransform(211.65,316.2,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_382 = new lib.star();
	this.star_382.name = "star_382";
	this.star_382.setTransform(226.65,338.2,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_383 = new lib.star();
	this.star_383.name = "star_383";
	this.star_383.setTransform(240.95,347.75,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_384 = new lib.star();
	this.star_384.name = "star_384";
	this.star_384.setTransform(282.35,353.25,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_385 = new lib.star();
	this.star_385.name = "star_385";
	this.star_385.setTransform(300.4,333.25,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_386 = new lib.star();
	this.star_386.name = "star_386";
	this.star_386.setTransform(360.9,299.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_387 = new lib.star();
	this.star_387.name = "star_387";
	this.star_387.setTransform(402.45,295.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_388 = new lib.star();
	this.star_388.name = "star_388";
	this.star_388.setTransform(334.3,153.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_389 = new lib.star();
	this.star_389.name = "star_389";
	this.star_389.setTransform(373.85,150.7,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_390 = new lib.star();
	this.star_390.name = "star_390";
	this.star_390.setTransform(406.5,149.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_391 = new lib.star();
	this.star_391.name = "star_391";
	this.star_391.setTransform(426.2,158.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_392 = new lib.star();
	this.star_392.name = "star_392";
	this.star_392.setTransform(435.7,171.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_393 = new lib.star();
	this.star_393.name = "star_393";
	this.star_393.setTransform(455.7,163.15,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_394 = new lib.star();
	this.star_394.name = "star_394";
	this.star_394.setTransform(474.75,164.5,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_395 = new lib.star();
	this.star_395.name = "star_395";
	this.star_395.setTransform(492.1,173.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_396 = new lib.star();
	this.star_396.name = "star_396";
	this.star_396.setTransform(479.3,180.15,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_397 = new lib.star();
	this.star_397.name = "star_397";
	this.star_397.setTransform(487.85,200.25,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_398 = new lib.star();
	this.star_398.name = "star_398";
	this.star_398.setTransform(485.1,239.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_399 = new lib.star();
	this.star_399.name = "star_399";
	this.star_399.setTransform(494.9,278.9,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_400 = new lib.star();
	this.star_400.name = "star_400";
	this.star_400.setTransform(479.2,302.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_401 = new lib.star();
	this.star_401.name = "star_401";
	this.star_401.setTransform(464.7,294.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_402 = new lib.star();
	this.star_402.name = "star_402";
	this.star_402.setTransform(477.5,278.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_403 = new lib.star();
	this.star_403.name = "star_403";
	this.star_403.setTransform(465.7,265.7,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_404 = new lib.star();
	this.star_404.name = "star_404";
	this.star_404.setTransform(411.15,237.3,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_405 = new lib.star();
	this.star_405.name = "star_405";
	this.star_405.setTransform(366,208.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_406 = new lib.star();
	this.star_406.name = "star_406";
	this.star_406.setTransform(360.5,248.9,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_407 = new lib.star();
	this.star_407.name = "star_407";
	this.star_407.setTransform(371.25,286,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_408 = new lib.star();
	this.star_408.name = "star_408";
	this.star_408.setTransform(423.8,270.9,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_409 = new lib.star();
	this.star_409.name = "star_409";
	this.star_409.setTransform(382.9,296.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_410 = new lib.star();
	this.star_410.name = "star_410";
	this.star_410.setTransform(331.55,314.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_411 = new lib.star();
	this.star_411.name = "star_411";
	this.star_411.setTransform(362.4,312.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_412 = new lib.star();
	this.star_412.name = "star_412";
	this.star_412.setTransform(390.7,257.65,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_413 = new lib.star();
	this.star_413.name = "star_413";
	this.star_413.setTransform(402.1,226.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_414 = new lib.star();
	this.star_414.name = "star_414";
	this.star_414.setTransform(439.75,236.55,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_415 = new lib.star();
	this.star_415.name = "star_415";
	this.star_415.setTransform(404.9,198.15,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_416 = new lib.star();
	this.star_416.name = "star_416";
	this.star_416.setTransform(394.95,178.1,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_417 = new lib.star();
	this.star_417.name = "star_417";
	this.star_417.setTransform(384.05,169.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_418 = new lib.star();
	this.star_418.name = "star_418";
	this.star_418.setTransform(382.45,202.8,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_419 = new lib.star();
	this.star_419.name = "star_419";
	this.star_419.setTransform(348.35,193.85,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_420 = new lib.star();
	this.star_420.name = "star_420";
	this.star_420.setTransform(308.2,174.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_421 = new lib.star();
	this.star_421.name = "star_421";
	this.star_421.setTransform(288,200.9,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_422 = new lib.star();
	this.star_422.name = "star_422";
	this.star_422.setTransform(257.2,254.7,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_423 = new lib.star();
	this.star_423.name = "star_423";
	this.star_423.setTransform(211.55,287.85,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_424 = new lib.star();
	this.star_424.name = "star_424";
	this.star_424.setTransform(182.25,294.15,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_425 = new lib.star();
	this.star_425.name = "star_425";
	this.star_425.setTransform(128.4,293.2,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_426 = new lib.star();
	this.star_426.name = "star_426";
	this.star_426.setTransform(96.85,282.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_427 = new lib.star();
	this.star_427.name = "star_427";
	this.star_427.setTransform(126.8,272.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_428 = new lib.star();
	this.star_428.name = "star_428";
	this.star_428.setTransform(131.05,255.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_429 = new lib.star();
	this.star_429.name = "star_429";
	this.star_429.setTransform(88.55,198.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_430 = new lib.star();
	this.star_430.name = "star_430";
	this.star_430.setTransform(99.4,157.15,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_431 = new lib.star();
	this.star_431.name = "star_431";
	this.star_431.setTransform(109.25,165.95,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_432 = new lib.star();
	this.star_432.name = "star_432";
	this.star_432.setTransform(81.8,207.45,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_433 = new lib.star();
	this.star_433.name = "star_433";
	this.star_433.setTransform(90.95,219.6,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_434 = new lib.star();
	this.star_434.name = "star_434";
	this.star_434.setTransform(116.9,228.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_435 = new lib.star();
	this.star_435.name = "star_435";
	this.star_435.setTransform(147.45,244.55,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_436 = new lib.star();
	this.star_436.name = "star_436";
	this.star_436.setTransform(172.6,244.35,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_437 = new lib.star();
	this.star_437.name = "star_437";
	this.star_437.setTransform(196.1,232.05,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_438 = new lib.star();
	this.star_438.name = "star_438";
	this.star_438.setTransform(243.9,169.2,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.star_439 = new lib.star();
	this.star_439.name = "star_439";
	this.star_439.setTransform(273.45,163.4,0.9841,0.7297,0,0,0,2.6,-16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.star_439},{t:this.star_438},{t:this.star_437},{t:this.star_436},{t:this.star_435},{t:this.star_434},{t:this.star_433},{t:this.star_432},{t:this.star_431},{t:this.star_430},{t:this.star_429},{t:this.star_428},{t:this.star_427},{t:this.star_426},{t:this.star_425},{t:this.star_424},{t:this.star_423},{t:this.star_422},{t:this.star_421},{t:this.star_420},{t:this.star_419},{t:this.star_418},{t:this.star_417},{t:this.star_416},{t:this.star_415},{t:this.star_414},{t:this.star_413},{t:this.star_412},{t:this.star_411},{t:this.star_410},{t:this.star_409},{t:this.star_408},{t:this.star_407},{t:this.star_406},{t:this.star_405},{t:this.star_404},{t:this.star_403},{t:this.star_402},{t:this.star_401},{t:this.star_400},{t:this.star_399},{t:this.star_398},{t:this.star_397},{t:this.star_396},{t:this.star_395},{t:this.star_394},{t:this.star_393},{t:this.star_392},{t:this.star_391},{t:this.star_390},{t:this.star_389},{t:this.star_388},{t:this.star_387},{t:this.star_386},{t:this.star_385},{t:this.star_384},{t:this.star_383},{t:this.star_382},{t:this.star_381},{t:this.star_380},{t:this.star_379},{t:this.star_378},{t:this.star_377},{t:this.star_376},{t:this.star_375},{t:this.star_374},{t:this.star_373},{t:this.star_372},{t:this.star_371},{t:this.star_370},{t:this.star_369},{t:this.star_368},{t:this.star_367},{t:this.star_366},{t:this.star_365},{t:this.star_364},{t:this.star_363},{t:this.star_362},{t:this.star_361},{t:this.star_360},{t:this.star_359},{t:this.star_358},{t:this.star_357},{t:this.star_356},{t:this.star_355},{t:this.star_354},{t:this.star_353},{t:this.star_352},{t:this.star_351},{t:this.star_350},{t:this.star_349},{t:this.star_348},{t:this.star_347},{t:this.star_346},{t:this.star_345},{t:this.star_344},{t:this.star_343},{t:this.star_342},{t:this.star_341},{t:this.star_340},{t:this.star_339},{t:this.star_338},{t:this.star_337},{t:this.star_336},{t:this.star_335},{t:this.star_334},{t:this.star_333},{t:this.star_332},{t:this.star_331},{t:this.star_330},{t:this.star_329},{t:this.star_328},{t:this.star_327},{t:this.star_326},{t:this.star_325},{t:this.star_324},{t:this.star_323},{t:this.star_322},{t:this.star_321},{t:this.star_320},{t:this.star_319},{t:this.star_318},{t:this.star_317},{t:this.star_316},{t:this.star_315},{t:this.star_314},{t:this.star_313},{t:this.star_312},{t:this.star_311},{t:this.star_310},{t:this.star_309},{t:this.star_308},{t:this.star_307},{t:this.star_306},{t:this.star_305},{t:this.star_304},{t:this.star_303},{t:this.star_302},{t:this.star_301},{t:this.star_300},{t:this.star_299},{t:this.star_298},{t:this.star_297},{t:this.star_296},{t:this.star_295},{t:this.star_294},{t:this.star_293},{t:this.star_292},{t:this.star_291},{t:this.star_290},{t:this.star_289},{t:this.star_288},{t:this.star_287},{t:this.star_286},{t:this.star_285},{t:this.star_284},{t:this.star_283},{t:this.star_282},{t:this.star_281},{t:this.star_280},{t:this.star_279},{t:this.star_278},{t:this.star_277},{t:this.star_276},{t:this.star_275},{t:this.star_274},{t:this.star_273},{t:this.star_272},{t:this.star_271},{t:this.star_270},{t:this.star_269},{t:this.star_268},{t:this.star_267},{t:this.star_266},{t:this.star_265},{t:this.star_264},{t:this.star_263},{t:this.star_262},{t:this.star_261},{t:this.star_260},{t:this.star_259},{t:this.star_258},{t:this.star_257},{t:this.star_256},{t:this.star_255},{t:this.star_254},{t:this.star_253},{t:this.star_252},{t:this.star_251},{t:this.star_250},{t:this.star_249},{t:this.star_248},{t:this.star_247},{t:this.star_246},{t:this.star_245},{t:this.star_244},{t:this.star_243},{t:this.star_242},{t:this.star_241},{t:this.star_240},{t:this.star_239},{t:this.star_238},{t:this.star_237},{t:this.star_236},{t:this.star_235},{t:this.star_234},{t:this.star_233},{t:this.star_232},{t:this.star_231},{t:this.star_230},{t:this.star_229},{t:this.star_228},{t:this.star_227},{t:this.star_226},{t:this.star_225},{t:this.star_224},{t:this.star_223},{t:this.star_222},{t:this.star_221},{t:this.star_220},{t:this.star_219},{t:this.star_218},{t:this.star_217},{t:this.star_216},{t:this.star_215},{t:this.star_214},{t:this.star_213},{t:this.star_212},{t:this.star_211},{t:this.star_210},{t:this.star_209},{t:this.star_208},{t:this.star_207},{t:this.star_206},{t:this.star_205},{t:this.star_204},{t:this.star_203},{t:this.star_202},{t:this.star_201},{t:this.star_200},{t:this.star_199},{t:this.star_198},{t:this.star_197},{t:this.star_196},{t:this.star_195},{t:this.star_194},{t:this.star_193},{t:this.star_192},{t:this.star_191},{t:this.star_190},{t:this.star_189},{t:this.star_188},{t:this.star_187},{t:this.star_186},{t:this.star_185},{t:this.star_184},{t:this.star_183},{t:this.star_182},{t:this.star_181},{t:this.star_180},{t:this.star_179},{t:this.star_178},{t:this.star_177},{t:this.star_176},{t:this.star_175},{t:this.star_174},{t:this.star_173},{t:this.star_172},{t:this.star_171},{t:this.star_170},{t:this.star_169},{t:this.star_168},{t:this.star_167},{t:this.star_166},{t:this.star_165},{t:this.star_164},{t:this.star_163},{t:this.star_162},{t:this.star_161},{t:this.star_160},{t:this.star_159},{t:this.star_158},{t:this.star_157},{t:this.star_156},{t:this.star_155},{t:this.star_154},{t:this.star_153},{t:this.star_152},{t:this.star_151},{t:this.star_150},{t:this.star_149},{t:this.star_148},{t:this.star_147},{t:this.star_146},{t:this.star_145},{t:this.star_144},{t:this.star_143},{t:this.star_142},{t:this.star_141},{t:this.star_140},{t:this.star_139},{t:this.star_138},{t:this.star_137},{t:this.star_136},{t:this.star_135},{t:this.star_134},{t:this.star_133},{t:this.star_132},{t:this.star_131},{t:this.star_130},{t:this.star_129},{t:this.star_128},{t:this.star_127},{t:this.star_126},{t:this.star_125},{t:this.star_124},{t:this.star_123},{t:this.star_122},{t:this.star_121},{t:this.star_120},{t:this.star_119},{t:this.star_118},{t:this.star_117},{t:this.star_116},{t:this.star_115},{t:this.star_114},{t:this.star_113},{t:this.star_112},{t:this.star_111},{t:this.star_110},{t:this.star_109},{t:this.star_108},{t:this.star_107},{t:this.star_106},{t:this.star_105},{t:this.star_104},{t:this.star_103},{t:this.star_102},{t:this.star_101},{t:this.star_100},{t:this.star_99},{t:this.star_98},{t:this.star_97},{t:this.star_96},{t:this.star_95},{t:this.star_94},{t:this.star_93},{t:this.star_92},{t:this.star_91},{t:this.star_90},{t:this.star_89},{t:this.star_88},{t:this.star_87},{t:this.star_86},{t:this.star_85},{t:this.star_84},{t:this.star_83},{t:this.star_82},{t:this.star_81},{t:this.star_80},{t:this.star_79},{t:this.star_78},{t:this.star_77},{t:this.star_76},{t:this.star_75},{t:this.star_74},{t:this.star_73},{t:this.star_72},{t:this.star_71},{t:this.star_70},{t:this.star_69},{t:this.star_68},{t:this.star_67},{t:this.star_66},{t:this.star_65},{t:this.star_64},{t:this.star_63},{t:this.star_62},{t:this.star_61},{t:this.star_60},{t:this.star_59},{t:this.star_58},{t:this.star_57},{t:this.star_56},{t:this.star_55},{t:this.star_54},{t:this.star_53},{t:this.star_52},{t:this.star_51},{t:this.star_50},{t:this.star_49},{t:this.star_48},{t:this.star_47},{t:this.star_46},{t:this.star_45},{t:this.star_44},{t:this.star_43},{t:this.star_42},{t:this.star_41},{t:this.star_40},{t:this.star_39},{t:this.star_38},{t:this.star_37},{t:this.star_36},{t:this.star_35},{t:this.star_34},{t:this.star_33},{t:this.star_32},{t:this.star_31},{t:this.star_30},{t:this.star_29},{t:this.star_28},{t:this.star_27},{t:this.star_26},{t:this.star_25},{t:this.star_24},{t:this.star_23},{t:this.star_22},{t:this.star_21},{t:this.star_20},{t:this.star_19},{t:this.star_18},{t:this.star_17},{t:this.star_16},{t:this.star_15},{t:this.star_14},{t:this.star_13},{t:this.star_12},{t:this.star_11},{t:this.star_10},{t:this.star_9},{t:this.star_8},{t:this.star_7},{t:this.star_6},{t:this.star_5},{t:this.star_4},{t:this.star_3},{t:this.star_2},{t:this.star_1},{t:this.star},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.stars, new cjs.Rectangle(74.1,126,428.6,232.89999999999998), null);


(lib.Ship3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_48 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(1));

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(1008.4,428.65,1,1,0,0,0,999.2,411.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:976.2,regY:408.7,x:985.4,y:428.5},0).wait(1).to({y:431.35},0).wait(1).to({y:434.2},0).wait(1).to({y:437.05},0).wait(1).to({y:439.9},0).wait(1).to({y:442.75},0).wait(1).to({y:445.65},0).wait(1).to({y:448.5},0).wait(1).to({y:451.35},0).wait(1).to({y:454.2},0).wait(1).to({y:457.05},0).wait(1).to({y:459.9},0).wait(1).to({y:462.75},0).wait(1).to({y:465.65},0).wait(1).to({y:461.65},0).wait(1).to({y:457.65},0).wait(1).to({y:453.65},0).wait(1).to({y:449.65},0).wait(1).to({y:445.65},0).wait(1).to({y:441.65},0).wait(1).to({y:437.65},0).wait(1).to({y:433.65},0).wait(1).to({y:429.65},0).wait(1).to({y:425.65},0).wait(1).to({y:422.3},0).wait(1).to({y:418.95},0).wait(1).to({y:415.65},0).wait(1).to({y:412.3},0).wait(1).to({y:408.95},0).wait(1).to({y:405.65},0).wait(1).to({y:402.35},0).wait(1).to({y:399},0).wait(1).to({y:395.65},0).wait(1).to({y:392.35},0).wait(1).to({y:389},0).wait(1).to({y:385.65},0).wait(1).to({y:389.3},0).wait(1).to({y:392.95},0).wait(1).to({y:396.6},0).wait(1).to({y:400.2},0).wait(1).to({y:403.85},0).wait(1).to({y:407.5},0).wait(1).to({y:411.1},0).wait(1).to({y:414.7},0).wait(1).to({y:418.35},0).wait(1).to({y:422},0).wait(1).to({y:425.65},0).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,-27.2,2006.6,912);


(lib.SamWalk = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAEgEIgHAEIAEADIADACg");
	this.shape.setTransform(10,-37.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AAEgEIgHAEIAHAFg");
	this.shape_1.setTransform(0.95,-37.95);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221F20").ss(0.5).p("AgbgBQgBAEAEAFQAEAEAGABQALAEARgFQAUgFgIgMQgHgKgVABQgWABgDAMg");
	this.shape_2.setTransform(3.2705,-26.3907);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221F20").ss(0.5).p("AAZAIQgKgIgOgEQgNgDgNAD");
	this.shape_3.setTransform(9.6,-41.8062);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221F20").ss(0.5).p("AgYAIQAJgIAOgEQANgDANAD");
	this.shape_4.setTransform(-1.025,-41.8107);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221F20").ss(0.5).p("AABgMQAGAIgEAIQgDAJgJAA");
	this.shape_5.setTransform(6.4012,-32.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221F20").ss(0.5).p("AAHgBIAAgDQgBgEgEgCQgEAAgBABQgCABgBAEQgCAEABAFQADAEACABQADACAEgDQADgCAAgEQAAgCgBgCg");
	this.shape_6.setTransform(9.2512,-37.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221F20").ss(0.5).p("AgLgYQALAAAMAEIAGADQADACADAHQAHANgEAIQgEAJgRACQgJACgKgCQgFAAgDgCQgEgDgBgGQgCgLAEgJQAEgKAJgHgAgfgVIAKgCQAFgBAFAA");
	this.shape_7.setTransform(9.2783,-38.0389);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221F20").ss(0.5).p("AAHgEQgBgEgEgBQgCgCgDACQgCABgBAEQgCAEACAFQADAEABABQADACAEgDQADgCAAgE");
	this.shape_8.setTransform(0.2429,-37.9208);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221F20").ss(0.5).p("AAMgYQgMAAgMAEIgGADQgDACgDAHQgGANADAIQAEAJARACQAJACAKgCQAGAAADgCQADgCACgIQABgKgEgJQgEgKgIgHgAAggVQgKgDgIAAQgBAAgBAA");
	this.shape_9.setTransform(0.0502,-38.0385);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221F20").ss(0.5,1,1).p("ABdiSQAAgFgIgGQgNgKgaAAQgVgBgTAFQgYAGgVARQgUAQgMAWQgVAnADBFQACAmAAATQABAggEAXQgDASAEAHQAGAHAOACIBkARQgLgZgGgRQgbhLAJg+QAEgjARgcQARgeAbgTQAFgDAPgIQAMgGAAgHg");
	this.shape_10.setTransform(-6.959,-34.3523);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221F20").ss(0.5,1,1).p("AhNibQAWgMAhAGQAgAGASATQAgAiADA+QABAUgBAfQgEAsAAAHQgBBAAUAmQg7gOg9gD");
	this.shape_11.setTransform(10.1,-33.5364);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221F20").ss(0.5,1,1).p("AAegVQADAQgCAQQgBAGgDAAQgBAAgDgCQgGgFgDgJQgBAJgFAIQgBACgDAAQgCgBAAgDIgCgOIgGAPIgCAEQgCACgCgBQgBAAgBgEIgBgQQgCAJgFAHQgCADgCAAQgDAAgBgEQgBgCABgDQAFgSAEgK");
	this.shape_12.setTransform(12.8985,23.3917);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221F20").ss(0.5,1,1).p("AAfgRIgBAgQAAAHgDAAQgDAAgBgDQgFgJgBgIQgCAKgDAEQgBAEgCAAQgCAAgCgFIgCgPIgGAMQgBAEgDgBQgCAAAAgEIgCgMQgDAGgGAJQgCACgCABQgDABgCgEQgBgDABgDQAAgPAIgO");
	this.shape_13.setTransform(-17.82,24.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221F20").ss(0.5,1,1).p("AAqACQgYABgfgCIgcgC");
	this.shape_14.setTransform(-5.375,18.0281);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221F20").ss(0.5,1,1).p("AAUgCIgLACQgNADgPAA");
	this.shape_15.setTransform(4.525,17.85);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221F20").ss(0.5,1,1).p("AAGBlQgGg/AAg0QAAgLgFhL");
	this.shape_16.setTransform(9.025,11.275);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221F20").ss(0.5,1,1).p("AgMiKIABACQAbCBgEB+IgBAU");
	this.shape_17.setTransform(-10.7443,5.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221F20").ss(0.5,1,1).p("AAGiBQAOApgJAhIgFAQQgGAPgEAOQgEAQgCAlIgDBW");
	this.shape_18.setTransform(7.8856,5.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221F20").ss(0.5,1,1).p("AATgJIACAGQABAFgDAFQgFAMgLABQgFABgGgDQgGgDgDgGQgCgDgBgFQAAgFACgEQAGgLAMgBQANAAAGALg");
	this.shape_19.setTransform(0.6893,19.1101);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221F20").ss(0.5,1,1).p("AAUgCIgPADQgNADgLgB");
	this.shape_20.setTransform(4.6,19.5625);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221F20").ss(0.5,1,1).p("AAqACQghABgYgCIgagC");
	this.shape_21.setTransform(-5.375,19.7893);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221F20").ss(0.5,1,1).p("AgZCGIAnkIQAFgDAEAAQADAAAAAB");
	this.shape_22.setTransform(-15.1,68.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221F20").ss(0.5,1,1).p("AAgg4QAgAOARAeQAFAIAFALQAJAcgOANQgKALgagDQhYgMg3g6");
	this.shape_23.setTransform(-8.27,83.5083);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221F20").ss(0.5,1,1).p("AgIhrIAEAFQAOAUgBAvIgDCP");
	this.shape_24.setTransform(-5.7968,67.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221F20").ss(0.5,1,1).p("AAAAEIAAgH");
	this.shape_25.setTransform(-5.175,77.475);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221F20").ss(0.5,1,1).p("AAlAAQggAOgegOIgLgG");
	this.shape_26.setTransform(-9.95,56.8625);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221F20").ss(0.5,1,1).p("AAPi4QgTD6gJBrIgBAM");
	this.shape_27.setTransform(-11.075,38.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221F20").ss(0.5,1,1).p("AAJigIgRFBIACgC");
	this.shape_28.setTransform(-5.775,40.725);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#221F20").ss(0.5,1,1).p("AApgDIgKADQgVADgQAAQgQABgPgCIgDAA");
	this.shape_29.setTransform(-1.025,24.6563);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#221F20").ss(0.5,1,1).p("AgKiYQAGAEAEAMQANAfAAA3QABBDAEAVQACAFAAABQACADAHACQAjAMAYAeQASAWgHASQgDAKgLAGQgJAFgMABQgJAAgNgCQgHgCgOgDQgTgEglgDQgigEgTgMQgGgDgDgEIgCgIQgDgXADgwIAHiIQACglARgKIADgC");
	this.shape_30.setTransform(11.5018,70.2042);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#221F20").ss(0.5,1,1).p("AACi/IAAADIACALQAZC9AMCnIAAAIQgCAFgJAAQgXABgbgFIAAgDQgOimgGiO");
	this.shape_31.setTransform(6.225,37.0173);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#221F20").ss(0.5,1,1).p("AAmgGIgLAGQgOAGgNABQgKABgOgCIgKgCIgDgB");
	this.shape_32.setTransform(13.125,21.0417);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#221F20").ss(0.5,1,1).p("AAriXQgcCOAIA7QAEAUABAOQAEAdgDAgQgEADgGABQgVAHgWgHIgSgK");
	this.shape_33.setTransform(-16.7,7.4875);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#221F20").ss(0.5,1,1).p("ABPjDQgTAAgVAFIgOADQgQAFgLAFQgoASgVBmQgKAzgEA7QgEBDAJBM");
	this.shape_34.setTransform(-13.689,1.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#221F20").ss(0.5,1,1).p("Ag5i+QARABAPAGQAaAKASAUQAOAOAFAeQADAOACAlQADA5ACBEQACA9AIA/");
	this.shape_35.setTransform(11.075,1.225);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#221F20").ss(0.5,1,1).p("AAAgBIAAAC");
	this.shape_36.setTransform(5.425,-21.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#221F20").ss(0.5,1,1).p("AABgUQgBAJAAALIABAV");
	this.shape_37.setTransform(5.275,-19.025);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#221F20").ss(0.5,1,1).p("AhlCFQAMAFALABQANABAHAAQAXABAJAAQATgBAQgFQANgEAJgGQA0gdAOhKQAJgmgKgjIgDgLIgBgCQgNghgpgWQgbgPgNgCQgMgEgIAA");
	this.shape_38.setTransform(4.5507,-34.925);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FBE1A3").s().p("AAXATQgFgIgBgJQgCAKgDAFQAAABAAAAQgBABAAAAQgBABAAAAQgBAAAAAAQgCAAgCgFIgCgPIgGANQgBADgDAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBIgCgNIgJAPQgCADgCAAQgDABgCgDQgBgDABgEQAAgOAIgOIAAgBIAIADQAVAHAWgHIABABIgBAhQAAAHgDAAQgDAAgBgEg");
	this.shape_39.setTransform(-17.82,24.25);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#AD7E53").s().p("AgGAAIABgCQAEgEAEAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABIgCALg");
	this.shape_40.setTransform(-13.1,56.125);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AD7E53").s().p("AgPAJIgagDIAAgQIAcADQAfACAYgBQgCAEAAAFIACAIIgSAAQgWAAgRgCg");
	this.shape_41.setTransform(-5.375,18.9143);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AD7E53").s().p("AAyCkQhYgMg3g7IAnkBIAMAGQAfAPAfgPQAPAUgBAvIgDCPIABAAQAgAOARAeQAFAHAFANQAJAbgOAOQgIAIgSAAIgKgBg");
	this.shape_42.setTransform(-8.27,72.6583);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#221F20").s().p("AgCAKIgEgFQgCgFACgEQABgEACgBQADgCACACQAEABABAEIABACIgFACIAFADQAAAEgDACQgDACgCAAIgCgBg");
	this.shape_43.setTransform(0.2429,-37.9208);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FBE1A3").s().p("AgCAAIAEgCIAAAFg");
	this.shape_44.setTransform(0.8083,-37.925);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FBE1A3").s().p("AAAADIgBgEIADgCIAAAIg");
	this.shape_45.setTransform(1.175,-37.95);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F7ED5C").s().p("AhFCYQgOgCgGgHQgEgHADgSQAEgXgBggQAAgTgCgmQgDhFAVgnQAMgWAUgQQAVgRAYgGQATgFAVABQAaAAANAKQAIAGAAAFIgBAAIABAAQAAAHgMAGIgUALQgbATgRAeQgRAcgEAjQgJA+AbBLIARAqg");
	this.shape_46.setTransform(-6.959,-34.3523);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B4B4B4").s().p("AgIASQgGgDgDgGIgDgIQAAgFACgEQAGgLAMgBQANAAAGALIACAGQABAFgDAFQgFAMgLABIgDABQgEAAgEgDg");
	this.shape_47.setTransform(0.6893,19.1101);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgHAYQgRgCgEgJQgEgIAHgNQADgHADgCIAGgDQANgFAMABQAJAAAJADIgUgCQAJAGAEAKQAEAJgCAKQgCAIgDACQgDACgFAAIgKABIgJgBgAgDgIQgCABgBAEQgCAEACAFIAEAFQADACAEgDQADgCAAgEIADABIAAgIIgDACIgBgCQgBgEgEgBIgCgBIgDABg");
	this.shape_48.setTransform(0.2138,-38.04);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#AA7E76").s().p("AgOANQgGgBgEgEQgEgFABgEQADgMAWgBQAVgBAHAKQAIAMgUAFQgKADgHAAQgGAAgFgCg");
	this.shape_49.setTransform(3.2705,-26.3907);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#AD7E53").s().p("AgTALQADgFgBgGIgCgFQAOAAAOgDIAKgDIAAAGIABAKIgOAEQgKADgJAAIgGgBg");
	this.shape_50.setTransform(4.575,18.7125);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#221F20").s().p("AgCAKIgEgFQgCgFACgEQABgEACgBQACgBAEAAQADACABAEIABADIgEABIAEADQAAAEgDACQgDACgCAAIgCgBg");
	this.shape_51.setTransform(9.2429,-37.925);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#221F20").s().p("AgBAAIADgCIAAAFg");
	this.shape_52.setTransform(9.8333,-37.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#3B74B7").s().p("AhyC4IACgMIAcllIAAgCIAaADQAaACAggBQADAGAFADQAHAEAFgBQAMgBAFgMQAMABANgDIAPgEQAZC9ANCmIgBAJQgCAEgIAAQgYACgcgFIAAgEQgNimgHiNIAAgBQgVAEgRAAQgQABgPgCIgSE+IACgCIACACQgQAHgPAAQgQAAgQgHg");
	this.shape_53.setTransform(-1.1,38.3875);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAAADIgBgEIADgCIAAAIg");
	this.shape_54.setTransform(10.2,-37.95);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgLAYQgFAAgDgCQgEgDgBgGQgCgLAEgJQAEgKAJgGIgUACIAKgCQASgDAPAGIAGADQADACADAHQAHANgEAIQgEAJgRACIgJABIgKgBgAgBgIQgCABgBAEQgCAEABAFIAFAFQADACAEgDQADgCAAgEIADABIAAgIIgEADIAAgDQgBgEgEgCQgEAAgBABg");
	this.shape_55.setTransform(9.0863,-38.0375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FBE1A3").s().p("AgJAsQgKgDgIAAIAAgSQgNgDgOADQgOAEgJAJIgSgHQASgeAbgSIAUgLQAMgHgBgGQAIAAALAEQAOACAbAPQApAWANAgIABACIgRACQgKgJgOgEQgOgDgNADIAAATIgKACg");
	this.shape_56.setTransform(4.275,-44.625);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FBE1A3").s().p("AgvBrIgUgBQgLgBgMgFQgchLAJg+QAGgjAQgcIASAHQAJgJAOgEQAOgDANADIAAASQgNgBgOAFIgGADQgDACgDAHQgGAOADAIQAEAJARACQAKACAKgCQAGAAADgCQADgCACgIQABgKgEgKQgEgKgIgGIAUACIAvgCQgJAGgEAKQgEAKACALQABAGAEADQADACAFAAQAKACAKgCQARgCAEgJQAEgIgHgOQgDgHgDgCIgGgDQgQgGgSADIAAgTQANgDAOADQAOAEAKAJIARgCIADALQAKAjgJAnQgOBJg0AdQgJAGgNAEQgRAFgSABIgggBgAgEAlQgWABgDAMQgBAGAEAEQAEAEAGACQALAEARgFQAUgGgIgNQgGgJgSAAIgEAAg");
	this.shape_57.setTransform(3.4912,-31.6375);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FBE1A3").s().p("AgMAXIgCgEIgBgQQgCAJgFAHQgBAAAAABQgBAAAAABQgBAAAAAAQgBABAAAAQgDAAgBgEIAAgFQAFgSAEgKQANACAJgBQAPgBANgHIABACQADAQgCAQQgBAGgDAAIgEgCQgGgFgDgJQgBAJgFAIQgBAAAAABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCgBAAgDIgCgOIgGAPIgCAEIgDABIgBAAg");
	this.shape_58.setTransform(12.8985,23.2917);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#DA615B").s().p("AioDaIgSgJQgIhMAEhDQAEg8AKgyQAVhmAngSQAMgFARgFIAOgDQAUgFATAAIATADIgRgqQAMAFALABIATACIAgABQATgBARgFIgBADQgCAJAAALIAAADIABAJQARABAPAGQAbAKASAUQAOAOAFAeQADAOACAlQADA4ACBFQACA9AIA/IgLAGQgNAHgPABQgKABgNgCIgLgCIAAgBQgGg/AAg1IgFhVQgHAPgEAOQgEARgCAlIgDBQIgKADQgPADgOAAQgGgLgNAAQgNABgGALQgWABgggCIgcgDQAEiAgch/IgFAAQgcCOAIA8IAFAhQAEAdgDAhQgEACgGABQgLAEgLAAQgLAAgLgEg");
	this.shape_59.setTransform(-2.339,0.5375);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#D4CC4D").s().p("AgpCTIgHAAIgBgDQABgLACgJIAAgDQAOgEAJgGQAzgdAOhKQAIgmgJgjIgDgLIgBgCQgNghgogWQgbgPgPgCQgLgEgIAAIAAgBQAXgMAgAGQAgAGASATQAgAiAEA+QABAUgCAfIgEAzQgCBAAVAmQg7gOg8gDg");
	this.shape_60.setTransform(10.1,-33.5364);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#AD7E53").s().p("AAqCXIgVgFQgTgEglgDQgigEgTgMQgGgDgDgEIgCgIQgDgXADgwIAHiIQACglARgKIAAADQAcAFAXgBQAJAAACgFIAAgIIABAAQAGAEAEAMQANAfAAA3QABBDAEAVIACAGQACADAHACQAjAMAYAeQASAWgHASQgDAKgLAGQgJAFgMABIgDAAQgIAAgLgCg");
	this.shape_61.setTransform(11.5018,70.2042);

	this.instance = new lib.SamEat();
	this.instance.setTransform(26.25,3.9,1.0619,1.0619,0,0,0,44.1,80.8);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#221F20").ss(0.5).p("AgOgJQAKAAAEAEQAKAGAAAO");
	this.shape_62.setTransform(-0.05,-26.425);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#221F20").ss(0.5).p("AgsgCQABAHAEAGQAGAIANAEIAJACQANACANgDIAPgEQAJgDADgDQAFgHgDgFQgBgDgGgBQgEgBgMgDIgggPQgNgFgGABQAAABgEABQgEACgCADQgFAHABAJg");
	this.shape_63.setTransform(3.0229,-27.1966);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BD5E38").s().p("AgGABQgEgFgBgIQAJAAAFAFQAJAHAAANQgMgEgGgIg");
	this.shape_64.setTransform(-0.3,-26.175);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#AA7E76").s().p("AgLAZIgJgCQAAgOgJgHQgGgEgJAAQgBgJAFgHQACgDAEgCIAEgCQAGgBANAFIAgAPIAQAEQAGABABADQADAFgFAHQgDADgJADIgPAEIgPACIgLgBg");
	this.shape_65.setTransform(3.0229,-27.1966);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#221F20").ss(0.5).p("AgPgOQACANALAGQAKAIANgC");
	this.shape_66.setTransform(10.7472,-41.6674);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#221F20").ss(0.5).p("AgcAOQAQABAOgIQAPgIAHgP");
	this.shape_67.setTransform(-1.5483,-41.7224);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#221F20").ss(0.5).p("AAggVQgKgDgIAAQgBAAgBAAQgMAAgMAEIgGADQgDACgDAHQgGANADAIQAEAJARACQAJACAKgCQAGAAADgCQADgCACgIQABgKgEgJQgEgKgIgH");
	this.shape_68.setTransform(0.0502,-38.0385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_68},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_1},{t:this.shape},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.6,-58.5,45.5,148.7);


(lib.Ice_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Symbol1();
	this.instance.setTransform(450.15,6.3,1,1,0,0,0,578.1,602);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:619.9,regY:335.9,x:492.05,y:-253.65},0).wait(1).to({x:492.1,y:-247.5},0).wait(1).to({x:492.15,y:-241.35},0).wait(1).to({x:492.2,y:-235.2},0).wait(1).to({x:492.3,y:-229.05},0).wait(1).to({x:492.35,y:-222.9},0).wait(1).to({x:492.4,y:-216.75},0).wait(1).to({x:492.45,y:-210.6},0).wait(1).to({x:492.5,y:-204.45},0).wait(1).to({x:492.6,y:-198.3},0).wait(1).to({x:492.65,y:-192.15},0).wait(1).to({x:492.7,y:-186},0).wait(1).to({x:492.75,y:-179.85},0).wait(1).to({x:492.85,y:-173.7},0).wait(1).to({x:492.9,y:-167.55},0).wait(1).to({x:492.95,y:-161.4},0).wait(1).to({x:493,y:-155.25},0).wait(1).to({x:493.05,y:-149.15},0).wait(1).to({x:493.15,y:-143},0).wait(1).to({x:493.2,y:-136.85},0).wait(1).to({x:493.25,y:-130.7},0).wait(1).to({x:493.3,y:-124.55},0).wait(1).to({x:493.4,y:-118.4},0).wait(1).to({x:493.45,y:-112.25},0).wait(1).to({x:493.5,y:-106.1},0).wait(1).to({x:493.55,y:-99.95},0).wait(1).to({x:493.6,y:-93.8},0).wait(1).to({x:493.7,y:-87.65},0).wait(1).to({x:493.75,y:-81.5},0).wait(1).to({x:493.8,y:-75.35},0).wait(1).to({x:493.85,y:-69.2},0).wait(1).to({x:493.95,y:-63.05},0).wait(1).to({x:494,y:-56.9},0).wait(1).to({x:494.05,y:-50.75},0).wait(1).to({x:494.1,y:-44.65},0).wait(1).to({x:494.15,y:-38.5},0).wait(1).to({x:494.25,y:-32.35},0).wait(1).to({x:494.3,y:-26.2},0).wait(1).to({x:494.35,y:-20.05},0).wait(1).to({x:494.4,y:-13.9},0).wait(1).to({x:494.5,y:-7.75},0).wait(1).to({x:494.55,y:-1.6},0).wait(1).to({x:494.6,y:4.55},0).wait(1).to({x:494.65,y:10.7},0).wait(1).to({x:494.7,y:16.85},0).wait(1).to({x:494.8,y:23},0).wait(1).to({x:494.85,y:29.15},0).wait(1).to({x:494.9,y:35.3},0).wait(1).to({x:494.95,y:41.45},0).wait(1).to({x:495,y:47.6},0).wait(1).to({x:495.1,y:53.75},0).wait(1).to({x:495.15,y:59.85},0).wait(1).to({x:495.2,y:66},0).wait(1).to({x:495.25,y:72.15},0).wait(1).to({x:495.35,y:78.3},0).wait(1).to({x:495.4,y:84.45},0).wait(1).to({x:495.45,y:90.6},0).wait(1).to({x:495.5,y:96.75},0).wait(1).to({x:495.55,y:102.9},0).wait(1).to({x:495.65,y:109.05},0).wait(1).to({x:495.7,y:115.2},0).wait(1).to({x:495.75,y:121.35},0).wait(1).to({x:495.8,y:127.5},0).wait(1).to({x:495.9,y:133.65},0).wait(1).to({x:495.95,y:139.8},0).wait(1).to({x:496,y:145.95},0).wait(1).to({x:496.05,y:152.1},0).wait(1).to({x:496.1,y:158.25},0).wait(1).to({x:496.2,y:164.4},0).wait(1).to({x:496.25,y:170.5},0).wait(1).to({x:496.3,y:176.65},0).wait(1).to({x:496.35,y:182.8},0).wait(1).to({x:496.45,y:188.95},0).wait(1).to({x:496.5,y:195.1},0).wait(1).to({x:496.55,y:201.25},0).wait(1).to({x:496.6,y:207.4},0).wait(1).to({x:496.65,y:213.55},0).wait(1).to({x:496.75,y:219.7},0).wait(1).to({x:496.8,y:225.85},0).wait(1).to({x:496.85,y:232},0).wait(1).to({x:496.9,y:238.15},0).wait(1).to({x:497,y:244.3},0).wait(1).to({x:497.05,y:250.45},0).wait(1).to({x:497.1,y:256.6},0).wait(1).to({x:497.15,y:262.75},0).wait(1).to({x:497.2,y:268.9},0).wait(1).to({x:497.3,y:275},0).wait(1).to({x:497.35,y:281.15},0).wait(1).to({x:497.4,y:287.3},0).wait(1).to({x:497.45,y:293.45},0).wait(1).to({x:497.5,y:299.6},0).wait(1).to({x:497.6,y:305.75},0).wait(1).to({x:497.65,y:311.9},0).wait(1).to({x:497.7,y:318.05},0).wait(1).to({x:497.75,y:324.2},0).wait(1).to({x:497.85,y:330.35},0).wait(1).to({x:497.9,y:336.45},0).wait(1).to({x:497.95,y:342.6},0).wait(1).to({x:498,y:348.75},0).wait(1).to({x:498.05,y:354.9},0).wait(1).to({x:498.15,y:361.05},0).wait(1).to({x:498.2,y:367.2},0).wait(1).to({x:498.25,y:373.35},0).wait(1).to({x:498.3,y:379.45},0).wait(1).to({x:498.4,y:385.6},0).wait(1).to({x:498.45,y:391.75},0).wait(1).to({x:498.5,y:397.9},0).wait(1).to({x:498.55,y:404.05},0).wait(1).to({x:498.6,y:410.2},0).wait(1).to({x:498.7,y:416.35},0).wait(1).to({x:498.75,y:422.5},0).wait(1).to({x:498.8,y:428.65},0).wait(1).to({x:498.85,y:434.8},0).wait(1).to({x:498.95,y:440.95},0).wait(1).to({x:499,y:447.1},0).wait(1).to({x:499.05,y:453.25},0).wait(1).to({x:499.1,y:459.4},0).wait(1).to({x:499.15,y:465.55},0).wait(1).to({x:499.25,y:471.7},0).wait(1).to({x:499.3,y:477.85},0).wait(1).to({x:499.35,y:484},0).wait(1).to({x:499.4,y:490.1},0).wait(1).to({x:499.5,y:496.25},0).wait(1).to({x:499.55,y:502.4},0).wait(1).to({x:499.6,y:508.55},0).wait(1).to({x:499.65,y:514.7},0).wait(1).to({x:499.7,y:520.85},0).wait(1).to({x:499.8,y:527},0).wait(1).to({x:499.85,y:533.15},0).wait(1).to({x:499.9,y:539.3},0).wait(1).to({x:499.95,y:545.45},0).wait(1).to({x:500,y:551.6},0).wait(1).to({x:500.1,y:557.75},0).wait(1).to({x:500.15,y:563.9},0).wait(1).to({x:500.2,y:570.05},0).wait(1).to({x:500.25,y:576.2},0).wait(1).to({x:500.35,y:582.35},0).wait(1).to({x:500.4,y:588.5},0).wait(1).to({x:500.45,y:594.6},0).wait(1).to({x:500.5,y:600.75},0).wait(1).to({x:500.55,y:606.9},0).wait(1).to({x:500.65,y:613.05},0).wait(1).to({x:500.7,y:619.2},0).wait(1).to({x:500.75,y:625.35},0).wait(1).to({x:500.8,y:631.5},0).wait(1).to({x:500.9,y:637.65},0).wait(1).to({x:500.95,y:643.8},0).wait(1).to({x:501,y:649.95},0).wait(1).to({x:501.05,y:656.1},0).wait(1).to({x:501.1,y:662.25},0).wait(1).to({x:501.2,y:668.4},0).wait(1).to({x:501.25,y:674.55},0).wait(1).to({x:501.3,y:680.7},0).wait(1).to({x:501.35,y:686.85},0).wait(1).to({x:501.45,y:693},0).wait(1).to({x:501.5,y:699.1},0).wait(1).to({x:501.55,y:705.25},0).wait(1).to({x:501.6,y:711.4},0).wait(1).to({x:501.65,y:717.55},0).wait(1).to({x:501.75,y:723.7},0).wait(1).to({x:501.8,y:729.85},0).wait(1).to({x:501.85,y:736},0).wait(1).to({x:501.9,y:742.15},0).wait(1).to({x:502,y:748.3},0).wait(1).to({x:502.05,y:754.45},0).wait(1).to({x:502.1,y:760.6},0).wait(1).to({x:502.15,y:766.75},0).wait(1).to({x:502.2,y:772.9},0).wait(1).to({x:502.3,y:779.05},0).wait(1).to({x:502.35,y:785.2},0).wait(1).to({x:502.4,y:791.35},0).wait(1).to({x:502.45,y:797.5},0).wait(1).to({x:502.5,y:803.65},0).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAZAAQgCgJgFgCQgEgBgGACIggALQAEAJACACQAEACAIgDQADgBAcgKg");
	this.shape.setTransform(1002.5645,118.4421,2.0367,2.0379);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAXAPQADgGgGgFQgCgDgIgCQgKgEgWgJQgDAMANAEg");
	this.shape_1.setTransform(1007.4101,53.0813,2.0367,2.0379);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgZgKIgBARQAjAFARgBQADgMgPgDg");
	this.shape_2.setTransform(977.7665,108.7333,2.0367,2.0379);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAXAPQACgFgFgGQgCgCgIgDQgKgEgWgIQgDALANAEg");
	this.shape_3.setTransform(958.616,134.8503,2.0367,2.0379);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221E1F").ss(0.5,1,1).p("AARAWQAFgGgEgIQgBgDgHgEIgagWQgGAOAIAHQACACAdAUg");
	this.shape_4.setTransform(979.6126,129.5518,2.0367,2.0379);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgKAWQAJACADgDQADgCABgHIAFgiQgLAAgBABQgEACgBAJQgFAgABAAg");
	this.shape_5.setTransform(986.6105,70.1109,2.0367,2.0379);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgJAVIAQgBQABgHACgRQAAgPgMgBg");
	this.shape_6.setTransform(974.1019,89.0494,2.0367,2.0379);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgZgKIgBARQAtAEAHAAQADgMgPgDQgngFAAgBg");
	this.shape_7.setTransform(974.1005,55.2267,2.0367,2.0379);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAWAHQgBABgEgBIgpgFIABgJIAiACQAFAAACAAQAFABABACQACACgBACQgBAEgCABg");
	this.shape_8.setTransform(997.4346,89.0494,2.0367,2.0379);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAAgPQgBgEgDgCQgCgBgCABQgCABAAACQAEASAFANQABAHAGACQAFACAAgIQgBgIgKgXg");
	this.shape_9.setTransform(940.0935,118.4334,2.0367,2.0379);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#221E1F").ss(0.5,1,1).p("AACgaQgFAAgCAHQgCAGABAHQADAdABAEQAKgCgBgOg");
	this.shape_10.setTransform(907.0119,101.5313,2.0367,2.0379);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221E1F").ss(0.5,1,1).p("AALgYQgHgBgEAGQgCADgBAHIgHAiQANgBAEgKQAFgmgBAAg");
	this.shape_11.setTransform(918.8106,81.2769,2.0367,2.0379);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAZAAQgCgIgFgDQgEgBgGACIggAKQAFAKABACQADACAJgDg");
	this.shape_12.setTransform(953.5823,76.2351,2.0367,2.0379);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgBAcIAQgHQgBgDgJgVQgFgPgFgJQgNADAFAQQABACALAig");
	this.shape_13.setTransform(940.1751,91.2401,2.0367,2.0379);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgZgKIgBARQAsAEAIgBQADgLgPgDg");
	this.shape_14.setTransform(64.9124,126.8064,2.0367,2.0379);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgKAWQAJACADgDQADgCABgHIAFgiQgLAAgBABQgDACgCAJQgEAgAAAAg");
	this.shape_15.setTransform(146.2873,137.6659,2.0367,2.0379);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAXAHQgDACgDgBIgpgGIABgJQAMABAWABQAFAAACABQAFAAABACQACACgBACQAAAEgCABg");
	this.shape_16.setTransform(113.7182,123.0205,2.0367,2.0379);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgJAVIAQgBQABgHACgRQAAgPgMgBg");
	this.shape_17.setTransform(145.5796,174.3338,2.0367,2.0379);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAWAHQgCABgDgBIgqgGIACgIIAiACQALAAACADQACACgBACQAAAEgDABg");
	this.shape_18.setTransform(137.494,153.9552,2.0367,2.0379);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221E1F").ss(0.5,1,1).p("AALgYQgHgBgEAGQgDAEgBAGQgFAWgBAMQANgBADgKg");
	this.shape_19.setTransform(78.5727,148.83,2.0367,2.0379);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221E1F").ss(0.5,1,1).p("AASgPIgJgGIgaAqQAHADAEgEQACgBAFgJg");
	this.shape_20.setTransform(91.4038,119.5036,2.0367,2.0379);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAZAAQgCgJgFgCQgCgBgIACIggALQAFAJABACQAEACAIgDg");
	this.shape_21.setTransform(113.2473,143.7901,2.0367,2.0379);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAAAcIAPgHQgBgCgJgWQgFgPgFgJQgNADAFAQQABADAMAhg");
	this.shape_22.setTransform(99.8674,158.7951,2.0367,2.0379);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgCgXQABABABAEIAOAoIgJACIgNgfQgBgBgCgFQgCgEABgCQABgCADgCQAEgBACABg");
	this.shape_23.setTransform(123.1931,168.2202,2.0367,2.0379);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAAgPQgBgEgDgCQgCgBgCABQgCABAAACQACAPAHAQQABAGAGADQAFACAAgJQgBgKgKgUg");
	this.shape_24.setTransform(596.3016,200.3973,2.0367,2.0379);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAXAOQADgFgGgGQgCgCgIgCQgZgLgHgCQgDALANAFg");
	this.shape_25.setTransform(559.2682,182.5361,2.0367,2.0379);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgYgKIgCARQAjAEARAAQADgMgPgDQgmgFAAgBg");
	this.shape_26.setTransform(572.4668,202.5637,2.0367,2.0379);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221E1F").ss(0.5,1,1).p("AALgYQgHgBgEAGQgCAFgBAGIgHAhQANAAAEgLQAFgmgBAAg");
	this.shape_27.setTransform(586.3222,223.0229,2.0367,2.0379);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAZAAQgBgIgGgDQgCgBgIACIggALQAEAJACACQAEACAIgDg");
	this.shape_28.setTransform(621.043,217.9914,2.0367,2.0379);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAAAcIAPgHQgDgIgGgQQgGgPgFgJQgMADAEAPQABADAMAig");
	this.shape_29.setTransform(607.6324,232.9731,2.0367,2.0379);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgCgWQACABAAAEIAOAnIgKACIgNgfQAAgBgDgFQgBgEABgCQABgDADgBQAEgBACACg");
	this.shape_30.setTransform(622.7844,253.6166,2.0367,2.0379);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgNAIQgDAGAAABQAAACACABQABABACgBQALgIANgNQAFgFgBgGQAAgGgIAFQgHAEgPATg");
	this.shape_31.setTransform(594.0616,257.3996,2.0367,2.0379);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgKAWQAKACACgDQADgCABgHIAFgiQgLAAgBABQgDACgBAJQgFAgAAAAg");
	this.shape_32.setTransform(384.9869,254.3332,2.0367,2.0379);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgYgKIgCARQAjAFARgBQADgMgPgDg");
	this.shape_33.setTransform(388.2489,232.7369,2.0367,2.0379);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAXAHQgDABgDgBIgpgGIABgIQAXABAMABQAKAAACADQACACgBACQAAAEgCABg");
	this.shape_34.setTransform(359.7494,255.6341,2.0367,2.0379);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAZAAQgDgJgEgCQgDgCgHADIggAKQAFAKABABQAEADAIgEQADgBAcgJg");
	this.shape_35.setTransform(362.3335,280.1741,2.0367,2.0379);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#221E1F").ss(0.5,1,1).p("AARAVQAEgGgDgHQgCgDgGgFQgJgGgRgOQgGANAIAHQACACAdATg");
	this.shape_36.setTransform(501.6556,175.4546,2.0367,2.0379);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgKAWQAKACACgCQADgDABgHIAFgiQgLAAgBABQgDACgBAJQgFAgAAAAg");
	this.shape_37.setTransform(490.4362,208.8004,2.0367,2.0379);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgZgKIgBARQAjAEARAAQADgMgPgDg");
	this.shape_38.setTransform(483.3619,189.3177,2.0367,2.0379);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAXAHQgCABgEgBIgpgGIACgIQAWABAMABQALAAABACQACADgBACQAAAEgCABg");
	this.shape_39.setTransform(457.8157,194.1927,2.0367,2.0379);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAXAOQADgFgGgGQgCgCgIgCQgKgEgWgJQgDAMANAEQADABAgALg");
	this.shape_40.setTransform(542.7425,202.4052,2.0367,2.0379);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#221E1F").ss(0.5,1,1).p("AARAVQAFgFgEgHQgBgEgGgFIgbgUQgGANAIAHQACACAdATg");
	this.shape_41.setTransform(555.2959,222.2234,2.0367,2.0379);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAGAZIAKgGIgZgrQgGAFABAGQAAABAGAKg");
	this.shape_42.setTransform(575.6614,246.8815,2.0367,2.0379);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgKAWQAJACADgCQADgDABgHIAFgiQgLAAgBABQgDACgCAJQgEAgAAAAg");
	this.shape_43.setTransform(544.0514,255.582,2.0367,2.0379);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgJAVIAQAAQABgIACgRQAAgPgMgBg");
	this.shape_44.setTransform(489.677,245.5059,2.0367,2.0379);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgZgKIgBARQAjAFARgBQADgMgPgDg");
	this.shape_45.setTransform(537.0285,236.0993,2.0367,2.0379);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAXAHQgCABgEAAIgpgGIABgJIAiACQALAAACADQACACgBACQAAAEgCABg");
	this.shape_46.setTransform(511.4823,240.9717,2.0367,2.0379);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAAgYQgCABgBAFQgEAVABAWIAHgBQACgQAFgfQgBABgDgCQgDgBgBABg");
	this.shape_47.setTransform(523.4287,179.8105,2.0367,2.0379);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAAgPQgBgEgDgCQgGgCAAAFQACAQAHAPQABAHAFACQAGACgBgJQAAgHgKgXg");
	this.shape_48.setTransform(521.1989,213.5552,2.0367,2.0379);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#221E1F").ss(0.5,1,1).p("AACgaQgFAAgCAIQgCAEABAIQADAeABADQAKgCgBgOQAAgDgFgig");
	this.shape_49.setTransform(410.8758,240.2075,2.0367,2.0379);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#221E1F").ss(0.5,1,1).p("AALgYQgIgBgDAGQgCADgBAIIgHAhQANAAAEgLQAFglgBgBg");
	this.shape_50.setTransform(422.6748,219.9672,2.0367,2.0379);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#221E1F").ss(0.5,1,1).p("AASgPIgJgGIgbAqQAIADAEgEQACgBAFgJg");
	this.shape_51.setTransform(435.5522,190.6249,2.0367,2.0379);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAZAAQgCgJgFgCQgDgBgHACIggALQAFAKACABQADACAIgDg");
	this.shape_52.setTransform(457.3956,214.9347,2.0367,2.0379);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAVABIgJgOQgGADgRAGQgNAGAGAMQADgBAkgMg");
	this.shape_53.setTransform(473.6753,267.5148,2.0367,2.0379);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAAAcIAPgHQgQgpgEgHQgMADAEAPQABADAMAig");
	this.shape_54.setTransform(443.985,229.9163,2.0367,2.0379);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgCgXQACACAAADIAOAnIgJADIgOgfQAAgCgDgEQgBgEABgDQABgCADgBQAEgBACABg");
	this.shape_55.setTransform(459.137,250.6107,2.0367,2.0379);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgVAMQACABAEgBQAUgHAUgKIgFgGQgPAFgdAJQABABAAADQAAAEACABg");
	this.shape_56.setTransform(399.5538,267.8714,2.0367,2.0379);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgNAIQgDADAAAEQAAACACABQABABACgBQANgKALgLQAFgFgBgGQAAgGgIAFQgIAEgOATg");
	this.shape_57.setTransform(430.4579,254.3529,2.0367,2.0379);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgagZIAKAnQADAOAHADQAGADAIgHQAEgDAEgKQAJgWACgX");
	this.shape_58.setTransform(0.1605,586.9944,2.0367,2.0379);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgGgqQAVASAHAOQAMAVgLAUQgGAJgMADQgKADgJgHQgHgFgDgMQgBgDgDgT");
	this.shape_59.setTransform(20.6931,594.1779,2.0367,2.0379);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgCg+QgFAQALASQADAGAHAIQAJALADADQANAQgBAQQgBATgQAIIgCABQgPAGgNgHIgGgEQgJgJgHgZIgHgZ");
	this.shape_60.setTransform(94.7153,591.0925,2.0367,2.0379);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#221E1F").ss(0.5,1,1).p("Ai2iMICTB9QAoAiAXAMQASAIAzAOQAtAMAWAPQAQALACANQADALgIAKQgHAKgMADIgDABQgOAEgWgEIgHgB");
	this.shape_61.setTransform(121.0503,574.6453,2.0367,2.0379);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#221E1F").ss(0.5,1,1).p("AhZBlIB+iKQAYgcAdgj");
	this.shape_62.setTransform(41.7088,431.0528,2.0367,2.0379);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#221E1F").ss(0.5,1,1).p("AjCCuIArgiQA4grBCg5IATgRQAmghA2gyQBChAAvgx");
	this.shape_63.setTransform(17.4723,412.5083,2.0367,2.0379);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#221E1F").ss(0.5,1,1).p("AiLCFIA9g2QAmghAjghQA3g0Ayg0IAogp");
	this.shape_64.setTransform(-4.7785,389.939,2.0367,2.0379);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgwApIBhhR");
	this.shape_65.setTransform(-23.3632,367.7773,2.0367,2.0379);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#221E1F").ss(0.5,1,1).p("AA/BgIh9i/");
	this.shape_66.setTransform(-20.4609,430.4924,2.0367,2.0379);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#221E1F").ss(0.5,1,1).p("ACBDRIkBmh");
	this.shape_67.setTransform(4.2338,409.2987,2.0367,2.0379);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#221E1F").ss(0.5,1,1).p("AB7C/Ij2l+");
	this.shape_68.setTransform(34.3258,400.2812,2.0367,2.0379);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#221E1F").ss(0.5,1,1).p("ADhDjIABg7QADhkAAgZIAAgRQAAgagBgRQgCg0gCgTQgDgegGgTQgGgRgKgLQgIgJgRgHQgcgKhAgLIgfgFQglgEghgDIhvgJQgdgCgEAAQgKAAgWAAIghgB");
	this.shape_69.setTransform(13.348,405.1211,2.0367,2.0379);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#221E1F").ss(0.5,1,1).p("AkfELIAGAAQA4ACAmACQAyABBOgDQCcgHCQgaQAXgFALgMQAGgGADgIQAHgQgEgfQgPh7gJg2QgOhUgZhxQgHghgSgIQgMgGgVAHQgUAIh5gGIk4gQ");
	this.shape_70.setTransform(25.4383,503.8501,2.0367,2.0379);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgBCJQAIAGALgCQALgDAHgJQAMgQgGgYQgEgPgPgYIguhKQgKgRgEgKQgHgQACgNQADgYAYgRQAPgKAfgK");
	this.shape_71.setTransform(169.431,173.2879,2.0367,2.0379);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#221E1F").ss(0.5,1,1).p("Al7jgIgBADQgCANAJAMQAJAMAOADQAXAGAigPQAcgOANgGQAZgMASgFQAYgHAWAEQAYAEAPAQQARASAEAlQAHA+AAAAQAJAmAgAbQAfAbAmABQAYACAigHQAngLATgEQAggGAcAGQAgAGAPAWQAUAbgIAuQAAAFgHAhQgEAXAAAPQgBAUAHARQAIAUAPAKQANAJASAAQASAAAPgJQAcgPAOgkQAQgogMgsQgNgtgiga");
	this.shape_72.setTransform(91.7489,183.3488,2.0367,2.0379);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#221E1F").ss(0.5,1,1).p("Ao4hxIgSAKIAEgEQApguAwgkQBMg5BaggQBbghBegFQB5gFB0ApQB0ApBbBPIARAPQBYBTBHCDQAvBZA+Cg");
	this.shape_73.setTransform(114.622,176.7129,2.0367,2.0379);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#221E1F").ss(0.5,1,1).p("AjOkRIAIAFQBJAzBAA/IACABQBZBZBEBrQBEBtAoB3IABAE");
	this.shape_74.setTransform(8.5618,186.3062,2.0367,2.0379);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#221E1F").ss(0.5,1,1).p("AoaDZIAGgJQBKhZBXhMQCUh+ChhCQClhECpABQCIACCEAs");
	this.shape_75.setTransform(247.3628,272.5042,2.0367,2.0379);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#221E1F").ss(0.5,1,1).p("AizhEIhgBGQgyAlAJAgQAFASAVAIQAUAHASgHQAdgMAYgsQALgYAHgLQAKgTAMgMQAPgQAWgHQAWgIAWACQAgADAYATQAOAMABABQAIAGAIgBQAKAAALgKQAPgMAFgDQALgEAUADQAWAEAJgBQATgCAdgeQAcgdAUgCQAegDAiAsIAuA4");
	this.shape_76.setTransform(949.8274,356.5751,2.0367,2.0379);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#221E1F").ss(0.5,1,1).p("AhyFfQAXAAATgSQARgRAHgYQAFgUAAgcQgBgLgDgkQgNiSAriPQAqiQBahy");
	this.shape_77.setTransform(992.2283,259.7709,2.0367,2.0379);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#221E1F").ss(0.5,1,1).p("AiZhSIABACQAGANAPAGQAOAGAPgBQAMgBASgGQAbgKADAAQAjgKAkAIQAmAHAcAXQAcAWAQAhQAQAigBAkIAAAD");
	this.shape_78.setTransform(906.2865,130.9274,2.0367,2.0379);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#221E1F").ss(0.5,1,1).p("AlwDdQASgmAWglQAvhQBChCQBDhDBPgvQBhg7BvgaQBwgbByAIIAEAA");
	this.shape_79.setTransform(942.2787,84.7365,2.0367,2.0379);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#221E1F").ss(0.5,1,1).p("AhmhRQAPACALANQAKANACAQQACAWgNAnQgKAjAMAOQAIAJAQAAQAOgBAOgIQAdgQASghQABgCALgWQAIgQAHgJQAKgLAOgDQAQgEAKAJ");
	this.shape_80.setTransform(718.4983,371.6518,2.0367,2.0379);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#221E1F").ss(0.5,1,1).p("Aj3ipQAYAEAUAOQAUAPALAWQALAVgBAZQgBAZgLAVQgJAPgPAOQgKAJgUARQgnAhgKAZQgIATAEAUQAEAVAPALQAPALAWgEQAUgDAQgNQANgLALgTQAHgKAMgZQAihGAigeQAZgWAcgJQAfgKAcAHQAfAHASAbQAUAbgIAdQgIAXgDAMQgGAUAJALQAIALARgCQARgCAKgMQAIgJAGgRQADgJAFgUQAOgsAggjQAhgjArgS");
	this.shape_81.setTransform(636.386,423.395,2.0367,2.0379);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#221E1F").ss(0.5,1,1).p("Ajih9QAXgOAbgBQAcgBAYAMQAYAMAQAYQAPAXACAbQABASgJAtQgIApAFAXQAIAiAjASQAjASAhgLQAhgLASgjQASgigJgjQgCgJgHgRQgHgQgDgJQgHgeALgdQAMgeAYgRQAZgRAgAAQAgABAYAR");
	this.shape_82.setTransform(477.8643,305.2134,2.0367,2.0379);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#221E1F").ss(0.5,1,1).p("AsFkeQAIAiA8AOQAeAGAOAGQAXALAJARQAVApg8A/IiACFQgUAWgKANQgPAUgFAUQgGAXAKAWQAKAXAVAGQAPAEASgHQAQgHAMgOQAKgLAJgSQALgVAFgKQAjhBA/gqQA/gsBJgIQBDgHAtAYQAaAOAQAYQARAZAAAcQAAAagSAiQgKATgWAmQgQAgAEAhQAFAlAcALQAZAKAbgSQAYgRALgcQAIgWAAgmQAAggANgTQAPgWAcgMQAegMAaAHQAiAJAgA8QAeA5AZABQAOABAXgUQAYgUAWABQANABAVAMQAXANAWAFQAeAFATgEQAlgGAjhHQAmhMArgTQAagMAdAAQAhABAUASQAUASAEAkQgHAOADAOQACAOAJAHQALAIAQgFQAOgEAKgJQAXgUgDg1QgBgUgIgUQgHgRABgKQAEgnA3gfQA1geAQARQAIAIgSAsQgTAsANAPQAIAJAQABQAPABAMgHQATgJAJgdQAFgSAFgtQACgagCgbQgBgUAEgMQARgxBQgc");
	this.shape_83.setTransform(459.705,349.2401,2.0367,2.0379);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#221E1F").ss(0.5,1,1).p("AzTILQDAgQCjg6QBygpBlhAQBBgoA4g0QAIgICLiLQBjhiBYhRIBVhPQCQiIBKg7QBbhIBIgeQBhgpBpgSQC6ggCzAtQDqA6CzCv");
	this.shape_84.setTransform(383.0058,269.1058,2.0367,2.0379);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#221E1F").ss(0.5,1,1).p("ApJlaIAFAAQDPAMDGBhQBwA3BlBQQBkBPBRBgIAnAyQAqA0ANAQQAgAlAcAaQAuAqAwAXQA3AbA1AAQAFACAGgC");
	this.shape_85.setTransform(86.3631,289.9312,2.0367,2.0379);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#221E1F").ss(0.5,1,1).p("AhqBSIAYgRQAtggAbgVQAegXAXgTQAcgVAkge");
	this.shape_86.setTransform(946.8613,219.0138,2.0367,2.0379);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#221E1F").ss(0.5,1,1).p("AjfCGIAxgZQBMgoA+gkIAXgNQA2ggAzghQBKgvA6gq");
	this.shape_87.setTransform(926.4944,196.2917,2.0367,2.0379);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#221E1F").ss(0.5,1,1).p("Aj6CYQAvgXAYgNQA3gdBCgmQAigTAWgOQAcgQA3gjQBGgtA2gmIAugh");
	this.shape_88.setTransform(890.6997,179.6322,2.0367,2.0379);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#221E1F").ss(0.5,1,1).p("Ai5BoIFzjP");
	this.shape_89.setTransform(868.2453,159.6102,2.0367,2.0379);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#221E1F").ss(0.5,1,1).p("AA6CHIhzkM");
	this.shape_90.setTransform(849.3042,192.3178,2.0367,2.0379);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#221E1F").ss(0.5,1,1).p("ABiDrIjDnU");
	this.shape_91.setTransform(875.0173,180.6002,2.0367,2.0379);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#221E1F").ss(0.5,1,1).p("ABfD6Ii9nz");
	this.shape_92.setTransform(912.5941,186.459,2.0367,2.0379);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#221E1F").ss(0.5,1,1).p("ABWDTIirml");
	this.shape_93.setTransform(945.3337,187.376,2.0367,2.0379);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#221E1F").ss(0.5,1,1).p("AgFAdIALg5");
	this.shape_94.setTransform(961.4744,236.4374,2.0367,2.0379);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#221E1F").ss(0.5,1,1).p("AA+DTIAki1QAIgzACgTQACgfgCgTQgDgRgIgOQgFgKgQgKQgagPg8gXIhigf");
	this.shape_95.setTransform(950.1454,187.376,2.0367,2.0379);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#221E1F").ss(0.5,1,1).p("AEMhrIhrgdQgcgHgDgBQgLgCgVgEIhKgRQgpgKgMgBQgcgDgSAJQgHAEgGAFQgOAMgWAsQgmBLgNAaIgjBNQgZA3ggA2");
	this.shape_96.setTransform(873.337,166.3097,2.0367,2.0379);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#221E1F").ss(0.5,1,1).p("AjzlYQgLgEgLADIgHADQgOAGgNAXQgDAFgbA2IgRAjQgVApgTAfQgOAXgoA9QglA6gTApQgGAMABAMQAAAOAKAOQATAWAwAeQAuAcA8AdQBFAfAvARQAqAPAuAMQAkAKBTATQBXATCBAOQA1AGAwACQA2AEA4ABQAYAAAOgLQASgOAEglIABgHQAHh5ACg6QAChUgDhzQgCgjgPgLQgIgFgMgBQgDAAgKABQgWAEh1gcIj8g9QhJgTgWgHQgagHgRgHQgXgLgpgPQgsgQgVgKQgbgNgJgDg");
	this.shape_97.setTransform(868.4247,273.2426,2.0367,2.0379);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#221E1F").ss(0.5,1,1).p("Ag3B7IBwj1");
	this.shape_98.setTransform(762.847,159.3046,2.0367,2.0379);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#221E1F").ss(0.5,1,1).p("AiHDfIAggtQAyhJAlg6IANgWQAbgrAkhAQAlhAAnhM");
	this.shape_99.setTransform(734.2826,148.6568,2.0367,2.0379);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#221E1F").ss(0.5,1,1).p("AiXD8QAagjAUgeQAog7Alg6IBTiLQAqhLAdg4IAagz");
	this.shape_100.setTransform(694.8728,150.5418,2.0367,2.0379);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#221E1F").ss(0.5,1,1).p("AhzCyIDnlk");
	this.shape_101.setTransform(665.6464,143.2055,2.0367,2.0379);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#221E1F").ss(0.5,1,1).p("AByBcIjji3");
	this.shape_102.setTransform(664.017,181.0587,2.0367,2.0379);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#221E1F").ss(0.5,1,1).p("ADDCiImFlD");
	this.shape_103.setTransform(681.4307,158.7441,2.0367,2.0379);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#221E1F").ss(0.5,1,1).p("ADICxImPlh");
	this.shape_104.setTransform(717.3781,146.4151,2.0367,2.0379);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#221E1F").ss(0.5,1,1).p("ACuCUIlbkn");
	this.shape_105.setTransform(746.91,131.9973,2.0367,2.0379);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#221E1F").ss(0.5,1,1).p("AAcBhIg3jB");
	this.shape_106.setTransform(779.9552,154.0571,2.0367,2.0379);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#221E1F").ss(0.5,1,1).p("AFJhQIgNgpQgSgxgHgSQgMgdgLgPQgKgPgOgIQgJgHgTgBQgegChAAJIgfAEQgdAEgqAJIhsAYQgcAHgDABQgMAEgTAFIhJATQgrALgPAGQgVAJgMAQQgFAHgDAIQgEAKgBARQgBALAAAcQABBPABAhIAGBVQACA8gCA/");
	this.shape_107.setTransform(707.3984,150.7736,2.0367,2.0379);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#221E1F").ss(0.5,1,1).p("AE0BOQghg/ghg7QgJgOgEgEQgLgNgMgCQgOgBgSAMQgRANh1AeIgiAJQgyANhTATIhUAVQhDAQgdAG");
	this.shape_108.setTransform(750.0668,187.4106,2.0367,2.0379);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#221E1F").ss(0.5,1,1).p("Ag/kNQgcAGgQABQgRAAg1AHQgyAHgTAAQgfABgIACQgLACgJAHQgOAOgBAdQgBAJACA7QACA/gEA5QgGA+gCAlQgGBFADAtIABAMQACAHADAGQAJAPAWAHQAYAJAyADQBDAFA2gEQBMgEAwgHQAtgGAugKQAmgJBRgWQAngKA9gW");
	this.shape_109.setTransform(700.1904,254.8574,2.0367,2.0379);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#221E1F").ss(0.5,1,1).p("EAoPgXDMAAAAuHMhQcAAAMAAAguHg");
	this.shape_110.setTransform(492.2738,302.2093,2.0367,2.0379);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#ABC1E3","#53A6DB"],[0,0.82],0,-202.7,0,92.6).s().p("AgCgHIAFAJIgFAGg");
	this.shape_111.setTransform(-31.5855,414.4147,2.0369,2.0381);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#C2A56C").s().p("AgYgnIAaABIAXAmIgxAog");
	this.shape_112.setTransform(-27.2061,366.9259,2.0369,2.0381);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#C2A56C").s().p("AgtBRIAAieIAHgGIBUB/IgrAiIgBAGg");
	this.shape_113.setTransform(-22.9287,431.9937,2.0369,2.0381);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#C2A56C").s().p("AgggSIAhABIAfABIgoAjg");
	this.shape_114.setTransform(-20.2298,362.7987,2.0369,2.0381);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#C2A56C").s().p("AgjASIAAgGIAqghIAdArg");
	this.shape_115.setTransform(-15.1375,445.4965,2.0369,2.0381);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#C2A56C").s().p("Ag/BsIAAi4IAygpIBNB+QgjAhglAhIgwArg");
	this.shape_116.setTransform(-19.2113,390.7213,2.0369,2.0381);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#ABC1E3","#53A6DB"],[0,0.82],0,-75.4,0,219.8).s().p("AABgBIACABIgFACg");
	this.shape_117.setTransform(-4.4948,155.0096,2.0369,2.0381);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#C2A56C").s().p("AhmgIIAxgrQAlgiAighIBVCJQhCA4g2Asg");
	this.shape_118.setTransform(-9.8925,416.7586,2.0369,2.0381);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#C2A56C").s().p("AhbgtIAqgjIBuAJIAfAxQgxAzg4A0g");
	this.shape_119.setTransform(-3.3745,375.9447,2.0369,2.0381);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#C2A56C").s().p("AgjgYIBHAIIgnApg");
	this.shape_120.setTransform(16.2816,366.2126,2.0369,2.0381);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FAF6E0").s().p("AjJChIAAmuQBJAzBAA/IgEAEIAFgDQBaBZBEBrQBEBtAoB3QjGhhjOgMg");
	this.shape_121.setTransform(8.9997,186.397,2.0369,2.0381);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#C2A56C").s().p("AhHBEIgdgsQA4grBBg4IBQCBIgVAWg");
	this.shape_122.setTransform(6.9119,436.121,2.0369,2.0381);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#C2A56C").s().p("AgQAKIATgVIAOAXg");
	this.shape_123.setTransform(26.7716,449.5218,2.0369,2.0381);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#C2A56C").s().p("AhhgQQA4g0Axg0IBbCMQg2AygnAiIgTARg");
	this.shape_124.setTransform(13.8882,395.9185,2.0369,2.0381);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#C2A56C").s().p("AhcgNIAUgSQAngiA0gyIBKBzIhpB0g");
	this.shape_125.setTransform(30.0816,423.5354,2.0369,2.0381);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C2A56C").s().p("AhlgxIAogpIAfAFQA/AKAcALQASAGAHAJQAKALAGASQgvAwhBA/g");
	this.shape_126.setTransform(36.1922,381.3458,2.0369,2.0381);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#C2A56C").s().p("Ag/BFIgOgXIBph0IAyBNIgBA8QgMAEgvAAQggAAgxgCg");
	this.shape_127.setTransform(43.3723,437.827,2.0369,2.0381);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#C2A56C").s().p("AgZgHIA0g/IgBARIgCB8g");
	this.shape_128.setTransform(54.4225,424.8602,2.0369,2.0381);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#C2A56C").s().p("Ag+AAQBBg/AugyQAHATACAfIAFBGIABAsIg1A/g");
	this.shape_129.setTransform(46.8859,400.1477,2.0369,2.0381);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#D53388").s().p("AgaAHIABgRIAnAGQAPADgDALIgCABQgLAAgngEg");
	this.shape_130.setTransform(64.7452,126.7359,2.0369,2.0381);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F9DF4C").s().p("AgEgJQABgGADgEQAEgGAHABIgFAmQgDAKgNABIAGgig");
	this.shape_131.setTransform(78.4069,148.7627,2.0369,2.0381);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#C2A56C").s().p("Ai+EPIhegEIAAoZIEyAQQB5AGAUgIQAVgHAMAGQASAIAHAhQAZBxAOBUQAJA2APB7QAEAfgHAQQgDAIgGAGQgLAMgXAFQiQAaicAHQg3ACgpAAIggAAg");
	this.shape_132.setTransform(25.8779,503.8333,2.0369,2.0381);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#4DA555").s().p("AgRAVIAagqIAJAGIgRAZIgHAKQgCACgDAAIgGgBg");
	this.shape_133.setTransform(91.2393,119.4322,2.0369,2.0381);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#D53388").s().p("AgNgIQgFgQANgDQAFAJAFAPIAKAYIgPAHIgNgkg");
	this.shape_134.setTransform(99.7038,158.7292,2.0369,2.0381);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#3B82C2").s().p("AgRAMIgHgLIAggLQAIgCADABQAEACACAJIgfALIgIABIgDAAg");
	this.shape_135.setTransform(113.0851,143.7221,2.0369,2.0381);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F9DF4C").s().p("AARAIIgpgGIABgJIAiACIAHABQAFAAABACQACACgBACQAAAEgCABIgEABIgCAAg");
	this.shape_136.setTransform(113.5561,122.9495,2.0369,2.0381);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#F9DF4C").s().p("AgIgHIgDgGQgCgEABgCQABgCADgCQAEgBACABQABABABAEIAOAoIgJACg");
	this.shape_137.setTransform(123.0319,168.1556,2.0369,2.0381);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#F9DF4C").s().p("AARAHIgqgGIACgIIAiACQALAAACADQACACgBACQAAAEgDABIgCABIgDgBg");
	this.shape_138.setTransform(137.3343,153.8886,2.0369,2.0381);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4DA555").s().p("AgCgUQAMABAAAPIgDAYIgQABg");
	this.shape_139.setTransform(145.4208,174.2701,2.0369,2.0381);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#3B82C2").s().p("AgKAWIAEggQACgJADgCQABgBALAAIgFAiQgBAHgDACQgCACgDAAIgHgBg");
	this.shape_140.setTransform(146.1286,137.597,2.0369,2.0381);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FAF6E0").s().p("Au3EgIAAm/IDBAHQBlADCfgHQE/gOElg0QAvgKAXgaQALgLAHgRIAFADIErD/QBTBHAwAYQAkAQBpAdQBaAXAtAgQAhAVAFAbQAFAXgPAUQgQAUgXAHIgHADg");
	this.shape_141.setTransform(62.9375,574.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#89694F").s().p("AD1EaQgPgKgIgTQgHgRABgVQAAgPAEgXIAHglQAIgvgUgbQgPgWgggHQgcgGggAHQgTAEgnAKQgiAJgXgCQgngDgfgbQgggagJglIgHg/QgEglgRgRQgPgQgYgEQgWgEgYAGQgSAFgZAMIgpAUQgiAQgXgGQgOgEgJgLQgJgNACgNQBMg5BaggQBbghBegFQB3gFB1ApQB0ApBcBPIgDADQgfAKgPAKQgZAQgDAZQgBANAGAPQAEAKAKARIAwBLQAPAXADAPQAGAYgMARQgGAJgLACQgMADgJgGIgCABQAMAsgQAoQgOAkgcAPQgPAIgSAAQgSAAgNgJgADoAjIASAAIADgaQAAgOgOAAgAB8gmQgEABgBACQgBADACAEIADAGIAOAfIAJgDIgOgnQgBgEgCgBIgCgBIgDABgAAEhGIANAlIAQgHIgKgZQgGgPgFgJQgMADAEAQgACxhTIArAGQADABACgBQADgCAAgDQABgEgCgCQgCgCgLAAIgjgCgAhWiCQgDAFgBAGIgHAiQAPgBADgKIAFgmIgDAAQgFAAgEAEgABciRIghALIAGALQAEACAIgDIAggLQgCgKgFgBIgCgBIgIACgAD0i7QgDACgCAJIgEAiQAJACAEgDQADgCABgIIAFgiIgGAAIgHAAgAizjTQAtAEAIAAQACgMgPgEIgngFgAA9jrIAqAGQADABADgBQACgBAAgEQABgEgCgCQgBgCgFAAIgHAAIgjgCgAgpjpQAIADAEgDIAHgLIASgaIgKgGg");
	this.shape_142.setTransform(95.9906,171.2994,2.0369,2.0381);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FAF6E0").s().p("ABNGGQhQhhhkhPQhlhQhxg3Qgnh2hFhtQhDhshbhZIgCgBQAqguAvgkQgCANAKANQAJALAOAEQAXAGAigQIApgUQAZgMARgFQAZgGAVAEQAZAEAPAQQARARAEAlIAHA/QAJAmAfAaQAgAbAnADQAXACAjgJQAngKARgEQAhgHAcAGQAfAHAQAWQATAbgHAvIgHAlQgEAXgBAPQAAAVAHARQAIASAOAKQAOAJASAAQASAAAPgIQAcgPAOgjQAPgogMgsIADgBQAJAGALgDQAMgCAGgJQAMgRgGgYQgDgPgPgXIgwhMQgKgRgEgKQgGgPABgNQADgZAYgQQAQgKAfgKIADgDIAQAPQBYBTBHCEQAvBZA+CfIABACQigBCiUB/QhXBMhKBZg");
	this.shape_143.setTransform(115.0201,225.3742,2.0369,2.0381);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FAF6E0").s().p("AlGEqQgxgYgtgpQgcgagggmIg3hEQBJhZBYhLQCTiAChhCQClhECpACQCIABCEAtIhUBPQhYBShjBiIiUCSQg4A0hAAoQhkBAhzApQg1gBg3gag");
	this.shape_144.setTransform(247.9276,294.3646,2.0369,2.0381);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F9DF4C").s().p("AARAHIgpgGIABgIIAjACQAKAAACADQACACgBACQAAAEgCABIgEABIgCgBg");
	this.shape_145.setTransform(359.6131,255.5819,2.0369,2.0381);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#3B82C2").s().p("AgSALQgBgBgFgKIAggKQAHgDADACQAEACADAJIgfAKQgFACgDAAIgEgBg");
	this.shape_146.setTransform(362.1974,280.1255,2.0369,2.0381);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#3B82C2").s().p("AgKAWIAFggQABgJADgCQABgBALAAIgFAiQgBAHgDACQgCACgDAAIgHgBg");
	this.shape_147.setTransform(384.8532,254.2809,2.0369,2.0381);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#D53388").s().p("AgaAHIACgRIAmAGQAPADgDAMIgHAAQgRAAgcgEg");
	this.shape_148.setTransform(388.1155,232.6815,2.0369,2.0381);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#D53388").s().p("AgVAMQgCgBAAgEQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIAsgOIAFAGQgUAKgUAHIgEAAIgCAAg");
	this.shape_149.setTransform(399.4217,267.821,2.0369,2.0381);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#4DA555").s().p("AgGgHQgBgIACgDQACgIAFAAIAFAkQABAOgKADIgEgig");
	this.shape_150.setTransform(410.7448,240.1532,2.0369,2.0381);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F9DF4C").s().p("AgDgIQABgIACgDQADgGAIABIgEAmQgEALgNAAg");
	this.shape_151.setTransform(422.5451,219.91,2.0369,2.0381);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#3B82C2").s().p("AgOASQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgEADgDQAOgTAIgEQAIgFAAAGQABAGgFAFQgLALgNAKIgCABIgBgBg");
	this.shape_152.setTransform(430.3289,254.3006,2.0369,2.0381);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#4DA555").s().p("AgSAVIAbgqIAJAGIgRAZQgEAJgDABQgCACgDAAIgHgBg");
	this.shape_153.setTransform(435.4238,190.5635,2.0369,2.0381);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#D53388").s().p("AgNgIQgEgQAMgDIAUAwIgPAHIgNgkg");
	this.shape_154.setTransform(443.8575,229.8605,2.0369,2.0381);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#3B82C2").s().p("AgRAMQgCgBgFgKIAggLQAHgCADABQAFACACAJIgfALIgIABIgDAAg");
	this.shape_155.setTransform(457.2695,214.8767,2.0369,2.0381);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#F9DF4C").s().p("AgJgHIgDgGQgBgEABgDQABgCADgBQAEgBACABQACACAAADIAOAnIgJADg");
	this.shape_156.setTransform(459.0111,250.5579,2.0369,2.0381);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#F9DF4C").s().p("AARAHIgpgGIACgIIAiACQALAAABACQACADgBACQAAAEgCABIgDABIgDgBg");
	this.shape_157.setTransform(457.6896,194.1318,2.0369,2.0381);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#4DA555").s().p("AgLgEIAXgJIAJAPIgnAMQgGgMANgGg");
	this.shape_158.setTransform(473.5509,267.4643,2.0369,2.0381);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#D53388").s().p("AgaAHIABgRIAnAGQAPADgDAMIgEAAQgRAAgfgEg");
	this.shape_159.setTransform(483.2386,189.2561,2.0369,2.0381);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#4DA555").s().p("AgJAUIAHgoQAMABAAAPIgDAYg");
	this.shape_160.setTransform(489.5543,245.4523,2.0369,2.0381);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3B82C2").s().p("AgKAWIAFggQABgJADgCQABgBALAAIgFAiQgBAHgDADQgCABgDAAIgHgBg");
	this.shape_161.setTransform(490.3135,208.7416,2.0369,2.0381);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#F9DF4C").s().p("AgOAAQgIgHAGgNIAaAUIAIAIQADAHgEAGIgfgVg");
	this.shape_162.setTransform(501.5342,175.391,2.0369,2.0381);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#F9DF4C").s().p("AgYACIABgJIAiACQALAAACADQACACgBACQAAAEgCABIgGABg");
	this.shape_163.setTransform(511.3618,240.9175,2.0369,2.0381);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#3B82C2").s().p("AAFAWQgFgCgBgHQgHgPgCgQQAAgFAGACQADACABAEQAKAXAAAHQABAHgDAAIgDAAg");
	this.shape_164.setTransform(521.0795,213.4971,2.0369,2.0381);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#D53388").s().p("AgDgSQABgFACgBQABgBADABIAEABIgHAvIgHABQgBgWAEgVg");
	this.shape_165.setTransform(523.3095,179.7476,2.0369,2.0381);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D53388").s().p("AgaAHIABgRIAnAGQAPADgDAMIgHAAQgRAAgcgEg");
	this.shape_166.setTransform(536.9108,236.0444,2.0369,2.0381);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#3B82C2").s().p("AgKAWIAEggQACgJADgCQABgBALAAIgFAiQgBAHgDADQgCABgDAAIgHgBg");
	this.shape_167.setTransform(543.9343,255.5299,2.0369,2.0381);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#4DA555").s().p("AgMACQgNgEADgMIAgANQAIACACACQAGAHgDAEIgjgMg");
	this.shape_168.setTransform(542.6253,202.3455,2.0369,2.0381);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#F9DF4C").s().p("AgOAAQgIgHAGgNIAbAUQAGAFABAEQAEAHgFAFQgdgTgCgCg");
	this.shape_169.setTransform(555.18,222.1665,2.0369,2.0381);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#4DA555").s().p("AgMACQgNgEADgLIAgAMIAKAFQAGAFgDAFg");
	this.shape_170.setTransform(559.1528,182.4736,2.0369,2.0381);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#D53388").s().p("AgaAHIACgRIAmAGQAPADgDAMIgEAAQgRAAgfgEg");
	this.shape_171.setTransform(572.3527,202.5041,2.0369,2.0381);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#4DA555").s().p("AgIgCIgGgLQgBgGAGgFIAZArIgKAGg");
	this.shape_172.setTransform(575.5477,246.8281,2.0369,2.0381);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#F9DF4C").s().p("AgDgIQABgGACgFQAEgGAHABIgEAmQgEALgNAAg");
	this.shape_173.setTransform(586.2096,222.9661,2.0369,2.0381);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#3B82C2").s().p("AgOASIgCgDIADgHQAPgTAHgEQAIgFAAAGQABAGgFAFQgNANgLAIIgCABIgBgBg");
	this.shape_174.setTransform(593.9498,257.3477,2.0369,2.0381);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#3B82C2").s().p("AAGAWQgGgDgBgGQgHgQgCgPQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAIAEAAQADACABAEQAKAUABAKQAAAHgDAAIgCAAg");
	this.shape_175.setTransform(596.19,200.3373,2.0369,2.0381);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D53388").s().p("AgNgJQgEgPAMgDQAFAJAGAPIAJAYIgPAHIgNglg");
	this.shape_176.setTransform(607.522,232.9177,2.0369,2.0381);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#3B82C2").s().p("AgSAMQgCgCgEgJIAggLQAIgCACABQAGADABAIIgfALIgIABIgEAAg");
	this.shape_177.setTransform(620.9341,217.934,2.0369,2.0381);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F9DF4C").s().p("AgJgHIgDgGQgBgEABgCQABgDADgBQAEgBACACQACABAAAEIAOAnIgKACg");
	this.shape_178.setTransform(622.6756,253.5642,2.0369,2.0381);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#89694F").s().p("AlZJWQgcgLgFglQgEghAQggIAgg5QASgiAAgaQAAgcgRgaQgQgYgagOQgtgYhDAHQhJAIg/AsQg/ArgjBBIgQAfQgJASgKALQgMAOgQAHQgSAHgPgEQgVgGgKgXQgKgWAGgXQAFgUAPgUQAKgNAUgWICAiGQA8g/gVgpQgJgRgXgLQgOgGgegGQg8gOgIgiIAAgBQBjhhBXhTIBVhPQCRiIBKg6QBbhIBIgeQBhgpBogSQC6ggCzAsQDqA6CzCvIACBEQABA/gDA6IgJBkQgFBDACAuIACAMQhQAcgRAxQgEAMABAUQACAbgCAaQgFAtgFASQgJAegTAJQgMAHgPgBQgQgBgIgJQgNgPATgtQASgsgIgIQgQgRg1AeQg3AfgEAnQgBAKAHASQAIAUABAUQADA1gXAUQgKAJgOAEQgQAFgLgIQgJgHgCgOQgDgOAHgOQgEgkgUgSQgUgSghgBQgdAAgaAMQgrATgmBMQgjBHglAGQgTAEgegFQgWgFgXgNQgVgMgNgBQgWgBgYAUQgWAUgPgBQgZgBgeg5Qggg8gigJQgagHgeAMQgcAMgPAWQgNATAAAgQAAAmgIAWQgLAcgYARQgRAMgRAAQgJAAgJgEgAnbgiIghALQAEAKACABQADADAJgEIAggLQgDgJgEgCIgEgBIgGACgAAzhaQgNAHAFAMIAogNIgIgPIgYAJgAlGhQQAAAAABAAQAAAAAAABQAAAAAAABQAAABAAABQABADACABQABABAFgBQAVgHAUgKIgFgHIguAQgAKWiXQgGAEgRAUIgDAHIACADQABAAAAABQAAAAABAAQAAAAAAAAQABgBAAAAQAMgIANgOQAFgFAAgGQAAgBgBgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQgCAAgEADgAGWimQgDACgCAJIgEAhQAJACAEgCQADgDABgHIAFgjQgLAAgCABgAl2isQgDACgBAJIgFAhQAKACADgDQADgCABgHIAFgjIgGAAIgHABgAMSixQgEABgBACQgBADACAEIADAGIAOAgIAJgDIgOgoQgBgDgCgCIgDgBIgCABgAiMimQgIAEgPAUQgDADAAAEQAAAAAAABQAAAAABABQAAAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQABAAAAAAQABgBAAAAQAOgKALgMQAFgFgBgGQAAgBAAAAQAAgBgBgBQAAAAgBAAQAAgBgBAAQgCAAgDADgAoJiOIAqAGQADABADgCQACgBAAgDQABgEgCgCQgCgCgKAAIgkgCgAgRjAQgDABgBACQgBADABAEIADAGIAPAgIAIgDIgNgoQgBgDgCgCIgDgBIgDABgAIkjJIAGAMIAPAbIAKgGIgagrQgGAFABAFgACDitIARAAIADgZQAAgPgNgBgAj7jvQgCAEABAIIAEAjQALgDgBgOIgFglQgGAAgCAHgADfjWIAqAGIAGgBQACgBAAgDQABgEgCgCQgCgCgLAAIgjgCgALCkIIANAlIAQgHIgJgZQgGgOgGgKQgMADAEAQgAFbjoQAjAEASgBQADgNgQgCIgngGgAhgkXIAMAlIARgHIgVgxQgNADAFAQgAl/j5QAkAFARgBQADgNgPgDIgngGgAJnlEQgDAFgBAGIgHAiQAOAAAEgLIAFgmIgDAAQgGAAgDAEgAHAk0QACADAeATQAFgGgEgHQgBgDgGgFIgcgWQgGANAIAIgAi8lSQgCADgBAHIgHAiQAOAAAEgLIAEgmIgCAAQgHAAgDAFgAMalTIghALQAEAKACABQAEACAIgDIAggLQgBgJgGgCIgCgBIgIACgAEdlxQACAQAHAQQACAHAFACQAGACgBgJQAAgHgLgYQgBgEgDgCIgDAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAABgAgIliIghALQAEAKACABQADACAJgDIAegLQgCgJgEgCIgCgBIgHACgACPmLQgEABgBAKIgEAhQAJACAEgDQADgDABgHIAFgiIgFAAQgHAAgBABgAGFmTIAjANQADgFgGgGQgCgCgIgEIghgMQgCALANAFgAKQm1QgBAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAQACAPAGARQADAHAFACQAGADgBgJQgBgLgKgVQgCgDgDgDIgCAAIgBAAgAIJmNQAjAEASAAQADgNgQgDIgngGgAgom8IApAGQAEABACgBQACgBABgEQAAgDgBgDQgCgCgKAAIgjgCgAiOm6QAHADAFgDQACgCAFgJIASgaIgKgGgABTnOQAkAEARAAQADgNgPgDIgogGgAHWn0IAkAMQACgFgFgGIgLgFIghgNQgCALANAGgAExocQgCABgBAEQgDAXAAAWIAIgCIAHgvIgEgBIgDgBIgCABgAC5oZIAgAVQAEgGgDgHIgIgIIgbgVQgGANAIAIg");
	this.shape_179.setTransform(460.8471,285.0623,2.0369,2.0381);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#C2A56C").s().p("AgTgqIAnAhIghA0g");
	this.shape_180.setTransform(644.8167,170.8562,2.0369,2.0381);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#C2A56C").s().p("Ag4BKIgDhwIACgnQABgRADgLIBxBeIhNB1g");
	this.shape_181.setTransform(652.4551,147.1627,2.0369,2.0381);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#C2A56C").s().p("AhMgiIAig1IB3BgQgVAegaAjIABAFQgyAGgSABQgfAAgIACQACg/gCg7g");
	this.shape_182.setTransform(657.5473,186.6518,2.0369,2.0381);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#C2A56C").s().p("AhlgIQADgIAFgGQALgQAWgKQAOgFArgMIBIgTIAhAdIhbCMg");
	this.shape_183.setTransform(662.3849,127.4436,2.0369,2.0381);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#C2A56C").s().p("Ag4AeQAagiAUgeIBDA3QgcAFgQABQgQABg1AHg");
	this.shape_184.setTransform(675.4211,195.5687,2.0369,2.0381);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#C2A56C").s().p("AhhALIBNh1IB2BjQglA4gnA7g");
	this.shape_185.setTransform(668.8521,166.5761,2.0369,2.0381);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#C2A56C").s().p("AgegFIAegKIAfgHIgdAtg");
	this.shape_186.setTransform(682.8557,111.4442,2.0369,2.0381);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#C2A56C").s().p("AhkAVIBbiMIBuBjIhTCMg");
	this.shape_187.setTransform(685.2491,140.4878,2.0369,2.0381);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#C2A56C").s().p("AgdBWIhDg4QAng5Alg6IB2BiIggAsIABAGQhDARgcAGg");
	this.shape_188.setTransform(693.0911,182.3207,2.0369,2.0381);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#C2A56C").s().p("AhbgOIAeguIBsgYIAtAnQgdA3grBKg");
	this.shape_189.setTransform(701.8498,119.0872,2.0369,2.0381);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#C2A56C").s().p("AgjATIAggrIAnAgIhGARg");
	this.shape_190.setTransform(713.8165,190.0657,2.0369,2.0381);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#C2A56C").s().p("AgigMQApgIAcgFIgaAzg");
	this.shape_191.setTransform(718.6032,104.4126,2.0369,2.0381);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#C2A56C").s().p("AhmAVIBUiLIB5BrQglA5gyBJg");
	this.shape_192.setTransform(709.7427,160.6145,2.0369,2.0381);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#C2A56C").s().p("AhjAMQArhKAdg4IB+BsQgkA/gcAsIgNAWg");
	this.shape_193.setTransform(726.1907,133.8638,2.0369,2.0381);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#C2A56C").s().p("AhkAxQAyhIAlg7IByBlIgOAaIiFAiIgOADg");
	this.shape_194.setTransform(733.4726,174.9325,2.0369,2.0381);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#C2A56C").s().p("AgCgMIATARIghAIg");
	this.shape_195.setTransform(754.6563,181.5055,2.0369,2.0381);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#C2A56C").s().p("AhkgWIAagzIAfgEQA/gJAdACQATABAKAHQANAIAKAPQgnBLgkBAg");
	this.shape_196.setTransform(741.1619,114.2747,2.0369,2.0381);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#C2A56C").s().p("AhaAOIANgVQAcgsAkhAIBoBZIhECOg");
	this.shape_197.setTransform(749.2076,155.2643,2.0369,2.0381);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#C2A56C").s().p("AhDAaQAkg/AmhMQALAPAMAdIAZBDIANAoIggBMg");
	this.shape_198.setTransform(760.3596,126.4755,2.0369,2.0381);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#C2A56C").s().p("AgjAIIAghLIAmCHg");
	this.shape_199.setTransform(774.9743,148.1308,2.0369,2.0381);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#C2A56C").s().p("AhMA+IBDiNIBGA8IAQA4QgRANh0Aeg");
	this.shape_200.setTransform(769.7293,166.1175,2.0369,2.0381);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#C2A56C").s().p("AlKFRQgygEgYgIQgXgIgIgPQgEgGgBgGIgCgMQgCguAFhEIAJhkQADg6gBg+IgChEQABgdAPgNQAIgHAMgDQAIgBAfgBQASgBAzgGQA1gHAQgBQARgBAcgFIAAAAQAegGBCgRIBTgUICHgiIAhgIQB2geARgNQARgNAOACQANACALAMIAMASQAiA8AhBAQgPAGgNAXIgdA7IgSAjQgVApgTAeQgOAXgoA9QgkA6gTAqQgGAMAAAMQAAAOALAOQg+AVgmAKQhSAWgmAJQgtALgtAGQgwAGhMAFQgYABgbAAQghAAglgCg");
	this.shape_201.setTransform(722.3938,240.6237,2.0369,2.0381);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#C2A56C").s().p("AAHgmIAVAuIg2Afg");
	this.shape_202.setTransform(835.8775,172.7924,2.0369,2.0381);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#C2A56C").s().p("AgyBBQgagNgKgDQAgg2Aag2IA2gfIA8CMIhGAkIgCAFQgrgQgVgKg");
	this.shape_203.setTransform(836.2849,192.9701,2.0369,2.0381);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#C2A56C").s().p("AALAaQgXgLgpgPIACgDIBGgkIAjBQQgagIgRgHg");
	this.shape_204.setTransform(850.0849,211.4153,2.0369,2.0381);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#C2A56C").s().p("AhHA3IAzhkQAWgsANgMIA4CHIh5BEg");
	this.shape_205.setTransform(851.969,153.5829,2.0369,2.0381);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#C2A56C").s().p("AhagjIB6hFIA7COQhCAmg2Adg");
	this.shape_206.setTransform(860.0657,181.8112,2.0369,2.0381);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#C2A56C").s().p("Ag3A9IgjhQQA4gcBBgnIA8COIgyAZIgBAGIhfgag");
	this.shape_207.setTransform(872.3379,207.1861,2.0369,2.0381);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#C2A56C").s().p("AgiAHIABgGIAwgYIAUAvg");
	this.shape_208.setTransform(887.6656,223.4404,2.0369,2.0381);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#C2A56C").s().p("Ahkg7QAGgFAHgEQATgJAbADQAMABApAKIBKARIAPApIiRBRg");
	this.shape_209.setTransform(875.6479,144.9972,2.0369,2.0381);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#C2A56C").s().p("AgfgUIAgAHIAfAIIgvAag");
	this.shape_210.setTransform(899.5814,139.5706,2.0369,2.0381);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#C2A56C").s().p("AhjgdICRhSIA2CKQg3AjgdARIg3Ahg");
	this.shape_211.setTransform(886.8508,166.627,2.0369,2.0381);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#4DA555").s().p("AgGgGQgBgHACgFQACgIAFAAIAFAlQABAOgKACQgBgEgDgdg");
	this.shape_212.setTransform(906.9329,101.4573,2.0369,2.0381);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#C2A56C").s().p("AhigcIA4ghQAdgRA2gjIA6CXQg+AjhLApg");
	this.shape_213.setTransform(898.7667,195.3649,2.0369,2.0381);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#F9DF4C").s().p("AgDgJQABgHACgDQAEgGAHABIgEAmQgEAKgNABg");
	this.shape_214.setTransform(918.7329,81.2,2.0369,2.0381);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#C2A56C").s().p("AhLAsIgUgvQBMgoA9gkIA2COIgYARg");
	this.shape_215.setTransform(910.377,219.3641,2.0369,2.0381);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#C2A56C").s().p("AgQAEIAXgQIAKAZg");
	this.shape_216.setTransform(928.4544,234.803,2.0369,2.0381);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#C2A56C").s().p("AhXg3IAwgbIBqAdIAVA1Qg1AmhFAtg");
	this.shape_217.setTransform(914.298,155.2643,2.0369,2.0381);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FAF6E0").s().p("AhcBUQgVgHgFgSQgJggAygkIBfhIIABgGQA1AGAwADIgBAMQgWgCgWAHQgWAIgPAQQgMAMgKAUIgRAhQgYAsgdAMQgJAEgKAAQgJAAgKgEg");
	this.shape_218.setTransform(909.4733,359.1555,2.0369,2.0381);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FAF6E0").s().p("AASAlIgegIIgggGIhKgRQgqgJgMgBQASgmAVglQAGAMAPAHQAOAFAPgBQAMgBASgGIAegKQAigKAlAIQAmAIAcAXQAcAWAQAhQAQAhgBAkg");
	this.shape_219.setTransform(902.3374,130.7556,2.0369,2.0381);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#C2A56C").s().p("AghgaIBDAVIgtAgg");
	this.shape_220.setTransform(934.8197,149.8123,2.0369,2.0381);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#3B82C2").s().p("AAGAWQgGgCgBgHQgFgNgEgSQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQADACABAEQAKAXABAIQAAAGgDAAIgCAAg");
	this.shape_221.setTransform(940.0181,118.3618,2.0369,2.0381);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#D53388").s().p("AgNgIQgFgQANgDQAFAJAFAPIAKAYIgQAHIgMgkg");
	this.shape_222.setTransform(940.0996,91.1646,2.0369,2.0381);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#C2A56C").s().p("AhcghQBGgtA0gmIA/CaQgzAhg2AhIgXANg");
	this.shape_223.setTransform(926.1629,179.2126,2.0369,2.0381);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#C2A56C").s().p("AhZgfIAXgNQA3ghAyghIAzB+Ig2AqQgbAVgsAgg");
	this.shape_224.setTransform(937.2131,209.581,2.0369,2.0381);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#3B82C2").s().p("AgSAMIgGgMIAggKQAGgCAEABQAFADACAIIgfALIgIABIgEAAg");
	this.shape_225.setTransform(953.5082,76.1575,2.0369,2.0381);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#C2A56C").s().p("AhGAwIgJgZQAsgfAbgVIA1grIAjBWIAAAAIgMA6IgGABQgdAAhngZg");
	this.shape_226.setTransform(946.3282,227.5569,2.0369,2.0381);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#4DA555").s().p("AgMACQgNgEADgLIAgAMIAKAFQAFAGgCAEg");
	this.shape_227.setTransform(958.5424,134.781,2.0369,2.0381);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#C2A56C").s().p("AgfgQQAcgWAjgeIgdCJg");
	this.shape_228.setTransform(962.0632,216.3068,2.0369,2.0381);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#C2A56C").s().p("AFCFWQgwgCg1gGQiBgOhXgTQhTgTgkgKQgugMgqgPQgvgRhFgfQg8gdgugcQgwgegTgWQgKgOAAgOQgBgMAGgMQATgpAlg6QAog9AOgXQATgfAVgpIARgjIAeg7QANgXAOgGIAHgDQALgDALAEQAJADAbANQAVAKAsAQQApAPAXALQARAHAaAHIBfAaID8A9QB1AcAWgEIANgBQAMABAIAFQAPALACAjQADBzgCBUQgCA6gHB5IgBAHQgEAlgSAOQgOALgYAAQg4gBg2gEg");
	this.shape_229.setTransform(868.3417,273.193,2.0369,2.0381);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#C2A56C").s().p("Ahhg8IAvghIAeAKQA8AXAZAPQARAKAFAKQAIAOADAQQg7AqhJAvg");
	this.shape_230.setTransform(952.1843,167.748,2.0369,2.0381);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#C2A56C").s().p("AhCgSQBJgvA6gqQADATgDAfIgJBGIgIArQgkAegbAWg");
	this.shape_231.setTransform(958.7278,190.7791,2.0369,2.0381);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#4DA555").s().p("AgCgUQAMABAAAPIgDAYIgQABg");
	this.shape_232.setTransform(974.03,88.9736,2.0369,2.0381);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#D53388").s().p("AgaAHIABgRQAAABAnAFQAPADgDAMIgCAAIgygEg");
	this.shape_233.setTransform(974.0286,55.146,2.0369,2.0381);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#D53388").s().p("AgaAHIABgRIAnAGQAPADgDAMIgHAAQgRAAgcgEg");
	this.shape_234.setTransform(977.695,108.6603,2.0369,2.0381);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#F9DF4C").s().p("AgOAAQgIgHAGgOIAaAWQAHAEABADQAEAHgFAHIgfgWg");
	this.shape_235.setTransform(979.5412,129.4818,2.0369,2.0381);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#3B82C2").s().p("AgKAWQgBAAAFggQABgJAEgCQABgBALAAIgFAiQgBAHgDACQgCACgDAAIgHgBg");
	this.shape_236.setTransform(986.5399,70.0324,2.0369,2.0381);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#F9DF4C").s().p("AARAHIgpgFIABgJIAiACIAHAAQAFABABACQACACgBACQgBAEgCABIgCABIgDgBg");
	this.shape_237.setTransform(997.3652,88.9736,2.0369,2.0381);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#3B82C2").s().p("AgSAMQgBgCgFgJIAggLQAGgCAFABQAEACACAJIgeALIgJABIgEAAg");
	this.shape_238.setTransform(1002.4956,118.3705,2.0369,2.0381);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#4DA555").s().p("AgMACQgNgEADgMIAgANQAIACACADQAGAFgDAGg");
	this.shape_239.setTransform(1007.3417,53.0003,2.0369,2.0381);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.lf(["#ABC1E3","#53A6DB"],[0,0.82],0,-58.9,0,236.3).s().p("AzyJMQg/igguhYQhIiFhYhTIgQgPQhbhPh1goQh1gph4AFQheAFhbAhQhaAfhMA5QgwAkgpAuQhAg/hJgyIAAp+MBQcAAAIAAC+QhygIhwAbQhwAahiA7QhPAvhDBDQhBBDgwBQQgWAkgRAmQgbgDgTAJQgIAEgFAFQgOAMgWAtIgzBlIgjBNQgZA3ggA3QgMgFgLADIgGADQghg/gig9IgMgSQgLgMgNgCQgOgBgRAMIhEjrIgZhCQgMgcgLgQQgKgPgOgIQgJgGgTgCQgegCg/AJIggAEQgdAFgqAIIhtAYIgeAIIggAJIhJATQgrAMgOAFQgWAKgMAPQgEAGgEAIQgDALgBAQIgCAoIADBwIAFBWQACA8gCA+QgMADgIAHQgOANgCAdQiziujqg7Qizgsi5AgQhpAShhApQhIAehbBIQhKA7iRCHQiEgsiIgCQipgBimBEg");
	this.shape_240.setTransform(492.1514,121.533,2.0369,2.0381);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#89694F").s().p("ABwLLIAAgGQAIh5ABg6QAChUgDh1QgCgigPgLQgIgGgLAAIgOABIANg6IAAgBIAki1IAKhGQACgfgCgTQgDgRgIgOQgFgKgQgKQgagPg9gXIgygRQABgkgPgiQgQgigcgWQgdgXglgHQglgIgkAKIgdAKQgSAGgMABQgQABgOgGQgPgGgFgNQAvhQBChCQBDhDBPgwQBhg6BwgbQBwgbBxAIIAALWIgEAAQhbBzgrCPQgqCQAMCSIAEAvQABAcgGAUQgGAYgSARQgTASgXAAgAAyj2IAjANQADgFgFgGIgLgGIghgMQgCALANAFgACWkSIAgAWQAFgGgDgHQgCgEgGgEIgcgWQgFANAHAIgAgkleQgBAAAAAAQgBABAAAAQAAABAAAAQAAAAAAABQADATAGANQACAGAFADQAGACgBgJQAAgHgLgYQgCgFgCgBIgCgBIgCABgAEflTIgiALQAFAKACABQADACAJgDIAfgLQgCgJgEgCIgDAAIgHABgACClxQAjAFASgBQADgNgQgDIgngGgAjEmvQgCAGABAGQADAeABAFQALgDgBgOIgFglQgGAAgCAHgAgpnXIAMAlIARgHIgKgZQgGgPgFgJQgNADAFAQgACAnEIASAAIADgaQAAgPgOAAgADknXIAqAGQAEABABgBQACgCABgDQABgEgCgCQgBgCgFAAIgHAAIgjgCgAiFoSQgCADgBAHIgHAiQAOgBAEgKIAEgmIgCAAQgGAAgEAFgAAuoiIghALIAGALQADACAJgDIAggLQgCgJgFgCIgDgBIgHACgADGpMQgEACgBAJQgFAhABABQAJACAEgDQADgDABgHIAFgiIgHAAIgGAAgABwp3QAtAEAIgBQADgNgQgCQgngFAAgBgAEhqHIAkANQADgGgGgFQgCgDgIgDIghgNQgDAMANAFg");
	this.shape_241.setTransform(945.819,185.4464,2.0369,2.0381);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FAF6E0").s().p("ADBGbIgtg3QgjgtgeADQgTACgdAeQgcAegTABQgIABgXgDQgTgEgLAFQgFACgPANQgMAJgJABQgIAAgJgGIgQgNQgYgTgfgDIABgLQA1ADA5ABQAXAAAOgLQATgOAEglIAAAAQAXAAASgTQASgQAGgYQAGgVgBgbIgEgwQgMiQAqiQQAriQBbhyIAEAAIAAM1g");
	this.shape_242.setTransform(975.1503,271.9483,2.0369,2.0381);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FAF6E0").s().p("A6DOuIAEgBQALgEAIgKQAHgKgDgLQgCgNgQgLQgWgPgsgMQg0gNgSgJQgXgMgpgjIiSh9IgDgCQAHgQgEgfQgPh6gKg4QgNhTgZhxQgHgigSgHQgMgHgWAHIACg7IACh9IABgPIgBgsIgFhHQgCgfgHgTQgGgRgKgLQgHgJgRgGQgcgLhBgLIgfgEIhHgIIhvgJIgggBIghgBIgagBIAAqtQDPAMDGBhQBxA3BkBQQBlBPBQBhIAoAyIA3BEQAgAlAcAaQAtAqAxAXQA3AbA1AAQBzgoBkhAQBBgpA4gzICUiTIABABQAIAiA7AOQAfAHANAFQAXALAJARQAVAqg7A+IiBCHQgUAVgKANQgPAVgEATQgHAXAKAWQAKAXAVAGQAQAFARgIQAQgHAMgOQAKgLAKgSIAPgfQAjhBA/grQA/gsBJgIQBEgHAsAYQAaAPAQAXQASAagBAcQAAAagSAjIggA4QgQAgAEAhQAGAlAbAMQAZAKAbgSQAYgSALgcQAIgVAAgnQAAggANgTQAPgWAdgMQAdgMAaAHQAiAJAgA8QAeA5AZABQAPABAYgUQAXgUAWABQAOACAUAMQAXANAXAEQAdAFASgDQAlgHAjhHQAmhMArgTQAagMAdAAQAiABATASQAUASAFAkQgIAOADAOQACAOAKAHQAKAIARgFQANgEAKgIQAXgVgDg0QgBgVgIgUQgGgSABgKQADgmA3ggQA1gdAQAQQAJAIgTAtQgTAsANAPQAJAJAQABQAOABANgGQASgKAJgeQAFgSAFgtQACgZgCgcQgBgUAEgMQASgwBPgdQACAGADAHQAJAOAWAIQAYAIAyAEQBDAFA2gEQBMgFAxgGQAsgGAvgKQAmgJBRgXQAmgKA+gVQASAXAxAdQAuAcA7AdQBFAgAvAQQArAPAtAMQAlAKBTATQBYATCAAOIAAAGIhgBIQgyAkAJAgQAEATAWAHQATAHATgHQAcgMAYgsIASgjQALgTALgNQAQgPAWgIQAVgHAXABQAfADAZATIAPANQAJAGAIAAQAJgBAMgJQAPgNAFgCQALgFATAEQAXADAJgBQATgBAcgeQAdgeATgCQAfgDAiAtIAuA3IAKAAIAAS9g");
	this.shape_243.setTransform(492.1514,411.1537,2.0369,2.0381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(174));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.2,-1127.5,1082.9,2798.9);


(lib.Gang = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#221E1F").ss(0.5,1,1).p("AryiQQBtBaB5A/QCqBZC4AgQCzAfCkgXQC/gcCuhjQB0hBBlhd");
	this.shape.setTransform(-2.025,56.0898);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#221E1F").ss(1,1,1).p("AAGABIgDAAIgIgB");
	this.shape_1.setTransform(54.5,-89.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#221E1F").ss(1,1,1).p("AAcjvIBAFDIARB/IgKAMQgNANgSADQgeAGgfgTQgWgNgKgWQgGgMgCgSQgJhHgjhvIgfin");
	this.shape_2.setTransform(25.675,109.788);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#221E1F").ss(1,1,1).p("Ag6m/QgPCtgKCUIgUEgIgIDuQAFALAIAKQARAWAWAEQAkAGAjgoQAagcAKgrQAGgXAAgiQADiCAfjWIAYlZ");
	this.shape_3.setTransform(-24.325,132.4641);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#221E1F").ss(1,1,1).p("ABIAtQgsgKgngaQghgVgbgg");
	this.shape_4.setTransform(21.325,-148.275);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#221E1F").ss(1,1,1).p("AhIAtQAwgLAkgZQAigVAbgg");
	this.shape_5.setTransform(-20.45,-148.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#221E1F").ss(1,1,1).p("Ag+gVQAeAAAZAGQAmALAgAa");
	this.shape_6.setTransform(-3.25,-102.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#221E1F").ss(1,1,1).p("AALA9QAjgBAZgMQAUgKAJgGQARgLgBgLQAAgKglgHQg3gOgngUQgYgNgIgCQgRgHgPAFQgRAGgNAUQgKAcAGAVQABAEADAHQANAXAmAHQAVAEAqgBg");
	this.shape_7.setTransform(1.9281,-106.1559);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#221E1F").ss(1,1,1).p("ADbiQIiuCaIifjNIgXgLQgbgKgVAAQhEAAAQBpQATAnB7CUIB2CNIDaix");
	this.shape_8.setTransform(-104.9861,26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#221E1F").ss(1,1,1).p("AgUgWQgEAKADAKQACAJAHAHQAHAHAJABQAKACAJgE");
	this.shape_9.setTransform(-1.9271,-120.6667);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAEgIIgOAIIAVANIAAgZIgGAEg");
	this.shape_10.setTransform(17.05,-138.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#221E1F").ss(1,1,1).p("AgXgFIADgJQAFgOAJgDQAJgFAJAGQAEACADAFQACADACAGIABAGQACAHAAABIAAADIgBAEIAAACIgCAGQgEANgIAEQgLAGgNgJIgCgCQgGgEgCgJIAAgDIgBgHg");
	this.shape_11.setTransform(15.05,-138.4671);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#221E1F").ss(1,1,1).p("AhehCQAcgLAigBQAmgBAmAOQANAFAGAFQAIAHALAWQAUArgLAZQgNAdg0AGQgeAEgggDQgSgCgIgGQgNgKgCgUQgGggAMgeQANggAagT");
	this.shape_12.setTransform(15.1566,-138.863);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#221E1F").ss(1,1,1).p("AABgBIgBAD");
	this.shape_13.setTransform(17.55,-137.975);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#221E1F").ss(1,1,1).p("AAUgLQgCAJgEAGQgDAGgFABIAAABIgIAAIgQgE");
	this.shape_14.setTransform(15.55,-136.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#221E1F").ss(1,1,1).p("AAEAHQgFgEgCgJ");
	this.shape_15.setTransform(13.025,-136.375);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#221E1F").ss(1,1,1).p("AABAEIgBgG");
	this.shape_16.setTransform(12.55,-137.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#221E1F").ss(1,1,1).p("AgYAPIAAgEIAGgNQAEgHAEgCQACgCAFgBQADgCAEABQAGABAGAGIACACQAFAGABAHIABAK");
	this.shape_17.setTransform(15.075,-140.1562);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(2,1,1).p("AACgHIgMAHIAVANIAAgZIgIAFg");
	this.shape_18.setTransform(-13.85,-137.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#221E1F").ss(1,1,1).p("AAYgHIgCgIQgHgNgIgDQgJgFgJAGQgEACgDAFIgEAJQgCAGAAAIIAAADIAAAHIACAFQAFANAIAEQALAFAMgIIACgCQAHgFABgIIABgCIAAgIg");
	this.shape_19.setTransform(-16,-137.5384);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#221E1F").ss(1,1,1).p("ABfhDQgdgKghgBQgmgBgmAOQgNAFgGAFQgIAHgLAWQgUArALAZQAOAdAzAGQAeAEAggDQASgCAIgGQALgJAEgVQAGgggMgfQgNgfgagT");
	this.shape_20.setTransform(-16.1057,-137.913);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#221E1F").ss(1,1,1).p("AAAgDIAAAH");
	this.shape_21.setTransform(-18.5,-136.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#221E1F").ss(1,1,1).p("AgXgKQABAJAEADQADAGAFACIAAAAQACABAGgBQALgCAFgBIACgBQAHgFABgI");
	this.shape_22.setTransform(-16,-135.35);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#221E1F").ss(1,1,1).p("AAAAEIAAgEIAAAAIAAgD");
	this.shape_23.setTransform(-13.5,-136.725);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#221E1F").ss(1,1,1).p("AAZAQIgDgMIgDgGQgEgHgEgDQgEgCgDAAQgEgCgEABQgHABgEAGIgDACQgGAJAAAO");
	this.shape_24.setTransform(-16.025,-139.2062);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#221E1F").ss(1,1,1).p("AgDg8IAHB4");
	this.shape_25.setTransform(14.675,-83.35);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#221E1F").ss(1,1,1).p("AgDg1IAAAEIAHBn");
	this.shape_26.setTransform(-8.875,-82.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#221E1F").ss(1,1,1).p("AkbliQApgYAzgQQBfgdBPATQAWAFATAJQA+AbA6BBQAvA+ACACQApBEAXCJQAOBUAHBpIAAAGQAIB5gDB+");
	this.shape_27.setTransform(26.6679,-134.9722);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#221E1F").ss(1,1,1).p("AC3gXIgCAvIgGgBQhBgOhIgDQgggBgiACQgiABgUgBQgwgBg0gK");
	this.shape_28.setTransform(36.675,-91.275);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#221E1F").ss(1,1,1).p("AEQlqQgHgFgVgNQgwgbgvgOQhGgTg8ANQgOAEgRAGQg8AYg5BAQgfAjgUAhQgrBIgXCRQgEAXgDAcQgHA2gGBOQgJCVAHCSQBIgPBGgCQAJgBAYgDQAxgGBvAJ");
	this.shape_29.setTransform(-26.4113,-131.6511);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#221E1F").ss(1,1,1).p("AgCmVQhbgChPApQhUArg3BVQguBHgOBaQgOBVASBYQASBeAvBEQAtBABHAnIATAKQAdAOAkAJQAtANAtgBQBDAABCgaQAYgJAcgQQA/gkAug3QBIhWATh0QAShzgqhoQgthyhjhDQhfhAhwgDg");
	this.shape_30.setTransform(1.0889,-127.426);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#221E1F").ss(1,1,1).p("AAAACIABgD");
	this.shape_31.setTransform(-17.75,-91.125);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#221E1F").ss(1,1,1).p("AAAACIAAgD");
	this.shape_32.setTransform(-12.85,-145.575);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#221E1F").ss(1,1,1).p("AgBADIADgF");
	this.shape_33.setTransform(-1.875,-170.125);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#221E1F").ss(1,1,1).p("AAAgBIAAAD");
	this.shape_34.setTransform(11.875,-146.525);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#221E1F").ss(1,1,1).p("AgCAAIAFAA");
	this.shape_35.setTransform(52.625,-138.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#221E1F").ss(1,1,1).p("AgTABIAngB");
	this.shape_36.setTransform(-17.75,-90.225);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#221E1F").ss(1,1,1).p("AgFACIALgD");
	this.shape_37.setTransform(-53.95,-88.125);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#221E1F").ss(1,1,1).p("AiOj6QA8AEA6AOQBCAQAXAIQAlAOAVAYQAZAbAHArQAFAbgBA/QgBBVgZBHQgdBQgtATQgZALgSgIQgVgLgJgsQgFgeAHgjQAMhFACgPQALhYgXgXQgJgIgegHQg6gMg0gD");
	this.shape_38.setTransform(96.0525,32.7306);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#221E1F").ss(1,1,1).p("AAbAvQgJgogYgfQgKgNgKgI");
	this.shape_39.setTransform(14.375,48.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#221E1F").ss(1,1,1).p("AAXh7QAPAJANALQAaAWAPAaQAaAwgGApQgEAYgHAPQgNAfgbANQgbAMgggJQgcgJgSgUQgHgHgEgLQgDgGgKgXQgVgsgXge");
	this.shape_40.setTransform(14.8804,49.0051);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#221E1F").ss(1,1,1).p("AC+gQQgBgLgEgGQgRgfhMAAQgWAAgbAIQgYAGgUgCQgRgBgSgIQgTgIgVgDQgigFgSABQghABgQASQgQATAFAcQAIArBOAZQBJAZBTgHIAhgEQAagEAWgJQAhgOAMgXQALgSgBgUg");
	this.shape_41.setTransform(-1.8491,38.2848);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#221E1F").ss(1,1,1).p("AhljYIgEACQgUAKgMATQgKASAAAVQAAAOAEANQAKAaAaANQAZAOAcgHQgWATgGAcQgGAbAMAaQANAaAaANQAaANAbgHIgJALQgQAXgEAeQgFAeALATQAPAbAtAEQAxAFAvgf");
	this.shape_42.setTransform(64.3,-37.1711);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#221E1F").p("AhGhQICNCh");
	this.shape_43.setTransform(33.175,-41.85);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#221E1F").p("ABuhaIjbC0");
	this.shape_44.setTransform(33.1,-42.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#221E1F").p("AhGhQICNCh");
	this.shape_45.setTransform(-27.975,-42.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#221E1F").p("ABuhZIjbCz");
	this.shape_46.setTransform(-28.05,-43.75);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#221E1F").p("AAgj8QgtgDgvAgQgaARgoAoQghAjgWApQgoBJACBMQAAAnAFAYQAJApAXAcQApAxBKALQBDAJA+gYQBNgeAshLQArhJgGhRQgGhVg2hFQg5hIhHgDg");
	this.shape_47.setTransform(-0.566,-0.4245);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#221E1F").p("AIeqQQgRgPgVgRQigh7i7ggQg5gKgyAAQg8gChEAKQhxARhuA2Qg+AehIAxQgZASgXASQg0AqgtAxQh4CCg+CiQg+CmAACiQAABfAWBaQAOA5AUAzQANAhALAWQAmBOBOBbQCQCmC8BHQBIAbBMAMIAXAEQCMARCJgiQBHgRBDgeQCBg6BthiQBphgBGh3QAUgjARglQAphXAWhhQARhLAEhOQAHiCgih+");
	this.shape_48.setTransform(-0.5645,7.0807);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#3A74B6").s().p("AhfBMQh7iUgTgnQgQhpBEAAQAVAAAbAKIAXALICfDNICuiaQAABfAWBaIjaCwg");
	this.shape_49.setTransform(-104.9861,26.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F9E0A2").s().p("AhmGKQgkgJgdgOIgTgKQhHgngthAQgvhEgSheQgShYAOhVQAOhaAuhHQA3hVBUgrQBPgpBbACQBwADBfBAQBjBDAtByQAqBogSBzQgTB0hIBWQguA3g/AkQgcAQgYAJQhCAahDAAIgHAAQgqAAgpgMgAhGCaQgSAGgMAUQgKAcAFAVQABAFAEAGQANAXAlAHQAVAEAqAAIAGgBQAjgBAagMQATgJAJgGQARgMAAgKQgBgKgkgJQg3gNgogVQgYgMgHgDQgKgDgJAAQgHAAgGACgAjXiqQgNAFgGAFQgIAHgLAWQgUAsALAZQAOAdAzAGQAfAEAggDQASgCAIgGQALgJAEgVQAGgggMggQgNgfgagTIAAgFIgIAAQgjAAgiANgABsjAIAAAEQgaATgNAgQgMAgAGAgQACAUANAJQAIAGASACQAgADAfgDQA0gGANgeQALgYgUgtQgLgWgIgHQgGgFgNgFQgjgMgjAAIgHAAg");
	this.shape_50.setTransform(1.0889,-127.426);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F6EC5A").s().p("AkKCLQAGhOAHg2QADgcAEgXQAXiRArhIQAUghAfgjQA5hAA8gYQARgGAOgEQA8gNBGATQAvAOAwAbIAcASQhbgChPAoQhUAsg2BVQguBGgOBbQgOBUASBZQASBeAvBEQAsBABHAmIATAKIgoADQhvgJgxAGIghAEQhGAChIAPQgHiSAJiVg");
	this.shape_51.setTransform(-26.4113,-131.6511);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#221E1F").s().p("AgJAgQgIgDgFgOIgBgFIgBgHIAAgDQAAgIADgGIADgIIADgDQAEgGAHgBQAEAAAEABQADAAAEADQAEACAEAHIADAHIACAFIgNAHIAOAIIAAAEIgBACQgBAJgHAFIgCABIgPADIgFABIgDgBg");
	this.shape_52.setTransform(-16.025,-137.5812);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgHAAIANgHIABAHIAAAFIAAACIAAABg");
	this.shape_53.setTransform(-14.2,-137.55);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#3A74B6").s().p("Ag7G/QgWgEgRgWQgIgKgFgLIAIjuIAUkgQAKiUAPitQBHAbBMAMIAXAEIgYFZQgfDWgDCCQAAAigGAXQgKArgaAcQgeAjgfAAIgKgBg");
	this.shape_54.setTransform(-24.325,132.4641);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgRBNQg0gGgOgdQgKgZAUgrQAKgWAJgHQAGgFANgFQAlgOAmABIAAAFQAbATAMAfQANAfgGAgQgEAVgLAJQgIAGgSACIgeABQgQAAgQgCgAgCgaQgFACgCAFQgHAKAAANIAAADIABAHIABABQABAJAEAEQADAGAFACIAAAAQALAFANgIIACgBQAHgFABgJIAAgCIABgEIAHAEIAAgYIgIAFIgDgIQgGgNgIgDQgEgCgFAAQgFAAgEADg");
	this.shape_55.setTransform(-16.8584,-137.913);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgCAIIAAgDIgBgMIAHgFIAAAZg");
	this.shape_56.setTransform(-13.175,-137.575);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#BE5F37").s().p("AgGATQgmgHgNgWQgDgHgBgEQAdAAAZAGQAmALAgAaIgHAAIgJAAQgkAAgRgDg");
	this.shape_57.setTransform(-3.25,-102.2722);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#AA7F77").s().p("Ag7AXQgZgGgdAAQgGgVAKgcQANgUARgGQAPgFARAHQAIACAYANQAnAUA3AOQAlAHAAAKQABALgRALQgJAGgUAKQgZAMgjABQgfgbgngLg");
	this.shape_58.setTransform(1.9281,-106.1837);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgsBOQgRgCgJgGQgMgKgDgUQgGggANgeQANggAagTIgBgFQAngBAlAOQANAFAGAFQAJAHAKAWQAVArgMAZQgNAdg0AGQgQACgQAAIgegBgAgPgbQgJADgFAOIgDAJIgBAJIABAHIAAADQACAKAGAEIACABQANAJALgGIAAAAQAFgCADgGQAEgGACgJIAGADIAAgYIgGADQgCgIgEgGQgDgFgEgCQgEgDgFAAQgFAAgEACg");
	this.shape_59.setTransform(15.9093,-138.863);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#3A74B6").s().p("AAHDjQgWgNgKgWQgFgMgCgSQgJhHgjhvIgginIAAAAIgBgGQBHgRBCgeIABACIBAFDIARB/IgKAMQgOANgSADIgNABQgXAAgZgOg");
	this.shape_60.setTransform(25.6,109.688);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F9E0A2").s().p("AAPAyQg8gChEAKIgIhoQAtANAtgBQBEAABBgZIALAAIAJB3Qg5gJgygBg");
	this.shape_61.setTransform(2.925,-83.35);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#221E1F").s().p("AADAhIgQgEIgBgBQgGgFgDgJIAAgCIgBgHIABgJIAFgPQAFgHADgCQADgCAEgBQADgBAFAAQAGABAGAGIACACIAEAJIABAGIgOAIIAPAJIgCAGQgEANgIAFg");
	this.shape_62.setTransform(15,-138.5312);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#AA7F77").s().p("AhmA6QhOgZgIgrQgFgcAQgTQAQgSAhgBQASgBAiAFQAVADATAIQASAIARABQAUACAYgGQAbgIAWAAQBMAAARAfQAEAGABALQABAUgLASQgMAXghAOQgWAJgaAEIghAEIgjACQg/AAg6gUg");
	this.shape_63.setTransform(-1.8491,38.2848);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#BE5F37").s().p("AACB4QgcgJgSgUQgHgHgEgLIgNgdQgVgsgXgeIAhgEQAagFAWgJQAggOAMgWQALgTgBgUQAPAJANALQAaAWAPAaQAaAwgGApQgEAYgHAPQgNAfgbANQgPAHgSAAQgMAAgOgEg");
	this.shape_64.setTransform(14.8804,49.0051);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#F6EC5A").s().p("ACMGkQgggBgjABIg2ABQgvgBg0gLIAAgCQA/gkAtg3QBIhWATh0QAShzgqhoQgthyhihDQhfhAhxgDIgcgSIADgGQApgYAzgQQBfgeBPATQAWAGATAIQA+AcA6BBIAxBAQApBEAXCIQAOBUAHBqIAAAGQAIB4gDB+IAAABIgGAlIgCAJQhBgNhIgDg");
	this.shape_65.setTransform(26.4929,-132.6222);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#3A74B6").s().p("AhuD6IgXgDQhMgMhIgbQi8hHiQilQhPhbglhOQgLgXgOggQBtBaB5BAQCqBZC4AfQCzAfCkgXQC/gcCuhiQB0hCBlhdQgRAlgVAjQhFB3hqBeQhsBjiCA5QhCAehIASQhaAWhbAAQgvAAgwgGg");
	this.shape_66.setTransform(-2.025,66.9223);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#EDC87A").s().p("Ai5LZQi4ggiphZQh5hAhthaQgUgzgOg6QgWhaAAhfQAAiiA+imQA+iiB4iCQAtgwA0gqQAXgTAZgRQBIgyA+geQBug1BxgSQBEgKA8ACQAyABA5AKQC7AgCgB7QAVAQARAPQgTAKgMATQgLASAAAVQAAAOAFANQAKAaAZANQAaAOAcgHQgWATgHAcQgGAcANAaQANAaAaANQAaANAcgHIgKALQgQAXgFAeQgFAeALATQARAbAtAEQAxAFAugfQAiB+gHCDQgEBOgRBLQgWBhgpBXQhkBdh1BCQiuBji+AcQhGAJhJAAQhhAAhogRgABVI8IANAdQAFALAGAHQATAUAcAJQAgAJAcgMQAagNAOgfQAGgPAFgYQAGgqgbgwQgOgagagWQgOgLgPgJQgBgLgDgHQgRgfhNAAQgWABgbAHQgXAHgVgCQgQgCgSgHQgUgIgVgEQghgFgSABQgiACgPARQgRATAFAcQAJAsBNAaQBJAYBTgGQAXAfAVAsgAg8i+QgaARgoApQghAigWAqQgoBHACBOQAAAnAFAYQAJAoAXAdQApAxBKAKQBDAKA+gYQBNgeAshLQArhJgGhSQgGhUg2hFQg5hIhHgEIgHAAQgqAAgrAdg");
	this.shape_67.setTransform(-0.5645,-3.7519);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#3A74B6").s().p("AASD4QgVgLgJgsQgFgeAHgjIAOhUQALhYgXgXQgJgIgegHQg6gMg0gDIgEAAQAShLADhOQA8AEA6AOQBCAQAXAIQAlAOAVAYQAZAbAHArQAFAbgBA/QgBBVgZBHQgdBQgtATQgOAGgMAAQgJAAgIgDg");
	this.shape_68.setTransform(95.8525,32.7306);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#221E1F").ss(0.5,1,1).p("AryiQQEJDaE/A4QCyAfClgXQC/gcCuhjQBzhABmhe");
	this.shape_69.setTransform(-2.025,59.627);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#221E1F").ss(1,1,1).p("AAGACIgDgBIgEgBIgEgB");
	this.shape_70.setTransform(54.475,-86.325);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#221E1F").ss(1,1,1).p("AAXm9QAKA9ApD/QAOBYAdDGIAcDtIgMAWQgPAXgWAFQgiAJgoglQgbgagOgpQgHgXgDghQgNh8gyjZIgzlW");
	this.shape_71.setTransform(25.35,134.0553);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#221E1F").ss(1,1,1).p("AgxjwIgkFNIgGB7QADAGAHAFQAPAMASACQAeACAcgUQAhgXACgrQAChCAahwIATiz");
	this.shape_72.setTransform(-26.275,114.9386);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#221E1F").ss(1,1,1).p("ABIAtQgugLglgZQgjgXgZge");
	this.shape_73.setTransform(21.325,-144.75);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#221E1F").ss(1,1,1).p("AhIAtQAtgKAngaQAggUAdgh");
	this.shape_74.setTransform(-20.45,-144.625);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#221E1F").ss(1,1,1).p("Ag+gVQAcgBAbAIQAmALAgAZ");
	this.shape_75.setTransform(-3.25,-98.7559);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#221E1F").ss(1,1,1).p("AALA9QAjgCAZgMQAugUgBgRQgBgKgkgIQg3gNgngVQgagMgGgCQgRgHgPAFQgRAFgNAVQgJAcAFAVQABAFADAGQANAXAmAHQAWAEApgBg");
	this.shape_76.setTransform(1.9162,-102.6237);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#221E1F").ss(1,1,1).p("AjSiQICuCaICfjNQAmgVAhAAQBEABgQBoQgTAnh7CUQg9BKg5BDIjqi7");
	this.shape_77.setTransform(102.8111,30.25);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#221E1F").ss(1,1,1).p("AgUgWQgEAKADAKQACAJAHAGQAHAHAJACQAKACAJgE");
	this.shape_78.setTransform(-1.9271,-117.1167);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#221E1F").ss(1,1,1).p("AgYAAQABgHADgIQAGgNAIgEQAKgDAIAFQAFACACAFIAEAJIABAFIABAHIAAACQABACgBAGIgBACIAAACIgBADQgFANgIAEIAAAAQgLAFgMgIIAAgBIgCgBQgGgFgCgIQgCgHABgHg");
	this.shape_79.setTransform(15.0383,-134.939);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#221E1F").ss(1,1,1).p("AhehDQAegKAggBQAmgBAmAOQALAEAIAGQAIAHALAWQAJAUADANQADAUgGAOQgNAeg0AGQgiAEgcgEQgSgCgIgFQgMgJgEgVQgFggAMgfQANgfAagT");
	this.shape_80.setTransform(15.1613,-135.3384);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#221E1F").ss(1,1,1).p("AgYAQQABgEACgIQAAgDADgDQAFgHADgCIAHgDQACgBAGAAQAGABAGAGIACADQAEAFACAIIAAAH");
	this.shape_81.setTransform(15.05,-136.6583);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#221E1F").ss(1,1,1).p("AAUgQIgBAKIAAABIAAACQgDAIgCAEQgDAGgFABIgCAAQgDABgDgBIgRgD");
	this.shape_82.setTransform(15.575,-133.3875);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#221E1F").ss(1,1,1).p("AAEAHQgFgFgCgI");
	this.shape_83.setTransform(13.025,-132.85);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#221E1F").ss(1,1,1).p("AAYgHIgDgHQgFgOgJgDQgJgFgJAGQgEADgDAEIgEAJQgDAHAAAHIAAADIABAHIACAFQAFAOAHADQALAGANgJIACgCQAFgEADgIIABgLg");
	this.shape_84.setTransform(-16,-134.0134);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#221E1F").ss(1,1,1).p("ABfhDQgegKgggBQgogBgkAOQgMAEgHAGQgIAHgLAWQgUArALAYQAOAfAzAFQAhAEAdgEQASgCAIgGQAMgIADgVQAGgggNgfQgMgggagS");
	this.shape_85.setTransform(-16.1171,-134.3967);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#221E1F").ss(1,1,1).p("AgGgKQACAJADADQADAHAEAB");
	this.shape_86.setTransform(-17.75,-131.85);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#221E1F").ss(1,1,1).p("AgQAJQADAAAFAAQAPgDAAAAIACgBQAGgEACgJ");
	this.shape_87.setTransform(-15.325,-131.6625);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#221E1F").ss(1,1,1).p("AAAAFIAAgFIAAgBIABgD");
	this.shape_88.setTransform(-13.525,-133.075);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#221E1F").ss(1,1,1).p("AAZAPIgDgLIgDgGQgDgGgFgEQgCgBgFgCQgEgBgEABQgHAAgEAGIgDADQgGAHAAAQ");
	this.shape_89.setTransform(-16.025,-135.67);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#221E1F").ss(1,1,1).p("AgDg7IAHB3");
	this.shape_90.setTransform(14.65,-79.825);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#221E1F").ss(1,1,1).p("AgDg1IAHBr");
	this.shape_91.setTransform(-8.875,-79.425);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#221E1F").ss(1,1,1).p("Akbl6QApgYAzgQQBfgdBPATQASAEAXAKQA+AcA6BBQAvA9ABACQApBCAYCLQAOBTAHBrIAAAGQAIBzgDCDIgCAwIgGgBQhHgOhCgCQghgBgiABQgjABgTAAQgvgBg0gL");
	this.shape_92.setTransform(26.676,-129.063);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#221E1F").ss(1,1,1).p("AEQlqQgKgIgSgLQgvgbgwgNQhGgTg8ANQgNADgSAHQg8AYg5BAQgfAigUAiQgqBFgYCTQgEAagDAZQgHA3gGBOQgJCTAGCUIABAAQBGgPBIgDQAHAAAagEQAygGBuAK");
	this.shape_93.setTransform(-26.42,-128.1011);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#221E1F").ss(1,1,1).p("AgCmVQhbgChPApQhUArg3BVQguBHgOBaQgOBVASBYQASBeAvBEQAtBABHAnIATAJQAeAPAjAJQAtAMAtAAQBEAABBgaQAbgLAZgOQA/gkAug3QBIhWATh0QAShzgqhoQgthyhkhDQhehAhwgDg");
	this.shape_94.setTransform(1.0889,-123.8822);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#221E1F").ss(1,1,1).p("AAAADIAAgF");
	this.shape_95.setTransform(-12.85,-142.05);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#221E1F").ss(1,1,1).p("AAAgCIAAAF");
	this.shape_96.setTransform(11.875,-143);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#221E1F").ss(1,1,1).p("AgTABQAMAAAbgB");
	this.shape_97.setTransform(-17.75,-86.725);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#221E1F").ss(1,1,1).p("AgFABIALgB");
	this.shape_98.setTransform(-54,-84.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#221E1F").ss(1,1,1).p("ACPj6Qg6ADg8AOQhBAQgYAJQglAOgVAXQgZAcgHArQgFAbABA+QABBVAZBIQAdBPAtATQAZAMASgJQAVgJAJgtQAFgegHgjQgNhFgBgPQgLhZAXgWQAJgIAegHQAzgMA6gD");
	this.shape_99.setTransform(-98.2775,36.2556);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#221E1F").ss(1,1,1).p("AAbAvQgKgqgXgeQgKgMgKgJ");
	this.shape_100.setTransform(14.375,52.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#221E1F").ss(1,1,1).p("AAXh7QAOAHAOANQAaAWAPAaQAaAvgGAqQgJA/gqAUQgbAMgggJQgcgJgSgUQgHgHgEgLQgDgGgKgXQgUgpgYgi");
	this.shape_101.setTransform(14.864,52.5551);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#221E1F").ss(1,1,1).p("AC+gPQgBgLgEgHQgLgUghgHQgSgEgfAAQgXAAgaAIQgYAGgUgCQgRgBgSgHQgUgJgUgDQghgFgTABQghABgQASQgIAJgDANQgDANADAMQAIArBOAaQBJAYBTgHQAPAAASgEQAagEAWgJQAhgOAMgXQADgDADgKQAFgMgBgMg");
	this.shape_102.setTransform(-1.8477,41.7866);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#221E1F").ss(1,1,1).p("AhmjYIgEACQgTAKgMATQgKASAAAVQAAAOAEAMQAKAbAaANQAZAOAcgHQgXASgFAdQgHAbANAaQANAaAaANQAaAMAbgGIgJALQgQAXgFAeQgEAeALASQAPAcAtAEQAxAFAugf");
	this.shape_103.setTransform(64.3,-33.6215);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#221E1F").p("ABuhZIjbC0");
	this.shape_104.setTransform(-28.05,-40.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#221E1F").p("AAfj8QgtgCguAfQgbASgnAoQggAhgXAqQgoBJACBNQAAAnAFAYQAJAoAXAdQApAwBKALQBDAKA+gZQBMgdAthMQArhJgGhRQgGhVg3hFQg4hIhIgDg");
	this.shape_105.setTransform(-0.566,3.0889);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#221E1F").p("AIeqQQgRgPgVgQQifh7i9ghQg0gJg2gBQhCgCg+AKQhyAShtA1QhAAfhGAxQgWAOgaAWQgzAoguAyQh4CBg+CjQg1COgICMQgEBMAKBNQANBhAkBZQAMAfAMAZQAmBOBMBYQCNCjC3BJQBHAbBHANIAQADQCFAUCBgZQBTgQBVgkQCEg6BvhjQBrhhBGh5QAWglAQgiQAag4ATg8QAbhZAIhWQARicgoiT");
	this.shape_106.setTransform(-0.5641,10.597);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#3A74B6").s().p("AgwDxQgSgCgPgMQgHgFgDgGIAGh7IAklNQBGAcBHAMIgTCzQgaBwgCBCQgCArghAXQgZASgbAAIgGAAg");
	this.shape_107.setTransform(-26.275,114.9386);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#F9E0A2").s().p("AhmGKQgjgJgegPIgTgJQhHgngthAQgvhEgSheQgShYAOhVQAOhaAuhHQA3hVBUgrQBPgpBbACQBwADBeBAQBkBDAtByQAqBogSBzQgTB0hIBWQguA3g/AkQgZAOgbALQhBAahEAAQgtAAgtgMgAhGCaQgSAFgMAVQgKAcAFAVIAFALQANAXAlAHQAWAEApgBIAGAAQAjgBAagMQAugVgCgRQAAgKgkgIQg3gOgogUIgfgPQgKgDgJAAQgHAAgGACgAjXiqQgMAEgHAGQgIAHgLAWQgUAsALAYQAOAfAzAFQAiAEAdgEQASgCAIgGQAMgIADgVQAGgggNggQgMgggagSIAAgFIgGAAQgmAAghANgABsjBIAAAFQgaATgNAgQgMAfAFAgQAEAVAMAJQAIAGASACQAcADAjgDQA0gGANgeQAGgPgDgTQgDgOgJgVQgLgWgIgHQgIgFgLgFQglgNgmAAIgCAAg");
	this.shape_108.setTransform(1.0889,-123.8822);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F6EC5A").s().p("AkNGyQgGiUAJiTQAGhOAHg3QADgZAEgaQAYiTAqhFQAUgiAfgiQA5hAA8gYQASgHANgDQA8gNBGATQAwANAvAbQASALAKAIQhbgDhPApQhUAsg2BVQguBGgOBbQgOBUASBYQASBeAvBEQAsBABHAnIATAKIgoACIAAABQhugKgyAGQgaAEgHAAQhIADhGAPg");
	this.shape_109.setTransform(-26.42,-128.1011);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#3A74B6").s().p("AiFD3IgQgDQhHgNhHgbQi4hJiNiiQhLhYgmhOQgMgZgNgfQEJDcE/A2QCyAgClgYQC/gbCuhiQBzhCBmhdQgQAigWAlQhHB5hrBgQhuBjiEA6QhWAkhTAQQhIAOhIAAQg6AAg7gJg");
	this.shape_110.setTransform(-2.025,70.4568);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#221E1F").s().p("AgJAhQgIgEgFgNIgBgGIgBgHIAAgCQAAgHADgIIADgIIADgDQAEgGAHAAQAEgBAEABIAHADQAFAEADAGIADAHIACAFIgNAGIAOAJIgBAGQgCAIgGAFIgCACIgPADIgFAAIgDAAg");
	this.shape_111.setTransform(-16.025,-134.0575);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgGAAIALgHIACAGIAAAFIAAADIAAABg");
	this.shape_112.setTransform(-14.2,-134);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgSBNQgzgFgOgfQgLgYAVgrQAKgWAJgHQAHgGAMgEQAjgOAoABIAAAFQAaASANAgQAMAfgFAgQgEAVgLAIQgIAGgSACQgOACgPAAQgQAAgSgCgAgCgaQgEACgDAFQgHAIAAAPIAAACIABAHIABACQABAIADAFQAEAGAFACIAAAAQALAFANgIIACgBQAGgEACgKIABgGIAHAEIAAgZIgIAGIgDgIQgFgNgJgEQgEgBgEAAQgGAAgEADg");
	this.shape_113.setTransform(-16.883,-134.3967);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgCAJIAAgFIgBgKIAHgGIAAAZg");
	this.shape_114.setTransform(-13.175,-134.05);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BE5F37").s().p("AgHATQglgHgNgWIgFgLQAcgBAbAHQAmALAgAaIgHAAIgQAAQgeAAgRgDg");
	this.shape_115.setTransform(-3.25,-98.7459);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#AA7F77").s().p("Ag7AXQgbgHgbABQgFgVAJgcQANgVARgFQAPgFARAHIAgAOQAnAVA3ANQAkAIABAKQABARguAUQgZAMgjACQgegbgogLg");
	this.shape_116.setTransform(1.9162,-102.6337);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgsBNQgRgCgJgFQgMgJgDgVQgGggANgfQANgfAagTIgBgFQAogBAkAOQAMAEAHAGQAJAHAKAWQAJAUADANQAEAUgHAOQgNAeg0AGQgRACgPAAQgQAAgOgCgAgPgcQgIAEgGANQgDAIgBAGQgBAIACAHQACAJAGAFIACAAIAAABQAMAIALgFIABAAQAFgCADgGIAFgMIAAgCIABgCIAGAEIAAgZIgGAEQgCgJgEgFQgCgFgFgCQgEgDgFAAIgJABg");
	this.shape_117.setTransform(15.9022,-135.3384);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#F9E0A2").s().p("AAPAyQhCgBg9AJIgIhnQAsALAuAAQBDAABCgaIALABIAIB4Qg1gKg2gBg");
	this.shape_118.setTransform(2.9,-79.85);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#221E1F").s().p("AADAgIgQgDIAAAAIgCgBQgGgGgCgIQgCgHABgHIADgMIADgHQAFgHADgCIAHgDQADgBAFAAQAGABAGAGIACADIAEAIIABAGIgPAIIAQAJIgBABIAAACIgBADQgFAOgIADIAAAAIgDABIgEgBg");
	this.shape_119.setTransform(15.005,-134.9958);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#AA7F77").s().p("AhmA7QhOgagIgrQgDgMADgNQADgNAIgJQAQgSAhgBQATgBAhAFQAUADAUAJQASAHARABQAUACAYgGQAagIAXAAQAfAAASAEQAhAHALAUQAEAHABALQABAMgFAMQgDAKgDADQgMAXghAOQgWAJgaAEQgSAEgPAAIgjACQhAAAg5gTg");
	this.shape_120.setTransform(-1.8477,41.7866);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#BE5F37").s().p("AACB4QgcgJgSgUQgHgHgEgLIgNgdQgUgpgYgiQAPAAASgEQAagEAWgJQAggOAMgXQADgDADgKQAFgNgBgMQAOAHAOANQAaAWAPAaQAaAvgGAqQgJA/gqAUQgPAHgRAAQgNAAgOgEg");
	this.shape_121.setTransform(14.864,52.5551);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#3A74B6").s().p("AAWGgQgbgagOgpQgHgXgDghQgNh8gxjZIg0lWIgBgDQBTgQBVgkIAyE8IArEeIAcDtIgMAWQgPAXgVAFQgHACgHAAQgdAAgggeg");
	this.shape_122.setTransform(25.3,134.0553);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F6EC5A").s().p("ACMGkQgigBghABQgkACgSgBQgwgBgzgLIgBgBQBAgkAtg3QBIhWASh0QATh0gqhoQguhxhihEQhfhAhwgCQgKgIgTgLIAEgGQAogYA0gQQBegeBQAUQARAEAYAKQA9AbA6BBIAxBAQApBBAXCMQAOBTAHBqIAAAGQAJBzgECDIgIAvQhHgOhBgCg");
	this.shape_123.setTransform(26.501,-129.113);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EDC87A").s().p("Ai5LYQk+g3kJjcQgkhZgNhhQgKhNAEhMQAIiMA1iOQA+ijB4iBQAugyAzgoQAagWAWgOQBGgxBAgfQBtg1BygSQA+gKBCACQA2ABA0AJQC9AhCfB7QAVAQARAPQgTAKgMATQgLASAAAVQAAAOAFAMQAKAbAZANQAaAOAcgHQgXASgGAdQgGAcANAaQANAaAaANQAaAMAcgGIgKALQgQAXgFAeQgFAeALASQARAcAtAEQAxAFAugfQAoCSgRCdQgIBWgbBZQgTA8gaA4QhlBdh0BCQiuBji+AbQhHAKhJAAQhhAAhngSgABVI8IANAdQAFALAGAHQATAUAcAJQAgAJAcgMQApgUAJg/QAHgrgbgvQgOgagagWQgPgNgOgHQgBgLgDgHQgLgUgigHQgSgEgfAAQgWAAgbAIQgYAGgUgCQgRgBgRgHQgUgJgVgDQgggFgTABQgiABgPASQgIAJgDANQgDANACAMQAJAsBNAaQBJAYBTgHQAZAjATApgAg8i+QgbASgnAoQggAhgXAqQgoBIACBOQAAAnAFAYQAJAoAXAdQApAwBKALQBDAKA+gZQBMgdAthMQArhJgGhSQgGhUg3hFQg4hIhIgDIgFAAQgrAAgrAdg");
	this.shape_124.setTransform(-0.5641,-0.2327);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3A74B6").s().p("Aj4AfQAbhZAIhWIADAAICuCaICfjOQAmgUAhAAQBEABgQBoQgTAnh7CUQg9BLg5BCg");
	this.shape_125.setTransform(102.8111,30.25);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#3A74B6").s().p("Ag6D0QgtgTgdhPQgZhIgBhVQgBg+AFgbQAHgrAZgcQAVgXAlgOQAYgJBBgQQA8gOA6gDIAKAAQgEBMAKBNQg6ADgzAMQgeAHgJAIQgXAWALBZIAOBUQAHAjgFAeQgJAtgVAJQgHAEgJAAQgMAAgPgHg");
	this.shape_126.setTransform(-98.2775,36.2556);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46,p:{x:-28.05,y:-43.75}},{t:this.shape_45,p:{y:-42.8}},{t:this.shape_44},{t:this.shape_43,p:{y:-41.85}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35,p:{y:-138.025}},{t:this.shape_34},{t:this.shape_33,p:{y:-170.125}},{t:this.shape_32},{t:this.shape_31,p:{y:-91.125}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21,p:{y:-136.9}},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{y:-137.575}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10,p:{y:-138.525}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_45,p:{y:-39.25}},{t:this.shape_46,p:{x:33.1,y:-39.25}},{t:this.shape_43,p:{y:-38.3}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_35,p:{y:-134.475}},{t:this.shape_96},{t:this.shape_33,p:{y:-166.625}},{t:this.shape_95},{t:this.shape_31,p:{y:-87.575}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_21,p:{y:-133.4}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_18,p:{y:-134.05}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_10,p:{y:-135}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69}]},9).wait(10));

	// Layer_2
	this.instance = new lib.stars();
	this.instance.setTransform(0.55,-6.8,0.2117,0.2117,0,0,0,298,223.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#221E1F").ss(1,1,1).p("AnkhkQBkBJByAwQC3BNDAADQDDACC5hK");
	this.shape_127.setTransform(-100.3,-130.8974);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#221E1F").ss(1,1,1).p("AgSgCQgBAFACAFQACAFAFADQAKAGAJgGQAIgFACgLQACgMgJgEQgIgEgKAFQgKAFgCAIg");
	this.shape_128.setTransform(-107.0485,-211.8764);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#221E1F").ss(1,1,1).p("AhPAhQALAcAgAMQAcAKAegLQAqgNAOgnQAQgmgagkQgUgagoAEQgiAEgbAWQgSAQgIAWQgIAXAIAWg");
	this.shape_129.setTransform(-106.723,-211.8198);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#221E1F").ss(1,1,1).p("AgSgCQgCAMAKAGQAKAHAJgHQAIgFACgLQACgMgJgEQgIgEgJAFQgLAFgCAIg");
	this.shape_130.setTransform(-67.0559,-211.8139);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#221E1F").ss(1,1,1).p("AhPAhQALAdAgALQAbAKAfgKQAqgOAOgnQAQgmgagkQgUgagoAEQgiAEgbAWQgSAQgIAWQgIAXAIAWg");
	this.shape_131.setTransform(-66.723,-211.7762);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#221E1F").ss(1,1,1).p("AkjAXQCOgsCVgBQCWgBCOAr");
	this.shape_132.setTransform(-84.8,-242.1261);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#221E1F").ss(1,1,1).p("Ak1AMQCYgmCeADQCeADCXAs");
	this.shape_133.setTransform(-84.875,-251.4357);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#221E1F").ss(1,1,1).p("AlnAeIAKgDQDOhADVAJQCUAHCOAq");
	this.shape_134.setTransform(-86.55,-261.3352);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#221E1F").ss(1,1,1).p("AmlAnIAEgBQDEg/C4gLQDXgNDDA6IAxAQ");
	this.shape_135.setTransform(-86,-270.4415);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#221E1F").ss(1,1,1).p("AngA2IAKgFQDfhjD7gCQD8gCDiBg");
	this.shape_136.setTransform(-85.95,-276.852);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#221E1F").ss(1,1,1).p("AhhDDIANhKQAJg0ALgkQAKggAKgYQAKgYAKgRQAZgyAmgkQAdgbAegR");
	this.shape_137.setTransform(-47.15,-252.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#221E1F").ss(1,1,1).p("ABjC/QgCgdgHgkQgMg2gUgxIgOgdQgOgdgRgaQgZgpgkgnQgbgdgXgT");
	this.shape_138.setTransform(-122.925,-252.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#221E1F").ss(1,1,1).p("AgBgEIADAJ");
	this.shape_139.setTransform(-37.6,-272.175);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#221E1F").ss(1,1,1).p("AgCgCIAFAF");
	this.shape_140.setTransform(-43.525,-267.625);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#221E1F").ss(1,1,1).p("AgEgCIAJAF");
	this.shape_141.setTransform(-50.1,-259);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#221E1F").ss(1,1,1).p("AgBAAIACAA");
	this.shape_142.setTransform(-53.75,-249);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#221E1F").ss(1,1,1).p("AgGAAIANAA");
	this.shape_143.setTransform(-116.55,-250.175);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#221E1F").ss(1,1,1).p("AAAgBIABAD");
	this.shape_144.setTransform(-132.975,-271.675);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#221E1F").ss(1,1,1).p("AgjgBIADABQARAMAlgHQAGgBAEgCQAFgEgCgF");
	this.shape_145.setTransform(-179.4983,-125.1744);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#221E1F").ss(1,1,1).p("AAAqxIAAVj");
	this.shape_146.setTransform(-182.8,-193.675);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#221E1F").ss(1,1,1).p("AABqvIgBVf");
	this.shape_147.setTransform(-176.2,-193.825);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#221E1F").ss(1,1,1).p("AgdgFQAMALARAAQASAAAMgL");
	this.shape_148.setTransform(-179.5,-262.475);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#221E1F").ss(1,1,1).p("AgRgtIAjBb");
	this.shape_149.setTransform(-177.875,-267.25);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#221E1F").ss(1,1,1).p("AAQgtQgFASgKAaQgLAagEARIgBAE");
	this.shape_150.setTransform(-181.225,-267.25);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#221E1F").ss(1,1,1).p("AiIiWIEREt");
	this.shape_151.setTransform(-162.475,-156.075);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#221E1F").ss(1,1,1).p("AhziMIDmEZ");
	this.shape_152.setTransform(-164.65,-169.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#221E1F").ss(1,1,1).p("ABHkzIAyHgIhyAAQh1AIgSAoQgTApAlAZIAoARQAvAEA1AAQBDACAmgG");
	this.shape_153.setTransform(-72.1861,-77.2589);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#221E1F").ss(1,1,1).p("AAuEZIgBgDIAAAAQgKgfgokEIgokL");
	this.shape_154.setTransform(-53.5,-83.725);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#221E1F").ss(1,1,1).p("AAUk0IAzHhIhxAAQh2AIgTAoQgSApAkAZIAoARQAvAEA2AAQArABAXgBQAwgDAbgJQASgHAUgNQASgMADgFQALgQgJgdQgOgrhCnO");
	this.shape_155.setTransform(-113.8284,-75.2417);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#221E1F").ss(1,1,1).p("ABAApIh/hQ");
	this.shape_156.setTransform(-101.375,-223.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#221E1F").ss(1,1,1).p("Ag/AoIB/hP");
	this.shape_157.setTransform(-73.6,-222.625);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#221E1F").ss(1,1,1).p("ABKgiQglgGgkAOQgtASgcAt");
	this.shape_158.setTransform(-81.1,-136.6526);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#221E1F").ss(1,1,1).p("ACkgKQgIgbghgRQgSgKghgIQgvgLg2ANQgyANgoAaQgwAfACAfQABAOAKAMQAGAIAGAEQATAOAjgHQBBgNAUgBIAUAAQAUAAA4ALQAgAGAQgOQAQgMAGgXQAGgVgFgTg");
	this.shape_159.setTransform(-90.1225,-139.1228);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#221E1F").ss(1,1,1).p("AANjFQhDABg3A7QgbAegSAlQgqBcAmBMQAYAvAtAbQAwAeAygFQBLgHAxhOQAYgoALgtQAZhigyg/QgBgBgjggQgtgegxAAg");
	this.shape_160.setTransform(-87.7469,-178.8392);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#221E1F").ss(1,1,1).p("AG1FSQAaiFgpiAQgkhxhWhZQgugwhLgzQgigWgkgTQighTitAMQh0AIhqAw");
	this.shape_161.setTransform(-68.2824,-205.2954);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#221E1F").ss(1,1,1).p("AhdqIQhKAihEA1QhkBRhBByQgkBAgbBTQgYBJgJA/QgQBsASBoQALBAAXA7IAJAWQAgBKAvA+QBKBiBlA8QA8AiA5ASQAnANApAHQB2AUCCgYQBEgNBBgZIACgBQAigMAmgUQAcgPAWgO");
	this.shape_162.setTransform(-103.5696,-168.3831);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#BBBDBF").s().p("AghKtIAA1dIABgEIACAAQANALARAAQARAAANgLIABgBIADAFIgDVfQgDADgHABQgNADgKAAQgTAAgMgJg");
	this.shape_163.setTransform(-179.45,-193.7494);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#929496").s().p("AgeAmIgBAAQAEgRAMgZQAKgbAEgSIAhBXIgBAAQgNAMgSAAQgRAAgNgMg");
	this.shape_164.setTransform(-179.5,-266.875);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#3A74B6").s().p("AiIhXIAAh9IDmEZQALA/AXA8IAJAVg");
	this.shape_165.setTransform(-162.475,-162.35);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#3A74B6").s().p("AggCyQgqgHgmgNQg6gRg7gjQhmg8hKhgQgug/gghKQBjBKByAwQC2BNDAACQDDACC5hJQgGA2gGBOQgVAOgdAPQgmATgiANIgCAAQhBAZhEANQhHAOhDAAQg4AAg1gKg");
	this.shape_166.setTransform(-100.3,-122.2331);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#E07DAC").s().p("AnbAeIgDgFIAAAAQDghkD8gCQD7gCDhBgIAFALQgeAQgdAbIgFgGIgygQQjCg6jXAMQi5ALjEBAQgbgdgXgTg");
	this.shape_167.setTransform(-85.25,-274.427);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E07DAC").s().p("AE9BMQiWgtifgDQiegDiXAnIgNABIgOgeQgOgdgRgZQDPhBDUAJQCVAHCNArIABAAIAJAFQgKARgKAXQgKAZgKAgg");
	this.shape_168.setTransform(-85.625,-256.6352);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#D63189").s().p("Ak9ggIANgBQCYgnCeADQCeADCXAtIADABQgLAjgKA0QiNgsiXABQiVABiNAtQgLg2gVgwg");
	this.shape_169.setTransform(-85.375,-246.8107);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#221E1F").s().p("AgKAQQgFgDgCgFQgCgFABgFQACgIAKgFQAKgFAIAEQAJAEgCAMQgCALgIAFQgFADgEAAQgFAAgFgDg");
	this.shape_170.setTransform(-107.0485,-211.8764);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgkBJQgggMgLgcQgIgWAIgXQAIgWASgQQAbgWAigEQAogEAUAaQAaAkgQAmQgOAngqANQgQAGgOAAQgPAAgNgFgAgJgQQgKAFgCAJQgBAEACAFQACAGAFACQAKAHAJgHQAIgFACgKQACgMgJgFQgEgCgEAAQgEAAgGADg");
	this.shape_171.setTransform(-106.723,-211.8198);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#3A74B6").s().p("AgUE2Qg2gBgvgDIgogRQgkgaASgoQATgpB2gIIBxAAIgzngIACgDQAmANAqAHQBCHNAOArQAJAdgLAQQgDAGgSAMQgUANgSAGQgbAKgwACIgoABIgaAAg");
	this.shape_172.setTransform(-113.8284,-75.3917);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#EDC87A").s().p("AgJJQQjBgDi3hNQhygxhjhJIgJgWQgXg7gMhAQgShoARhtQAJg+AXhJQAchTAkhAQBAhyBlhRQBDg1BKgiIAAgBQBrgwB0gIQCsgMChBTQAkATAiAWQBKAzAuAwQBXBZAkByQAoCAgZCEQgOAEgSAGQg8AYg5BAQgfAjgUAhQgrBIgXCRQgEAXgDAdQi1BIi9AAIgJAAgAgqFSQgyAMgoAaQgwAgACAgQABANAKANQAGAHAGAEQATAOAjgHQBBgNAUgBIAUAAQAUABA4AKQAgAGAQgNQAQgNAGgWQAGgWgFgTQgIgcghgRQgSgJghgIQgWgGgXAAQgbAAgdAIgAAYi5QhDAAg3A7QgbAegSAlQgqBdAmBMQAYAuAtAcQAwAdAygFQBLgGAxhPQAYgnALgtQAZhigyhAIgkggQgsgegwAAIgCAAgADlmKQgjAEgbAWQgSAQgIAWQgIAYAIAWQALAdAgALQAbAKAggKQAqgOAOgnQAQgngagkQgRgXghAAIgKABgAiqmLQgjAEgbAWQgSAQgIAXQgIAYAIAVQALAdAgALQAcALAfgLQAqgOAOgmQAQgogagjQgRgXghAAIgKAAg");
	this.shape_173.setTransform(-88.802,-179.9677);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#AA7F77").s().p("AiNBFQgGgEgGgIQgKgMgBgOQgCgfAwgfQAogaAygNQA2gNAwALQAgAIATAKQAgARAIAbQglgFgkAOQguARgcAuIgUAAQgTABhBANQgMACgKAAQgUAAgNgJg");
	this.shape_174.setTransform(-90.254,-139.1228);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#BE5F37").s().p("AACAqQg3gLgVAAQAcgtAugSQAjgOAlAFQAGAUgGAVQgHAWgPAMQgMAJgSAAQgJAAgJgBg");
	this.shape_175.setTransform(-80.9685,-136.0103);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#221E1F").s().p("AgKAQQgKgGACgMQACgIALgFQAJgFAIAEQAJAEgCAMQgCALgIAFQgFADgEAAQgFAAgFgDg");
	this.shape_176.setTransform(-67.0559,-211.8139);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgkBJQgggLgLgdQgIgWAIgXQAIgWASgQQAbgWAigEQAogEAUAaQAaAkgQAmQgOAngqAOQgQAFgOAAQgPAAgNgFgAgJgQQgKAFgCAJQgDAMALAFQAJAHAKgHQAIgFACgKQACgMgJgFQgEgCgEAAQgEAAgGADg");
	this.shape_177.setTransform(-66.723,-211.7762);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E07DAC").s().p("Ag7gHQh0AHhqAwQgCgdgIgiQCNguCWgBQCWgBCNAsIgMBJIgFAJQihhSisAMg");
	this.shape_178.setTransform(-84.8,-238.1761);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#3A74B6").s().p("AgSFHQg2gBgvgDIgogRQgkgaASgoQATgpB2gIIBxAAIgzngIgCgFQAjgNAlgTIApELQApEEAJAfIABAAQg1AqgsAxQgeAEgwAAIgbAAg");
	this.shape_179.setTransform(-67.3361,-79.1339);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#D63189").s().p("AmmgBQDEhAC5gLQDWgNDDA8IAxAQIAGAFQgmAjgaAyIgJgFIgBAAQiNgriVgGQjUgKjPBCQgagqgkgmg");
	this.shape_180.setTransform(-85.525,-266.4915);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#221E1F").ss(0.5,1,1).p("AATgCQADALgLAHQgKAGgJgGQgIgFgCgLQgCgMAJgEQAIgEAKAFQAKAFACAIg");
	this.shape_181.setTransform(109.6491,-214.8264);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#221E1F").ss(1,1,1).p("ABQAhQgLAdggALQgbAKgfgKQgpgOgPgnQgPgmAagkQATgaAoAEQAjAEAaAWQATAQAHAWQAIAXgIAWg");
	this.shape_182.setTransform(109.2946,-214.7762);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#221E1F").ss(0.5,1,1).p("AATgBQACAKgKAHQgKAGgKgGQgIgFgBgLQgCgMAJgEQAIgEAJAFQALAFACAJg");
	this.shape_183.setTransform(69.6559,-214.7592);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#221E1F").ss(1,1,1).p("ABQAhQgLAdggALQgbAKgfgKQgpgOgPgnQgPgmAagkQATgaAoAEQAjAEAaAWQATAPAHAXQAIAXgIAWg");
	this.shape_184.setTransform(69.2945,-214.7012);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#221E1F").ss(1,1,1).p("AEhgfQiSgZiUAUQiVAUiGA+");
	this.shape_185.setTransform(79.625,-241.8944);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#221E1F").ss(1,1,1).p("AEygsQicgSicAZQicAZiPBB");
	this.shape_186.setTransform(78.35,-251.1103);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#221E1F").ss(1,1,1).p("AFlgkIgKgBQjXgkjQAnQiRAciHA9");
	this.shape_187.setTransform(78.725,-260.9833);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#221E1F").ss(1,1,1).p("AGjgmIgEgBQm6hOlYCgIgvAX");
	this.shape_188.setTransform(76.975,-269.6615);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#221E1F").ss(1,1,1).p("AHegkIgLgDQjrhEj5AhQj6AhjSB/");
	this.shape_189.setTransform(76.25,-275.5891);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#221E1F").ss(1,1,1).p("AB8CzIgXhHQgRgygQgjQgOgdgNgYQgLgSgOgTQghgtgqgfQgegWgigN");
	this.shape_190.setTransform(40.65,-248.025);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#221E1F").ss(1,1,1).p("AhGDLQgCgiACggQAEg2AOg1IAJgeQALgiAMgZQATgrAegtQAUgdAXga");
	this.shape_191.setTransform(115.6,-258.825);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#221E1F").ss(1,1,1).p("AABgEIgBAK");
	this.shape_192.setTransform(28.375,-266.45);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#221E1F").ss(1,1,1).p("AACgCIgDAF");
	this.shape_193.setTransform(34.875,-262.75);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#221E1F").ss(1,1,1).p("AAEgCIgHAF");
	this.shape_194.setTransform(42.625,-255.175);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f().s("#221E1F").ss(1,1,1).p("AABAAIgCAB");
	this.shape_195.setTransform(47.6,-245.775);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f().s("#221E1F").ss(1,1,1).p("AAGAAIgMAB");
	this.shape_196.setTransform(109.6,-255.75);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f().s("#221E1F").ss(1,1,1).p("AABgCIgBAF");
	this.shape_197.setTransform(122.875,-279.35);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f().s("#221E1F").ss(1,1,1).p("AAkAEIgDABQgUAMgjgNQgHgCgCgCQgFgFACgE");
	this.shape_198.setTransform(172.3333,-122.8551);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f().s("#221E1F").ss(1,1,1).p("ABYqrIivVX");
	this.shape_199.setTransform(184.325,-190.225);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#221E1F").ss(1,1,1).p("ABXqqIitVV");
	this.shape_200.setTransform(177.775,-191.225);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f().s("#221E1F").ss(1,1,1).p("AAeAAQgNAKgSgCQgSgDgKgM");
	this.shape_201.setTransform(189.85,-259.05);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f().s("#221E1F").ss(1,1,1).p("AAYgrIguBX");
	this.shape_202.setTransform(188.8,-263.85);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#221E1F").ss(1,1,1).p("AgJgvQACATAHAbQAHAbACARIABAF");
	this.shape_203.setTransform(192.125,-263.425);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#221E1F").ss(1,1,1).p("ACEiNIkHEb");
	this.shape_204.setTransform(162.45,-156.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#221E1F").ss(1,1,1).p("AB0iMIjnEZ");
	this.shape_205.setTransform(165.2,-171.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f().s("#221E1F").ss(1,1,1).p("AgXk0IgzHgQA4gEA6AEQB2AIASApQATAoglAaQgSANgWAEIhlAEQhPABh3gH");
	this.shape_206.setTransform(68.0361,-78.9941);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f().s("#221E1F").ss(1,1,1).p("AgrESIAskYQADgSADgTIAAgBIAljl");
	this.shape_207.setTransform(54.225,-86.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f().s("#221E1F").ss(1,1,1).p("AgTkzIgzHgQA4gEA6AEQB2AIASAoQASApgkAZQgSANgWAFIgeABQglACgiABQgxAAgRgBQgwgDgbgJQgKgEgcgQQgRgKgEgHQgLgSAKgbQAPgzBAnG");
	this.shape_208.setTransform(114.3342,-76.95);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#221E1F").ss(1,1,1).p("Ag/AoIB/hP");
	this.shape_209.setTransform(101.875,-224.925);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#221E1F").ss(1,1,1).p("ABAAoIh/hP");
	this.shape_210.setTransform(74.1,-224.325);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#221E1F").ss(1,1,1).p("AhIgiQAlgGAjAOQAvATAaAs");
	this.shape_211.setTransform(81.625,-133.0026);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#221E1F").ss(1,1,1).p("AiigKQAIgbAggRQATgKAggIQAvgLA3ANQAyANAnAaQAwAfgCAfQgBAUgWASQgSAOgkgHQhBgNgUgBQgKgBgKABQgUAAg4ALQgfAGgRgOQgQgMgGgXQgGgVAGgTg");
	this.shape_212.setTransform(90.629,-135.4728);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#221E1F").ss(1,1,1).p("AgMjFQBDABA2A7QAdAfAQAkQAqBdgmBLQgXAvguAbQgvAegzgFQhLgHgwhOQgZgogLgtQgIglABgdQABg3AggoQAOgRAWgQQAsgeAyAAg");
	this.shape_213.setTransform(88.2722,-177.1392);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#221E1F").ss(1,1,1).p("AqCAAQgYiJAnh9QAlhxBWhaQAvgxBKgyIATgMQBFgrBMgaQB1gnB5AIQBXAGBRAcQBsAnBYBIQCfB+BGDXQAXBJAJA/QARBsgSBoQgLA/gYA8IgJAWQggBKgvA/QhJBhhmA8Qg3Agg9AUQgpANgoAHQh3AUiAgYQhDgNhDgZIgBAAQgogQgggR");
	this.shape_214.setTransform(89.3256,-173.0209);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#221E1F").ss(1,1,1).p("AAZAOQgQgIgZgOIgIgF");
	this.shape_215.setTransform(56.125,-115.025);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#D63189").s().p("AnZBKIADgLQDSh+D5giQD5ghDrBEIgBAFQgYAagUAdQm6hPlYCgIguAXIAAABIgFAGQgegWgigNg");
	this.shape_216.setTransform(75.6,-273.3141);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#E07DAC").s().p("AmiAfIAEgGIAAgBIAvgXQFYigG6BPQgfAtgTAqQjXgjjQAnQiRAbiHA/IAAgBIgJAHQghgtgqgfg");
	this.shape_217.setTransform(76.55,-265.5365);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E07DAC").s().p("Ak5ALIADgBQCPhBCdgZQCbgZCcASIANgCQgOA1gDA1QiSgYiVATQiUAUiGA/IAAABQgRgygQgjg");
	this.shape_218.setTransform(78.85,-246.8103);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#221E1F").s().p("AgJAQQgIgFgBgLQgCgMAJgEQAIgEAJAFQALAFACAJQACAKgKAHQgFADgFAAQgEAAgGgDg");
	this.shape_219.setTransform(69.6559,-214.7592);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgVBJQgpgOgPgnQgPgmAagkQATgaAoAEQAjAEAaAWQATAPAHAXQAIAXgIAWQgLAdggALQgNAFgPAAQgOAAgQgFgAgHgRQgJAFACAMQABALAIAFQAKAGAKgGQAKgHgCgLQgCgIgLgFQgGgEgEAAQgEAAgDACg");
	this.shape_220.setTransform(69.2945,-214.7012);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#3A74B6").s().p("Ai0FBIgDgBQAAgVALgSQALgTAUgKQgRgPgWgQIAskPIAGABIACgwIAljlQAgARAnAPIgCAFIgyHgQA3gEA6AEQB2AIATApQASAogkAaQgSANgWAEIhmAEIgSAAQhKAAhqgGg");
	this.shape_221.setTransform(67.8611,-80.8691);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#BE5F37").s().p("AgwAiQgQgMgHgWQgGgVAGgUQAlgFAjAOQAvASAbAtQgVAAg3ALQgJABgIAAQgTAAgLgJg");
	this.shape_222.setTransform(81.475,-132.3603);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#AA7F77").s().p("ABXBMQhBgNgTgBIgUAAQgbgugvgRQgkgOglAFQAIgbAhgRQASgKAhgIQAugLA3ANQAyANAoAaQAwAfgCAfQgCAUgVASQgNAJgUAAQgKAAgMgCg");
	this.shape_223.setTransform(90.779,-135.4728);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#D63189").s().p("AkgAOIAAgBQCGg+CVgUQCUgUCSAZQgCAgACAhIgFAMQhRgbhXgGQh5gIh1AmQhMAahFArg");
	this.shape_224.setTransform(79.625,-238.6194);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#221E1F").s().p("AgIAQQgIgFgCgLQgCgMAJgEQAIgEAKAFQAKAFACAIQADALgLAHQgFADgFAAQgEAAgFgDg");
	this.shape_225.setTransform(109.6491,-214.8264);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#D63189").s().p("AlKAyQgLgSgOgTIAIgHIAAABQCHg+CRgbQDQgoDXAkQgMAZgLAiIgJAeIgNACQicgRibAYQidAZiPBCIgDABQgOgegNgYg");
	this.shape_226.setTransform(77.825,-256.1083);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgVBJQgpgOgPgnQgPgmAagkQATgaAoAEQAjAEAaAWQATAQAHAWQAIAXgIAWQgLAdggALQgNAFgPAAQgOAAgQgFgAgHgRQgJAFACAMQABAKAIAFQAKAHAKgHQALgGgEgLQgCgJgKgFQgGgDgEAAQgEAAgDACg");
	this.shape_227.setTransform(109.2946,-214.7762);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#3A74B6").s().p("AgtE1QgwgCgbgKQgKgEgcgQQgRgKgEgHQgLgRAKgcQAPgzBAnGQAogGApgNIABADIgzHgQA4gEA6AEQB2AIASAoQASApgkAaQgSANgWAEIgeACIhHACQgxAAgRgBg");
	this.shape_228.setTransform(114.3342,-77.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#EDC87A").s().p("AhjKZQhDgNhDgZIgBAAQgogQgggRQgQgIgagPQgHhqgOhVQgXiIgphEIgwhAQg7hBg9gcQgUgIgWgGIABgFQgYiJAnh9QAlhxBWhaQAvgxBKgyIATgMQBFgrBMgaQB1gnB5AIQBXAGBRAcQBsAnBYBIQCfB+BGDXQAXBJAJA/QARBsgSBoQgLA/gYA8IgJAWQggBKgvA/QhJBhhmA8Qg3Agg9AUQgpANgoAHQg3AJg5AAQhBAAhGgNgAARG1QAUABBBANQAkAHASgOQAWgSABgTQACgggwggQgngagygMQg3gOgvAMQggAIgTAJQggARgIAcQgGATAGAWQAGAWAQANQARANAfgGQA4gKAUgBIAJAAIALAAgAh1jQQgWAQgOARQgfAogCA3QgBAdAJAmQALAsAZAoQAwBOBLAHQAyAFAwgeQAugbAXgvQAmhKgqheQgRgkgcgfQg2g7hEgBIgBAAQgxAAgsAegAkLnXQgaAkAPAnQAPAnAqAOQAfAKAcgKQAggLAKgdQAJgWgIgYQgIgXgSgPQgagWgkgEIgMAAQggAAgQAWgACEnXQgaAjAPAoQAPAmAqAOQAgAKAbgKQAggLAKgdQAJgVgIgYQgIgXgSgPQgbgXgjgEIgLAAQggAAgRAXg");
	this.shape_229.setTransform(89.3256,-173.0209);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#3A74B6").s().p("AiBDAQAXg8ALg/IDokaIACAAIgTCWIkCEVg");
	this.shape_230.setTransform(163.15,-164.125);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#BBBDBF").s().p("AhtKsQgIgCgCgDICs1UIADgFIACABQAKANASADQASACANgKIACAAIABAEIiuVSQgJAGgNAAQgPAAgSgHg");
	this.shape_231.setTransform(181.1,-190.8801);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#929496").s().p("AgBAxQgSgCgKgNIgCgBIAshSQACATAHAbQAIAbACARIgCABQgLAIgOAAIgGgBg");
	this.shape_232.setTransform(189.875,-263.225);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#221E1F").ss(0.5,1,1).p("AATgCQADALgLAHQgKAGgJgGQgIgFgCgLQgCgMAJgEQAIgEAKAFQAKAFACAIg");
	this.shape_233.setTransform(109.6491,-214.8264);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#221E1F").ss(0.5,1,1).p("ABQAhQgLAdggALQgbAKgfgKQgpgOgPgnQgPgmAagkQATgaAoAEQAjAEAaAWQATAQAHAWQAIAXgIAWg");
	this.shape_234.setTransform(109.2946,-214.7762);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#221E1F").ss(0.5,1,1).p("AATgBQACAKgKAHQgKAGgKgGQgIgFgBgLQgCgMAJgEQAIgEAJAFQALAFACAJg");
	this.shape_235.setTransform(69.6559,-214.7592);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f().s("#221E1F").ss(0.5,1,1).p("ABQAhQgLAdggALQgbAKgfgKQgpgOgPgnQgPgmAagkQATgaAoAEQAjAEAaAWQATAPAHAXQAIAXgIAWg");
	this.shape_236.setTransform(69.2945,-214.7012);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f().s("#221E1F").ss(1,1,1).p("AEhgfQiSgZiUAUQiVAUiGA+");
	this.shape_237.setTransform(79.625,-241.8944);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f().s("#221E1F").ss(1,1,1).p("AEygsQicgSicAZQicAZiPBB");
	this.shape_238.setTransform(78.35,-251.1103);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f().s("#221E1F").ss(1,1,1).p("AFlgkIgKgBQjXgkjQAnQiRAciHA9");
	this.shape_239.setTransform(78.725,-260.9833);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f().s("#221E1F").ss(1,1,1).p("AGjgmIgEgBQm6hOlYCgIgvAX");
	this.shape_240.setTransform(76.975,-269.6615);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f().s("#221E1F").ss(1,1,1).p("AHegkIgLgDQjrhEj5AhQj6AhjSB/");
	this.shape_241.setTransform(76.25,-275.5891);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f().s("#221E1F").ss(1,1,1).p("AB8CzIgXhHQgRgygQgjQgOgdgNgYQgLgSgOgTQghgtgqgfQgegWgigN");
	this.shape_242.setTransform(40.65,-248.025);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f().s("#221E1F").ss(1,1,1).p("AhGDLQgCgiACggQAEg2AOg1IAJgeQALgiAMgZQATgrAegtQAUgdAXga");
	this.shape_243.setTransform(115.6,-258.825);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f().s("#221E1F").ss(1,1,1).p("AABgEIgBAK");
	this.shape_244.setTransform(28.375,-266.45);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f().s("#221E1F").ss(1,1,1).p("AACgCIgDAF");
	this.shape_245.setTransform(34.875,-262.75);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f().s("#221E1F").ss(1,1,1).p("AAEgCIgHAF");
	this.shape_246.setTransform(42.625,-255.175);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f().s("#221E1F").ss(1,1,1).p("AABAAIgCAB");
	this.shape_247.setTransform(47.6,-245.775);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f().s("#221E1F").ss(1,1,1).p("AAGAAIgMAB");
	this.shape_248.setTransform(109.6,-255.75);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f().s("#221E1F").ss(1,1,1).p("AABgCIgBAF");
	this.shape_249.setTransform(122.875,-279.35);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f().s("#221E1F").ss(1,1,1).p("AAkAEIgDABQgUAMgjgNQgHgCgCgCQgFgFACgE");
	this.shape_250.setTransform(172.3333,-122.8551);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f().s("#221E1F").ss(1,1,1).p("ABYqrIivVX");
	this.shape_251.setTransform(184.325,-190.225);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f().s("#221E1F").ss(1,1,1).p("ABXqqIitVV");
	this.shape_252.setTransform(177.775,-191.225);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f().s("#221E1F").ss(1,1,1).p("AAeAAQgNAKgSgCQgSgDgKgM");
	this.shape_253.setTransform(189.85,-259.05);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f().s("#221E1F").ss(1,1,1).p("AAYgrIguBX");
	this.shape_254.setTransform(188.8,-263.85);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f().s("#221E1F").ss(1,1,1).p("AgJgvQACATAHAbQAHAbACARIABAF");
	this.shape_255.setTransform(192.125,-263.425);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f().s("#221E1F").ss(1,1,1).p("ACEiNIkHEb");
	this.shape_256.setTransform(162.45,-156.9);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f().s("#221E1F").ss(1,1,1).p("AB0iMIjnEZ");
	this.shape_257.setTransform(165.2,-171.4);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#221E1F").ss(1,1,1).p("AgXk0IgzHgQA4gEA6AEQB2AIASApQATAoglAaQgSANgWAEIhlAEQhPABh3gH");
	this.shape_258.setTransform(68.0361,-78.9941);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#221E1F").ss(1,1,1).p("AgrESIAskYQADgSADgTIAAgBIAljl");
	this.shape_259.setTransform(54.225,-86.2);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#221E1F").ss(1,1,1).p("AgTkzIgzHgQA4gEA6AEQB2AIASAoQASApgkAZQgSANgWAFIgeABQglACgiABQgxAAgRgBQgwgDgbgJQgKgEgcgQQgRgKgEgHQgLgSAKgbQAPgzBAnG");
	this.shape_260.setTransform(114.3342,-76.95);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#221E1F").ss(1,1,1).p("Ag/AoIB/hP");
	this.shape_261.setTransform(101.875,-224.925);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#221E1F").ss(1,1,1).p("ABAAoIh/hP");
	this.shape_262.setTransform(74.1,-224.325);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#221E1F").ss(1,1,1).p("AhIgiQAlgGAjAOQAvATAaAs");
	this.shape_263.setTransform(81.625,-133.0026);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#221E1F").ss(1,1,1).p("AiigKQAIgbAggRQATgKAggIQAvgLA3ANQAyANAnAaQAwAfgCAfQgBAUgWASQgSAOgkgHQhBgNgUgBQgKgBgKABQgUAAg4ALQgfAGgRgOQgQgMgGgXQgGgVAGgTg");
	this.shape_264.setTransform(90.629,-135.4728);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#221E1F").ss(1,1,1).p("AgMjFQBDABA2A7QAdAfAQAkQAqBdgmBLQgXAvguAbQgvAegzgFQhLgHgwhOQgZgogLgtQgIglABgdQABg3AggoQAOgRAWgQQAsgeAyAAg");
	this.shape_265.setTransform(88.2722,-177.1392);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#221E1F").ss(1,1,1).p("AqCAAQgYiJAnh9QAlhxBWhaQAvgxBKgyIATgMQBFgrBMgaQB1gnB5AIQBXAGBRAcQBsAnBYBIQCfB+BGDXQAXBJAJA/QARBsgSBoQgLA/gYA8IgJAWQggBKgvA/QhJBhhmA8Qg3Agg9AUQgpANgoAHQh3AUiAgYQhDgNhDgZIgBAAQgogQgggR");
	this.shape_266.setTransform(89.3256,-173.0209);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().rs(["#C8345D","#000024"],[0,1],0,0,0,0,0,134).p("AZvOcMgzdAAAIAA83MAzdAAAg");
	this.shape_267.setTransform(-0.218,9.0423,0.3784,0.3784);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.rf(["#C8345D","#060034"],[0,1],-2,85.2,0,-2,85.2,163.4).s().p("A5uOcIAA83MAzdAAAIAAc3g");
	this.shape_268.setTransform(-0.218,9.0423,0.3784,0.3784);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.instance}]}).wait(19));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-184.1,-285.2,378.2,464.9);


(lib.Background = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.stars();
	this.instance.setTransform(588,262.05,2.7778,2.7778,0,0,0,298,223.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().rs(["#C8345D","#000024"],[0,1],0,0,0,0,0,134).p("AZvOcMgzdAAAIAA83MAzdAAAg");
	this.shape.setTransform(553.1947,310.8789,3.3839,3.3839);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#C8345D","#060034"],[0,1],-2,85.2,0,-2,85.2,163.4).s().p("A5uOcIAA83MAzdAAAIAAc3g");
	this.shape_1.setTransform(553.1947,310.8789,3.3839,3.3839);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Background, new cjs.Rectangle(-260,-211.9,1416.6,849.8), null);


// stage content:
(lib.Untitled1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		stage.enableMouseOver(20);
		
		function random(min, max){
			return Math.floor(Math.random() * (max-min+1) + min);
		}
		
		function random2(min, max){
			return (Math.random() * (max-min+1) + min);
		}
		
		let sam = new lib.Sam();
		let eric = new lib.Eric();
		let ship = new lib.Ship();
		let arrow = new lib.Arrow();
		let screen = new lib.Screen();
		let lolli = new lib.Lollipop();
		let ice = new lib.Ice();
		let don = new lib.Do();
		let continueto3 = false;
		let sweet1 = new lib.Sweet1();
		let sweet2 = new lib.Sweet2();
		let walk = new lib.SamWalk();
		let doman = new lib.DoMan();
		let seconddoman = false;
		let doman2 = new lib.DoMan();
		let txt1 = new lib.Text1();
		let gang = new lib.Gang();
		let txt2 = new lib.Text2();
		let back = new lib.Background();
		let planets = new lib.Planets();
		let speech1 = new lib.Speech1();
		let speech2 = new lib.Speech2();
		let chomp = new lib.Chomp();
		let parkb = new lib.Park_back();
		let sky = new lib.Sky();
		let cap = new lib.CapBar();
		let score = 0;
		let ttxt = new lib.TitleText();
		let ship3 = new lib.Ship3();
		let scale = random2(0.8, 1.6);
		let floor = new lib.Floor();
		let sp = new lib.tooLong();
		let speech11 = new lib.Speech11();
		let score2 = 0;
		let pol1 = new lib.Pol2();
		let pol2 = new lib.Pol1();
		let speech22 = new lib.Speech22();
		let speechPol = new lib.SpeechPol();
		let ship2 = new lib.Ship2();
		let iback = new lib.Ice_back();
		let spIce = new lib.Speech_ice();
		sam.gotoAndStop(0);
		eric.gotoAndStop(0);
		ship.gotoAndStop(0);
		let splose = new lib.Speech_lose();
		let okzoom = true;
		let lastSpeech = new lib.SpeechLast();
		let playOnce1 = true;
		let arNavRight = new lib.arNav();
		let arNavLeft = new lib.arNav2();
		let reset = new lib.Reset();
		
		let mySound1;
		
		//snow sound
		createjs.Sound.registerSound("audio/snow.mp3", "snow");
		//
		
		//impact sound
		createjs.Sound.registerSound("audio/impact.mp3", "impact");
		//
		
		//techno sound
		createjs.Sound.registerSound("audio/techno.mp3", "techno");
		//
		
		//bite sound
		createjs.Sound.registerSound("audio/bite.mp3", "bite");
		//
		
		//ship pass sound
		createjs.Sound.registerSound("audio/shipPassBy.wav", "pass");
		//
		
		//grunt pass sound
		createjs.Sound.registerSound("audio/grunt.mp3", "grunt");
		//
		
		//angry pass sound
		createjs.Sound.registerSound("audio/angry.wav", "angry");
		//
		
		//runsound
		createjs.Sound.registerSound("audio/run.wav", "run");
		//
		
		let q = new createjs.LoadQueue();
		q.installPlugin(createjs.Sound);
		q.addEventListener("complete", activate);
		q.loadManifest([
			{id: "eerie", src:"audio/eerie.mp3"}
		]);
		
		function activate(){
			window.addEventListener("click", doSomething);
		}
		
		function doSomething(){
			console.log("sound loaded");
			mySound1 = createjs.Sound.play("eerie");
			mySound1.on("complete", handleSoundComplete);
		}
		
		function handleSoundComplete(){
			mySound1 = createjs.Sound.play("eerie");
			console.log("sound finish");
		}
		
		stage.addChild(back);
		stage.addChild(sam);
		stage.addChild(eric);
		stage.addChild(ship);
		//stage.addChild(arrow);
		
		sam.scaleX = 5;
		sam.scaleY = 5;
		eric.scaleX = 5;
		eric.scaleY = 5;
		ship.scaleX = 0.1;
		ship.scaleY = 0.1;
		arrow.scaleX = 0.5;
		arrow.scaleY = 0.5;
		
		eric.x = 180;
		eric.y = 320;
		sam.x = 650;
		sam.y = 320;
		ship.x = 400;
		ship.y = 100;
		arrow.x = 800;
		arrow.y = 500;
		
		sam.addEventListener("click", arrowDown);
		eric.addEventListener("click", arrowDown);
		sam.addEventListener("mouseover", handleMouseover);
		sam.addEventListener("mouseout", handleMouseout);
		
		eric.addEventListener("mouseover", handleMouseover2);
		eric.addEventListener("mouseout", handleMouseout2);
		
		//mouse overs//
		function handleMouseover(){
			sam.gotoAndStop(1);
		}
		
		function handleMouseout(){
			sam.gotoAndStop(0);
		}
		
		function handleMouseover2(){
			eric.gotoAndStop(1);
		}
		
		function handleMouseout2(){
			eric.gotoAndStop(0);
		}
		
		function handleMouseover3(){
			ship.gotoAndStop(1);
		}
		
		function handleMouseout3(){
			ship.gotoAndStop(0);
		}
		
		function handleMouseover4(){
			don.gotoAndStop(1);
		}
		
		function handleMouseout4(){
			don.gotoAndStop(0);
		}
		
		function handleMouseover5(){
			lolli.gotoAndStop(1);
		}
		
		function handleMouseout5(){
			lolli.gotoAndStop(0);
		}
		
		function handleMouseover6(){
			ice.gotoAndStop(1);
		}
		
		function handleMouseout6(){
			ice.gotoAndStop(0);
		}
		
		function handleMouseover7(){
			reset.gotoAndStop(1);
		}
		
		function handleMouseout7(){
			reset.gotoAndStop(0);
		}
		/////----------------------------/////
		
		createjs.Ticker.addEventListener("tick", samMove);
		createjs.Ticker.addEventListener("tick", ericMove);
		
		function resetPage(){
			window.location.reload();
		}
		
		function arrowDown(){
			
			sam.gotoAndStop(0);
			eric.gotoAndStop(0);
			
			sam.removeEventListener("mouseover", handleMouseover);
			sam.removeEventListener("mouseout", handleMouseout);
			eric.removeEventListener("mouseover", handleMouseover2);
			eric.removeEventListener("mouseout", handleMouseout2);
			
			ship.addEventListener("mouseover", handleMouseover3);
			ship.addEventListener("mouseout", handleMouseout3);
			
			ship.addEventListener("click", shipDown);
			arrow.removeEventListener("click", arrowDown);
			
			stage.addChild(speech1);
			stage.addChild(speech2);
		
			speech1.scaleX = 2.6;
			speech1.scaleY = 2.6;
			speech2.scaleX = 2.6;
			speech2.scaleY = 2.6;
			
			speech1.x = 630;
			speech1.y = 195;
			
			speech2.x = 130;
			speech2.y = 190;
			
		}
		
		function samMove(){
			if(sam.y <= 320){
				sam.y += 0.2;
			}else{
				createjs.Ticker.removeEventListener("tick", samMove);
				createjs.Ticker.addEventListener("tick", samMoveUp);
			}
		}
		
		function samMoveUp(){
			if(sam.y >= 315){
				sam.y -= 0.2;
			}else{
				createjs.Ticker.addEventListener("tick", samMove);
				createjs.Ticker.removeEventListener("tick", samMoveUp);
			}
		}
		
		function ericMove(){
			if(eric.y <= 310){
				eric.y += 0.2;
			}else{
				createjs.Ticker.removeEventListener("tick", ericMove);
				createjs.Ticker.addEventListener("tick", ericMoveUp);
			}
		}
		
		function ericMoveUp(){
			if(eric.y >= 305){
				eric.y -= 0.2;
			}else{
				createjs.Ticker.addEventListener("tick", ericMove);
				createjs.Ticker.removeEventListener("tick", ericMoveUp);
			}
		}
		
		function shipDown(){
			createjs.Sound.stop("eerie");
			window.removeEventListener("click", doSomething);
			ship.removeEventListener("click", shipDown);
			stage.removeAllChildren();
			
			ship.gotoAndStop(0);
			don.gotoAndStop(0);
			lolli.gotoAndStop(0);
			ice.gotoAndStop(0);
			
			ship.removeEventListener("mouseover", handleMouseover3);
			ship.removeEventListener("mouseout", handleMouseout3);
			
			don.addEventListener("mouseover", handleMouseover4);
			don.addEventListener("mouseout", handleMouseout4);
			lolli.addEventListener("mouseover", handleMouseover5);
			lolli.addEventListener("mouseout", handleMouseout5);
			ice.addEventListener("mouseover", handleMouseover6);
			ice.addEventListener("mouseout", handleMouseout6);
			
			stage.addChild(screen);
			//stage.addChild(arrow);
			stage.addChild(lolli);
			stage.addChild(ice);
			stage.addChild(don);
			stage.addChild(speech22);
			
			speech22.scaleX = 3.5;
			speech22.scaleY = 3.5;
			speech22.x = 650;
			speech22.y = 410;
			
			lolli.scaleX = 1.2;
			lolli.scaleY = 1.2;
			ice.scaleX = 1.4;
			ice.scaleY = 1.4;
			
				
			screen.x = 60;
			screen.y = 50;
			lolli.x = 220;
			lolli.y = 130;
			ice.x = 600;
			ice.y = 200;
			don.x = 370;
			don.y = 260;
			
			
			lolli.rotation = 25;
			ice.rotation = -40;
			
			don.addEventListener("click", donDown);
			ice.addEventListener("click", iceDown);
			lolli.addEventListener("click", lolliDown);
			playOnce1 = true;
			
			createjs.Ticker.addEventListener("tick", moveLolli);
			createjs.Ticker.addEventListener("tick", moveIce);
			createjs.Ticker.addEventListener("tick", moveDon);
		}
		
		function lolliUp(){
			if(lolli.y >= 130){
				lolli.y -= 0.2;
			}else{
				createjs.Ticker.addEventListener("tick", moveLolli);
				createjs.Ticker.removeEventListener("tick", lolliUp);
			}
		}
		
		function moveLolli(){
			if(lolli.y <= 138){
				lolli.y += 0.2;
			}else{
				createjs.Ticker.removeEventListener("tick", moveLolli);
				createjs.Ticker.addEventListener("tick", lolliUp);
			}
		}
		
		function iceUp(){
			if(ice.y >= 200){
				ice.y -= 0.2;
			}else{
				createjs.Ticker.addEventListener("tick", moveIce);
				createjs.Ticker.removeEventListener("tick", iceUp);
			}
		}
		
		function moveIce(){
			if(ice.y <= 208){
				ice.y += 0.2;
			}else{
				createjs.Ticker.removeEventListener("tick", moveIce);
				createjs.Ticker.addEventListener("tick", iceUp);
			}
		}
		
		function donUp(){
			if(don.y >= 260){
				don.y -= 0.2;
			}else{
				createjs.Ticker.addEventListener("tick", moveDon);
				createjs.Ticker.removeEventListener("tick", donUp);
			}
		}
		
		function moveDon(){
			if(don.y <= 268){
				don.y += 0.2;
			}else{
				createjs.Ticker.removeEventListener("tick", moveDon);
				createjs.Ticker.addEventListener("tick", donUp);
			}
		}
		
		function donDown(){
			arrowDown3();
		}
		
		function iceDown(){
			contto5();
		}
		
		function lolliDown(){
			continueto3 = true;
			contto3();
		}
		
		function arrowDown2(){
			alert("Choose a planet");
		}
		
		function contto5(){
			stage.removeAllChildren();
			
			stage.addChild(iback);
			stage.addChild(ship3);
			stage.addChild(spIce);
			
			let playSound = createjs.Sound.play("snow");
			playSound.volume = 0.2;
			
			iback.y = -2;
			
			ship3.scaleX = 0.08;
			ship3.scaleY = 0.08;
			ship3.rotation = 7;
			ship3.x = 250;
			ship3.y = 120;
			
			spIce.scaleX = 2.2;
			spIce.scaleY = 2.2;
			spIce.x = ship3.x - 38;
			spIce.y = ship3.y - 103;
			
			setTimeout(shipDown,5000);
		}
		
		function contto3(){
			if(continueto3 == true){
				stage.removeAllChildren();
				
				let playSound1 = createjs.Sound.play("eerie");
				
				createjs.Ticker.addEventListener("tick", checkForCollision);
				score = 0;
				stage.addChild(back);
				
				stage.addChild(planets);
				
				stage.addChild(ship3);
				//ship.rotation = -15;
				ship3.scaleX = 0.09;
				ship3.scaleY = 0.09;
				ship3.x = 90;
				ship3.y = 260;
				ship3.rotation = 0;
				//ship3.gotoAndStop(0);
				
				planets.x = 700;
				planets.y = 150;
				planets.scaleX = 0.7;
				planets.scaleY = 0.7;
				createjs.Ticker.addEventListener('tick', plan_move);
				
				sweet2.scaleX = 1.7;
				sweet2.scaleY = 1.7;
				sweet1.scaleX = 1.7;
				sweet1.scaleY = 1.7;
				
				stage.addChild(sweet1);
				stage.addChild(sweet2);
				
				//sweet1.rotation = 20;
				//sweet2.rotation = 70;
				
				sweet1.x = 1200;
				sweet1.y = 20;
				sweet2.x = 1800;
				sweet2.y = 280;
				
				window.addEventListener("keydown", handleKeyDown);
				createjs.Ticker.addEventListener("tick", moveSweet);
				createjs.Ticker.addEventListener("tick", removeSweet);
				
				arrow.removeEventListener("click", arrowDown2);
			}
		}
		
		function handleKeyDown(e){
			if(e.keyCode == 38){
				if((ship3.y + (ship3.nominalBounds.height)) <= 870){
				}
				else{
					ship3.y -= 12;
				}
			}else{
				if(e.keyCode == 40){
					if((ship3.y + (ship3.nominalBounds.height)) >= 1400){
					}
					else{
						ship3.y += 12;
					}
				}
			}
		}
		
		function moveSweet(){
			sweet1.x -= 10;
			sweet2.x -= 10;
			//sweet1.rotation -= 0.5;
			//sweet2.rotation += 0.5;
		}
		
		function removeSweet(){
			if((sweet1.x + (sweet1.nominalBounds.width)) <= -150){
				stage.removeChild(sweet1);
				score += 1;
				if(score == 4){
					remSwe();
				}
				addSweet1();
			}
			else if((sweet2.x + (sweet2.nominalBounds.width)) <= -150){
				stage.removeChild(sweet2);
				score += 1;
				if(score == 4){
					remSwe();
				}
				addSweet2();
			}
		}
		
		function addSweet1(){
			stage.addChild(sweet1);
			sweet1.x = random(1020, 1100);
			sweet1.y = random(60, 270);
			//sweet1.rotation = random(0, 360);
			scale = 1.7;
			sweet1.scaleX = scale;
			sweet1.scaleY = scale;
		}
		
		function addSweet2(){
			stage.addChild(sweet2);
			sweet2.x = random(1020, 1100);
			sweet2.y = random(300, 470);
			//sweet2.rotation = random(0, 360);
			let scale = 1.7;
			sweet2.scaleX = scale;
			sweet2.scaleY = scale;
		}
		
		function checkForCollision(){
			ship3Width = ship3.nominalBounds.width * 0.09;
			sweet1Width = sweet1.nominalBounds.width * scale;
			sweet2Width = sweet2.nominalBounds.width * scale;
			ship3Height = ship3.nominalBounds.height * 0.09;
			sweet1Height = sweet1.nominalBounds.height * scale;
			sweet2Height = sweet1.nominalBounds.height * scale;
			
			if((ship3.x + ship3Width - 30) >= (sweet1.x+20)){//left - works fine
				if(ship3.y + ship3Height - 23 >= (sweet1.y)){//sweet up
					if(ship3.y + 23 <= (sweet1.y + sweet1Height)){//sweet down
						if(ship3.x + 10 <= (sweet1.x + sweet1Width)){//back
							playOnceFunc1();
							window.removeEventListener("keydown", handleKeyDown);
							createjs.Ticker.removeEventListener("tick", moveSweet);
							createjs.Ticker.removeEventListener("tick", removeSweet);
							
							stage.addChild(splose);
							
							splose.gotoAndStop(0);
							
							splose.x = ship3.x - 20;
							splose.y = ship3.y - 120;
							
							setTimeout(splosemsg, 4000);
						}
					}
				}
			}
		
			if((ship3.x + ship3Width - 30) >= (sweet2.x+20)){//left - works fine
				if(ship3.y + ship3Height - 23 >= (sweet2.y)){//down
					if(ship3.y + 23 <= (sweet2.y + sweet2Height)){
						if(ship3.x + 10 <= (sweet2.x + sweet2Width)){//back
							playOnceFunc1();
							window.removeEventListener("keydown", handleKeyDown);
							createjs.Ticker.removeEventListener("tick", moveSweet);
							createjs.Ticker.removeEventListener("tick", removeSweet);
							
							stage.addChild(splose);
							
							splose.gotoAndStop(0);
							
							splose.x = ship3.x - 20;
							splose.y = ship3.y - 120;
							
							setTimeout(splosemsg, 4000);
						}
					}
				}
			}
						
		}
		
		function playOnceFunc1(){
			if(playOnce1 == true){
				let playSound = createjs.Sound.play("impact");
				playOnce1 = false;
			}
		}
		
		function arrowDown3(){
			stage.removeAllChildren();
			createjs.Ticker.removeEventListener("tick", moveSweet);
			createjs.Ticker.removeEventListener("tick", removeSweet);
			let playSound = createjs.Sound.play("techno");
			playSound.volume = 0.09;
			
			walk.gotoAndStop(0);
			doman.gotoAndStop(0);
			
			stage.addChild(sky);
			
			stage.addChild(parkb);
			
			stage.addChild(speech11);
			stage.addChild(doman);
			stage.addChild(walk);
			stage.setChildIndex(walk, stage.getNumChildren()-1);
			
			parkb.x = 210;
			parkb.y = 220;
			floor.x = 0;
			floor.y = 500;
			
			walk.scaleX = 1.8;
			walk.scaleY = 1.8;
			walk.x = 200;
			walk.y = 355;
			
			speech11.x = 60;
			speech11.y = 140;
			speech11.scaleX = 2.6;
			speech11.scaleY = 2.6;
			
			doman.scaleX = 1.7;
			doman.scaleY = 1.7;
			doman.x = 700;
			doman.y = 380;
			
			stage.addChild(cap);
			cap.x = 850;
			cap.y = 100;
			
			score2 = 0;
			
			stage.addChild(arNavRight);
			stage.addChild(arNavLeft);
			
			arNavRight.scaleX = 1.5;
			arNavRight.scaleY = 1.5;
			arNavRight.x = 260;
			arNavRight.y = 360;
			
			arNavLeft.scaleX = 1.5;
			arNavLeft.scaleY = 1.5;
			arNavLeft.x = 75;
			arNavLeft.y = 360;
			
			//createjs.Ticker.addEventListener("tick", arrowPop);
			//createjs.Ticker.addEventListener("tick",arrowBackPop);
			
			window.addEventListener("keydown", handleWalkDown);
		}
		
		/*function arrowPop(){
			if(arNavRight.alpha == 1){
				arNavRight.alpha = 0;
				setTimeout(createjs.Ticker.addEventListener("tick", arrowBackPop), 2000);
				createjs.Ticker.removeEventListener("tick", arrowPop);
			}
		}
		
		function arrowBackPop(){
			if(arNavRight.alpha == 0){
				arNavRight.alpha = 1;
				setTimeout(createjs.Ticker.addEventListener("tick", arrowPop), 2000);
				createjs.Ticker.removeEventListener("tick",arrowBackPop);
			}
		}*/
		
		function handleWalkDown(e){
			if(e.keyCode == 39){
				if(walk.x + walk.nominalBounds.width <= 1000){
					stage.removeChild(speech11);
					stage.removeChild(arNavRight);
					stage.removeChild(arNavLeft);
					walk.x += 20;
					walk.scaleX = 1.8;
				}
			}
			else if(e.keyCode == 37){
				if(walk.x + walk.nominalBounds.width >= 100){
					stage.removeChild(speech11);
					walk.x -= 20;
					walk.scaleX = -1.8;
				}
			}
			else if(e.keyCode == 32 && seconddoman == false){
				if((walk.x + (walk.nominalBounds.width)) >= doman.x-90){
					if(walk.x - (walk.nominalBounds.width) <= (doman.x+50)){
						window.removeEventListener("keydown", handleWalkDown);
						stage.addChild(chomp);
						chomp.x = walk.x + 5;
						chomp.y = 370;
						chomp.scaleX = 1.8;
						chomp.scaleY = 1.8;
						walk.gotoAndStop(1);
						doman.gotoAndStop(1);
						
						score2++;
						cap.captions.text = score2;
						
						let playSound = createjs.Sound.play("bite");
						playSound.volume = 0.5;
						
						let playSound2 = createjs.Sound.play("grunt");
						playSound2.volume = 0.7;
					
						if(score2 == 5){
							setTimeout(police(), 3000);
						}else{
							setTimeout(function(){redo();}, 1200);
						}
					}
				}
			}
			else if(e.keyCode == 32 && seconddoman == true){
					if(walk.x + (walk.nominalBounds.width) <= doman2.x+180){
						if(walk.x - (walk.nominalBounds.width) >= (doman2.x-170)){
							window.removeEventListener("keydown", handleWalkDown);
			
							stage.addChild(chomp);
							chomp.x = walk.x + 5;
							chomp.y = 370;
							chomp.scaleX = 1.8;
							chomp.scaleY = 1.8;
							walk.gotoAndStop(1);
							doman2.gotoAndStop(1);
							
							score2++;
							cap.captions.text = score2;
							let playSound = createjs.Sound.play("bite");
							playSound.volume = 0.5;
							
							let playSound2 = createjs.Sound.play("grunt");
							playSound2.volume = 0.7;
						
							if(score2 == 5){
								setTimeout(police(), 3000);
							}else{
								setTimeout(function(){redo2();}, 1200);
							}
						}
					}
				}
		}
		
		function redo(){
			createjs.Ticker.addEventListener("tick", domanRun);
			window.addEventListener("keydown", handleWalkDown);
			stage.removeChild(chomp);
			walk.gotoAndStop(0);
			setTimeout(function(){domanAdd();}, 800);
		}
		
		function redo2(){
			createjs.Ticker.addEventListener("tick", domanRun2);
			window.addEventListener("keydown", handleWalkDown);
			stage.removeChild(chomp);
			walk.gotoAndStop(0);
			setTimeout(function(){domanAdd2();}, 800);
		}
		
		function domanRun(){
			doman.scaleX = -1.7;
			doman.x += 20;
			if((doman.x + (doman.nominalBounds.width)) > 1300){
				stage.removeChild(doman);
			}
		}
		
		function domanRun2(){
			doman2.scaleX = 1.7;
			doman2.x -= 20;
			if((doman2.x + (doman2.nominalBounds.width)) < 0){
				stage.removeChild(doman2);
				seconddoman = false;
			}
		}
		
		function domanAdd(){
			createjs.Ticker.removeEventListener("tick", domanRun2);
			seconddoman = true;
			stage.addChild(doman2);
			stage.setChildIndex(walk, stage.getNumChildren()-1);
			doman2.x = random(100, 300);
			doman2.y = 380;
			doman2.scaleX = -1.7;
			doman2.scaleY = 1.7;
			doman2.gotoAndStop(0);
		}
		
		function domanAdd2(){
			createjs.Ticker.removeEventListener("tick", domanRun);
			stage.addChild(doman);
			stage.setChildIndex(walk, stage.getNumChildren()-1);
			doman.x = random(600, 900);
			doman.y = 380;
			doman.scaleX = 1.6;
			doman.gotoAndStop(0);
		}
		
		function arrow4(){
			window.removeEventListener("keydown", handleWalkDown);
			createjs.Ticker.removeEventListener("tick", domanRun2);
			createjs.Ticker.removeEventListener("tick", domanRun);
			createjs.Ticker.removeEventListener("tick", polRun);
			createjs.Ticker.removeEventListener("tick", polWalk);
			stage.removeAllChildren();
			
			stage.addChild(parkb);
			
			parkb.y = -40;
			stage.addChild(floor);
			floor.y = 400;
			stage.addChild(gang);
			
			//stage.addChild(arrow);
			//arrow.addEventListener('click', zoomed);
			
			playOnceFunc3();
			
			gang.x = 500;
			gang.y = 300;
				
			stage.addChild(lastSpeech);
			
			lastSpeech.x = 180;
			lastSpeech.y = 195;
			lastSpeech.scaleX = 2.5;
			lastSpeech.scaleY = 2.5;
			
			document.getElementById('canvas').addEventListener('mousewheel', onMouseWheel.bind(this));
			document.getElementById('canvas').addEventListener('DOMMouseScroll', onMouseWheel.bind(this));
		
		}
		
		let playOnce3 = true;
		let playSoundSp;
		
		function playOnceFunc3(){
			if(playOnce3 == true){
				playSoundSp = createjs.Sound.play("run", {interrupt: createjs.Sound.INTERRUPT_ANY, loop:-1});
				playSoundSp.volume = 0.7;
				playOnce3 = false;
			}
		}
		
		function onMouseWheel(e){
			let delta;
			
			if(okzoom == true){
			
		     if (e == window.event){
				delta = 1.1 / window.event.wheelDeltaY;
			 }
		     else{
				delta = e.detail / 100;
			 }
				
			if((gang.scaleX -= delta) > 1){
				gang.scaleX -= delta;
				
				gang.scaleY = gang.scaleX;
				
				console.log(gang.scaleX);
				
				if(gang.scaleX > 30){
					zoomed();
				}
			}
			else{
				gang.scaleX = 1;
				gang.scaleY = 1;
				delta = 0;
			}
			}
		}
		
		function zoomed(){
			stage.removeAllChildren();
			createjs.Ticker.removeEventListener("tick", samMove);
			createjs.Ticker.removeEventListener("tick", samMoveUp);
			okzoom = false;
			document.getElementById('canvas').removeEventListener('mousewheel', onMouseWheel);
			document.getElementById('canvas').removeEventListener('DOMMouseScroll', onMouseWheel);
			sam.removeEventListener("click", arrowDown);
			
			playSoundSp.volume = 0;
			let playSound = createjs.Sound.play("pass");
			
			stage.addChild(back);
			stage.addChild(ttxt);
			stage.addChild(sam);
			stage.addChild(ship2);
			stage.addChild(reset);
			reset.addEventListener("mouseover", handleMouseover7);
			reset.addEventListener("mouseout", handleMouseout7);
			reset.gotoAndStop(0);
			reset.x = 830;
			reset.y = 470;
			reset.scaleX = 1.3;
			reset.scaleY = 1.3;
			
			sam.addEventListener("click", phase2);
			sam.addEventListener("mouseover", handleMouseover);
			sam.addEventListener("mouseout", handleMouseout);
		
			reset.addEventListener("click", resetPage);
			
			ttxt.x = 170;
			ttxt.y = 200;
			ttxt.scaleX = 0.5;
			ttxt.scaleY = 0.5;
			ttxt.alpha = 0;
			//ttxt.x = (stage.canvas.width - ttxt.nominalBounds.width * ttxt.scaleX) / 2;
			
			sam.x = 470;
			sam.y = 450;
			sam.scaleX = 2;
			sam.scaleY = 2;
			
			ship2.x = -700;
			ship2.y = 1400;
			ship2.rotation = 120;
			ship2.scaleX = -0.25;
			ship2.scaleY = -0.25;
			
			createjs.Ticker.addEventListener('tick', shipFly);
			setTimeout(textAlpha, 2500);
		}
		
		function textAlpha(){
			createjs.Ticker.addEventListener('tick', txtAlphaa);
		}
		
		function txtAlphaa(){
			ttxt.alpha += 0.01;
		}
		
		function shipFly(){
			if(ship2.y <= -1000){
				stage.removeChild(ship2);
			}else{
				ship2.x += 8;
				ship2.y -= 8;
			}
			
			if(sam.y >= 370){
				sam.y -= 0.15;
			}
		}
		
		function splosemsg(){
			createjs.Ticker.removeEventListener("tick", checkForCollision);
			splose.gotoAndStop(1);
			setTimeout(shipDown, 4000);
		}
		
		function remSwe(){
			stage.addChild(sp);
			console.log(ship3.x);
			console.log(ship3.y);
			sp.x = ship3.x - 20;
			sp.y = ship3.y - 120;
			console.log(sp.y);
			
			window.removeEventListener("keydown", handleKeyDown);
			createjs.Ticker.removeEventListener("tick", moveSweet);
			createjs.Ticker.removeEventListener("tick", removeSweet);
			
			score = 0;
			setTimeout(shipDown, 5000);
			//ship3.gotoAndStop(1);
		}
		
		function police(){
			stage.removeChild(doman);
			stage.removeChild(doman2);
			stage.removeChild(chomp);
			createjs.Ticker.removeEventListener("tick", domanRun);
			createjs.Ticker.removeEventListener("tick", domanRun2);
			window.removeEventListener("keydown", handleWalkDown);
			
			stage.addChild(pol2);
			stage.addChild(pol1);
			
			pol2.gotoAndStop(0);
			pol1.x = -250;
			pol2.x = -100;
			pol1.y = 270;
			pol2.y = 270;
			createjs.Ticker.addEventListener("tick", polWalk);
			
			pol1.scaleX = 2.4;
			pol1.scaleY = 2.4;
			pol2.scaleX = 2.4;
			pol2.scaleY = 2.4;
			
			walk.gotoAndStop(2);
			walk.scaleX = -1.8;
		}
		
		let playOnce2 = true;
		
		function polWalk(){
			if(pol1.x <= 30){
				pol1.x += 10;
				pol2.x += 10;
			}else{
				stage.addChild(speechPol);
				speechPol.x = pol2.x + 60;
				speechPol.y = pol2.y - 50;
				speechPol.scaleX = 2.4;
				speechPol.scaleY = 2.4;
				playOnceFunc2();
				setTimeout(tickerTout, 1500);
			}
		}
		
		function playOnceFunc2(){
			if(playOnce2 == true){
				let playSound = createjs.Sound.play("angry");
				playSound.volume = 0.7;
				
				playOnce2 = false;
			}
		}
		
		function tickerTout(){
			createjs.Ticker.addEventListener("tick", polRun)
		}
		
		function polRun(){
			stage.removeChild(speechPol);
			walk.scaleX = 1.8;
			walk.x += 10;
			pol1.x += 10;
			pol2.x += 10;
			pol2.gotoAndStop(1);
			
			if(pol1.x >= 1050){
				arrow4();
			}
		}
		
		function plan_move(){
			planets.x -= 0.2;
		}
		
		function phase2(){
			let p2 = new lib.Phase2();
			stage.removeAllChildren();
			stage.addChild(p2);
			createjs.Sound.stop("techno");
		}
		
		function endOfGame(){
			alert("end game");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// stageBackground
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("EhPrgwbMCfXAAAMAAABg3MifXAAAg");
	this.shape.setTransform(500,300);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("EhPrAwcMAAAhg3MCfXAAAMAAABg3g");
	this.shape_1.setTransform(500,300);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: '229C8F5BC6CC4583AD1C693AA0EC266E',
	width: 1000,
	height: 600,
	fps: 32,
	color: "#999999",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['229C8F5BC6CC4583AD1C693AA0EC266E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;