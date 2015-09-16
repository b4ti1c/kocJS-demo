goog.provide('app.factories.ViewFactory');
goog.require('goog.events.EventTarget');



/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
app.factories.ViewFactory = function(){
};
goog.inherits(app.factories.ViewFactory, goog.events.EventTarget);
goog.addSingletonGetter(app.factories.ViewFactory);


/**
 * Creates views and sets the event hierarchy
 * @param  {?goog.events.EventTarget} parent Parent event target
 * @param  {app.base.View} newView   The newborn view
 * @return {app.base.View}
 */
app.factories.ViewFactory.prototype.createView = function(parent, newView){
	if(parent) newView.setParentEventTarget(parent);
	return newView;
};
