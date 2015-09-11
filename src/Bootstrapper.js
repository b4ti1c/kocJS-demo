goog.provide('app.Bootstrapper');
goog.require('app.Application');



/**
 *  
 * 
 * @export
 *
 * Bootstrapper class includes things to do on startup.
 * @constructor
 */
app.Bootstrapper = function(){
	app.Application.getInstance();
};  