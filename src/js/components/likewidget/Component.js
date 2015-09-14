goog.provide('app.components.LikeWidget.Component');
goog.require('app.components.LikeWidget.ViewModel');
goog.require('app.components.LikeWidget.Template');

 

/**
 * @constructor
 * 
 */
app.components.LikeWidget.Component = function(){
	//this.name = 'like-widget';
	//this.viewModel = new app.components.LikeWidget.ViewModel();
	//this.template = (new app.components.LikeWidget.Template(this.viewModel)).templates_base();

	ko.components.register('like-widget', {
	    'viewModel': app.components.LikeWidget.ViewModel,
	    'template': (new app.components.LikeWidget.Template).templates_base()
	});
};
goog.addSingletonGetter(app.components.LikeWidget.Component);