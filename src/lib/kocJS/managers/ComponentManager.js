goog.provide('koc.managers.ComponentManager');
goog.require('app.base.Manager');



/**
 * @constructor
 * @extends {app.base.Manager}
 */
koc.managers.ComponentManager = function(){
	goog.base(this);
};
goog.inherits(koc.managers.ComponentManager, app.base.Manager);
goog.addSingletonGetter(koc.managers.ComponentManager);
