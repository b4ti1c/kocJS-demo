goog.provide('mf.factories.ViewFactory');
goog.require('goog.events.EventTarget');



/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
mf.factories.ViewFactory = function(){
};
goog.inherits(mf.factories.ViewFactory, goog.events.EventTarget);
goog.addSingletonGetter(mf.factories.ViewFactory);


/**
 * Creates views and sets the event hierarchy
 * @param  {?goog.events.EventTarget} parent Parent event target
 * @param  {mf.base.View} newView   The newborn view
 * @return {mf.base.View}
 */
mf.factories.ViewFactory.prototype.createView = function(parent, newView){
	if(parent) newView.setParentEventTarget(parent);
	return newView;
};
