goog.provide('app.components.LikeWidget.Component');
goog.require('app.base.Component');
goog.require('app.components.LikeWidget.ViewModel');
goog.require('app.components.LikeWidget.Template');

 

/**
 * @constructor
 * @extends {app.base.Component}
 * 
 */
app.components.LikeWidget.Component = function(){
	goog.base(this);
};
goog.inherits(app.components.LikeWidget.Component, app.base.Component);


/**
 * @override
 */
app.components.LikeWidget.Component.prototype.name = 'like-widget-component';


/**
 * @override
 */
app.components.LikeWidget.Component.prototype.viewModel = app.components.LikeWidget.ViewModel;


/**
 * @override
 */
app.components.LikeWidget.Component.prototype.template = app.base.Template.$getHtmlSync('/js/components/likewidget/LikeWidget.html');
