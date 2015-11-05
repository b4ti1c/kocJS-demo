goog.provide('app.components.LikeWidget.ViewModel');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 * 
 * @param {Object} params [description]
 * @param {Element} element
 */
app.components.LikeWidget.ViewModel = function(params, element){
	goog.base(this, params, element);

	this.commentary = ko.observable('Click Me!');

	this.exports.push({ref: 'commentary', obj: this.commentary});
	this.export();
};
goog.inherits(app.components.LikeWidget.ViewModel, app.base.ViewModel);


/**
 * 
 * @expose
 */
app.components.LikeWidget.ViewModel.prototype.like = function() { 
	this['value']('like'); 
    this.dispatchEvent({
    	type: app.components.LikeWidget.ViewModel.EventType.DECISION,
    	value: true
    });
};


/**
 * 
 * @expose
 */
app.components.LikeWidget.ViewModel.prototype.dislike = function() { 
	this['value']('dislike'); 
    this.dispatchEvent({
    	type: app.components.LikeWidget.ViewModel.EventType.DECISION,
    	value: false
    });
};


/**
 * 
 * @param  {string} str
 * @expose
 */
app.components.LikeWidget.ViewModel.prototype.comment = function(str){
	this.commentary(str);
};


/**
 * 
 * @enum {string}
 */
app.components.LikeWidget.ViewModel.EventType = {
    DECISION: 'like-decision',
};
