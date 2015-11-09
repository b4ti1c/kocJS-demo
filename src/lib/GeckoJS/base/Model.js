goog.provide('app.base.Model');
goog.require('app.base.EventTarget');



/**
 * @constructor
 * @extends {app.base.EventTarget}
 */
app.base.Model = function(){
	goog.base(this);
};
goog.inherits(app.base.Model, app.base.EventTarget);
