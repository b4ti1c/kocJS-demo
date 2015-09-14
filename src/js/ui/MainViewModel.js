goog.provide('mf.ui.MainViewModel');
goog.require('mf.entities.Product');



/**
 * @constructor
 *
 */
mf.ui.MainViewModel = function(){
	this.products = [
	        new mf.entities.Product('Garlic bread'),
	        new mf.entities.Product('Pain au chocolat'),
	        new mf.entities.Product('Seagull spaghetti', 'like') // This one was already 'liked'
	    ];

	ko.exportProperty(this, 'products', this.products);  
};

