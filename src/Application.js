goog.provide('app.Application');
goog.require('app.helpers.GccKnockoutHelper');
goog.require('app.views.TryoutViewModel');



/**
 * The main application class.
 *
 * @constructor
 */
app.Application = function() {
	ko.applyBindings(new app.views.TryoutViewModel());
};
goog.addSingletonGetter(app.Application);