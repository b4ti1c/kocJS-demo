goog.provide('koc.base.View');
goog.require('koc.base.EventTarget');
goog.require('koc.base.Template');



/**
 * @constructor
 * @extends {koc.base.EventTarget}
 */
koc.base.View = function(){
	goog.base(this);
};
goog.inherits(koc.base.View, koc.base.EventTarget);


/**
 * The name of the element in DOM and should be overriden by the implementer
 * @protected
 */
koc.base.View.prototype.name = 'default-view';


/**
 * The template (captured in a string). Corresponding url should 
 * be provided by the implementer's template.
 * @protected
 */
koc.base.View.prototype.template = koc.base.Template.$getHtmlSync('/lib/kocJS/base/DefaultTemplate.html');


/**
 * This function is called by the ViewManager just after the 
 * corresponding element is rendered in DOM
 * 
 * @param  {Element} elementInfo [description]
 * @param  {koc.base.View} viewModel   [description]
 */
koc.base.View.prototype.afterRender = function(elementInfo, viewModel){
	viewModel.$element = $(elementInfo[0]);
};


koc.base.View.prototype.getName = function(){
	return this.name;
};


koc.base.View.prototype.getTemplate = function(){
	return this.template;
};
