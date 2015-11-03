goog.provide('app.views.ProductList.Template');
goog.require('app.base.Template');



/**
 * @constructor
 * @extends {app.base.Template}
 * 
 */
app.views.ProductList.Template = function(){
	goog.base(this);
};
goog.inherits(app.views.ProductList.Template, app.base.Template);


/**
 * 
 * @override
 */
app.views.ProductList.Template.prototype.templates_base = function(){
	return '<ul data-bind="foreach: products">\
			    <li class="product">\
			        <strong data-bind="text: name"></strong>\
			        <!-- ko component: {name: \'like-widget-component\', params: {parent: $parent, value: userRating}} --><!-- /ko -->\
			    </li>\
			</ul>';
};