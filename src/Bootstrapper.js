goog.provide('mf.Bootstrapper');
goog.require('mf.Application');
goog.require('goog.debug.ErrorHandler');
goog.require('goog.events.EventHandler');



/**
 *  
 * 
 * @export
 *
 * Bootstrapper class includes things to do on startup.
 * @constructor
 */
mf.Bootstrapper = function(){
	mf.Application.getInstance();
};  