goog.provide('mf.base.ViewModel');
goog.require('mf.base.EventTarget');



/**
 * @constructor
 * @extends {mf.base.EventTarget}
 * 
 */
mf.base.ViewModel = function() {
    goog.base(this);

    this.parent = this.parent || null;
	if(this.parent) this.setParentEventTarget(this.parent);
};
goog.inherits(mf.base.ViewModel, mf.base.EventTarget);
