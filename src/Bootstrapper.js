goog.provide('mf.Bootstrapper');
goog.require('mf.Application');



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