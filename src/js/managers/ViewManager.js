goog.provide('app.managers.ViewManager');
goog.require('app.base.Manager');



/**
 * @constructor
 * @extends {app.base.Manager}
 */
app.managers.ViewManager = function(){
	this.history = [];
	this.templates = {};
	this.currentView = ko.observable({});


	/** @constructor */
	ko.templateSources.stringTemplate = function(template, templates) {
	    this.templateName = template;
	    this.templates = templates;
	};

	ko.utils.extend(ko.templateSources.stringTemplate.prototype, {
	    data: function(key, value) {
	        console.log("data", key, value, this.templateName);
	        this.templates._data = this.templates._data || {};
	        this.templates._data[this.templateName] = this.templates._data[this.templateName] || {};
	        
	        if (arguments.length === 1) {
	            return this.templates._data[this.templateName][key];
	        }
	        
	        this.templates._data[this.templateName][key] = value;
	    },
	    text: function(value) {
	        console.log("text", value, this.templateName)
	        if (arguments.length === 0) {
	           return this.templates[this.templateName];
	        } 
	        this.templates[this.templateName] = value;   
	    }
	});

	this.exports = [];
	this.exports.push({
		ref: 'currentView',
		obj: this.currentView
	});

	goog.base(this);
};
goog.inherits(app.managers.ViewManager, app.base.Manager);
goog.addSingletonGetter(app.managers.ViewManager);


/**
 * @protected
 */
app.managers.ViewManager.prototype._createStringTemplateEngine = function(templateEngine, templates){
	templateEngine['makeTemplateSource'] = function(template) {
    	return new ko.templateSources.stringTemplate(template, templates);
	};

    return templateEngine;
};


app.managers.ViewManager.prototype.prepareTemplateEngine = function(templates){
	if(templates) 
		ko.setTemplateEngine(this._createStringTemplateEngine(new ko.nativeTemplateEngine(), templates));
	else 
		ko.setTemplateEngine(this._createStringTemplateEngine(new ko.nativeTemplateEngine(), this.templates));
};


/**
 * 
 * @param {app.base.View} view 
 */
app.managers.ViewManager.prototype.addTemplate = function(view){
	this.templates[view.getName()] = view.getTemplate();
};


/**
 * 
 * @param  {app.base.View} view       New view to show
 * @param  {boolean=} keepInHistory  True or null if view needs to be kept in history, otherwise leave empty
 */
app.managers.ViewManager.prototype.switchToView = function(view, keepInHistory){
	keepInHistory = keepInHistory || true;
	if(keepInHistory) this.history.push(this.currentView());

	this.currentView({
		'name': view.getName(),
		'data': view
	});
};


app.managers.ViewManager.prototype.goBack = function(){
	if(this.history.length < 1) return;

	var oldView = this.history.pop();

	this.currentView({
		'name': oldView.getName(),
		'data': oldView
	});
};
