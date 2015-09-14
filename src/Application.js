goog.provide('app.Application');
goog.require('app.helpers.GccKnockoutHelper');
goog.require('app.managers.ComponentRegistrationManager');
goog.require('app.ui.MainViewModel');



/**
 * The main application class.
 *
 * @constructor
 */
app.Application = function() {
	app.managers.ComponentRegistrationManager.getInstance();

	/**
	 * 
	 * @constructor
	 *
	 * @param {string} name [description]
	 * @param {string=} rating [description]
	 */
	var Product = function(name, rating) {
	    this.name = name;
	    this.userRating = ko.observable(rating || null);


		ko.exportProperty(this, 'name', this.name);
		ko.exportProperty(this, 'userRating', this.userRating);
	}
 
 	

	 
	ko.applyBindings(new app.ui.MainViewModel());
};
goog.addSingletonGetter(app.Application);