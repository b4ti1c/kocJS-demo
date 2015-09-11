goog.provide('app.views.TryoutViewModel');
//goog.require('app.helpers.GccKnockoutHelper');


 
/**
 * @constructor
 * 
 */
app.views.TryoutViewModel = function(){
	this.changeColor = function(item, event){
		console.log('something')
		event.target.style.background = '#' + Math.floor(Math.random() * 999999).toString();
		event.target.style.fontSize = Math.max(10,Math.floor(Math.random() * 50)).toString() + 'px';
	}; 

	ko.exportProperty(this, 'changeColor', this.changeColor);
};