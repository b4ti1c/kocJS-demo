goog.provide('app.base.Template');
goog.require('app.base.EventTarget');



/**
 * Base class for all markafoni templates.
 * @extends {app.base.EventTarget}
 * @constructor
 */
app.base.Template = function() {
	goog.base(this);

	this.template = this.templates_base();
};
goog.inherits(app.base.Template, app.base.EventTarget);


/**
 * Retrieves the html element, captured in a string. This method should be overriden by the implementer.
 * @protected
 */
app.base.Template.prototype.templates_base = function(){
	return '<default></default>';
};
