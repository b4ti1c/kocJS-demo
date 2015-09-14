goog.provide('mf.components.LikeWidget.ViewModel');



/**
 * @constructor
 *
 * @param {Object=} params [description]
 */
mf.components.LikeWidget.ViewModel = function(params){
    this.chosenValue = params ? params.value : null;

	ko.exportProperty(this, 'chosenValue', this.chosenValue);
	ko.exportProperty(this, 'like', this.like);
	ko.exportProperty(this, 'dislike', this.dislike);
};


mf.components.LikeWidget.ViewModel.prototype.like = function() { 
	this.chosenValue('like'); 
};


mf.components.LikeWidget.ViewModel.prototype.dislike = function() { 
	this.chosenValue('dislike'); 
};
