goog.provide('mf.base.Entity');
goog.require('mf.base.EventTarget');



/**
 * @constructor
 * @extends {mf.base.EventTarget}
 */
mf.base.Entity = function(){
	goog.base(this);
};
goog.inherits(mf.base.Entity, mf.base.EventTarget);
