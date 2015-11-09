goog.provide('koc.base.Template');
goog.require('koc.base.EventTarget');



/**
 * Base class for all markafoni templates.
 * @extends {koc.base.EventTarget}
 * @constructor
 */
koc.base.Template = function() {
	goog.base(this);
};
goog.inherits(koc.base.Template, koc.base.EventTarget);


/**
 * Retrieves the html element, captured in a string using a synchronous http request from the localhost.
 * This method gets obscure when production mode (in grunt) is enabled.
 * @expose
 */
koc.base.Template.$getHtmlSync = function(url){
	return $.ajax({type: "GET", url: url, async: false}).responseText;
};
