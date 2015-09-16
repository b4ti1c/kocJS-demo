goog.provide('mf.Application');
goog.require('mf.helpers.GccKnockoutHelper');
goog.require('mf.managers.ComponentRegistrationManager');
goog.require('mf.ui.MainViewModel');
goog.require('mf.managers.ViewManager');
goog.require('mf.factories.ViewFactory');



/**
 * The main application class.
 *
 * @constructor
 */
mf.Application = function() {
	ko.applyBindings(new mf.ui.MainViewModel());
	mf.vf = mf.factories.ViewFactory.getInstance();
	mf.vm = mf.managers.ViewManager.getInstance();
	
	mf.crm = mf.managers.ComponentRegistrationManager.getInstance();	 
};
goog.addSingletonGetter(mf.Application);