goog.provide('app.managers.ComponentManager');
goog.require('koc.managers.ComponentManager');
goog.require('app.components.LikeWidget.Component');



/**
 * @constructor
 * @extends {koc.managers.ComponentManager}
 */
app.managers.ComponentManager = function(){
	goog.base(this);

	new app.components.LikeWidget.Component();
};
goog.inherits(app.managers.ComponentManager, koc.managers.ComponentManager);
goog.addSingletonGetter(app.managers.ComponentManager);
