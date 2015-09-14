goog.provide('mf.ui.MainViewModel');
goog.require('mf.base.ViewModel');
goog.require('mf.entities.Product');



/**
 * @constructor
 * @extends {mf.base.ViewModel}
 */
mf.ui.MainViewModel = function(){
	this.products = [
	        new mf.entities.Product('Garlic bread'),
	        new mf.entities.Product('Pain au chocolat'),
	        new mf.entities.Product('Seagull spaghetti', 'like') // This one was already 'liked'
	    ];

	this.exports = [];
	this.exports.push({
		ref: 'products',
		obj: this.products
	});

	goog.base(this);
};
goog.inherits(mf.ui.MainViewModel, mf.base.ViewModel);
