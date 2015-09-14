goog.provide('mf.Application');
goog.require('mf.helpers.GccKnockoutHelper');
goog.require('mf.managers.ComponentRegistrationManager');
goog.require('mf.ui.MainViewModel');



/**
 * The main application class.
 *
 * @constructor
 */
mf.Application = function() {
	mf.managers.ComponentRegistrationManager.getInstance();	 
	ko.applyBindings(new mf.ui.MainViewModel());
};
goog.addSingletonGetter(mf.Application);