goog.provide('koc.base.Model');
goog.require('koc.base.EventTarget');



/**
 * @constructor
 * @extends {koc.base.EventTarget}
 */
koc.base.Model = function(){
	goog.base(this);
};
goog.inherits(koc.base.Model, koc.base.EventTarget);
