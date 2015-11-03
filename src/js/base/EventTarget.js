goog.provide('app.base.EventTarget');
goog.require('goog.events.EventTarget');



/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
app.base.EventTarget = function() {
    goog.base(this);

    if(!this.listeners) this.listeners = [];

    //this.exports = [];
    setTimeout(this.bindEvents.bind(this), 50);

    if(!this.exports) this.exports = [];
    this.export();
};
goog.inherits(app.base.EventTarget, goog.events.EventTarget);


/**
 * Listens to the model's events. This method should be overriden by the implementer, and should keep the model's event
 * listeners.
 * @protected
 */
app.base.EventTarget.prototype.bindEvents = function() {
};


app.base.EventTarget.prototype.export = function(){
	this.exports.forEach(function(item){
		ko.exportProperty(this, item.ref, item.obj);
	}, this);
};


/**
 * @override
 */
app.base.EventTarget.prototype.disposeInternal = function(){
    this.listeners.forEach(goog.events.unlistenByKey);

    goog.base(this, 'disposeInternal');
};
