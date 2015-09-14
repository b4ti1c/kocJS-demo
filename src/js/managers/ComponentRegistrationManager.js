goog.provide('app.managers.ComponentRegistrationManager');
goog.require('app.components.LikeWidget.Component');


/**
 * @constructor
 * 
 */
app.managers.ComponentRegistrationManager = function(){

	this.register(new app.components.LikeWidget.Component());
};
goog.addSingletonGetter(app.managers.ComponentRegistrationManager);


app.managers.ComponentRegistrationManager.prototype.register = function(component){
	ko.components.register(component.name, {
		'viewModel': component.viewModel,
		'template': component.template
	})
};
