goog.provide('app.base.Manager');
goog.require('app.base.EventTarget');



/**
 * @constructor
 * @extends {app.base.EventTarget}
 */
app.base.Manager = function(){
	goog.base(this);
};
goog.inherits(app.base.Manager, app.base.EventTarget);
