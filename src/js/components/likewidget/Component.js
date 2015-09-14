goog.provide('mf.components.LikeWidget.Component');
goog.require('mf.base.Component');
goog.require('mf.components.LikeWidget.ViewModel');
goog.require('mf.components.LikeWidget.Template');

 

/**
 * @constructor
 * @extends {mf.base.Component}
 * 
 */
mf.components.LikeWidget.Component = function(){
	goog.base(this);
};
goog.inherits(mf.components.LikeWidget.Component, mf.base.Component);


/**
 * @override
 */
mf.components.LikeWidget.Component.prototype.name = 'like-widget';


/**
 * @override
 */
mf.components.LikeWidget.Component.prototype.viewModel = mf.components.LikeWidget.ViewModel;


/**
 * @override
 */
mf.components.LikeWidget.Component.prototype.template = (new mf.components.LikeWidget.Template()).template;
