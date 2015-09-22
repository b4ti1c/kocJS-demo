goog.provide('app.base.View');
goog.require('app.base.EventTarget');



/**
 * @constructor
 * @extends {app.base.EventTarget}
 */
app.base.View = function(){
	goog.base(this);
};
goog.inherits(app.base.View, app.base.EventTarget);


/**
 * The name of the element in DOM and should be overriden by the implementer
 * @protected
 */
app.base.View.prototype.name = 'default-view';



/**
 * The name of the element in DOM and should be overriden by the implementer
 * @protected
 */
app.base.View.prototype.template = function(){
	return '<template></template>';
};


app.base.View.prototype.prepareForDisplay = function(){
};


/**
 * 
 * @param  {Element} elementInfo [description]
 * @param  {app.base.View} viewModel   [description]
 */
app.base.View.prototype.afterRender = function(elementInfo, viewModel){
	viewModel.$element = $(elementInfo[0]);
	viewModel.prepareForDisplay();
};


app.base.View.prototype.getName = function(){
	return this.name;
};


app.base.View.prototype.getTemplate = function(){
	return this.template;
};
