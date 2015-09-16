goog.provide('app.base.ViewModel');
goog.require('app.base.EventTarget');



/**
 * @constructor
 * @extends {app.base.EventTarget}
 * 
 */
app.base.ViewModel = function() {
    goog.base(this);

    this.parent = this.parent || null;
	if(this.parent) this.setParentEventTarget(this.parent);
};
goog.inherits(app.base.ViewModel, app.base.EventTarget);
