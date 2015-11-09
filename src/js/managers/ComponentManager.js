goog.provide('app.managers.ComponentManager');
goog.require('gecko.managers.ComponentManager');
goog.require('app.components.LikeWidget.Component');



/**
 * @constructor
 * @extends {gecko.managers.ComponentManager}
 */
app.managers.ComponentManager = function(){
	goog.base(this);

	new app.components.LikeWidget.Component();
};
goog.inherits(app.managers.ComponentManager, gecko.managers.ComponentManager);
goog.addSingletonGetter(app.managers.ComponentManager);
