goog.provide('gecko.managers.ComponentManager');
goog.require('app.base.Manager');



/**
 * @constructor
 * @extends {app.base.Manager}
 */
gecko.managers.ComponentManager = function(){
	goog.base(this);
};
goog.inherits(gecko.managers.ComponentManager, app.base.Manager);
goog.addSingletonGetter(gecko.managers.ComponentManager);
