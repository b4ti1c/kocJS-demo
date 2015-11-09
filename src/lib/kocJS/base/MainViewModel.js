goog.provide('koc.base.MainViewModel');
goog.require('koc.base.ViewModel');
goog.require('koc.managers.ViewManager');



/**
 * @constructor
 * @extends {koc.base.ViewModel}
 */
koc.base.MainViewModel = function(){	
	goog.base(this);

	this['vm'] = koc.managers.ViewManager.getInstance();
};
goog.inherits(koc.base.MainViewModel, koc.base.ViewModel);

