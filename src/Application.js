goog.provide('app.Application');
goog.require('app.managers.ComponentRegistrationManager');
goog.require('app.managers.ViewManager');
goog.require('app.factories.ViewFactory');
goog.require('app.MainViewModel');



/**
 * The main application class.
 *
 * @constructor
 */
app.Application = function() {
	app.vf = app.factories.ViewFactory.getInstance();
	app.vm = app.managers.ViewManager.getInstance();

	app.crm = app.managers.ComponentRegistrationManager.getInstance();	 
	ko.applyBindings(new app.MainViewModel());
};
goog.addSingletonGetter(app.Application);