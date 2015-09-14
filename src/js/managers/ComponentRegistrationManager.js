goog.provide('mf.managers.ComponentRegistrationManager');
goog.require('mf.components.LikeWidget.Component');


/**
 * @constructor
 * 
 */
mf.managers.ComponentRegistrationManager = function(){
	this.register(new mf.components.LikeWidget.Component());
};
goog.addSingletonGetter(mf.managers.ComponentRegistrationManager);


mf.managers.ComponentRegistrationManager.prototype.register = function(component){
	ko.components.register(component.name, {
		'viewModel': component.viewModel,
		'template': component.template
	})
};
