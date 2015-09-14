goog.provide('mf.base.Template');
goog.require('mf.base.EventTarget');



/**
 * Base class for all markafoni templates.
 * @extends {mf.base.EventTarget}
 * @constructor
 */
mf.base.Template = function() {
	goog.base(this);

	this.template = this.templates_base();
};
goog.inherits(mf.base.Template, mf.base.EventTarget);


/**
 * Retrieves the html element, captured in a string. This method should be overriden by the implementer.
 * @protected
 */
mf.base.Template.prototype.templates_base = function(){
	return '<mf-default></mf-default>';
};
