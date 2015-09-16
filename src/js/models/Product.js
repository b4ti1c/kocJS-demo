goog.provide('mf.models.Product');
goog.require('mf.base.Model');



/**
 * 
 * @constructor
 * @extends {mf.base.Model}
 *
 * @param {string} name [description]
 * @param {string=} rating [description]
 */
mf.models.Product = function(name, rating) {
    this.name = name;
    this.userRating = ko.observable(rating || null);

    this.exports = [];
    this.exports.push({ref: 'name', obj: this.name});
    this.exports.push({ref: 'userRating', obj: this.userRating});
	
	goog.base(this);
};
goog.inherits(mf.models.Product, mf.base.Model);
