goog.provide('app.views.ProductList.View');
goog.require('app.base.View');
goog.require('app.views.ProductList.Template');



/**
 * @constructor
 * @extends {app.base.View}
 *
 * @param {Object} products [description]
 */
app.views.ProductList.View = function(products){
	this.products = products;

	this.exports = [{
		ref: 'products',
		obj: this.products
	}]

	goog.base(this);
};
goog.inherits(app.views.ProductList.View, app.base.View);


/**
 * @override
 */
app.views.ProductList.View.prototype.name = 'productlist-view';



/**
 * @override
 */
app.views.ProductList.View.prototype.template = (new app.views.ProductList.Template()).template;
