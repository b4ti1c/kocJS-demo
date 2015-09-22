goog.provide('app.managers.ComponentRegistrationManager');
goog.require('app.base.Manager');
goog.require('app.components.LikeWidget.Component');



/**
 * @constructor
 * @extends {app.base.Manager}
 */
app.managers.ComponentRegistrationManager = function(){
	goog.base(this);

	this.register(new app.components.LikeWidget.Component());
};
goog.inherits(app.managers.ComponentRegistrationManager, app.base.Manager);
goog.addSingletonGetter(app.managers.ComponentRegistrationManager);


app.managers.ComponentRegistrationManager.prototype.register = function(component){
	ko.components.register(component.name, {
		'viewModel': {
			'createViewModel': function(params, componentInfo){
				return new component.viewModel(params, componentInfo.element);
			}
		},
		'template': component.template
	});
};
