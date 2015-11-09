goog.provide('koc.factories.ViewFactory');
goog.require('koc.managers.ViewManager');
goog.require('goog.events.EventTarget');



/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
koc.factories.ViewFactory = function(){
	goog.base(this);
};
goog.inherits(koc.factories.ViewFactory, goog.events.EventTarget);
goog.addSingletonGetter(koc.factories.ViewFactory);


/**
 * Creates views and sets the event hierarchy
 * @param  {?goog.events.EventTarget} parent Parent event target
 * @param  {koc.base.View} newView   The newborn view
 * @return {koc.base.View}
 */
koc.factories.ViewFactory.prototype.createView = function(parent, newView){
	if(parent) newView.setParentEventTarget(parent);
	koc.managers.ViewManager.getInstance().addTemplate(newView);
	koc.managers.ViewManager.getInstance().prepareTemplateEngine();
	return newView;
};
