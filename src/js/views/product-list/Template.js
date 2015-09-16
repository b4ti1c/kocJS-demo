goog.provide('mf.views.ProductList.Template');
goog.require('mf.base.Template');



/**
 * @constructor
 * @extends {mf.base.Template}
 * 
 */
mf.views.ProductList.Template = function(){
	goog.base(this);
};
goog.inherits(mf.views.ProductList.Template, mf.base.Template);


/**
 * 
 * @override
 */
mf.views.ProductList.Template.prototype.templates_base = function(){
	return '<ul data-bind="foreach: products">\
			    <li class="product">\
			        <strong data-bind="text: name"></strong>\
			        <like-widget params="parent: $parent, value: userRating"></like-widget>\
			    </li>\
			</ul>';
};