goog.provide('koc.managers.ComponentManager');
goog.require('koc.base.Manager');



/**
 * @constructor
 * @extends {koc.base.Manager}
 */
koc.managers.ComponentManager = function(){
	goog.base(this);
};
goog.inherits(koc.managers.ComponentManager, koc.base.Manager);
goog.addSingletonGetter(koc.managers.ComponentManager);
