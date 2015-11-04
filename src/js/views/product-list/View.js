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
	goog.base(this);

	this.products = products;
	this.exports.push({ref: 'products', obj: this.products});
	this.export();
};
goog.inherits(app.views.ProductList.View, app.base.View);


/**
 * @override
 */
app.views.ProductList.View.prototype.name = 'productlist-view';


/**
 * @override
 */
app.views.ProductList.View.prototype.template = app.base.Template.$getHtmlSync('/js/views/product-list/ProductList.html');
