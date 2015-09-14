goog.provide('mf.entities.Product');
goog.require('mf.base.Entity');



/**
 * 
 * @constructor
 * @extends {mf.base.Entity}
 *
 * @param {string} name [description]
 * @param {string=} rating [description]
 */
mf.entities.Product = function(name, rating) {
    this.name = name;
    this.userRating = ko.observable(rating || null);

    this.exports = [];
    this.exports.push({ref: 'name', obj: this.name});
    this.exports.push({ref: 'userRating', obj: this.userRating});
	
	goog.base(this);
};
goog.inherits(mf.entities.Product, mf.base.Entity);
