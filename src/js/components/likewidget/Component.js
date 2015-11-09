goog.provide('app.components.LikeWidget.Component');
goog.require('koc.base.Component');
goog.require('app.components.LikeWidget.ViewModel');

 

/**
 * @constructor
 * @extends {koc.base.Component}
 * 
 */
app.components.LikeWidget.Component = function(){
	goog.base(this);
};
goog.inherits(app.components.LikeWidget.Component, koc.base.Component);


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
app.components.LikeWidget.Component.prototype.template = koc.base.Component.$getHtmlSync('/js/components/likewidget/LikeWidget.html');
