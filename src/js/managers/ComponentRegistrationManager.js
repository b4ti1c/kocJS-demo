goog.provide('mf.managers.ComponentRegistrationManager');
goog.require('mf.base.Manager');
goog.require('mf.components.LikeWidget.Component');



/**
 * @constructor
 * @extends {mf.base.Manager}
 */
mf.managers.ComponentRegistrationManager = function(){
	goog.base(this);

	this.register(new mf.components.LikeWidget.Component());
};
goog.inherits(mf.managers.ComponentRegistrationManager, mf.base.Manager);
goog.addSingletonGetter(mf.managers.ComponentRegistrationManager);


mf.managers.ComponentRegistrationManager.prototype.register = function(component){
	ko.components.register(component.name, {
		'viewModel': component.viewModel,
		'template': component.template
	})
};
