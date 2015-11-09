goog.provide('app.base.MainViewModel');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 */
app.base.MainViewModel = function(){	
	goog.base(this);

	this['vm'] = app.vm;
};
goog.inherits(app.base.MainViewModel, app.base.ViewModel);

