goog.provide('app.components.LikeWidget.ViewModel');
goog.require('app.base.ViewModel');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 * 
 * @param {Object=} params [description]
 */
app.components.LikeWidget.ViewModel = function(params){
    this.parent = params['parent'];

    this.chosenValue = params ? params['value'] : null;

    this.exports = [
    	{
    		ref: 'chosenValue', 
    		obj: this.chosenValue
    	},
    	{
    		ref: 'like', 
    		obj: this.like
    	},
    	{
    		ref: 'dislike', 
    		obj: this.dislike
    	}
    ];

	goog.base(this);
};
goog.inherits(app.components.LikeWidget.ViewModel, app.base.ViewModel);


app.components.LikeWidget.ViewModel.prototype.like = function() { 
	this.chosenValue('like'); 
    this.dispatchEvent(app.components.LikeWidget.ViewModel.EventType.GOOD_DECISION);
};


app.components.LikeWidget.ViewModel.prototype.dislike = function() { 
	this.chosenValue('dislike'); 
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
