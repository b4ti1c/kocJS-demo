goog.provide('mf.Application');
goog.require('mf.helpers.GccKnockoutHelper');
goog.require('mf.managers.ComponentRegistrationManager');
goog.require('mf.managers.ViewManager');
goog.require('mf.factories.ViewFactory');
goog.require('mf.MainViewModel');



/**
 * The main application class.
 *
 * @constructor
 */
mf.Application = function() {
	mf.vf = mf.factories.ViewFactory.getInstance();
	mf.vm = mf.managers.ViewManager.getInstance();
	
	mf.crm = mf.managers.ComponentRegistrationManager.getInstance();	 
	ko.applyBindings(new mf.MainViewModel());
};
goog.addSingletonGetter(mf.Application);