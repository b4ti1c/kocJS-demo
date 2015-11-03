goog.provide('app.components.LikeWidget.Template');
goog.require('app.base.Template');



/**
 * @constructor
 * @extends {app.base.Template}
 * 
 */
app.components.LikeWidget.Template = function(){
	goog.base(this);
};
goog.inherits(app.components.LikeWidget.Template, app.base.Template);


/**
 * 
 * @override
 */
app.components.LikeWidget.Template.prototype.templates_base = function(){
	return '<like-widget>\
				<div class="like-or-dislike" data-bind="visible: !value()">\
		            <button data-bind="click: like">Like it</button>\
		            <button data-bind="click: dislike">Dislike it</button>\
		        </div>\
		        <comment data-bind="text: comment()"></comment>\
		        <div class="result" data-bind="visible: value">\
		            You <strong data-bind="text: value"></strong> it\
		        </div>\
		    </like-widget>';
};