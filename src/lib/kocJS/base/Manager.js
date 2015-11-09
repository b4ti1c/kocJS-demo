goog.provide('koc.base.Manager');
goog.require('koc.base.EventTarget');



/**
 * @constructor
 * @extends {koc.base.EventTarget}
 */
koc.base.Manager = function(){
	goog.base(this);
};
goog.inherits(koc.base.Manager, koc.base.EventTarget);
