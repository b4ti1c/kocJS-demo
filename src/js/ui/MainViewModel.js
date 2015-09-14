goog.provide('app.ui.MainViewModel');
goog.require('app.entities.Product');



/**
 * @constructor
 *
 */
app.ui.MainViewModel = function(){
	this.products = [
	        new app.entities.Product('Garlic bread'),
	        new app.entities.Product('Pain au chocolat'),
	        new app.entities.Product('Seagull spaghetti', 'like') // This one was already 'liked'
	    ];

	ko.exportProperty(this, 'products', this.products);  
};

