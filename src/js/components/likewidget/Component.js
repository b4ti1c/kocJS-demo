goog.provide('mf.components.LikeWidget.Component');
goog.require('mf.components.LikeWidget.ViewModel');
goog.require('mf.components.LikeWidget.Template');

 

/**
 * @constructor
 * 
 */
mf.components.LikeWidget.Component = function(){
	this.name = 'like-widget';
	this.viewModel = mf.components.LikeWidget.ViewModel;
	this.template = (new mf.components.LikeWidget.Template()).templates_base();
};
