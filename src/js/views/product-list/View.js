goog.provide('app.views.ProductList.View');
goog.require('koc.base.View');



/**
 * @constructor
 * @extends {koc.base.View}
 *
 * @param {Object} products [description]
 */
app.views.ProductList.View = function(products){
	goog.base(this);

	/** @expose */
	this.products = products;
};
goog.inherits(app.views.ProductList.View, koc.base.View);


/**
 * @override
 */
app.views.ProductList.View.prototype.name = 'productlist-view';


/**
 * @override
 */
app.views.ProductList.View.prototype.template = koc.base.View.$getHtmlSync('/js/views/product-list/ProductList.html');
