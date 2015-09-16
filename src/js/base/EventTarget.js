goog.provide('app.base.EventTarget');
goog.require('goog.events.EventTarget');



/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
app.base.EventTarget = function() {
    goog.base(this);

    //this.exports = [];
    this.bindModelEvents();
    this.bindDOMEvents();

    if(!this.exports) this.exports = [];
    this.export();
};
goog.inherits(app.base.EventTarget, goog.events.EventTarget);


/**
 * Listens to the model's events. This method should be overriden by the implementer, and should keep the model's event
 * listeners.
 * @protected
 */
app.base.EventTarget.prototype.bindModelEvents = function() {
};


/**
 * Listens to the DOM's events. This method should be overriden by the implementer, and should keep the model's event
 * listeners.
 * @protected
 */
app.base.EventTarget.prototype.bindDOMEvents = function() {
};


app.base.EventTarget.prototype.export = function(){
	this.exports.forEach(function(item){
		ko.exportProperty(this, item.ref, item.obj);
		console.log('exported ' + item.ref);
	}, this);
};


/**
 * @override
 */
app.base.EventTarget.prototype.disposeInternal = function(){
    goog.base(this, 'disposeInternal');
};
