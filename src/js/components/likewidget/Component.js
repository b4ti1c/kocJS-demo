goog.provide('app.components.LikeWidget.Component');
goog.require('app.components.LikeWidget.ViewModel');
goog.require('app.components.LikeWidget.Template');

 

/**
 * @constructor
 * 
 */
app.components.LikeWidget.Component = function(){
	this.name = 'like-widget';
	this.viewModel = app.components.LikeWidget.ViewModel;
	this.template = (new app.components.LikeWidget.Template()).templates_base();
};
