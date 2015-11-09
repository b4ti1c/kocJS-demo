goog.provide('koc.base.EventTarget');
goog.require('goog.events.EventTarget');



/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
koc.base.EventTarget = function() {
    goog.base(this);

    if(!this.listeners) this.listeners = [];
    setTimeout(this.bindEvents.bind(this), 50);
};
goog.inherits(koc.base.EventTarget, goog.events.EventTarget);


/**
 * Listens to the model's events. This method should be overriden by the implementer, and should keep the model's event
 * listeners.
 * @protected
 */
koc.base.EventTarget.prototype.bindEvents = function() {
};


/**
 * @override
 */
koc.base.EventTarget.prototype.disposeInternal = function(){
    this.listeners.forEach(goog.events.unlistenByKey);

    goog.base(this, 'disposeInternal');
};
