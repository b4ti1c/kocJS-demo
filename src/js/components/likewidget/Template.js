goog.provide('app.components.LikeWidget.Template');



/**
 * @constructor
 *
 * @param {Object=} viewModel The model that this view represents
 */
app.components.LikeWidget.Template = function(viewModel){
	//this.viewModel = viewModel;
};


app.components.LikeWidget.Template.prototype.templates_base = function(){
	return '<div class="like-or-dislike" data-bind="visible: !chosenValue()">\
	            <button data-bind="click: like">Like it</button>\
	            <button data-bind="click: dislike">Dislike it</button>\
	        </div>\
	        <div class="result" data-bind="visible: chosenValue">\
	            You <strong data-bind="text: chosenValue"></strong> it\
	        </div>';
};