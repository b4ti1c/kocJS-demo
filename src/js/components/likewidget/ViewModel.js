goog.provide('app.components.LikeWidget.ViewModel');
goog.require('koc.base.ViewModel');



/**
 * @constructor
 * @extends {koc.base.ViewModel}
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

	/** @expose */
	this.Statuses = app.components.LikeWidget.ViewModel.Statuses;
};
goog.inherits(app.components.LikeWidget.ViewModel, koc.base.ViewModel);


/**
 * @param {string} status [description]
 * @expose
 */
app.components.LikeWidget.ViewModel.prototype.likeStatus = function(status) { 
    this.value(status); 
    this.dispatchEvent({
        type: app.components.LikeWidget.ViewModel.Events.DECISION,
        likeStatus: status
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
app.components.LikeWidget.ViewModel.Events = {
    DECISION: 'like-decision',
};


/**
 * 
 * @enum {string}
 */
app.components.LikeWidget.ViewModel.Statuses = {
	/** @expose */
    LIKE: 'like',
    /** @expose */
    DISLIKE: 'dislike',
};
