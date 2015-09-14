goog.provide('app.Application');
goog.require('app.helpers.GccKnockoutHelper');
goog.require('app.managers.ComponentRegistrationManager');



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
 
 	/**
	 * 
	 * @constructor
	 */
    var MyViewModel = function() {
	    this.products = [
	        new Product('Garlic bread'),
	        new Product('Pain au chocolat'),
	        new Product('Seagull spaghetti', 'like') // This one was already 'liked'
	    ];


		ko.exportProperty(this, 'products', this.products);
	}

	 
	ko.applyBindings(new MyViewModel());
};
goog.addSingletonGetter(app.Application);