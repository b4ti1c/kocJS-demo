goog.provide('app.views.ProductList.View');
goog.require('app.base.View');



/**
 * @constructor
 * @extends {app.base.View}
 *
 * @param {Object} products [description]
 */
app.views.ProductList.View = function(products){
	goog.base(this);

	/** @expose */
	this.products = products;
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
