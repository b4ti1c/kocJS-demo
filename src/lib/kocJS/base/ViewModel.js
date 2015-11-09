goog.provide('koc.base.ViewModel');
goog.require('koc.base.EventTarget');



/**
 * @constructor
 * @extends {koc.base.EventTarget}
 *
 * @param {Object=} params [description]
 * @param {Element=} element
 */
koc.base.ViewModel = function(params, element) {
    params = params || {};
    Object.keys(params).forEach(function(key){
    	this[key] = params[key];
    }, this);

    this.parent = this['parent'] || null;;
	if(this.parent) this.setParentEventTarget(this.parent);

	if(element && element.nodeName == '#comment') this.$element = $(element.nextElementSibling);
    else this.$element = $(element);

	goog.base(this);
};
goog.inherits(koc.base.ViewModel, koc.base.EventTarget);
