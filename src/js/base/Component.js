goog.provide('mf.base.Component');
goog.require('mf.base.EventTarget');



/**
 * @constructor
 * @extends {mf.base.EventTarget}
 */
mf.base.Component = function() {
    goog.base(this);
};
goog.inherits(mf.base.Component, mf.base.EventTarget);


/**
 * The name of the element in DOM and should be overriden by the implementer
 * @protected
 */
mf.base.Component.prototype.name = 'mf-default';


/**
 * ViewModel that will represent the element in DOM. Should be overriden by the implementer
 * @protected
 */
mf.base.Component.prototype.viewModel = mf.base.ViewModel;


/**
 * The template (captured in a string). It should be overriden by the implementer's template.
 * @protected
 */
mf.base.Component.prototype.template = '<mf-default></mf-default>';