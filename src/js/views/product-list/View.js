goog.provide('mf.views.ProductList.View');
goog.require('mf.base.View');
goog.require('mf.views.ProductList.Template');



/**
 * @constructor
 * @extends {mf.base.View}
 *
 * @param {Object} products [description]
 */
mf.views.ProductList.View = function(products){
	this.products = products;

	this.exports = [{
		ref: 'products',
		obj: this.products
	}]

	goog.base(this);
};
goog.inherits(mf.views.ProductList.View, mf.base.View);


/**
 * @override
 */
mf.views.ProductList.View.prototype.name = 'productlist-view';



/**
 * @override
 */
mf.views.ProductList.View.prototype.template = (new mf.views.ProductList.Template()).template;
