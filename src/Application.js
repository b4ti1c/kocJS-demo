goog.provide('app.Application');
goog.require('app.managers.ComponentManager');
goog.require('koc.managers.ViewManager');
goog.require('koc.factories.ViewFactory');
goog.require('app.MainViewModel');



/**
 * The main application class.
 *
 * @constructor
 */
app.Application = function() {
	app.vm = koc.managers.ViewManager.getInstance();
	app.cm = app.managers.ComponentManager.getInstance();	

	app.vf = koc.factories.ViewFactory.getInstance();	
	 
	ko.applyBindings(new app.MainViewModel());
};
goog.addSingletonGetter(app.Application);