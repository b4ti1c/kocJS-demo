goog.provide('mf.base.Manager');
goog.require('mf.base.EventTarget');



/**
 * @constructor
 * @extends {mf.base.EventTarget}
 */
mf.base.Manager = function(){
	goog.base(this);
};
goog.inherits(mf.base.Manager, mf.base.EventTarget);
