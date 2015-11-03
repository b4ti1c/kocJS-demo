goog.provide('app.Application');
goog.require('app.managers.ComponentManager');
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
	app.cm = app.managers.ComponentManager.getInstance();	
	 
	ko.applyBindings(new app.MainViewModel());
};
goog.addSingletonGetter(app.Application);