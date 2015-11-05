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
    
    /** @expose */
    this.value;

    /** @expose */
	this.commentary = ko.observable('Click Me!');
};
goog.inherits(app.components.LikeWidget.ViewModel, app.base.ViewModel);


/**
 * @param {string} status [description]
 * @expose
 */
app.components.LikeWidget.ViewModel.prototype.likeStatus = function(status) { 
    this.value(status); 
    this.dispatchEvent({
        type: app.components.LikeWidget.ViewModel.EventType.DECISION,
        value: status
    });
};


/**
 * 
 * @param {string} str
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


/**
 * 
 * @enum {string}
 */
app.components.LikeWidget.ViewModel.Status = {
    LIKE: 'like',
    DISLIKE: 'dislike',
};
