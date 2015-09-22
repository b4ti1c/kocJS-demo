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
};
goog.inherits(app.components.LikeWidget.ViewModel, app.base.ViewModel);


/**
 * 
 * @expose
 */
app.components.LikeWidget.ViewModel.prototype.like = function() { 
	this['value']('like'); 
    this.dispatchEvent(app.components.LikeWidget.ViewModel.EventType.GOOD_DECISION);
};


/**
 * 
 * @expose
 */
app.components.LikeWidget.ViewModel.prototype.dislike = function() { 
	this['value']('dislike'); 
    this.dispatchEvent(app.components.LikeWidget.ViewModel.EventType.BAD_DECISION);
};


/**
 * 
 * @enum {string}
 */
app.components.LikeWidget.ViewModel.EventType = {
    GOOD_DECISION: 'helikes',
    BAD_DECISION: 'hehates'
};
