goog.provide('mf.base.View');
goog.require('mf.base.EventTarget');



/**
 * @constructor
 * @extends {mf.base.EventTarget}
 */
mf.base.View = function(){
	goog.base(this);
};
goog.inherits(mf.base.View, mf.base.EventTarget);


/**
 * The name of the element in DOM and should be overriden by the implementer
 * @protected
 */
mf.base.View.prototype.name = 'default-view';



/**
 * The name of the element in DOM and should be overriden by the implementer
 * @protected
 */
mf.base.View.prototype.template = function(){
	return '<template></template>';
};


mf.base.View.prototype.getName = function(){
	return this.name;
};


mf.base.View.prototype.getTemplate = function(){
	return this.template;
};
