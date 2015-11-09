goog.provide('app.base.Template');
goog.require('app.base.EventTarget');



/**
 * Base class for all markafoni templates.
 * @extends {app.base.EventTarget}
 * @constructor
 */
app.base.Template = function() {
	goog.base(this);
};
goog.inherits(app.base.Template, app.base.EventTarget);


/**
 * Retrieves the html element, captured in a string using a synchronous http request from the localhost.
 * This method gets obscure when production mode (in grunt) is enabled.
 * @expose
 */
app.base.Template.$getHtmlSync = function(url){
	return $.ajax({type: "GET", url: url, async: false}).responseText;
};
