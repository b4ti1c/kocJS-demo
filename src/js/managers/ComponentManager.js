goog.provide('app.managers.ComponentManager');
goog.require('app.base.Manager');
goog.require('app.components.LikeWidget.Component');



/**
 * @constructor
 * @extends {app.base.Manager}
 */
app.managers.ComponentManager = function(){
	goog.base(this);

	new app.components.LikeWidget.Component();
};
goog.inherits(app.managers.ComponentManager, app.base.Manager);
goog.addSingletonGetter(app.managers.ComponentManager);
