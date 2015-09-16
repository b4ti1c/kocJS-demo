goog.provide('mf.components.LikeWidget.ViewModel');
goog.require('mf.base.ViewModel');



/**
 * @constructor
 * @extends {mf.base.ViewModel}
 * 
 * @param {Object=} params [description]
 */
mf.components.LikeWidget.ViewModel = function(params){
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
goog.inherits(mf.components.LikeWidget.ViewModel, mf.base.ViewModel);


mf.components.LikeWidget.ViewModel.prototype.like = function() { 
	this.chosenValue('like'); 
    this.dispatchEvent(mf.components.LikeWidget.ViewModel.EventType.GOOD_DECISION);
};


mf.components.LikeWidget.ViewModel.prototype.dislike = function() { 
	this.chosenValue('dislike'); 
    this.dispatchEvent(mf.components.LikeWidget.ViewModel.EventType.BAD_DECISION);
};


/**
 * 
 * @enum {string}
 */
mf.components.LikeWidget.ViewModel.EventType = {
    GOOD_DECISION: 'helikes',
    BAD_DECISION: 'hehates'
};
