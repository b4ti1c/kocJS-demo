goog.provide('mf.components.LikeWidget.Template');
goog.require('mf.base.Template');



/**
 * @constructor
 * @extends {mf.base.Template}
 * 
 */
mf.components.LikeWidget.Template = function(){
	goog.base(this);
};
goog.inherits(mf.components.LikeWidget.Template, mf.base.Template);


/**
 * 
 * @override
 */
mf.components.LikeWidget.Template.prototype.templates_base = function(){
	return '<div class="like-or-dislike" data-bind="visible: !chosenValue()">\
	            <button data-bind="click: like">Like it</button>\
	            <button data-bind="click: dislike">Dislike it</button>\
	        </div>\
	        <div class="result" data-bind="visible: chosenValue">\
	            You <strong data-bind="text: chosenValue"></strong> it\
	        </div>';
};