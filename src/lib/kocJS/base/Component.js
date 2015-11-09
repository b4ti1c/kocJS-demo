goog.provide('koc.base.Component');
goog.require('koc.base.EventTarget');
goog.require('koc.base.ViewModel');



/**
 * @constructor
 * @extends {koc.base.EventTarget}
 */
koc.base.Component = function() {
    goog.base(this);
    this.register();
};
goog.inherits(koc.base.Component, koc.base.EventTarget);


/**
 * The name of the element in DOM and should be overriden by the implementer
 * @protected
 */
koc.base.Component.prototype.name = 'default-component';


/**
 * ViewModel that will represent the element in DOM. Should be overriden by the implementer
 * @protected
 */
koc.base.Component.prototype.viewModel = koc.base.ViewModel;


/**
 * The template (captured in a string). Corresponding url 
 * should be provided by the implementer's template.
 * @protected
 */
koc.base.Component.prototype.template = koc.base.Component.$getHtmlSync('/lib/kocJS/base/DefaultTemplate.html');


/**
 * Retrieves the html element, captured in a string using a synchronous http request from the localhost.
 * This method gets obscure when production mode (in grunt) is enabled.
 * @expose
 */
koc.base.Component.$getHtmlSync = function(url){
	return $.ajax({type: "GET", url: url, async: false}).responseText;
};


/**
 * 
 * @protected
 */
koc.base.Component.prototype.register = function(){
	var that = this;
	ko.components.register(this.name, {
		'viewModel': {
			'createViewModel': function(params, componentInfo){
				return new that.viewModel(params, componentInfo.element);
			}
		},
		'template': this.template
	});
};
