goog.provide('mf.base.Model');
goog.require('mf.base.EventTarget');



/**
 * @constructor
 * @extends {mf.base.EventTarget}
 */
mf.base.Model = function(){
	goog.base(this);
};
goog.inherits(mf.base.Model, mf.base.EventTarget);
